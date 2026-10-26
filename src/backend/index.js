import express from 'express'
import cors from 'cors'
import { httpServerHandler } from 'cloudflare:node'
import { env } from 'cloudflare:workers'

const app = express()
app.use(express.json())

// ---------- CORS (keep the injected domains, they're needed once deployed) ----------
const allowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  env.DEV_DOMAIN,
  env.STAGING_DOMAIN,
  env.PROD_DOMAIN
].filter(Boolean)

app.use(cors({
  origin: (origin, cb) =>
    !origin || allowedOrigins.includes(origin) ? cb(null, true) : cb(new Error('Not allowed by CORS')),
  methods: ['GET', 'OPTIONS']
}))

// ---------- Category -> Geoapify categories ----------
const CATEGORY_MAP = {
  all: 'tourism.sights,tourism.attraction',
  museum: 'entertainment.museum',
  temple: 'tourism.sights.place_of_worship,religion.place_of_worship',
  fort: 'tourism.sights.fort,tourism.sights.castle',
  monument: 'tourism.sights.monument,tourism.sights.memorial',
  viewpoint: 'tourism.attraction.viewpoint',
  park: 'leisure.park',
  historic: 'tourism.sights,heritage',
  // inside CATEGORY_MAP
family: 'entertainment.zoo,entertainment.aquarium,entertainment.theme_park,leisure.playground,leisure.park,tourism.attraction,tourism.sights',
}

// Anything tagged like this is never a "sight", even if it also matched a tourism tag
const BLOCKED_PREFIXES = ['catering', 'accommodation', 'commercial']
const KIND_PREFIXES = ['tourism', 'entertainment', 'religion', 'leisure', 'heritage', 'natural', 'building.historic']

// ---------- helpers ----------
const rad = d => (d * Math.PI) / 180
function distanceM(aLat, aLon, bLat, bLon) {
  const h =
    Math.sin(rad(bLat - aLat) / 2) ** 2 +
    Math.cos(rad(aLat)) * Math.cos(rad(bLat)) * Math.sin(rad(bLon - aLon) / 2) ** 2
  return Math.round(2 * 6371000 * Math.asin(Math.sqrt(h)))
}

function kindLabel(categories = []) {
  const usable = categories.filter(c => KIND_PREFIXES.some(p => c.startsWith(p)))
  if (!usable.length) return 'Place'
  const best = usable.sort((a, b) => b.length - a.length)[0]
  const last = best.split('.').pop().replace(/_/g, ' ')
  return last.charAt(0).toUpperCase() + last.slice(1)
}

// tiny in-memory cache (per Worker isolate), saves API quota
const cache = new Map()
const TTL = 10 * 60 * 1000
const getCached = k => {
  const hit = cache.get(k)
  if (hit && Date.now() - hit.t < TTL) return hit.v
  cache.delete(k)
  return null
}
const setCached = (k, v) => {
  if (cache.size > 200) cache.clear()
  cache.set(k, { t: Date.now(), v })
}

// ---------- GET /api/places?lat&lon&category&radius ----------
app.get('/api/places', async (req, res) => {
  const lat = parseFloat(req.query.lat)
  const lon = parseFloat(req.query.lon)
  if (!Number.isFinite(lat) || !Number.isFinite(lon) || Math.abs(lat) > 90 || Math.abs(lon) > 180) {
    return res.status(400).json({ error: 'Valid lat and lon are required' })
  }
  const category = CATEGORY_MAP[req.query.category] ? req.query.category : 'all'
  const radius = Math.min(Math.max(parseInt(req.query.radius) || 8000, 500), 30000)

  const apiKey = env.GEOAPIFY_KEY
  if (!apiKey) return res.status(500).json({ error: 'Server is missing GEOAPIFY_KEY' })

  const cacheKey = `${lat.toFixed(3)}|${lon.toFixed(3)}|${category}|${radius}`
  const cached = getCached(cacheKey)
  if (cached) return res.json(cached)

  try {
    const url = new URL('https://api.geoapify.com/v2/places')
    url.searchParams.set('categories', CATEGORY_MAP[category])
    url.searchParams.set('filter', `circle:${lon},${lat},${radius}`) // longitude first!
    url.searchParams.set('bias', `proximity:${lon},${lat}`)
    url.searchParams.set('limit', '20') // API max we're allowed
    url.searchParams.set('apiKey', apiKey)

    const upstream = await fetch(url)
    if (!upstream.ok) {
      // don't forward upstream body/URL, it could contain the key
      return res.status(502).json({ error: `Places provider returned ${upstream.status}` })
    }
    const data = await upstream.json()

    const seen = new Set()
    const places = []
    for (const f of data.features || []) {
      const p = f.properties || {}
      const cats = p.categories || []
      const name = p.name || p.name_international?.en
      if (!name || cats.some(c => BLOCKED_PREFIXES.some(b => c.startsWith(b)))) continue
      const key = name.trim().toLowerCase()
      if (seen.has(key)) continue
      seen.add(key)

      const pLat = p.lat ?? f.geometry?.coordinates?.[1]
      const pLon = p.lon ?? f.geometry?.coordinates?.[0]
      if (!Number.isFinite(pLat) || !Number.isFinite(pLon)) continue

      const wiki = p.wiki_and_media?.wikipedia || p.datasource?.raw?.wikipedia || null
      const wikidata = p.wiki_and_media?.wikidata || p.datasource?.raw?.wikidata || null
      const dist = distanceM(lat, lon, pLat, pLon)

      places.push({
        id: `${pLat.toFixed(5)},${pLon.toFixed(5)}`,
        name,
        kind: kindLabel(cats),
        address: p.address_line2 || p.formatted || '',
        lat: pLat,
        lon: pLon,
        distanceM: dist,
        wiki, // like "en:Eiffel Tower", used for descriptions
        website: p.website || p.datasource?.raw?.website || null,
        openingHours: p.opening_hours || null,
        // "notable" places (have a Wikipedia/Wikidata link) rank first
        score: (wiki ? 2 : 0) + (wikidata ? 1 : 0) - dist / radius,
        // inside places.push({ ... })
categories: cats,
wheelchair: p.facilities?.wheelchair ?? null, // true/false when OSM has it, else null
      })
    }
    places.sort((a, b) => b.score - a.score)

    const payload = { category, radius, count: places.length, places }
    setCached(cacheKey, payload)
    res.json(payload)
  } catch (err) {
    res.status(502).json({ error: 'Could not reach places provider' })
  }
})

// ---------- GET /api/weather?lat&lon (Open-Meteo, no key) ----------
app.get('/api/weather', async (req, res) => {
  const lat = parseFloat(req.query.lat)
  const lon = parseFloat(req.query.lon)
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
    return res.status(400).json({ error: 'Valid lat and lon are required' })
  }
  const cacheKey = `w|${lat.toFixed(2)}|${lon.toFixed(2)}`
  const cached = getCached(cacheKey)
  if (cached) return res.json(cached)

  try {
    const url = new URL('https://api.open-meteo.com/v1/forecast')
    url.searchParams.set('latitude', lat)
    url.searchParams.set('longitude', lon)
    url.searchParams.set('daily', 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max')
    url.searchParams.set('timezone', 'auto')
    url.searchParams.set('forecast_days', '3')
    const r = await fetch(url)
    if (!r.ok) return res.status(502).json({ error: 'Weather provider failed' })
    const d = (await r.json()).daily
    const days = d.time.map((date, i) => ({
      date,
      code: d.weather_code[i],
      max: Math.round(d.temperature_2m_max[i]),
      min: Math.round(d.temperature_2m_min[i]),
      rain: d.precipitation_probability_max[i]
    }))
    const payload = { days }
    setCached(cacheKey, payload)
    res.json(payload)
  } catch {
    res.status(502).json({ error: 'Could not reach weather provider' })
  }
})

app.get('/api/health', (_req, res) => res.json({ ok: true }))

app.listen(3000)
export default httpServerHandler({ port: 3000 })