var JE = Object.defineProperty;
var FE = (a, r, i) => r in a ? JE(a, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : a[r] = i;
var _r = (a, r, i) => FE(a, typeof r != "symbol" ? r + "" : r, i);
function WE(a, r) {
  for (var i = 0; i < r.length; i++) {
    const o = r[i];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const c in o)
        if (c !== "default" && !(c in a)) {
          const f = Object.getOwnPropertyDescriptor(o, c);
          f && Object.defineProperty(a, c, f.get ? f : {
            enumerable: !0,
            get: () => o[c]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
function nm(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var dd = { exports: {} }, Xi = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var o0;
function ex() {
  if (o0) return Xi;
  o0 = 1;
  var a = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function i(o, c, f) {
    var d = null;
    if (f !== void 0 && (d = "" + f), c.key !== void 0 && (d = "" + c.key), "key" in c) {
      f = {};
      for (var h in c)
        h !== "key" && (f[h] = c[h]);
    } else f = c;
    return c = f.ref, {
      $$typeof: a,
      type: o,
      key: d,
      ref: c !== void 0 ? c : null,
      props: f
    };
  }
  return Xi.Fragment = r, Xi.jsx = i, Xi.jsxs = i, Xi;
}
var u0;
function tx() {
  return u0 || (u0 = 1, dd.exports = ex()), dd.exports;
}
var k = tx(), md = { exports: {} }, ve = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var s0;
function nx() {
  if (s0) return ve;
  s0 = 1;
  var a = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), d = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), y = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.for("react.activity"), x = Symbol.for("react.view_transition"), w = Symbol.iterator;
  function R(A) {
    return A === null || typeof A != "object" ? null : (A = w && A[w] || A["@@iterator"], typeof A == "function" ? A : null);
  }
  var C = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, T = Object.assign, M = {};
  function Y(A, F, se) {
    this.props = A, this.context = F, this.refs = M, this.updater = se || C;
  }
  Y.prototype.isReactComponent = {}, Y.prototype.setState = function(A, F) {
    if (typeof A != "object" && typeof A != "function" && A != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, A, F, "setState");
  }, Y.prototype.forceUpdate = function(A) {
    this.updater.enqueueForceUpdate(this, A, "forceUpdate");
  };
  function U() {
  }
  U.prototype = Y.prototype;
  function j(A, F, se) {
    this.props = A, this.context = F, this.refs = M, this.updater = se || C;
  }
  var _ = j.prototype = new U();
  _.constructor = j, T(_, Y.prototype), _.isPureReactComponent = !0;
  var X = Array.isArray;
  function q() {
  }
  var P = { H: null, A: null, T: null, S: null }, J = Object.prototype.hasOwnProperty;
  function S(A, F, se) {
    var fe = se.ref;
    return {
      $$typeof: a,
      type: A,
      key: F,
      ref: fe !== void 0 ? fe : null,
      props: se
    };
  }
  function G(A, F) {
    return S(A.type, F, A.props);
  }
  function ee(A) {
    return typeof A == "object" && A !== null && A.$$typeof === a;
  }
  function ae(A) {
    var F = { "=": "=0", ":": "=2" };
    return "$" + A.replace(/[=:]/g, function(se) {
      return F[se];
    });
  }
  var oe = /\/+/g;
  function te(A, F) {
    return typeof A == "object" && A !== null && A.key != null ? ae("" + A.key) : F.toString(36);
  }
  function V(A) {
    switch (A.status) {
      case "fulfilled":
        return A.value;
      case "rejected":
        throw A.reason;
      default:
        switch (typeof A.status == "string" ? A.then(q, q) : (A.status = "pending", A.then(
          function(F) {
            A.status === "pending" && (A.status = "fulfilled", A.value = F);
          },
          function(F) {
            A.status === "pending" && (A.status = "rejected", A.reason = F);
          }
        )), A.status) {
          case "fulfilled":
            return A.value;
          case "rejected":
            throw A.reason;
        }
    }
    throw A;
  }
  function ne(A, F, se, fe, Ce) {
    var Re = typeof A;
    (Re === "undefined" || Re === "boolean") && (A = null);
    var Oe = !1;
    if (A === null) Oe = !0;
    else
      switch (Re) {
        case "bigint":
        case "string":
        case "number":
          Oe = !0;
          break;
        case "object":
          switch (A.$$typeof) {
            case a:
            case r:
              Oe = !0;
              break;
            case v:
              return Oe = A._init, ne(
                Oe(A._payload),
                F,
                se,
                fe,
                Ce
              );
          }
      }
    if (Oe)
      return Ce = Ce(A), Oe = fe === "" ? "." + te(A, 0) : fe, X(Ce) ? (se = "", Oe != null && (se = Oe.replace(oe, "$&/") + "/"), ne(Ce, F, se, "", function(kt) {
        return kt;
      })) : Ce != null && (ee(Ce) && (Ce = G(
        Ce,
        se + (Ce.key == null || A && A.key === Ce.key ? "" : ("" + Ce.key).replace(
          oe,
          "$&/"
        ) + "/") + Oe
      )), F.push(Ce)), 1;
    Oe = 0;
    var ie = fe === "" ? "." : fe + ":";
    if (X(A))
      for (var me = 0; me < A.length; me++)
        fe = A[me], Re = ie + te(fe, me), Oe += ne(
          fe,
          F,
          se,
          Re,
          Ce
        );
    else if (me = R(A), typeof me == "function")
      for (A = me.call(A), me = 0; !(fe = A.next()).done; )
        fe = fe.value, Re = ie + te(fe, me++), Oe += ne(
          fe,
          F,
          se,
          Re,
          Ce
        );
    else if (Re === "object") {
      if (typeof A.then == "function")
        return ne(
          V(A),
          F,
          se,
          fe,
          Ce
        );
      throw F = String(A), Error(
        "Objects are not valid as a React child (found: " + (F === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : F) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Oe;
  }
  function W(A, F, se) {
    if (A == null) return A;
    var fe = [], Ce = 0;
    return ne(A, fe, "", "", function(Re) {
      return F.call(se, Re, Ce++);
    }), fe;
  }
  function Q(A) {
    if (A._status === -1) {
      var F = A._result, se = F();
      se.then(
        function(fe) {
          (A._status === 0 || A._status === -1) && (A._status = 1, A._result = fe, se.status === void 0 && (se.status = "fulfilled", se.value = fe));
        },
        function(fe) {
          (A._status === 0 || A._status === -1) && (A._status = 2, A._result = fe, se.status === void 0 && (se.status = "rejected", se.reason = fe));
        }
      ), A._status === -1 && (A._status = 0, A._result = se);
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var le = typeof reportError == "function" ? reportError : function(A) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var F = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof A == "object" && A !== null && typeof A.message == "string" ? String(A.message) : String(A),
        error: A
      });
      if (!window.dispatchEvent(F)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", A);
      return;
    }
    console.error(A);
  };
  function Se(A) {
    var F = P.T, se = {};
    se.types = F !== null ? F.types : null, P.T = se;
    try {
      var fe = A(), Ce = P.S;
      Ce !== null && Ce(se, fe), typeof fe == "object" && fe !== null && typeof fe.then == "function" && fe.then(q, le);
    } catch (Re) {
      le(Re);
    } finally {
      F !== null && se.types !== null && (F.types = se.types), P.T = F;
    }
  }
  function He(A) {
    var F = P.T;
    if (F !== null) {
      var se = F.types;
      se === null ? F.types = [A] : se.indexOf(A) === -1 && se.push(A);
    } else Se(He.bind(null, A));
  }
  var et = {
    map: W,
    forEach: function(A, F, se) {
      W(
        A,
        function() {
          F.apply(this, arguments);
        },
        se
      );
    },
    count: function(A) {
      var F = 0;
      return W(A, function() {
        F++;
      }), F;
    },
    toArray: function(A) {
      return W(A, function(F) {
        return F;
      }) || [];
    },
    only: function(A) {
      if (!ee(A))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return A;
    }
  };
  return ve.Activity = g, ve.Children = et, ve.Component = Y, ve.Fragment = i, ve.Profiler = c, ve.PureComponent = j, ve.StrictMode = o, ve.Suspense = p, ve.ViewTransition = x, ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P, ve.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(A) {
      return P.H.useMemoCache(A);
    }
  }, ve.addTransitionType = He, ve.cache = function(A) {
    return function() {
      return A.apply(null, arguments);
    };
  }, ve.cacheSignal = function() {
    return null;
  }, ve.cloneElement = function(A, F, se) {
    if (A == null)
      throw Error(
        "The argument must be a React element, but you passed " + A + "."
      );
    var fe = T({}, A.props), Ce = A.key;
    if (F != null)
      for (Re in F.key !== void 0 && (Ce = "" + F.key), F)
        !J.call(F, Re) || Re === "key" || Re === "__self" || Re === "__source" || Re === "ref" && F.ref === void 0 || (fe[Re] = F[Re]);
    var Re = arguments.length - 2;
    if (Re === 1) fe.children = se;
    else if (1 < Re) {
      for (var Oe = Array(Re), ie = 0; ie < Re; ie++)
        Oe[ie] = arguments[ie + 2];
      fe.children = Oe;
    }
    return S(A.type, Ce, fe);
  }, ve.createContext = function(A) {
    return A = {
      $$typeof: d,
      _currentValue: A,
      _currentValue2: A,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, A.Provider = A, A.Consumer = {
      $$typeof: f,
      _context: A
    }, A;
  }, ve.createElement = function(A, F, se) {
    var fe, Ce = {}, Re = null;
    if (F != null)
      for (fe in F.key !== void 0 && (Re = "" + F.key), F)
        J.call(F, fe) && fe !== "key" && fe !== "__self" && fe !== "__source" && (Ce[fe] = F[fe]);
    var Oe = arguments.length - 2;
    if (Oe === 1) Ce.children = se;
    else if (1 < Oe) {
      for (var ie = Array(Oe), me = 0; me < Oe; me++)
        ie[me] = arguments[me + 2];
      Ce.children = ie;
    }
    if (A && A.defaultProps)
      for (fe in Oe = A.defaultProps, Oe)
        Ce[fe] === void 0 && (Ce[fe] = Oe[fe]);
    return S(A, Re, Ce);
  }, ve.createRef = function() {
    return { current: null };
  }, ve.forwardRef = function(A) {
    return { $$typeof: h, render: A };
  }, ve.isValidElement = ee, ve.lazy = function(A) {
    return {
      $$typeof: v,
      _payload: { _status: -1, _result: A },
      _init: Q
    };
  }, ve.memo = function(A, F) {
    return {
      $$typeof: y,
      type: A,
      compare: F === void 0 ? null : F
    };
  }, ve.startTransition = Se, ve.unstable_useCacheRefresh = function() {
    return P.H.useCacheRefresh();
  }, ve.use = function(A) {
    return P.H.use(A);
  }, ve.useActionState = function(A, F, se) {
    return P.H.useActionState(A, F, se);
  }, ve.useCallback = function(A, F) {
    return P.H.useCallback(A, F);
  }, ve.useContext = function(A) {
    return P.H.useContext(A);
  }, ve.useDebugValue = function() {
  }, ve.useDeferredValue = function(A, F) {
    return P.H.useDeferredValue(A, F);
  }, ve.useEffect = function(A, F) {
    return P.H.useEffect(A, F);
  }, ve.useEffectEvent = function(A) {
    return P.H.useEffectEvent(A);
  }, ve.useId = function() {
    return P.H.useId();
  }, ve.useImperativeHandle = function(A, F, se) {
    return P.H.useImperativeHandle(A, F, se);
  }, ve.useInsertionEffect = function(A, F) {
    return P.H.useInsertionEffect(A, F);
  }, ve.useLayoutEffect = function(A, F) {
    return P.H.useLayoutEffect(A, F);
  }, ve.useMemo = function(A, F) {
    return P.H.useMemo(A, F);
  }, ve.useOptimistic = function(A, F) {
    return P.H.useOptimistic(A, F);
  }, ve.useReducer = function(A, F, se) {
    return P.H.useReducer(A, F, se);
  }, ve.useRef = function(A) {
    return P.H.useRef(A);
  }, ve.useState = function(A) {
    return P.H.useState(A);
  }, ve.useSyncExternalStore = function(A, F, se) {
    return P.H.useSyncExternalStore(
      A,
      F,
      se
    );
  }, ve.useTransition = function() {
    return P.H.useTransition();
  }, ve.version = "19.3.1", ve;
}
var c0;
function am() {
  return c0 || (c0 = 1, md.exports = nx()), md.exports;
}
var E = am();
const he = /* @__PURE__ */ nm(E), us = /* @__PURE__ */ WE({
  __proto__: null,
  default: he
}, [E]), kd = [
  { id: "all", label: "All", emoji: "✨", re: null },
  { id: "museum", label: "Museums", emoji: "🏛️", re: /museum|galler/ },
  { id: "temple", label: "Temples", emoji: "🛕", re: /temple|shrine|mosque|church|cathedral|gurdwara|monaster/ },
  { id: "fort", label: "Forts", emoji: "🏰", re: /\bforts?\b|castle|palace/ },
  { id: "monument", label: "Monuments", emoji: "🗿", re: /monument|memorial|statue/ },
  { id: "viewpoint", label: "Viewpoints", emoji: "🌄", re: /viewpoint|view point|lookout/ },
  { id: "park", label: "Parks", emoji: "🌳", re: /\bparks?\b|garden/ },
  { id: "historic", label: "Historic", emoji: "📜", re: /histor|heritage|ruins|archaeolog/ }
], f0 = [
  { id: "any", label: "Anyone", emoji: "🧭", blurb: "", stops: 9, pen: 0 },
  {
    id: "kids",
    label: "Kids",
    emoji: "🧒",
    blurb: "Fun, open spaces and short walks.",
    stops: 4,
    pen: 1.5,
    w: { fun: 4, park: 3, fort: 2, viewpoint: 1, museum: 1, monument: 0, temple: 0, other: 1 },
    why: { fun: "Made for kids: animals or rides", park: "Space to run around", fort: "Room to explore", museum: "Indoor, good on hot or wet days" }
  },
  {
    id: "teens",
    label: "Friends",
    emoji: "🎒",
    blurb: "Views, photo spots and exploring.",
    stops: 6,
    pen: 0.3,
    w: { fun: 3, viewpoint: 3, fort: 2, park: 2, museum: 1, monument: 1, temple: 1, other: 1 },
    why: { viewpoint: "Great for photos", fort: "Fun to explore", fun: "Good group activity" }
  },
  {
    id: "adults",
    label: "Adults",
    emoji: "🧑",
    blurb: "History, culture and landmarks.",
    stops: 8,
    pen: 0.2,
    w: { museum: 2, monument: 2, fort: 2, viewpoint: 2, temple: 1, park: 1, fun: 0, other: 1 },
    why: { museum: "Rich in history and culture", monument: "Iconic landmark", fort: "Historic architecture" }
  },
  {
    id: "seniors",
    label: "Seniors",
    emoji: "🧓",
    blurb: "Relaxed pace, nearby places, step-free first when known.",
    stops: 3,
    pen: 2,
    wheel: !0,
    w: { park: 3, museum: 3, temple: 2, monument: 2, other: 1, viewpoint: 0, fort: 0, fun: 0 },
    why: { park: "Gentle walk with places to sit", museum: "Indoors with seating", temple: "Peaceful and usually close", monument: "Easy to see without much walking" }
  },
  {
    id: "family",
    label: "Family",
    emoji: "👨‍👩‍👧",
    blurb: "Something for every age.",
    stops: 4,
    pen: 1,
    w: { fun: 3, park: 3, museum: 2, fort: 2, viewpoint: 1, temple: 1, monument: 1, other: 1 },
    why: { fun: "Fun for all ages", park: "Space for everyone", museum: "Good indoor option" }
  }
];
function ax(a) {
  const r = `${(a.categories || []).join(" ")} ${a.kind}`.toLowerCase();
  return /zoo|aquarium|theme_park|amusement|playground/.test(r) ? "fun" : /museum|galler/.test(r) ? "museum" : /worship|temple|church|mosque|shrine/.test(r) ? "temple" : /fort|castle|palace/.test(r) ? "fort" : /viewpoint|tower/.test(r) ? "viewpoint" : /park|garden|natural|beach/.test(r) ? "park" : /monument|memorial|archaeolog|ruins|historic|heritage/.test(r) ? "monument" : "other";
}
function lx(a, r, i) {
  return r.id === "any" ? a : a.map((o) => {
    var h;
    const c = ax(o), f = r.w[c] ?? 1, d = r.wheel && o.wheelchair === !0 ? 1 : 0;
    return { ...o, fit: f, why: (h = r.why) == null ? void 0 : h[c], aScore: o.score + f - r.pen * (o.distanceM / i) + d };
  }).sort((o, c) => c.aScore - o.aScore);
}
const d0 = (a = "") => {
  var i;
  const r = a.toLowerCase();
  return ((i = kd.find((o) => o.re && o.re.test(r))) == null ? void 0 : i.id) || "all";
}, Pi = (a) => a * Math.PI / 180;
function $d(a, r) {
  const i = Math.sin(Pi(r.lat - a.lat) / 2) ** 2 + Math.cos(Pi(a.lat)) * Math.cos(Pi(r.lat)) * Math.sin(Pi(r.lon - a.lon) / 2) ** 2;
  return 2 * 6371e3 * Math.asin(Math.sqrt(i));
}
const $r = (a) => a < 1e3 ? `${Math.round(a / 10) * 10} m` : `${(a / 1e3).toFixed(a < 1e4 ? 1 : 0)} km`;
function rx(a) {
  var h, p;
  const r = Array.isArray(a) ? a[0] : a;
  if (!r) return null;
  const o = (Array.isArray(r.entities) ? r.entities : [r]).find((y) => {
    var v, g;
    return ((g = (v = y == null ? void 0 : y.entityInfo) == null ? void 0 : v.geo) == null ? void 0 : g.lat) != null;
  }), c = (p = (h = r.userLocation) == null ? void 0 : h.position) == null ? void 0 : p.coords, f = {
    query: r.query || "",
    user: c ? { lat: c.latitude, lon: c.longitude } : null,
    loc: null
  };
  if (!o) return f;
  const d = o.entityInfo.geo;
  return f.loc = {
    lat: Number(d.lat),
    lon: Number(d.long),
    name: d.city || o.word || "this place",
    region: [d.state, d.country].filter(Boolean).join(", "),
    wide: !d.city
    // country / state level, so search a bigger area
  }, f;
}
function ix(a) {
  return a === 0 ? ["☀️", "Clear"] : a <= 3 ? ["⛅", "Partly cloudy"] : a <= 48 ? ["🌫️", "Foggy"] : a <= 57 ? ["🌦️", "Drizzle"] : a <= 67 ? ["🌧️", "Rain"] : a <= 77 ? ["❄️", "Snow"] : a <= 82 ? ["🌧️", "Showers"] : a <= 86 ? ["🌨️", "Snow showers"] : ["⛈️", "Thunderstorm"];
}
function ox(a) {
  return a ? a.code >= 95 ? "Storms expected. Stick to indoor spots." : a.rain >= 50 || a.code >= 51 && a.code <= 86 ? "Carry an umbrella, or favour museums." : a.max >= 38 ? "Very hot. Go early, keep midday for indoor places." : a.max <= 2 ? "Freezing. Dress warm." : "Good day to be outside." : "";
}
function ux(a, r, i = 9) {
  const o = a.slice(0, i), c = [];
  let f = r;
  for (; o.length; ) {
    let y = 0, v = 1 / 0;
    o.forEach((x, w) => {
      const R = $d(f, x);
      R < v && (v = R, y = w);
    });
    const [g] = o.splice(y, 1);
    c.push({ ...g, hop: v }), f = g;
  }
  const d = ["Morning", "Afternoon", "Evening"], h = Math.max(1, Math.ceil(c.length / 3)), p = [];
  for (let y = 0; y < c.length; y += h)
    p.push({ label: d[p.length], items: c.slice(y, y + h) });
  return { ordered: c, slots: p };
}
const hd = /* @__PURE__ */ new Map();
async function sx(a) {
  var f, d, h;
  if (hd.has(a.id)) return hd.get(a.id);
  let r = "en", i = a.name;
  const o = a.wiki && a.wiki.includes(":");
  if (o) {
    const [p, ...y] = a.wiki.split(":");
    r = p, i = y.join(":");
  }
  let c = null;
  try {
    const p = await fetch(
      `https://${r}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(i.replace(/ /g, "_"))}`
    );
    if (p.ok) {
      const y = await p.json();
      y.extract && (o || y.type === "standard") && (c = { text: y.extract.length > 320 ? y.extract.slice(0, 320).replace(/\s+\S*$/, "") + "…" : y.extract, thumb: (f = y.thumbnail) == null ? void 0 : f.source, url: (h = (d = y.content_urls) == null ? void 0 : d.desktop) == null ? void 0 : h.page });
    }
  } catch {
  }
  return hd.set(a.id, c), c;
}
function m0({ center: a, places: r, selectedId: i, onSelect: o, route: c }) {
  const h = Math.cos(Pi(a.lat)), p = r.map((T) => ({ p: T, x: (T.lon - a.lon) * h, y: -(T.lat - a.lat) })), y = Math.max(1e-9, ...p.map((T) => Math.hypot(T.x, T.y))), v = Math.max(1, ...r.map((T) => T.distanceM)), g = (300 / 2 - 26) / y, x = (T) => 300 / 2 + T.x * g, w = (T) => 300 / 2 + T.y * g, R = Object.fromEntries(p.map((T) => [T.p.id, T])), C = (c || []).map((T) => R[T.id]).filter(Boolean);
  return /* @__PURE__ */ k.jsxs("svg", { viewBox: "0 0 300 300", className: "te-map", role: "img", "aria-label": "Map of places around the centre", children: [
    [0.5, 1].map((T) => /* @__PURE__ */ k.jsxs("g", { children: [
      /* @__PURE__ */ k.jsx("circle", { cx: 300 / 2, cy: 300 / 2, r: (300 / 2 - 26) * T, className: "te-ring" }),
      /* @__PURE__ */ k.jsx("text", { x: 300 / 2 + 4, y: 300 / 2 - (300 / 2 - 26) * T - 3, className: "te-ringlabel", children: $r(v * T) })
    ] }, T)),
    C.length > 1 && /* @__PURE__ */ k.jsx(
      "polyline",
      {
        points: [[300 / 2, 300 / 2], ...C.map((T) => [x(T), w(T)])].map((T) => T.join(",")).join(" "),
        className: "te-route"
      }
    ),
    /* @__PURE__ */ k.jsx("circle", { cx: 300 / 2, cy: 300 / 2, r: "6", className: "te-centre" }),
    p.map((T, M) => {
      const Y = T.p.id === i, U = c ? c.findIndex((j) => j.id === T.p.id) + 1 || "" : M + 1;
      return /* @__PURE__ */ k.jsxs(
        "g",
        {
          onClick: () => o(T.p.id),
          className: "te-pin",
          tabIndex: 0,
          onKeyDown: (j) => j.key === "Enter" && o(T.p.id),
          children: [
            /* @__PURE__ */ k.jsx("circle", { cx: x(T), cy: w(T), r: Y ? 12 : 9, className: Y ? "te-dot te-dot-sel" : "te-dot" }),
            /* @__PURE__ */ k.jsx("text", { x: x(T), y: w(T) + 3.5, textAnchor: "middle", className: "te-dotnum", children: U }),
            /* @__PURE__ */ k.jsx("title", { children: T.p.name })
          ]
        },
        T.p.id
      );
    })
  ] });
}
function pd({ p: a, rank: r, selected: i, onSelect: o, userDist: c }) {
  const [f, d] = E.useState(!1), [h, p] = E.useState(void 0);
  E.useEffect(() => {
    if (!f || h !== void 0) return;
    let v = !0;
    return sx(a).then((g) => v && p(g)), () => {
      v = !1;
    };
  }, [f]);
  const y = `https://www.google.com/maps/dir/?api=1&destination=${a.lat},${a.lon}`;
  return /* @__PURE__ */ k.jsxs("li", { className: `te-card ${i ? "te-card-sel" : ""}`, onClick: () => o == null ? void 0 : o(a.id), children: [
    /* @__PURE__ */ k.jsxs("button", { className: "te-cardhead", onClick: () => d((v) => !v), "aria-expanded": f, children: [
      /* @__PURE__ */ k.jsx("span", { className: "te-rank", children: r }),
      /* @__PURE__ */ k.jsxs("span", { className: "te-cardmain", children: [
        /* @__PURE__ */ k.jsx("span", { className: "te-name", children: a.name }),
        /* @__PURE__ */ k.jsxs("span", { className: "te-meta", children: [
          a.kind,
          " · ",
          $r(a.distanceM),
          " from centre",
          c != null && ` · ${$r(c)} from you`
        ] })
      ] }),
      a.wiki && /* @__PURE__ */ k.jsx("span", { className: "te-badge", title: "Has a Wikipedia article", children: "Notable" }),
      /* @__PURE__ */ k.jsx("span", { className: "te-chev", children: f ? "▴" : "▾" })
    ] }),
    f && /* @__PURE__ */ k.jsxs("div", { className: "te-body", children: [
      h === void 0 && /* @__PURE__ */ k.jsx("p", { className: "te-muted", children: "Loading description…" }),
      h && /* @__PURE__ */ k.jsxs("div", { className: "te-desc", children: [
        h.thumb && /* @__PURE__ */ k.jsx("img", { src: h.thumb, alt: "", loading: "lazy" }),
        /* @__PURE__ */ k.jsxs("p", { children: [
          h.text,
          " ",
          h.url && /* @__PURE__ */ k.jsx("a", { href: h.url, target: "_blank", rel: "noreferrer", children: "Wikipedia" })
        ] })
      ] }),
      h === null && /* @__PURE__ */ k.jsx("p", { className: "te-muted", children: "No description available for this place." }),
      a.address && /* @__PURE__ */ k.jsxs("p", { className: "te-addr", children: [
        "📍 ",
        a.address
      ] }),
      a.openingHours && /* @__PURE__ */ k.jsxs("p", { className: "te-addr", children: [
        "🕒 ",
        a.openingHours
      ] }),
      a.why && /* @__PURE__ */ k.jsxs("p", { className: "te-addr", children: [
        "👍 ",
        a.why
      ] }),
      a.wheelchair === !0 && /* @__PURE__ */ k.jsx("p", { className: "te-addr", children: "♿ Wheelchair accessible" }),
      a.wheelchair === !1 && /* @__PURE__ */ k.jsx("p", { className: "te-addr", children: "⚠️ Limited wheelchair access" }),
      /* @__PURE__ */ k.jsxs("div", { className: "te-actions", children: [
        /* @__PURE__ */ k.jsx("a", { href: y, target: "_blank", rel: "noreferrer", children: "Directions" }),
        a.website && /* @__PURE__ */ k.jsx("a", { href: a.website, target: "_blank", rel: "noreferrer", children: "Website" })
      ] })
    ] })
  ] });
}
function cx(a) {
  const r = a.deployedBackendURL || "", i = E.useMemo(() => rx(a.searchData), [a.searchData]), o = i == null ? void 0 : i.loc, [c, f] = E.useState(() => d0(i == null ? void 0 : i.query)), [d, h] = E.useState(o != null && o.wide ? 25e3 : 8e3), [p, y] = E.useState("list"), [v, g] = E.useState(null), [x, w] = E.useState(0), [R, C] = E.useState({ status: "loading", places: [] }), [T, M] = E.useState(null), [Y, U] = E.useState(0), [j, _] = E.useState(a.suggestedPlace === "sidebar"), X = E.useRef(null), [q, P] = E.useState("any"), J = f0.find((Q) => Q.id === q);
  E.useEffect(() => {
    f(d0(i == null ? void 0 : i.query)), h(o != null && o.wide ? 25e3 : 8e3), g(null), y("list");
  }, [i == null ? void 0 : i.query, o == null ? void 0 : o.lat, o == null ? void 0 : o.lon]), E.useEffect(() => {
    if (!X.current || typeof ResizeObserver > "u") return;
    const Q = new ResizeObserver(([le]) => _(le.contentRect.width < 460));
    return Q.observe(X.current), () => Q.disconnect();
  }, []), E.useEffect(() => {
    if (!o) return;
    const Q = new AbortController();
    return C((le) => ({ ...le, status: "loading" })), fetch(`${r}/api/places?lat=${o.lat}&lon=${o.lon}&category=${c}&radius=${d}`, { signal: Q.signal }).then(async (le) => {
      const Se = await le.json().catch(() => ({}));
      if (!le.ok) throw new Error(Se.error || `Request failed (${le.status})`);
      return Se;
    }).then((le) => C({ status: le.places.length ? "ok" : "empty", places: le.places })).catch((le) => {
      le.name !== "AbortError" && C({ status: "error", places: [], message: le.message });
    }), () => Q.abort();
  }, [o == null ? void 0 : o.lat, o == null ? void 0 : o.lon, c, d, x]), E.useEffect(() => {
    if (!o) return;
    const Q = new AbortController();
    return M(null), fetch(`${r}/api/weather?lat=${o.lat}&lon=${o.lon}`, { signal: Q.signal }).then((le) => le.ok ? le.json() : null).then((le) => le && M(le.days)).catch(() => {
    }), () => Q.abort();
  }, [o == null ? void 0 : o.lat, o == null ? void 0 : o.lon]);
  const { places: S, status: G } = R, ee = E.useMemo(() => lx(S, J, d), [S, J, d]), ae = E.useMemo(
    () => o && ee.length ? ux(ee, o, J.stops) : null,
    [ee, o, J]
  ), oe = (i == null ? void 0 : i.user) && o && $d(i.user, o) < 1e5, te = kd.find((Q) => Q.id === c), V = S.find((Q) => Q.id === v);
  if (!o)
    return /* @__PURE__ */ k.jsxs("div", { className: "te", ref: X, children: [
      /* @__PURE__ */ k.jsx("style", { children: h0 }),
      /* @__PURE__ */ k.jsx("p", { className: "te-empty", children: "I couldn't work out which place you meant. Try “things to do in Paris”." })
    ] });
  const ne = T == null ? void 0 : T[Y], W = (Q) => Q === 0 ? "Today" : Q === 1 ? "Tomorrow" : new Date(T[Q].date).toLocaleDateString(void 0, { weekday: "short" });
  return /* @__PURE__ */ k.jsxs("div", { className: "te", ref: X, "data-compact": j, children: [
    /* @__PURE__ */ k.jsx("style", { children: h0 }),
    /* @__PURE__ */ k.jsxs("header", { className: "te-head", children: [
      /* @__PURE__ */ k.jsxs("h2", { children: [
        c === "all" ? "Worth seeing in" : te.label + " in",
        " ",
        o.name
      ] }),
      /* @__PURE__ */ k.jsxs("p", { className: "te-muted", children: [
        o.region,
        G === "ok" && ` · ${S.length} places within ${$r(d)}`
      ] })
    ] }),
    /* @__PURE__ */ k.jsx("div", { className: "te-chips", role: "tablist", "aria-label": "Category", children: kd.map((Q) => /* @__PURE__ */ k.jsxs("button", { className: `te-chip ${Q.id === c ? "on" : ""}`, onClick: () => f(Q.id), children: [
      /* @__PURE__ */ k.jsx("span", { "aria-hidden": !0, children: Q.emoji }),
      " ",
      Q.label
    ] }, Q.id)) }),
    /* @__PURE__ */ k.jsx("div", { className: "te-chips", "aria-label": "Who's travelling?", children: f0.map((Q) => /* @__PURE__ */ k.jsxs("button", { className: `te-chip ${Q.id === q ? "on" : ""}`, onClick: () => P(Q.id), children: [
      /* @__PURE__ */ k.jsx("span", { "aria-hidden": !0, children: Q.emoji }),
      " ",
      Q.label
    ] }, Q.id)) }),
    J.blurb && /* @__PURE__ */ k.jsx("p", { className: "te-muted", children: J.blurb }),
    T && /* @__PURE__ */ k.jsxs("div", { className: "te-weather", children: [
      /* @__PURE__ */ k.jsx("div", { className: "te-days", children: T.map((Q, le) => /* @__PURE__ */ k.jsxs("button", { className: `te-day ${le === Y ? "on" : ""}`, onClick: () => U(le), children: [
        /* @__PURE__ */ k.jsx("span", { children: W(le) }),
        /* @__PURE__ */ k.jsxs("span", { children: [
          ix(Q.code)[0],
          " ",
          Q.max,
          "°/",
          Q.min,
          "°"
        ] })
      ] }, Q.date)) }),
      /* @__PURE__ */ k.jsxs("p", { className: "te-verdict", children: [
        ox(ne),
        " ",
        (ne == null ? void 0 : ne.rain) != null && /* @__PURE__ */ k.jsxs("span", { className: "te-muted", children: [
          "(",
          ne.rain,
          "% rain)"
        ] })
      ] })
    ] }),
    G === "ok" && /* @__PURE__ */ k.jsx("div", { className: "te-tabs", role: "tablist", children: [["list", "List"], ["map", "Map"], ["plan", "Day plan"]].map(([Q, le]) => /* @__PURE__ */ k.jsx("button", { role: "tab", "aria-selected": p === Q, className: p === Q ? "on" : "", onClick: () => y(Q), children: le }, Q)) }),
    G === "loading" && /* @__PURE__ */ k.jsx("ul", { className: "te-list", "aria-busy": "true", children: [0, 1, 2, 3].map((Q) => /* @__PURE__ */ k.jsx("li", { className: "te-skel" }, Q)) }),
    G === "error" && /* @__PURE__ */ k.jsxs("div", { className: "te-empty", children: [
      /* @__PURE__ */ k.jsxs("p", { children: [
        "Couldn't load places (",
        R.message,
        ")."
      ] }),
      /* @__PURE__ */ k.jsx("button", { className: "te-btn", onClick: () => w((Q) => Q + 1), children: "Try again" })
    ] }),
    G === "empty" && /* @__PURE__ */ k.jsxs("div", { className: "te-empty", children: [
      /* @__PURE__ */ k.jsxs("p", { children: [
        "No ",
        c === "all" ? "sights" : te.label.toLowerCase(),
        " found within ",
        $r(d),
        " of ",
        o.name,
        "."
      ] }),
      /* @__PURE__ */ k.jsxs("div", { className: "te-actions", children: [
        d < 25e3 && /* @__PURE__ */ k.jsx("button", { className: "te-btn", onClick: () => h(25e3), children: "Search wider" }),
        c !== "all" && /* @__PURE__ */ k.jsx("button", { className: "te-btn", onClick: () => f("all"), children: "Show all sights" })
      ] })
    ] }),
    G === "ok" && p === "list" && /* @__PURE__ */ k.jsx("ul", { className: "te-list", children: S.map((Q, le) => /* @__PURE__ */ k.jsx(
      pd,
      {
        p: Q,
        rank: le + 1,
        selected: Q.id === v,
        onSelect: g,
        userDist: oe ? $d(i.user, Q) : null
      },
      Q.id
    )) }),
    G === "ok" && p === "map" && /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
      /* @__PURE__ */ k.jsx(m0, { center: o, places: S, selectedId: v, onSelect: g }),
      V ? /* @__PURE__ */ k.jsx("ul", { className: "te-list", children: /* @__PURE__ */ k.jsx(pd, { p: V, rank: S.indexOf(V) + 1, selected: !0 }) }) : /* @__PURE__ */ k.jsxs("p", { className: "te-muted te-center", children: [
        "Tap a pin to see details. The centre dot is ",
        o.name,
        "."
      ] })
    ] }),
    G === "ok" && p === "plan" && ae && /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
      /* @__PURE__ */ k.jsx(m0, { center: o, places: ae.ordered, selectedId: v, onSelect: g, route: ae.ordered }),
      ae.slots.map((Q) => /* @__PURE__ */ k.jsxs("section", { className: "te-slot", children: [
        /* @__PURE__ */ k.jsx("h3", { children: Q.label }),
        /* @__PURE__ */ k.jsx("ul", { className: "te-list", children: Q.items.map((le) => /* @__PURE__ */ k.jsxs("div", { children: [
          /* @__PURE__ */ k.jsxs("p", { className: "te-hop", children: [
            "↳ ",
            $r(le.hop),
            " ",
            ae.ordered[0] === le ? "from centre" : "from previous stop"
          ] }),
          /* @__PURE__ */ k.jsx(pd, { p: le, rank: ae.ordered.indexOf(le) + 1, selected: le.id === v, onSelect: g })
        ] }, le.id)) })
      ] }, Q.label))
    ] }),
    /* @__PURE__ */ k.jsx("footer", { className: "te-foot", children: "Places: Geoapify / OpenStreetMap · Descriptions: Wikipedia · Weather: Open-Meteo" })
  ] });
}
const h0 = `
.te{--bg:#fff;--fg:#1d2433;--mut:#667085;--card:#f5f6fa;--line:#e3e6ee;--acc:#0e7c66;--accfg:#fff;--warn:#b54708;
  font:14px/1.45 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:var(--fg);background:var(--bg);
  max-width:720px;margin:0 auto;padding:14px;box-sizing:border-box}
@media (prefers-color-scheme:dark){.te{--bg:#14171f;--fg:#e8eaf0;--mut:#9aa3b5;--card:#1d222d;--line:#2c3342;--acc:#3ecfae;--accfg:#06241d;--warn:#f5a65b}}
.te *{box-sizing:border-box}
.te h2{margin:0;font-size:18px}.te h3{margin:14px 0 4px;font-size:13px;text-transform:uppercase;letter-spacing:.06em;color:var(--acc)}
.te-muted{color:var(--mut);margin:2px 0;font-size:12.5px}.te-center{text-align:center}
.te button{font:inherit;color:inherit;cursor:pointer}
.te-chips{display:flex;gap:6px;overflow-x:auto;padding:10px 0 6px;scrollbar-width:none}
.te-chip{flex:none;border:1px solid var(--line);background:var(--card);border-radius:999px;padding:4px 10px}
.te-chip.on{background:var(--acc);color:var(--accfg);border-color:var(--acc)}
.te-weather{background:var(--card);border-radius:12px;padding:8px 10px;margin:6px 0}
.te-days{display:flex;gap:6px}
.te-day{flex:1;display:flex;flex-direction:column;align-items:center;border:1px solid transparent;background:transparent;border-radius:8px;padding:3px;font-size:12px}
.te-day.on{border-color:var(--acc)}
.te-verdict{margin:6px 0 0;font-weight:600}
.te-tabs{display:flex;gap:4px;margin:8px 0;border-bottom:1px solid var(--line)}
.te-tabs button{background:none;border:0;border-bottom:2px solid transparent;padding:6px 12px}
.te-tabs button.on{border-color:var(--acc);color:var(--acc);font-weight:600}
.te-list{list-style:none;margin:0;padding:0;display:grid;gap:8px}
.te-card{background:var(--card);border:1px solid var(--line);border-radius:12px;overflow:hidden}
.te-card-sel{border-color:var(--acc)}
.te-cardhead{display:flex;align-items:center;gap:10px;width:100%;background:none;border:0;padding:10px;text-align:left}
.te-rank{flex:none;width:24px;height:24px;border-radius:50%;background:var(--acc);color:var(--accfg);display:grid;place-items:center;font-size:12px;font-weight:700}
.te-cardmain{flex:1;min-width:0;display:flex;flex-direction:column}
.te-name{font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.te-meta{color:var(--mut);font-size:12px}
.te-badge{font-size:10.5px;border:1px solid var(--acc);color:var(--acc);border-radius:6px;padding:0 5px}
.te[data-compact="true"] .te-badge{display:none}
.te-chev{color:var(--mut)}
.te-body{padding:0 12px 12px}
.te-desc{display:flex;gap:10px;align-items:flex-start}
.te-desc img{width:76px;height:76px;object-fit:cover;border-radius:8px;flex:none}
.te[data-compact="true"] .te-desc{flex-direction:column}
.te-desc p,.te-addr{margin:4px 0}
.te-body a,.te-actions a{color:var(--acc)}
.te-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:6px}
.te-btn{border:1px solid var(--acc);background:none;color:var(--acc);border-radius:8px;padding:5px 12px}
.te-empty{text-align:center;padding:24px 8px}
.te-skel{height:50px;border-radius:12px;background:linear-gradient(90deg,var(--card),var(--line),var(--card));background-size:200% 100%;animation:te-sh 1.2s infinite}
@keyframes te-sh{to{background-position:-200% 0}}
.te-map{width:100%;max-height:360px;background:var(--card);border-radius:12px;display:block;margin-bottom:8px}
.te-ring{fill:none;stroke:var(--line);stroke-dasharray:3 4}
.te-ringlabel{fill:var(--mut);font-size:8px}
.te-route{fill:none;stroke:var(--acc);stroke-width:1.5;stroke-dasharray:4 3;opacity:.7}
.te-centre{fill:var(--fg)}
.te-dot{fill:var(--acc);stroke:var(--bg);stroke-width:1.5}.te-dot-sel{fill:var(--warn)}
.te-dotnum{fill:var(--accfg);font-size:9px;font-weight:700;pointer-events:none}
.te-pin{cursor:pointer;outline:none}
.te-hop{margin:6px 0 3px 8px;font-size:12px;color:var(--mut)}
.te-foot{margin-top:14px;font-size:11px;color:var(--mut);text-align:center}
`;
/**
 * react-router v7.18.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var lm = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i, Mv = /^[\\/]{2}/;
function fx(a, r) {
  return r + a.replace(/\\/g, "/");
}
var p0 = "popstate";
function g0(a) {
  return typeof a == "object" && a != null && "pathname" in a && "search" in a && "hash" in a && "state" in a && "key" in a;
}
function dx(a = {}) {
  function r(o, c) {
    var y;
    let f = (y = c.state) == null ? void 0 : y.masked, { pathname: d, search: h, hash: p } = f || o.location;
    return Yd(
      "",
      { pathname: d, search: h, hash: p },
      // state defaults to `null` because `window.history.state` does
      c.state && c.state.usr || null,
      c.state && c.state.key || "default",
      f ? {
        pathname: o.location.pathname,
        search: o.location.search,
        hash: o.location.hash
      } : void 0
    );
  }
  function i(o, c) {
    return typeof c == "string" ? c : Gr(c);
  }
  return hx(
    r,
    i,
    null,
    a
  );
}
function at(a, r) {
  if (a === !1 || a === null || typeof a > "u")
    throw new Error(r);
}
function aa(a, r) {
  if (!a) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {
    }
  }
}
function mx() {
  return Math.random().toString(36).substring(2, 10);
}
function y0(a, r) {
  return {
    usr: a.state,
    key: a.key,
    idx: r,
    masked: a.mask ? {
      pathname: a.pathname,
      search: a.search,
      hash: a.hash
    } : void 0
  };
}
function Yd(a, r, i = null, o, c) {
  return {
    pathname: typeof a == "string" ? a : a.pathname,
    search: "",
    hash: "",
    ...typeof r == "string" ? Ir(r) : r,
    state: i,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: r && r.key || o || mx(),
    mask: c
  };
}
function Gr({
  pathname: a = "/",
  search: r = "",
  hash: i = ""
}) {
  return r && r !== "?" && (a += r.charAt(0) === "?" ? r : "?" + r), i && i !== "#" && (a += i.charAt(0) === "#" ? i : "#" + i), a;
}
function Ir(a) {
  let r = {};
  if (a) {
    let i = a.indexOf("#");
    i >= 0 && (r.hash = a.substring(i), a = a.substring(0, i));
    let o = a.indexOf("?");
    o >= 0 && (r.search = a.substring(o), a = a.substring(0, o)), a && (r.pathname = a);
  }
  return r;
}
function hx(a, r, i, o = {}) {
  let { window: c = document.defaultView, v5Compat: f = !1 } = o, d = c.history, h = "POP", p = null, y = v();
  y == null && (y = 0, d.replaceState({ ...d.state, idx: y }, ""));
  function v() {
    return (d.state || { idx: null }).idx;
  }
  function g() {
    h = "POP";
    let T = v(), M = T == null ? null : T - y;
    y = T, p && p({ action: h, location: C.location, delta: M });
  }
  function x(T, M) {
    h = "PUSH";
    let Y = g0(T) ? T : Yd(C.location, T, M);
    y = v() + 1;
    let U = y0(Y, y), j = C.createHref(Y.mask || Y);
    try {
      d.pushState(U, "", j);
    } catch (_) {
      if (_ instanceof DOMException && _.name === "DataCloneError")
        throw _;
      c.location.assign(j);
    }
    f && p && p({ action: h, location: C.location, delta: 1 });
  }
  function w(T, M) {
    h = "REPLACE";
    let Y = g0(T) ? T : Yd(C.location, T, M);
    y = v();
    let U = y0(Y, y), j = C.createHref(Y.mask || Y);
    d.replaceState(U, "", j), f && p && p({ action: h, location: C.location, delta: 0 });
  }
  function R(T) {
    return px(c, T);
  }
  let C = {
    get action() {
      return h;
    },
    get location() {
      return a(c, d);
    },
    listen(T) {
      if (p)
        throw new Error("A history only accepts one active listener");
      return c.addEventListener(p0, g), p = T, () => {
        c.removeEventListener(p0, g), p = null;
      };
    },
    createHref(T) {
      return r(c, T);
    },
    createURL: R,
    encodeLocation(T) {
      let M = R(T);
      return {
        pathname: M.pathname,
        search: M.search,
        hash: M.hash
      };
    },
    push: x,
    replace: w,
    go(T) {
      return d.go(T);
    }
  };
  return C;
}
function px(a, r, i = !1) {
  let o = "http://localhost";
  a && (o = a.location.origin !== "null" ? a.location.origin : a.location.href), at(o, "No window.location.(origin|href) available to create URL");
  let c = typeof r == "string" ? r : Gr(r);
  return c = c.replace(/ $/, "%20"), !i && Mv.test(c) && (c = o + c), new URL(c, o);
}
function Nv(a, r, i = "/") {
  return gx(a, r, i, !1);
}
function gx(a, r, i, o, c) {
  let f = typeof r == "string" ? Ir(r) : r, d = Ra(f.pathname || "/", i);
  if (d == null)
    return null;
  let h = yx(a), p = null, y = Ax(d);
  for (let v = 0; p == null && v < h.length; ++v)
    p = wx(
      h[v],
      y,
      o
    );
  return p;
}
function yx(a) {
  let r = _v(a);
  return vx(r), r;
}
function _v(a, r = [], i = [], o = "", c = !1) {
  let f = (d, h, p = c, y) => {
    let v = {
      relativePath: y === void 0 ? d.path || "" : y,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: h,
      route: d
    };
    if (v.relativePath.startsWith("/")) {
      if (!v.relativePath.startsWith(o) && p)
        return;
      at(
        v.relativePath.startsWith(o),
        `Absolute route path "${v.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), v.relativePath = v.relativePath.slice(o.length);
    }
    let g = Un([o, v.relativePath]), x = i.concat(v);
    d.children && d.children.length > 0 && (at(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      d.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${g}".`
    ), _v(
      d.children,
      r,
      x,
      g,
      p
    )), !(d.path == null && !d.index) && r.push({
      path: g,
      score: Rx(g, d.index),
      routesMeta: x.map((w, R) => {
        let [C, T] = Uv(
          w.relativePath,
          w.caseSensitive,
          R === x.length - 1
        );
        return {
          ...w,
          matcher: C,
          compiledParams: T
        };
      })
    });
  };
  return a.forEach((d, h) => {
    var p;
    if (d.path === "" || !((p = d.path) != null && p.includes("?")))
      f(d, h);
    else
      for (let y of Dv(d.path))
        f(d, h, !0, y);
  }), r;
}
function Dv(a) {
  let r = a.split("/");
  if (r.length === 0) return [];
  let [i, ...o] = r, c = i.endsWith("?"), f = i.replace(/\?$/, "");
  if (o.length === 0)
    return c ? [f, ""] : [f];
  let d = Dv(o.join("/")), h = [];
  return h.push(
    ...d.map(
      (p) => p === "" ? f : [f, p].join("/")
    )
  ), c && h.push(...d), h.map(
    (p) => a.startsWith("/") && p === "" ? "/" : p
  );
}
function vx(a) {
  a.sort(
    (r, i) => r.score !== i.score ? i.score - r.score : Ox(
      r.routesMeta.map((o) => o.childrenIndex),
      i.routesMeta.map((o) => o.childrenIndex)
    )
  );
}
var bx = /^:[\w-]+$/, Sx = 3, Ex = 2, xx = 1, Cx = 10, Tx = -2, v0 = (a) => a === "*";
function Rx(a, r) {
  let i = a.split("/"), o = i.length;
  return i.some(v0) && (o += Tx), r && (o += Ex), i.filter((c) => !v0(c)).reduce(
    (c, f) => c + (bx.test(f) ? Sx : f === "" ? xx : Cx),
    o
  );
}
function Ox(a, r) {
  return a.length === r.length && a.slice(0, -1).every((o, c) => o === r[c]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a[a.length - 1] - r[r.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function wx(a, r, i = !1) {
  let { routesMeta: o } = a, c = {}, f = "/", d = [];
  for (let h = 0; h < o.length; ++h) {
    let p = o[h], y = h === o.length - 1, v = f === "/" ? r : r.slice(f.length) || "/", g = {
      path: p.relativePath,
      caseSensitive: p.caseSensitive,
      end: y
    }, x = (
      // Use precomputed matcher if it exists
      p.matcher && p.compiledParams ? Bv(
        g,
        v,
        p.matcher,
        p.compiledParams
      ) : ss(g, v)
    ), w = p.route;
    if (!x && y && i && !o[o.length - 1].route.index && (x = ss(
      {
        path: p.relativePath,
        caseSensitive: p.caseSensitive,
        end: !1
      },
      v
    )), !x)
      return null;
    Object.assign(c, x.params), d.push({
      // TODO: Can this as be avoided?
      params: c,
      pathname: Un([f, x.pathname]),
      pathnameBase: Nx(
        Un([f, x.pathnameBase])
      ),
      route: w
    }), x.pathnameBase !== "/" && (f = Un([f, x.pathnameBase]));
  }
  return d;
}
function ss(a, r) {
  typeof a == "string" && (a = { path: a, caseSensitive: !1, end: !0 });
  let [i, o] = Uv(
    a.path,
    a.caseSensitive,
    a.end
  );
  return Bv(a, r, i, o);
}
function Bv(a, r, i, o) {
  let c = r.match(i);
  if (!c) return null;
  let f = c[0], d = Xr(f, 1), h = c.slice(1);
  return {
    params: o.reduce(
      (y, { paramName: v, isOptional: g }, x) => {
        if (v === "*") {
          let R = h[x] || "";
          d = Xr(
            f.slice(0, f.length - R.length),
            1
          );
        }
        const w = h[x];
        return g && !w ? y[v] = void 0 : y[v] = (w || "").replace(/%2F/g, "/"), y;
      },
      {}
    ),
    pathname: f,
    pathnameBase: d,
    pattern: a
  };
}
function Uv(a, r = !1, i = !0) {
  aa(
    a === "*" || !a.endsWith("*") || a.endsWith("/*"),
    `Route path "${a}" will be treated as if it were "${a.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/, "/*")}".`
  );
  let o = [], c = "^" + a.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (d, h, p, y, v) => {
      if (o.push({ paramName: h, isOptional: p != null }), p) {
        let g = v.charAt(y + d.length);
        return g && g !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
      }
      return "/([^\\/]+)";
    }
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return a.endsWith("*") ? (o.push({ paramName: "*" }), c += a === "*" || a === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : i ? c += "\\/*$" : a !== "" && a !== "/" && (c += "(?:(?=\\/|$))"), [new RegExp(c, r ? void 0 : "i"), o];
}
function Ax(a) {
  try {
    return a.split("/").map((r) => decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
  } catch (r) {
    return aa(
      !1,
      `The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`
    ), a;
  }
}
function Ra(a, r) {
  if (r === "/") return a;
  if (!a.toLowerCase().startsWith(r.toLowerCase()))
    return null;
  let i = r.endsWith("/") ? r.length - 1 : r.length, o = a.charAt(i);
  return o && o !== "/" ? null : a.slice(i) || "/";
}
function zx(a, r = "/") {
  let {
    pathname: i,
    search: o = "",
    hash: c = ""
  } = typeof a == "string" ? Ir(a) : a, f;
  return i ? (i = Hv(i), i.startsWith("/") || i.startsWith("\\") ? f = b0(i.substring(1), "/") : f = b0(i, r)) : f = r, {
    pathname: f,
    search: _x(o),
    hash: Dx(c)
  };
}
function b0(a, r) {
  let i = Xr(r).split("/");
  return a.split("/").forEach((c) => {
    c === ".." ? i.length > 1 && i.pop() : c !== "." && i.push(c);
  }), i.length > 1 ? i.join("/") : "/";
}
function gd(a, r, i, o) {
  return `Cannot include a '${a}' character in a manually specified \`to.${r}\` field [${JSON.stringify(
    o
  )}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Mx(a) {
  return a.filter(
    (r, i) => i === 0 || r.route.path && r.route.path.length > 0
  );
}
function jv(a) {
  let r = Mx(a);
  return r.map(
    (i, o) => o === r.length - 1 ? i.pathname : i.pathnameBase
  );
}
function rm(a, r, i, o = !1) {
  let c;
  typeof a == "string" ? c = Ir(a) : (c = { ...a }, at(
    !c.pathname || !c.pathname.includes("?"),
    gd("?", "pathname", "search", c)
  ), at(
    !c.pathname || !c.pathname.includes("#"),
    gd("#", "pathname", "hash", c)
  ), at(
    !c.search || !c.search.includes("#"),
    gd("#", "search", "hash", c)
  ));
  let f = a === "" || c.pathname === "", d = f ? "/" : c.pathname, h;
  if (d == null)
    h = i;
  else {
    let g = r.length - 1;
    if (!o && d.startsWith("..")) {
      let x = d.split("/");
      for (; x[0] === ".."; )
        x.shift(), g -= 1;
      c.pathname = x.join("/");
    }
    h = g >= 0 ? r[g] : "/";
  }
  let p = zx(c, h), y = d && d !== "/" && d.endsWith("/"), v = (f || d === ".") && i.endsWith("/");
  return !p.pathname.endsWith("/") && (y || v) && (p.pathname += "/"), p;
}
var Hv = (a) => a.replace(/[\\/]{2,}/g, "/"), Un = (a) => Hv(a.join("/"));
function Xr(a, r = 0) {
  let i = a.length;
  for (; i > r && a.charCodeAt(i - 1) === 47; )
    i--;
  return i === a.length ? a : a.slice(0, i);
}
var Nx = (a) => Xr(a).replace(/^\/*/, "/"), _x = (a) => !a || a === "?" ? "" : a.startsWith("?") ? a : "?" + a, Dx = (a) => !a || a === "#" ? "" : a.startsWith("#") ? a : "#" + a, Bx = class {
  constructor(a, r, i, o = !1) {
    this.status = a, this.statusText = r || "", this.internal = o, i instanceof Error ? (this.data = i.toString(), this.error = i) : this.data = i;
  }
};
function Ux(a) {
  return a != null && typeof a.status == "number" && typeof a.statusText == "string" && typeof a.internal == "boolean" && "data" in a;
}
function jx(a) {
  let r = a.map((i) => i.route.path).filter(Boolean);
  return Un(r) || "/";
}
var Lv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function kv(a, r) {
  let i = a;
  if (typeof i != "string" || !lm.test(i))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: i
    };
  let o = i, c = !1;
  if (Lv)
    try {
      let f = new URL(window.location.href), d = Mv.test(i) ? new URL(fx(i, f.protocol)) : new URL(i), h = Ra(d.pathname, r);
      d.origin === f.origin && h != null ? i = h + d.search + d.hash : c = !0;
    } catch {
      aa(
        !1,
        `<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: o,
    isExternal: c,
    to: i
  };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var S0 = new URL("http://localhost");
function $v(a) {
  if (a.createURL)
    return a.createURL("/");
  try {
    return new URL(a.createHref("/"), S0);
  } catch {
    return S0;
  }
}
function yd(a, r) {
  return a.origin === r.origin && (a.origin !== "null" || a.protocol === r.protocol && a.host === r.host);
}
function Hx(a, r) {
  if (a.startsWith("//"))
    return !0;
  let i = r.protocol.toLowerCase();
  return a.toLowerCase().startsWith(i) ? r.host === "" || a.slice(i.length).startsWith("//") : !1;
}
function Yv(a, r, i, o) {
  let c = null;
  try {
    c = a == null ? null : new URL(a, i);
  } catch {
  }
  let f = new URL(r, i), d = c != null && !yd(c, i), h = !yd(f, i);
  if (o === "reject") {
    if (d || h)
      throw new Error("External navigation is not allowed");
  } else if (h && (c == null || !Hx(a, c) || !yd(c, f)))
    throw new Error("External navigation is not allowed");
}
var qv = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  qv
);
var Lx = [
  "GET",
  ...qv
];
new Set(Lx);
var kx = [
  "about:",
  "blob:",
  "chrome:",
  "chrome-untrusted:",
  "content:",
  "data:",
  "devtools:",
  "file:",
  "filesystem:",
  // eslint-disable-next-line no-script-url
  "javascript:"
];
function $x(a) {
  try {
    return kx.includes(new URL(a).protocol);
  } catch {
    return !1;
  }
}
var Pr = E.createContext(null);
Pr.displayName = "DataRouter";
var ys = E.createContext(null);
ys.displayName = "DataRouterState";
var Vv = E.createContext(!1);
function Yx() {
  return E.useContext(Vv);
}
var Gv = E.createContext({
  isTransitioning: !1
});
Gv.displayName = "ViewTransition";
var qx = E.createContext(
  /* @__PURE__ */ new Map()
);
qx.displayName = "Fetchers";
var Vx = E.createContext(null);
Vx.displayName = "Await";
var On = E.createContext(
  null
);
On.displayName = "Navigation";
var uo = E.createContext(
  null
);
uo.displayName = "Location";
var wa = E.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
wa.displayName = "Route";
var im = E.createContext(null);
im.displayName = "RouteError";
var Xv = "REACT_ROUTER_ERROR", Gx = "REDIRECT", Xx = "ROUTE_ERROR_RESPONSE";
function Qx(a) {
  if (a.startsWith(`${Xv}:${Gx}:{`))
    try {
      let r = JSON.parse(a.slice(28));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.location == "string" && typeof r.reloadDocument == "boolean" && typeof r.replace == "boolean")
        return r;
    } catch {
    }
}
function Kx(a) {
  if (a.startsWith(
    `${Xv}:${Xx}:{`
  ))
    try {
      let r = JSON.parse(a.slice(40));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string")
        return new Bx(
          r.status,
          r.statusText,
          r.data
        );
    } catch {
    }
}
function Zx(a, { relative: r } = {}) {
  at(
    so(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: i, navigator: o } = E.useContext(On), { hash: c, pathname: f, search: d } = co(a, { relative: r }), h = f;
  return i !== "/" && (h = f === "/" ? i : Un([i, f])), o.createHref({ pathname: h, search: d, hash: c });
}
function so() {
  return E.useContext(uo) != null;
}
function la() {
  return at(
    so(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), E.useContext(uo).location;
}
var Qv = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Kv(a) {
  E.useContext(On).static || E.useLayoutEffect(a);
}
function Zv() {
  let { isDataRoute: a } = E.useContext(wa);
  return a ? o2() : Ix();
}
function Ix() {
  at(
    so(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let a = E.useContext(Pr), { basename: r, navigator: i } = E.useContext(On), { matches: o } = E.useContext(wa), { pathname: c } = la(), f = JSON.stringify(jv(o)), d = E.useRef(!1);
  return Kv(() => {
    d.current = !0;
  }), E.useCallback(
    (p, y = {}) => {
      if (aa(d.current, Qv), !d.current) return;
      if (typeof p == "number") {
        i.go(p);
        return;
      }
      let v = rm(
        p,
        JSON.parse(f),
        c,
        y.relative === "path"
      );
      a == null && r !== "/" && (v.pathname = v.pathname === "/" ? r : Un([r, v.pathname])), Yv(
        typeof p == "string" ? p : Gr(p),
        i.createHref(v),
        $v(i),
        "reject"
      ), (y.replace ? i.replace : i.push)(
        v,
        y.state,
        y
      );
    },
    [
      r,
      i,
      f,
      c,
      a
    ]
  );
}
E.createContext(null);
function co(a, { relative: r } = {}) {
  let { matches: i } = E.useContext(wa), { pathname: o } = la(), c = JSON.stringify(jv(i));
  return E.useMemo(
    () => rm(
      a,
      JSON.parse(c),
      o,
      r === "path"
    ),
    [a, c, o, r]
  );
}
function Px(a, r) {
  return Iv(a, r);
}
function Iv(a, r, i) {
  var T;
  at(
    so(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: o } = E.useContext(On), { matches: c } = E.useContext(wa), f = c[c.length - 1], d = f ? f.params : {}, h = f ? f.pathname : "/", p = f ? f.pathnameBase : "/", y = f && f.route;
  {
    let M = y && y.path || "";
    Jv(
      h,
      !y || M.endsWith("*") || M.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M === "/" ? "*" : `${M}/*`}">.`
    );
  }
  let v = la(), g;
  if (r) {
    let M = typeof r == "string" ? Ir(r) : r;
    at(
      p === "/" || ((T = M.pathname) == null ? void 0 : T.startsWith(p)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${M.pathname}" was given in the \`location\` prop.`
    ), g = M;
  } else
    g = v;
  let x = g.pathname || "/", w = x;
  if (p !== "/") {
    let M = p.replace(/^\//, "").split("/");
    w = "/" + x.replace(/^\//, "").split("/").slice(M.length).join("/");
  }
  let R = i && i.state.matches.length ? (
    // If we're in a data router, use the matches we've already identified but ensure
    // we have the latest route instances from the manifest in case elements have changed
    i.state.matches.map(
      (M) => Object.assign(M, {
        route: i.manifest[M.route.id] || M.route
      })
    )
  ) : Nv(a, { pathname: w });
  aa(
    y || R != null,
    `No routes matched location "${g.pathname}${g.search}${g.hash}" `
  ), aa(
    R == null || R[R.length - 1].route.element !== void 0 || R[R.length - 1].route.Component !== void 0 || R[R.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let C = t2(
    R && R.map(
      (M) => Object.assign({}, M, {
        params: Object.assign({}, d, M.params),
        pathname: Un([
          p,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          o.encodeLocation ? o.encodeLocation(
            M.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : M.pathname
        ]),
        pathnameBase: M.pathnameBase === "/" ? p : Un([
          p,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          o.encodeLocation ? o.encodeLocation(
            M.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : M.pathnameBase
        ])
      })
    ),
    c,
    i
  );
  return r && C ? /* @__PURE__ */ E.createElement(
    uo.Provider,
    {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          mask: void 0,
          ...g
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    C
  ) : C;
}
function Jx() {
  let a = i2(), r = Ux(a) ? `${a.status} ${a.statusText}` : a instanceof Error ? a.message : JSON.stringify(a), i = a instanceof Error ? a.stack : null, o = "rgba(200,200,200, 0.5)", c = { padding: "0.5rem", backgroundColor: o }, f = { padding: "2px 4px", backgroundColor: o }, d = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    a
  ), d = /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ E.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ E.createElement("code", { style: f }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ E.createElement("code", { style: f }, "errorElement"), " prop on your route.")), /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ E.createElement("h3", { style: { fontStyle: "italic" } }, r), i ? /* @__PURE__ */ E.createElement("pre", { style: c }, i) : null, d);
}
var Fx = /* @__PURE__ */ E.createElement(Jx, null), Pv = class extends E.Component {
  constructor(a) {
    super(a), this.state = {
      location: a.location,
      revalidation: a.revalidation,
      error: a.error
    };
  }
  static getDerivedStateFromError(a) {
    return { error: a };
  }
  static getDerivedStateFromProps(a, r) {
    return r.location !== a.location || r.revalidation !== "idle" && a.revalidation === "idle" ? {
      error: a.error,
      location: a.location,
      revalidation: a.revalidation
    } : {
      error: a.error !== void 0 ? a.error : r.error,
      location: r.location,
      revalidation: a.revalidation || r.revalidation
    };
  }
  componentDidCatch(a, r) {
    this.props.onError ? this.props.onError(a, r) : console.error(
      "React Router caught the following error during render",
      a
    );
  }
  render() {
    let a = this.state.error;
    if (this.context && typeof a == "object" && a && "digest" in a && typeof a.digest == "string") {
      const i = Kx(a.digest);
      i && (a = i);
    }
    let r = a !== void 0 ? /* @__PURE__ */ E.createElement(wa.Provider, { value: this.props.routeContext }, /* @__PURE__ */ E.createElement(
      im.Provider,
      {
        value: a,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ E.createElement(Wx, { error: a }, r) : r;
  }
};
Pv.contextType = Vv;
var vd = /* @__PURE__ */ new WeakMap();
function Wx({
  children: a,
  error: r
}) {
  let { basename: i, navigator: o } = E.useContext(On);
  if (typeof r == "object" && r && "digest" in r && typeof r.digest == "string") {
    let c = Qx(r.digest);
    if (c) {
      let f = vd.get(r);
      if (f) throw f;
      let d = kv(c.location, i), h = d.absoluteURL || d.to;
      if (Yv(
        c.location,
        h,
        $v(o),
        "allow-explicit"
      ), $x(h))
        throw new Error("Invalid redirect location");
      if (Lv && !vd.get(r))
        if (d.isExternal || c.reloadDocument)
          window.location.href = h;
        else {
          const p = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(d.to, {
              replace: c.replace
            })
          );
          throw vd.set(r, p), p;
        }
      return /* @__PURE__ */ E.createElement("meta", { httpEquiv: "refresh", content: `0;url=${h}` });
    }
  }
  return a;
}
function e2({ routeContext: a, match: r, children: i }) {
  let o = E.useContext(Pr);
  return o && o.static && o.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ E.createElement(wa.Provider, { value: a }, i);
}
function t2(a, r = [], i) {
  let o = i == null ? void 0 : i.state;
  if (a == null) {
    if (!o)
      return null;
    if (o.errors)
      a = o.matches;
    else if (r.length === 0 && !o.initialized && o.matches.length > 0)
      a = o.matches;
    else
      return null;
  }
  let c = a, f = o == null ? void 0 : o.errors;
  if (f != null) {
    let v = c.findIndex(
      (g) => g.route.id && (f == null ? void 0 : f[g.route.id]) !== void 0
    );
    at(
      v >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        f
      ).join(",")}`
    ), c = c.slice(
      0,
      Math.min(c.length, v + 1)
    );
  }
  let d = !1, h = -1;
  if (i && o) {
    d = o.renderFallback;
    for (let v = 0; v < c.length; v++) {
      let g = c[v];
      if ((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (h = v), g.route.id) {
        let { loaderData: x, errors: w } = o, R = g.route.loader && !x.hasOwnProperty(g.route.id) && (!w || w[g.route.id] === void 0);
        if (g.route.lazy || R) {
          i.isStatic && (d = !0), h >= 0 ? c = c.slice(0, h + 1) : c = [c[0]];
          break;
        }
      }
    }
  }
  let p = i == null ? void 0 : i.onError, y = o && p ? (v, g) => {
    var x, w;
    p(v, {
      location: o.location,
      params: ((w = (x = o.matches) == null ? void 0 : x[0]) == null ? void 0 : w.params) ?? {},
      pattern: jx(o.matches),
      errorInfo: g
    });
  } : void 0;
  return c.reduceRight(
    (v, g, x) => {
      let w, R = !1, C = null, T = null;
      o && (w = f && g.route.id ? f[g.route.id] : void 0, C = g.route.errorElement || Fx, d && (h < 0 && x === 0 ? (Jv(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), R = !0, T = null) : h === x && (R = !0, T = g.route.hydrateFallbackElement || null)));
      let M = r.concat(c.slice(0, x + 1)), Y = () => {
        let U;
        return w ? U = C : R ? U = T : g.route.Component ? U = /* @__PURE__ */ E.createElement(g.route.Component, null) : g.route.element ? U = g.route.element : U = v, /* @__PURE__ */ E.createElement(
          e2,
          {
            match: g,
            routeContext: {
              outlet: v,
              matches: M,
              isDataRoute: o != null
            },
            children: U
          }
        );
      };
      return o && (g.route.ErrorBoundary || g.route.errorElement || x === 0) ? /* @__PURE__ */ E.createElement(
        Pv,
        {
          location: o.location,
          revalidation: o.revalidation,
          component: C,
          error: w,
          children: Y(),
          routeContext: { outlet: null, matches: M, isDataRoute: !0 },
          onError: y
        }
      ) : Y();
    },
    null
  );
}
function om(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function n2(a) {
  let r = E.useContext(Pr);
  return at(r, om(a)), r;
}
function a2(a) {
  let r = E.useContext(ys);
  return at(r, om(a)), r;
}
function l2(a) {
  let r = E.useContext(wa);
  return at(r, om(a)), r;
}
function um(a) {
  let r = l2(a), i = r.matches[r.matches.length - 1];
  return at(
    i.route.id,
    `${a} can only be used on routes that contain a unique "id"`
  ), i.route.id;
}
function r2() {
  return um(
    "useRouteId"
    /* UseRouteId */
  );
}
function i2() {
  var o;
  let a = E.useContext(im), r = a2(
    "useRouteError"
    /* UseRouteError */
  ), i = um(
    "useRouteError"
    /* UseRouteError */
  );
  return a !== void 0 ? a : (o = r.errors) == null ? void 0 : o[i];
}
function o2() {
  let { router: a } = n2(
    "useNavigate"
    /* UseNavigateStable */
  ), r = um(
    "useNavigate"
    /* UseNavigateStable */
  ), i = E.useRef(!1);
  return Kv(() => {
    i.current = !0;
  }), E.useCallback(
    async (c, f = {}) => {
      aa(i.current, Qv), i.current && (typeof c == "number" ? await a.navigate(c) : await a.navigate(c, { fromRouteId: r, ...f }));
    },
    [a, r]
  );
}
var E0 = {};
function Jv(a, r, i) {
  !r && !E0[a] && (E0[a] = !0, aa(!1, i));
}
E.memo(u2);
function u2({
  routes: a,
  manifest: r,
  future: i,
  state: o,
  isStatic: c,
  onError: f
}) {
  return Iv(a, void 0, {
    manifest: r,
    state: o,
    isStatic: c,
    onError: f
  });
}
function Fv(a) {
  at(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function s2({
  basename: a = "/",
  children: r = null,
  location: i,
  navigationType: o = "POP",
  navigator: c,
  static: f = !1,
  useTransitions: d
}) {
  at(
    !so(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let h = a.replace(/^\/*/, "/"), p = E.useMemo(
    () => ({
      basename: h,
      navigator: c,
      static: f,
      useTransitions: d,
      future: {}
    }),
    [h, c, f, d]
  );
  typeof i == "string" && (i = Ir(i));
  let {
    pathname: y = "/",
    search: v = "",
    hash: g = "",
    state: x = null,
    key: w = "default",
    mask: R
  } = i, C = E.useMemo(() => {
    let T = Ra(y, h);
    return T == null ? null : {
      location: {
        pathname: T,
        search: v,
        hash: g,
        state: x,
        key: w,
        mask: R
      },
      navigationType: o
    };
  }, [h, y, v, g, x, w, o, R]);
  return aa(
    C != null,
    `<Router basename="${h}"> is not able to match the URL "${y}${v}${g}" because it does not start with the basename, so the <Router> won't render anything.`
  ), C == null ? null : /* @__PURE__ */ E.createElement(On.Provider, { value: p }, /* @__PURE__ */ E.createElement(uo.Provider, { children: r, value: C }));
}
function c2({
  children: a,
  location: r
}) {
  return Px(qd(a), r);
}
function qd(a, r = []) {
  let i = [];
  return E.Children.forEach(a, (o, c) => {
    if (!E.isValidElement(o))
      return;
    let f = [...r, c];
    if (o.type === E.Fragment) {
      i.push.apply(
        i,
        qd(o.props.children, f)
      );
      return;
    }
    at(
      o.type === Fv,
      `[${typeof o.type == "string" ? o.type : o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), at(
      !o.props.index || !o.props.children,
      "An index route cannot have child routes."
    );
    let d = {
      id: o.props.id || f.join("-"),
      caseSensitive: o.props.caseSensitive,
      element: o.props.element,
      Component: o.props.Component,
      index: o.props.index,
      path: o.props.path,
      middleware: o.props.middleware,
      loader: o.props.loader,
      action: o.props.action,
      hydrateFallbackElement: o.props.hydrateFallbackElement,
      HydrateFallback: o.props.HydrateFallback,
      errorElement: o.props.errorElement,
      ErrorBoundary: o.props.ErrorBoundary,
      hasErrorBoundary: o.props.hasErrorBoundary === !0 || o.props.ErrorBoundary != null || o.props.errorElement != null,
      shouldRevalidate: o.props.shouldRevalidate,
      handle: o.props.handle,
      lazy: o.props.lazy
    };
    o.props.children && (d.children = qd(
      o.props.children,
      f
    )), i.push(d);
  }), i;
}
var ns = "get", as = "application/x-www-form-urlencoded";
function vs(a) {
  return typeof HTMLElement < "u" && a instanceof HTMLElement;
}
function f2(a) {
  return vs(a) && a.tagName.toLowerCase() === "button";
}
function d2(a) {
  return vs(a) && a.tagName.toLowerCase() === "form";
}
function m2(a) {
  return vs(a) && a.tagName.toLowerCase() === "input";
}
function h2(a) {
  return !!(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey);
}
function p2(a, r) {
  return a.button === 0 && // Ignore everything but left clicks
  (!r || r === "_self") && // Let browser handle "target=_blank" etc.
  !h2(a);
}
var Ku = null;
function g2() {
  if (Ku === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Ku = !1;
    } catch {
      Ku = !0;
    }
  return Ku;
}
var y2 = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function bd(a) {
  return a != null && !y2.has(a) ? (aa(
    !1,
    `"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${as}"`
  ), null) : a;
}
function v2(a, r) {
  let i, o, c, f, d;
  if (d2(a)) {
    let h = a.getAttribute("action");
    o = h ? Ra(h, r) : null, i = a.getAttribute("method") || ns, c = bd(a.getAttribute("enctype")) || as, f = new FormData(a);
  } else if (f2(a) || m2(a) && (a.type === "submit" || a.type === "image")) {
    let h = a.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let p = a.getAttribute("formaction") || h.getAttribute("action");
    if (o = p ? Ra(p, r) : null, i = a.getAttribute("formmethod") || h.getAttribute("method") || ns, c = bd(a.getAttribute("formenctype")) || bd(h.getAttribute("enctype")) || as, f = new FormData(h, a), !g2()) {
      let { name: y, type: v, value: g } = a;
      if (v === "image") {
        let x = y ? `${y}.` : "";
        f.append(`${x}x`, "0"), f.append(`${x}y`, "0");
      } else y && f.append(y, g);
    }
  } else {
    if (vs(a))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    i = ns, o = null, c = as, d = a;
  }
  return f && c === "text/plain" && (d = f, f = void 0), { action: o, method: i.toLowerCase(), encType: c, formData: f, body: d };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function sm(a, r) {
  if (a === !1 || a === null || typeof a > "u")
    throw new Error(r);
}
function Wv(a, r, i, o) {
  let c = typeof a == "string" ? new URL(
    a,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : a;
  return i ? c.pathname.endsWith("/") ? c.pathname = `${c.pathname}_.${o}` : c.pathname = `${c.pathname}.${o}` : c.pathname === "/" ? c.pathname = `_root.${o}` : r && Ra(c.pathname, r) === "/" ? c.pathname = `${Xr(r)}/_root.${o}` : c.pathname = `${Xr(c.pathname)}.${o}`, c;
}
async function b2(a, r) {
  if (a.id in r)
    return r[a.id];
  try {
    let i = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      a.module
    );
    return r[a.id] = i, i;
  } catch (i) {
    return console.error(
      `Error loading route module \`${a.module}\`, reloading page...`
    ), console.error(i), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function S2(a) {
  return a == null ? !1 : a.href == null ? a.rel === "preload" && typeof a.imageSrcSet == "string" && typeof a.imageSizes == "string" : typeof a.rel == "string" && typeof a.href == "string";
}
async function E2(a, r, i) {
  let o = await Promise.all(
    a.map(async (c) => {
      let f = r.routes[c.route.id];
      if (f) {
        let d = await b2(f, i);
        return d.links ? d.links() : [];
      }
      return [];
    })
  );
  return R2(
    o.flat(1).filter(S2).filter((c) => c.rel === "stylesheet" || c.rel === "preload").map(
      (c) => c.rel === "stylesheet" ? { ...c, rel: "prefetch", as: "style" } : { ...c, rel: "prefetch" }
    )
  );
}
function x0(a, r, i, o, c, f) {
  let d = (p, y) => i[y] ? p.route.id !== i[y].route.id : !0, h = (p, y) => {
    var v;
    return (
      // param change, /users/123 -> /users/456
      i[y].pathname !== p.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((v = i[y].route.path) == null ? void 0 : v.endsWith("*")) && i[y].params["*"] !== p.params["*"]
    );
  };
  return f === "assets" ? r.filter(
    (p, y) => d(p, y) || h(p, y)
  ) : f === "data" ? r.filter((p, y) => {
    var g;
    let v = o.routes[p.route.id];
    if (!v || !v.hasLoader)
      return !1;
    if (d(p, y) || h(p, y))
      return !0;
    if (p.route.shouldRevalidate) {
      let x = p.route.shouldRevalidate({
        currentUrl: new URL(
          c.pathname + c.search + c.hash,
          window.origin
        ),
        currentParams: ((g = i[0]) == null ? void 0 : g.params) || {},
        nextUrl: new URL(a, window.origin),
        nextParams: p.params,
        defaultShouldRevalidate: !0
      });
      if (typeof x == "boolean")
        return x;
    }
    return !0;
  }) : [];
}
function x2(a, r, { includeHydrateFallback: i } = {}) {
  return C2(
    a.map((o) => {
      let c = r.routes[o.route.id];
      if (!c) return [];
      let f = [c.module];
      return c.clientActionModule && (f = f.concat(c.clientActionModule)), c.clientLoaderModule && (f = f.concat(c.clientLoaderModule)), i && c.hydrateFallbackModule && (f = f.concat(c.hydrateFallbackModule)), c.imports && (f = f.concat(c.imports)), f;
    }).flat(1)
  );
}
function C2(a) {
  return [...new Set(a)];
}
function T2(a) {
  let r = {}, i = Object.keys(a).sort();
  for (let o of i)
    r[o] = a[o];
  return r;
}
function R2(a, r) {
  let i = /* @__PURE__ */ new Set();
  return new Set(r), a.reduce((o, c) => {
    let f = JSON.stringify(T2(c));
    return i.has(f) || (i.add(f), o.push({ key: f, link: c })), o;
  }, []);
}
function cm() {
  let a = E.useContext(Pr);
  return sm(
    a,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), a;
}
function O2() {
  let a = E.useContext(ys);
  return sm(
    a,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), a;
}
var fm = E.createContext(void 0);
fm.displayName = "FrameworkContext";
function bs() {
  let a = E.useContext(fm);
  return sm(
    a,
    "You must render this element inside a <HydratedRouter> element"
  ), a;
}
function w2(a, r) {
  let i = E.useContext(fm), [o, c] = E.useState(!1), [f, d] = E.useState(!1), { onFocus: h, onBlur: p, onMouseEnter: y, onMouseLeave: v, onTouchStart: g } = r, x = E.useRef(null);
  E.useEffect(() => {
    if (a === "render" && d(!0), a === "viewport") {
      let C = (M) => {
        M.forEach((Y) => {
          d(Y.isIntersecting);
        });
      }, T = new IntersectionObserver(C, { threshold: 0.5 });
      return x.current && T.observe(x.current), () => {
        T.disconnect();
      };
    }
  }, [a]), E.useEffect(() => {
    if (o) {
      let C = setTimeout(() => {
        d(!0);
      }, 100);
      return () => {
        clearTimeout(C);
      };
    }
  }, [o]);
  let w = () => {
    c(!0);
  }, R = () => {
    c(!1), d(!1);
  };
  return i ? a !== "intent" ? [f, x, {}] : [
    f,
    x,
    {
      onFocus: Qi(h, w),
      onBlur: Qi(p, R),
      onMouseEnter: Qi(y, w),
      onMouseLeave: Qi(v, R),
      onTouchStart: Qi(g, w)
    }
  ] : [!1, x, {}];
}
function Qi(a, r) {
  return (i) => {
    a && a(i), i.defaultPrevented || r(i);
  };
}
function A2({ page: a, ...r }) {
  let i = Yx(), { nonce: o } = bs(), { router: c } = cm(), f = E.useMemo(
    () => Nv(c.routes, a, c.basename),
    [c.routes, a, c.basename]
  );
  return f ? (r.nonce == null && o && (r = { ...r, nonce: o }), i ? /* @__PURE__ */ E.createElement(M2, { page: a, matches: f, ...r }) : /* @__PURE__ */ E.createElement(N2, { page: a, matches: f, ...r })) : null;
}
function z2(a) {
  let { manifest: r, routeModules: i } = bs(), [o, c] = E.useState([]);
  return E.useEffect(() => {
    let f = !1;
    return E2(a, r, i).then(
      (d) => {
        f || c(d);
      }
    ), () => {
      f = !0;
    };
  }, [a, r, i]), o;
}
function M2({
  page: a,
  matches: r,
  ...i
}) {
  let o = la(), { future: c } = bs(), { basename: f } = cm(), d = E.useMemo(() => {
    if (a === o.pathname + o.search + o.hash)
      return [];
    let h = Wv(
      a,
      f,
      c.v8_trailingSlashAwareDataRequests,
      "rsc"
    ), p = !1, y = [];
    for (let v of r)
      typeof v.route.shouldRevalidate == "function" ? p = !0 : y.push(v.route.id);
    return p && y.length > 0 && h.searchParams.set("_routes", y.join(",")), [h.pathname + h.search];
  }, [
    f,
    c.v8_trailingSlashAwareDataRequests,
    a,
    o,
    r
  ]);
  return /* @__PURE__ */ E.createElement(E.Fragment, null, d.map((h) => /* @__PURE__ */ E.createElement("link", { key: h, rel: "prefetch", as: "fetch", href: h, ...i })));
}
function N2({
  page: a,
  matches: r,
  ...i
}) {
  let o = la(), { future: c, manifest: f, routeModules: d } = bs(), { basename: h } = cm(), { loaderData: p, matches: y } = O2(), v = E.useMemo(
    () => x0(
      a,
      r,
      y,
      f,
      o,
      "data"
    ),
    [a, r, y, f, o]
  ), g = E.useMemo(
    () => x0(
      a,
      r,
      y,
      f,
      o,
      "assets"
    ),
    [a, r, y, f, o]
  ), x = E.useMemo(() => {
    if (a === o.pathname + o.search + o.hash)
      return [];
    let C = /* @__PURE__ */ new Set(), T = !1;
    if (r.forEach((Y) => {
      var j;
      let U = f.routes[Y.route.id];
      !U || !U.hasLoader || (!v.some((_) => _.route.id === Y.route.id) && Y.route.id in p && ((j = d[Y.route.id]) != null && j.shouldRevalidate) || U.hasClientLoader ? T = !0 : C.add(Y.route.id));
    }), C.size === 0)
      return [];
    let M = Wv(
      a,
      h,
      c.v8_trailingSlashAwareDataRequests,
      "data"
    );
    return T && C.size > 0 && M.searchParams.set(
      "_routes",
      r.filter((Y) => C.has(Y.route.id)).map((Y) => Y.route.id).join(",")
    ), [M.pathname + M.search];
  }, [
    h,
    c.v8_trailingSlashAwareDataRequests,
    p,
    o,
    f,
    v,
    r,
    a,
    d
  ]), w = E.useMemo(
    () => x2(g, f),
    [g, f]
  ), R = z2(g);
  return /* @__PURE__ */ E.createElement(E.Fragment, null, x.map((C) => /* @__PURE__ */ E.createElement("link", { key: C, rel: "prefetch", as: "fetch", href: C, ...i })), w.map((C) => /* @__PURE__ */ E.createElement("link", { key: C, rel: "modulepreload", href: C, ...i })), R.map(({ key: C, link: T }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ E.createElement(
      "link",
      {
        key: C,
        nonce: i.nonce,
        ...T,
        crossOrigin: T.crossOrigin ?? i.crossOrigin
      }
    )
  )));
}
function _2(...a) {
  return (r) => {
    a.forEach((i) => {
      typeof i == "function" ? i(r) : i != null && (i.current = r);
    });
  };
}
var D2 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  D2 && (window.__reactRouterVersion = // @ts-expect-error
  "7.18.4");
} catch {
}
function B2({
  basename: a,
  children: r,
  useTransitions: i,
  window: o
}) {
  let c = E.useRef();
  c.current == null && (c.current = dx({ window: o, v5Compat: !0 }));
  let f = c.current, [d, h] = E.useState({
    action: f.action,
    location: f.location
  }), p = E.useCallback(
    (y) => {
      i === !1 ? h(y) : E.startTransition(() => h(y));
    },
    [i]
  );
  return E.useLayoutEffect(() => f.listen(p), [f, p]), /* @__PURE__ */ E.createElement(
    s2,
    {
      basename: a,
      children: r,
      location: d.location,
      navigationType: d.action,
      navigator: f,
      useTransitions: i
    }
  );
}
var eb = E.forwardRef(
  function({
    onClick: r,
    discover: i = "render",
    prefetch: o = "none",
    relative: c,
    reloadDocument: f,
    replace: d,
    mask: h,
    state: p,
    target: y,
    to: v,
    preventScrollReset: g,
    viewTransition: x,
    defaultShouldRevalidate: w,
    ...R
  }, C) {
    let { basename: T, navigator: M, useTransitions: Y } = E.useContext(On), U = typeof v == "string" && lm.test(v), j = kv(v, T);
    v = j.to;
    let _ = Zx(v, { relative: c }), X = la(), q = null;
    if (h) {
      let te = rm(
        h,
        [],
        X.mask ? X.mask.pathname : "/",
        !0
      );
      T !== "/" && (te.pathname = te.pathname === "/" ? T : Un([T, te.pathname])), q = M.createHref(te);
    }
    let [P, J, S] = w2(
      o,
      R
    ), G = L2(v, {
      replace: d,
      mask: h,
      state: p,
      target: y,
      preventScrollReset: g,
      relative: c,
      viewTransition: x,
      defaultShouldRevalidate: w,
      useTransitions: Y
    });
    function ee(te) {
      r && r(te), te.defaultPrevented || G(te);
    }
    let ae = !(j.isExternal || f), oe = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ E.createElement(
        "a",
        {
          ...R,
          ...S,
          href: (ae ? q : void 0) || j.absoluteURL || _,
          onClick: ae ? ee : r,
          ref: _2(C, J),
          target: y,
          "data-discover": !U && i === "render" ? "true" : void 0
        }
      )
    );
    return P && !U ? /* @__PURE__ */ E.createElement(E.Fragment, null, oe, /* @__PURE__ */ E.createElement(A2, { page: _ })) : oe;
  }
);
eb.displayName = "Link";
var U2 = E.forwardRef(
  function({
    "aria-current": r = "page",
    caseSensitive: i = !1,
    className: o = "",
    end: c = !1,
    style: f,
    to: d,
    viewTransition: h,
    children: p,
    ...y
  }, v) {
    let g = co(d, { relative: y.relative }), x = la(), w = E.useContext(ys), { navigator: R, basename: C } = E.useContext(On), T = w != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    V2(g) && h === !0, M = R.encodeLocation ? R.encodeLocation(g).pathname : g.pathname, Y = x.pathname, U = w && w.navigation && w.navigation.location ? w.navigation.location.pathname : null;
    i || (Y = Y.toLowerCase(), U = U ? U.toLowerCase() : null, M = M.toLowerCase()), U && C && (U = Ra(U, C) || U);
    const j = M !== "/" && M.endsWith("/") ? M.length - 1 : M.length;
    let _ = Y === M || !c && Y.startsWith(M) && Y.charAt(j) === "/", X = U != null && (U === M || !c && U.startsWith(M) && U.charAt(M.length) === "/"), q = {
      isActive: _,
      isPending: X,
      isTransitioning: T
    }, P = _ ? r : void 0, J;
    typeof o == "function" ? J = o(q) : J = [
      o,
      _ ? "active" : null,
      X ? "pending" : null,
      T ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let S = typeof f == "function" ? f(q) : f;
    return /* @__PURE__ */ E.createElement(
      eb,
      {
        ...y,
        "aria-current": P,
        className: J,
        ref: v,
        style: S,
        to: d,
        viewTransition: h
      },
      typeof p == "function" ? p(q) : p
    );
  }
);
U2.displayName = "NavLink";
var j2 = E.forwardRef(
  ({
    discover: a = "render",
    fetcherKey: r,
    navigate: i,
    reloadDocument: o,
    replace: c,
    state: f,
    method: d = ns,
    action: h,
    onSubmit: p,
    relative: y,
    preventScrollReset: v,
    viewTransition: g,
    defaultShouldRevalidate: x,
    ...w
  }, R) => {
    let { useTransitions: C } = E.useContext(On), T = Y2(), M = q2(h, { relative: y }), Y = d.toLowerCase() === "get" ? "get" : "post", U = typeof h == "string" && lm.test(h), j = (_) => {
      if (p && p(_), _.defaultPrevented) return;
      _.preventDefault();
      let X = _.nativeEvent.submitter, q = (X == null ? void 0 : X.getAttribute("formmethod")) || d, P = () => T(X || _.currentTarget, {
        fetcherKey: r,
        method: q,
        navigate: i,
        replace: c,
        state: f,
        relative: y,
        preventScrollReset: v,
        viewTransition: g,
        defaultShouldRevalidate: x
      });
      C && i !== !1 ? E.startTransition(() => P()) : P();
    };
    return /* @__PURE__ */ E.createElement(
      "form",
      {
        ref: R,
        method: Y,
        action: M,
        onSubmit: o ? p : j,
        ...w,
        "data-discover": !U && a === "render" ? "true" : void 0
      }
    );
  }
);
j2.displayName = "Form";
function H2(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function tb(a) {
  let r = E.useContext(Pr);
  return at(r, H2(a)), r;
}
function L2(a, {
  target: r,
  replace: i,
  mask: o,
  state: c,
  preventScrollReset: f,
  relative: d,
  viewTransition: h,
  defaultShouldRevalidate: p,
  useTransitions: y
} = {}) {
  let v = Zv(), g = la(), x = co(a, { relative: d });
  return E.useCallback(
    (w) => {
      if (p2(w, r)) {
        w.preventDefault();
        let R = i !== void 0 ? i : Gr(g) === Gr(x), C = () => v(a, {
          replace: R,
          mask: o,
          state: c,
          preventScrollReset: f,
          relative: d,
          viewTransition: h,
          defaultShouldRevalidate: p
        });
        y ? E.startTransition(() => C()) : C();
      }
    },
    [
      g,
      v,
      x,
      i,
      o,
      c,
      r,
      a,
      f,
      d,
      h,
      p,
      y
    ]
  );
}
var k2 = 0, $2 = () => `__${String(++k2)}__`;
function Y2() {
  let { router: a } = tb(
    "useSubmit"
    /* UseSubmit */
  ), { basename: r } = E.useContext(On), i = r2(), o = a.fetch, c = a.navigate;
  return E.useCallback(
    async (f, d = {}) => {
      let { action: h, method: p, encType: y, formData: v, body: g } = v2(
        f,
        r
      );
      if (d.navigate === !1) {
        let x = d.fetcherKey || $2();
        await o(x, i, d.action || h, {
          defaultShouldRevalidate: d.defaultShouldRevalidate,
          preventScrollReset: d.preventScrollReset,
          formData: v,
          body: g,
          formMethod: d.method || p,
          formEncType: d.encType || y,
          flushSync: d.flushSync
        });
      } else
        await c(d.action || h, {
          defaultShouldRevalidate: d.defaultShouldRevalidate,
          preventScrollReset: d.preventScrollReset,
          formData: v,
          body: g,
          formMethod: d.method || p,
          formEncType: d.encType || y,
          replace: d.replace,
          state: d.state,
          fromRouteId: i,
          flushSync: d.flushSync,
          viewTransition: d.viewTransition
        });
    },
    [o, c, r, i]
  );
}
function q2(a, { relative: r } = {}) {
  let { basename: i } = E.useContext(On), o = E.useContext(wa);
  at(o, "useFormAction must be used inside a RouteContext");
  let [c] = o.matches.slice(-1), f = { ...co(a || ".", { relative: r }) }, d = la();
  if (a == null) {
    f.search = d.search;
    let h = new URLSearchParams(f.search), p = h.getAll("index");
    if (p.some((v) => v === "")) {
      h.delete("index"), p.filter((g) => g).forEach((g) => h.append("index", g));
      let v = h.toString();
      f.search = v ? `?${v}` : "";
    }
  }
  return (!a || a === ".") && c.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), i !== "/" && (f.pathname = f.pathname === "/" ? i : Un([i, f.pathname])), Gr(f);
}
function V2(a, { relative: r } = {}) {
  let i = E.useContext(Gv);
  at(
    i != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: o } = tb(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), c = co(a, { relative: r });
  if (!i.isTransitioning)
    return !1;
  let f = Ra(i.currentLocation.pathname, o) || i.currentLocation.pathname, d = Ra(i.nextLocation.pathname, o) || i.nextLocation.pathname;
  return ss(c.pathname, d) != null || ss(c.pathname, f) != null;
}
var Sd = { exports: {} }, zt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var C0;
function G2() {
  if (C0) return zt;
  C0 = 1;
  var a = am();
  function r(v) {
    var g = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var x = 2; x < arguments.length; x++)
        g += "&args[]=" + encodeURIComponent(arguments[x]);
    }
    return "Minified React error #" + v + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function i() {
  }
  var o = {
    d: {
      f: i,
      r: function() {
        throw Error(r(522));
      },
      D: i,
      C: i,
      L: i,
      m: i,
      X: i,
      S: i,
      M: i
    },
    p: 0,
    findDOMNode: null
  }, c = Symbol.for("react.portal"), f = Symbol.for("react.recoverable"), d = Symbol.for("react.optimistic_key");
  function h(v, g, x) {
    var w = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: w == null ? null : w === d ? d : "" + w,
      children: v,
      containerInfo: g,
      implementation: x
    };
  }
  var p = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(v, g) {
    if (v === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, zt.browser = function(v) {
    return { $$typeof: f, _reason: v };
  }, zt.createPortal = function(v, g) {
    var x = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(r(299));
    return h(v, g, null, x);
  }, zt.flushSync = function(v) {
    var g = p.T, x = o.p;
    try {
      if (p.T = null, o.p = 2, v) return v();
    } finally {
      p.T = g, o.p = x, o.d.f();
    }
  }, zt.preconnect = function(v, g) {
    typeof v == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, o.d.C(v, g));
  }, zt.prefetchDNS = function(v) {
    typeof v == "string" && o.d.D(v);
  }, zt.preinit = function(v, g) {
    if (typeof v == "string" && g && typeof g.as == "string") {
      var x = g.as, w = y(x, g.crossOrigin), R = typeof g.integrity == "string" ? g.integrity : void 0, C = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      x === "style" ? o.d.S(
        v,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: w,
          integrity: R,
          fetchPriority: C
        }
      ) : x === "script" && o.d.X(v, {
        crossOrigin: w,
        integrity: R,
        fetchPriority: C,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, zt.preinitModule = function(v, g) {
    if (typeof v == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var x = y(
            g.as,
            g.crossOrigin
          );
          o.d.M(v, {
            crossOrigin: x,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0
          });
        }
      } else g == null && o.d.M(v);
  }, zt.preload = function(v, g) {
    if (typeof v == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var x = g.as, w = y(x, g.crossOrigin);
      o.d.L(v, x, {
        crossOrigin: w,
        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0,
        type: typeof g.type == "string" ? g.type : void 0,
        fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
        referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
        imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
        imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
        media: typeof g.media == "string" ? g.media : void 0
      });
    }
  }, zt.preloadModule = function(v, g) {
    if (typeof v == "string")
      if (g) {
        var x = y(g.as, g.crossOrigin);
        o.d.m(v, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: x,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0
        });
      } else o.d.m(v);
  }, zt.requestFormReset = function(v) {
    o.d.r(v);
  }, zt.unstable_batchedUpdates = function(v, g) {
    return v(g);
  }, zt.useFormState = function(v, g, x) {
    return p.H.useFormState(v, g, x);
  }, zt.useFormStatus = function() {
    return p.H.useHostTransitionStatus();
  }, zt.version = "19.3.1", zt;
}
var T0;
function nb() {
  if (T0) return Sd.exports;
  T0 = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (r) {
        console.error(r);
      }
  }
  return a(), Sd.exports = G2(), Sd.exports;
}
var ab = nb();
const Zu = /* @__PURE__ */ nm(ab), no = {
  black: "#000",
  white: "#fff"
}, Dr = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Br = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Ur = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, jr = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Hr = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, Ki = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, X2 = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
};
function Ll(a, ...r) {
  const i = new URL(`https://mui.com/production-error/?code=${a}`);
  return r.forEach((o) => i.searchParams.append("args[]", o)), `Minified MUI error #${a}; visit ${i} for the full message.`;
}
const ta = "$$material";
function cs() {
  return cs = Object.assign ? Object.assign.bind() : function(a) {
    for (var r = 1; r < arguments.length; r++) {
      var i = arguments[r];
      for (var o in i) ({}).hasOwnProperty.call(i, o) && (a[o] = i[o]);
    }
    return a;
  }, cs.apply(null, arguments);
}
function Q2(a) {
  if (a.sheet)
    return a.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === a)
      return document.styleSheets[r];
}
function K2(a) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", a.key), a.nonce !== void 0 && r.setAttribute("nonce", a.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var lb = /* @__PURE__ */ (function() {
  function a(i) {
    var o = this;
    this._insertTag = function(c) {
      var f;
      o.tags.length === 0 ? o.insertionPoint ? f = o.insertionPoint.nextSibling : o.prepend ? f = o.container.firstChild : f = o.before : f = o.tags[o.tags.length - 1].nextSibling, o.container.insertBefore(c, f), o.tags.push(c);
    }, this.isSpeedy = i.speedy === void 0 ? !0 : i.speedy, this.tags = [], this.ctr = 0, this.nonce = i.nonce, this.key = i.key, this.container = i.container, this.prepend = i.prepend, this.insertionPoint = i.insertionPoint, this.before = null;
  }
  var r = a.prototype;
  return r.hydrate = function(o) {
    o.forEach(this._insertTag);
  }, r.insert = function(o) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(K2(this));
    var c = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var f = Q2(c);
      try {
        f.insertRule(o, f.cssRules.length);
      } catch {
      }
    } else
      c.appendChild(document.createTextNode(o));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(o) {
      var c;
      return (c = o.parentNode) == null ? void 0 : c.removeChild(o);
    }), this.tags = [], this.ctr = 0;
  }, a;
})(), _t = "-ms-", fs = "-moz-", Be = "-webkit-", rb = "comm", dm = "rule", mm = "decl", Z2 = "@import", ib = "@keyframes", I2 = "@layer", P2 = Math.abs, Ss = String.fromCharCode, J2 = Object.assign;
function F2(a, r) {
  return Mt(a, 0) ^ 45 ? (((r << 2 ^ Mt(a, 0)) << 2 ^ Mt(a, 1)) << 2 ^ Mt(a, 2)) << 2 ^ Mt(a, 3) : 0;
}
function ob(a) {
  return a.trim();
}
function W2(a, r) {
  return (a = r.exec(a)) ? a[0] : a;
}
function Ue(a, r, i) {
  return a.replace(r, i);
}
function Vd(a, r) {
  return a.indexOf(r);
}
function Mt(a, r) {
  return a.charCodeAt(r) | 0;
}
function ao(a, r, i) {
  return a.slice(r, i);
}
function Pn(a) {
  return a.length;
}
function hm(a) {
  return a.length;
}
function Iu(a, r) {
  return r.push(a), a;
}
function eC(a, r) {
  return a.map(r).join("");
}
var Es = 1, Qr = 1, ub = 0, Kt = 0, ht = 0, Jr = "";
function xs(a, r, i, o, c, f, d) {
  return { value: a, root: r, parent: i, type: o, props: c, children: f, line: Es, column: Qr, length: d, return: "" };
}
function Zi(a, r) {
  return J2(xs("", null, null, "", null, null, 0), a, { length: -a.length }, r);
}
function tC() {
  return ht;
}
function nC() {
  return ht = Kt > 0 ? Mt(Jr, --Kt) : 0, Qr--, ht === 10 && (Qr = 1, Es--), ht;
}
function sn() {
  return ht = Kt < ub ? Mt(Jr, Kt++) : 0, Qr++, ht === 10 && (Qr = 1, Es++), ht;
}
function na() {
  return Mt(Jr, Kt);
}
function ls() {
  return Kt;
}
function fo(a, r) {
  return ao(Jr, a, r);
}
function lo(a) {
  switch (a) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function sb(a) {
  return Es = Qr = 1, ub = Pn(Jr = a), Kt = 0, [];
}
function cb(a) {
  return Jr = "", a;
}
function rs(a) {
  return ob(fo(Kt - 1, Gd(a === 91 ? a + 2 : a === 40 ? a + 1 : a)));
}
function aC(a) {
  for (; (ht = na()) && ht < 33; )
    sn();
  return lo(a) > 2 || lo(ht) > 3 ? "" : " ";
}
function lC(a, r) {
  for (; --r && sn() && !(ht < 48 || ht > 102 || ht > 57 && ht < 65 || ht > 70 && ht < 97); )
    ;
  return fo(a, ls() + (r < 6 && na() == 32 && sn() == 32));
}
function Gd(a) {
  for (; sn(); )
    switch (ht) {
      // ] ) " '
      case a:
        return Kt;
      // " '
      case 34:
      case 39:
        a !== 34 && a !== 39 && Gd(ht);
        break;
      // (
      case 40:
        a === 41 && Gd(a);
        break;
      // \
      case 92:
        sn();
        break;
    }
  return Kt;
}
function rC(a, r) {
  for (; sn() && a + ht !== 57; )
    if (a + ht === 84 && na() === 47)
      break;
  return "/*" + fo(r, Kt - 1) + "*" + Ss(a === 47 ? a : sn());
}
function iC(a) {
  for (; !lo(na()); )
    sn();
  return fo(a, Kt);
}
function oC(a) {
  return cb(is("", null, null, null, [""], a = sb(a), 0, [0], a));
}
function is(a, r, i, o, c, f, d, h, p) {
  for (var y = 0, v = 0, g = d, x = 0, w = 0, R = 0, C = 1, T = 1, M = 1, Y = 0, U = "", j = c, _ = f, X = o, q = U; T; )
    switch (R = Y, Y = sn()) {
      // (
      case 40:
        if (R != 108 && Mt(q, g - 1) == 58) {
          Vd(q += Ue(rs(Y), "&", "&\f"), "&\f") != -1 && (M = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        q += rs(Y);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        q += aC(R);
        break;
      // \
      case 92:
        q += lC(ls() - 1, 7);
        continue;
      // /
      case 47:
        switch (na()) {
          case 42:
          case 47:
            Iu(uC(rC(sn(), ls()), r, i), p);
            break;
          default:
            q += "/";
        }
        break;
      // {
      case 123 * C:
        h[y++] = Pn(q) * M;
      // } ; \0
      case 125 * C:
      case 59:
      case 0:
        switch (Y) {
          // \0 }
          case 0:
          case 125:
            T = 0;
          // ;
          case 59 + v:
            M == -1 && (q = Ue(q, /\f/g, "")), w > 0 && Pn(q) - g && Iu(w > 32 ? O0(q + ";", o, i, g - 1) : O0(Ue(q, " ", "") + ";", o, i, g - 2), p);
            break;
          // @ ;
          case 59:
            q += ";";
          // { rule/at-rule
          default:
            if (Iu(X = R0(q, r, i, y, v, c, h, U, j = [], _ = [], g), f), Y === 123)
              if (v === 0)
                is(q, r, X, X, j, f, g, h, _);
              else
                switch (x === 99 && Mt(q, 3) === 110 ? 100 : x) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    is(a, X, X, o && Iu(R0(a, X, X, 0, 0, c, h, U, c, j = [], g), _), c, _, g, h, o ? j : _);
                    break;
                  default:
                    is(q, X, X, X, [""], _, 0, h, _);
                }
        }
        y = v = w = 0, C = M = 1, U = q = "", g = d;
        break;
      // :
      case 58:
        g = 1 + Pn(q), w = R;
      default:
        if (C < 1) {
          if (Y == 123)
            --C;
          else if (Y == 125 && C++ == 0 && nC() == 125)
            continue;
        }
        switch (q += Ss(Y), Y * C) {
          // &
          case 38:
            M = v > 0 ? 1 : (q += "\f", -1);
            break;
          // ,
          case 44:
            h[y++] = (Pn(q) - 1) * M, M = 1;
            break;
          // @
          case 64:
            na() === 45 && (q += rs(sn())), x = na(), v = g = Pn(U = q += iC(ls())), Y++;
            break;
          // -
          case 45:
            R === 45 && Pn(q) == 2 && (C = 0);
        }
    }
  return f;
}
function R0(a, r, i, o, c, f, d, h, p, y, v) {
  for (var g = c - 1, x = c === 0 ? f : [""], w = hm(x), R = 0, C = 0, T = 0; R < o; ++R)
    for (var M = 0, Y = ao(a, g + 1, g = P2(C = d[R])), U = a; M < w; ++M)
      (U = ob(C > 0 ? x[M] + " " + Y : Ue(Y, /&\f/g, x[M]))) && (p[T++] = U);
  return xs(a, r, i, c === 0 ? dm : h, p, y, v);
}
function uC(a, r, i) {
  return xs(a, r, i, rb, Ss(tC()), ao(a, 2, -2), 0);
}
function O0(a, r, i, o) {
  return xs(a, r, i, mm, ao(a, 0, o), ao(a, o + 1, -1), o);
}
function Yr(a, r) {
  for (var i = "", o = hm(a), c = 0; c < o; c++)
    i += r(a[c], c, a, r) || "";
  return i;
}
function sC(a, r, i, o) {
  switch (a.type) {
    case I2:
      if (a.children.length) break;
    case Z2:
    case mm:
      return a.return = a.return || a.value;
    case rb:
      return "";
    case ib:
      return a.return = a.value + "{" + Yr(a.children, o) + "}";
    case dm:
      a.value = a.props.join(",");
  }
  return Pn(i = Yr(a.children, o)) ? a.return = a.value + "{" + i + "}" : "";
}
function cC(a) {
  var r = hm(a);
  return function(i, o, c, f) {
    for (var d = "", h = 0; h < r; h++)
      d += a[h](i, o, c, f) || "";
    return d;
  };
}
function fC(a) {
  return function(r) {
    r.root || (r = r.return) && a(r);
  };
}
function fb(a) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(i) {
    return r[i] === void 0 && (r[i] = a(i)), r[i];
  };
}
var dC = function(r, i, o) {
  for (var c = 0, f = 0; c = f, f = na(), c === 38 && f === 12 && (i[o] = 1), !lo(f); )
    sn();
  return fo(r, Kt);
}, mC = function(r, i) {
  var o = -1, c = 44;
  do
    switch (lo(c)) {
      case 0:
        c === 38 && na() === 12 && (i[o] = 1), r[o] += dC(Kt - 1, i, o);
        break;
      case 2:
        r[o] += rs(c);
        break;
      case 4:
        if (c === 44) {
          r[++o] = na() === 58 ? "&\f" : "", i[o] = r[o].length;
          break;
        }
      // fallthrough
      default:
        r[o] += Ss(c);
    }
  while (c = sn());
  return r;
}, hC = function(r, i) {
  return cb(mC(sb(r), i));
}, w0 = /* @__PURE__ */ new WeakMap(), pC = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var i = r.value, o = r.parent, c = r.column === o.column && r.line === o.line; o.type !== "rule"; )
      if (o = o.parent, !o) return;
    if (!(r.props.length === 1 && i.charCodeAt(0) !== 58 && !w0.get(o)) && !c) {
      w0.set(r, !0);
      for (var f = [], d = hC(i, f), h = o.props, p = 0, y = 0; p < d.length; p++)
        for (var v = 0; v < h.length; v++, y++)
          r.props[y] = f[p] ? d[p].replace(/&\f/g, h[v]) : h[v] + " " + d[p];
    }
  }
}, gC = function(r) {
  if (r.type === "decl") {
    var i = r.value;
    // charcode for l
    i.charCodeAt(0) === 108 && // charcode for b
    i.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
};
function db(a, r) {
  switch (F2(a, r)) {
    // color-adjust
    case 5103:
      return Be + "print-" + a + a;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Be + a + a;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Be + a + fs + a + _t + a + a;
    // flex, flex-direction
    case 6828:
    case 4268:
      return Be + a + _t + a + a;
    // order
    case 6165:
      return Be + a + _t + "flex-" + a + a;
    // align-items
    case 5187:
      return Be + a + Ue(a, /(\w+).+(:[^]+)/, Be + "box-$1$2" + _t + "flex-$1$2") + a;
    // align-self
    case 5443:
      return Be + a + _t + "flex-item-" + Ue(a, /flex-|-self/, "") + a;
    // align-content
    case 4675:
      return Be + a + _t + "flex-line-pack" + Ue(a, /align-content|flex-|-self/, "") + a;
    // flex-shrink
    case 5548:
      return Be + a + _t + Ue(a, "shrink", "negative") + a;
    // flex-basis
    case 5292:
      return Be + a + _t + Ue(a, "basis", "preferred-size") + a;
    // flex-grow
    case 6060:
      return Be + "box-" + Ue(a, "-grow", "") + Be + a + _t + Ue(a, "grow", "positive") + a;
    // transition
    case 4554:
      return Be + Ue(a, /([^-])(transform)/g, "$1" + Be + "$2") + a;
    // cursor
    case 6187:
      return Ue(Ue(Ue(a, /(zoom-|grab)/, Be + "$1"), /(image-set)/, Be + "$1"), a, "") + a;
    // background, background-image
    case 5495:
    case 3959:
      return Ue(a, /(image-set\([^]*)/, Be + "$1$`$1");
    // justify-content
    case 4968:
      return Ue(Ue(a, /(.+:)(flex-)?(.*)/, Be + "box-pack:$3" + _t + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Be + a + a;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Ue(a, /(.+)-inline(.+)/, Be + "$1$2") + a;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Pn(a) - 1 - r > 6) switch (Mt(a, r + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (Mt(a, r + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return Ue(a, /(.+:)(.+)-([^]+)/, "$1" + Be + "$2-$3$1" + fs + (Mt(a, r + 3) == 108 ? "$3" : "$2-$3")) + a;
        // (s)tretch
        case 115:
          return ~Vd(a, "stretch") ? db(Ue(a, "stretch", "fill-available"), r) + a : a;
      }
      break;
    // position: sticky
    case 4949:
      if (Mt(a, r + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (Mt(a, Pn(a) - 3 - (~Vd(a, "!important") && 10))) {
        // stic(k)y
        case 107:
          return Ue(a, ":", ":" + Be) + a;
        // (inline-)?fl(e)x
        case 101:
          return Ue(a, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Be + (Mt(a, 14) === 45 ? "inline-" : "") + "box$3$1" + Be + "$2$3$1" + _t + "$2box$3") + a;
      }
      break;
    // writing-mode
    case 5936:
      switch (Mt(a, r + 11)) {
        // vertical-l(r)
        case 114:
          return Be + a + _t + Ue(a, /[svh]\w+-[tblr]{2}/, "tb") + a;
        // vertical-r(l)
        case 108:
          return Be + a + _t + Ue(a, /[svh]\w+-[tblr]{2}/, "tb-rl") + a;
        // horizontal(-)tb
        case 45:
          return Be + a + _t + Ue(a, /[svh]\w+-[tblr]{2}/, "lr") + a;
      }
      return Be + a + _t + a + a;
  }
  return a;
}
var yC = function(r, i, o, c) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case mm:
      r.return = db(r.value, r.length);
      break;
    case ib:
      return Yr([Zi(r, {
        value: Ue(r.value, "@", "@" + Be)
      })], c);
    case dm:
      if (r.length) return eC(r.props, function(f) {
        switch (W2(f, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Yr([Zi(r, {
              props: [Ue(f, /:(read-\w+)/, ":" + fs + "$1")]
            })], c);
          // :placeholder
          case "::placeholder":
            return Yr([Zi(r, {
              props: [Ue(f, /:(plac\w+)/, ":" + Be + "input-$1")]
            }), Zi(r, {
              props: [Ue(f, /:(plac\w+)/, ":" + fs + "$1")]
            }), Zi(r, {
              props: [Ue(f, /:(plac\w+)/, _t + "input-$1")]
            })], c);
        }
        return "";
      });
  }
}, vC = [yC], mb = function(r) {
  var i = r.key;
  if (i === "css") {
    var o = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(o, function(C) {
      var T = C.getAttribute("data-emotion");
      T.indexOf(" ") !== -1 && (document.head.appendChild(C), C.setAttribute("data-s", ""));
    });
  }
  var c = r.stylisPlugins || vC, f = {}, d, h = [];
  d = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + i + ' "]'),
    function(C) {
      for (var T = C.getAttribute("data-emotion").split(" "), M = 1; M < T.length; M++)
        f[T[M]] = !0;
      h.push(C);
    }
  );
  var p, y = [pC, gC];
  {
    var v, g = [sC, fC(function(C) {
      v.insert(C);
    })], x = cC(y.concat(c, g)), w = function(T) {
      return Yr(oC(T), x);
    };
    p = function(T, M, Y, U) {
      v = Y, w(T ? T + "{" + M.styles + "}" : M.styles), U && (R.inserted[M.name] = !0);
    };
  }
  var R = {
    key: i,
    sheet: new lb({
      key: i,
      container: d,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: f,
    registered: {},
    insert: p
  };
  return R.sheet.hydrate(h), R;
}, Ed = { exports: {} }, ke = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var A0;
function bC() {
  if (A0) return ke;
  A0 = 1;
  var a = typeof Symbol == "function" && Symbol.for, r = a ? Symbol.for("react.element") : 60103, i = a ? Symbol.for("react.portal") : 60106, o = a ? Symbol.for("react.fragment") : 60107, c = a ? Symbol.for("react.strict_mode") : 60108, f = a ? Symbol.for("react.profiler") : 60114, d = a ? Symbol.for("react.provider") : 60109, h = a ? Symbol.for("react.context") : 60110, p = a ? Symbol.for("react.async_mode") : 60111, y = a ? Symbol.for("react.concurrent_mode") : 60111, v = a ? Symbol.for("react.forward_ref") : 60112, g = a ? Symbol.for("react.suspense") : 60113, x = a ? Symbol.for("react.suspense_list") : 60120, w = a ? Symbol.for("react.memo") : 60115, R = a ? Symbol.for("react.lazy") : 60116, C = a ? Symbol.for("react.block") : 60121, T = a ? Symbol.for("react.fundamental") : 60117, M = a ? Symbol.for("react.responder") : 60118, Y = a ? Symbol.for("react.scope") : 60119;
  function U(_) {
    if (typeof _ == "object" && _ !== null) {
      var X = _.$$typeof;
      switch (X) {
        case r:
          switch (_ = _.type, _) {
            case p:
            case y:
            case o:
            case f:
            case c:
            case g:
              return _;
            default:
              switch (_ = _ && _.$$typeof, _) {
                case h:
                case v:
                case R:
                case w:
                case d:
                  return _;
                default:
                  return X;
              }
          }
        case i:
          return X;
      }
    }
  }
  function j(_) {
    return U(_) === y;
  }
  return ke.AsyncMode = p, ke.ConcurrentMode = y, ke.ContextConsumer = h, ke.ContextProvider = d, ke.Element = r, ke.ForwardRef = v, ke.Fragment = o, ke.Lazy = R, ke.Memo = w, ke.Portal = i, ke.Profiler = f, ke.StrictMode = c, ke.Suspense = g, ke.isAsyncMode = function(_) {
    return j(_) || U(_) === p;
  }, ke.isConcurrentMode = j, ke.isContextConsumer = function(_) {
    return U(_) === h;
  }, ke.isContextProvider = function(_) {
    return U(_) === d;
  }, ke.isElement = function(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === r;
  }, ke.isForwardRef = function(_) {
    return U(_) === v;
  }, ke.isFragment = function(_) {
    return U(_) === o;
  }, ke.isLazy = function(_) {
    return U(_) === R;
  }, ke.isMemo = function(_) {
    return U(_) === w;
  }, ke.isPortal = function(_) {
    return U(_) === i;
  }, ke.isProfiler = function(_) {
    return U(_) === f;
  }, ke.isStrictMode = function(_) {
    return U(_) === c;
  }, ke.isSuspense = function(_) {
    return U(_) === g;
  }, ke.isValidElementType = function(_) {
    return typeof _ == "string" || typeof _ == "function" || _ === o || _ === y || _ === f || _ === c || _ === g || _ === x || typeof _ == "object" && _ !== null && (_.$$typeof === R || _.$$typeof === w || _.$$typeof === d || _.$$typeof === h || _.$$typeof === v || _.$$typeof === T || _.$$typeof === M || _.$$typeof === Y || _.$$typeof === C);
  }, ke.typeOf = U, ke;
}
var z0;
function SC() {
  return z0 || (z0 = 1, Ed.exports = bC()), Ed.exports;
}
var xd, M0;
function EC() {
  if (M0) return xd;
  M0 = 1;
  var a = SC(), r = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, i = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, o = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, c = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, f = {};
  f[a.ForwardRef] = o, f[a.Memo] = c;
  function d(R) {
    return a.isMemo(R) ? c : f[R.$$typeof] || r;
  }
  var h = Object.defineProperty, p = Object.getOwnPropertyNames, y = Object.getOwnPropertySymbols, v = Object.getOwnPropertyDescriptor, g = Object.getPrototypeOf, x = Object.prototype;
  function w(R, C, T) {
    if (typeof C != "string") {
      if (x) {
        var M = g(C);
        M && M !== x && w(R, M, T);
      }
      var Y = p(C);
      y && (Y = Y.concat(y(C)));
      for (var U = d(R), j = d(C), _ = 0; _ < Y.length; ++_) {
        var X = Y[_];
        if (!i[X] && !(T && T[X]) && !(j && j[X]) && !(U && U[X])) {
          var q = v(C, X);
          try {
            h(R, X, q);
          } catch {
          }
        }
      }
    }
    return R;
  }
  return xd = w, xd;
}
EC();
var xC = !0;
function hb(a, r, i) {
  var o = "";
  return i.split(" ").forEach(function(c) {
    a[c] !== void 0 ? r.push(a[c] + ";") : c && (o += c + " ");
  }), o;
}
var pm = function(r, i, o) {
  var c = r.key + "-" + i.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (o === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  xC === !1) && r.registered[c] === void 0 && (r.registered[c] = i.styles);
}, gm = function(r, i, o) {
  pm(r, i, o);
  var c = r.key + "-" + i.name;
  if (r.inserted[i.name] === void 0) {
    var f = i;
    do
      r.insert(i === f ? "." + c : "", f, r.sheet, !0), f = f.next;
    while (f !== void 0);
  }
};
function CC(a) {
  for (var r = 0, i, o = 0, c = a.length; c >= 4; ++o, c -= 4)
    i = a.charCodeAt(o) & 255 | (a.charCodeAt(++o) & 255) << 8 | (a.charCodeAt(++o) & 255) << 16 | (a.charCodeAt(++o) & 255) << 24, i = /* Math.imul(k, m): */
    (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16), i ^= /* k >>> r: */
    i >>> 24, r = /* Math.imul(k, m): */
    (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (c) {
    case 3:
      r ^= (a.charCodeAt(o + 2) & 255) << 16;
    case 2:
      r ^= (a.charCodeAt(o + 1) & 255) << 8;
    case 1:
      r ^= a.charCodeAt(o) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var TC = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, RC = /[A-Z]|^ms/g, OC = /_EMO_([^_]+?)_([^]*?)_EMO_/g, pb = function(r) {
  return r.charCodeAt(1) === 45;
}, N0 = function(r) {
  return r != null && typeof r != "boolean";
}, Cd = /* @__PURE__ */ fb(function(a) {
  return pb(a) ? a : a.replace(RC, "-$&").toLowerCase();
}), _0 = function(r, i) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof i == "string")
        return i.replace(OC, function(o, c, f) {
          return Jn = {
            name: c,
            styles: f,
            next: Jn
          }, c;
        });
  }
  return TC[r] !== 1 && !pb(r) && typeof i == "number" && i !== 0 ? i + "px" : i;
};
function ro(a, r, i) {
  if (i == null)
    return "";
  var o = i;
  if (o.__emotion_styles !== void 0)
    return o;
  switch (typeof i) {
    case "boolean":
      return "";
    case "object": {
      var c = i;
      if (c.anim === 1)
        return Jn = {
          name: c.name,
          styles: c.styles,
          next: Jn
        }, c.name;
      var f = i;
      if (f.styles !== void 0) {
        var d = f.next;
        if (d !== void 0)
          for (; d !== void 0; )
            Jn = {
              name: d.name,
              styles: d.styles,
              next: Jn
            }, d = d.next;
        var h = f.styles + ";";
        return h;
      }
      return wC(a, r, i);
    }
    case "function": {
      if (a !== void 0) {
        var p = Jn, y = i(a);
        return Jn = p, ro(a, r, y);
      }
      break;
    }
  }
  var v = i;
  if (r == null)
    return v;
  var g = r[v];
  return g !== void 0 ? g : v;
}
function wC(a, r, i) {
  var o = "";
  if (Array.isArray(i))
    for (var c = 0; c < i.length; c++)
      o += ro(a, r, i[c]) + ";";
  else
    for (var f in i) {
      var d = i[f];
      if (typeof d != "object") {
        var h = d;
        r != null && r[h] !== void 0 ? o += f + "{" + r[h] + "}" : N0(h) && (o += Cd(f) + ":" + _0(f, h) + ";");
      } else if (Array.isArray(d) && typeof d[0] == "string" && (r == null || r[d[0]] === void 0))
        for (var p = 0; p < d.length; p++)
          N0(d[p]) && (o += Cd(f) + ":" + _0(f, d[p]) + ";");
      else {
        var y = ro(a, r, d);
        switch (f) {
          case "animation":
          case "animationName": {
            o += Cd(f) + ":" + y + ";";
            break;
          }
          default:
            o += f + "{" + y + "}";
        }
      }
    }
  return o;
}
var D0 = /label:\s*([^\s;{]+)\s*(;|$)/g, Jn;
function mo(a, r, i) {
  if (a.length === 1 && typeof a[0] == "object" && a[0] !== null && a[0].styles !== void 0)
    return a[0];
  var o = !0, c = "";
  Jn = void 0;
  var f = a[0];
  if (f == null || f.raw === void 0)
    o = !1, c += ro(i, r, f);
  else {
    var d = f;
    c += d[0];
  }
  for (var h = 1; h < a.length; h++)
    if (c += ro(i, r, a[h]), o) {
      var p = f;
      c += p[h];
    }
  D0.lastIndex = 0;
  for (var y = "", v; (v = D0.exec(c)) !== null; )
    y += "-" + v[1];
  var g = CC(c) + y;
  return {
    name: g,
    styles: c,
    next: Jn
  };
}
var AC = function(r) {
  return r();
}, gb = us.useInsertionEffect ? us.useInsertionEffect : !1, yb = gb || AC, B0 = gb || E.useLayoutEffect, vb = /* @__PURE__ */ E.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ mb({
    key: "css"
  }) : null
), zC = vb.Provider, ym = function(r) {
  return /* @__PURE__ */ E.forwardRef(function(i, o) {
    var c = E.useContext(vb);
    return r(i, c, o);
  });
}, ho = /* @__PURE__ */ E.createContext({}), vm = {}.hasOwnProperty, Xd = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", MC = function(r, i) {
  var o = {};
  for (var c in i)
    vm.call(i, c) && (o[c] = i[c]);
  return o[Xd] = r, o;
}, NC = function(r) {
  var i = r.cache, o = r.serialized, c = r.isStringTag;
  return pm(i, o, c), yb(function() {
    return gm(i, o, c);
  }), null;
}, _C = /* @__PURE__ */ ym(function(a, r, i) {
  var o = a.css;
  typeof o == "string" && r.registered[o] !== void 0 && (o = r.registered[o]);
  var c = a[Xd], f = [o], d = "";
  typeof a.className == "string" ? d = hb(r.registered, f, a.className) : a.className != null && (d = a.className + " ");
  var h = mo(f, void 0, E.useContext(ho));
  d += r.key + "-" + h.name;
  var p = {};
  for (var y in a)
    vm.call(a, y) && y !== "css" && y !== Xd && (p[y] = a[y]);
  return p.className = d, i && (p.ref = i), /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(NC, {
    cache: r,
    serialized: h,
    isStringTag: typeof c == "string"
  }), /* @__PURE__ */ E.createElement(c, p));
}), DC = _C, U0 = function(r, i) {
  var o = arguments;
  if (i == null || !vm.call(i, "css"))
    return E.createElement.apply(void 0, o);
  var c = o.length, f = new Array(c);
  f[0] = DC, f[1] = MC(r, i);
  for (var d = 2; d < c; d++)
    f[d] = o[d];
  return E.createElement.apply(null, f);
};
(function(a) {
  var r;
  r || (r = a.JSX || (a.JSX = {}));
})(U0 || (U0 = {}));
var BC = /* @__PURE__ */ ym(function(a, r) {
  var i = a.styles, o = mo([i], void 0, E.useContext(ho)), c = E.useRef();
  return B0(function() {
    var f = r.key + "-global", d = new r.sheet.constructor({
      key: f,
      nonce: r.sheet.nonce,
      container: r.sheet.container,
      speedy: r.sheet.isSpeedy
    }), h = !1, p = document.querySelector('style[data-emotion="' + f + " " + o.name + '"]');
    return r.sheet.tags.length && (d.before = r.sheet.tags[0]), p !== null && (h = !0, p.setAttribute("data-emotion", f), d.hydrate([p])), c.current = [d, h], function() {
      d.flush();
    };
  }, [r]), B0(function() {
    var f = c.current, d = f[0], h = f[1];
    if (h) {
      f[1] = !1;
      return;
    }
    if (o.next !== void 0 && gm(r, o.next, !0), d.tags.length) {
      var p = d.tags[d.tags.length - 1].nextElementSibling;
      d.before = p, d.flush();
    }
    r.insert("", o, d, !1);
  }, [r, o.name]), null;
});
function bm() {
  for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++)
    r[i] = arguments[i];
  return mo(r);
}
function po() {
  var a = bm.apply(void 0, arguments), r = "animation-" + a.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + a.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var UC = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, jC = /* @__PURE__ */ fb(
  function(a) {
    return UC.test(a) || a.charCodeAt(0) === 111 && a.charCodeAt(1) === 110 && a.charCodeAt(2) < 91;
  }
  /* Z+1 */
), HC = jC, LC = function(r) {
  return r !== "theme";
}, j0 = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? HC : LC;
}, H0 = function(r, i, o) {
  var c;
  if (i) {
    var f = i.shouldForwardProp;
    c = r.__emotion_forwardProp && f ? function(d) {
      return r.__emotion_forwardProp(d) && f(d);
    } : f;
  }
  return typeof c != "function" && o && (c = r.__emotion_forwardProp), c;
}, kC = function(r) {
  var i = r.cache, o = r.serialized, c = r.isStringTag;
  return pm(i, o, c), yb(function() {
    return gm(i, o, c);
  }), null;
}, $C = function a(r, i) {
  var o = r.__emotion_real === r, c = o && r.__emotion_base || r, f, d;
  i !== void 0 && (f = i.label, d = i.target);
  var h = H0(r, i, o), p = h || j0(c), y = !p("as");
  return function() {
    var v = arguments, g = o && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (f !== void 0 && g.push("label:" + f + ";"), v[0] == null || v[0].raw === void 0)
      g.push.apply(g, v);
    else {
      var x = v[0];
      g.push(x[0]);
      for (var w = v.length, R = 1; R < w; R++)
        g.push(v[R], x[R]);
    }
    var C = ym(function(T, M, Y) {
      var U = y && T.as || c, j = "", _ = [], X = T;
      if (T.theme == null) {
        X = {};
        for (var q in T)
          X[q] = T[q];
        X.theme = E.useContext(ho);
      }
      typeof T.className == "string" ? j = hb(M.registered, _, T.className) : T.className != null && (j = T.className + " ");
      var P = mo(g.concat(_), M.registered, X);
      j += M.key + "-" + P.name, d !== void 0 && (j += " " + d);
      var J = y && h === void 0 ? j0(U) : p, S = {};
      for (var G in T)
        y && G === "as" || J(G) && (S[G] = T[G]);
      return S.className = j, Y && (S.ref = Y), /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(kC, {
        cache: M,
        serialized: P,
        isStringTag: typeof U == "string"
      }), /* @__PURE__ */ E.createElement(U, S));
    });
    return C.displayName = f !== void 0 ? f : "Styled(" + (typeof c == "string" ? c : c.displayName || c.name || "Component") + ")", C.defaultProps = r.defaultProps, C.__emotion_real = C, C.__emotion_base = c, C.__emotion_styles = g, C.__emotion_forwardProp = h, Object.defineProperty(C, "toString", {
      value: function() {
        return "." + d;
      }
    }), C.withComponent = function(T, M) {
      var Y = a(T, cs({}, i, M, {
        shouldForwardProp: H0(C, M, !0)
      }));
      return Y.apply(void 0, g);
    }, C;
  };
}, YC = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Qd = $C.bind(null);
YC.forEach(function(a) {
  Qd[a] = Qd(a);
});
const Td = /* @__PURE__ */ new Map(), qC = (a, r) => {
  const i = mb(a);
  return i.sheet = new r({
    key: i.key,
    nonce: i.sheet.nonce,
    container: i.sheet.container,
    speedy: i.sheet.isSpeedy,
    prepend: i.sheet.prepend,
    insertionPoint: i.sheet.insertionPoint
  }), i;
};
let al;
if (typeof document == "object" && (al = document.querySelector('[name="emotion-insertion-point"]'), !al)) {
  al = document.createElement("meta"), al.setAttribute("name", "emotion-insertion-point"), al.setAttribute("content", "");
  const a = document.querySelector("head");
  a && a.prepend(al);
}
function VC(a, r) {
  if (a || r) {
    class i extends lb {
      insert(f, d) {
        return this.key && this.key.endsWith("global") && (this.before = al), super.insert(f, d);
      }
    }
    const o = qC({
      key: "css",
      insertionPoint: a ? al : void 0
    }, i);
    if (r) {
      const c = o.insert;
      o.insert = (...f) => (f[1].styles.match(/^@layer\s+[^{]*$/) || (f[1].styles = `@layer mui {${f[1].styles}}`), c(...f));
    }
    return o;
  }
}
function GC(a) {
  const {
    injectFirst: r,
    enableCssLayer: i,
    children: o
  } = a, c = E.useMemo(() => {
    const f = `${r}-${i}`;
    if (typeof document == "object" && Td.has(f))
      return Td.get(f);
    const d = VC(r, i);
    return Td.set(f, d), d;
  }, [r, i]);
  return c ? /* @__PURE__ */ k.jsx(zC, {
    value: c,
    children: o
  }) : o;
}
function XC(a) {
  return a == null || Object.keys(a).length === 0;
}
function bb(a) {
  const {
    styles: r,
    defaultTheme: i = {}
  } = a, o = typeof r == "function" ? (c) => r(XC(c) ? i : c) : r;
  return /* @__PURE__ */ k.jsx(BC, {
    styles: o
  });
}
/**
 * @mui/styled-engine v6.5.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Sb(a, r) {
  return Qd(a, r);
}
function QC(a, r) {
  Array.isArray(a.__emotion_styles) && (a.__emotion_styles = r(a.__emotion_styles));
}
const L0 = [];
function ll(a) {
  return L0[0] = a, mo(L0);
}
var Rd = { exports: {} }, Ge = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var k0;
function KC() {
  if (k0) return Ge;
  k0 = 1;
  var a = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), d = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), x = Symbol.for("react.view_transition"), w = Symbol.for("react.client.reference");
  function R(C) {
    if (typeof C == "object" && C !== null) {
      var T = C.$$typeof;
      switch (T) {
        case a:
          switch (C = C.type, C) {
            case i:
            case c:
            case o:
            case p:
            case y:
            case x:
              return C;
            default:
              switch (C = C && C.$$typeof, C) {
                case d:
                case h:
                case g:
                case v:
                  return C;
                case f:
                  return C;
                default:
                  return T;
              }
          }
        case r:
          return T;
      }
    }
  }
  return Ge.ContextConsumer = f, Ge.ContextProvider = d, Ge.Element = a, Ge.ForwardRef = h, Ge.Fragment = i, Ge.Lazy = g, Ge.Memo = v, Ge.Portal = r, Ge.Profiler = c, Ge.StrictMode = o, Ge.Suspense = p, Ge.SuspenseList = y, Ge.isContextConsumer = function(C) {
    return R(C) === f;
  }, Ge.isContextProvider = function(C) {
    return R(C) === d;
  }, Ge.isElement = function(C) {
    return typeof C == "object" && C !== null && C.$$typeof === a;
  }, Ge.isForwardRef = function(C) {
    return R(C) === h;
  }, Ge.isFragment = function(C) {
    return R(C) === i;
  }, Ge.isLazy = function(C) {
    return R(C) === g;
  }, Ge.isMemo = function(C) {
    return R(C) === v;
  }, Ge.isPortal = function(C) {
    return R(C) === r;
  }, Ge.isProfiler = function(C) {
    return R(C) === c;
  }, Ge.isStrictMode = function(C) {
    return R(C) === o;
  }, Ge.isSuspense = function(C) {
    return R(C) === p;
  }, Ge.isSuspenseList = function(C) {
    return R(C) === y;
  }, Ge.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === i || C === c || C === o || C === p || C === y || C === x || typeof C == "object" && C !== null && (C.$$typeof === g || C.$$typeof === v || C.$$typeof === d || C.$$typeof === f || C.$$typeof === h || C.$$typeof === w || C.getModuleId !== void 0);
  }, Ge.typeOf = R, Ge;
}
var $0;
function ZC() {
  return $0 || ($0 = 1, Rd.exports = /* @__PURE__ */ KC()), Rd.exports;
}
var Eb = /* @__PURE__ */ ZC();
function Fn(a) {
  if (typeof a != "object" || a === null)
    return !1;
  const r = Object.getPrototypeOf(a);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in a) && !(Symbol.iterator in a);
}
function xb(a) {
  if (/* @__PURE__ */ E.isValidElement(a) || Eb.isValidElementType(a) || !Fn(a))
    return a;
  const r = {};
  return Object.keys(a).forEach((i) => {
    r[i] = xb(a[i]);
  }), r;
}
function cn(a, r, i = {
  clone: !0
}) {
  const o = i.clone ? {
    ...a
  } : a;
  return Fn(a) && Fn(r) && Object.keys(r).forEach((c) => {
    /* @__PURE__ */ E.isValidElement(r[c]) || Eb.isValidElementType(r[c]) ? o[c] = r[c] : Fn(r[c]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(a, c) && Fn(a[c]) ? o[c] = cn(a[c], r[c], i) : i.clone ? o[c] = Fn(r[c]) ? xb(r[c]) : r[c] : o[c] = r[c];
  }), o;
}
const IC = (a) => {
  const r = Object.keys(a).map((i) => ({
    key: i,
    val: a[i]
  })) || [];
  return r.sort((i, o) => i.val - o.val), r.reduce((i, o) => ({
    ...i,
    [o.key]: o.val
  }), {});
};
function Cb(a) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: r = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: i = "px",
    step: o = 5,
    ...c
  } = a, f = IC(r), d = Object.keys(f);
  function h(x) {
    return `@media (min-width:${typeof r[x] == "number" ? r[x] : x}${i})`;
  }
  function p(x) {
    return `@media (max-width:${(typeof r[x] == "number" ? r[x] : x) - o / 100}${i})`;
  }
  function y(x, w) {
    const R = d.indexOf(w);
    return `@media (min-width:${typeof r[x] == "number" ? r[x] : x}${i}) and (max-width:${(R !== -1 && typeof r[d[R]] == "number" ? r[d[R]] : w) - o / 100}${i})`;
  }
  function v(x) {
    return d.indexOf(x) + 1 < d.length ? y(x, d[d.indexOf(x) + 1]) : h(x);
  }
  function g(x) {
    const w = d.indexOf(x);
    return w === 0 ? h(d[1]) : w === d.length - 1 ? p(d[w]) : y(x, d[d.indexOf(x) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: d,
    values: f,
    up: h,
    down: p,
    between: y,
    only: v,
    not: g,
    unit: i,
    ...c
  };
}
function Y0(a, r) {
  if (!a.containerQueries)
    return r;
  const i = Object.keys(r).filter((o) => o.startsWith("@container")).sort((o, c) => {
    var d, h;
    const f = /min-width:\s*([0-9.]+)/;
    return +(((d = o.match(f)) == null ? void 0 : d[1]) || 0) - +(((h = c.match(f)) == null ? void 0 : h[1]) || 0);
  });
  return i.length ? i.reduce((o, c) => {
    const f = r[c];
    return delete o[c], o[c] = f, o;
  }, {
    ...r
  }) : r;
}
function PC(a, r) {
  return r === "@" || r.startsWith("@") && (a.some((i) => r.startsWith(`@${i}`)) || !!r.match(/^@\d/));
}
function JC(a, r) {
  const i = r.match(/^@([^/]+)?\/?(.+)?$/);
  if (!i)
    return null;
  const [, o, c] = i, f = Number.isNaN(+o) ? o || 0 : +o;
  return a.containerQueries(c).up(f);
}
function FC(a) {
  const r = (f, d) => f.replace("@media", d ? `@container ${d}` : "@container");
  function i(f, d) {
    f.up = (...h) => r(a.breakpoints.up(...h), d), f.down = (...h) => r(a.breakpoints.down(...h), d), f.between = (...h) => r(a.breakpoints.between(...h), d), f.only = (...h) => r(a.breakpoints.only(...h), d), f.not = (...h) => {
      const p = r(a.breakpoints.not(...h), d);
      return p.includes("not all and") ? p.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : p;
    };
  }
  const o = {}, c = (f) => (i(o, f), o);
  return i(c), {
    ...a,
    containerQueries: c
  };
}
const WC = {
  borderRadius: 4
};
function eo(a, r) {
  return r ? cn(a, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : a;
}
const Cs = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, q0 = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (a) => `@media (min-width:${Cs[a]}px)`
}, eT = {
  containerQueries: (a) => ({
    up: (r) => {
      let i = typeof r == "number" ? r : Cs[r] || r;
      return typeof i == "number" && (i = `${i}px`), a ? `@container ${a} (min-width:${i})` : `@container (min-width:${i})`;
    }
  })
};
function Oa(a, r, i) {
  const o = a.theme || {};
  if (Array.isArray(r)) {
    const f = o.breakpoints || q0;
    return r.reduce((d, h, p) => (d[f.up(f.keys[p])] = i(r[p]), d), {});
  }
  if (typeof r == "object") {
    const f = o.breakpoints || q0;
    return Object.keys(r).reduce((d, h) => {
      if (PC(f.keys, h)) {
        const p = JC(o.containerQueries ? o : eT, h);
        p && (d[p] = i(r[h], h));
      } else if (Object.keys(f.values || Cs).includes(h)) {
        const p = f.up(h);
        d[p] = i(r[h], h);
      } else {
        const p = h;
        d[p] = r[p];
      }
      return d;
    }, {});
  }
  return i(r);
}
function tT(a = {}) {
  var i;
  return ((i = a.keys) == null ? void 0 : i.reduce((o, c) => {
    const f = a.up(c);
    return o[f] = {}, o;
  }, {})) || {};
}
function V0(a, r) {
  return a.reduce((i, o) => {
    const c = i[o];
    return (!c || Object.keys(c).length === 0) && delete i[o], i;
  }, r);
}
function ge(a) {
  if (typeof a != "string")
    throw new Error(Ll(7));
  return a.charAt(0).toUpperCase() + a.slice(1);
}
function Ts(a, r, i = !0) {
  if (!r || typeof r != "string")
    return null;
  if (a && a.vars && i) {
    const o = `vars.${r}`.split(".").reduce((c, f) => c && c[f] ? c[f] : null, a);
    if (o != null)
      return o;
  }
  return r.split(".").reduce((o, c) => o && o[c] != null ? o[c] : null, a);
}
function ds(a, r, i, o = i) {
  let c;
  return typeof a == "function" ? c = a(i) : Array.isArray(a) ? c = a[i] || o : c = Ts(a, i) || o, r && (c = r(c, o, a)), c;
}
function st(a) {
  const {
    prop: r,
    cssProperty: i = a.prop,
    themeKey: o,
    transform: c
  } = a, f = (d) => {
    if (d[r] == null)
      return null;
    const h = d[r], p = d.theme, y = Ts(p, o) || {};
    return Oa(d, h, (g) => {
      let x = ds(y, c, g);
      return g === x && typeof g == "string" && (x = ds(y, c, `${r}${g === "default" ? "" : ge(g)}`, g)), i === !1 ? x : {
        [i]: x
      };
    });
  };
  return f.propTypes = {}, f.filterProps = [r], f;
}
function nT(a) {
  const r = {};
  return (i) => (r[i] === void 0 && (r[i] = a(i)), r[i]);
}
const aT = {
  m: "margin",
  p: "padding"
}, lT = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, G0 = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, rT = nT((a) => {
  if (a.length > 2)
    if (G0[a])
      a = G0[a];
    else
      return [a];
  const [r, i] = a.split(""), o = aT[r], c = lT[i] || "";
  return Array.isArray(c) ? c.map((f) => o + f) : [o + c];
}), Sm = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Em = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Sm, ...Em];
function go(a, r, i, o) {
  const c = Ts(a, r, !0) ?? i;
  return typeof c == "number" || typeof c == "string" ? (f) => typeof f == "string" ? f : typeof c == "string" ? `calc(${f} * ${c})` : c * f : Array.isArray(c) ? (f) => {
    if (typeof f == "string")
      return f;
    const d = Math.abs(f), h = c[d];
    return f >= 0 ? h : typeof h == "number" ? -h : `-${h}`;
  } : typeof c == "function" ? c : () => {
  };
}
function xm(a) {
  return go(a, "spacing", 8);
}
function yo(a, r) {
  return typeof r == "string" || r == null ? r : a(r);
}
function iT(a, r) {
  return (i) => a.reduce((o, c) => (o[c] = yo(r, i), o), {});
}
function oT(a, r, i, o) {
  if (!r.includes(i))
    return null;
  const c = rT(i), f = iT(c, o), d = a[i];
  return Oa(a, d, f);
}
function Tb(a, r) {
  const i = xm(a.theme);
  return Object.keys(a).map((o) => oT(a, r, o, i)).reduce(eo, {});
}
function it(a) {
  return Tb(a, Sm);
}
it.propTypes = {};
it.filterProps = Sm;
function ot(a) {
  return Tb(a, Em);
}
ot.propTypes = {};
ot.filterProps = Em;
function Cm(a = 8, r = xm({
  spacing: a
})) {
  if (a.mui)
    return a;
  const i = (...o) => (o.length === 0 ? [1] : o).map((f) => {
    const d = r(f);
    return typeof d == "number" ? `${d}px` : d;
  }).join(" ");
  return i.mui = !0, i;
}
function Rs(...a) {
  const r = a.reduce((o, c) => (c.filterProps.forEach((f) => {
    o[f] = c;
  }), o), {}), i = (o) => Object.keys(o).reduce((c, f) => r[f] ? eo(c, r[f](o)) : c, {});
  return i.propTypes = {}, i.filterProps = a.reduce((o, c) => o.concat(c.filterProps), []), i;
}
function Rn(a) {
  return typeof a != "number" ? a : `${a}px solid`;
}
function wn(a, r) {
  return st({
    prop: a,
    themeKey: "borders",
    transform: r
  });
}
const uT = wn("border", Rn), sT = wn("borderTop", Rn), cT = wn("borderRight", Rn), fT = wn("borderBottom", Rn), dT = wn("borderLeft", Rn), mT = wn("borderColor"), hT = wn("borderTopColor"), pT = wn("borderRightColor"), gT = wn("borderBottomColor"), yT = wn("borderLeftColor"), vT = wn("outline", Rn), bT = wn("outlineColor"), Os = (a) => {
  if (a.borderRadius !== void 0 && a.borderRadius !== null) {
    const r = go(a.theme, "shape.borderRadius", 4), i = (o) => ({
      borderRadius: yo(r, o)
    });
    return Oa(a, a.borderRadius, i);
  }
  return null;
};
Os.propTypes = {};
Os.filterProps = ["borderRadius"];
Rs(uT, sT, cT, fT, dT, mT, hT, pT, gT, yT, Os, vT, bT);
const ws = (a) => {
  if (a.gap !== void 0 && a.gap !== null) {
    const r = go(a.theme, "spacing", 8), i = (o) => ({
      gap: yo(r, o)
    });
    return Oa(a, a.gap, i);
  }
  return null;
};
ws.propTypes = {};
ws.filterProps = ["gap"];
const As = (a) => {
  if (a.columnGap !== void 0 && a.columnGap !== null) {
    const r = go(a.theme, "spacing", 8), i = (o) => ({
      columnGap: yo(r, o)
    });
    return Oa(a, a.columnGap, i);
  }
  return null;
};
As.propTypes = {};
As.filterProps = ["columnGap"];
const zs = (a) => {
  if (a.rowGap !== void 0 && a.rowGap !== null) {
    const r = go(a.theme, "spacing", 8), i = (o) => ({
      rowGap: yo(r, o)
    });
    return Oa(a, a.rowGap, i);
  }
  return null;
};
zs.propTypes = {};
zs.filterProps = ["rowGap"];
const ST = st({
  prop: "gridColumn"
}), ET = st({
  prop: "gridRow"
}), xT = st({
  prop: "gridAutoFlow"
}), CT = st({
  prop: "gridAutoColumns"
}), TT = st({
  prop: "gridAutoRows"
}), RT = st({
  prop: "gridTemplateColumns"
}), OT = st({
  prop: "gridTemplateRows"
}), wT = st({
  prop: "gridTemplateAreas"
}), AT = st({
  prop: "gridArea"
});
Rs(ws, As, zs, ST, ET, xT, CT, TT, RT, OT, wT, AT);
function qr(a, r) {
  return r === "grey" ? r : a;
}
const zT = st({
  prop: "color",
  themeKey: "palette",
  transform: qr
}), MT = st({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: qr
}), NT = st({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: qr
});
Rs(zT, MT, NT);
function un(a) {
  return a <= 1 && a !== 0 ? `${a * 100}%` : a;
}
const _T = st({
  prop: "width",
  transform: un
}), Tm = (a) => {
  if (a.maxWidth !== void 0 && a.maxWidth !== null) {
    const r = (i) => {
      var c, f, d, h, p;
      const o = ((d = (f = (c = a.theme) == null ? void 0 : c.breakpoints) == null ? void 0 : f.values) == null ? void 0 : d[i]) || Cs[i];
      return o ? ((p = (h = a.theme) == null ? void 0 : h.breakpoints) == null ? void 0 : p.unit) !== "px" ? {
        maxWidth: `${o}${a.theme.breakpoints.unit}`
      } : {
        maxWidth: o
      } : {
        maxWidth: un(i)
      };
    };
    return Oa(a, a.maxWidth, r);
  }
  return null;
};
Tm.filterProps = ["maxWidth"];
const DT = st({
  prop: "minWidth",
  transform: un
}), BT = st({
  prop: "height",
  transform: un
}), UT = st({
  prop: "maxHeight",
  transform: un
}), jT = st({
  prop: "minHeight",
  transform: un
});
st({
  prop: "size",
  cssProperty: "width",
  transform: un
});
st({
  prop: "size",
  cssProperty: "height",
  transform: un
});
const HT = st({
  prop: "boxSizing"
});
Rs(_T, Tm, DT, BT, UT, jT, HT);
const vo = {
  // borders
  border: {
    themeKey: "borders",
    transform: Rn
  },
  borderTop: {
    themeKey: "borders",
    transform: Rn
  },
  borderRight: {
    themeKey: "borders",
    transform: Rn
  },
  borderBottom: {
    themeKey: "borders",
    transform: Rn
  },
  borderLeft: {
    themeKey: "borders",
    transform: Rn
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Rn
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Os
  },
  // palette
  color: {
    themeKey: "palette",
    transform: qr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: qr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: qr
  },
  // spacing
  p: {
    style: ot
  },
  pt: {
    style: ot
  },
  pr: {
    style: ot
  },
  pb: {
    style: ot
  },
  pl: {
    style: ot
  },
  px: {
    style: ot
  },
  py: {
    style: ot
  },
  padding: {
    style: ot
  },
  paddingTop: {
    style: ot
  },
  paddingRight: {
    style: ot
  },
  paddingBottom: {
    style: ot
  },
  paddingLeft: {
    style: ot
  },
  paddingX: {
    style: ot
  },
  paddingY: {
    style: ot
  },
  paddingInline: {
    style: ot
  },
  paddingInlineStart: {
    style: ot
  },
  paddingInlineEnd: {
    style: ot
  },
  paddingBlock: {
    style: ot
  },
  paddingBlockStart: {
    style: ot
  },
  paddingBlockEnd: {
    style: ot
  },
  m: {
    style: it
  },
  mt: {
    style: it
  },
  mr: {
    style: it
  },
  mb: {
    style: it
  },
  ml: {
    style: it
  },
  mx: {
    style: it
  },
  my: {
    style: it
  },
  margin: {
    style: it
  },
  marginTop: {
    style: it
  },
  marginRight: {
    style: it
  },
  marginBottom: {
    style: it
  },
  marginLeft: {
    style: it
  },
  marginX: {
    style: it
  },
  marginY: {
    style: it
  },
  marginInline: {
    style: it
  },
  marginInlineStart: {
    style: it
  },
  marginInlineEnd: {
    style: it
  },
  marginBlock: {
    style: it
  },
  marginBlockStart: {
    style: it
  },
  marginBlockEnd: {
    style: it
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (a) => ({
      "@media print": {
        display: a
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: ws
  },
  rowGap: {
    style: zs
  },
  columnGap: {
    style: As
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: un
  },
  maxWidth: {
    style: Tm
  },
  minWidth: {
    transform: un
  },
  height: {
    transform: un
  },
  maxHeight: {
    transform: un
  },
  minHeight: {
    transform: un
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function LT(...a) {
  const r = a.reduce((o, c) => o.concat(Object.keys(c)), []), i = new Set(r);
  return a.every((o) => i.size === Object.keys(o).length);
}
function kT(a, r) {
  return typeof a == "function" ? a(r) : a;
}
function $T() {
  function a(i, o, c, f) {
    const d = {
      [i]: o,
      theme: c
    }, h = f[i];
    if (!h)
      return {
        [i]: o
      };
    const {
      cssProperty: p = i,
      themeKey: y,
      transform: v,
      style: g
    } = h;
    if (o == null)
      return null;
    if (y === "typography" && o === "inherit")
      return {
        [i]: o
      };
    const x = Ts(c, y) || {};
    return g ? g(d) : Oa(d, o, (R) => {
      let C = ds(x, v, R);
      return R === C && typeof R == "string" && (C = ds(x, v, `${i}${R === "default" ? "" : ge(R)}`, R)), p === !1 ? C : {
        [p]: C
      };
    });
  }
  function r(i) {
    const {
      sx: o,
      theme: c = {},
      nested: f
    } = i || {};
    if (!o)
      return null;
    const d = c.unstable_sxConfig ?? vo;
    function h(p) {
      let y = p;
      if (typeof p == "function")
        y = p(c);
      else if (typeof p != "object")
        return p;
      if (!y)
        return null;
      const v = tT(c.breakpoints), g = Object.keys(v);
      let x = v;
      return Object.keys(y).forEach((w) => {
        const R = kT(y[w], c);
        if (R != null)
          if (typeof R == "object")
            if (d[w])
              x = eo(x, a(w, R, c, d));
            else {
              const C = Oa({
                theme: c
              }, R, (T) => ({
                [w]: T
              }));
              LT(C, R) ? x[w] = r({
                sx: R,
                theme: c,
                nested: !0
              }) : x = eo(x, C);
            }
          else
            x = eo(x, a(w, R, c, d));
      }), !f && c.modularCssLayers ? {
        "@layer sx": Y0(c, V0(g, x))
      } : Y0(c, V0(g, x));
    }
    return Array.isArray(o) ? o.map(h) : h(o);
  }
  return r;
}
const rl = $T();
rl.filterProps = ["sx"];
function YT(a, r) {
  var o;
  const i = this;
  if (i.vars) {
    if (!((o = i.colorSchemes) != null && o[a]) || typeof i.getColorSchemeSelector != "function")
      return {};
    let c = i.getColorSchemeSelector(a);
    return c === "&" ? r : ((c.includes("data-") || c.includes(".")) && (c = `*:where(${c.replace(/\s*&$/, "")}) &`), {
      [c]: r
    });
  }
  return i.palette.mode === a ? r : {};
}
function Rm(a = {}, ...r) {
  const {
    breakpoints: i = {},
    palette: o = {},
    spacing: c,
    shape: f = {},
    ...d
  } = a, h = Cb(i), p = Cm(c);
  let y = cn({
    breakpoints: h,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...o
    },
    spacing: p,
    shape: {
      ...WC,
      ...f
    }
  }, d);
  return y = FC(y), y.applyStyles = YT, y = r.reduce((v, g) => cn(v, g), y), y.unstable_sxConfig = {
    ...vo,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, y.unstable_sx = function(g) {
    return rl({
      sx: g,
      theme: this
    });
  }, y;
}
function qT(a) {
  return Object.keys(a).length === 0;
}
function Ms(a = null) {
  const r = E.useContext(ho);
  return !r || qT(r) ? a : r;
}
const VT = Rm();
function Om(a = VT) {
  return Ms(a);
}
function Od(a) {
  const r = ll(a);
  return a !== r && r.styles ? (r.styles.match(/^@layer\s+[^{]*$/) || (r.styles = `@layer global{${r.styles}}`), r) : a;
}
function GT({
  styles: a,
  themeId: r,
  defaultTheme: i = {}
}) {
  const o = Om(i), c = r && o[r] || o;
  let f = typeof a == "function" ? a(c) : a;
  return c.modularCssLayers && (Array.isArray(f) ? f = f.map((d) => Od(typeof d == "function" ? d(c) : d)) : f = Od(f)), /* @__PURE__ */ k.jsx(bb, {
    styles: f
  });
}
const XT = (a) => {
  var o;
  const r = {
    systemProps: {},
    otherProps: {}
  }, i = ((o = a == null ? void 0 : a.theme) == null ? void 0 : o.unstable_sxConfig) ?? vo;
  return Object.keys(a).forEach((c) => {
    i[c] ? r.systemProps[c] = a[c] : r.otherProps[c] = a[c];
  }), r;
};
function Rb(a) {
  const {
    sx: r,
    ...i
  } = a, {
    systemProps: o,
    otherProps: c
  } = XT(i);
  let f;
  return Array.isArray(r) ? f = [o, ...r] : typeof r == "function" ? f = (...d) => {
    const h = r(...d);
    return Fn(h) ? {
      ...o,
      ...h
    } : o;
  } : f = {
    ...o,
    ...r
  }, {
    ...c,
    sx: f
  };
}
const X0 = (a) => a, QT = () => {
  let a = X0;
  return {
    configure(r) {
      a = r;
    },
    generate(r) {
      return a(r);
    },
    reset() {
      a = X0;
    }
  };
}, Ob = QT();
function wb(a) {
  var r, i, o = "";
  if (typeof a == "string" || typeof a == "number") o += a;
  else if (typeof a == "object") if (Array.isArray(a)) {
    var c = a.length;
    for (r = 0; r < c; r++) a[r] && (i = wb(a[r])) && (o && (o += " "), o += i);
  } else for (i in a) a[i] && (o && (o += " "), o += i);
  return o;
}
function je() {
  for (var a, r, i = 0, o = "", c = arguments.length; i < c; i++) (a = arguments[i]) && (r = wb(a)) && (o && (o += " "), o += r);
  return o;
}
function KT(a = {}) {
  const {
    themeId: r,
    defaultTheme: i,
    defaultClassName: o = "MuiBox-root",
    generateClassName: c
  } = a, f = Sb("div", {
    shouldForwardProp: (h) => h !== "theme" && h !== "sx" && h !== "as"
  })(rl);
  return /* @__PURE__ */ E.forwardRef(function(p, y) {
    const v = Om(i), {
      className: g,
      component: x = "div",
      ...w
    } = Rb(p);
    return /* @__PURE__ */ k.jsx(f, {
      as: x,
      ref: y,
      className: je(g, c ? c(o) : o),
      theme: r && v[r] || v,
      ...w
    });
  });
}
const ZT = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function fn(a, r, i = "Mui") {
  const o = ZT[r];
  return o ? `${i}-${o}` : `${Ob.generate(a)}-${r}`;
}
function Zt(a, r, i = "Mui") {
  const o = {};
  return r.forEach((c) => {
    o[c] = fn(a, c, i);
  }), o;
}
function Ab(a) {
  const {
    variants: r,
    ...i
  } = a, o = {
    variants: r,
    style: ll(i),
    isProcessed: !0
  };
  return o.style === i || r && r.forEach((c) => {
    typeof c.style != "function" && (c.style = ll(c.style));
  }), o;
}
const IT = Rm();
function wd(a) {
  return a !== "ownerState" && a !== "theme" && a !== "sx" && a !== "as";
}
function jl(a, r) {
  return r && a && typeof a == "object" && a.styles && !a.styles.startsWith("@layer") && (a.styles = `@layer ${r}{${String(a.styles)}}`), a;
}
function PT(a) {
  return a ? (r, i) => i[a] : null;
}
function JT(a, r, i) {
  a.theme = eR(a.theme) ? i : a.theme[r] || a.theme;
}
function os(a, r, i) {
  const o = typeof r == "function" ? r(a) : r;
  if (Array.isArray(o))
    return o.flatMap((c) => os(a, c, i));
  if (Array.isArray(o == null ? void 0 : o.variants)) {
    let c;
    if (o.isProcessed)
      c = i ? jl(o.style, i) : o.style;
    else {
      const {
        variants: f,
        ...d
      } = o;
      c = i ? jl(ll(d), i) : d;
    }
    return zb(a, o.variants, [c], i);
  }
  return o != null && o.isProcessed ? i ? jl(ll(o.style), i) : o.style : i ? jl(ll(o), i) : o;
}
function zb(a, r, i = [], o = void 0) {
  var f;
  let c;
  e: for (let d = 0; d < r.length; d += 1) {
    const h = r[d];
    if (typeof h.props == "function") {
      if (c ?? (c = {
        ...a,
        ...a.ownerState,
        ownerState: a.ownerState
      }), !h.props(c))
        continue;
    } else
      for (const p in h.props)
        if (a[p] !== h.props[p] && ((f = a.ownerState) == null ? void 0 : f[p]) !== h.props[p])
          continue e;
    typeof h.style == "function" ? (c ?? (c = {
      ...a,
      ...a.ownerState,
      ownerState: a.ownerState
    }), i.push(o ? jl(ll(h.style(c)), o) : h.style(c))) : i.push(o ? jl(ll(h.style), o) : h.style);
  }
  return i;
}
function FT(a = {}) {
  const {
    themeId: r,
    defaultTheme: i = IT,
    rootShouldForwardProp: o = wd,
    slotShouldForwardProp: c = wd
  } = a;
  function f(h) {
    JT(h, r, i);
  }
  return (h, p = {}) => {
    QC(h, (X) => X.filter((q) => q !== rl));
    const {
      name: y,
      slot: v,
      skipVariantsResolver: g,
      skipSx: x,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: w = PT(nR(v)),
      ...R
    } = p, C = y && y.startsWith("Mui") || v ? "components" : "custom", T = g !== void 0 ? g : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      v && v !== "Root" && v !== "root" || !1
    ), M = x || !1;
    let Y = wd;
    v === "Root" || v === "root" ? Y = o : v ? Y = c : tR(h) && (Y = void 0);
    const U = Sb(h, {
      shouldForwardProp: Y,
      label: WT(),
      ...R
    }), j = (X) => {
      if (X.__emotion_real === X)
        return X;
      if (typeof X == "function")
        return function(P) {
          return os(P, X, P.theme.modularCssLayers ? C : void 0);
        };
      if (Fn(X)) {
        const q = Ab(X);
        return function(J) {
          return q.variants ? os(J, q, J.theme.modularCssLayers ? C : void 0) : J.theme.modularCssLayers ? jl(q.style, C) : q.style;
        };
      }
      return X;
    }, _ = (...X) => {
      const q = [], P = X.map(j), J = [];
      if (q.push(f), y && w && J.push(function(ae) {
        var ne, W;
        const te = (W = (ne = ae.theme.components) == null ? void 0 : ne[y]) == null ? void 0 : W.styleOverrides;
        if (!te)
          return null;
        const V = {};
        for (const Q in te)
          V[Q] = os(ae, te[Q], ae.theme.modularCssLayers ? "theme" : void 0);
        return w(ae, V);
      }), y && !T && J.push(function(ae) {
        var V, ne;
        const oe = ae.theme, te = (ne = (V = oe == null ? void 0 : oe.components) == null ? void 0 : V[y]) == null ? void 0 : ne.variants;
        return te ? zb(ae, te, [], ae.theme.modularCssLayers ? "theme" : void 0) : null;
      }), M || J.push(rl), Array.isArray(P[0])) {
        const ee = P.shift(), ae = new Array(q.length).fill(""), oe = new Array(J.length).fill("");
        let te;
        te = [...ae, ...ee, ...oe], te.raw = [...ae, ...ee.raw, ...oe], q.unshift(te);
      }
      const S = [...q, ...P, ...J], G = U(...S);
      return h.muiName && (G.muiName = h.muiName), G;
    };
    return U.withConfig && (_.withConfig = U.withConfig), _;
  };
}
function WT(a, r) {
  return void 0;
}
function eR(a) {
  for (const r in a)
    return !1;
  return !0;
}
function tR(a) {
  return typeof a == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  a.charCodeAt(0) > 96;
}
function nR(a) {
  return a && a.charAt(0).toLowerCase() + a.slice(1);
}
function io(a, r) {
  const i = {
    ...r
  };
  for (const o in a)
    if (Object.prototype.hasOwnProperty.call(a, o)) {
      const c = o;
      if (c === "components" || c === "slots")
        i[c] = {
          ...a[c],
          ...i[c]
        };
      else if (c === "componentsProps" || c === "slotProps") {
        const f = a[c], d = r[c];
        if (!d)
          i[c] = f || {};
        else if (!f)
          i[c] = d;
        else {
          i[c] = {
            ...d
          };
          for (const h in f)
            if (Object.prototype.hasOwnProperty.call(f, h)) {
              const p = h;
              i[c][p] = io(f[p], d[p]);
            }
        }
      } else i[c] === void 0 && (i[c] = a[c]);
    }
  return i;
}
function aR(a) {
  const {
    theme: r,
    name: i,
    props: o
  } = a;
  return !r || !r.components || !r.components[i] || !r.components[i].defaultProps ? o : io(r.components[i].defaultProps, o);
}
const Kr = typeof window < "u" ? E.useLayoutEffect : E.useEffect;
function lR(a, r, i, o, c) {
  const [f, d] = E.useState(() => c && i ? i(a).matches : o ? o(a).matches : r);
  return Kr(() => {
    if (!i)
      return;
    const h = i(a), p = () => {
      d(h.matches);
    };
    return p(), h.addEventListener("change", p), () => {
      h.removeEventListener("change", p);
    };
  }, [a, i]), f;
}
const rR = {
  ...us
}, Mb = rR.useSyncExternalStore;
function iR(a, r, i, o, c) {
  const f = E.useCallback(() => r, [r]), d = E.useMemo(() => {
    if (c && i)
      return () => i(a).matches;
    if (o !== null) {
      const {
        matches: v
      } = o(a);
      return () => v;
    }
    return f;
  }, [f, a, o, c, i]), [h, p] = E.useMemo(() => {
    if (i === null)
      return [f, () => () => {
      }];
    const v = i(a);
    return [() => v.matches, (g) => (v.addEventListener("change", g), () => {
      v.removeEventListener("change", g);
    })];
  }, [f, i, a]);
  return Mb(p, h, d);
}
function Nb(a = {}) {
  const {
    themeId: r
  } = a;
  return function(o, c = {}) {
    let f = Ms();
    f && r && (f = f[r] || f);
    const d = typeof window < "u" && typeof window.matchMedia < "u", {
      defaultMatches: h = !1,
      matchMedia: p = d ? window.matchMedia : null,
      ssrMatchMedia: y = null,
      noSsr: v = !1
    } = aR({
      name: "MuiUseMediaQuery",
      props: c,
      theme: f
    });
    let g = typeof o == "function" ? o(f) : o;
    return g = g.replace(/^@media( ?)/m, ""), g.includes("print") && console.warn(["MUI: You have provided a `print` query to the `useMediaQuery` hook.", "Using the print media query to modify print styles can lead to unexpected results.", "Consider using the `displayPrint` field in the `sx` prop instead.", "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join(`
`)), (Mb !== void 0 ? iR : lR)(g, h, p, y, v);
  };
}
Nb();
function oR(a, r = Number.MIN_SAFE_INTEGER, i = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(a, i));
}
function wm(a, r = 0, i = 1) {
  return oR(a, r, i);
}
function uR(a) {
  a = a.slice(1);
  const r = new RegExp(`.{1,${a.length >= 6 ? 2 : 1}}`, "g");
  let i = a.match(r);
  return i && i[0].length === 1 && (i = i.map((o) => o + o)), i ? `rgb${i.length === 4 ? "a" : ""}(${i.map((o, c) => c < 3 ? parseInt(o, 16) : Math.round(parseInt(o, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function il(a) {
  if (a.type)
    return a;
  if (a.charAt(0) === "#")
    return il(uR(a));
  const r = a.indexOf("("), i = a.substring(0, r);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(i))
    throw new Error(Ll(9, a));
  let o = a.substring(r + 1, a.length - 1), c;
  if (i === "color") {
    if (o = o.split(" "), c = o.shift(), o.length === 4 && o[3].charAt(0) === "/" && (o[3] = o[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(c))
      throw new Error(Ll(10, c));
  } else
    o = o.split(",");
  return o = o.map((f) => parseFloat(f)), {
    type: i,
    values: o,
    colorSpace: c
  };
}
const sR = (a) => {
  const r = il(a);
  return r.values.slice(0, 3).map((i, o) => r.type.includes("hsl") && o !== 0 ? `${i}%` : i).join(" ");
}, Ji = (a, r) => {
  try {
    return sR(a);
  } catch {
    return a;
  }
};
function Ns(a) {
  const {
    type: r,
    colorSpace: i
  } = a;
  let {
    values: o
  } = a;
  return r.includes("rgb") ? o = o.map((c, f) => f < 3 ? parseInt(c, 10) : c) : r.includes("hsl") && (o[1] = `${o[1]}%`, o[2] = `${o[2]}%`), r.includes("color") ? o = `${i} ${o.join(" ")}` : o = `${o.join(", ")}`, `${r}(${o})`;
}
function _b(a) {
  a = il(a);
  const {
    values: r
  } = a, i = r[0], o = r[1] / 100, c = r[2] / 100, f = o * Math.min(c, 1 - c), d = (y, v = (y + i / 30) % 12) => c - f * Math.max(Math.min(v - 3, 9 - v, 1), -1);
  let h = "rgb";
  const p = [Math.round(d(0) * 255), Math.round(d(8) * 255), Math.round(d(4) * 255)];
  return a.type === "hsla" && (h += "a", p.push(r[3])), Ns({
    type: h,
    values: p
  });
}
function Kd(a) {
  a = il(a);
  let r = a.type === "hsl" || a.type === "hsla" ? il(_b(a)).values : a.values;
  return r = r.map((i) => (a.type !== "color" && (i /= 255), i <= 0.03928 ? i / 12.92 : ((i + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function cR(a, r) {
  const i = Kd(a), o = Kd(r);
  return (Math.max(i, o) + 0.05) / (Math.min(i, o) + 0.05);
}
function Wn(a, r) {
  return a = il(a), r = wm(r), (a.type === "rgb" || a.type === "hsl") && (a.type += "a"), a.type === "color" ? a.values[3] = `/${r}` : a.values[3] = r, Ns(a);
}
function Pu(a, r, i) {
  try {
    return Wn(a, r);
  } catch {
    return a;
  }
}
function Am(a, r) {
  if (a = il(a), r = wm(r), a.type.includes("hsl"))
    a.values[2] *= 1 - r;
  else if (a.type.includes("rgb") || a.type.includes("color"))
    for (let i = 0; i < 3; i += 1)
      a.values[i] *= 1 - r;
  return Ns(a);
}
function Qe(a, r, i) {
  try {
    return Am(a, r);
  } catch {
    return a;
  }
}
function zm(a, r) {
  if (a = il(a), r = wm(r), a.type.includes("hsl"))
    a.values[2] += (100 - a.values[2]) * r;
  else if (a.type.includes("rgb"))
    for (let i = 0; i < 3; i += 1)
      a.values[i] += (255 - a.values[i]) * r;
  else if (a.type.includes("color"))
    for (let i = 0; i < 3; i += 1)
      a.values[i] += (1 - a.values[i]) * r;
  return Ns(a);
}
function Ke(a, r, i) {
  try {
    return zm(a, r);
  } catch {
    return a;
  }
}
function fR(a, r = 0.15) {
  return Kd(a) > 0.5 ? Am(a, r) : zm(a, r);
}
function Ju(a, r, i) {
  try {
    return fR(a, r);
  } catch {
    return a;
  }
}
function Q0(...a) {
  return a.reduce((r, i) => i == null ? r : function(...c) {
    r.apply(this, c), i.apply(this, c);
  }, () => {
  });
}
function dR(a, r = 166) {
  let i;
  function o(...c) {
    const f = () => {
      a.apply(this, c);
    };
    clearTimeout(i), i = setTimeout(f, r);
  }
  return o.clear = () => {
    clearTimeout(i);
  }, o;
}
function kl(a) {
  return a && a.ownerDocument || document;
}
function Zr(a) {
  return kl(a).defaultView || window;
}
function K0(a, r) {
  typeof a == "function" ? a(r) : a && (a.current = r);
}
let Z0 = 0;
function mR(a) {
  const [r, i] = E.useState(a), o = a || r;
  return E.useEffect(() => {
    r == null && (Z0 += 1, i(`mui-${Z0}`));
  }, [r]), o;
}
const hR = {
  ...us
}, I0 = hR.useId;
function Mm(a) {
  if (I0 !== void 0) {
    const r = I0();
    return a ?? r;
  }
  return mR(a);
}
function Vr(a) {
  const r = E.useRef(a);
  return Kr(() => {
    r.current = a;
  }), E.useRef((...i) => (
    // @ts-expect-error hide `this`
    (0, r.current)(...i)
  )).current;
}
function ol(...a) {
  const r = E.useRef(void 0), i = E.useCallback((o) => {
    const c = a.map((f) => {
      if (f == null)
        return null;
      if (typeof f == "function") {
        const d = f, h = d(o);
        return typeof h == "function" ? h : () => {
          d(null);
        };
      }
      return f.current = o, () => {
        f.current = null;
      };
    });
    return () => {
      c.forEach((f) => f == null ? void 0 : f());
    };
  }, a);
  return E.useMemo(() => a.every((o) => o == null) ? null : (o) => {
    r.current && (r.current(), r.current = void 0), o != null && (r.current = i(o));
  }, a);
}
const P0 = {};
function Db(a, r) {
  const i = E.useRef(P0);
  return i.current === P0 && (i.current = a(r)), i;
}
const pR = [];
function gR(a) {
  E.useEffect(a, pR);
}
class Nm {
  constructor() {
    _r(this, "currentId", null);
    _r(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    _r(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Nm();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(r, i) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, i();
    }, r);
  }
}
function yR() {
  const a = Db(Nm.create).current;
  return gR(a.disposeEffect), a;
}
function J0(a) {
  try {
    return a.matches(":focus-visible");
  } catch {
  }
  return !1;
}
function vR(a = window) {
  const r = a.document.documentElement.clientWidth;
  return a.innerWidth - r;
}
const Bb = (a) => {
  const r = E.useRef({});
  return E.useEffect(() => {
    r.current = a;
  }), r.current;
};
function An(a, r, i = void 0) {
  const o = {};
  for (const c in a) {
    const f = a[c];
    let d = "", h = !0;
    for (let p = 0; p < f.length; p += 1) {
      const y = f[p];
      y && (d += (h === !0 ? "" : " ") + r(y), h = !1, i && i[y] && (d += " " + i[y]));
    }
    o[c] = d;
  }
  return o;
}
function bR(a) {
  return typeof a == "string";
}
function SR(a, r, i) {
  return a === void 0 || bR(a) ? r : {
    ...r,
    ownerState: {
      ...r.ownerState,
      ...i
    }
  };
}
function Ub(a, r = []) {
  if (a === void 0)
    return {};
  const i = {};
  return Object.keys(a).filter((o) => o.match(/^on[A-Z]/) && typeof a[o] == "function" && !r.includes(o)).forEach((o) => {
    i[o] = a[o];
  }), i;
}
function F0(a) {
  if (a === void 0)
    return {};
  const r = {};
  return Object.keys(a).filter((i) => !(i.match(/^on[A-Z]/) && typeof a[i] == "function")).forEach((i) => {
    r[i] = a[i];
  }), r;
}
function ER(a) {
  const {
    getSlotProps: r,
    additionalProps: i,
    externalSlotProps: o,
    externalForwardedProps: c,
    className: f
  } = a;
  if (!r) {
    const w = je(i == null ? void 0 : i.className, f, c == null ? void 0 : c.className, o == null ? void 0 : o.className), R = {
      ...i == null ? void 0 : i.style,
      ...c == null ? void 0 : c.style,
      ...o == null ? void 0 : o.style
    }, C = {
      ...i,
      ...c,
      ...o
    };
    return w.length > 0 && (C.className = w), Object.keys(R).length > 0 && (C.style = R), {
      props: C,
      internalRef: void 0
    };
  }
  const d = Ub({
    ...c,
    ...o
  }), h = F0(o), p = F0(c), y = r(d), v = je(y == null ? void 0 : y.className, i == null ? void 0 : i.className, f, c == null ? void 0 : c.className, o == null ? void 0 : o.className), g = {
    ...y == null ? void 0 : y.style,
    ...i == null ? void 0 : i.style,
    ...c == null ? void 0 : c.style,
    ...o == null ? void 0 : o.style
  }, x = {
    ...y,
    ...i,
    ...p,
    ...h
  };
  return v.length > 0 && (x.className = v), Object.keys(g).length > 0 && (x.style = g), {
    props: x,
    internalRef: y.ref
  };
}
function xR(a, r, i) {
  return typeof a == "function" ? a(r, i) : a;
}
function _s(a) {
  var r;
  return parseInt(E.version, 10) >= 19 ? ((r = a == null ? void 0 : a.props) == null ? void 0 : r.ref) || null : (a == null ? void 0 : a.ref) || null;
}
const jb = /* @__PURE__ */ E.createContext(null);
function _m() {
  return E.useContext(jb);
}
const CR = typeof Symbol == "function" && Symbol.for, TR = CR ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function RR(a, r) {
  return typeof r == "function" ? r(a) : {
    ...a,
    ...r
  };
}
function OR(a) {
  const {
    children: r,
    theme: i
  } = a, o = _m(), c = E.useMemo(() => {
    const f = o === null ? {
      ...i
    } : RR(o, i);
    return f != null && (f[TR] = o !== null), f;
  }, [i, o]);
  return /* @__PURE__ */ k.jsx(jb.Provider, {
    value: c,
    children: r
  });
}
const Hb = /* @__PURE__ */ E.createContext();
function wR({
  value: a,
  ...r
}) {
  return /* @__PURE__ */ k.jsx(Hb.Provider, {
    value: a ?? !0,
    ...r
  });
}
const AR = () => E.useContext(Hb) ?? !1, Lb = /* @__PURE__ */ E.createContext(void 0);
function zR({
  value: a,
  children: r
}) {
  return /* @__PURE__ */ k.jsx(Lb.Provider, {
    value: a,
    children: r
  });
}
function MR(a) {
  const {
    theme: r,
    name: i,
    props: o
  } = a;
  if (!r || !r.components || !r.components[i])
    return o;
  const c = r.components[i];
  return c.defaultProps ? io(c.defaultProps, o) : !c.styleOverrides && !c.variants ? io(c, o) : o;
}
function NR({
  props: a,
  name: r
}) {
  const i = E.useContext(Lb);
  return MR({
    props: a,
    name: r,
    theme: {
      components: i
    }
  });
}
function _R(a) {
  const r = Ms(), i = Mm() || "", {
    modularCssLayers: o
  } = a;
  let c = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !o || r !== null ? c = "" : typeof o == "string" ? c = o.replace(/mui(?!\.)/g, c) : c = `@layer ${c};`, Kr(() => {
    var h, p;
    const f = document.querySelector("head");
    if (!f)
      return;
    const d = f.firstChild;
    if (c) {
      if (d && ((h = d.hasAttribute) != null && h.call(d, "data-mui-layer-order")) && d.getAttribute("data-mui-layer-order") === i)
        return;
      const y = document.createElement("style");
      y.setAttribute("data-mui-layer-order", i), y.textContent = c, f.prepend(y);
    } else
      (p = f.querySelector(`style[data-mui-layer-order="${i}"]`)) == null || p.remove();
  }, [c, i]), c ? /* @__PURE__ */ k.jsx(GT, {
    styles: c
  }) : null;
}
const W0 = {};
function ev(a, r, i, o = !1) {
  return E.useMemo(() => {
    const c = a && r[a] || r;
    if (typeof i == "function") {
      const f = i(c), d = a ? {
        ...r,
        [a]: f
      } : f;
      return o ? () => d : d;
    }
    return a ? {
      ...r,
      [a]: i
    } : {
      ...r,
      ...i
    };
  }, [a, r, i, o]);
}
function kb(a) {
  const {
    children: r,
    theme: i,
    themeId: o
  } = a, c = Ms(W0), f = _m() || W0, d = ev(o, c, i), h = ev(o, f, i, !0), p = (o ? d[o] : d).direction === "rtl", y = _R(d);
  return /* @__PURE__ */ k.jsx(OR, {
    theme: h,
    children: /* @__PURE__ */ k.jsx(ho.Provider, {
      value: d,
      children: /* @__PURE__ */ k.jsx(wR, {
        value: p,
        children: /* @__PURE__ */ k.jsxs(zR, {
          value: o ? d[o].components : d.components,
          children: [y, r]
        })
      })
    })
  });
}
const tv = {
  theme: void 0
};
function DR(a) {
  let r, i;
  return function(c) {
    let f = r;
    return (f === void 0 || c.theme !== i) && (tv.theme = c.theme, f = Ab(a(tv)), r = f, i = c.theme), f;
  };
}
const Dm = "mode", Bm = "color-scheme", BR = "data-color-scheme";
function UR(a) {
  const {
    defaultMode: r = "system",
    defaultLightColorScheme: i = "light",
    defaultDarkColorScheme: o = "dark",
    modeStorageKey: c = Dm,
    colorSchemeStorageKey: f = Bm,
    attribute: d = BR,
    colorSchemeNode: h = "document.documentElement",
    nonce: p
  } = a || {};
  let y = "", v = d;
  if (d === "class" && (v = ".%s"), d === "data" && (v = "[data-%s]"), v.startsWith(".")) {
    const x = v.substring(1);
    y += `${h}.classList.remove('${x}'.replace('%s', light), '${x}'.replace('%s', dark));
      ${h}.classList.add('${x}'.replace('%s', colorScheme));`;
  }
  const g = v.match(/\[([^\]]+)\]/);
  if (g) {
    const [x, w] = g[1].split("=");
    w || (y += `${h}.removeAttribute('${x}'.replace('%s', light));
      ${h}.removeAttribute('${x}'.replace('%s', dark));`), y += `
      ${h}.setAttribute('${x}'.replace('%s', colorScheme), ${w ? `${w}.replace('%s', colorScheme)` : '""'});`;
  } else
    y += `${h}.setAttribute('${v}', colorScheme);`;
  return /* @__PURE__ */ k.jsx("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? p : "",
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${c}') || '${r}';
  const dark = localStorage.getItem('${f}-dark') || '${o}';
  const light = localStorage.getItem('${f}-light') || '${i}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${y}
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}
function jR() {
}
const HR = ({
  key: a,
  storageWindow: r
}) => (!r && typeof window < "u" && (r = window), {
  get(i) {
    if (typeof window > "u")
      return;
    if (!r)
      return i;
    let o;
    try {
      o = r.localStorage.getItem(a);
    } catch {
    }
    return o || i;
  },
  set: (i) => {
    if (r)
      try {
        r.localStorage.setItem(a, i);
      } catch {
      }
  },
  subscribe: (i) => {
    if (!r)
      return jR;
    const o = (c) => {
      const f = c.newValue;
      c.key === a && i(f);
    };
    return r.addEventListener("storage", o), () => {
      r.removeEventListener("storage", o);
    };
  }
});
function Ad() {
}
function nv(a) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && a === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function $b(a, r) {
  if (a.mode === "light" || a.mode === "system" && a.systemMode === "light")
    return r("light");
  if (a.mode === "dark" || a.mode === "system" && a.systemMode === "dark")
    return r("dark");
}
function LR(a) {
  return $b(a, (r) => {
    if (r === "light")
      return a.lightColorScheme;
    if (r === "dark")
      return a.darkColorScheme;
  });
}
function kR(a) {
  const {
    defaultMode: r = "light",
    defaultLightColorScheme: i,
    defaultDarkColorScheme: o,
    supportedColorSchemes: c = [],
    modeStorageKey: f = Dm,
    colorSchemeStorageKey: d = Bm,
    storageWindow: h = typeof window > "u" ? void 0 : window,
    storageManager: p = HR,
    noSsr: y = !1
  } = a, v = c.join(","), g = c.length > 1, x = E.useMemo(() => p == null ? void 0 : p({
    key: f,
    storageWindow: h
  }), [p, f, h]), w = E.useMemo(() => p == null ? void 0 : p({
    key: `${d}-light`,
    storageWindow: h
  }), [p, d, h]), R = E.useMemo(() => p == null ? void 0 : p({
    key: `${d}-dark`,
    storageWindow: h
  }), [p, d, h]), [C, T] = E.useState(() => {
    const P = (x == null ? void 0 : x.get(r)) || r, J = (w == null ? void 0 : w.get(i)) || i, S = (R == null ? void 0 : R.get(o)) || o;
    return {
      mode: P,
      systemMode: nv(P),
      lightColorScheme: J,
      darkColorScheme: S
    };
  }), [M, Y] = E.useState(y || !g);
  E.useEffect(() => {
    Y(!0);
  }, []);
  const U = LR(C), j = E.useCallback((P) => {
    T((J) => {
      if (P === J.mode)
        return J;
      const S = P ?? r;
      return x == null || x.set(S), {
        ...J,
        mode: S,
        systemMode: nv(S)
      };
    });
  }, [x, r]), _ = E.useCallback((P) => {
    P ? typeof P == "string" ? P && !v.includes(P) ? console.error(`\`${P}\` does not exist in \`theme.colorSchemes\`.`) : T((J) => {
      const S = {
        ...J
      };
      return $b(J, (G) => {
        G === "light" && (w == null || w.set(P), S.lightColorScheme = P), G === "dark" && (R == null || R.set(P), S.darkColorScheme = P);
      }), S;
    }) : T((J) => {
      const S = {
        ...J
      }, G = P.light === null ? i : P.light, ee = P.dark === null ? o : P.dark;
      return G && (v.includes(G) ? (S.lightColorScheme = G, w == null || w.set(G)) : console.error(`\`${G}\` does not exist in \`theme.colorSchemes\`.`)), ee && (v.includes(ee) ? (S.darkColorScheme = ee, R == null || R.set(ee)) : console.error(`\`${ee}\` does not exist in \`theme.colorSchemes\`.`)), S;
    }) : T((J) => (w == null || w.set(i), R == null || R.set(o), {
      ...J,
      lightColorScheme: i,
      darkColorScheme: o
    }));
  }, [v, w, R, i, o]), X = E.useCallback((P) => {
    C.mode === "system" && T((J) => {
      const S = P != null && P.matches ? "dark" : "light";
      return J.systemMode === S ? J : {
        ...J,
        systemMode: S
      };
    });
  }, [C.mode]), q = E.useRef(X);
  return q.current = X, E.useEffect(() => {
    if (typeof window.matchMedia != "function" || !g)
      return;
    const P = (...S) => q.current(...S), J = window.matchMedia("(prefers-color-scheme: dark)");
    return J.addListener(P), P(J), () => {
      J.removeListener(P);
    };
  }, [g]), E.useEffect(() => {
    if (g) {
      const P = (x == null ? void 0 : x.subscribe((G) => {
        (!G || ["light", "dark", "system"].includes(G)) && j(G || r);
      })) || Ad, J = (w == null ? void 0 : w.subscribe((G) => {
        (!G || v.match(G)) && _({
          light: G
        });
      })) || Ad, S = (R == null ? void 0 : R.subscribe((G) => {
        (!G || v.match(G)) && _({
          dark: G
        });
      })) || Ad;
      return () => {
        P(), J(), S();
      };
    }
  }, [_, j, v, r, h, g, x, w, R]), {
    ...C,
    mode: M ? C.mode : void 0,
    systemMode: M ? C.systemMode : void 0,
    colorScheme: M ? U : void 0,
    setMode: j,
    setColorScheme: _
  };
}
const $R = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function YR(a) {
  const {
    themeId: r,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: i = {},
    modeStorageKey: o = Dm,
    colorSchemeStorageKey: c = Bm,
    disableTransitionOnChange: f = !1,
    defaultColorScheme: d,
    resolveTheme: h
  } = a, p = {
    allColorSchemes: [],
    colorScheme: void 0,
    darkColorScheme: void 0,
    lightColorScheme: void 0,
    mode: void 0,
    setColorScheme: () => {
    },
    setMode: () => {
    },
    systemMode: void 0
  }, y = /* @__PURE__ */ E.createContext(void 0), v = () => E.useContext(y) || p, g = {}, x = {};
  function w(M) {
    var ia, Yl, sl, ql;
    const {
      children: Y,
      theme: U,
      modeStorageKey: j = o,
      colorSchemeStorageKey: _ = c,
      disableTransitionOnChange: X = f,
      storageManager: q,
      storageWindow: P = typeof window > "u" ? void 0 : window,
      documentNode: J = typeof document > "u" ? void 0 : document,
      colorSchemeNode: S = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: G = !1,
      disableStyleSheetGeneration: ee = !1,
      defaultMode: ae = "system",
      noSsr: oe
    } = M, te = E.useRef(!1), V = _m(), ne = E.useContext(y), W = !!ne && !G, Q = E.useMemo(() => U || (typeof i == "function" ? i() : i), [U]), le = Q[r], Se = le || Q, {
      colorSchemes: He = g,
      components: et = x,
      cssVarPrefix: A
    } = Se, F = Object.keys(He).filter((yt) => !!He[yt]).join(","), se = E.useMemo(() => F.split(","), [F]), fe = typeof d == "string" ? d : d.light, Ce = typeof d == "string" ? d : d.dark, Re = He[fe] && He[Ce] ? ae : ((Yl = (ia = He[Se.defaultColorScheme]) == null ? void 0 : ia.palette) == null ? void 0 : Yl.mode) || ((sl = Se.palette) == null ? void 0 : sl.mode), {
      mode: Oe,
      setMode: ie,
      systemMode: me,
      lightColorScheme: kt,
      darkColorScheme: jn,
      colorScheme: Hn,
      setColorScheme: Dt
    } = kR({
      supportedColorSchemes: se,
      defaultLightColorScheme: fe,
      defaultDarkColorScheme: Ce,
      modeStorageKey: j,
      colorSchemeStorageKey: _,
      defaultMode: Re,
      storageManager: q,
      storageWindow: P,
      noSsr: oe
    });
    let Ie = Oe, be = Hn;
    W && (Ie = ne.mode, be = ne.colorScheme);
    const gt = E.useMemo(() => {
      var oa;
      const yt = be || Se.defaultColorScheme, tt = ((oa = Se.generateThemeVars) == null ? void 0 : oa.call(Se)) || Se.vars, xt = {
        ...Se,
        components: et,
        colorSchemes: He,
        cssVarPrefix: A,
        vars: tt
      };
      if (typeof xt.generateSpacing == "function" && (xt.spacing = xt.generateSpacing()), yt) {
        const It = He[yt];
        It && typeof It == "object" && Object.keys(It).forEach((hn) => {
          It[hn] && typeof It[hn] == "object" ? xt[hn] = {
            ...xt[hn],
            ...It[hn]
          } : xt[hn] = It[hn];
        });
      }
      return h ? h(xt) : xt;
    }, [Se, be, et, He, A]), $t = Se.colorSchemeSelector;
    Kr(() => {
      if (be && S && $t && $t !== "media") {
        const yt = $t;
        let tt = $t;
        if (yt === "class" && (tt = ".%s"), yt === "data" && (tt = "[data-%s]"), yt != null && yt.startsWith("data-") && !yt.includes("%s") && (tt = `[${yt}="%s"]`), tt.startsWith("."))
          S.classList.remove(...se.map((xt) => tt.substring(1).replace("%s", xt))), S.classList.add(tt.substring(1).replace("%s", be));
        else {
          const xt = tt.replace("%s", be).match(/\[([^\]]+)\]/);
          if (xt) {
            const [oa, It] = xt[1].split("=");
            It || se.forEach((hn) => {
              S.removeAttribute(oa.replace(be, hn));
            }), S.setAttribute(oa, It ? It.replace(/"|'/g, "") : "");
          } else
            S.setAttribute(tt, be);
        }
      }
    }, [be, $t, S, se]), E.useEffect(() => {
      let yt;
      if (X && te.current && J) {
        const tt = J.createElement("style");
        tt.appendChild(J.createTextNode($R)), J.head.appendChild(tt), window.getComputedStyle(J.body), yt = setTimeout(() => {
          J.head.removeChild(tt);
        }, 1);
      }
      return () => {
        clearTimeout(yt);
      };
    }, [be, X, J]), E.useEffect(() => (te.current = !0, () => {
      te.current = !1;
    }), []);
    const mn = E.useMemo(() => ({
      allColorSchemes: se,
      colorScheme: be,
      darkColorScheme: jn,
      lightColorScheme: kt,
      mode: Ie,
      setColorScheme: Dt,
      setMode: ie,
      systemMode: me
    }), [se, be, jn, kt, Ie, Dt, ie, me, gt.colorSchemeSelector]);
    let ye = !0;
    (ee || Se.cssVariables === !1 || W && (V == null ? void 0 : V.cssVarPrefix) === A) && (ye = !1);
    const ul = /* @__PURE__ */ k.jsxs(E.Fragment, {
      children: [/* @__PURE__ */ k.jsx(kb, {
        themeId: le ? r : void 0,
        theme: gt,
        children: Y
      }), ye && /* @__PURE__ */ k.jsx(bb, {
        styles: ((ql = gt.generateStyleSheets) == null ? void 0 : ql.call(gt)) || []
      })]
    });
    return W ? ul : /* @__PURE__ */ k.jsx(y.Provider, {
      value: mn,
      children: ul
    });
  }
  const R = typeof d == "string" ? d : d.light, C = typeof d == "string" ? d : d.dark;
  return {
    CssVarsProvider: w,
    useColorScheme: v,
    getInitColorSchemeScript: (M) => UR({
      colorSchemeStorageKey: c,
      defaultLightColorScheme: R,
      defaultDarkColorScheme: C,
      modeStorageKey: o,
      ...M
    })
  };
}
function qR(a = "") {
  function r(...o) {
    if (!o.length)
      return "";
    const c = o[0];
    return typeof c == "string" && !c.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${a ? `${a}-` : ""}${c}${r(...o.slice(1))})` : `, ${c}`;
  }
  return (o, ...c) => `var(--${a ? `${a}-` : ""}${o}${r(...c)})`;
}
const av = (a, r, i, o = []) => {
  let c = a;
  r.forEach((f, d) => {
    d === r.length - 1 ? Array.isArray(c) ? c[Number(f)] = i : c && typeof c == "object" && (c[f] = i) : c && typeof c == "object" && (c[f] || (c[f] = o.includes(f) ? [] : {}), c = c[f]);
  });
}, VR = (a, r, i) => {
  function o(c, f = [], d = []) {
    Object.entries(c).forEach(([h, p]) => {
      (!i || i && !i([...f, h])) && p != null && (typeof p == "object" && Object.keys(p).length > 0 ? o(p, [...f, h], Array.isArray(p) ? [...d, h] : d) : r([...f, h], p, d));
    });
  }
  o(a);
}, GR = (a, r) => typeof r == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((o) => a.includes(o)) || a[a.length - 1].toLowerCase().includes("opacity") ? r : `${r}px` : r;
function zd(a, r) {
  const {
    prefix: i,
    shouldSkipGeneratingVar: o
  } = r || {}, c = {}, f = {}, d = {};
  return VR(
    a,
    (h, p, y) => {
      if ((typeof p == "string" || typeof p == "number") && (!o || !o(h, p))) {
        const v = `--${i ? `${i}-` : ""}${h.join("-")}`, g = GR(h, p);
        Object.assign(c, {
          [v]: g
        }), av(f, h, `var(${v})`, y), av(d, h, `var(${v}, ${g})`, y);
      }
    },
    (h) => h[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: c,
    vars: f,
    varsWithDefaults: d
  };
}
function XR(a, r = {}) {
  const {
    getSelector: i = T,
    disableCssColorScheme: o,
    colorSchemeSelector: c
  } = r, {
    colorSchemes: f = {},
    components: d,
    defaultColorScheme: h = "light",
    ...p
  } = a, {
    vars: y,
    css: v,
    varsWithDefaults: g
  } = zd(p, r);
  let x = g;
  const w = {}, {
    [h]: R,
    ...C
  } = f;
  if (Object.entries(C || {}).forEach(([U, j]) => {
    const {
      vars: _,
      css: X,
      varsWithDefaults: q
    } = zd(j, r);
    x = cn(x, q), w[U] = {
      css: X,
      vars: _
    };
  }), R) {
    const {
      css: U,
      vars: j,
      varsWithDefaults: _
    } = zd(R, r);
    x = cn(x, _), w[h] = {
      css: U,
      vars: j
    };
  }
  function T(U, j) {
    var X, q;
    let _ = c;
    if (c === "class" && (_ = ".%s"), c === "data" && (_ = "[data-%s]"), c != null && c.startsWith("data-") && !c.includes("%s") && (_ = `[${c}="%s"]`), U) {
      if (_ === "media")
        return a.defaultColorScheme === U ? ":root" : {
          [`@media (prefers-color-scheme: ${((q = (X = f[U]) == null ? void 0 : X.palette) == null ? void 0 : q.mode) || U})`]: {
            ":root": j
          }
        };
      if (_)
        return a.defaultColorScheme === U ? `:root, ${_.replace("%s", String(U))}` : _.replace("%s", String(U));
    }
    return ":root";
  }
  return {
    vars: x,
    generateThemeVars: () => {
      let U = {
        ...y
      };
      return Object.entries(w).forEach(([, {
        vars: j
      }]) => {
        U = cn(U, j);
      }), U;
    },
    generateStyleSheets: () => {
      var P, J;
      const U = [], j = a.defaultColorScheme || "light";
      function _(S, G) {
        Object.keys(G).length && U.push(typeof S == "string" ? {
          [S]: {
            ...G
          }
        } : S);
      }
      _(i(void 0, {
        ...v
      }), v);
      const {
        [j]: X,
        ...q
      } = w;
      if (X) {
        const {
          css: S
        } = X, G = (J = (P = f[j]) == null ? void 0 : P.palette) == null ? void 0 : J.mode, ee = !o && G ? {
          colorScheme: G,
          ...S
        } : {
          ...S
        };
        _(i(j, {
          ...ee
        }), ee);
      }
      return Object.entries(q).forEach(([S, {
        css: G
      }]) => {
        var oe, te;
        const ee = (te = (oe = f[S]) == null ? void 0 : oe.palette) == null ? void 0 : te.mode, ae = !o && ee ? {
          colorScheme: ee,
          ...G
        } : {
          ...G
        };
        _(i(S, {
          ...ae
        }), ae);
      }), U;
    }
  };
}
function QR(a) {
  return function(i) {
    return a === "media" ? `@media (prefers-color-scheme: ${i})` : a ? a.startsWith("data-") && !a.includes("%s") ? `[${a}="${i}"] &` : a === "class" ? `.${i} &` : a === "data" ? `[data-${i}] &` : `${a.replace("%s", i)} &` : "&";
  };
}
function lv(a) {
  const {
    defaultProps: r = {},
    mixins: i = {},
    overrides: o = {},
    palette: c = {},
    props: f = {},
    styleOverrides: d = {},
    ...h
  } = a, p = {
    ...h,
    components: {}
  };
  Object.keys(r).forEach((C) => {
    const T = p.components[C] || {};
    T.defaultProps = r[C], p.components[C] = T;
  }), Object.keys(f).forEach((C) => {
    const T = p.components[C] || {};
    T.defaultProps = f[C], p.components[C] = T;
  }), Object.keys(d).forEach((C) => {
    const T = p.components[C] || {};
    T.styleOverrides = d[C], p.components[C] = T;
  }), Object.keys(o).forEach((C) => {
    const T = p.components[C] || {};
    T.styleOverrides = o[C], p.components[C] = T;
  }), p.spacing = Cm(a.spacing);
  const y = Cb(a.breakpoints || {}), v = p.spacing;
  p.mixins = {
    gutters: (C = {}) => ({
      paddingLeft: v(2),
      paddingRight: v(2),
      ...C,
      [y.up("sm")]: {
        paddingLeft: v(3),
        paddingRight: v(3),
        ...C[y.up("sm")]
      }
    }),
    ...i
  };
  const {
    type: g,
    mode: x,
    ...w
  } = c, R = x || g || "light";
  return p.palette = {
    // theme.palette.text.hint
    text: {
      hint: R === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.38)"
    },
    mode: R,
    type: R,
    ...w
  }, p;
}
function Yb() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: no.white,
      default: no.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const KR = Yb();
function qb() {
  return {
    text: {
      primary: no.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: no.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const rv = qb();
function iv(a, r, i, o) {
  const c = o.light || o, f = o.dark || o * 1.5;
  a[r] || (a.hasOwnProperty(i) ? a[r] = a[i] : r === "light" ? a.light = zm(a.main, c) : r === "dark" && (a.dark = Am(a.main, f)));
}
function ZR(a = "light") {
  return a === "dark" ? {
    main: Ur[200],
    light: Ur[50],
    dark: Ur[400]
  } : {
    main: Ur[700],
    light: Ur[400],
    dark: Ur[800]
  };
}
function IR(a = "light") {
  return a === "dark" ? {
    main: Br[200],
    light: Br[50],
    dark: Br[400]
  } : {
    main: Br[500],
    light: Br[300],
    dark: Br[700]
  };
}
function PR(a = "light") {
  return a === "dark" ? {
    main: Dr[500],
    light: Dr[300],
    dark: Dr[700]
  } : {
    main: Dr[700],
    light: Dr[400],
    dark: Dr[800]
  };
}
function JR(a = "light") {
  return a === "dark" ? {
    main: jr[400],
    light: jr[300],
    dark: jr[700]
  } : {
    main: jr[700],
    light: jr[500],
    dark: jr[900]
  };
}
function FR(a = "light") {
  return a === "dark" ? {
    main: Hr[400],
    light: Hr[300],
    dark: Hr[700]
  } : {
    main: Hr[800],
    light: Hr[500],
    dark: Hr[900]
  };
}
function WR(a = "light") {
  return a === "dark" ? {
    main: Ki[400],
    light: Ki[300],
    dark: Ki[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Ki[500],
    dark: Ki[900]
  };
}
function Um(a) {
  const {
    mode: r = "light",
    contrastThreshold: i = 3,
    tonalOffset: o = 0.2,
    ...c
  } = a, f = a.primary || ZR(r), d = a.secondary || IR(r), h = a.error || PR(r), p = a.info || JR(r), y = a.success || FR(r), v = a.warning || WR(r);
  function g(C) {
    return cR(C, rv.text.primary) >= i ? rv.text.primary : KR.text.primary;
  }
  const x = ({
    color: C,
    name: T,
    mainShade: M = 500,
    lightShade: Y = 300,
    darkShade: U = 700
  }) => {
    if (C = {
      ...C
    }, !C.main && C[M] && (C.main = C[M]), !C.hasOwnProperty("main"))
      throw new Error(Ll(11, T ? ` (${T})` : "", M));
    if (typeof C.main != "string")
      throw new Error(Ll(12, T ? ` (${T})` : "", JSON.stringify(C.main)));
    return iv(C, "light", Y, o), iv(C, "dark", U, o), C.contrastText || (C.contrastText = g(C.main)), C;
  };
  let w;
  return r === "light" ? w = Yb() : r === "dark" && (w = qb()), cn({
    // A collection of common colors.
    common: {
      ...no
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: x({
      color: f,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: x({
      color: d,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: x({
      color: h,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: x({
      color: v,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: x({
      color: p,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: x({
      color: y,
      name: "success"
    }),
    // The grey colors.
    grey: X2,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: i,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: g,
    // Generate a rich color object.
    augmentColor: x,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: o,
    // The light and dark mode object.
    ...w
  }, c);
}
function e5(a) {
  const r = {};
  return Object.entries(a).forEach((o) => {
    const [c, f] = o;
    typeof f == "object" && (r[c] = `${f.fontStyle ? `${f.fontStyle} ` : ""}${f.fontVariant ? `${f.fontVariant} ` : ""}${f.fontWeight ? `${f.fontWeight} ` : ""}${f.fontStretch ? `${f.fontStretch} ` : ""}${f.fontSize || ""}${f.lineHeight ? `/${f.lineHeight} ` : ""}${f.fontFamily || ""}`);
  }), r;
}
function t5(a, r) {
  return {
    toolbar: {
      minHeight: 56,
      [a.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [a.up("sm")]: {
        minHeight: 64
      }
    },
    ...r
  };
}
function n5(a) {
  return Math.round(a * 1e5) / 1e5;
}
const ov = {
  textTransform: "uppercase"
}, uv = '"Roboto", "Helvetica", "Arial", sans-serif';
function Vb(a, r) {
  const {
    fontFamily: i = uv,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: c = 300,
    fontWeightRegular: f = 400,
    fontWeightMedium: d = 500,
    fontWeightBold: h = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: p = 16,
    // Apply the CSS properties to all the variants.
    allVariants: y,
    pxToRem: v,
    ...g
  } = typeof r == "function" ? r(a) : r, x = o / 14, w = v || ((T) => `${T / p * x}rem`), R = (T, M, Y, U, j) => ({
    fontFamily: i,
    fontWeight: T,
    fontSize: w(M),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: Y,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...i === uv ? {
      letterSpacing: `${n5(U / M)}em`
    } : {},
    ...j,
    ...y
  }), C = {
    h1: R(c, 96, 1.167, -1.5),
    h2: R(c, 60, 1.2, -0.5),
    h3: R(f, 48, 1.167, 0),
    h4: R(f, 34, 1.235, 0.25),
    h5: R(f, 24, 1.334, 0),
    h6: R(d, 20, 1.6, 0.15),
    subtitle1: R(f, 16, 1.75, 0.15),
    subtitle2: R(d, 14, 1.57, 0.1),
    body1: R(f, 16, 1.5, 0.15),
    body2: R(f, 14, 1.43, 0.15),
    button: R(d, 14, 1.75, 0.4, ov),
    caption: R(f, 12, 1.66, 0.4),
    overline: R(f, 12, 2.66, 1, ov),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return cn({
    htmlFontSize: p,
    pxToRem: w,
    fontFamily: i,
    fontSize: o,
    fontWeightLight: c,
    fontWeightRegular: f,
    fontWeightMedium: d,
    fontWeightBold: h,
    ...C
  }, g, {
    clone: !1
    // No need to clone deep
  });
}
const a5 = 0.2, l5 = 0.14, r5 = 0.12;
function We(...a) {
  return [`${a[0]}px ${a[1]}px ${a[2]}px ${a[3]}px rgba(0,0,0,${a5})`, `${a[4]}px ${a[5]}px ${a[6]}px ${a[7]}px rgba(0,0,0,${l5})`, `${a[8]}px ${a[9]}px ${a[10]}px ${a[11]}px rgba(0,0,0,${r5})`].join(",");
}
const i5 = ["none", We(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), We(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), We(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), We(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), We(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), We(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), We(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), We(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), We(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), We(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), We(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), We(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), We(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), We(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), We(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), We(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), We(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), We(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), We(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), We(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), We(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), We(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), We(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), We(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], o5 = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, u5 = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function sv(a) {
  return `${Math.round(a)}ms`;
}
function s5(a) {
  if (!a)
    return 0;
  const r = a / 36;
  return Math.min(Math.round((4 + 15 * r ** 0.25 + r / 5) * 10), 3e3);
}
function c5(a) {
  const r = {
    ...o5,
    ...a.easing
  }, i = {
    ...u5,
    ...a.duration
  };
  return {
    getAutoHeightDuration: s5,
    create: (c = ["all"], f = {}) => {
      const {
        duration: d = i.standard,
        easing: h = r.easeInOut,
        delay: p = 0,
        ...y
      } = f;
      return (Array.isArray(c) ? c : [c]).map((v) => `${v} ${typeof d == "string" ? d : sv(d)} ${h} ${typeof p == "string" ? p : sv(p)}`).join(",");
    },
    ...a,
    easing: r,
    duration: i
  };
}
const f5 = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function d5(a) {
  return Fn(a) || typeof a > "u" || typeof a == "string" || typeof a == "boolean" || typeof a == "number" || Array.isArray(a);
}
function Gb(a = {}) {
  const r = {
    ...a
  };
  function i(o) {
    const c = Object.entries(o);
    for (let f = 0; f < c.length; f++) {
      const [d, h] = c[f];
      !d5(h) || d.startsWith("unstable_") ? delete o[d] : Fn(h) && (o[d] = {
        ...h
      }, i(o[d]));
    }
  }
  return i(r), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Zd(a = {}, ...r) {
  const {
    breakpoints: i,
    mixins: o = {},
    spacing: c,
    palette: f = {},
    transitions: d = {},
    typography: h = {},
    shape: p,
    ...y
  } = a;
  if (a.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  a.generateThemeVars === void 0)
    throw new Error(Ll(20));
  const v = Um(f), g = Rm(a);
  let x = cn(g, {
    mixins: t5(g.breakpoints, o),
    palette: v,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: i5.slice(),
    typography: Vb(v, h),
    transitions: c5(d),
    zIndex: {
      ...f5
    }
  });
  return x = cn(x, y), x = r.reduce((w, R) => cn(w, R), x), x.unstable_sxConfig = {
    ...vo,
    ...y == null ? void 0 : y.unstable_sxConfig
  }, x.unstable_sx = function(R) {
    return rl({
      sx: R,
      theme: this
    });
  }, x.toRuntimeSource = Gb, x;
}
function Id(a) {
  let r;
  return a < 1 ? r = 5.11916 * a ** 2 : r = 4.5 * Math.log(a + 1) + 2, Math.round(r * 10) / 1e3;
}
const m5 = [...Array(25)].map((a, r) => {
  if (r === 0)
    return "none";
  const i = Id(r);
  return `linear-gradient(rgba(255 255 255 / ${i}), rgba(255 255 255 / ${i}))`;
});
function Xb(a) {
  return {
    inputPlaceholder: a === "dark" ? 0.5 : 0.42,
    inputUnderline: a === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: a === "dark" ? 0.2 : 0.12,
    switchTrack: a === "dark" ? 0.3 : 0.38
  };
}
function Qb(a) {
  return a === "dark" ? m5 : [];
}
function h5(a) {
  const {
    palette: r = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: i,
    overlays: o,
    ...c
  } = a, f = Um(r);
  return {
    palette: f,
    opacity: {
      ...Xb(f.mode),
      ...i
    },
    overlays: o || Qb(f.mode),
    ...c
  };
}
function p5(a) {
  var r;
  return !!a[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!a[0].match(/sxConfig$/) || // ends with sxConfig
  a[0] === "palette" && !!((r = a[1]) != null && r.match(/(mode|contrastThreshold|tonalOffset)/));
}
const g5 = (a) => [...[...Array(25)].map((r, i) => `--${a ? `${a}-` : ""}overlays-${i}`), `--${a ? `${a}-` : ""}palette-AppBar-darkBg`, `--${a ? `${a}-` : ""}palette-AppBar-darkColor`], y5 = (a) => (r, i) => {
  const o = a.rootSelector || ":root", c = a.colorSchemeSelector;
  let f = c;
  if (c === "class" && (f = ".%s"), c === "data" && (f = "[data-%s]"), c != null && c.startsWith("data-") && !c.includes("%s") && (f = `[${c}="%s"]`), a.defaultColorScheme === r) {
    if (r === "dark") {
      const d = {};
      return g5(a.cssVarPrefix).forEach((h) => {
        d[h] = i[h], delete i[h];
      }), f === "media" ? {
        [o]: i,
        "@media (prefers-color-scheme: dark)": {
          [o]: d
        }
      } : f ? {
        [f.replace("%s", r)]: d,
        [`${o}, ${f.replace("%s", r)}`]: i
      } : {
        [o]: {
          ...i,
          ...d
        }
      };
    }
    if (f && f !== "media")
      return `${o}, ${f.replace("%s", String(r))}`;
  } else if (r) {
    if (f === "media")
      return {
        [`@media (prefers-color-scheme: ${String(r)})`]: {
          [o]: i
        }
      };
    if (f)
      return f.replace("%s", String(r));
  }
  return o;
};
function v5(a, r) {
  r.forEach((i) => {
    a[i] || (a[i] = {});
  });
}
function K(a, r, i) {
  !a[r] && i && (a[r] = i);
}
function Fi(a) {
  return typeof a != "string" || !a.startsWith("hsl") ? a : _b(a);
}
function Ca(a, r) {
  `${r}Channel` in a || (a[`${r}Channel`] = Ji(Fi(a[r])));
}
function b5(a) {
  return typeof a == "number" ? `${a}px` : typeof a == "string" || typeof a == "function" || Array.isArray(a) ? a : "8px";
}
const In = (a) => {
  try {
    return a();
  } catch {
  }
}, S5 = (a = "mui") => qR(a);
function Md(a, r, i, o) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const c = o === "dark" ? "dark" : "light";
  if (!i) {
    a[o] = h5({
      ...r,
      palette: {
        mode: c,
        ...r == null ? void 0 : r.palette
      }
    });
    return;
  }
  const {
    palette: f,
    ...d
  } = Zd({
    ...i,
    palette: {
      mode: c,
      ...r == null ? void 0 : r.palette
    }
  });
  return a[o] = {
    ...r,
    palette: f,
    opacity: {
      ...Xb(c),
      ...r == null ? void 0 : r.opacity
    },
    overlays: (r == null ? void 0 : r.overlays) || Qb(c)
  }, d;
}
function E5(a = {}, ...r) {
  const {
    colorSchemes: i = {
      light: !0
    },
    defaultColorScheme: o,
    disableCssColorScheme: c = !1,
    cssVarPrefix: f = "mui",
    shouldSkipGeneratingVar: d = p5,
    colorSchemeSelector: h = i.light && i.dark ? "media" : void 0,
    rootSelector: p = ":root",
    ...y
  } = a, v = Object.keys(i)[0], g = o || (i.light && v !== "light" ? "light" : v), x = S5(f), {
    [g]: w,
    light: R,
    dark: C,
    ...T
  } = i, M = {
    ...T
  };
  let Y = w;
  if ((g === "dark" && !("dark" in i) || g === "light" && !("light" in i)) && (Y = !0), !Y)
    throw new Error(Ll(21, g));
  const U = Md(M, Y, y, g);
  R && !M.light && Md(M, R, void 0, "light"), C && !M.dark && Md(M, C, void 0, "dark");
  let j = {
    defaultColorScheme: g,
    ...U,
    cssVarPrefix: f,
    colorSchemeSelector: h,
    rootSelector: p,
    getCssVar: x,
    colorSchemes: M,
    font: {
      ...e5(U.typography),
      ...U.font
    },
    spacing: b5(y.spacing)
  };
  Object.keys(j.colorSchemes).forEach((J) => {
    const S = j.colorSchemes[J].palette, G = (ee) => {
      const ae = ee.split("-"), oe = ae[1], te = ae[2];
      return x(ee, S[oe][te]);
    };
    if (S.mode === "light" && (K(S.common, "background", "#fff"), K(S.common, "onBackground", "#000")), S.mode === "dark" && (K(S.common, "background", "#000"), K(S.common, "onBackground", "#fff")), v5(S, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), S.mode === "light") {
      K(S.Alert, "errorColor", Qe(S.error.light, 0.6)), K(S.Alert, "infoColor", Qe(S.info.light, 0.6)), K(S.Alert, "successColor", Qe(S.success.light, 0.6)), K(S.Alert, "warningColor", Qe(S.warning.light, 0.6)), K(S.Alert, "errorFilledBg", G("palette-error-main")), K(S.Alert, "infoFilledBg", G("palette-info-main")), K(S.Alert, "successFilledBg", G("palette-success-main")), K(S.Alert, "warningFilledBg", G("palette-warning-main")), K(S.Alert, "errorFilledColor", In(() => S.getContrastText(S.error.main))), K(S.Alert, "infoFilledColor", In(() => S.getContrastText(S.info.main))), K(S.Alert, "successFilledColor", In(() => S.getContrastText(S.success.main))), K(S.Alert, "warningFilledColor", In(() => S.getContrastText(S.warning.main))), K(S.Alert, "errorStandardBg", Ke(S.error.light, 0.9)), K(S.Alert, "infoStandardBg", Ke(S.info.light, 0.9)), K(S.Alert, "successStandardBg", Ke(S.success.light, 0.9)), K(S.Alert, "warningStandardBg", Ke(S.warning.light, 0.9)), K(S.Alert, "errorIconColor", G("palette-error-main")), K(S.Alert, "infoIconColor", G("palette-info-main")), K(S.Alert, "successIconColor", G("palette-success-main")), K(S.Alert, "warningIconColor", G("palette-warning-main")), K(S.AppBar, "defaultBg", G("palette-grey-100")), K(S.Avatar, "defaultBg", G("palette-grey-400")), K(S.Button, "inheritContainedBg", G("palette-grey-300")), K(S.Button, "inheritContainedHoverBg", G("palette-grey-A100")), K(S.Chip, "defaultBorder", G("palette-grey-400")), K(S.Chip, "defaultAvatarColor", G("palette-grey-700")), K(S.Chip, "defaultIconColor", G("palette-grey-700")), K(S.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), K(S.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), K(S.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), K(S.LinearProgress, "primaryBg", Ke(S.primary.main, 0.62)), K(S.LinearProgress, "secondaryBg", Ke(S.secondary.main, 0.62)), K(S.LinearProgress, "errorBg", Ke(S.error.main, 0.62)), K(S.LinearProgress, "infoBg", Ke(S.info.main, 0.62)), K(S.LinearProgress, "successBg", Ke(S.success.main, 0.62)), K(S.LinearProgress, "warningBg", Ke(S.warning.main, 0.62)), K(S.Skeleton, "bg", `rgba(${G("palette-text-primaryChannel")} / 0.11)`), K(S.Slider, "primaryTrack", Ke(S.primary.main, 0.62)), K(S.Slider, "secondaryTrack", Ke(S.secondary.main, 0.62)), K(S.Slider, "errorTrack", Ke(S.error.main, 0.62)), K(S.Slider, "infoTrack", Ke(S.info.main, 0.62)), K(S.Slider, "successTrack", Ke(S.success.main, 0.62)), K(S.Slider, "warningTrack", Ke(S.warning.main, 0.62));
      const ee = Ju(S.background.default, 0.8);
      K(S.SnackbarContent, "bg", ee), K(S.SnackbarContent, "color", In(() => S.getContrastText(ee))), K(S.SpeedDialAction, "fabHoverBg", Ju(S.background.paper, 0.15)), K(S.StepConnector, "border", G("palette-grey-400")), K(S.StepContent, "border", G("palette-grey-400")), K(S.Switch, "defaultColor", G("palette-common-white")), K(S.Switch, "defaultDisabledColor", G("palette-grey-100")), K(S.Switch, "primaryDisabledColor", Ke(S.primary.main, 0.62)), K(S.Switch, "secondaryDisabledColor", Ke(S.secondary.main, 0.62)), K(S.Switch, "errorDisabledColor", Ke(S.error.main, 0.62)), K(S.Switch, "infoDisabledColor", Ke(S.info.main, 0.62)), K(S.Switch, "successDisabledColor", Ke(S.success.main, 0.62)), K(S.Switch, "warningDisabledColor", Ke(S.warning.main, 0.62)), K(S.TableCell, "border", Ke(Pu(S.divider, 1), 0.88)), K(S.Tooltip, "bg", Pu(S.grey[700], 0.92));
    }
    if (S.mode === "dark") {
      K(S.Alert, "errorColor", Ke(S.error.light, 0.6)), K(S.Alert, "infoColor", Ke(S.info.light, 0.6)), K(S.Alert, "successColor", Ke(S.success.light, 0.6)), K(S.Alert, "warningColor", Ke(S.warning.light, 0.6)), K(S.Alert, "errorFilledBg", G("palette-error-dark")), K(S.Alert, "infoFilledBg", G("palette-info-dark")), K(S.Alert, "successFilledBg", G("palette-success-dark")), K(S.Alert, "warningFilledBg", G("palette-warning-dark")), K(S.Alert, "errorFilledColor", In(() => S.getContrastText(S.error.dark))), K(S.Alert, "infoFilledColor", In(() => S.getContrastText(S.info.dark))), K(S.Alert, "successFilledColor", In(() => S.getContrastText(S.success.dark))), K(S.Alert, "warningFilledColor", In(() => S.getContrastText(S.warning.dark))), K(S.Alert, "errorStandardBg", Qe(S.error.light, 0.9)), K(S.Alert, "infoStandardBg", Qe(S.info.light, 0.9)), K(S.Alert, "successStandardBg", Qe(S.success.light, 0.9)), K(S.Alert, "warningStandardBg", Qe(S.warning.light, 0.9)), K(S.Alert, "errorIconColor", G("palette-error-main")), K(S.Alert, "infoIconColor", G("palette-info-main")), K(S.Alert, "successIconColor", G("palette-success-main")), K(S.Alert, "warningIconColor", G("palette-warning-main")), K(S.AppBar, "defaultBg", G("palette-grey-900")), K(S.AppBar, "darkBg", G("palette-background-paper")), K(S.AppBar, "darkColor", G("palette-text-primary")), K(S.Avatar, "defaultBg", G("palette-grey-600")), K(S.Button, "inheritContainedBg", G("palette-grey-800")), K(S.Button, "inheritContainedHoverBg", G("palette-grey-700")), K(S.Chip, "defaultBorder", G("palette-grey-700")), K(S.Chip, "defaultAvatarColor", G("palette-grey-300")), K(S.Chip, "defaultIconColor", G("palette-grey-300")), K(S.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), K(S.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), K(S.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), K(S.LinearProgress, "primaryBg", Qe(S.primary.main, 0.5)), K(S.LinearProgress, "secondaryBg", Qe(S.secondary.main, 0.5)), K(S.LinearProgress, "errorBg", Qe(S.error.main, 0.5)), K(S.LinearProgress, "infoBg", Qe(S.info.main, 0.5)), K(S.LinearProgress, "successBg", Qe(S.success.main, 0.5)), K(S.LinearProgress, "warningBg", Qe(S.warning.main, 0.5)), K(S.Skeleton, "bg", `rgba(${G("palette-text-primaryChannel")} / 0.13)`), K(S.Slider, "primaryTrack", Qe(S.primary.main, 0.5)), K(S.Slider, "secondaryTrack", Qe(S.secondary.main, 0.5)), K(S.Slider, "errorTrack", Qe(S.error.main, 0.5)), K(S.Slider, "infoTrack", Qe(S.info.main, 0.5)), K(S.Slider, "successTrack", Qe(S.success.main, 0.5)), K(S.Slider, "warningTrack", Qe(S.warning.main, 0.5));
      const ee = Ju(S.background.default, 0.98);
      K(S.SnackbarContent, "bg", ee), K(S.SnackbarContent, "color", In(() => S.getContrastText(ee))), K(S.SpeedDialAction, "fabHoverBg", Ju(S.background.paper, 0.15)), K(S.StepConnector, "border", G("palette-grey-600")), K(S.StepContent, "border", G("palette-grey-600")), K(S.Switch, "defaultColor", G("palette-grey-300")), K(S.Switch, "defaultDisabledColor", G("palette-grey-600")), K(S.Switch, "primaryDisabledColor", Qe(S.primary.main, 0.55)), K(S.Switch, "secondaryDisabledColor", Qe(S.secondary.main, 0.55)), K(S.Switch, "errorDisabledColor", Qe(S.error.main, 0.55)), K(S.Switch, "infoDisabledColor", Qe(S.info.main, 0.55)), K(S.Switch, "successDisabledColor", Qe(S.success.main, 0.55)), K(S.Switch, "warningDisabledColor", Qe(S.warning.main, 0.55)), K(S.TableCell, "border", Qe(Pu(S.divider, 1), 0.68)), K(S.Tooltip, "bg", Pu(S.grey[700], 0.92));
    }
    Ca(S.background, "default"), Ca(S.background, "paper"), Ca(S.common, "background"), Ca(S.common, "onBackground"), Ca(S, "divider"), Object.keys(S).forEach((ee) => {
      const ae = S[ee];
      ee !== "tonalOffset" && ae && typeof ae == "object" && (ae.main && K(S[ee], "mainChannel", Ji(Fi(ae.main))), ae.light && K(S[ee], "lightChannel", Ji(Fi(ae.light))), ae.dark && K(S[ee], "darkChannel", Ji(Fi(ae.dark))), ae.contrastText && K(S[ee], "contrastTextChannel", Ji(Fi(ae.contrastText))), ee === "text" && (Ca(S[ee], "primary"), Ca(S[ee], "secondary")), ee === "action" && (ae.active && Ca(S[ee], "active"), ae.selected && Ca(S[ee], "selected")));
    });
  }), j = r.reduce((J, S) => cn(J, S), j);
  const _ = {
    prefix: f,
    disableCssColorScheme: c,
    shouldSkipGeneratingVar: d,
    getSelector: y5(j)
  }, {
    vars: X,
    generateThemeVars: q,
    generateStyleSheets: P
  } = XR(j, _);
  return j.vars = X, Object.entries(j.colorSchemes[j.defaultColorScheme]).forEach(([J, S]) => {
    j[J] = S;
  }), j.generateThemeVars = q, j.generateStyleSheets = P, j.generateSpacing = function() {
    return Cm(y.spacing, xm(this));
  }, j.getColorSchemeSelector = QR(h), j.spacing = j.generateSpacing(), j.shouldSkipGeneratingVar = d, j.unstable_sxConfig = {
    ...vo,
    ...y == null ? void 0 : y.unstable_sxConfig
  }, j.unstable_sx = function(S) {
    return rl({
      sx: S,
      theme: this
    });
  }, j.toRuntimeSource = Gb, j;
}
function cv(a, r, i) {
  a.colorSchemes && i && (a.colorSchemes[r] = {
    ...i !== !0 && i,
    palette: Um({
      ...i === !0 ? {} : i.palette,
      mode: r
    })
    // cast type to skip module augmentation test
  });
}
function oo(a = {}, ...r) {
  const {
    palette: i,
    cssVariables: o = !1,
    colorSchemes: c = i ? void 0 : {
      light: !0
    },
    defaultColorScheme: f = i == null ? void 0 : i.mode,
    ...d
  } = a, h = f || "light", p = c == null ? void 0 : c[h], y = {
    ...c,
    ...i ? {
      [h]: {
        ...typeof p != "boolean" && p,
        palette: i
      }
    } : void 0
  };
  if (o === !1) {
    if (!("colorSchemes" in a))
      return Zd(a, ...r);
    let v = i;
    "palette" in a || y[h] && (y[h] !== !0 ? v = y[h].palette : h === "dark" && (v = {
      mode: "dark"
    }));
    const g = Zd({
      ...a,
      palette: v
    }, ...r);
    return g.defaultColorScheme = h, g.colorSchemes = y, g.palette.mode === "light" && (g.colorSchemes.light = {
      ...y.light !== !0 && y.light,
      palette: g.palette
    }, cv(g, "dark", y.dark)), g.palette.mode === "dark" && (g.colorSchemes.dark = {
      ...y.dark !== !0 && y.dark,
      palette: g.palette
    }, cv(g, "light", y.light)), g;
  }
  return !i && !("light" in y) && h === "light" && (y.light = !0), E5({
    ...d,
    colorSchemes: y,
    defaultColorScheme: h,
    ...typeof o != "boolean" && o
  }, ...r);
}
const Kb = oo();
function bo() {
  const a = Om(Kb);
  return a[ta] || a;
}
function x5(a) {
  return a !== "ownerState" && a !== "theme" && a !== "sx" && a !== "as";
}
const Ds = (a) => x5(a) && a !== "classes", Ze = FT({
  themeId: ta,
  defaultTheme: Kb,
  rootShouldForwardProp: Ds
});
function C5({
  theme: a,
  ...r
}) {
  const i = ta in a ? a[ta] : void 0;
  return /* @__PURE__ */ k.jsx(kb, {
    ...r,
    themeId: i ? ta : void 0,
    theme: i || a
  });
}
const Fu = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: T5
} = YR({
  themeId: ta,
  // @ts-ignore ignore module augmentation tests
  theme: () => oo({
    cssVariables: !0
  }),
  colorSchemeStorageKey: Fu.colorSchemeStorageKey,
  modeStorageKey: Fu.modeStorageKey,
  defaultColorScheme: {
    light: Fu.defaultLightColorScheme,
    dark: Fu.defaultDarkColorScheme
  },
  resolveTheme: (a) => {
    const r = {
      ...a,
      typography: Vb(a.palette, a.typography)
    };
    return r.unstable_sx = function(o) {
      return rl({
        sx: o,
        theme: this
      });
    }, r;
  }
}), R5 = T5;
function O5({
  theme: a,
  ...r
}) {
  const i = E.useMemo(() => {
    if (typeof a == "function")
      return a;
    const o = ta in a ? a[ta] : a;
    return "colorSchemes" in o ? null : "vars" in o ? a : {
      ...a,
      vars: null
    };
  }, [a]);
  return i ? /* @__PURE__ */ k.jsx(C5, {
    theme: i,
    ...r
  }) : /* @__PURE__ */ k.jsx(R5, {
    theme: a,
    ...r
  });
}
function w5() {
  return Rb;
}
const Lt = DR;
function dn(a) {
  return NR(a);
}
function A5(a) {
  return fn("MuiSvgIcon", a);
}
Zt("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const z5 = (a) => {
  const {
    color: r,
    fontSize: i,
    classes: o
  } = a, c = {
    root: ["root", r !== "inherit" && `color${ge(r)}`, `fontSize${ge(i)}`]
  };
  return An(c, A5, o);
}, M5 = Ze("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, i.color !== "inherit" && r[`color${ge(i.color)}`], r[`fontSize${ge(i.fontSize)}`]];
  }
})(Lt(({
  theme: a
}) => {
  var r, i, o, c, f, d, h, p, y, v, g, x, w, R;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (c = (r = a.transitions) == null ? void 0 : r.create) == null ? void 0 : c.call(r, "fill", {
      duration: (o = (i = (a.vars ?? a).transitions) == null ? void 0 : i.duration) == null ? void 0 : o.shorter
    }),
    variants: [
      {
        props: (C) => !C.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((d = (f = a.typography) == null ? void 0 : f.pxToRem) == null ? void 0 : d.call(f, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((p = (h = a.typography) == null ? void 0 : h.pxToRem) == null ? void 0 : p.call(h, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((v = (y = a.typography) == null ? void 0 : y.pxToRem) == null ? void 0 : v.call(y, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((a.vars ?? a).palette).filter(([, C]) => C && C.main).map(([C]) => {
        var T, M;
        return {
          props: {
            color: C
          },
          style: {
            color: (M = (T = (a.vars ?? a).palette) == null ? void 0 : T[C]) == null ? void 0 : M.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (x = (g = (a.vars ?? a).palette) == null ? void 0 : g.action) == null ? void 0 : x.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (R = (w = (a.vars ?? a).palette) == null ? void 0 : w.action) == null ? void 0 : R.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
})), Pd = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const o = dn({
    props: r,
    name: "MuiSvgIcon"
  }), {
    children: c,
    className: f,
    color: d = "inherit",
    component: h = "svg",
    fontSize: p = "medium",
    htmlColor: y,
    inheritViewBox: v = !1,
    titleAccess: g,
    viewBox: x = "0 0 24 24",
    ...w
  } = o, R = /* @__PURE__ */ E.isValidElement(c) && c.type === "svg", C = {
    ...o,
    color: d,
    component: h,
    fontSize: p,
    instanceFontSize: r.fontSize,
    inheritViewBox: v,
    viewBox: x,
    hasSvgAsChild: R
  }, T = {};
  v || (T.viewBox = x);
  const M = z5(C);
  return /* @__PURE__ */ k.jsxs(M5, {
    as: h,
    className: je(M.root, f),
    focusable: "false",
    color: y,
    "aria-hidden": g ? void 0 : !0,
    role: g ? "img" : void 0,
    ref: i,
    ...T,
    ...w,
    ...R && c.props,
    ownerState: C,
    children: [R ? c.props.children : c, g ? /* @__PURE__ */ k.jsx("title", {
      children: g
    }) : null]
  });
});
Pd.muiName = "SvgIcon";
function Bs(a, r) {
  function i(o, c) {
    return /* @__PURE__ */ k.jsx(Pd, {
      "data-testid": `${r}Icon`,
      ref: c,
      ...o,
      children: a
    });
  }
  return i.muiName = Pd.muiName, /* @__PURE__ */ E.memo(/* @__PURE__ */ E.forwardRef(i));
}
function N5(a, r) {
  if (!a)
    return r;
  if (typeof a == "function" || typeof r == "function")
    return (c) => {
      const f = typeof r == "function" ? r(c) : r, d = typeof a == "function" ? a({
        ...c,
        ...f
      }) : a, h = je(c == null ? void 0 : c.className, f == null ? void 0 : f.className, d == null ? void 0 : d.className);
      return {
        ...f,
        ...d,
        ...!!h && {
          className: h
        },
        ...(f == null ? void 0 : f.style) && (d == null ? void 0 : d.style) && {
          style: {
            ...f.style,
            ...d.style
          }
        },
        ...(f == null ? void 0 : f.sx) && (d == null ? void 0 : d.sx) && {
          sx: [...Array.isArray(f.sx) ? f.sx : [f.sx], ...Array.isArray(d.sx) ? d.sx : [d.sx]]
        }
      };
    };
  const i = r, o = je(i == null ? void 0 : i.className, a == null ? void 0 : a.className);
  return {
    ...r,
    ...a,
    ...!!o && {
      className: o
    },
    ...(i == null ? void 0 : i.style) && (a == null ? void 0 : a.style) && {
      style: {
        ...i.style,
        ...a.style
      }
    },
    ...(i == null ? void 0 : i.sx) && (a == null ? void 0 : a.sx) && {
      sx: [...Array.isArray(i.sx) ? i.sx : [i.sx], ...Array.isArray(a.sx) ? a.sx : [a.sx]]
    }
  };
}
function Zb(a, r) {
  if (a == null) return {};
  var i = {};
  for (var o in a) if ({}.hasOwnProperty.call(a, o)) {
    if (r.indexOf(o) !== -1) continue;
    i[o] = a[o];
  }
  return i;
}
function Jd(a, r) {
  return Jd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, o) {
    return i.__proto__ = o, i;
  }, Jd(a, r);
}
function Ib(a, r) {
  a.prototype = Object.create(r.prototype), a.prototype.constructor = a, Jd(a, r);
}
const fv = {
  disabled: !1
}, ms = he.createContext(null);
var _5 = function(r) {
  return r.scrollTop;
}, Wi = "unmounted", Bl = "exited", Ul = "entering", kr = "entered", Fd = "exiting", ra = /* @__PURE__ */ (function(a) {
  Ib(r, a);
  function r(o, c) {
    var f;
    f = a.call(this, o, c) || this;
    var d = c, h = d && !d.isMounting ? o.enter : o.appear, p;
    return f.appearStatus = null, o.in ? h ? (p = Bl, f.appearStatus = Ul) : p = kr : o.unmountOnExit || o.mountOnEnter ? p = Wi : p = Bl, f.state = {
      status: p
    }, f.nextCallback = null, f;
  }
  r.getDerivedStateFromProps = function(c, f) {
    var d = c.in;
    return d && f.status === Wi ? {
      status: Bl
    } : null;
  };
  var i = r.prototype;
  return i.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, i.componentDidUpdate = function(c) {
    var f = null;
    if (c !== this.props) {
      var d = this.state.status;
      this.props.in ? d !== Ul && d !== kr && (f = Ul) : (d === Ul || d === kr) && (f = Fd);
    }
    this.updateStatus(!1, f);
  }, i.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, i.getTimeouts = function() {
    var c = this.props.timeout, f, d, h;
    return f = d = h = c, c != null && typeof c != "number" && (f = c.exit, d = c.enter, h = c.appear !== void 0 ? c.appear : d), {
      exit: f,
      enter: d,
      appear: h
    };
  }, i.updateStatus = function(c, f) {
    if (c === void 0 && (c = !1), f !== null)
      if (this.cancelNextCallback(), f === Ul) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var d = this.props.nodeRef ? this.props.nodeRef.current : Zu.findDOMNode(this);
          d && _5(d);
        }
        this.performEnter(c);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Bl && this.setState({
      status: Wi
    });
  }, i.performEnter = function(c) {
    var f = this, d = this.props.enter, h = this.context ? this.context.isMounting : c, p = this.props.nodeRef ? [h] : [Zu.findDOMNode(this), h], y = p[0], v = p[1], g = this.getTimeouts(), x = h ? g.appear : g.enter;
    if (!c && !d || fv.disabled) {
      this.safeSetState({
        status: kr
      }, function() {
        f.props.onEntered(y);
      });
      return;
    }
    this.props.onEnter(y, v), this.safeSetState({
      status: Ul
    }, function() {
      f.props.onEntering(y, v), f.onTransitionEnd(x, function() {
        f.safeSetState({
          status: kr
        }, function() {
          f.props.onEntered(y, v);
        });
      });
    });
  }, i.performExit = function() {
    var c = this, f = this.props.exit, d = this.getTimeouts(), h = this.props.nodeRef ? void 0 : Zu.findDOMNode(this);
    if (!f || fv.disabled) {
      this.safeSetState({
        status: Bl
      }, function() {
        c.props.onExited(h);
      });
      return;
    }
    this.props.onExit(h), this.safeSetState({
      status: Fd
    }, function() {
      c.props.onExiting(h), c.onTransitionEnd(d.exit, function() {
        c.safeSetState({
          status: Bl
        }, function() {
          c.props.onExited(h);
        });
      });
    });
  }, i.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, i.safeSetState = function(c, f) {
    f = this.setNextCallback(f), this.setState(c, f);
  }, i.setNextCallback = function(c) {
    var f = this, d = !0;
    return this.nextCallback = function(h) {
      d && (d = !1, f.nextCallback = null, c(h));
    }, this.nextCallback.cancel = function() {
      d = !1;
    }, this.nextCallback;
  }, i.onTransitionEnd = function(c, f) {
    this.setNextCallback(f);
    var d = this.props.nodeRef ? this.props.nodeRef.current : Zu.findDOMNode(this), h = c == null && !this.props.addEndListener;
    if (!d || h) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var p = this.props.nodeRef ? [this.nextCallback] : [d, this.nextCallback], y = p[0], v = p[1];
      this.props.addEndListener(y, v);
    }
    c != null && setTimeout(this.nextCallback, c);
  }, i.render = function() {
    var c = this.state.status;
    if (c === Wi)
      return null;
    var f = this.props, d = f.children;
    f.in, f.mountOnEnter, f.unmountOnExit, f.appear, f.enter, f.exit, f.timeout, f.addEndListener, f.onEnter, f.onEntering, f.onEntered, f.onExit, f.onExiting, f.onExited, f.nodeRef;
    var h = Zb(f, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ he.createElement(ms.Provider, {
        value: null
      }, typeof d == "function" ? d(c, h) : he.cloneElement(he.Children.only(d), h))
    );
  }, r;
})(he.Component);
ra.contextType = ms;
ra.propTypes = {};
function Lr() {
}
ra.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Lr,
  onEntering: Lr,
  onEntered: Lr,
  onExit: Lr,
  onExiting: Lr,
  onExited: Lr
};
ra.UNMOUNTED = Wi;
ra.EXITED = Bl;
ra.ENTERING = Ul;
ra.ENTERED = kr;
ra.EXITING = Fd;
function D5(a) {
  if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a;
}
function jm(a, r) {
  var i = function(f) {
    return r && E.isValidElement(f) ? r(f) : f;
  }, o = /* @__PURE__ */ Object.create(null);
  return a && E.Children.map(a, function(c) {
    return c;
  }).forEach(function(c) {
    o[c.key] = i(c);
  }), o;
}
function B5(a, r) {
  a = a || {}, r = r || {};
  function i(v) {
    return v in r ? r[v] : a[v];
  }
  var o = /* @__PURE__ */ Object.create(null), c = [];
  for (var f in a)
    f in r ? c.length && (o[f] = c, c = []) : c.push(f);
  var d, h = {};
  for (var p in r) {
    if (o[p])
      for (d = 0; d < o[p].length; d++) {
        var y = o[p][d];
        h[o[p][d]] = i(y);
      }
    h[p] = i(p);
  }
  for (d = 0; d < c.length; d++)
    h[c[d]] = i(c[d]);
  return h;
}
function Hl(a, r, i) {
  return i[r] != null ? i[r] : a.props[r];
}
function U5(a, r) {
  return jm(a.children, function(i) {
    return E.cloneElement(i, {
      onExited: r.bind(null, i),
      in: !0,
      appear: Hl(i, "appear", a),
      enter: Hl(i, "enter", a),
      exit: Hl(i, "exit", a)
    });
  });
}
function j5(a, r, i) {
  var o = jm(a.children), c = B5(r, o);
  return Object.keys(c).forEach(function(f) {
    var d = c[f];
    if (E.isValidElement(d)) {
      var h = f in r, p = f in o, y = r[f], v = E.isValidElement(y) && !y.props.in;
      p && (!h || v) ? c[f] = E.cloneElement(d, {
        onExited: i.bind(null, d),
        in: !0,
        exit: Hl(d, "exit", a),
        enter: Hl(d, "enter", a)
      }) : !p && h && !v ? c[f] = E.cloneElement(d, {
        in: !1
      }) : p && h && E.isValidElement(y) && (c[f] = E.cloneElement(d, {
        onExited: i.bind(null, d),
        in: y.props.in,
        exit: Hl(d, "exit", a),
        enter: Hl(d, "enter", a)
      }));
    }
  }), c;
}
var H5 = Object.values || function(a) {
  return Object.keys(a).map(function(r) {
    return a[r];
  });
}, L5 = {
  component: "div",
  childFactory: function(r) {
    return r;
  }
}, Hm = /* @__PURE__ */ (function(a) {
  Ib(r, a);
  function r(o, c) {
    var f;
    f = a.call(this, o, c) || this;
    var d = f.handleExited.bind(D5(f));
    return f.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: d,
      firstRender: !0
    }, f;
  }
  var i = r.prototype;
  return i.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, i.componentWillUnmount = function() {
    this.mounted = !1;
  }, r.getDerivedStateFromProps = function(c, f) {
    var d = f.children, h = f.handleExited, p = f.firstRender;
    return {
      children: p ? U5(c, h) : j5(c, d, h),
      firstRender: !1
    };
  }, i.handleExited = function(c, f) {
    var d = jm(this.props.children);
    c.key in d || (c.props.onExited && c.props.onExited(f), this.mounted && this.setState(function(h) {
      var p = cs({}, h.children);
      return delete p[c.key], {
        children: p
      };
    }));
  }, i.render = function() {
    var c = this.props, f = c.component, d = c.childFactory, h = Zb(c, ["component", "childFactory"]), p = this.state.contextValue, y = H5(this.state.children).map(d);
    return delete h.appear, delete h.enter, delete h.exit, f === null ? /* @__PURE__ */ he.createElement(ms.Provider, {
      value: p
    }, y) : /* @__PURE__ */ he.createElement(ms.Provider, {
      value: p
    }, /* @__PURE__ */ he.createElement(f, h, y));
  }, r;
})(he.Component);
Hm.propTypes = {};
Hm.defaultProps = L5;
const Pb = (a) => a.scrollTop;
function hs(a, r) {
  const {
    timeout: i,
    easing: o,
    style: c = {}
  } = a;
  return {
    duration: c.transitionDuration ?? (typeof i == "number" ? i : i[r.mode] || 0),
    easing: c.transitionTimingFunction ?? (typeof o == "object" ? o[r.mode] : o),
    delay: c.transitionDelay
  };
}
function k5(a) {
  return fn("MuiPaper", a);
}
Zt("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const $5 = (a) => {
  const {
    square: r,
    elevation: i,
    variant: o,
    classes: c
  } = a, f = {
    root: ["root", o, !r && "rounded", o === "elevation" && `elevation${i}`]
  };
  return An(f, k5, c);
}, Y5 = Ze("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, r[i.variant], !i.square && r.rounded, i.variant === "elevation" && r[`elevation${i.elevation}`]];
  }
})(Lt(({
  theme: a
}) => ({
  backgroundColor: (a.vars || a).palette.background.paper,
  color: (a.vars || a).palette.text.primary,
  transition: a.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState: r
    }) => !r.square,
    style: {
      borderRadius: a.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(a.vars || a).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
}))), q5 = /* @__PURE__ */ E.forwardRef(function(r, i) {
  var w;
  const o = dn({
    props: r,
    name: "MuiPaper"
  }), c = bo(), {
    className: f,
    component: d = "div",
    elevation: h = 1,
    square: p = !1,
    variant: y = "elevation",
    ...v
  } = o, g = {
    ...o,
    component: d,
    elevation: h,
    square: p,
    variant: y
  }, x = $5(g);
  return /* @__PURE__ */ k.jsx(Y5, {
    as: d,
    ownerState: g,
    className: je(x.root, f),
    ref: i,
    ...v,
    style: {
      ...y === "elevation" && {
        "--Paper-shadow": (c.vars || c).shadows[h],
        ...c.vars && {
          "--Paper-overlay": (w = c.vars.overlays) == null ? void 0 : w[h]
        },
        ...!c.vars && c.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Wn("#fff", Id(h))}, ${Wn("#fff", Id(h))})`
        }
      },
      ...v.style
    }
  });
});
function ea(a, r) {
  const {
    className: i,
    elementType: o,
    ownerState: c,
    externalForwardedProps: f,
    internalForwardedProps: d,
    shouldForwardComponentProp: h = !1,
    ...p
  } = r, {
    component: y,
    slots: v = {
      [a]: void 0
    },
    slotProps: g = {
      [a]: void 0
    },
    ...x
  } = f, w = v[a] || o, R = xR(g[a], c), {
    props: {
      component: C,
      ...T
    },
    internalRef: M
  } = ER({
    className: i,
    ...p,
    externalForwardedProps: a === "root" ? x : void 0,
    externalSlotProps: R
  }), Y = ol(M, R == null ? void 0 : R.ref, r.ref), U = a === "root" ? C || y : C, j = SR(w, {
    ...a === "root" && !y && !v[a] && d,
    ...a !== "root" && !v[a] && d,
    ...T,
    ...U && !h && {
      as: U
    },
    ...U && h && {
      component: U
    },
    ref: Y
  }, c);
  return [w, j];
}
class ps {
  constructor() {
    _r(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new ps();
  }
  static use() {
    const r = Db(ps.create).current, [i, o] = E.useState(!1);
    return r.shouldMount = i, r.setShouldMount = o, E.useEffect(r.mountEffect, [i]), r;
  }
  mount() {
    return this.mounted || (this.mounted = G5(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...r) {
    this.mount().then(() => {
      var i;
      return (i = this.ref.current) == null ? void 0 : i.start(...r);
    });
  }
  stop(...r) {
    this.mount().then(() => {
      var i;
      return (i = this.ref.current) == null ? void 0 : i.stop(...r);
    });
  }
  pulsate(...r) {
    this.mount().then(() => {
      var i;
      return (i = this.ref.current) == null ? void 0 : i.pulsate(...r);
    });
  }
}
function V5() {
  return ps.use();
}
function G5() {
  let a, r;
  const i = new Promise((o, c) => {
    a = o, r = c;
  });
  return i.resolve = a, i.reject = r, i;
}
function X5(a) {
  const {
    className: r,
    classes: i,
    pulsate: o = !1,
    rippleX: c,
    rippleY: f,
    rippleSize: d,
    in: h,
    onExited: p,
    timeout: y
  } = a, [v, g] = E.useState(!1), x = je(r, i.ripple, i.rippleVisible, o && i.ripplePulsate), w = {
    width: d,
    height: d,
    top: -(d / 2) + f,
    left: -(d / 2) + c
  }, R = je(i.child, v && i.childLeaving, o && i.childPulsate);
  return !h && !v && g(!0), E.useEffect(() => {
    if (!h && p != null) {
      const C = setTimeout(p, y);
      return () => {
        clearTimeout(C);
      };
    }
  }, [p, h, y]), /* @__PURE__ */ k.jsx("span", {
    className: x,
    style: w,
    children: /* @__PURE__ */ k.jsx("span", {
      className: R
    })
  });
}
const Tn = Zt("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Wd = 550, Q5 = 80, K5 = po`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Z5 = po`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, I5 = po`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, P5 = Ze("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), J5 = Ze(X5, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Tn.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${K5};
    animation-duration: ${Wd}ms;
    animation-timing-function: ${({
  theme: a
}) => a.transitions.easing.easeInOut};
  }

  &.${Tn.ripplePulsate} {
    animation-duration: ${({
  theme: a
}) => a.transitions.duration.shorter}ms;
  }

  & .${Tn.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Tn.childLeaving} {
    opacity: 0;
    animation-name: ${Z5};
    animation-duration: ${Wd}ms;
    animation-timing-function: ${({
  theme: a
}) => a.transitions.easing.easeInOut};
  }

  & .${Tn.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${I5};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: a
}) => a.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, F5 = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const o = dn({
    props: r,
    name: "MuiTouchRipple"
  }), {
    center: c = !1,
    classes: f = {},
    className: d,
    ...h
  } = o, [p, y] = E.useState([]), v = E.useRef(0), g = E.useRef(null);
  E.useEffect(() => {
    g.current && (g.current(), g.current = null);
  }, [p]);
  const x = E.useRef(!1), w = yR(), R = E.useRef(null), C = E.useRef(null), T = E.useCallback((j) => {
    const {
      pulsate: _,
      rippleX: X,
      rippleY: q,
      rippleSize: P,
      cb: J
    } = j;
    y((S) => [...S, /* @__PURE__ */ k.jsx(J5, {
      classes: {
        ripple: je(f.ripple, Tn.ripple),
        rippleVisible: je(f.rippleVisible, Tn.rippleVisible),
        ripplePulsate: je(f.ripplePulsate, Tn.ripplePulsate),
        child: je(f.child, Tn.child),
        childLeaving: je(f.childLeaving, Tn.childLeaving),
        childPulsate: je(f.childPulsate, Tn.childPulsate)
      },
      timeout: Wd,
      pulsate: _,
      rippleX: X,
      rippleY: q,
      rippleSize: P
    }, v.current)]), v.current += 1, g.current = J;
  }, [f]), M = E.useCallback((j = {}, _ = {}, X = () => {
  }) => {
    const {
      pulsate: q = !1,
      center: P = c || _.pulsate,
      fakeElement: J = !1
      // For test purposes
    } = _;
    if ((j == null ? void 0 : j.type) === "mousedown" && x.current) {
      x.current = !1;
      return;
    }
    (j == null ? void 0 : j.type) === "touchstart" && (x.current = !0);
    const S = J ? null : C.current, G = S ? S.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let ee, ae, oe;
    if (P || j === void 0 || j.clientX === 0 && j.clientY === 0 || !j.clientX && !j.touches)
      ee = Math.round(G.width / 2), ae = Math.round(G.height / 2);
    else {
      const {
        clientX: te,
        clientY: V
      } = j.touches && j.touches.length > 0 ? j.touches[0] : j;
      ee = Math.round(te - G.left), ae = Math.round(V - G.top);
    }
    if (P)
      oe = Math.sqrt((2 * G.width ** 2 + G.height ** 2) / 3), oe % 2 === 0 && (oe += 1);
    else {
      const te = Math.max(Math.abs((S ? S.clientWidth : 0) - ee), ee) * 2 + 2, V = Math.max(Math.abs((S ? S.clientHeight : 0) - ae), ae) * 2 + 2;
      oe = Math.sqrt(te ** 2 + V ** 2);
    }
    j != null && j.touches ? R.current === null && (R.current = () => {
      T({
        pulsate: q,
        rippleX: ee,
        rippleY: ae,
        rippleSize: oe,
        cb: X
      });
    }, w.start(Q5, () => {
      R.current && (R.current(), R.current = null);
    })) : T({
      pulsate: q,
      rippleX: ee,
      rippleY: ae,
      rippleSize: oe,
      cb: X
    });
  }, [c, T, w]), Y = E.useCallback(() => {
    M({}, {
      pulsate: !0
    });
  }, [M]), U = E.useCallback((j, _) => {
    if (w.clear(), (j == null ? void 0 : j.type) === "touchend" && R.current) {
      R.current(), R.current = null, w.start(0, () => {
        U(j, _);
      });
      return;
    }
    R.current = null, y((X) => X.length > 0 ? X.slice(1) : X), g.current = _;
  }, [w]);
  return E.useImperativeHandle(i, () => ({
    pulsate: Y,
    start: M,
    stop: U
  }), [Y, M, U]), /* @__PURE__ */ k.jsx(P5, {
    className: je(Tn.root, f.root, d),
    ref: C,
    ...h,
    children: /* @__PURE__ */ k.jsx(Hm, {
      component: null,
      exit: !0,
      children: p
    })
  });
});
function W5(a) {
  return fn("MuiButtonBase", a);
}
const e3 = Zt("MuiButtonBase", ["root", "disabled", "focusVisible"]), t3 = (a) => {
  const {
    disabled: r,
    focusVisible: i,
    focusVisibleClassName: o,
    classes: c
  } = a, d = An({
    root: ["root", r && "disabled", i && "focusVisible"]
  }, W5, c);
  return i && o && (d.root += ` ${o}`), d;
}, n3 = Ze("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (a, r) => r.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${e3.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Lm = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const o = dn({
    props: r,
    name: "MuiButtonBase"
  }), {
    action: c,
    centerRipple: f = !1,
    children: d,
    className: h,
    component: p = "button",
    disabled: y = !1,
    disableRipple: v = !1,
    disableTouchRipple: g = !1,
    focusRipple: x = !1,
    focusVisibleClassName: w,
    LinkComponent: R = "a",
    onBlur: C,
    onClick: T,
    onContextMenu: M,
    onDragLeave: Y,
    onFocus: U,
    onFocusVisible: j,
    onKeyDown: _,
    onKeyUp: X,
    onMouseDown: q,
    onMouseLeave: P,
    onMouseUp: J,
    onTouchEnd: S,
    onTouchMove: G,
    onTouchStart: ee,
    tabIndex: ae = 0,
    TouchRippleProps: oe,
    touchRippleRef: te,
    type: V,
    ...ne
  } = o, W = E.useRef(null), Q = V5(), le = ol(Q.ref, te), [Se, He] = E.useState(!1);
  y && Se && He(!1), E.useImperativeHandle(c, () => ({
    focusVisible: () => {
      He(!0), W.current.focus();
    }
  }), []);
  const et = Q.shouldMount && !v && !y;
  E.useEffect(() => {
    Se && x && !v && Q.pulsate();
  }, [v, x, Se, Q]);
  const A = Ta(Q, "start", q, g), F = Ta(Q, "stop", M, g), se = Ta(Q, "stop", Y, g), fe = Ta(Q, "stop", J, g), Ce = Ta(Q, "stop", (ye) => {
    Se && ye.preventDefault(), P && P(ye);
  }, g), Re = Ta(Q, "start", ee, g), Oe = Ta(Q, "stop", S, g), ie = Ta(Q, "stop", G, g), me = Ta(Q, "stop", (ye) => {
    J0(ye.target) || He(!1), C && C(ye);
  }, !1), kt = Vr((ye) => {
    W.current || (W.current = ye.currentTarget), J0(ye.target) && (He(!0), j && j(ye)), U && U(ye);
  }), jn = () => {
    const ye = W.current;
    return p && p !== "button" && !(ye.tagName === "A" && ye.href);
  }, Hn = Vr((ye) => {
    x && !ye.repeat && Se && ye.key === " " && Q.stop(ye, () => {
      Q.start(ye);
    }), ye.target === ye.currentTarget && jn() && ye.key === " " && ye.preventDefault(), _ && _(ye), ye.target === ye.currentTarget && jn() && ye.key === "Enter" && !y && (ye.preventDefault(), T && T(ye));
  }), Dt = Vr((ye) => {
    x && ye.key === " " && Se && !ye.defaultPrevented && Q.stop(ye, () => {
      Q.pulsate(ye);
    }), X && X(ye), T && ye.target === ye.currentTarget && jn() && ye.key === " " && !ye.defaultPrevented && T(ye);
  });
  let Ie = p;
  Ie === "button" && (ne.href || ne.to) && (Ie = R);
  const be = {};
  Ie === "button" ? (be.type = V === void 0 ? "button" : V, be.disabled = y) : (!ne.href && !ne.to && (be.role = "button"), y && (be["aria-disabled"] = y));
  const gt = ol(i, W), $t = {
    ...o,
    centerRipple: f,
    component: p,
    disabled: y,
    disableRipple: v,
    disableTouchRipple: g,
    focusRipple: x,
    tabIndex: ae,
    focusVisible: Se
  }, mn = t3($t);
  return /* @__PURE__ */ k.jsxs(n3, {
    as: Ie,
    className: je(mn.root, h),
    ownerState: $t,
    onBlur: me,
    onClick: T,
    onContextMenu: F,
    onFocus: kt,
    onKeyDown: Hn,
    onKeyUp: Dt,
    onMouseDown: A,
    onMouseLeave: Ce,
    onMouseUp: fe,
    onDragLeave: se,
    onTouchEnd: Oe,
    onTouchMove: ie,
    onTouchStart: Re,
    ref: gt,
    tabIndex: y ? -1 : ae,
    type: V,
    ...be,
    ...ne,
    children: [d, et ? /* @__PURE__ */ k.jsx(F5, {
      ref: le,
      center: f,
      ...oe
    }) : null]
  });
});
function Ta(a, r, i, o = !1) {
  return Vr((c) => (i && i(c), o || a[r](c), !0));
}
function a3(a) {
  return typeof a.main == "string";
}
function l3(a, r = []) {
  if (!a3(a))
    return !1;
  for (const i of r)
    if (!a.hasOwnProperty(i) || typeof a[i] != "string")
      return !1;
  return !0;
}
function $l(a = []) {
  return ([, r]) => r && l3(r, a);
}
function r3(a) {
  return fn("MuiCircularProgress", a);
}
Zt("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const tl = 44, em = po`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, tm = po`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, i3 = typeof em != "string" ? bm`
        animation: ${em} 1.4s linear infinite;
      ` : null, o3 = typeof tm != "string" ? bm`
        animation: ${tm} 1.4s ease-in-out infinite;
      ` : null, u3 = (a) => {
  const {
    classes: r,
    variant: i,
    color: o,
    disableShrink: c
  } = a, f = {
    root: ["root", i, `color${ge(o)}`],
    svg: ["svg"],
    circle: ["circle", `circle${ge(i)}`, c && "circleDisableShrink"]
  };
  return An(f, r3, r);
}, s3 = Ze("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, r[i.variant], r[`color${ge(i.color)}`]];
  }
})(Lt(({
  theme: a
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: a.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: i3 || {
      animation: `${em} 1.4s linear infinite`
    }
  }, ...Object.entries(a.palette).filter($l()).map(([r]) => ({
    props: {
      color: r
    },
    style: {
      color: (a.vars || a).palette[r].main
    }
  }))]
}))), c3 = Ze("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (a, r) => r.svg
})({
  display: "block"
  // Keeps the progress centered
}), f3 = Ze("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.circle, r[`circle${ge(i.variant)}`], i.disableShrink && r.circleDisableShrink];
  }
})(Lt(({
  theme: a
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: a.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState: r
    }) => r.variant === "indeterminate" && !r.disableShrink,
    style: o3 || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${tm} 1.4s ease-in-out infinite`
    }
  }]
}))), Jb = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const o = dn({
    props: r,
    name: "MuiCircularProgress"
  }), {
    className: c,
    color: f = "primary",
    disableShrink: d = !1,
    size: h = 40,
    style: p,
    thickness: y = 3.6,
    value: v = 0,
    variant: g = "indeterminate",
    ...x
  } = o, w = {
    ...o,
    color: f,
    disableShrink: d,
    size: h,
    thickness: y,
    value: v,
    variant: g
  }, R = u3(w), C = {}, T = {}, M = {};
  if (g === "determinate") {
    const Y = 2 * Math.PI * ((tl - y) / 2);
    C.strokeDasharray = Y.toFixed(3), M["aria-valuenow"] = Math.round(v), C.strokeDashoffset = `${((100 - v) / 100 * Y).toFixed(3)}px`, T.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ k.jsx(s3, {
    className: je(R.root, c),
    style: {
      width: h,
      height: h,
      ...T,
      ...p
    },
    ownerState: w,
    ref: i,
    role: "progressbar",
    ...M,
    ...x,
    children: /* @__PURE__ */ k.jsx(c3, {
      className: R.svg,
      ownerState: w,
      viewBox: `${tl / 2} ${tl / 2} ${tl} ${tl}`,
      children: /* @__PURE__ */ k.jsx(f3, {
        className: R.circle,
        style: C,
        ownerState: w,
        cx: tl,
        cy: tl,
        r: (tl - y) / 2,
        fill: "none",
        strokeWidth: y
      })
    })
  });
});
function d3(a) {
  return fn("MuiIconButton", a);
}
const dv = Zt("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), m3 = (a) => {
  const {
    classes: r,
    disabled: i,
    color: o,
    edge: c,
    size: f,
    loading: d
  } = a, h = {
    root: ["root", d && "loading", i && "disabled", o !== "default" && `color${ge(o)}`, c && `edge${ge(c)}`, `size${ge(f)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return An(h, d3, r);
}, h3 = Ze(Lm, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, i.loading && r.loading, i.color !== "default" && r[`color${ge(i.color)}`], i.edge && r[`edge${ge(i.edge)}`], r[`size${ge(i.size)}`]];
  }
})(Lt(({
  theme: a
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: a.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (a.vars || a).palette.action.active,
  transition: a.transitions.create("background-color", {
    duration: a.transitions.duration.shortest
  }),
  variants: [{
    props: (r) => !r.disableRipple,
    style: {
      "--IconButton-hoverBg": a.vars ? `rgba(${a.vars.palette.action.activeChannel} / ${a.vars.palette.action.hoverOpacity})` : Wn(a.palette.action.active, a.palette.action.hoverOpacity),
      "&:hover": {
        backgroundColor: "var(--IconButton-hoverBg)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), Lt(({
  theme: a
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(a.palette).filter($l()).map(([r]) => ({
    props: {
      color: r
    },
    style: {
      color: (a.vars || a).palette[r].main
    }
  })), ...Object.entries(a.palette).filter($l()).map(([r]) => ({
    props: {
      color: r
    },
    style: {
      "--IconButton-hoverBg": a.vars ? `rgba(${(a.vars || a).palette[r].mainChannel} / ${a.vars.palette.action.hoverOpacity})` : Wn((a.vars || a).palette[r].main, a.palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: a.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: a.typography.pxToRem(28)
    }
  }],
  [`&.${dv.disabled}`]: {
    backgroundColor: "transparent",
    color: (a.vars || a).palette.action.disabled
  },
  [`&.${dv.loading}`]: {
    color: "transparent"
  }
}))), p3 = Ze("span", {
  name: "MuiIconButton",
  slot: "LoadingIndicator",
  overridesResolver: (a, r) => r.loadingIndicator
})(({
  theme: a
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: (a.vars || a).palette.action.disabled,
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }]
})), g3 = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const o = dn({
    props: r,
    name: "MuiIconButton"
  }), {
    edge: c = !1,
    children: f,
    className: d,
    color: h = "default",
    disabled: p = !1,
    disableFocusRipple: y = !1,
    size: v = "medium",
    id: g,
    loading: x = null,
    loadingIndicator: w,
    ...R
  } = o, C = Mm(g), T = w ?? /* @__PURE__ */ k.jsx(Jb, {
    "aria-labelledby": C,
    color: "inherit",
    size: 16
  }), M = {
    ...o,
    edge: c,
    color: h,
    disabled: p,
    disableFocusRipple: y,
    loading: x,
    loadingIndicator: T,
    size: v
  }, Y = m3(M);
  return /* @__PURE__ */ k.jsxs(h3, {
    id: x ? C : g,
    className: je(Y.root, d),
    centerRipple: !0,
    focusRipple: !y,
    disabled: p || x,
    ref: i,
    ...R,
    ownerState: M,
    children: [typeof x == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ k.jsx("span", {
      className: Y.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ k.jsx(p3, {
        className: Y.loadingIndicator,
        ownerState: M,
        children: x && T
      })
    }), f]
  });
});
function y3(a) {
  return fn("MuiTypography", a);
}
Zt("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const v3 = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, b3 = w5(), S3 = (a) => {
  const {
    align: r,
    gutterBottom: i,
    noWrap: o,
    paragraph: c,
    variant: f,
    classes: d
  } = a, h = {
    root: ["root", f, a.align !== "inherit" && `align${ge(r)}`, i && "gutterBottom", o && "noWrap", c && "paragraph"]
  };
  return An(h, y3, d);
}, E3 = Ze("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, i.variant && r[i.variant], i.align !== "inherit" && r[`align${ge(i.align)}`], i.noWrap && r.noWrap, i.gutterBottom && r.gutterBottom, i.paragraph && r.paragraph];
  }
})(Lt(({
  theme: a
}) => {
  var r;
  return {
    margin: 0,
    variants: [{
      props: {
        variant: "inherit"
      },
      style: {
        // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
        font: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    }, ...Object.entries(a.typography).filter(([i, o]) => i !== "inherit" && o && typeof o == "object").map(([i, o]) => ({
      props: {
        variant: i
      },
      style: o
    })), ...Object.entries(a.palette).filter($l()).map(([i]) => ({
      props: {
        color: i
      },
      style: {
        color: (a.vars || a).palette[i].main
      }
    })), ...Object.entries(((r = a.palette) == null ? void 0 : r.text) || {}).filter(([, i]) => typeof i == "string").map(([i]) => ({
      props: {
        color: `text${ge(i)}`
      },
      style: {
        color: (a.vars || a).palette.text[i]
      }
    })), {
      props: ({
        ownerState: i
      }) => i.align !== "inherit",
      style: {
        textAlign: "var(--Typography-textAlign)"
      }
    }, {
      props: ({
        ownerState: i
      }) => i.noWrap,
      style: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, {
      props: ({
        ownerState: i
      }) => i.gutterBottom,
      style: {
        marginBottom: "0.35em"
      }
    }, {
      props: ({
        ownerState: i
      }) => i.paragraph,
      style: {
        marginBottom: 16
      }
    }]
  };
})), mv = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, x3 = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const {
    color: o,
    ...c
  } = dn({
    props: r,
    name: "MuiTypography"
  }), f = !v3[o], d = b3({
    ...c,
    ...f && {
      color: o
    }
  }), {
    align: h = "inherit",
    className: p,
    component: y,
    gutterBottom: v = !1,
    noWrap: g = !1,
    paragraph: x = !1,
    variant: w = "body1",
    variantMapping: R = mv,
    ...C
  } = d, T = {
    ...d,
    align: h,
    color: o,
    className: p,
    component: y,
    gutterBottom: v,
    noWrap: g,
    paragraph: x,
    variant: w,
    variantMapping: R
  }, M = y || (x ? "p" : R[w] || mv[w]) || "span", Y = S3(T);
  return /* @__PURE__ */ k.jsx(E3, {
    as: M,
    ref: i,
    className: je(Y.root, p),
    ...C,
    ownerState: T,
    style: {
      ...h !== "inherit" && {
        "--Typography-textAlign": h
      },
      ...C.style
    }
  });
});
function C3(a) {
  return typeof a == "function" ? a() : a;
}
const T3 = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const {
    children: o,
    container: c,
    disablePortal: f = !1
  } = r, [d, h] = E.useState(null), p = ol(/* @__PURE__ */ E.isValidElement(o) ? _s(o) : null, i);
  if (Kr(() => {
    f || h(C3(c) || document.body);
  }, [c, f]), Kr(() => {
    if (d && !f)
      return K0(i, d), () => {
        K0(i, null);
      };
  }, [i, d, f]), f) {
    if (/* @__PURE__ */ E.isValidElement(o)) {
      const y = {
        ref: p
      };
      return /* @__PURE__ */ E.cloneElement(o, y);
    }
    return o;
  }
  return d && /* @__PURE__ */ ab.createPortal(o, d);
}), R3 = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, O3 = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const o = bo(), c = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    addEndListener: f,
    appear: d = !0,
    children: h,
    easing: p,
    in: y,
    onEnter: v,
    onEntered: g,
    onEntering: x,
    onExit: w,
    onExited: R,
    onExiting: C,
    style: T,
    timeout: M = c,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: Y = ra,
    ...U
  } = r, j = E.useRef(null), _ = ol(j, _s(h), i), X = (oe) => (te) => {
    if (oe) {
      const V = j.current;
      te === void 0 ? oe(V) : oe(V, te);
    }
  }, q = X(x), P = X((oe, te) => {
    Pb(oe);
    const V = hs({
      style: T,
      timeout: M,
      easing: p
    }, {
      mode: "enter"
    });
    oe.style.webkitTransition = o.transitions.create("opacity", V), oe.style.transition = o.transitions.create("opacity", V), v && v(oe, te);
  }), J = X(g), S = X(C), G = X((oe) => {
    const te = hs({
      style: T,
      timeout: M,
      easing: p
    }, {
      mode: "exit"
    });
    oe.style.webkitTransition = o.transitions.create("opacity", te), oe.style.transition = o.transitions.create("opacity", te), w && w(oe);
  }), ee = X(R), ae = (oe) => {
    f && f(j.current, oe);
  };
  return /* @__PURE__ */ k.jsx(Y, {
    appear: d,
    in: y,
    nodeRef: j,
    onEnter: P,
    onEntered: J,
    onEntering: q,
    onExit: G,
    onExited: ee,
    onExiting: S,
    addEndListener: ae,
    timeout: M,
    ...U,
    children: (oe, {
      ownerState: te,
      ...V
    }) => /* @__PURE__ */ E.cloneElement(h, {
      style: {
        opacity: 0,
        visibility: oe === "exited" && !y ? "hidden" : void 0,
        ...R3[oe],
        ...T,
        ...h.props.style
      },
      ref: _,
      ...V
    })
  });
});
function w3(a) {
  return fn("MuiBackdrop", a);
}
Zt("MuiBackdrop", ["root", "invisible"]);
const A3 = (a) => {
  const {
    classes: r,
    invisible: i
  } = a;
  return An({
    root: ["root", i && "invisible"]
  }, w3, r);
}, z3 = Ze("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, i.invisible && r.invisible];
  }
})({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent",
  variants: [{
    props: {
      invisible: !0
    },
    style: {
      backgroundColor: "transparent"
    }
  }]
}), M3 = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const o = dn({
    props: r,
    name: "MuiBackdrop"
  }), {
    children: c,
    className: f,
    component: d = "div",
    invisible: h = !1,
    open: p,
    components: y = {},
    componentsProps: v = {},
    slotProps: g = {},
    slots: x = {},
    TransitionComponent: w,
    transitionDuration: R,
    ...C
  } = o, T = {
    ...o,
    component: d,
    invisible: h
  }, M = A3(T), Y = {
    transition: w,
    root: y.Root,
    ...x
  }, U = {
    ...v,
    ...g
  }, j = {
    slots: Y,
    slotProps: U
  }, [_, X] = ea("root", {
    elementType: z3,
    externalForwardedProps: j,
    className: je(M.root, f),
    ownerState: T
  }), [q, P] = ea("transition", {
    elementType: O3,
    externalForwardedProps: j,
    ownerState: T
  });
  return /* @__PURE__ */ k.jsx(q, {
    in: p,
    timeout: R,
    ...C,
    ...P,
    children: /* @__PURE__ */ k.jsx(_, {
      "aria-hidden": !0,
      ...X,
      classes: M,
      ref: i,
      children: c
    })
  });
});
function N3(a) {
  const {
    badgeContent: r,
    invisible: i = !1,
    max: o = 99,
    showZero: c = !1
  } = a, f = Bb({
    badgeContent: r,
    max: o
  });
  let d = i;
  i === !1 && r === 0 && !c && (d = !0);
  const {
    badgeContent: h,
    max: p = o
  } = d ? f : a, y = h && Number(h) > p ? `${p}+` : h;
  return {
    badgeContent: h,
    invisible: d,
    max: p,
    displayValue: y
  };
}
function _3(a) {
  return fn("MuiBadge", a);
}
const nl = Zt("MuiBadge", [
  "root",
  "badge",
  "dot",
  "standard",
  "anchorOriginTopRight",
  "anchorOriginBottomRight",
  "anchorOriginTopLeft",
  "anchorOriginBottomLeft",
  "invisible",
  "colorError",
  "colorInfo",
  "colorPrimary",
  "colorSecondary",
  "colorSuccess",
  "colorWarning",
  "overlapRectangular",
  "overlapCircular",
  // TODO: v6 remove the overlap value from these class keys
  "anchorOriginTopLeftCircular",
  "anchorOriginTopLeftRectangular",
  "anchorOriginTopRightCircular",
  "anchorOriginTopRightRectangular",
  "anchorOriginBottomLeftCircular",
  "anchorOriginBottomLeftRectangular",
  "anchorOriginBottomRightCircular",
  "anchorOriginBottomRightRectangular"
]), Nd = 10, _d = 4, D3 = (a) => {
  const {
    color: r,
    anchorOrigin: i,
    invisible: o,
    overlap: c,
    variant: f,
    classes: d = {}
  } = a, h = {
    root: ["root"],
    badge: ["badge", f, o && "invisible", `anchorOrigin${ge(i.vertical)}${ge(i.horizontal)}`, `anchorOrigin${ge(i.vertical)}${ge(i.horizontal)}${ge(c)}`, `overlap${ge(c)}`, r !== "default" && `color${ge(r)}`]
  };
  return An(h, _3, d);
}, B3 = Ze("span", {
  name: "MuiBadge",
  slot: "Root",
  overridesResolver: (a, r) => r.root
})({
  position: "relative",
  display: "inline-flex",
  // For correct alignment with the text.
  verticalAlign: "middle",
  flexShrink: 0
}), U3 = Ze("span", {
  name: "MuiBadge",
  slot: "Badge",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.badge, r[i.variant], r[`anchorOrigin${ge(i.anchorOrigin.vertical)}${ge(i.anchorOrigin.horizontal)}${ge(i.overlap)}`], i.color !== "default" && r[`color${ge(i.color)}`], i.invisible && r.invisible];
  }
})(Lt(({
  theme: a
}) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  position: "absolute",
  boxSizing: "border-box",
  fontFamily: a.typography.fontFamily,
  fontWeight: a.typography.fontWeightMedium,
  fontSize: a.typography.pxToRem(12),
  minWidth: Nd * 2,
  lineHeight: 1,
  padding: "0 6px",
  height: Nd * 2,
  borderRadius: Nd,
  zIndex: 1,
  // Render the badge on top of potential ripples.
  transition: a.transitions.create("transform", {
    easing: a.transitions.easing.easeInOut,
    duration: a.transitions.duration.enteringScreen
  }),
  variants: [...Object.entries(a.palette).filter($l(["contrastText"])).map(([r]) => ({
    props: {
      color: r
    },
    style: {
      backgroundColor: (a.vars || a).palette[r].main,
      color: (a.vars || a).palette[r].contrastText
    }
  })), {
    props: {
      variant: "dot"
    },
    style: {
      borderRadius: _d,
      height: _d * 2,
      minWidth: _d * 2,
      padding: 0
    }
  }, {
    props: ({
      ownerState: r
    }) => r.anchorOrigin.vertical === "top" && r.anchorOrigin.horizontal === "right" && r.overlap === "rectangular",
    style: {
      top: 0,
      right: 0,
      transform: "scale(1) translate(50%, -50%)",
      transformOrigin: "100% 0%",
      [`&.${nl.invisible}`]: {
        transform: "scale(0) translate(50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState: r
    }) => r.anchorOrigin.vertical === "bottom" && r.anchorOrigin.horizontal === "right" && r.overlap === "rectangular",
    style: {
      bottom: 0,
      right: 0,
      transform: "scale(1) translate(50%, 50%)",
      transformOrigin: "100% 100%",
      [`&.${nl.invisible}`]: {
        transform: "scale(0) translate(50%, 50%)"
      }
    }
  }, {
    props: ({
      ownerState: r
    }) => r.anchorOrigin.vertical === "top" && r.anchorOrigin.horizontal === "left" && r.overlap === "rectangular",
    style: {
      top: 0,
      left: 0,
      transform: "scale(1) translate(-50%, -50%)",
      transformOrigin: "0% 0%",
      [`&.${nl.invisible}`]: {
        transform: "scale(0) translate(-50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState: r
    }) => r.anchorOrigin.vertical === "bottom" && r.anchorOrigin.horizontal === "left" && r.overlap === "rectangular",
    style: {
      bottom: 0,
      left: 0,
      transform: "scale(1) translate(-50%, 50%)",
      transformOrigin: "0% 100%",
      [`&.${nl.invisible}`]: {
        transform: "scale(0) translate(-50%, 50%)"
      }
    }
  }, {
    props: ({
      ownerState: r
    }) => r.anchorOrigin.vertical === "top" && r.anchorOrigin.horizontal === "right" && r.overlap === "circular",
    style: {
      top: "14%",
      right: "14%",
      transform: "scale(1) translate(50%, -50%)",
      transformOrigin: "100% 0%",
      [`&.${nl.invisible}`]: {
        transform: "scale(0) translate(50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState: r
    }) => r.anchorOrigin.vertical === "bottom" && r.anchorOrigin.horizontal === "right" && r.overlap === "circular",
    style: {
      bottom: "14%",
      right: "14%",
      transform: "scale(1) translate(50%, 50%)",
      transformOrigin: "100% 100%",
      [`&.${nl.invisible}`]: {
        transform: "scale(0) translate(50%, 50%)"
      }
    }
  }, {
    props: ({
      ownerState: r
    }) => r.anchorOrigin.vertical === "top" && r.anchorOrigin.horizontal === "left" && r.overlap === "circular",
    style: {
      top: "14%",
      left: "14%",
      transform: "scale(1) translate(-50%, -50%)",
      transformOrigin: "0% 0%",
      [`&.${nl.invisible}`]: {
        transform: "scale(0) translate(-50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState: r
    }) => r.anchorOrigin.vertical === "bottom" && r.anchorOrigin.horizontal === "left" && r.overlap === "circular",
    style: {
      bottom: "14%",
      left: "14%",
      transform: "scale(1) translate(-50%, 50%)",
      transformOrigin: "0% 100%",
      [`&.${nl.invisible}`]: {
        transform: "scale(0) translate(-50%, 50%)"
      }
    }
  }, {
    props: {
      invisible: !0
    },
    style: {
      transition: a.transitions.create("transform", {
        easing: a.transitions.easing.easeInOut,
        duration: a.transitions.duration.leavingScreen
      })
    }
  }]
})));
function hv(a) {
  return {
    vertical: (a == null ? void 0 : a.vertical) ?? "top",
    horizontal: (a == null ? void 0 : a.horizontal) ?? "right"
  };
}
const j3 = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const o = dn({
    props: r,
    name: "MuiBadge"
  }), {
    anchorOrigin: c,
    className: f,
    classes: d,
    component: h,
    components: p = {},
    componentsProps: y = {},
    children: v,
    overlap: g = "rectangular",
    color: x = "default",
    invisible: w = !1,
    max: R = 99,
    badgeContent: C,
    slots: T,
    slotProps: M,
    showZero: Y = !1,
    variant: U = "standard",
    ...j
  } = o, {
    badgeContent: _,
    invisible: X,
    max: q,
    displayValue: P
  } = N3({
    max: R,
    invisible: w,
    badgeContent: C,
    showZero: Y
  }), J = Bb({
    anchorOrigin: hv(c),
    color: x,
    overlap: g,
    variant: U,
    badgeContent: C
  }), S = X || _ == null && U !== "dot", {
    color: G = x,
    overlap: ee = g,
    anchorOrigin: ae,
    variant: oe = U
  } = S ? J : o, te = hv(ae), V = oe !== "dot" ? P : void 0, ne = {
    ...o,
    badgeContent: _,
    invisible: S,
    max: q,
    displayValue: V,
    showZero: Y,
    anchorOrigin: te,
    color: G,
    overlap: ee,
    variant: oe
  }, W = D3(ne), Q = {
    slots: {
      root: (T == null ? void 0 : T.root) ?? p.Root,
      badge: (T == null ? void 0 : T.badge) ?? p.Badge
    },
    slotProps: {
      root: (M == null ? void 0 : M.root) ?? y.root,
      badge: (M == null ? void 0 : M.badge) ?? y.badge
    }
  }, [le, Se] = ea("root", {
    elementType: B3,
    externalForwardedProps: {
      ...Q,
      ...j
    },
    ownerState: ne,
    className: je(W.root, f),
    ref: i,
    additionalProps: {
      as: h
    }
  }), [He, et] = ea("badge", {
    elementType: U3,
    externalForwardedProps: Q,
    ownerState: ne,
    className: W.badge
  });
  return /* @__PURE__ */ k.jsxs(le, {
    ...Se,
    children: [v, /* @__PURE__ */ k.jsx(He, {
      ...et,
      children: V
    })]
  });
}), H3 = Zt("MuiBox", ["root"]), L3 = oo(), pv = KT({
  themeId: ta,
  defaultTheme: L3,
  defaultClassName: H3.root,
  generateClassName: Ob.generate
});
function k3(a) {
  return fn("MuiButton", a);
}
const Dl = Zt("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), $3 = /* @__PURE__ */ E.createContext({}), Y3 = /* @__PURE__ */ E.createContext(void 0), q3 = (a) => {
  const {
    color: r,
    disableElevation: i,
    fullWidth: o,
    size: c,
    variant: f,
    loading: d,
    loadingPosition: h,
    classes: p
  } = a, y = {
    root: ["root", d && "loading", f, `${f}${ge(r)}`, `size${ge(c)}`, `${f}Size${ge(c)}`, `color${ge(r)}`, i && "disableElevation", o && "fullWidth", d && `loadingPosition${ge(h)}`],
    startIcon: ["icon", "startIcon", `iconSize${ge(c)}`],
    endIcon: ["icon", "endIcon", `iconSize${ge(c)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, v = An(y, k3, p);
  return {
    ...p,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...v
  };
}, Fb = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], V3 = Ze(Lm, {
  shouldForwardProp: (a) => Ds(a) || a === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, r[i.variant], r[`${i.variant}${ge(i.color)}`], r[`size${ge(i.size)}`], r[`${i.variant}Size${ge(i.size)}`], i.color === "inherit" && r.colorInherit, i.disableElevation && r.disableElevation, i.fullWidth && r.fullWidth, i.loading && r.loading];
  }
})(Lt(({
  theme: a
}) => {
  const r = a.palette.mode === "light" ? a.palette.grey[300] : a.palette.grey[800], i = a.palette.mode === "light" ? a.palette.grey.A100 : a.palette.grey[700];
  return {
    ...a.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (a.vars || a).shape.borderRadius,
    transition: a.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: a.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${Dl.disabled}`]: {
      color: (a.vars || a).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (a.vars || a).shadows[2],
        "&:hover": {
          boxShadow: (a.vars || a).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (a.vars || a).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (a.vars || a).shadows[8]
        },
        [`&.${Dl.focusVisible}`]: {
          boxShadow: (a.vars || a).shadows[6]
        },
        [`&.${Dl.disabled}`]: {
          color: (a.vars || a).palette.action.disabled,
          boxShadow: (a.vars || a).shadows[0],
          backgroundColor: (a.vars || a).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${Dl.disabled}`]: {
          border: `1px solid ${(a.vars || a).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(a.palette).filter($l()).map(([o]) => ({
      props: {
        color: o
      },
      style: {
        "--variant-textColor": (a.vars || a).palette[o].main,
        "--variant-outlinedColor": (a.vars || a).palette[o].main,
        "--variant-outlinedBorder": a.vars ? `rgba(${a.vars.palette[o].mainChannel} / 0.5)` : Wn(a.palette[o].main, 0.5),
        "--variant-containedColor": (a.vars || a).palette[o].contrastText,
        "--variant-containedBg": (a.vars || a).palette[o].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (a.vars || a).palette[o].dark,
            "--variant-textBg": a.vars ? `rgba(${a.vars.palette[o].mainChannel} / ${a.vars.palette.action.hoverOpacity})` : Wn(a.palette[o].main, a.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (a.vars || a).palette[o].main,
            "--variant-outlinedBg": a.vars ? `rgba(${a.vars.palette[o].mainChannel} / ${a.vars.palette.action.hoverOpacity})` : Wn(a.palette[o].main, a.palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": a.vars ? a.vars.palette.Button.inheritContainedBg : r,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": a.vars ? a.vars.palette.Button.inheritContainedHoverBg : i,
            "--variant-textBg": a.vars ? `rgba(${a.vars.palette.text.primaryChannel} / ${a.vars.palette.action.hoverOpacity})` : Wn(a.palette.text.primary, a.palette.action.hoverOpacity),
            "--variant-outlinedBg": a.vars ? `rgba(${a.vars.palette.text.primaryChannel} / ${a.vars.palette.action.hoverOpacity})` : Wn(a.palette.text.primary, a.palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: a.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: a.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: a.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: a.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: a.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: a.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${Dl.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Dl.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }, {
      props: {
        loadingPosition: "center"
      },
      style: {
        transition: a.transitions.create(["background-color", "box-shadow", "border-color"], {
          duration: a.transitions.duration.short
        }),
        [`&.${Dl.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), G3 = Ze("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.startIcon, i.loading && r.startIconLoadingStart, r[`iconSize${ge(i.size)}`]];
  }
})(({
  theme: a
}) => ({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0
    },
    style: {
      transition: a.transitions.create(["opacity"], {
        duration: a.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginRight: -8
    }
  }, ...Fb]
})), X3 = Ze("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.endIcon, i.loading && r.endIconLoadingEnd, r[`iconSize${ge(i.size)}`]];
  }
})(({
  theme: a
}) => ({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0
    },
    style: {
      transition: a.transitions.create(["opacity"], {
        duration: a.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginLeft: -8
    }
  }, ...Fb]
})), Q3 = Ze("span", {
  name: "MuiButton",
  slot: "LoadingIndicator",
  overridesResolver: (a, r) => r.loadingIndicator
})(({
  theme: a
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }, {
    props: {
      loadingPosition: "start"
    },
    style: {
      left: 14
    }
  }, {
    props: {
      loadingPosition: "start",
      size: "small"
    },
    style: {
      left: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "start"
    },
    style: {
      left: 6
    }
  }, {
    props: {
      loadingPosition: "center"
    },
    style: {
      left: "50%",
      transform: "translate(-50%)",
      color: (a.vars || a).palette.action.disabled
    }
  }, {
    props: {
      loadingPosition: "end"
    },
    style: {
      right: 14
    }
  }, {
    props: {
      loadingPosition: "end",
      size: "small"
    },
    style: {
      right: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "end"
    },
    style: {
      right: 6
    }
  }, {
    props: {
      loadingPosition: "start",
      fullWidth: !0
    },
    style: {
      position: "relative",
      left: -10
    }
  }, {
    props: {
      loadingPosition: "end",
      fullWidth: !0
    },
    style: {
      position: "relative",
      right: -10
    }
  }]
})), gv = Ze("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder",
  overridesResolver: (a, r) => r.loadingIconPlaceholder
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), Wu = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const o = E.useContext($3), c = E.useContext(Y3), f = io(o, r), d = dn({
    props: f,
    name: "MuiButton"
  }), {
    children: h,
    color: p = "primary",
    component: y = "button",
    className: v,
    disabled: g = !1,
    disableElevation: x = !1,
    disableFocusRipple: w = !1,
    endIcon: R,
    focusVisibleClassName: C,
    fullWidth: T = !1,
    id: M,
    loading: Y = null,
    loadingIndicator: U,
    loadingPosition: j = "center",
    size: _ = "medium",
    startIcon: X,
    type: q,
    variant: P = "text",
    ...J
  } = d, S = Mm(M), G = U ?? /* @__PURE__ */ k.jsx(Jb, {
    "aria-labelledby": S,
    color: "inherit",
    size: 16
  }), ee = {
    ...d,
    color: p,
    component: y,
    disabled: g,
    disableElevation: x,
    disableFocusRipple: w,
    fullWidth: T,
    loading: Y,
    loadingIndicator: G,
    loadingPosition: j,
    size: _,
    type: q,
    variant: P
  }, ae = q3(ee), oe = (X || Y && j === "start") && /* @__PURE__ */ k.jsx(G3, {
    className: ae.startIcon,
    ownerState: ee,
    children: X || /* @__PURE__ */ k.jsx(gv, {
      className: ae.loadingIconPlaceholder,
      ownerState: ee
    })
  }), te = (R || Y && j === "end") && /* @__PURE__ */ k.jsx(X3, {
    className: ae.endIcon,
    ownerState: ee,
    children: R || /* @__PURE__ */ k.jsx(gv, {
      className: ae.loadingIconPlaceholder,
      ownerState: ee
    })
  }), V = c || "", ne = typeof Y == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ k.jsx("span", {
      className: ae.loadingWrapper,
      style: {
        display: "contents"
      },
      children: Y && /* @__PURE__ */ k.jsx(Q3, {
        className: ae.loadingIndicator,
        ownerState: ee,
        children: G
      })
    })
  ) : null;
  return /* @__PURE__ */ k.jsxs(V3, {
    ownerState: ee,
    className: je(o.className, ae.root, v, V),
    component: y,
    disabled: g || Y,
    focusRipple: !w,
    focusVisibleClassName: je(ae.focusVisible, C),
    ref: i,
    type: q,
    id: Y ? S : M,
    ...J,
    classes: ae,
    children: [oe, j !== "end" && ne, h, j === "end" && ne, te]
  });
});
function K3(a) {
  const r = kl(a);
  return r.body === a ? Zr(a).innerWidth > r.documentElement.clientWidth : a.scrollHeight > a.clientHeight;
}
function to(a, r) {
  r ? a.setAttribute("aria-hidden", "true") : a.removeAttribute("aria-hidden");
}
function yv(a) {
  return parseInt(Zr(a).getComputedStyle(a).paddingRight, 10) || 0;
}
function Z3(a) {
  const i = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(a.tagName), o = a.tagName === "INPUT" && a.getAttribute("type") === "hidden";
  return i || o;
}
function vv(a, r, i, o, c) {
  const f = [r, i, ...o];
  [].forEach.call(a.children, (d) => {
    const h = !f.includes(d), p = !Z3(d);
    h && p && to(d, c);
  });
}
function Dd(a, r) {
  let i = -1;
  return a.some((o, c) => r(o) ? (i = c, !0) : !1), i;
}
function I3(a, r) {
  const i = [], o = a.container;
  if (!r.disableScrollLock) {
    if (K3(o)) {
      const d = vR(Zr(o));
      i.push({
        value: o.style.paddingRight,
        property: "padding-right",
        el: o
      }), o.style.paddingRight = `${yv(o) + d}px`;
      const h = kl(o).querySelectorAll(".mui-fixed");
      [].forEach.call(h, (p) => {
        i.push({
          value: p.style.paddingRight,
          property: "padding-right",
          el: p
        }), p.style.paddingRight = `${yv(p) + d}px`;
      });
    }
    let f;
    if (o.parentNode instanceof DocumentFragment)
      f = kl(o).body;
    else {
      const d = o.parentElement, h = Zr(o);
      f = (d == null ? void 0 : d.nodeName) === "HTML" && h.getComputedStyle(d).overflowY === "scroll" ? d : o;
    }
    i.push({
      value: f.style.overflow,
      property: "overflow",
      el: f
    }, {
      value: f.style.overflowX,
      property: "overflow-x",
      el: f
    }, {
      value: f.style.overflowY,
      property: "overflow-y",
      el: f
    }), f.style.overflow = "hidden";
  }
  return () => {
    i.forEach(({
      value: f,
      el: d,
      property: h
    }) => {
      f ? d.style.setProperty(h, f) : d.style.removeProperty(h);
    });
  };
}
function P3(a) {
  const r = [];
  return [].forEach.call(a.children, (i) => {
    i.getAttribute("aria-hidden") === "true" && r.push(i);
  }), r;
}
class J3 {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(r, i) {
    let o = this.modals.indexOf(r);
    if (o !== -1)
      return o;
    o = this.modals.length, this.modals.push(r), r.modalRef && to(r.modalRef, !1);
    const c = P3(i);
    vv(i, r.mount, r.modalRef, c, !0);
    const f = Dd(this.containers, (d) => d.container === i);
    return f !== -1 ? (this.containers[f].modals.push(r), o) : (this.containers.push({
      modals: [r],
      container: i,
      restore: null,
      hiddenSiblings: c
    }), o);
  }
  mount(r, i) {
    const o = Dd(this.containers, (f) => f.modals.includes(r)), c = this.containers[o];
    c.restore || (c.restore = I3(c, i));
  }
  remove(r, i = !0) {
    const o = this.modals.indexOf(r);
    if (o === -1)
      return o;
    const c = Dd(this.containers, (d) => d.modals.includes(r)), f = this.containers[c];
    if (f.modals.splice(f.modals.indexOf(r), 1), this.modals.splice(o, 1), f.modals.length === 0)
      f.restore && f.restore(), r.modalRef && to(r.modalRef, i), vv(f.container, r.mount, r.modalRef, f.hiddenSiblings, !1), this.containers.splice(c, 1);
    else {
      const d = f.modals[f.modals.length - 1];
      d.modalRef && to(d.modalRef, !1);
    }
    return o;
  }
  isTopModal(r) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === r;
  }
}
const F3 = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function W3(a) {
  const r = parseInt(a.getAttribute("tabindex") || "", 10);
  return Number.isNaN(r) ? a.contentEditable === "true" || (a.nodeName === "AUDIO" || a.nodeName === "VIDEO" || a.nodeName === "DETAILS") && a.getAttribute("tabindex") === null ? 0 : a.tabIndex : r;
}
function eO(a) {
  if (a.tagName !== "INPUT" || a.type !== "radio" || !a.name)
    return !1;
  const r = (o) => a.ownerDocument.querySelector(`input[type="radio"]${o}`);
  let i = r(`[name="${a.name}"]:checked`);
  return i || (i = r(`[name="${a.name}"]`)), i !== a;
}
function tO(a) {
  return !(a.disabled || a.tagName === "INPUT" && a.type === "hidden" || eO(a));
}
function nO(a) {
  const r = [], i = [];
  return Array.from(a.querySelectorAll(F3)).forEach((o, c) => {
    const f = W3(o);
    f === -1 || !tO(o) || (f === 0 ? r.push(o) : i.push({
      documentOrder: c,
      tabIndex: f,
      node: o
    }));
  }), i.sort((o, c) => o.tabIndex === c.tabIndex ? o.documentOrder - c.documentOrder : o.tabIndex - c.tabIndex).map((o) => o.node).concat(r);
}
function aO() {
  return !0;
}
function lO(a) {
  const {
    children: r,
    disableAutoFocus: i = !1,
    disableEnforceFocus: o = !1,
    disableRestoreFocus: c = !1,
    getTabbable: f = nO,
    isEnabled: d = aO,
    open: h
  } = a, p = E.useRef(!1), y = E.useRef(null), v = E.useRef(null), g = E.useRef(null), x = E.useRef(null), w = E.useRef(!1), R = E.useRef(null), C = ol(_s(r), R), T = E.useRef(null);
  E.useEffect(() => {
    !h || !R.current || (w.current = !i);
  }, [i, h]), E.useEffect(() => {
    if (!h || !R.current)
      return;
    const U = kl(R.current);
    return R.current.contains(U.activeElement) || (R.current.hasAttribute("tabIndex") || R.current.setAttribute("tabIndex", "-1"), w.current && R.current.focus()), () => {
      c || (g.current && g.current.focus && (p.current = !0, g.current.focus()), g.current = null);
    };
  }, [h]), E.useEffect(() => {
    if (!h || !R.current)
      return;
    const U = kl(R.current), j = (q) => {
      T.current = q, !(o || !d() || q.key !== "Tab") && U.activeElement === R.current && q.shiftKey && (p.current = !0, v.current && v.current.focus());
    }, _ = () => {
      var J, S;
      const q = R.current;
      if (q === null)
        return;
      if (!U.hasFocus() || !d() || p.current) {
        p.current = !1;
        return;
      }
      if (q.contains(U.activeElement) || o && U.activeElement !== y.current && U.activeElement !== v.current)
        return;
      if (U.activeElement !== x.current)
        x.current = null;
      else if (x.current !== null)
        return;
      if (!w.current)
        return;
      let P = [];
      if ((U.activeElement === y.current || U.activeElement === v.current) && (P = f(R.current)), P.length > 0) {
        const G = !!((J = T.current) != null && J.shiftKey && ((S = T.current) == null ? void 0 : S.key) === "Tab"), ee = P[0], ae = P[P.length - 1];
        typeof ee != "string" && typeof ae != "string" && (G ? ae.focus() : ee.focus());
      } else
        q.focus();
    };
    U.addEventListener("focusin", _), U.addEventListener("keydown", j, !0);
    const X = setInterval(() => {
      U.activeElement && U.activeElement.tagName === "BODY" && _();
    }, 50);
    return () => {
      clearInterval(X), U.removeEventListener("focusin", _), U.removeEventListener("keydown", j, !0);
    };
  }, [i, o, c, d, h, f]);
  const M = (U) => {
    g.current === null && (g.current = U.relatedTarget), w.current = !0, x.current = U.target;
    const j = r.props.onFocus;
    j && j(U);
  }, Y = (U) => {
    g.current === null && (g.current = U.relatedTarget), w.current = !0;
  };
  return /* @__PURE__ */ k.jsxs(E.Fragment, {
    children: [/* @__PURE__ */ k.jsx("div", {
      tabIndex: h ? 0 : -1,
      onFocus: Y,
      ref: y,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ E.cloneElement(r, {
      ref: C,
      onFocus: M
    }), /* @__PURE__ */ k.jsx("div", {
      tabIndex: h ? 0 : -1,
      onFocus: Y,
      ref: v,
      "data-testid": "sentinelEnd"
    })]
  });
}
function rO(a) {
  return typeof a == "function" ? a() : a;
}
function iO(a) {
  return a ? a.props.hasOwnProperty("in") : !1;
}
const bv = () => {
}, es = new J3();
function oO(a) {
  const {
    container: r,
    disableEscapeKeyDown: i = !1,
    disableScrollLock: o = !1,
    closeAfterTransition: c = !1,
    onTransitionEnter: f,
    onTransitionExited: d,
    children: h,
    onClose: p,
    open: y,
    rootRef: v
  } = a, g = E.useRef({}), x = E.useRef(null), w = E.useRef(null), R = ol(w, v), [C, T] = E.useState(!y), M = iO(h);
  let Y = !0;
  (a["aria-hidden"] === "false" || a["aria-hidden"] === !1) && (Y = !1);
  const U = () => kl(x.current), j = () => (g.current.modalRef = w.current, g.current.mount = x.current, g.current), _ = () => {
    es.mount(j(), {
      disableScrollLock: o
    }), w.current && (w.current.scrollTop = 0);
  }, X = Vr(() => {
    const te = rO(r) || U().body;
    es.add(j(), te), w.current && _();
  }), q = () => es.isTopModal(j()), P = Vr((te) => {
    x.current = te, te && (y && q() ? _() : w.current && to(w.current, Y));
  }), J = E.useCallback(() => {
    es.remove(j(), Y);
  }, [Y]);
  E.useEffect(() => () => {
    J();
  }, [J]), E.useEffect(() => {
    y ? X() : (!M || !c) && J();
  }, [y, J, M, c, X]);
  const S = (te) => (V) => {
    var ne;
    (ne = te.onKeyDown) == null || ne.call(te, V), !(V.key !== "Escape" || V.which === 229 || // Wait until IME is settled.
    !q()) && (i || (V.stopPropagation(), p && p(V, "escapeKeyDown")));
  }, G = (te) => (V) => {
    var ne;
    (ne = te.onClick) == null || ne.call(te, V), V.target === V.currentTarget && p && p(V, "backdropClick");
  };
  return {
    getRootProps: (te = {}) => {
      const V = Ub(a);
      delete V.onTransitionEnter, delete V.onTransitionExited;
      const ne = {
        ...V,
        ...te
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...ne,
        onKeyDown: S(ne),
        ref: R
      };
    },
    getBackdropProps: (te = {}) => {
      const V = te;
      return {
        "aria-hidden": !0,
        ...V,
        onClick: G(V),
        open: y
      };
    },
    getTransitionProps: () => {
      const te = () => {
        T(!1), f && f();
      }, V = () => {
        T(!0), d && d(), c && J();
      };
      return {
        onEnter: Q0(te, (h == null ? void 0 : h.props.onEnter) ?? bv),
        onExited: Q0(V, (h == null ? void 0 : h.props.onExited) ?? bv)
      };
    },
    rootRef: R,
    portalRef: P,
    isTopModal: q,
    exited: C,
    hasTransition: M
  };
}
function uO(a) {
  return fn("MuiModal", a);
}
Zt("MuiModal", ["root", "hidden", "backdrop"]);
const sO = (a) => {
  const {
    open: r,
    exited: i,
    classes: o
  } = a;
  return An({
    root: ["root", !r && i && "hidden"],
    backdrop: ["backdrop"]
  }, uO, o);
}, cO = Ze("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, !i.open && i.exited && r.hidden];
  }
})(Lt(({
  theme: a
}) => ({
  position: "fixed",
  zIndex: (a.vars || a).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  variants: [{
    props: ({
      ownerState: r
    }) => !r.open && r.exited,
    style: {
      visibility: "hidden"
    }
  }]
}))), fO = Ze(M3, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (a, r) => r.backdrop
})({
  zIndex: -1
}), dO = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const o = dn({
    name: "MuiModal",
    props: r
  }), {
    BackdropComponent: c = fO,
    BackdropProps: f,
    classes: d,
    className: h,
    closeAfterTransition: p = !1,
    children: y,
    container: v,
    component: g,
    components: x = {},
    componentsProps: w = {},
    disableAutoFocus: R = !1,
    disableEnforceFocus: C = !1,
    disableEscapeKeyDown: T = !1,
    disablePortal: M = !1,
    disableRestoreFocus: Y = !1,
    disableScrollLock: U = !1,
    hideBackdrop: j = !1,
    keepMounted: _ = !1,
    onBackdropClick: X,
    onClose: q,
    onTransitionEnter: P,
    onTransitionExited: J,
    open: S,
    slotProps: G = {},
    slots: ee = {},
    // eslint-disable-next-line react/prop-types
    theme: ae,
    ...oe
  } = o, te = {
    ...o,
    closeAfterTransition: p,
    disableAutoFocus: R,
    disableEnforceFocus: C,
    disableEscapeKeyDown: T,
    disablePortal: M,
    disableRestoreFocus: Y,
    disableScrollLock: U,
    hideBackdrop: j,
    keepMounted: _
  }, {
    getRootProps: V,
    getBackdropProps: ne,
    getTransitionProps: W,
    portalRef: Q,
    isTopModal: le,
    exited: Se,
    hasTransition: He
  } = oO({
    ...te,
    rootRef: i
  }), et = {
    ...te,
    exited: Se
  }, A = sO(et), F = {};
  if (y.props.tabIndex === void 0 && (F.tabIndex = "-1"), He) {
    const {
      onEnter: ie,
      onExited: me
    } = W();
    F.onEnter = ie, F.onExited = me;
  }
  const se = {
    slots: {
      root: x.Root,
      backdrop: x.Backdrop,
      ...ee
    },
    slotProps: {
      ...w,
      ...G
    }
  }, [fe, Ce] = ea("root", {
    ref: i,
    elementType: cO,
    externalForwardedProps: {
      ...se,
      ...oe,
      component: g
    },
    getSlotProps: V,
    ownerState: et,
    className: je(h, A == null ? void 0 : A.root, !et.open && et.exited && (A == null ? void 0 : A.hidden))
  }), [Re, Oe] = ea("backdrop", {
    ref: f == null ? void 0 : f.ref,
    elementType: c,
    externalForwardedProps: se,
    shouldForwardComponentProp: !0,
    additionalProps: f,
    getSlotProps: (ie) => ne({
      ...ie,
      onClick: (me) => {
        X && X(me), ie != null && ie.onClick && ie.onClick(me);
      }
    }),
    className: je(f == null ? void 0 : f.className, A == null ? void 0 : A.backdrop),
    ownerState: et
  });
  return !_ && !S && (!He || Se) ? null : /* @__PURE__ */ k.jsx(T3, {
    ref: Q,
    container: v,
    disablePortal: M,
    children: /* @__PURE__ */ k.jsxs(fe, {
      ...Ce,
      children: [!j && c ? /* @__PURE__ */ k.jsx(Re, {
        ...Oe
      }) : null, /* @__PURE__ */ k.jsx(lO, {
        disableEnforceFocus: C,
        disableAutoFocus: R,
        disableRestoreFocus: Y,
        isEnabled: le,
        open: S,
        children: /* @__PURE__ */ E.cloneElement(y, F)
      })]
    })
  });
});
function mO(a, r, i) {
  const o = r.getBoundingClientRect(), c = i && i.getBoundingClientRect(), f = Zr(r);
  let d;
  if (r.fakeTransform)
    d = r.fakeTransform;
  else {
    const y = f.getComputedStyle(r);
    d = y.getPropertyValue("-webkit-transform") || y.getPropertyValue("transform");
  }
  let h = 0, p = 0;
  if (d && d !== "none" && typeof d == "string") {
    const y = d.split("(")[1].split(")")[0].split(",");
    h = parseInt(y[4], 10), p = parseInt(y[5], 10);
  }
  return a === "left" ? c ? `translateX(${c.right + h - o.left}px)` : `translateX(${f.innerWidth + h - o.left}px)` : a === "right" ? c ? `translateX(-${o.right - c.left - h}px)` : `translateX(-${o.left + o.width - h}px)` : a === "up" ? c ? `translateY(${c.bottom + p - o.top}px)` : `translateY(${f.innerHeight + p - o.top}px)` : c ? `translateY(-${o.top - c.top + o.height - p}px)` : `translateY(-${o.top + o.height - p}px)`;
}
function hO(a) {
  return typeof a == "function" ? a() : a;
}
function ts(a, r, i) {
  const o = hO(i), c = mO(a, r, o);
  c && (r.style.webkitTransform = c, r.style.transform = c);
}
const pO = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const o = bo(), c = {
    enter: o.transitions.easing.easeOut,
    exit: o.transitions.easing.sharp
  }, f = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    addEndListener: d,
    appear: h = !0,
    children: p,
    container: y,
    direction: v = "down",
    easing: g = c,
    in: x,
    onEnter: w,
    onEntered: R,
    onEntering: C,
    onExit: T,
    onExited: M,
    onExiting: Y,
    style: U,
    timeout: j = f,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: _ = ra,
    ...X
  } = r, q = E.useRef(null), P = ol(_s(p), q, i), J = (W) => (Q) => {
    W && (Q === void 0 ? W(q.current) : W(q.current, Q));
  }, S = J((W, Q) => {
    ts(v, W, y), Pb(W), w && w(W, Q);
  }), G = J((W, Q) => {
    const le = hs({
      timeout: j,
      style: U,
      easing: g
    }, {
      mode: "enter"
    });
    W.style.webkitTransition = o.transitions.create("-webkit-transform", {
      ...le
    }), W.style.transition = o.transitions.create("transform", {
      ...le
    }), W.style.webkitTransform = "none", W.style.transform = "none", C && C(W, Q);
  }), ee = J(R), ae = J(Y), oe = J((W) => {
    const Q = hs({
      timeout: j,
      style: U,
      easing: g
    }, {
      mode: "exit"
    });
    W.style.webkitTransition = o.transitions.create("-webkit-transform", Q), W.style.transition = o.transitions.create("transform", Q), ts(v, W, y), T && T(W);
  }), te = J((W) => {
    W.style.webkitTransition = "", W.style.transition = "", M && M(W);
  }), V = (W) => {
    d && d(q.current, W);
  }, ne = E.useCallback(() => {
    q.current && ts(v, q.current, y);
  }, [v, y]);
  return E.useEffect(() => {
    if (x || v === "down" || v === "right")
      return;
    const W = dR(() => {
      q.current && ts(v, q.current, y);
    }), Q = Zr(q.current);
    return Q.addEventListener("resize", W), () => {
      W.clear(), Q.removeEventListener("resize", W);
    };
  }, [v, x, y]), E.useEffect(() => {
    x || ne();
  }, [x, ne]), /* @__PURE__ */ k.jsx(_, {
    nodeRef: q,
    onEnter: S,
    onEntered: ee,
    onEntering: G,
    onExit: oe,
    onExited: te,
    onExiting: ae,
    addEndListener: V,
    appear: h,
    in: x,
    timeout: j,
    ...X,
    children: (W, {
      ownerState: Q,
      ...le
    }) => /* @__PURE__ */ E.cloneElement(p, {
      ref: P,
      style: {
        visibility: W === "exited" && !x ? "hidden" : void 0,
        ...U,
        ...p.props.style
      },
      ...le
    })
  });
});
function gO(a) {
  return fn("MuiDrawer", a);
}
Zt("MuiDrawer", ["root", "docked", "paper", "anchorLeft", "anchorRight", "anchorTop", "anchorBottom", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const Wb = (a, r) => {
  const {
    ownerState: i
  } = a;
  return [r.root, (i.variant === "permanent" || i.variant === "persistent") && r.docked, r.modal];
}, yO = (a) => {
  const {
    classes: r,
    anchor: i,
    variant: o
  } = a, c = {
    root: ["root", `anchor${ge(i)}`],
    docked: [(o === "permanent" || o === "persistent") && "docked"],
    modal: ["modal"],
    paper: ["paper", `paperAnchor${ge(i)}`, o !== "temporary" && `paperAnchorDocked${ge(i)}`]
  };
  return An(c, gO, r);
}, vO = Ze(dO, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: Wb
})(Lt(({
  theme: a
}) => ({
  zIndex: (a.vars || a).zIndex.drawer
}))), bO = Ze("div", {
  shouldForwardProp: Ds,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver: Wb
})({
  flex: "0 0 auto"
}), SO = Ze(q5, {
  name: "MuiDrawer",
  slot: "Paper",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.paper, r[`paperAnchor${ge(i.anchor)}`], i.variant !== "temporary" && r[`paperAnchorDocked${ge(i.anchor)}`]];
  }
})(Lt(({
  theme: a
}) => ({
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  flex: "1 0 auto",
  zIndex: (a.vars || a).zIndex.drawer,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  // temporary style
  position: "fixed",
  top: 0,
  // We disable the focus ring for mouse, touch and keyboard users.
  // At some point, it would be better to keep it for keyboard users.
  // :focus-ring CSS pseudo-class will help.
  outline: 0,
  variants: [{
    props: {
      anchor: "left"
    },
    style: {
      left: 0
    }
  }, {
    props: {
      anchor: "top"
    },
    style: {
      top: 0,
      left: 0,
      right: 0,
      height: "auto",
      maxHeight: "100%"
    }
  }, {
    props: {
      anchor: "right"
    },
    style: {
      right: 0
    }
  }, {
    props: {
      anchor: "bottom"
    },
    style: {
      top: "auto",
      left: 0,
      bottom: 0,
      right: 0,
      height: "auto",
      maxHeight: "100%"
    }
  }, {
    props: ({
      ownerState: r
    }) => r.anchor === "left" && r.variant !== "temporary",
    style: {
      borderRight: `1px solid ${(a.vars || a).palette.divider}`
    }
  }, {
    props: ({
      ownerState: r
    }) => r.anchor === "top" && r.variant !== "temporary",
    style: {
      borderBottom: `1px solid ${(a.vars || a).palette.divider}`
    }
  }, {
    props: ({
      ownerState: r
    }) => r.anchor === "right" && r.variant !== "temporary",
    style: {
      borderLeft: `1px solid ${(a.vars || a).palette.divider}`
    }
  }, {
    props: ({
      ownerState: r
    }) => r.anchor === "bottom" && r.variant !== "temporary",
    style: {
      borderTop: `1px solid ${(a.vars || a).palette.divider}`
    }
  }]
}))), e1 = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function EO(a) {
  return ["left", "right"].includes(a);
}
function xO({
  direction: a
}, r) {
  return a === "rtl" && EO(r) ? e1[r] : r;
}
const Sv = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const o = dn({
    props: r,
    name: "MuiDrawer"
  }), c = bo(), f = AR(), d = {
    enter: c.transitions.duration.enteringScreen,
    exit: c.transitions.duration.leavingScreen
  }, {
    anchor: h = "left",
    BackdropProps: p,
    children: y,
    className: v,
    elevation: g = 16,
    hideBackdrop: x = !1,
    ModalProps: {
      BackdropProps: w,
      ...R
    } = {},
    onClose: C,
    open: T = !1,
    PaperProps: M = {},
    SlideProps: Y,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: U,
    transitionDuration: j = d,
    variant: _ = "temporary",
    slots: X = {},
    slotProps: q = {},
    ...P
  } = o, J = E.useRef(!1);
  E.useEffect(() => {
    J.current = !0;
  }, []);
  const S = xO({
    direction: f ? "rtl" : "ltr"
  }, h), ee = {
    ...o,
    anchor: h,
    elevation: g,
    open: T,
    variant: _,
    ...P
  }, ae = yO(ee), oe = {
    slots: {
      transition: U,
      ...X
    },
    slotProps: {
      paper: M,
      transition: Y,
      ...q,
      backdrop: N5(q.backdrop || {
        ...p,
        ...w
      }, {
        transitionDuration: j
      })
    }
  }, [te, V] = ea("root", {
    ref: i,
    elementType: vO,
    className: je(ae.root, ae.modal, v),
    shouldForwardComponentProp: !0,
    ownerState: ee,
    externalForwardedProps: {
      ...oe,
      ...P,
      ...R
    },
    additionalProps: {
      open: T,
      onClose: C,
      hideBackdrop: x,
      slots: {
        backdrop: oe.slots.backdrop
      },
      slotProps: {
        backdrop: oe.slotProps.backdrop
      }
    }
  }), [ne, W] = ea("paper", {
    elementType: SO,
    shouldForwardComponentProp: !0,
    className: je(ae.paper, M.className),
    ownerState: ee,
    externalForwardedProps: oe,
    additionalProps: {
      elevation: _ === "temporary" ? g : 0,
      square: !0
    }
  }), [Q, le] = ea("docked", {
    elementType: bO,
    ref: i,
    className: je(ae.root, ae.docked, v),
    ownerState: ee,
    externalForwardedProps: oe,
    additionalProps: P
    // pass `other` here because `DockedSlot` is also a root slot for some variants
  }), [Se, He] = ea("transition", {
    elementType: pO,
    ownerState: ee,
    externalForwardedProps: oe,
    additionalProps: {
      in: T,
      direction: e1[S],
      timeout: j,
      appear: J.current
    }
  }), et = /* @__PURE__ */ k.jsx(ne, {
    ...W,
    children: y
  });
  if (_ === "permanent")
    return /* @__PURE__ */ k.jsx(Q, {
      ...le,
      children: et
    });
  const A = /* @__PURE__ */ k.jsx(Se, {
    ...He,
    children: et
  });
  return _ === "persistent" ? /* @__PURE__ */ k.jsx(Q, {
    ...le,
    children: A
  }) : /* @__PURE__ */ k.jsx(te, {
    ...V,
    children: A
  });
});
function CO(a) {
  return fn("MuiFab", a);
}
const Ev = Zt("MuiFab", ["root", "primary", "secondary", "extended", "circular", "focusVisible", "disabled", "colorInherit", "sizeSmall", "sizeMedium", "sizeLarge", "info", "error", "warning", "success"]), TO = (a) => {
  const {
    color: r,
    variant: i,
    classes: o,
    size: c
  } = a, f = {
    root: ["root", i, `size${ge(c)}`, r === "inherit" ? "colorInherit" : r]
  }, d = An(f, CO, o);
  return {
    ...o,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...d
  };
}, RO = Ze(Lm, {
  name: "MuiFab",
  slot: "Root",
  shouldForwardProp: (a) => Ds(a) || a === "classes",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, r[i.variant], r[`size${ge(i.size)}`], i.color === "inherit" && r.colorInherit, r[ge(i.size)], r[i.color]];
  }
})(Lt(({
  theme: a
}) => {
  var r, i;
  return {
    ...a.typography.button,
    minHeight: 36,
    transition: a.transitions.create(["background-color", "box-shadow", "border-color"], {
      duration: a.transitions.duration.short
    }),
    borderRadius: "50%",
    padding: 0,
    minWidth: 0,
    width: 56,
    height: 56,
    zIndex: (a.vars || a).zIndex.fab,
    boxShadow: (a.vars || a).shadows[6],
    "&:active": {
      boxShadow: (a.vars || a).shadows[12]
    },
    color: a.vars ? a.vars.palette.text.primary : (i = (r = a.palette).getContrastText) == null ? void 0 : i.call(r, a.palette.grey[300]),
    backgroundColor: (a.vars || a).palette.grey[300],
    "&:hover": {
      backgroundColor: (a.vars || a).palette.grey.A100,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (a.vars || a).palette.grey[300]
      },
      textDecoration: "none"
    },
    [`&.${Ev.focusVisible}`]: {
      boxShadow: (a.vars || a).shadows[6]
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        width: 40,
        height: 40
      }
    }, {
      props: {
        size: "medium"
      },
      style: {
        width: 48,
        height: 48
      }
    }, {
      props: {
        variant: "extended"
      },
      style: {
        borderRadius: 48 / 2,
        padding: "0 16px",
        width: "auto",
        minHeight: "auto",
        minWidth: 48,
        height: 48
      }
    }, {
      props: {
        variant: "extended",
        size: "small"
      },
      style: {
        width: "auto",
        padding: "0 8px",
        borderRadius: 34 / 2,
        minWidth: 34,
        height: 34
      }
    }, {
      props: {
        variant: "extended",
        size: "medium"
      },
      style: {
        width: "auto",
        padding: "0 16px",
        borderRadius: 40 / 2,
        minWidth: 40,
        height: 40
      }
    }, {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit"
      }
    }]
  };
}), Lt(({
  theme: a
}) => ({
  variants: [...Object.entries(a.palette).filter($l(["dark", "contrastText"])).map(([r]) => ({
    props: {
      color: r
    },
    style: {
      color: (a.vars || a).palette[r].contrastText,
      backgroundColor: (a.vars || a).palette[r].main,
      "&:hover": {
        backgroundColor: (a.vars || a).palette[r].dark,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (a.vars || a).palette[r].main
        }
      }
    }
  }))]
})), Lt(({
  theme: a
}) => ({
  [`&.${Ev.disabled}`]: {
    color: (a.vars || a).palette.action.disabled,
    boxShadow: (a.vars || a).shadows[0],
    backgroundColor: (a.vars || a).palette.action.disabledBackground
  }
}))), OO = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const o = dn({
    props: r,
    name: "MuiFab"
  }), {
    children: c,
    className: f,
    color: d = "default",
    component: h = "button",
    disabled: p = !1,
    disableFocusRipple: y = !1,
    focusVisibleClassName: v,
    size: g = "large",
    variant: x = "circular",
    ...w
  } = o, R = {
    ...o,
    color: d,
    component: h,
    disabled: p,
    disableFocusRipple: y,
    size: g,
    variant: x
  }, C = TO(R);
  return /* @__PURE__ */ k.jsx(RO, {
    className: je(C.root, f),
    component: h,
    disabled: p,
    focusRipple: !y,
    focusVisibleClassName: je(C.focusVisible, v),
    ownerState: R,
    ref: i,
    ...w,
    classes: C,
    children: c
  });
}), wO = Nb({
  themeId: ta
}), AO = Bs(/* @__PURE__ */ k.jsx("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
}), "Add"), xv = Bs(/* @__PURE__ */ k.jsx("path", {
  d: "M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z"
}), "FilterList"), zO = Bs([/* @__PURE__ */ k.jsx("path", {
  d: "M15.5 5H11l5 7-5 7h4.5l5-7z"
}, "0"), /* @__PURE__ */ k.jsx("path", {
  d: "M8.5 5H4l5 7-5 7h4.5l5-7z"
}, "1")], "DoubleArrow"), MO = Bs(/* @__PURE__ */ k.jsx("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
var Bd = { exports: {} }, Ii = {}, Ud = { exports: {} }, jd = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cv;
function NO() {
  return Cv || (Cv = 1, (function(a) {
    function r(V, ne) {
      var W = V.length;
      V.push(ne);
      e: for (; 0 < W; ) {
        var Q = W - 1 >>> 1, le = V[Q];
        if (0 < c(le, ne))
          V[Q] = ne, V[W] = le, W = Q;
        else break e;
      }
    }
    function i(V) {
      return V.length === 0 ? null : V[0];
    }
    function o(V) {
      if (V.length === 0) return null;
      var ne = V[0], W = V.pop();
      if (W !== ne) {
        V[0] = W;
        e: for (var Q = 0, le = V.length, Se = le >>> 1; Q < Se; ) {
          var He = 2 * (Q + 1) - 1, et = V[He], A = He + 1, F = V[A];
          if (0 > c(et, W))
            A < le && 0 > c(F, et) ? (V[Q] = F, V[A] = W, Q = A) : (V[Q] = et, V[He] = W, Q = He);
          else if (A < le && 0 > c(F, W))
            V[Q] = F, V[A] = W, Q = A;
          else break e;
        }
      }
      return ne;
    }
    function c(V, ne) {
      var W = V.sortIndex - ne.sortIndex;
      return W !== 0 ? W : V.id - ne.id;
    }
    if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      a.unstable_now = function() {
        return f.now();
      };
    } else {
      var d = Date, h = d.now();
      a.unstable_now = function() {
        return d.now() - h;
      };
    }
    var p = [], y = [], v = 1, g = null, x = 3, w = !1, R = !1, C = !1, T = !1, M = typeof setTimeout == "function" ? setTimeout : null, Y = typeof clearTimeout == "function" ? clearTimeout : null, U = typeof setImmediate < "u" ? setImmediate : null;
    function j(V) {
      for (var ne = i(y); ne !== null; ) {
        if (ne.callback === null) o(y);
        else if (ne.startTime <= V)
          o(y), ne.sortIndex = ne.expirationTime, r(p, ne);
        else break;
        ne = i(y);
      }
    }
    function _(V) {
      if (C = !1, j(V), !R)
        if (i(p) !== null)
          R = !0, X || (X = !0, ee());
        else {
          var ne = i(y);
          ne !== null && te(_, ne.startTime - V);
        }
    }
    var X = !1, q = -1, P = 5, J = -1;
    function S() {
      return T ? !0 : !(a.unstable_now() - J < P);
    }
    function G() {
      if (T = !1, X) {
        var V = a.unstable_now();
        J = V;
        var ne = !0;
        try {
          e: {
            R = !1, C && (C = !1, Y(q), q = -1), w = !0;
            var W = x;
            try {
              t: {
                for (j(V), g = i(p); g !== null && !(g.expirationTime > V && S()); ) {
                  var Q = g.callback;
                  if (typeof Q == "function") {
                    g.callback = null, x = g.priorityLevel;
                    var le = Q(
                      g.expirationTime <= V
                    );
                    if (V = a.unstable_now(), typeof le == "function") {
                      g.callback = le, j(V), ne = !0;
                      break t;
                    }
                    g === i(p) && o(p), j(V);
                  } else o(p);
                  g = i(p);
                }
                if (g !== null) ne = !0;
                else {
                  var Se = i(y);
                  Se !== null && te(
                    _,
                    Se.startTime - V
                  ), ne = !1;
                }
              }
              break e;
            } finally {
              g = null, x = W, w = !1;
            }
            ne = void 0;
          }
        } finally {
          ne ? ee() : X = !1;
        }
      }
    }
    var ee;
    if (typeof U == "function")
      ee = function() {
        U(G);
      };
    else if (typeof MessageChannel < "u") {
      var ae = new MessageChannel(), oe = ae.port2;
      ae.port1.onmessage = G, ee = function() {
        oe.postMessage(null);
      };
    } else
      ee = function() {
        M(G, 0);
      };
    function te(V, ne) {
      q = M(function() {
        V(a.unstable_now());
      }, ne);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(V) {
      V.callback = null;
    }, a.unstable_forceFrameRate = function(V) {
      0 > V || 125 < V ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : P = 0 < V ? Math.floor(1e3 / V) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return x;
    }, a.unstable_next = function(V) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var ne = 3;
          break;
        default:
          ne = x;
      }
      var W = x;
      x = ne;
      try {
        return V();
      } finally {
        x = W;
      }
    }, a.unstable_requestPaint = function() {
      T = !0;
    }, a.unstable_runWithPriority = function(V, ne) {
      switch (V) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          V = 3;
      }
      var W = x;
      x = V;
      try {
        return ne();
      } finally {
        x = W;
      }
    }, a.unstable_scheduleCallback = function(V, ne, W) {
      var Q = a.unstable_now();
      switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? Q + W : Q) : W = Q, V) {
        case 1:
          var le = -1;
          break;
        case 2:
          le = 250;
          break;
        case 5:
          le = 1073741823;
          break;
        case 4:
          le = 1e4;
          break;
        default:
          le = 5e3;
      }
      return le = W + le, V = {
        id: v++,
        callback: ne,
        priorityLevel: V,
        startTime: W,
        expirationTime: le,
        sortIndex: -1
      }, W > Q ? (V.sortIndex = W, r(y, V), i(p) === null && V === i(y) && (C ? (Y(q), q = -1) : C = !0, te(_, W - Q))) : (V.sortIndex = le, r(p, V), R || w || (R = !0, X || (X = !0, ee()))), V;
    }, a.unstable_shouldYield = S, a.unstable_wrapCallback = function(V) {
      var ne = x;
      return function() {
        var W = x;
        x = ne;
        try {
          return V.apply(this, arguments);
        } finally {
          x = W;
        }
      };
    };
  })(jd)), jd;
}
var Tv;
function _O() {
  return Tv || (Tv = 1, Ud.exports = NO()), Ud.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rv;
function DO() {
  if (Rv) return Ii;
  Rv = 1;
  var a = _O(), r = am(), i = nb();
  function o(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function f(e) {
    for (var t = e, n = t; n && !n.alternate; )
      t = n, (t.flags & 4098) !== 0 && (e = t.return), n = t.return;
    for (; t.return; ) t = t.return;
    return t.tag === 3 ? e : null;
  }
  function d(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function h(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (f(e) !== e)
      throw Error(o(188));
  }
  function y(e) {
    var t = e.alternate;
    if (!t) {
      if (t = f(e), t === null) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ; ) {
      var u = n.return;
      if (u === null) break;
      var s = u.alternate;
      if (s === null) {
        if (l = u.return, l !== null) {
          n = l;
          continue;
        }
        break;
      }
      if (u.child === s.child) {
        for (s = u.child; s; ) {
          if (s === n) return p(u), e;
          if (s === l) return p(u), t;
          s = s.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== l.return) n = u, l = s;
      else {
        for (var m = !1, b = u.child; b; ) {
          if (b === n) {
            m = !0, n = u, l = s;
            break;
          }
          if (b === l) {
            m = !0, l = u, n = s;
            break;
          }
          b = b.sibling;
        }
        if (!m) {
          for (b = s.child; b; ) {
            if (b === n) {
              m = !0, n = s, l = u;
              break;
            }
            if (b === l) {
              m = !0, l = s, n = u;
              break;
            }
            b = b.sibling;
          }
          if (!m) throw Error(o(189));
        }
      }
      if (n.alternate !== l) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? e : t;
  }
  function v(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = v(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  function g(e, t, n, l, u, s) {
    for (; e !== null; ) {
      if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && n(e, l, u, s) || (e.tag !== 22 || e.memoizedState === null) && (t || e.tag !== 5 && e.tag !== 27) && g(
        e.child,
        t,
        n,
        l,
        u,
        s
      ))
        return !0;
      e = e.sibling;
    }
    return !1;
  }
  function x(e) {
    for (e = e.return; e !== null; ) {
      if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
      e = e.return;
    }
    return null;
  }
  function w(e) {
    var t = !1;
    for (e = e.return; e !== null && (e.tag === 4 && (t = !0), !(e.tag === 3 || e.tag === 5 || e.tag === 27)); )
      e = e.return;
    return t;
  }
  function R(e) {
    var t = [null, null], n = x(e);
    return n === null || C(
      t,
      e,
      n.child,
      { foundSelf: !1 }
    ), t;
  }
  function C(e, t, n, l) {
    for (; n !== null; ) {
      if (n === t) l.foundSelf = !0;
      else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
        if (l.foundSelf) return e[1] = n, !0;
        e[0] = n;
      } else if ((n.tag !== 22 || n.memoizedState === null) && C(
        e,
        t,
        n.child,
        l
      ))
        return !0;
      n = n.sibling;
    }
    return !1;
  }
  function T(e) {
    switch (e.tag) {
      case 5:
      case 27:
      case 6:
        return e.stateNode;
      case 3:
        return e.stateNode.containerInfo;
      default:
        throw Error(o(559));
    }
  }
  var M = null, Y = null;
  function U(e, t, n) {
    return e === n ? !0 : e === t ? (M = e, !0) : !1;
  }
  function j(e, t, n) {
    return e === n ? (Y = e, !1) : e === t ? (Y !== null && (M = e), !0) : !1;
  }
  function _(e) {
    if (e === null) return null;
    do
      e = e === null ? null : e.return;
    while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
    return e || null;
  }
  function X(e, t, n) {
    for (var l = 0, u = e; u; u = n(u)) l++;
    u = 0;
    for (var s = t; s; s = n(s)) u++;
    for (; 0 < l - u; ) e = n(e), l--;
    for (; 0 < u - l; ) t = n(t), u--;
    for (; l--; ) {
      if (e === t || t !== null && e === t.alternate)
        return e;
      e = n(e), t = n(t);
    }
    return null;
  }
  var q = Object.assign, P = Symbol.for("react.element"), J = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), G = Symbol.for("react.fragment"), ee = Symbol.for("react.strict_mode"), ae = Symbol.for("react.profiler"), oe = Symbol.for("react.consumer"), te = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), le = Symbol.for("react.lazy"), Se = Symbol.for("react.activity"), He = Symbol.for("react.legacy_hidden"), et = Symbol.for("react.memo_cache_sentinel"), A = Symbol.for("react.view_transition"), F = Symbol.for("react.recoverable"), se = Symbol.iterator;
  function fe(e) {
    return e === null || typeof e != "object" ? null : (e = se && e[se] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Ce = Symbol.for("react.client.reference");
  function Re(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Ce ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case G:
        return "Fragment";
      case ae:
        return "Profiler";
      case ee:
        return "StrictMode";
      case ne:
        return "Suspense";
      case W:
        return "SuspenseList";
      case Se:
        return "Activity";
      case A:
        return "ViewTransition";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case S:
          return "Portal";
        case te:
          return e.displayName || "Context";
        case oe:
          return (e._context.displayName || "Context") + ".Consumer";
        case V:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Q:
          return t = e.displayName || null, t !== null ? t : Re(e.type) || "Memo";
        case le:
          t = e._payload, e = e._init;
          try {
            return Re(e(t));
          } catch {
          }
      }
    return null;
  }
  var Oe = Array.isArray, ie = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, me = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, kt = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, jn = [], Hn = -1;
  function Dt(e) {
    return { current: e };
  }
  function Ie(e) {
    0 > Hn || (e.current = jn[Hn], jn[Hn] = null, Hn--);
  }
  function be(e, t) {
    Hn++, jn[Hn] = e.current, e.current = t;
  }
  var gt = Dt(null), $t = Dt(null), mn = Dt(null), ye = Dt(null);
  function ul(e, t) {
    switch (be(mn, t), be($t, e), be(gt, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? gy(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = gy(t), e = yy(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    Ie(gt), be(gt, e);
  }
  function ia() {
    Ie(gt), Ie($t), Ie(mn);
  }
  function Yl(e) {
    var t = e.memoizedState;
    t !== null && (zr._currentValue = t.memoizedState, be(ye, e)), t = gt.current;
    var n = yy(t, e.type);
    t !== n && (be($t, e), be(gt, n));
  }
  function sl(e) {
    $t.current === e && (Ie(gt), Ie($t)), ye.current === e && (Ie(ye), zr._currentValue = kt);
  }
  var ql, yt;
  function tt(e) {
    if (ql === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ql = t && t[1] || "", yt = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ql + e + yt;
  }
  var xt = !1;
  function oa(e, t) {
    if (!e || xt) return "";
    xt = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var I = function() {
                throw Error();
              };
              if (Object.defineProperty(I.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(I, []);
                } catch (re) {
                  var N = re;
                }
                Reflect.construct(e, [], I);
              } else {
                try {
                  I.call();
                } catch (re) {
                  N = re;
                }
                I = !1;
                try {
                  var L = Object.getOwnPropertyDescriptor(
                    e.prototype,
                    "props"
                  );
                  Object.defineProperty(e.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), I = !0, new e();
                } finally {
                  I && (L !== void 0 ? Object.defineProperty(e.prototype, "props", L) : delete e.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (re) {
                N = re;
              }
              (I = e()) && typeof I.catch == "function" && I.catch(function() {
              });
            }
          } catch (re) {
            if (re && N && typeof re.stack == "string")
              return [re.stack, N.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var s = l.DetermineComponentFrameRoot(), m = s[0], b = s[1];
      if (m && b) {
        var O = m.split(`
`), B = b.split(`
`);
        for (u = l = 0; l < O.length && !O[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; u < B.length && !B[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (l === O.length || u === B.length)
          for (l = O.length - 1, u = B.length - 1; 1 <= l && 0 <= u && O[l] !== B[u]; )
            u--;
        for (; 1 <= l && 0 <= u; l--, u--)
          if (O[l] !== B[u]) {
            if (l !== 1 || u !== 1)
              do
                if (l--, u--, 0 > u || O[l] !== B[u]) {
                  var $ = `
` + O[l].replace(" at new ", " at ");
                  return e.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", e.displayName)), $;
                }
              while (1 <= l && 0 <= u);
            break;
          }
      }
    } finally {
      xt = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? tt(n) : "";
  }
  function It(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return tt(e.type);
      case 16:
        return tt("Lazy");
      case 13:
        return e.child !== t && t !== null ? tt("Suspense Fallback") : tt("Suspense");
      case 19:
        return tt("SuspenseList");
      case 0:
      case 15:
        return oa(e.type, !1);
      case 11:
        return oa(e.type.render, !1);
      case 1:
        return oa(e.type, !0);
      case 31:
        return tt("Activity");
      case 30:
        return tt("ViewTransition");
      default:
        return "";
    }
  }
  function hn(e) {
    try {
      var t = "", n = null;
      do
        t += It(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var Us = Object.prototype.hasOwnProperty, js = a.unstable_scheduleCallback, Hs = a.unstable_cancelCallback, n1 = a.unstable_shouldYield, a1 = a.unstable_requestPaint, Pt = a.unstable_now, l1 = a.unstable_getCurrentPriorityLevel, km = a.unstable_ImmediatePriority, $m = a.unstable_UserBlockingPriority, So = a.unstable_NormalPriority, r1 = a.unstable_LowPriority, Ym = a.unstable_IdlePriority, i1 = a.log, o1 = a.unstable_setDisableYieldValue, Fr = null, Jt = null;
  function Aa(e) {
    if (typeof i1 == "function" && o1(e), Jt && typeof Jt.setStrictMode == "function")
      try {
        Jt.setStrictMode(Fr, e);
      } catch {
      }
  }
  var Ft = Math.clz32 ? Math.clz32 : c1, u1 = Math.log, s1 = Math.LN2;
  function c1(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (u1(e) / s1 | 0) | 0;
  }
  var Eo = 256, xo = 262144, Co = 4194304;
  function cl(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & -e;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function To(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var u = 0, s = e.suspendedLanes, m = e.pingedLanes;
    e = e.warmLanes;
    var b = l & 134217727;
    return b !== 0 ? (l = b & ~s, l !== 0 ? u = cl(l) : (m &= b, m !== 0 ? u = cl(m) : n || (n = b & ~e, n !== 0 && (u = cl(n))))) : (b = l & ~s, b !== 0 ? u = cl(b) : m !== 0 ? u = cl(m) : n || (n = l & ~e, n !== 0 && (u = cl(n)))), u === 0 ? 0 : t !== 0 && t !== u && (t & s) === 0 && (s = u & -u, n = t & -t, s >= n || s === 32 && (n & 4194048) !== 0) ? t : u;
  }
  function Wr(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function qm(e, t) {
    (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var l = 31 - Ft(n), u = 1 << l;
        t |= e[l], n &= ~u;
      }
    return t;
  }
  function f1(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Vm() {
    var e = Co;
    return Co <<= 1, (Co & 62914560) === 0 && (Co = 4194304), e;
  }
  function Ls(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ei(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function d1(e, t, n, l, u, s) {
    var m = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var b = e.entanglements, O = e.expirationTimes, B = e.hiddenUpdates;
    for (n = m & ~n; 0 < n; ) {
      var $ = 31 - Ft(n), I = 1 << $;
      b[$] = 0, O[$] = -1;
      var N = B[$];
      if (N !== null)
        for (B[$] = null, $ = 0; $ < N.length; $++) {
          var L = N[$];
          L !== null && (L.lane &= -536870913);
        }
      n &= ~I;
    }
    l !== 0 && Gm(e, l, 0), s !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= s & ~(m & ~t));
  }
  function Gm(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - Ft(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | n & 261930;
  }
  function Xm(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var l = 31 - Ft(n), u = 1 << l;
      u & t | e[l] & t && (e[l] |= t), n &= ~u;
    }
  }
  function Qm(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : ks(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function ks(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function $s(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Km() {
    var e = me.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : e0(e.type));
  }
  function Zm(e, t) {
    var n = me.p;
    try {
      return me.p = e, t();
    } finally {
      me.p = n;
    }
  }
  var ua = Math.random().toString(36).slice(2), Ct = "__reactFiber$" + ua, Yt = "__reactProps$" + ua, Vl = "__reactContainer$" + ua, Im = "__reactEvents$" + ua, m1 = "__reactListeners$" + ua, h1 = "__reactHandles$" + ua, Pm = "__reactResources$" + ua, ti = "__reactMarker$" + ua, Ro = "__reactLoad$" + ua;
  function Oo(e) {
    delete e[Ct], delete e[Yt], delete e[m1], delete e[h1];
  }
  function fl(e) {
    var t;
    if (t = e[Ct]) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Vl] || n[Ct]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = By(e); e !== null; ) {
            if (n = e[Ct]) return n;
            e = By(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Gl(e) {
    if (e = e[Ct] || e[Vl]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function ni(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Xl(e) {
    var t = e[Pm];
    return t || (t = e[Pm] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function vt(e) {
    e[ti] = !0;
  }
  function Jm(e) {
    e[Ro] = void 0;
  }
  var Fm = /* @__PURE__ */ new Set(), Wm = {};
  function dl(e, t) {
    Ql(e, t), Ql(e + "Capture", t);
  }
  function Ql(e, t) {
    for (Wm[e] = t, e = 0; e < t.length; e++)
      Fm.add(t[e]);
  }
  var p1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), eh = {}, th = {};
  function g1(e) {
    return Us.call(th, e) ? !0 : Us.call(eh, e) ? !1 : p1.test(e) ? th[e] = !0 : (eh[e] = !0, !1);
  }
  var _e = !1;
  function nh() {
    var e = _e;
    return _e = !1, e;
  }
  function wo(e, t, n) {
    if (g1(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, n);
      }
  }
  function Ao(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, n);
    }
  }
  function sa(e, t, n, l) {
    if (l === null) e.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, l);
    }
  }
  function Wt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function ah(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function y1(e, t, n) {
    var l = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var u = l.get, s = l.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(m) {
          n = "" + m, s.call(this, m);
        }
      }), Object.defineProperty(e, t, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(m) {
          n = "" + m;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function Ys(e) {
    if (!e._valueTracker) {
      var t = ah(e) ? "checked" : "value";
      e._valueTracker = y1(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function lh(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), l = "";
    return e && (l = ah(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== n ? (t.setValue(e), !0) : !1;
  }
  var v1 = /[\n"\\]/g;
  function pn(e) {
    return e.replace(
      v1,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function qs(e, t, n, l, u, s, m, b) {
    e.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.type = m : e.removeAttribute("type"), t != null ? m === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Wt(t)) : e.value !== "" + Wt(t) && (e.value = "" + Wt(t)) : m !== "submit" && m !== "reset" || e.removeAttribute("value"), t != null ? m === "number" && e.value == t ? Vs(e, Wt(e.value)) : Vs(e, Wt(t)) : n != null ? Vs(e, Wt(n)) : l != null && e.removeAttribute("value"), u == null && s != null && (e.defaultChecked = !!s), u != null && (e.checked = u && typeof u != "function" && typeof u != "symbol"), b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? e.name = "" + Wt(b) : e.removeAttribute("name");
  }
  function rh(e, t, n, l, u, s, m, b) {
    if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.type = s), t != null || n != null) {
      if (!(s !== "submit" && s !== "reset" || t != null)) {
        Ys(e);
        return;
      }
      n = n != null ? "" + Wt(n) : "", t = t != null ? "" + Wt(t) : n, b || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? u, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = b ? e.checked : !!l, e.defaultChecked = !!l, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (e.name = m), Ys(e);
  }
  function Vs(e, t) {
    e.defaultValue !== "" + t && (e.defaultValue = "" + t);
  }
  function Kl(e, t, n, l) {
    if (e = e.options, t) {
      t = {};
      for (var u = 0; u < n.length; u++)
        t["$" + n[u]] = !0;
      for (n = 0; n < e.length; n++)
        u = t.hasOwnProperty("$" + e[n].value), e[n].selected !== u && (e[n].selected = u), u && l && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Wt(n), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === n) {
          e[u].selected = !0, l && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ih(e, t, n) {
    if (t != null && (t = "" + Wt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Wt(n) : "";
  }
  function oh(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(o(92));
        if (Oe(l)) {
          if (1 < l.length) throw Error(o(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), t = n;
    }
    n = Wt(t), e.defaultValue = n, l = e.textContent, l === n && l !== "" && l !== null && (e.value = l), Ys(e);
  }
  function Zl(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var b1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function uh(e, t, n) {
    var l = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, n) : typeof n != "number" || n === 0 || b1.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function sh(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (e = e.style, n != null) {
      for (var l in n)
        !n.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "", _e = !0);
      for (var u in t)
        l = t[u], t.hasOwnProperty(u) && n[u] !== l && (uh(e, u, l), _e = !0);
    } else
      for (var s in t)
        t.hasOwnProperty(s) && uh(e, s, t[s]);
  }
  function Gs(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var S1 = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["maskType", "mask-type"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), E1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function zo(e) {
    return E1.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Ln() {
  }
  var Xs = null;
  function Qs(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Il = null, Pl = null;
  function ch(e) {
    var t = Gl(e);
    if (t && (e = t.stateNode)) {
      var n = e[Yt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (qs(
            e,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + pn(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var u = l[Yt] || null;
                if (!u) throw Error(o(90));
                qs(
                  l,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              l = n[t], l.form === e.form && lh(l);
          }
          break e;
        case "textarea":
          ih(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && Kl(e, !!n.multiple, t, !1);
      }
    }
  }
  var Ks = !1;
  function fh(e, t, n) {
    if (Ks) return e(t, n);
    Ks = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (Ks = !1, (Il !== null || Pl !== null) && (zu(), Il && (t = Il, e = Pl, Pl = Il = null, ch(t), e)))
        for (t = 0; t < e.length; t++) ch(e[t]);
    }
  }
  function ai(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[Yt] || null;
    if (l === null) return null;
    n = l[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function")
      throw Error(
        o(231, t, typeof n)
      );
    return n;
  }
  var ca = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Zs = !1;
  if (ca)
    try {
      var li = {};
      Object.defineProperty(li, "passive", {
        get: function() {
          Zs = !0;
        }
      }), window.addEventListener("test", li, li), window.removeEventListener("test", li, li);
    } catch {
      Zs = !1;
    }
  var za = null, Is = null, Mo = null;
  function dh() {
    if (Mo) return Mo;
    var e, t = Is, n = t.length, l, u = "value" in za ? za.value : za.textContent, s = u.length;
    for (e = 0; e < n && t[e] === u[e]; e++) ;
    var m = n - e;
    for (l = 1; l <= m && t[n - l] === u[s - l]; l++) ;
    return Mo = u.slice(e, 1 < l ? 1 - l : void 0);
  }
  function No(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function _o() {
    return !0;
  }
  function mh() {
    return !1;
  }
  function Bt(e) {
    function t(n, l, u, s, m) {
      this._reactName = n, this._targetInst = u, this.type = l, this.nativeEvent = s, this.target = m, this.currentTarget = null;
      for (var b in e)
        e.hasOwnProperty(b) && (n = e[b], this[b] = n ? n(s) : s[b]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? _o : mh, this.isPropagationStopped = mh, this;
    }
    return q(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = _o);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = _o);
      },
      persist: function() {
      },
      isPersistent: _o
    }), t;
  }
  var Ma = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Do = Bt(Ma), ri = q({}, Ma, { view: 0, detail: 0 }), x1 = Bt(ri), Ps, Js, ii, Bo = q({}, ri, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ws,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== ii && (ii && e.type === "mousemove" ? (Ps = e.screenX - ii.screenX, Js = e.screenY - ii.screenY) : Js = Ps = 0, ii = e), Ps);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Js;
    }
  }), hh = Bt(Bo), C1 = q({}, Bo, { dataTransfer: 0 }), T1 = Bt(C1), R1 = q({}, ri, { relatedTarget: 0 }), Fs = Bt(R1), O1 = q({}, Ma, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), w1 = Bt(O1), A1 = q({}, Ma, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), z1 = Bt(A1), M1 = q({}, Ma, { data: 0 }), ph = Bt(M1), N1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, _1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, D1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function B1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = D1[e]) ? !!t[e] : !1;
  }
  function Ws() {
    return B1;
  }
  var U1 = q({}, ri, {
    key: function(e) {
      if (e.key) {
        var t = N1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = No(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? _1[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ws,
    charCode: function(e) {
      return e.type === "keypress" ? No(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? No(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), j1 = Bt(U1), H1 = q({}, Bo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), gh = Bt(H1), L1 = q({}, Ma, { submitter: 0 }), k1 = Bt(L1), $1 = q({}, ri, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ws
  }), Y1 = Bt($1), q1 = q({}, Ma, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), V1 = Bt(q1), G1 = q({}, Bo, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), X1 = Bt(G1), Q1 = q({}, Ma, {
    newState: 0,
    oldState: 0,
    source: 0
  }), K1 = Bt(Q1), Z1 = [9, 13, 27, 32], ec = ca && "CompositionEvent" in window, oi = null;
  ca && "documentMode" in document && (oi = document.documentMode);
  var I1 = ca && "TextEvent" in window && !oi, yh = ca && (!ec || oi && 8 < oi && 11 >= oi), vh = " ", bh = !1;
  function Sh(e, t) {
    switch (e) {
      case "keyup":
        return Z1.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Eh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Jl = !1;
  function P1(e, t) {
    switch (e) {
      case "compositionend":
        return Eh(t);
      case "keypress":
        return t.which !== 32 ? null : (bh = !0, vh);
      case "textInput":
        return e = t.data, e === vh && bh ? null : e;
      default:
        return null;
    }
  }
  function J1(e, t) {
    if (Jl)
      return e === "compositionend" || !ec && Sh(e, t) ? (e = dh(), Mo = Is = za = null, Jl = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return yh && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var F1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function xh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!F1[e.type] : t === "textarea";
  }
  function Ch(e, t, n, l) {
    Il ? Pl ? Pl.push(l) : Pl = [l] : Il = l, t = Uu(t, "onChange"), 0 < t.length && (n = new Do(
      "onChange",
      "change",
      null,
      n,
      l
    ), e.push({ event: n, listeners: t }));
  }
  var ui = null, si = null;
  function W1(e) {
    cy(e, 0);
  }
  function Uo(e) {
    var t = ni(e);
    if (lh(t)) return e;
  }
  function Th(e, t) {
    if (e === "change") return t;
  }
  var Rh = !1;
  if (ca) {
    var tc;
    if (ca) {
      var nc = "oninput" in document;
      if (!nc) {
        var Oh = document.createElement("div");
        Oh.setAttribute("oninput", "return;"), nc = typeof Oh.oninput == "function";
      }
      tc = nc;
    } else tc = !1;
    Rh = tc && (!document.documentMode || 9 < document.documentMode);
  }
  function wh() {
    ui && (ui.detachEvent("onpropertychange", Ah), si = ui = null);
  }
  function Ah(e) {
    if (e.propertyName === "value" && Uo(si)) {
      var t = [];
      Ch(
        t,
        si,
        e,
        Qs(e)
      ), fh(W1, t);
    }
  }
  function eS(e, t, n) {
    e === "focusin" ? (wh(), ui = t, si = n, ui.attachEvent("onpropertychange", Ah)) : e === "focusout" && wh();
  }
  function tS(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Uo(si);
  }
  function nS(e, t) {
    if (e === "click") return Uo(t);
  }
  function aS(e, t) {
    if (e === "input" || e === "change")
      return Uo(t);
  }
  function lS(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var en = typeof Object.is == "function" ? Object.is : lS;
  function ci(e, t) {
    if (en(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var u = n[l];
      if (!Us.call(t, u) || !en(e[u], t[u]))
        return !1;
    }
    return !0;
  }
  function ac(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function zh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Mh(e, t) {
    var n = zh(e);
    e = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (l = e + n.textContent.length, e <= t && l >= t)
          return { node: n, offset: t - e };
        e = l;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = zh(n);
    }
  }
  function Nh(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Nh(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function _h(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = ac(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = ac(e.document);
    }
    return t;
  }
  function lc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var rS = ca && "documentMode" in document && 11 >= document.documentMode, Fl = null, rc = null, fi = null, ic = !1;
  function Dh(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ic || Fl == null || Fl !== ac(l) || (l = Fl, "selectionStart" in l && lc(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), fi && ci(fi, l) || (fi = l, l = Uu(rc, "onSelect"), 0 < l.length && (t = new Do(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: l }), t.target = Fl)));
  }
  function ml(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Wl = {
    animationend: ml("Animation", "AnimationEnd"),
    animationiteration: ml("Animation", "AnimationIteration"),
    animationstart: ml("Animation", "AnimationStart"),
    transitionrun: ml("Transition", "TransitionRun"),
    transitionstart: ml("Transition", "TransitionStart"),
    transitioncancel: ml("Transition", "TransitionCancel"),
    transitionend: ml("Transition", "TransitionEnd")
  }, oc = {}, Bh = {};
  ca && (Bh = document.createElement("div").style, "AnimationEvent" in window || (delete Wl.animationend.animation, delete Wl.animationiteration.animation, delete Wl.animationstart.animation), "TransitionEvent" in window || delete Wl.transitionend.transition);
  function hl(e) {
    if (oc[e]) return oc[e];
    if (!Wl[e]) return e;
    var t = Wl[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in Bh)
        return oc[e] = t[n];
    return e;
  }
  var Uh = hl("animationend"), jh = hl("animationiteration"), Hh = hl("animationstart"), iS = hl("transitionrun"), oS = hl("transitionstart"), uS = hl("transitioncancel"), Lh = hl("transitionend"), kh = /* @__PURE__ */ new Map(), uc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  uc.push("scrollEnd");
  function zn(e, t) {
    kh.set(e, t), dl(t, [e]);
  }
  var sS = 0;
  function fa(e, t) {
    if (e.name != null && e.name !== "auto") return e.name;
    if (t.autoName !== null) return t.autoName;
    e = Dn.identifierPrefix;
    var n = sS++;
    return e = "_" + e + "t_" + n.toString(32) + "_", t.autoName = e;
  }
  function $h(e) {
    if (e == null || typeof e == "string")
      return e;
    var t = null, n = br;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var u = e[n[l]];
        if (u != null) {
          if (u === "none") return "none";
          t = t == null ? u : t + (" " + u);
        }
      }
    return t ?? e.default;
  }
  function da(e, t) {
    return e = $h(e), t = $h(t), t == null ? e === "auto" ? null : e : t === "auto" ? null : t;
  }
  var jo = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, gn = [], er = 0, sc = 0;
  function Ho() {
    for (var e = er, t = sc = er = 0; t < e; ) {
      var n = gn[t];
      gn[t++] = null;
      var l = gn[t];
      gn[t++] = null;
      var u = gn[t];
      gn[t++] = null;
      var s = gn[t];
      if (gn[t++] = null, l !== null && u !== null) {
        var m = l.pending;
        m === null ? u.next = u : (u.next = m.next, m.next = u), l.pending = u;
      }
      s !== 0 && Yh(n, u, s);
    }
  }
  function Lo(e, t, n, l) {
    gn[er++] = e, gn[er++] = t, gn[er++] = n, gn[er++] = l, sc |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function cc(e, t, n, l) {
    return Lo(e, t, n, l), ko(e);
  }
  function pl(e, t) {
    return Lo(e, null, null, t), ko(e);
  }
  function Yh(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var u = !1, s = e.return; s !== null; )
      s.childLanes |= n, l = s.alternate, l !== null && (l.childLanes |= n), s.tag === 22 && (e = s.stateNode, e === null || e._visibility & 1 || (u = !0)), e = s, s = s.return;
    return e.tag === 3 ? (s = e.stateNode, u && t !== null && (u = 31 - Ft(n), e = s.hiddenUpdates, l = e[u], l === null ? e[u] = [t] : l.push(t), t.lane = n | 536870912), s) : null;
  }
  function ko(e) {
    if (50 < Di)
      throw Di = 0, Au = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var tr = {};
  function cS(e, t, n, l) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function qt(e, t, n, l) {
    return new cS(e, t, n, l);
  }
  function fc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ma(e, t) {
    var n = e.alternate;
    return n === null ? (n = qt(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 1206910976, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function qh(e, t) {
    e.flags &= 1206910978;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function $o(e, t, n, l, u, s) {
    var m = 0;
    if (l = e, typeof l == "function") fc(l) && (m = 1);
    else if (typeof l == "string")
      m = LE(
        e,
        n,
        gt.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (l) {
        case Se:
          return e = qt(31, n, t, u), e.elementType = Se, e.lanes = s, e;
        case G:
          return gl(n.children, u, s, t);
        case ee:
          m = 8, u |= 24;
          break;
        case ae:
          return e = qt(12, n, t, u | 2), e.elementType = ae, e.lanes = s, e;
        case ne:
          return e = qt(13, n, t, u), e.elementType = ne, e.lanes = s, e;
        case W:
          return e = qt(19, n, t, u), e.elementType = W, e.lanes = s, e;
        case He:
        case A:
          return e = u | 32, e = qt(30, n, t, e), e.elementType = A, e.lanes = s, e.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, e;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case te:
                m = 10;
                break e;
              case oe:
                m = 9;
                break e;
              case V:
                m = 11;
                break e;
              case Q:
                m = 14;
                break e;
              case le:
                m = 16, l = null;
                break e;
            }
          m = 29, n = Error(
            o(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = qt(m, n, t, u), t.elementType = e, t.type = l, t.lanes = s, t;
  }
  function gl(e, t, n, l) {
    return e = qt(7, e, l, t), e.lanes = n, e;
  }
  function dc(e, t, n) {
    return e = qt(6, e, null, t), e.lanes = n, e;
  }
  function Vh(e) {
    var t = qt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function mc(e, t, n) {
    return t = qt(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = n, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var Gh = /* @__PURE__ */ new WeakMap();
  function yn(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = Gh.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: hn(t)
      }, Gh.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: hn(t)
    };
  }
  var nr = [], ar = 0, Yo = null, di = 0, vn = [], bn = 0, Na = null, kn = 1, $n = "";
  function ha(e, t) {
    nr[ar++] = di, nr[ar++] = Yo, Yo = e, di = t;
  }
  function Xh(e, t, n) {
    vn[bn++] = kn, vn[bn++] = $n, vn[bn++] = Na, Na = e;
    var l = kn;
    e = $n;
    var u = 32 - Ft(l) - 1;
    l &= ~(1 << u), n += 1;
    var s = 32 - Ft(t) + u;
    if (30 < s) {
      var m = u - u % 5;
      s = (l & (1 << m) - 1).toString(32), l >>= m, u -= m, kn = 1 << 32 - Ft(t) + u | n << u | l, $n = s + e;
    } else
      kn = 1 << s | n << u | l, $n = e;
  }
  function qo(e) {
    e.return !== null && (ha(e, 1), Xh(e, 1, 0));
  }
  function hc(e) {
    for (; e === Yo; )
      Yo = nr[--ar], nr[ar] = null, di = nr[--ar], nr[ar] = null;
    for (; e === Na; )
      Na = vn[--bn], vn[bn] = null, $n = vn[--bn], vn[bn] = null, kn = vn[--bn], vn[bn] = null;
  }
  function Qh(e, t) {
    vn[bn++] = kn, vn[bn++] = $n, vn[bn++] = Na, kn = t.id, $n = t.overflow, Na = e;
  }
  var bt = null, Pe = null, Te = !1, _a = null, Sn = !1, pc = Error(o(519));
  function Da(e) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw mi(yn(t, e)), pc;
  }
  function Kh(e) {
    var t = e.stateNode, n = e.type, l = e.memoizedProps;
    switch (t[Ct] = e, t[Yt] = l, n) {
      case "dialog":
        Ae("cancel", t), Ae("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ae("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Ui.length; n++)
          Ae(Ui[n], t);
        break;
      case "source":
        Ae("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Ae("error", t), Ae("load", t);
        break;
      case "details":
        Ae("toggle", t);
        break;
      case "input":
        Ae("invalid", t), rh(
          t,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        );
        break;
      case "select":
        Ae("invalid", t);
        break;
      case "textarea":
        Ae("invalid", t), oh(t, l.value, l.defaultValue, l.children);
    }
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || l.suppressHydrationWarning === !0 || hy(t.textContent, n) ? (l.popover != null && (Ae("beforetoggle", t), Ae("toggle", t)), l.onScroll != null && Ae("scroll", t), l.onScrollEnd != null && Ae("scrollend", t), l.onClick != null && (t.onclick = Ln), t = !0) : t = !1, t || Da(e, !0);
  }
  function Vo(e) {
    for (bt = e.return; bt; )
      switch (bt.tag) {
        case 5:
        case 31:
        case 13:
          Sn = !1;
          return;
        case 27:
        case 3:
          Sn = !0;
          return;
        default:
          bt = bt.return;
      }
  }
  function lr(e) {
    if (e !== bt) return !1;
    if (!Te) return Vo(e), Te = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Qf(e.type, e.memoizedProps)), n = !n), n && Pe && Da(e), Vo(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Pe = Dy(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Pe = Dy(e);
    } else
      t === 27 ? (t = Pe, Ia(e.type) ? (e = td, td = null, Pe = e) : Pe = t) : Pe = bt ? xn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function yl() {
    Pe = bt = null, Te = !1;
  }
  function gc() {
    var e = _a;
    return e !== null && (Xt === null ? Xt = e : Xt.push.apply(
      Xt,
      e
    ), _a = null), e;
  }
  function mi(e) {
    _a === null ? _a = [e] : _a.push(e);
  }
  var yc = Dt(null), vl = null, pa = null;
  function Ba(e, t, n) {
    be(yc, t._currentValue), t._currentValue = n;
  }
  function ga(e) {
    e._currentValue = yc.current, Ie(yc);
  }
  function Go(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function vc(e, t, n, l) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var s = u.dependencies;
      if (s !== null) {
        var m = u.child;
        s = s.firstContext;
        e: for (; s !== null; ) {
          var b = s;
          s = u;
          for (var O = 0; O < t.length; O++)
            if (b.context === t[O]) {
              s.lanes |= n, b = s.alternate, b !== null && (b.lanes |= n), Go(
                s.return,
                n,
                e
              ), l || (m = null);
              break e;
            }
          s = b.next;
        }
      } else if (u.tag === 18) {
        if (m = u.return, m === null) throw Error(o(341));
        m.lanes |= n, s = m.alternate, s !== null && (s.lanes |= n), Go(m, n, e), m = null;
      } else
        u.tag === 13 && u.memoizedState !== null && u.memoizedState.dehydrated === null ? (u.lanes |= n, m = u.alternate, m !== null && (m.lanes |= n), Go(
          u.return,
          n,
          e
        ), m = u.child, m = m !== null ? m.sibling : null) : m = u.child;
      if (m !== null) m.return = u;
      else
        for (m = u; m !== null; ) {
          if (m === e) {
            m = null;
            break;
          }
          if (u = m.sibling, u !== null) {
            u.return = m.return, m = u;
            break;
          }
          m = m.return;
        }
      u = m;
    }
  }
  function bl(e, t, n, l) {
    e = null;
    for (var u = t, s = !1; u !== null; ) {
      if (!s) {
        if ((u.flags & 524288) !== 0) s = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var m = u.alternate;
        if (m === null) throw Error(o(387));
        if (m = m.memoizedProps, m !== null) {
          var b = u.type;
          en(u.pendingProps.value, m.value) || (e !== null ? e.push(b) : e = [b]);
        }
      } else if (u === ye.current) {
        if (m = u.alternate, m === null) throw Error(o(387));
        m.memoizedState.memoizedState !== u.memoizedState.memoizedState && (e !== null ? e.push(zr) : e = [zr]);
      }
      u = u.return;
    }
    return e !== null && vc(
      t,
      e,
      n,
      l
    ), t.flags |= 262144, e !== null;
  }
  function Xo(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!en(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Sl(e) {
    vl = e, pa = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Tt(e) {
    return Zh(vl, e);
  }
  function Qo(e, t) {
    return vl === null && Sl(e), Zh(e, t);
  }
  function Zh(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, pa === null) {
      if (e === null) throw Error(o(308));
      pa = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else pa = pa.next = t;
    return n;
  }
  var fS = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(n, l) {
        e.push(l);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(n) {
        return n();
      });
    };
  }, dS = a.unstable_scheduleCallback, mS = a.unstable_NormalPriority, ct = {
    $$typeof: te,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function bc() {
    return {
      controller: new fS(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function hi(e) {
    e.refCount--, e.refCount === 0 && dS(mS, function() {
      e.controller.abort();
    });
  }
  function Ih(e, t) {
    if ((e.pendingLanes & 4194048) !== 0) {
      var n = e.transitionTypes;
      for (n === null && (n = e.transitionTypes = []), e = 0; e < t.length; e++) {
        var l = t[e];
        n.indexOf(l) === -1 && n.push(l);
      }
    }
  }
  var pi = null;
  function hS(e) {
    var t = e.transitionTypes;
    return e.transitionTypes = null, t;
  }
  var gi = null, Sc = 0, El = 0, rr = null;
  function pS(e, t) {
    if (gi === null) {
      var n = gi = [];
      Sc = 0, El = Hf(), rr = {
        status: "pending",
        value: void 0,
        then: function(l) {
          n.push(l);
        }
      };
    }
    return Sc++, t.then(Ph, Ph), t;
  }
  function Ph() {
    if (--Sc === 0 && (pi = null, gi !== null)) {
      rr !== null && (rr.status = "fulfilled");
      var e = gi;
      gi = null, El = 0, rr = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function gS(e, t) {
    var n = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        n.push(u);
      }
    };
    return e.then(
      function() {
        l.status = "fulfilled", l.value = t;
        for (var u = 0; u < n.length; u++) (0, n[u])(t);
      },
      function(u) {
        for (l.status = "rejected", l.reason = u, u = 0; u < n.length; u++)
          (0, n[u])(void 0);
      }
    ), l;
  }
  var Jh = ie.S;
  ie.S = function(e, t) {
    if (Vg = Pt(), typeof t == "object" && t !== null && typeof t.then == "function" && pS(e, t), pi !== null)
      for (var n = Cr; n !== null; )
        Ih(n, pi), n = n.next;
    if (n = e.types, n !== null) {
      for (var l = Cr; l !== null; )
        Ih(l, n), l = l.next;
      if (El !== 0) {
        l = pi, l === null && (l = pi = []);
        for (var u = 0; u < n.length; u++) {
          var s = n[u];
          l.indexOf(s) === -1 && l.push(s);
        }
      }
    }
    Jh !== null && Jh(e, t);
  };
  var xl = Dt(null);
  function Ec() {
    var e = xl.current;
    return e !== null ? e : Xe.pooledCache;
  }
  function Ko(e, t) {
    t === null ? be(xl, xl.current) : be(xl, t.pool);
  }
  function Fh() {
    var e = Ec();
    return e === null ? null : { parent: ct._currentValue, pool: e };
  }
  var ir = Error(o(460)), xc = Error(o(474)), Zo = Error(o(542)), Io = { then: function() {
  } };
  function Wh(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function ep(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Ln, Ln), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, np(e), e === void 0 && !("reason" in t) ? Error(o(600)) : e;
      default:
        if (typeof t.status == "string") t.then(Ln, Ln);
        else {
          if (e = Xe, e !== null && 100 < e.shellSuspendCounter)
            throw Error(o(482));
          e = t, e.status = "pending", e.then(
            function(l) {
              if (t.status === "pending") {
                var u = t;
                u.status = "fulfilled", u.value = l;
              }
            },
            function(l) {
              if (t.status === "pending") {
                var u = t;
                u.status = "rejected", u.reason = l;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, np(e), e;
        }
        throw Tl = t, ir;
    }
  }
  function Cl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Tl = n, ir) : n;
    }
  }
  var Tl = null;
  function tp() {
    if (Tl === null) throw Error(o(459));
    var e = Tl;
    return Tl = null, e;
  }
  function np(e) {
    if (e === ir || e === Zo)
      throw Error(o(483));
  }
  var or = null, yi = 0;
  function Po(e) {
    var t = yi;
    return yi += 1, or === null && (or = []), ep(or, e, t);
  }
  function Ua(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Jo(e, t) {
    throw t.$$typeof === P ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function ap(e) {
    function t(D, z) {
      if (e) {
        var H = D.deletions;
        H === null ? (D.deletions = [z], D.flags |= 16) : H.push(z);
      }
    }
    function n(D, z) {
      if (!e) return null;
      for (; z !== null; )
        t(D, z), z = z.sibling;
      return null;
    }
    function l(D) {
      for (var z = /* @__PURE__ */ new Map(); D !== null; )
        D.key === null ? z.set(D.index, D) : z.set(D.key, D), D = D.sibling;
      return z;
    }
    function u(D, z) {
      return D = ma(D, z), D.index = 0, D.sibling = null, D;
    }
    function s(D, z, H) {
      return D.index = H, e ? (H = D.alternate, H !== null ? (H = H.index, H < z ? (D.flags |= 2, z) : H) : (D.flags |= 134217730, z)) : (D.flags |= 1048576, z);
    }
    function m(D) {
      return e && D.alternate === null && (D.flags |= 134217730), D;
    }
    function b(D, z, H, Z) {
      return z === null || z.tag !== 6 ? (z = dc(H, D.mode, Z), z.return = D, z) : (z = u(z, H), z.return = D, z);
    }
    function O(D, z, H, Z) {
      var ue = H.type;
      return ue === G ? (D = $(
        D,
        z,
        H.props.children,
        Z,
        H.key
      ), Ua(D, H), D) : z !== null && (z.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === le && Cl(ue) === z.type) ? (z = u(z, H.props), Ua(z, H), z.return = D, z) : (z = $o(
        H.type,
        H.key,
        H.props,
        null,
        D.mode,
        Z
      ), Ua(z, H), z.return = D, z);
    }
    function B(D, z, H, Z) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== H.containerInfo || z.stateNode.implementation !== H.implementation ? (z = mc(H, D.mode, Z), z.return = D, z) : (z = u(z, H.children || []), z.return = D, z);
    }
    function $(D, z, H, Z, ue) {
      return z === null || z.tag !== 7 ? (z = gl(
        H,
        D.mode,
        Z,
        ue
      ), z.return = D, z) : (z = u(z, H), z.return = D, z);
    }
    function I(D, z, H) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = dc(
          "" + z,
          D.mode,
          H
        ), z.return = D, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case J:
            return H = $o(
              z.type,
              z.key,
              z.props,
              null,
              D.mode,
              H
            ), Ua(H, z), H.return = D, H;
          case S:
            return z = mc(
              z,
              D.mode,
              H
            ), z.return = D, z;
          case le:
            return z = Cl(z), I(D, z, H);
        }
        if (Oe(z) || fe(z))
          return z = gl(
            z,
            D.mode,
            H,
            null
          ), z.return = D, z;
        if (typeof z.then == "function")
          return I(D, Po(z), H);
        if (z.$$typeof === te)
          return I(
            D,
            Qo(D, z),
            H
          );
        Jo(D, z);
      }
      return null;
    }
    function N(D, z, H, Z) {
      var ue = z !== null ? z.key : null;
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return ue !== null ? null : b(D, z, "" + H, Z);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case J:
            return H.key === ue ? O(D, z, H, Z) : null;
          case S:
            return H.key === ue ? B(D, z, H, Z) : null;
          case le:
            return H = Cl(H), N(D, z, H, Z);
        }
        if (Oe(H) || fe(H))
          return ue !== null ? null : $(D, z, H, Z, null);
        if (typeof H.then == "function")
          return N(
            D,
            z,
            Po(H),
            Z
          );
        if (H.$$typeof === te)
          return N(
            D,
            z,
            Qo(D, H),
            Z
          );
        Jo(D, H);
      }
      return null;
    }
    function L(D, z, H, Z, ue) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint")
        return D = D.get(H) || null, b(z, D, "" + Z, ue);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case J:
            return D = D.get(
              Z.key === null ? H : Z.key
            ) || null, O(z, D, Z, ue);
          case S:
            return D = D.get(
              Z.key === null ? H : Z.key
            ) || null, B(z, D, Z, ue);
          case le:
            return Z = Cl(Z), L(
              D,
              z,
              H,
              Z,
              ue
            );
        }
        if (Oe(Z) || fe(Z))
          return D = D.get(H) || null, $(z, D, Z, ue, null);
        if (typeof Z.then == "function")
          return L(
            D,
            z,
            H,
            Po(Z),
            ue
          );
        if (Z.$$typeof === te)
          return L(
            D,
            z,
            H,
            Qo(z, Z),
            ue
          );
        Jo(z, Z);
      }
      return null;
    }
    function re(D, z, H, Z) {
      for (var ue = null, Me = null, de = z, pe = z = 0, mt = null; de !== null && pe < H.length; pe++) {
        de.index > pe ? (mt = de, de = null) : mt = de.sibling;
        var Ne = N(
          D,
          de,
          H[pe],
          Z
        );
        if (Ne === null) {
          de === null && (de = mt);
          break;
        }
        e && de && Ne.alternate === null && t(D, de), z = s(Ne, z, pe), Me === null ? ue = Ne : Me.sibling = Ne, Me = Ne, de = mt;
      }
      if (pe === H.length)
        return n(D, de), Te && ha(D, pe), ue;
      if (de === null) {
        for (; pe < H.length; pe++)
          de = I(D, H[pe], Z), de !== null && (z = s(
            de,
            z,
            pe
          ), Me === null ? ue = de : Me.sibling = de, Me = de);
        return Te && ha(D, pe), ue;
      }
      for (de = l(de); pe < H.length; pe++)
        mt = L(
          de,
          D,
          pe,
          H[pe],
          Z
        ), mt !== null && (e && (Ne = mt.alternate, Ne !== null && de.delete(Ne.key === null ? pe : Ne.key)), z = s(
          mt,
          z,
          pe
        ), Me === null ? ue = mt : Me.sibling = mt, Me = mt);
      return e && de.forEach(function(el) {
        return t(D, el);
      }), Te && ha(D, pe), ue;
    }
    function ce(D, z, H, Z) {
      if (H == null) throw Error(o(151));
      for (var ue = null, Me = null, de = z, pe = z = 0, mt = null, Ne = H.next(); de !== null && !Ne.done; pe++, Ne = H.next()) {
        de.index > pe ? (mt = de, de = null) : mt = de.sibling;
        var el = N(D, de, Ne.value, Z);
        if (el === null) {
          de === null && (de = mt);
          break;
        }
        e && de && el.alternate === null && t(D, de), z = s(el, z, pe), Me === null ? ue = el : Me.sibling = el, Me = el, de = mt;
      }
      if (Ne.done)
        return n(D, de), Te && ha(D, pe), ue;
      if (de === null) {
        for (; !Ne.done; pe++, Ne = H.next())
          Ne = I(D, Ne.value, Z), Ne !== null && (z = s(Ne, z, pe), Me === null ? ue = Ne : Me.sibling = Ne, Me = Ne);
        return Te && ha(D, pe), ue;
      }
      for (de = l(de); !Ne.done; pe++, Ne = H.next())
        Ne = L(de, D, pe, Ne.value, Z), Ne !== null && (e && (mt = Ne.alternate, mt !== null && de.delete(
          mt.key === null ? pe : mt.key
        )), z = s(Ne, z, pe), Me === null ? ue = Ne : Me.sibling = Ne, Me = Ne);
      return e && de.forEach(function(PE) {
        return t(D, PE);
      }), Te && ha(D, pe), ue;
    }
    function xe(D, z, H, Z) {
      if (typeof H == "object" && H !== null && H.type === G && H.key === null && H.props.ref === void 0 && (H = H.props.children), typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case J:
            e: {
              for (var ue = H.key; z !== null; ) {
                if (z.key === ue) {
                  if (ue = H.type, ue === G) {
                    if (z.tag === 7) {
                      n(
                        D,
                        z.sibling
                      ), Z = u(
                        z,
                        H.props.children
                      ), Ua(Z, H), Z.return = D, D = Z;
                      break e;
                    }
                  } else if (z.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === le && Cl(ue) === z.type) {
                    n(
                      D,
                      z.sibling
                    ), Z = u(z, H.props), Ua(Z, H), Z.return = D, D = Z;
                    break e;
                  }
                  n(D, z);
                  break;
                } else t(D, z);
                z = z.sibling;
              }
              H.type === G ? (Z = gl(
                H.props.children,
                D.mode,
                Z,
                H.key
              ), Ua(Z, H), Z.return = D, D = Z) : (Z = $o(
                H.type,
                H.key,
                H.props,
                null,
                D.mode,
                Z
              ), Ua(Z, H), Z.return = D, D = Z);
            }
            return m(D);
          case S:
            e: {
              for (ue = H.key; z !== null; ) {
                if (z.key === ue)
                  if (z.tag === 4 && z.stateNode.containerInfo === H.containerInfo && z.stateNode.implementation === H.implementation) {
                    n(
                      D,
                      z.sibling
                    ), Z = u(z, H.children || []), Z.return = D, D = Z;
                    break e;
                  } else {
                    n(D, z);
                    break;
                  }
                else t(D, z);
                z = z.sibling;
              }
              Z = mc(H, D.mode, Z), Z.return = D, D = Z;
            }
            return m(D);
          case le:
            return H = Cl(H), xe(
              D,
              z,
              H,
              Z
            );
        }
        if (Oe(H))
          return re(
            D,
            z,
            H,
            Z
          );
        if (fe(H)) {
          if (ue = fe(H), typeof ue != "function") throw Error(o(150));
          return H = ue.call(H), ce(
            D,
            z,
            H,
            Z
          );
        }
        if (typeof H.then == "function")
          return xe(
            D,
            z,
            Po(H),
            Z
          );
        if (H.$$typeof === te)
          return xe(
            D,
            z,
            Qo(D, H),
            Z
          );
        Jo(D, H);
      }
      return typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint" ? (H = "" + H, z !== null && z.tag === 6 ? (n(D, z.sibling), Z = u(z, H), Z.return = D, D = Z) : (n(D, z), Z = dc(H, D.mode, Z), Z.return = D, D = Z), m(D)) : n(D, z);
    }
    return function(D, z, H, Z) {
      try {
        yi = 0;
        var ue = xe(
          D,
          z,
          H,
          Z
        );
        return or = null, ue;
      } catch (de) {
        if (de === ir || de === Zo) throw de;
        var Me = qt(29, de, null, D.mode);
        return Me.lanes = Z, Me.return = D, Me;
      } finally {
      }
    };
  }
  var Rl = ap(!0), lp = ap(!1), ja = !1;
  function Cc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Tc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Ha(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function La(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (De & 2) !== 0) {
      var u = l.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t, t = ko(e), Yh(e, null, n), t;
    }
    return Lo(e, l, t, n), ko(e);
  }
  function vi(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, Xm(e, n);
    }
  }
  function Rc(e, t) {
    var n = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, n === l)) {
      var u = null, s = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var m = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          s === null ? u = s = m : s = s.next = m, n = n.next;
        } while (n !== null);
        s === null ? u = s = t : s = s.next = t;
      } else u = s = t;
      n = {
        baseState: l.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: s,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var Oc = !1;
  function bi() {
    if (Oc) {
      var e = rr;
      if (e !== null) throw e;
    }
  }
  function Si(e, t, n, l) {
    Oc = !1;
    var u = e.updateQueue;
    ja = !1;
    var s = u.firstBaseUpdate, m = u.lastBaseUpdate, b = u.shared.pending;
    if (b !== null) {
      u.shared.pending = null;
      var O = b, B = O.next;
      O.next = null, m === null ? s = B : m.next = B, m = O;
      var $ = e.alternate;
      $ !== null && ($ = $.updateQueue, b = $.lastBaseUpdate, b !== m && (b === null ? $.firstBaseUpdate = B : b.next = B, $.lastBaseUpdate = O));
    }
    if (s !== null) {
      var I = u.baseState;
      m = 0, $ = B = O = null, b = s;
      do {
        var N = b.lane & -536870913, L = N !== b.lane;
        if (L ? (ze & N) === N : (l & N) === N) {
          N !== 0 && N === El && (Oc = !0), $ !== null && ($ = $.next = {
            lane: 0,
            tag: b.tag,
            payload: b.payload,
            callback: null,
            next: null
          });
          e: {
            var re = e, ce = b;
            N = t;
            var xe = n;
            switch (ce.tag) {
              case 1:
                if (re = ce.payload, typeof re == "function") {
                  I = re.call(xe, I, N);
                  break e;
                }
                I = re;
                break e;
              case 3:
                re.flags = re.flags & -65537 | 128;
              case 0:
                if (re = ce.payload, N = typeof re == "function" ? re.call(xe, I, N) : re, N == null) break e;
                I = q({}, I, N);
                break e;
              case 2:
                ja = !0;
            }
          }
          N = b.callback, N !== null && (e.flags |= 64, L && (e.flags |= 8192), L = u.callbacks, L === null ? u.callbacks = [N] : L.push(N));
        } else
          L = {
            lane: N,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null
          }, $ === null ? (B = $ = L, O = I) : $ = $.next = L, m |= N;
        if (b = b.next, b === null) {
          if (b = u.shared.pending, b === null)
            break;
          L = b, b = L.next, L.next = null, u.lastBaseUpdate = L, u.shared.pending = null;
        }
      } while (!0);
      $ === null && (O = I), u.baseState = O, u.firstBaseUpdate = B, u.lastBaseUpdate = $, s === null && (u.shared.lanes = 0), Xa |= m, e.lanes = m, e.memoizedState = I;
    }
  }
  function rp(e, t) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(t);
  }
  function ip(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        rp(n[e], t);
  }
  var ka = Dt(null), Fo = Dt(0);
  function op(e, t) {
    e = Ea, be(Fo, e), be(ka, t), Ea = e | t.baseLanes;
  }
  function wc() {
    be(Fo, Ea), be(ka, ka.current);
  }
  function Ac() {
    Ea = Fo.current, Ie(ka), Ie(Fo);
  }
  var Rt = Dt(null), Nt = null;
  function $a(e) {
    var t = e.alternate;
    be(Ot, Ot.current & 1), be(Rt, e), Nt === null && (t === null || ka.current !== null || t.memoizedState !== null) && (Nt = e);
  }
  function zc(e) {
    be(Ot, Ot.current), be(Rt, e), Nt === null && (Nt = e);
  }
  function up(e) {
    e.tag === 22 ? (be(Ot, Ot.current), be(Rt, e), Nt === null && (Nt = e)) : Ya();
  }
  function Ya() {
    be(Ot, Ot.current), be(Rt, Rt.current);
  }
  function tn(e) {
    Ie(Rt), Nt === e && (Nt = null), Ie(Ot);
  }
  var Ot = Dt(0);
  function Ei(e, t) {
    be(Rt, Rt.current), be(Ot, t);
  }
  function Mc(e) {
    Ie(Ot), Ie(Rt), Nt === e && (Nt = null);
  }
  function Wo(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Wf(n) || ed(n)))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== "independent") {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var ya = 0, Ee = null, Ve = null, ft = null, eu = !1, ur = !1, Ol = !1, tu = 0, xi = 0, sr = null, yS = 0;
  function lt() {
    throw Error(o(321));
  }
  function Nc(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!en(e[n], t[n])) return !1;
    return !0;
  }
  function _c(e, t, n, l, u, s) {
    return ya = s, Ee = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ie.H = e === null || e.memoizedState === null ? Xp : Qp, Ol = !1, s = n(l, u), Ol = !1, ur && (s = cp(
      t,
      n,
      l,
      u
    )), sp(e), s;
  }
  function sp(e) {
    ie.H = uu;
    var t = Ve !== null && Ve.next !== null;
    if (ya = 0, ft = Ve = Ee = null, eu = !1, xi = 0, sr = null, t) throw Error(o(300));
    e === null || dt || (e = e.dependencies, e !== null && Xo(e) && (dt = !0));
  }
  function cp(e, t, n, l) {
    Ee = e;
    var u = 0;
    do {
      if (ur && (sr = null), xi = 0, ur = !1, 25 <= u) throw Error(o(301));
      if (u += 1, ft = Ve = null, e.updateQueue != null) {
        var s = e.updateQueue;
        s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
      }
      ie.H = RS, s = t(n, l);
    } while (ur);
    return s;
  }
  function vS() {
    var e = ie.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Ci(t) : t, e = e.useState()[0], (Ve !== null ? Ve.memoizedState : null) !== e && (Ee.flags |= 1024), t;
  }
  function Dc() {
    var e = tu !== 0;
    return tu = 0, e;
  }
  function Bc(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Uc(e) {
    if (eu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      eu = !1;
    }
    ya = 0, ft = Ve = Ee = null, ur = !1, xi = tu = 0, sr = null;
  }
  function Ut() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ft === null ? Ee.memoizedState = ft = e : ft = ft.next = e, ft;
  }
  function ut() {
    if (Ve === null) {
      var e = Ee.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ve.next;
    var t = ft === null ? Ee.memoizedState : ft.next;
    if (t !== null)
      ft = t, Ve = e;
    else {
      if (e === null)
        throw Ee.alternate === null ? Error(o(467)) : Error(o(310));
      Ve = e, e = {
        memoizedState: Ve.memoizedState,
        baseState: Ve.baseState,
        baseQueue: Ve.baseQueue,
        queue: Ve.queue,
        next: null
      }, ft === null ? Ee.memoizedState = ft = e : ft = ft.next = e;
    }
    return ft;
  }
  function nu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ci(e) {
    var t = xi;
    return xi += 1, sr === null && (sr = []), e = ep(sr, e, t), t = Ee, (ft === null ? t.memoizedState : ft.next) === null && (t = t.alternate, ie.H = t === null || t.memoizedState === null ? Xp : Qp), e;
  }
  function au(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ci(e);
      if (e.$$typeof === F) return;
      if (e.$$typeof === te) return Tt(e);
    }
    throw Error(o(438, String(e)));
  }
  function jc(e) {
    var t = null, n = Ee.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var l = Ee.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = nu(), Ee.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++)
        n[l] = et;
    return t.index++, n;
  }
  function va(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function lu(e) {
    var t = ut();
    return Hc(t, Ve, e);
  }
  function Hc(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = n;
    var u = e.baseQueue, s = l.pending;
    if (s !== null) {
      if (u !== null) {
        var m = u.next;
        u.next = s.next, s.next = m;
      }
      t.baseQueue = u = s, l.pending = null;
    }
    if (s = e.baseState, u === null) e.memoizedState = s;
    else {
      t = u.next;
      var b = m = null, O = null, B = t, $ = !1;
      do {
        var I = B.lane & -536870913;
        if (I !== B.lane ? (ze & I) === I : (ya & I) === I) {
          var N = B.revertLane;
          if (N === 0)
            O !== null && (O = O.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null
            }), I === El && ($ = !0);
          else if ((ya & N) === N) {
            B = B.next, N === El && ($ = !0);
            continue;
          } else
            I = {
              lane: 0,
              revertLane: B.revertLane,
              gesture: null,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null
            }, O === null ? (b = O = I, m = s) : O = O.next = I, Ee.lanes |= N, Xa |= N;
          I = B.action, Ol && n(s, I), s = B.hasEagerState ? B.eagerState : n(s, I);
        } else
          N = {
            lane: I,
            revertLane: B.revertLane,
            gesture: B.gesture,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null
          }, O === null ? (b = O = N, m = s) : O = O.next = N, Ee.lanes |= I, Xa |= I;
        B = B.next;
      } while (B !== null && B !== t);
      if (O === null ? m = s : O.next = b, !en(s, e.memoizedState) && (dt = !0, $ && (n = rr, n !== null)))
        throw n;
      e.memoizedState = s, e.baseState = m, e.baseQueue = O, l.lastRenderedState = s;
    }
    return u === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Lc(e) {
    var t = ut(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch, u = n.pending, s = t.memoizedState;
    if (u !== null) {
      n.pending = null;
      var m = u = u.next;
      do
        s = e(s, m.action), m = m.next;
      while (m !== u);
      en(s, t.memoizedState) || (dt = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
    }
    return [s, l];
  }
  function fp(e, t, n) {
    var l = Ee, u = ut(), s = Te;
    if (s) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else n = t();
    var m = !en(
      (Ve || u).memoizedState,
      n
    );
    if (m && (u.memoizedState = n, dt = !0), u = u.queue, Yc(hp.bind(null, l, u, e), [
      e
    ]), e = u.getSnapshot !== t || m || ft !== null && (ft.memoizedState.tag & 1) !== 0, cr(
      e ? 9 : 8,
      { destroy: void 0 },
      mp.bind(null, l, u, n, t),
      null
    ), e) {
      if (l.flags |= 2048, Xe === null) throw Error(o(349));
      s || (ya & 127) !== 0 || dp(l, t, n);
    }
    return n;
  }
  function dp(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ee.updateQueue, t === null ? (t = nu(), Ee.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function mp(e, t, n, l) {
    t.value = n, t.getSnapshot = l, pp(t) && gp(e);
  }
  function hp(e, t, n) {
    return n(function() {
      pp(t) && gp(e);
    });
  }
  function pp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !en(e, n);
    } catch {
      return !0;
    }
  }
  function gp(e) {
    var t = pl(e, 2);
    t !== null && Qt(t, e, 2);
  }
  function kc(e) {
    var t = Ut();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), Ol) {
        Aa(!0);
        try {
          n();
        } finally {
          Aa(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: va,
      lastRenderedState: e
    }, t;
  }
  function yp(e, t, n, l) {
    return e.baseState = n, Hc(
      e,
      Ve,
      typeof l == "function" ? l : va
    );
  }
  function bS(e, t, n, l, u) {
    if (ou(e)) throw Error(o(485));
    if (e = t.action, e !== null) {
      var s = {
        payload: u,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(m) {
          s.listeners.push(m);
        }
      };
      ie.T !== null ? n(!0) : s.isTransition = !1, l(s), n = t.pending, n === null ? (s.next = t.pending = s, vp(t, s)) : (s.next = n.next, t.pending = n.next = s);
    }
  }
  function vp(e, t) {
    var n = t.action, l = t.payload, u = e.state;
    if (t.isTransition) {
      var s = ie.T, m = {};
      m.types = s !== null ? s.types : null, ie.T = m;
      try {
        var b = n(u, l), O = ie.S;
        O !== null && O(m, b), bp(e, t, b);
      } catch (B) {
        $c(e, t, B);
      } finally {
        s !== null && m.types !== null && (s.types = m.types), ie.T = s;
      }
    } else
      try {
        s = n(u, l), bp(e, t, s);
      } catch (B) {
        $c(e, t, B);
      }
  }
  function bp(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(l) {
        Sp(e, t, l);
      },
      function(l) {
        return $c(e, t, l);
      }
    ) : Sp(e, t, n);
  }
  function Sp(e, t, n) {
    t.status = "fulfilled", t.value = n, Ep(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, vp(e, n)));
  }
  function $c(e, t, n) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = n, Ep(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function Ep(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function xp(e, t) {
    return t;
  }
  function Cp(e, t) {
    if (Te) {
      var n = Xe.formState;
      if (n !== null) {
        e: {
          var l = Ee;
          if (Te) {
            if (Pe) {
              t: {
                for (var u = Pe, s = Sn; u.nodeType !== 8; ) {
                  if (!s) {
                    u = null;
                    break t;
                  }
                  if (u = xn(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break t;
                  }
                }
                s = u.data, u = s === "F!" || s === "F" ? u : null;
              }
              if (u) {
                Pe = xn(
                  u.nextSibling
                ), l = u.data === "F!";
                break e;
              }
            }
            Da(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return n = Ut(), n.memoizedState = n.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: xp,
      lastRenderedState: t
    }, n.queue = l, n = qp.bind(
      null,
      Ee,
      l
    ), l.dispatch = n, l = kc(!1), s = Qc.bind(
      null,
      Ee,
      !1,
      l.queue
    ), l = Ut(), u = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = u, n = bS.bind(
      null,
      Ee,
      u,
      s,
      n
    ), u.dispatch = n, l.memoizedState = e, [t, n, !1];
  }
  function Tp(e) {
    var t = ut();
    return Rp(t, Ve, e);
  }
  function Rp(e, t, n) {
    if (t = Hc(
      e,
      t,
      xp
    )[0], e = lu(va)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = Ci(t);
      } catch (m) {
        throw m === ir ? Zo : m;
      }
    else l = t;
    t = ut();
    var u = t.queue, s = u.dispatch;
    return n !== t.memoizedState && (Ee.flags |= 2048, cr(
      9,
      { destroy: void 0 },
      SS.bind(null, u, n),
      null
    )), [l, s, e];
  }
  function SS(e, t) {
    e.action = t;
  }
  function Op(e) {
    var t = ut(), n = Ve;
    if (n !== null)
      return Rp(t, n, e);
    ut(), t = t.memoizedState, n = ut();
    var l = n.queue.dispatch;
    return n.memoizedState = e, [t, l, !1];
  }
  function cr(e, t, n, l) {
    return e = { tag: e, create: n, deps: l, inst: t, next: null }, t = Ee.updateQueue, t === null && (t = nu(), Ee.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (l = n.next, n.next = e, e.next = l, t.lastEffect = e), e;
  }
  function wp() {
    return ut().memoizedState;
  }
  function ru(e, t, n, l) {
    var u = Ut();
    Ee.flags |= e, u.memoizedState = cr(
      1 | t,
      { destroy: void 0 },
      n,
      l === void 0 ? null : l
    );
  }
  function iu(e, t, n, l) {
    var u = ut();
    l = l === void 0 ? null : l;
    var s = u.memoizedState.inst;
    Ve !== null && l !== null && Nc(l, Ve.memoizedState.deps) ? u.memoizedState = cr(t, s, n, l) : (Ee.flags |= e, u.memoizedState = cr(
      1 | t,
      s,
      n,
      l
    ));
  }
  function Ap(e, t) {
    ru(8390656, 8, e, t);
  }
  function Yc(e, t) {
    iu(2048, 8, e, t);
  }
  function ES(e) {
    Ee.flags |= 4;
    var t = Ee.updateQueue;
    if (t === null)
      t = nu(), Ee.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function zp(e) {
    var t = ut().memoizedState;
    return ES({ ref: t, nextImpl: e }), function() {
      if ((De & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Mp(e, t) {
    return iu(4, 2, e, t);
  }
  function Np(e, t) {
    return iu(4, 4, e, t);
  }
  function _p(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function() {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function Dp(e, t, n) {
    n = n != null ? n.concat([e]) : null, iu(4, 4, _p.bind(null, t, e), n);
  }
  function qc() {
  }
  function Bp(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && Nc(t, l[1]) ? l[0] : (n.memoizedState = [e, t], e);
  }
  function Up(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && Nc(t, l[1]))
      return l[0];
    if (l = e(), Ol) {
      Aa(!0);
      try {
        e();
      } finally {
        Aa(!1);
      }
    }
    return n.memoizedState = [l, t], l;
  }
  function Vc(e, t, n) {
    return n === void 0 || (ya & 1073741824) !== 0 && (ze & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = Xg(), Ee.lanes |= e, Xa |= e, n);
  }
  function jp(e, t, n, l) {
    return en(n, t) ? n : ka.current !== null ? (e = Vc(e, n, l), en(e, t) || (dt = !0), e) : (ya & 106) === 0 || (ya & 1073741824) !== 0 && (ze & 261930) === 0 ? (dt = !0, e.memoizedState = n) : (e = Xg(), Ee.lanes |= e, Xa |= e, t);
  }
  function Hp(e, t, n, l, u) {
    var s = me.p;
    me.p = s !== 0 && 8 > s ? s : 8;
    var m = ie.T, b = {};
    b.types = m !== null ? m.types : null, ie.T = b, Qc(e, !1, t, n);
    try {
      var O = u(), B = ie.S;
      if (B !== null && B(b, O), O !== null && typeof O == "object" && typeof O.then == "function") {
        var $ = gS(
          O,
          l
        );
        Ti(
          e,
          t,
          $,
          rn(e)
        );
      } else
        Ti(
          e,
          t,
          l,
          rn(e)
        );
    } catch (I) {
      Ti(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: I },
        rn()
      );
    } finally {
      me.p = s, m !== null && b.types !== null && (m.types = b.types), ie.T = m;
    }
  }
  function xS() {
  }
  function Gc(e, t, n, l) {
    if (e.tag !== 5) throw Error(o(476));
    var u = Lp(e).queue;
    Hp(
      e,
      u,
      t,
      kt,
      n === null ? xS : function() {
        return kp(e), n(l);
      }
    );
  }
  function Lp(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: kt,
      baseState: kt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: va,
        lastRenderedState: kt
      },
      next: null
    };
    var n = {};
    return t.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: va,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function kp(e) {
    var t = Lp(e);
    t.next === null && (t = e.alternate.memoizedState), Ti(
      e,
      t.next.queue,
      {},
      rn()
    );
  }
  function Xc() {
    return Tt(zr);
  }
  function $p() {
    return ut().memoizedState;
  }
  function Yp() {
    return ut().memoizedState;
  }
  function CS(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = rn();
          e = Ha(n);
          var l = La(t, e, n);
          l !== null && (Qt(l, t, n), vi(l, t, n)), t = { cache: bc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function TS(e, t, n) {
    var l = rn();
    n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ou(e) ? Vp(t, n) : (n = cc(e, t, n, l), n !== null && (Qt(n, e, l), Gp(n, t, l)));
  }
  function qp(e, t, n) {
    var l = rn();
    Ti(e, t, n, l);
  }
  function Ti(e, t, n, l) {
    var u = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ou(e)) Vp(t, u);
    else {
      var s = e.alternate;
      if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null))
        try {
          var m = t.lastRenderedState, b = s(m, n);
          if (u.hasEagerState = !0, u.eagerState = b, en(b, m))
            return Lo(e, t, u, 0), Xe === null && Ho(), !1;
        } catch {
        } finally {
        }
      if (n = cc(e, t, u, l), n !== null)
        return Qt(n, e, l), Gp(n, t, l), !0;
    }
    return !1;
  }
  function Qc(e, t, n, l) {
    if (l = {
      lane: 2,
      revertLane: Hf(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ou(e)) {
      if (t) throw Error(o(479));
    } else
      t = cc(
        e,
        n,
        l,
        2
      ), t !== null && Qt(t, e, 2);
  }
  function ou(e) {
    var t = e.alternate;
    return e === Ee || t !== null && t === Ee;
  }
  function Vp(e, t) {
    ur = eu = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Gp(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, Xm(e, n);
    }
  }
  var uu = {
    readContext: Tt,
    use: au,
    useCallback: lt,
    useContext: lt,
    useEffect: lt,
    useImperativeHandle: lt,
    useLayoutEffect: lt,
    useInsertionEffect: lt,
    useMemo: lt,
    useReducer: lt,
    useRef: lt,
    useState: lt,
    useDebugValue: lt,
    useDeferredValue: lt,
    useTransition: lt,
    useSyncExternalStore: lt,
    useId: lt,
    useHostTransitionStatus: lt,
    useFormState: lt,
    useActionState: lt,
    useOptimistic: lt,
    useMemoCache: lt,
    useCacheRefresh: lt,
    useEffectEvent: lt
  }, Xp = {
    readContext: Tt,
    use: au,
    useCallback: function(e, t) {
      return Ut().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Tt,
    useEffect: Ap,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, ru(
        4194308,
        4,
        _p.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return ru(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      ru(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = Ut();
      t = t === void 0 ? null : t;
      var l = e();
      if (Ol) {
        Aa(!0);
        try {
          e();
        } finally {
          Aa(!1);
        }
      }
      return n.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, n) {
      var l = Ut();
      if (n !== void 0) {
        var u = n(t);
        if (Ol) {
          Aa(!0);
          try {
            n(t);
          } finally {
            Aa(!1);
          }
        }
      } else u = t;
      return l.memoizedState = l.baseState = u, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      }, l.queue = e, e = e.dispatch = TS.bind(
        null,
        Ee,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = Ut();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = kc(e);
      var t = e.queue, n = qp.bind(null, Ee, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: qc,
    useDeferredValue: function(e, t) {
      var n = Ut();
      return Vc(n, e, t);
    },
    useTransition: function() {
      var e = kc(!1);
      return e = Hp.bind(
        null,
        Ee,
        e.queue,
        !0,
        !1
      ), Ut().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var l = Ee, u = Ut();
      if (Te) {
        if (n === void 0)
          throw Error(o(407));
        n = n();
      } else {
        if (n = t(), Xe === null)
          throw Error(o(349));
        (ze & 127) !== 0 || dp(l, t, n);
      }
      u.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return u.queue = s, Ap(hp.bind(null, l, s, e), [
        e
      ]), l.flags |= 2048, cr(
        9,
        { destroy: void 0 },
        mp.bind(
          null,
          l,
          s,
          n,
          t
        ),
        null
      ), n;
    },
    useId: function() {
      var e = Ut(), t = Xe.identifierPrefix;
      if (Te) {
        var n = $n, l = kn;
        n = (l & ~(1 << 32 - Ft(l) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = tu++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = yS++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Xc,
    useFormState: Cp,
    useActionState: Cp,
    useOptimistic: function(e) {
      var t = Ut();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = Qc.bind(
        null,
        Ee,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: jc,
    useCacheRefresh: function() {
      return Ut().memoizedState = CS.bind(
        null,
        Ee
      );
    },
    useEffectEvent: function(e) {
      var t = Ut(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((De & 2) !== 0)
          throw Error(o(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Qp = {
    readContext: Tt,
    use: au,
    useCallback: Bp,
    useContext: Tt,
    useEffect: Yc,
    useImperativeHandle: Dp,
    useInsertionEffect: Mp,
    useLayoutEffect: Np,
    useMemo: Up,
    useReducer: lu,
    useRef: wp,
    useState: function() {
      return lu(va);
    },
    useDebugValue: qc,
    useDeferredValue: function(e, t) {
      var n = ut();
      return jp(
        n,
        Ve.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = lu(va)[0], t = ut().memoizedState;
      return [
        typeof e == "boolean" ? e : Ci(e),
        t
      ];
    },
    useSyncExternalStore: fp,
    useId: $p,
    useHostTransitionStatus: Xc,
    useFormState: Tp,
    useActionState: Tp,
    useOptimistic: function(e, t) {
      var n = ut();
      return yp(n, Ve, e, t);
    },
    useMemoCache: jc,
    useCacheRefresh: Yp,
    useEffectEvent: zp
  }, RS = {
    readContext: Tt,
    use: au,
    useCallback: Bp,
    useContext: Tt,
    useEffect: Yc,
    useImperativeHandle: Dp,
    useInsertionEffect: Mp,
    useLayoutEffect: Np,
    useMemo: Up,
    useReducer: Lc,
    useRef: wp,
    useState: function() {
      return Lc(va);
    },
    useDebugValue: qc,
    useDeferredValue: function(e, t) {
      var n = ut();
      return Ve === null ? Vc(n, e, t) : jp(
        n,
        Ve.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Lc(va)[0], t = ut().memoizedState;
      return [
        typeof e == "boolean" ? e : Ci(e),
        t
      ];
    },
    useSyncExternalStore: fp,
    useId: $p,
    useHostTransitionStatus: Xc,
    useFormState: Op,
    useActionState: Op,
    useOptimistic: function(e, t) {
      var n = ut();
      return Ve !== null ? yp(n, Ve, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: jc,
    useCacheRefresh: Yp,
    useEffectEvent: zp
  };
  function Kc(e, t, n, l) {
    t = e.memoizedState, n = n(l, t), n = n == null ? t : q({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Zc = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var l = rn(), u = Ha(l);
      u.payload = t, n != null && (u.callback = n), t = La(e, u, l), t !== null && (Qt(t, e, l), vi(t, e, l));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var l = rn(), u = Ha(l);
      u.tag = 1, u.payload = t, n != null && (u.callback = n), t = La(e, u, l), t !== null && (Qt(t, e, l), vi(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = rn(), l = Ha(n);
      l.tag = 2, t != null && (l.callback = t), t = La(e, l, n), t !== null && (Qt(t, e, n), vi(t, e, n));
    }
  };
  function Kp(e, t, n, l, u, s, m) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, s, m) : t.prototype && t.prototype.isPureReactComponent ? !ci(n, l) || !ci(u, s) : !0;
  }
  function Zp(e, t, n, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, l), t.state !== e && Zc.enqueueReplaceState(t, t.state, null);
  }
  function wl(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var l in t)
        l !== "ref" && (n[l] = t[l]);
    }
    if (e = e.defaultProps) {
      n === t && (n = q({}, n));
      for (var u in e)
        n[u] === void 0 && (n[u] = e[u]);
    }
    return n;
  }
  function Ip(e) {
    jo(e);
  }
  function Pp(e) {
    console.error(e);
  }
  function Jp(e) {
    jo(e);
  }
  function su(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function Fp(e, t, n) {
    try {
      var l = e.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function Ic(e, t, n) {
    return n = Ha(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      su(e, t);
    }, n;
  }
  function Wp(e) {
    return e = Ha(e), e.tag = 3, e;
  }
  function eg(e, t, n, l) {
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var s = l.value;
      e.payload = function() {
        return u(s);
      }, e.callback = function() {
        Fp(t, n, l);
      };
    }
    var m = n.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (e.callback = function() {
      Fp(t, n, l), typeof u != "function" && (Qa === null ? Qa = /* @__PURE__ */ new Set([this]) : Qa.add(this));
      var b = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: b !== null ? b : ""
      });
    });
  }
  function OS(e, t, n, l, u) {
    if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = n.alternate, t !== null && bl(
        t,
        n,
        u,
        !0
      ), n = Rt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
          case 19:
            return Nt === null ? Mu() : n.alternate === null && rt === 0 && (rt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = u, l === Io ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), Bf(e, l, u)), !1;
          case 22:
            return n.flags |= 65536, l === Io ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : n.add(l)), Bf(e, l, u)), !1;
        }
        throw Error(o(435, n.tag));
      }
      return Bf(e, l, u), Mu(), !1;
    }
    if (Te)
      return t = Rt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, l !== pc && (e = Error(o(422), { cause: l }), mi(yn(e, n)))) : (l !== pc && (t = Error(o(423), {
        cause: l
      }), mi(
        yn(t, n)
      )), e = e.current.alternate, e.flags |= 65536, u &= -u, e.lanes |= u, l = yn(l, n), u = Ic(
        e.stateNode,
        l,
        u
      ), Rc(e, u), rt !== 4 && (rt = 2)), !1;
    var s = Error(o(520), { cause: l });
    if (s = yn(s, n), _i === null ? _i = [s] : _i.push(s), rt !== 4 && (rt = 2), t === null) return !0;
    l = yn(l, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = u & -u, n.lanes |= e, e = Ic(n.stateNode, l, e), Rc(n, e), !1;
        case 1:
          if (t = n.type, s = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (Qa === null || !Qa.has(s))))
            return n.flags |= 65536, u &= -u, n.lanes |= u, u = Wp(u), eg(
              u,
              e,
              n,
              l
            ), Rc(n, u), !1;
          break;
        case 22:
          if (n.memoizedState !== null)
            return n.flags |= 65536, !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Pc = Error(o(461)), dt = !1;
  function pt(e, t, n, l) {
    t.child = e === null ? lp(t, null, n, l) : Rl(
      t,
      e.child,
      n,
      l
    );
  }
  function tg(e, t, n, l, u) {
    n = n.render;
    var s = t.ref;
    if ("ref" in l) {
      var m = {};
      for (var b in l)
        b !== "ref" && (m[b] = l[b]);
    } else m = l;
    return Sl(t), l = _c(
      e,
      t,
      n,
      m,
      s,
      u
    ), b = Dc(), e !== null && !dt ? (Bc(e, t, u), ba(e, t, u)) : (Te && b && qo(t), t.flags |= 1, pt(e, t, l, u), t.child);
  }
  function ng(e, t, n, l, u) {
    if (e === null) {
      var s = n.type;
      return typeof s == "function" && !fc(s) && s.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = s, ag(
        e,
        t,
        s,
        l,
        u
      )) : (e = $o(
        n.type,
        null,
        l,
        t,
        t.mode,
        u
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (s = e.child, !lf(e, u)) {
      var m = s.memoizedProps;
      if (n = n.compare, n = n !== null ? n : ci, n(m, l) && e.ref === t.ref)
        return ba(e, t, u);
    }
    return t.flags |= 1, e = ma(s, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function ag(e, t, n, l, u) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (ci(s, l) && e.ref === t.ref)
        if (dt = !1, t.pendingProps = l = s, lf(e, u))
          (e.flags & 131072) !== 0 && (dt = !0);
        else
          return t.lanes = e.lanes, ba(e, t, u);
    }
    return Jc(
      e,
      t,
      n,
      l,
      u
    );
  }
  function lg(e, t, n, l) {
    var u = l.children, s = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (s = s !== null ? s.baseLanes | n : n, e !== null) {
          for (l = t.child = e.child, u = 0; l !== null; )
            u = u | l.lanes | l.childLanes, l = l.sibling;
          l = u & ~s;
        } else l = 0, t.child = null;
        return rg(
          e,
          t,
          s,
          n,
          l
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Ko(
          t,
          s !== null ? s.cachePool : null
        ), s !== null ? op(t, s) : wc(), up(t);
      else
        return l = t.lanes = 536870912, rg(
          e,
          t,
          s !== null ? s.baseLanes | n : n,
          n,
          l
        );
    } else
      s !== null ? (Ko(t, s.cachePool), op(t, s), Ya(), t.memoizedState = null) : (e !== null && Ko(t, null), wc(), Ya());
    return pt(e, t, u, n), t.child;
  }
  function Ri(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function rg(e, t, n, l, u) {
    var s = Ec();
    return s = s === null ? null : { parent: ct._currentValue, pool: s }, t.memoizedState = {
      baseLanes: n,
      cachePool: s
    }, e !== null && Ko(t, null), wc(), up(t), e !== null && bl(e, t, l, !0), t.childLanes = u, null;
  }
  function cu(e, t) {
    return t = fu(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function ig(e, t, n) {
    return Rl(t, e.child, null, n), e = cu(t, t.pendingProps), e.flags |= 2, tn(t), t.memoizedState = null, e;
  }
  function wS(e, t, n) {
    var l = t.pendingProps, u = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Te) {
        if (l.mode === "hidden")
          return e = cu(t, l), t.lanes = 536870912, e.memoizedState = { baseLanes: 0, cachePool: null }, Ri(null, e);
        if (zc(t), (e = Pe) ? (e = _y(
          e,
          Sn
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Na !== null ? { id: kn, overflow: $n } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Vh(e), n.return = t, t.child = n, bt = t, Pe = null)) : e = null, e === null) throw Da(t);
        return t.lanes = 536870912, null;
      }
      return cu(t, l);
    }
    var s = e.memoizedState;
    if (s !== null) {
      var m = s.dehydrated;
      if (zc(t), u)
        if (t.flags & 256)
          t.flags &= -257, t = ig(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (dt || bl(e, t, n, !1), u = (n & e.childLanes) !== 0, dt || u) {
        if (ka.current === null) {
          if (l = Xe, l !== null && (m = Qm(l, n), m !== 0 && m !== s.retryLane))
            throw s.retryLane = m, pl(e, m), Qt(l, e, m), Pc;
          Mu();
        }
        t = ig(
          e,
          t,
          n
        );
      } else
        e = s.treeContext, Pe = xn(m.nextSibling), bt = t, Te = !0, _a = null, Sn = !1, e !== null && Qh(t, e), t = cu(t, l), t.flags |= 134221824;
      return t;
    }
    return e = ma(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function fr(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(o(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Jc(e, t, n, l, u) {
    return Sl(t), n = _c(
      e,
      t,
      n,
      l,
      void 0,
      u
    ), l = Dc(), e !== null && !dt ? (Bc(e, t, u), ba(e, t, u)) : (Te && l && qo(t), t.flags |= 1, pt(e, t, n, u), t.child);
  }
  function og(e, t, n, l, u, s) {
    return Sl(t), t.updateQueue = null, n = cp(
      t,
      l,
      n,
      u
    ), sp(e), l = Dc(), e !== null && !dt ? (Bc(e, t, s), ba(e, t, s)) : (Te && l && qo(t), t.flags |= 1, pt(e, t, n, s), t.child);
  }
  function ug(e, t, n, l, u) {
    if (Sl(t), t.stateNode === null) {
      var s = tr, m = n.contextType;
      typeof m == "object" && m !== null && (s = Tt(m)), s = new n(l, s), t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = Zc, t.stateNode = s, s._reactInternals = t, s = t.stateNode, s.props = l, s.state = t.memoizedState, s.refs = {}, Cc(t), m = n.contextType, s.context = typeof m == "object" && m !== null ? Tt(m) : tr, s.state = t.memoizedState, m = n.getDerivedStateFromProps, typeof m == "function" && (Kc(
        t,
        n,
        m,
        l
      ), s.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (m = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), m !== s.state && Zc.enqueueReplaceState(s, s.state, null), Si(t, l, s, u), bi(), s.state = t.memoizedState), typeof s.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      s = t.stateNode;
      var b = t.memoizedProps, O = wl(n, b);
      s.props = O;
      var B = s.context, $ = n.contextType;
      m = tr, typeof $ == "object" && $ !== null && (m = Tt($));
      var I = n.getDerivedStateFromProps;
      $ = typeof I == "function" || typeof s.getSnapshotBeforeUpdate == "function", b = t.pendingProps !== b, $ || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (b || B !== m) && Zp(
        t,
        s,
        l,
        m
      ), ja = !1;
      var N = t.memoizedState;
      s.state = N, Si(t, l, s, u), bi(), B = t.memoizedState, b || N !== B || ja ? (typeof I == "function" && (Kc(
        t,
        n,
        I,
        l
      ), B = t.memoizedState), (O = ja || Kp(
        t,
        n,
        O,
        l,
        N,
        B,
        m
      )) ? ($ || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = B), s.props = l, s.state = B, s.context = m, l = O) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      s = t.stateNode, Tc(e, t), m = t.memoizedProps, $ = wl(n, m), s.props = $, I = t.pendingProps, N = s.context, B = n.contextType, O = tr, typeof B == "object" && B !== null && (O = Tt(B)), b = n.getDerivedStateFromProps, (B = typeof b == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (m !== I || N !== O) && Zp(
        t,
        s,
        l,
        O
      ), ja = !1, N = t.memoizedState, s.state = N, Si(t, l, s, u), bi();
      var L = t.memoizedState;
      m !== I || N !== L || ja || e !== null && e.dependencies !== null && Xo(e.dependencies) ? (typeof b == "function" && (Kc(
        t,
        n,
        b,
        l
      ), L = t.memoizedState), ($ = ja || Kp(
        t,
        n,
        $,
        l,
        N,
        L,
        O
      ) || e !== null && e.dependencies !== null && Xo(e.dependencies)) ? (B || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(l, L, O), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(
        l,
        L,
        O
      )), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || m === e.memoizedProps && N === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = L), s.props = l, s.state = L, s.context = O, l = $) : (typeof s.componentDidUpdate != "function" || m === e.memoizedProps && N === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return s = l, fr(e, t), l = (t.flags & 128) !== 0, s || l ? (s = t.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : s.render(), t.flags |= 1, e !== null && l ? (t.child = Rl(
      t,
      e.child,
      null,
      u
    ), t.child = Rl(
      t,
      null,
      n,
      u
    )) : pt(e, t, n, u), t.memoizedState = s.state, e = t.child) : e = ba(
      e,
      t,
      u
    ), e;
  }
  function sg(e, t, n, l) {
    return yl(), t.flags |= 256, pt(e, t, n, l), t.child;
  }
  var Fc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Wc(e) {
    return { baseLanes: e, cachePool: Fh() };
  }
  function ef(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= ln), e;
  }
  function cg(e, t, n) {
    var l = t.pendingProps, u = !1, s = (t.flags & 128) !== 0, m;
    if ((m = s) || (m = e !== null && e.memoizedState === null ? !1 : (Ot.current & 2) !== 0), m && (u = !0, t.flags &= -129), m = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Te) {
        if (u ? $a(t) : Ya(), (e = Pe) ? (e = _y(
          e,
          Sn
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Na !== null ? { id: kn, overflow: $n } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Vh(e), n.return = t, t.child = n, bt = t, Pe = null)) : e = null, e === null) throw Da(t);
        return ed(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      return s = l.children, l = l.fallback, u ? (Ya(), u = t.mode, s = fu(
        { mode: "hidden", children: s },
        u
      ), l = gl(
        l,
        u,
        n,
        null
      ), s.return = t, l.return = t, s.sibling = l, t.child = s, l = t.child, l.memoizedState = Wc(n), l.childLanes = ef(
        e,
        m,
        n
      ), t.memoizedState = Fc, Ri(null, l)) : ($a(t), tf(t, s));
    }
    var b = e.memoizedState;
    if (b !== null) {
      var O = b.dehydrated;
      if (O !== null)
        return AS(
          e,
          t,
          s,
          m,
          l,
          O,
          b,
          n
        );
    }
    return u ? (Ya(), u = l.fallback, s = t.mode, b = e.child, O = b.sibling, l = ma(b, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = b.subtreeFlags & 1206910976, O !== null ? u = ma(O, u) : (u = gl(
      u,
      s,
      n,
      null
    ), u.flags |= 2), u.return = t, l.return = t, l.sibling = u, t.child = l, Ri(null, l), l = t.child, u = e.child.memoizedState, u === null ? u = Wc(n) : (s = u.cachePool, s !== null ? (b = ct._currentValue, s = s.parent !== b ? { parent: b, pool: b } : s) : s = Fh(), u = {
      baseLanes: u.baseLanes | n,
      cachePool: s
    }), l.memoizedState = u, l.childLanes = ef(
      e,
      m,
      n
    ), t.memoizedState = Fc, Ri(e.child, l)) : ($a(t), n = e.child, e = n.sibling, n = ma(n, {
      mode: "visible",
      children: l.children
    }), n.return = t, n.sibling = null, e !== null && (m = t.deletions, m === null ? (t.deletions = [e], t.flags |= 16) : m.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function tf(e, t) {
    return t = fu(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function fu(e, t) {
    return e = qt(22, e, null, t), e.lanes = 0, e;
  }
  function du(e, t, n) {
    return Rl(t, e.child, null, n), e = tf(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function AS(e, t, n, l, u, s, m, b) {
    if (n)
      return t.flags & 256 ? ($a(t), t.flags &= -257, du(
        e,
        t,
        b
      )) : t.memoizedState !== null ? (Ya(), t.child = e.child, t.flags |= 128, null) : (Ya(), s = u.fallback, m = t.mode, u = fu(
        { mode: "visible", children: u.children },
        m
      ), s = gl(
        s,
        m,
        b,
        null
      ), s.flags |= 2, u.return = t, s.return = t, u.sibling = s, t.child = u, Rl(t, e.child, null, b), u = t.child, u.memoizedState = Wc(b), u.childLanes = ef(
        e,
        l,
        b
      ), t.memoizedState = Fc, Ri(null, u));
    if ($a(t), ed(s)) {
      if (l = s.nextSibling && s.nextSibling.dataset, l) var O = l.dgst;
      return l = O, l !== "" && (u = Error(o(419)), u.stack = "", u.digest = l, mi({ value: u, source: null, stack: null })), du(
        e,
        t,
        b
      );
    }
    if (dt || bl(e, t, b, !1), l = (b & e.childLanes) !== 0, dt || l) {
      if (ka.current !== null)
        return du(
          e,
          t,
          b
        );
      if (l = Xe, l !== null && (u = Qm(
        l,
        b
      ), u !== 0 && u !== m.retryLane))
        throw m.retryLane = u, pl(e, u), Qt(l, e, u), Pc;
      return Wf(s) || Mu(), du(
        e,
        t,
        b
      );
    }
    return Wf(s) ? (t.flags |= 192, t.child = e.child, null) : (e = m.treeContext, Pe = xn(s.nextSibling), bt = t, Te = !0, _a = null, Sn = !1, e !== null && Qh(t, e), t = tf(
      t,
      u.children
    ), t.flags |= 134221824, t);
  }
  function fg(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), Go(e.return, t, n);
  }
  function dg(e) {
    for (var t = null; e !== null; ) {
      var n = e.alternate;
      n !== null && Wo(n) === null && (t = e), e = e.sibling;
    }
    return t;
  }
  function mu(e, t, n, l, u, s) {
    var m = e.memoizedState;
    m === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: n,
      tailMode: u,
      treeForkCount: s
    } : (m.isBackwards = t, m.rendering = null, m.renderingStartTime = 0, m.last = l, m.tail = n, m.tailMode = u, m.treeForkCount = s);
  }
  function nf(e) {
    var t = e.child;
    for (e.child = null; t !== null; ) {
      var n = t.sibling;
      t.sibling = e.child, e.child = t, t = n;
    }
  }
  function af(e, t, n) {
    var l = t.pendingProps, u = l.revealOrder, s = l.tail;
    l = l.children;
    var m = Ot.current;
    if (t.flags & 128)
      return Ei(t, m), null;
    var b = (m & 2) !== 0;
    if (b ? (m = m & 1 | 2, t.flags |= 128) : m &= 1, Ei(t, m), u === "backwards" && e !== null ? (nf(e), pt(e, t, l, n), nf(e)) : pt(e, t, l, n), l = Te ? di : 0, !b && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && fg(e, n, t);
        else if (e.tag === 19)
          fg(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (u) {
      case "backwards":
        n = dg(t.child), n === null ? (u = t.child, t.child = null) : (u = n.sibling, n.sibling = null, nf(t)), mu(
          t,
          !0,
          u,
          null,
          s,
          l
        );
        break;
      case "unstable_legacy-backwards":
        for (n = null, u = t.child, t.child = null; u !== null; ) {
          if (e = u.alternate, e !== null && Wo(e) === null) {
            t.child = u;
            break;
          }
          e = u.sibling, u.sibling = n, n = u, u = e;
        }
        mu(
          t,
          !0,
          n,
          null,
          s,
          l
        );
        break;
      case "together":
        mu(
          t,
          !1,
          null,
          null,
          void 0,
          l
        );
        break;
      case "independent":
        t.memoizedState = null;
        break;
      default:
        n = dg(t.child), n === null ? (u = t.child, t.child = null) : (u = n.sibling, n.sibling = null), mu(
          t,
          !1,
          u,
          n,
          s,
          l
        );
    }
    return t.child;
  }
  function mg(e, t, n) {
    var l = t.pendingProps;
    return Ba(t, t.type, l.value), pt(e, t, l.children, n), t.child;
  }
  function ba(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Xa |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (bl(
          e,
          t,
          n,
          !1
        ), (n & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, n = ma(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = ma(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function lf(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Xo(e)));
  }
  function zS(e, t, n) {
    switch (t.tag) {
      case 3:
        ul(t, t.stateNode.containerInfo), Ba(t, ct, e.memoizedState.cache), yl();
        break;
      case 27:
      case 5:
        Yl(t);
        break;
      case 4:
        ul(t, t.stateNode.containerInfo);
        break;
      case 10:
        Ba(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, zc(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null) {
          if (l.dehydrated !== null)
            return $a(t), t.flags |= 128, null;
          l = bl(
            e,
            t,
            n,
            !1
          );
          var u = t.child.childLanes;
          return l || (n & u) !== 0 ? cg(e, t, n) : ($a(t), e = ba(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        }
        $a(t);
        break;
      case 19:
        if (t.flags & 128)
          return af(
            e,
            t,
            n
          );
        if (u = (e.flags & 128) !== 0, l = (n & t.childLanes) !== 0, l || (bl(
          e,
          t,
          n,
          !1
        ), l = (n & t.childLanes) !== 0), u) {
          if (l)
            return af(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), Ei(t, Ot.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, lg(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        Ba(t, ct, e.memoizedState.cache);
    }
    return ba(e, t, n);
  }
  function hg(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        dt = !0;
      else {
        if (!lf(e, n) && (t.flags & 128) === 0)
          return dt = !1, zS(
            e,
            t,
            n
          );
        dt = (e.flags & 131072) !== 0;
      }
    else
      dt = !1, Te && (t.flags & 1048576) !== 0 && Xh(t, di, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = Cl(t.elementType), t.type = e, typeof e == "function")
            fc(e) ? (l = wl(e, l), t.tag = 1, t = ug(
              null,
              t,
              e,
              l,
              n
            )) : (t.tag = 0, t = Jc(
              null,
              t,
              e,
              l,
              n
            ));
          else {
            if (e != null) {
              var u = e.$$typeof;
              if (u === V) {
                t.tag = 11, t = tg(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              } else if (u === Q) {
                t.tag = 14, t = ng(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              } else if (u === te) {
                t.tag = 10, t.type = e, t = mg(
                  null,
                  t,
                  n
                );
                break e;
              }
            }
            throw t = Re(e) || e, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return Jc(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return l = t.type, u = wl(
          l,
          t.pendingProps
        ), ug(
          e,
          t,
          l,
          u,
          n
        );
      case 3:
        e: {
          if (ul(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          l = t.pendingProps;
          var s = t.memoizedState;
          u = s.element, Tc(e, t), Si(t, l, null, n);
          var m = t.memoizedState;
          if (l = m.cache, Ba(t, ct, l), l !== s.cache && vc(
            t,
            [ct],
            n,
            !0
          ), bi(), l = m.element, s.isDehydrated)
            if (s = {
              element: l,
              isDehydrated: !1,
              cache: m.cache
            }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
              t = sg(
                e,
                t,
                l,
                n
              );
              break e;
            } else if (l !== u) {
              u = yn(
                Error(o(424)),
                t
              ), mi(u), t = sg(
                e,
                t,
                l,
                n
              );
              break e;
            } else {
              switch (e = t.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (Pe = xn(e.firstChild), bt = t, Te = !0, _a = null, Sn = !0, n = lp(
                t,
                null,
                l,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 134221824, n = n.sibling;
            }
          else {
            if (yl(), l === u) {
              t = ba(
                e,
                t,
                n
              );
              break e;
            }
            pt(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return fr(e, t), e === null ? (n = ky(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Te || (t.stateNode = vy(
          t.type,
          t.pendingProps,
          mn.current,
          t
        )) : t.memoizedState = ky(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Yl(t), e === null && Te && (l = t.stateNode = Uy(
          t.type,
          t.pendingProps,
          mn.current
        ), bt = t, Sn = !0, u = Pe, Ia(t.type) ? (td = u, Pe = xn(l.firstChild)) : Pe = u), pt(
          e,
          t,
          t.pendingProps.children,
          n
        ), fr(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Te && ((u = l = Pe) && (l = CE(
          l,
          t.type,
          t.pendingProps,
          Sn
        ), l !== null ? (t.stateNode = l, bt = t, Pe = xn(l.firstChild), Sn = !1, u = !0) : u = !1), u || Da(t)), Yl(t), u = t.type, s = t.pendingProps, m = e !== null ? e.memoizedProps : null, l = s.children, Qf(u, s) ? l = null : m !== null && Qf(u, m) && (t.flags |= 32), t.memoizedState !== null && (u = _c(
          e,
          t,
          vS,
          null,
          null,
          n
        ), zr._currentValue = u), fr(e, t), pt(e, t, l, n), t.child;
      case 6:
        return e === null && Te && ((e = n = Pe) && (n = TE(
          n,
          t.pendingProps,
          Sn
        ), n !== null ? (t.stateNode = n, bt = t, Pe = null, e = !0) : e = !1), e || Da(t)), null;
      case 13:
        return cg(e, t, n);
      case 4:
        return ul(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = Rl(
          t,
          null,
          l,
          n
        ) : pt(e, t, l, n), t.child;
      case 11:
        return tg(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return l = t.pendingProps, fr(e, t), pt(e, t, l, n), t.child;
      case 8:
        return pt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return pt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return mg(e, t, n);
      case 9:
        return u = t.type._context, l = t.pendingProps.children, Sl(t), u = Tt(u), l = l(u), t.flags |= 1, pt(e, t, l, n), t.child;
      case 14:
        return ng(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return ag(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return af(e, t, n);
      case 31:
        return wS(e, t, n);
      case 22:
        return lg(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return Sl(t), l = Tt(ct), e === null ? (u = Ec(), u === null && (u = Xe, s = bc(), u.pooledCache = s, s.refCount++, s !== null && (u.pooledCacheLanes |= n), u = s), t.memoizedState = { parent: l, cache: u }, Cc(t), Ba(t, ct, u)) : ((e.lanes & n) !== 0 && (Tc(e, t), Si(t, null, null, n), bi()), u = e.memoizedState, s = t.memoizedState, u.parent !== l ? (u = { parent: l, cache: l }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), Ba(t, ct, l)) : (l = s.cache, Ba(t, ct, l), l !== u.cache && vc(
          t,
          [ct],
          n,
          !0
        ))), pt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 30:
        return t.stateNode === null && (t.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), l = t.pendingProps, l.name != null && l.name !== "auto" ? t.flags |= e === null ? 18882560 : 18874368 : Te && qo(t), e !== null && e.memoizedProps.name !== l.name ? t.flags |= 4194816 : fr(e, t), pt(e, t, l.children, n), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function Sa(e) {
    e.flags |= 4;
  }
  function rf(e, t, n, l, u) {
    var s;
    if ((s = (e.mode & 32) !== 0) && (s = n === null ? Vy(t, l) : Vy(t, l) && (l.src !== n.src || l.srcSet !== n.srcSet)), s) {
      if (e.flags |= 16777216, (u & 335544128) === u)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Ig()) e.flags |= 8192;
        else
          throw Tl = Io, xc;
    } else e.flags &= -16777217;
  }
  function pg(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Gy(t))
      if (Ig()) e.flags |= 8192;
      else
        throw Tl = Io, xc;
  }
  function hu(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Vm() : 536870912, e.lanes |= t, gr |= t);
  }
  function Oi(e, t) {
    if (!Te)
      switch (e.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var n = e.tail, l = null; n !== null; )
            n.alternate !== null && (l = n), n = n.sibling;
          l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
          break;
        default:
          for (t = e.tail, n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
      }
  }
  function Je(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, l = 0;
    if (t)
      for (var u = e.child; u !== null; )
        n |= u.lanes | u.childLanes, l |= u.subtreeFlags & 1206910976, l |= u.flags & 1206910976, u.return = e, u = u.sibling;
    else
      for (u = e.child; u !== null; )
        n |= u.lanes | u.childLanes, l |= u.subtreeFlags, l |= u.flags, u.return = e, u = u.sibling;
    return e.subtreeFlags |= l, e.childLanes = n, t;
  }
  function MS(e, t, n) {
    var l = t.pendingProps;
    switch (hc(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Je(t), null;
      case 1:
        return Je(t), null;
      case 3:
        return n = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), ga(ct), ia(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (lr(t) ? Sa(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, gc())), Je(t), null;
      case 26:
        var u = t.type, s = t.memoizedState;
        return e === null ? (Sa(t), s !== null ? (Je(t), pg(t, s)) : (Je(t), rf(
          t,
          u,
          null,
          l,
          n
        ))) : s ? s !== e.memoizedState ? (Sa(t), Je(t), pg(t, s)) : (Je(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && Sa(t), Je(t), rf(
          t,
          u,
          e,
          l,
          n
        )), null;
      case 27:
        if (sl(t), n = mn.current, u = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Sa(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Je(t), t.subtreeFlags &= -33554433, null;
          }
          e = gt.current, lr(t) ? Kh(t) : (e = Uy(u, l, n), t.stateNode = e, Sa(t));
        }
        return Je(t), t.subtreeFlags &= -33554433, null;
      case 5:
        if (sl(t), u = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Sa(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Je(t), t.subtreeFlags &= -33554433, null;
          }
          if (s = gt.current, lr(t))
            Kh(t);
          else {
            var m = Hi(
              mn.current
            );
            switch (s) {
              case 1:
                s = m.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                s = m.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    s = m.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    s = m.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    s = m.createElement("div"), s.innerHTML = "<script><\/script>", s = s.removeChild(
                      s.firstChild
                    );
                    break;
                  case "select":
                    s = typeof l.is == "string" ? m.createElement("select", {
                      is: l.is
                    }) : m.createElement("select"), l.multiple ? s.multiple = !0 : l.size && (s.size = l.size);
                    break;
                  default:
                    s = typeof l.is == "string" ? m.createElement(u, { is: l.is }) : m.createElement(u);
                }
            }
            s[Ct] = t, s[Yt] = l;
            e: for (m = t.child; m !== null; ) {
              if (m.tag === 5 || m.tag === 6)
                s.appendChild(m.stateNode);
              else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                m.child.return = m, m = m.child;
                continue;
              }
              if (m === t) break e;
              for (; m.sibling === null; ) {
                if (m.return === null || m.return === t)
                  break e;
                m = m.return;
              }
              m.sibling.return = m.return, m = m.sibling;
            }
            t.stateNode = s;
            e: switch (At(s, u, l), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && Sa(t);
          }
        }
        return Je(t), t.subtreeFlags &= -33554433, rf(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && Sa(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(o(166));
          if (e = mn.current, lr(t)) {
            if (e = t.stateNode, n = t.memoizedProps, l = null, u = bt, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  l = u.memoizedProps;
              }
            e[Ct] = t, e = !!(e.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || hy(e.nodeValue, n)), e || Da(t, !0);
          } else
            e = Hi(e).createTextNode(
              l
            ), e[Ct] = t, t.stateNode = e;
        }
        return Je(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = lr(t), n !== null) {
            if (e === null) {
              if (!l) throw Error(o(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
              e[Ct] = t;
            } else
              yl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Je(t), e = !1;
          } else
            n = gc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (tn(t), t) : (tn(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return Je(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (u = lr(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(o(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
              u[Ct] = t;
            } else
              yl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Je(t), u = !1;
          } else
            u = gc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return t.flags & 256 ? (tn(t), t) : (tn(t), null);
        }
        return tn(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = l !== null, e = e !== null && e.memoizedState !== null, n && (l = t.child, u = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (u = l.alternate.memoizedState.cachePool.pool), s = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (s = l.memoizedState.cachePool.pool), s !== u && (l.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), hu(t, t.updateQueue), Je(t), null);
      case 4:
        return ia(), e === null && Yf(t.stateNode.containerInfo), t.flags |= 67108864, Je(t), null;
      case 10:
        return ga(t.type), Je(t), null;
      case 19:
        if (Mc(t), l = t.memoizedState, l === null) return Je(t), null;
        if (u = (t.flags & 128) !== 0, s = l.rendering, s === null)
          if (u) Oi(l, !1);
          else {
            if (rt !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (s = Wo(e), s !== null) {
                  for (t.flags |= 128, Oi(l, !1), e = s.updateQueue, t.updateQueue = e, hu(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    qh(n, e), n = n.sibling;
                  return Ei(
                    t,
                    Ot.current & 1 | 2
                  ), Te && ha(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && Pt() > Ou && (t.flags |= 128, u = !0, Oi(l, !1), t.lanes = 4194304);
          }
        else {
          if (!u)
            if (e = Wo(s), e !== null) {
              if (t.flags |= 128, u = !0, e = e.updateQueue, t.updateQueue = e, hu(t, e), Oi(l, !0), l.tail === null && l.tailMode !== "collapsed" && l.tailMode !== "visible" && !s.alternate && !Te)
                return Je(t), null;
            } else
              2 * Pt() - l.renderingStartTime > Ou && n !== 536870912 && (t.flags |= 128, u = !0, Oi(l, !1), t.lanes = 4194304);
          l.isBackwards ? (s.sibling = t.child, t.child = s) : (e = l.last, e !== null ? e.sibling = s : t.child = s, l.last = s);
        }
        if (l.tail !== null) {
          e = l.tail;
          e: {
            for (n = e; n !== null; ) {
              if (n.alternate !== null) {
                n = !1;
                break e;
              }
              n = n.sibling;
            }
            n = !0;
          }
          return l.rendering = e, l.tail = e.sibling, l.renderingStartTime = Pt(), e.sibling = null, s = Ot.current, s = u ? s & 1 | 2 : s & 1, l.tailMode === "visible" || l.tailMode === "collapsed" || !n || Te ? Ei(t, s) : (n = s, be(Rt, t), be(Ot, n), Nt === null && (Nt = t)), Te && ha(t, l.treeForkCount), e;
        }
        return Je(t), null;
      case 22:
      case 23:
        return tn(t), Ac(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Je(t), n = t.updateQueue, n !== null && hu(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== n && (t.flags |= 2048), e !== null && Ie(xl), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), ga(ct), Je(t), null;
      case 25:
        return null;
      case 30:
        return t.flags |= 33554432, Je(t), null;
    }
    throw Error(o(156, t.tag));
  }
  function NS(e, t) {
    switch (hc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return ga(ct), ia(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return sl(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (tn(t), t.alternate === null)
            throw Error(o(340));
          yl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (tn(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          yl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Mc(t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
      case 4:
        return ia(), null;
      case 10:
        return ga(t.type), null;
      case 22:
      case 23:
        return tn(t), Ac(), e !== null && Ie(xl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return ga(ct), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function gg(e, t) {
    switch (hc(t), t.tag) {
      case 3:
        ga(ct), ia();
        break;
      case 26:
      case 27:
      case 5:
        sl(t);
        break;
      case 4:
        ia();
        break;
      case 31:
        t.memoizedState !== null && tn(t);
        break;
      case 13:
        tn(t);
        break;
      case 19:
        Mc(t);
        break;
      case 10:
        ga(t.type);
        break;
      case 22:
      case 23:
        tn(t), Ac(), e !== null && Ie(xl);
        break;
      case 24:
        ga(ct);
    }
  }
  function wi(e, t) {
    try {
      var n = t.updateQueue, l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var u = l.next;
        n = u;
        do {
          if ((n.tag & e) === e) {
            l = void 0;
            var s = n.create, m = n.inst;
            l = s(), m.destroy = l;
          }
          n = n.next;
        } while (n !== u);
      }
    } catch (b) {
      Ye(t, t.return, b);
    }
  }
  function qa(e, t, n) {
    try {
      var l = t.updateQueue, u = l !== null ? l.lastEffect : null;
      if (u !== null) {
        var s = u.next;
        l = s;
        do {
          if ((l.tag & e) === e) {
            var m = l.inst, b = m.destroy;
            if (b !== void 0) {
              m.destroy = void 0, u = t;
              var O = n, B = b;
              try {
                B();
              } catch ($) {
                Ye(
                  u,
                  O,
                  $
                );
              }
            }
          }
          l = l.next;
        } while (l !== s);
      }
    } catch ($) {
      Ye(t, t.return, $);
    }
  }
  function yg(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        ip(t, n);
      } catch (l) {
        Ye(e, e.return, l);
      }
    }
  }
  function vg(e, t, n) {
    n.props = wl(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (l) {
      Ye(e, t, l);
    }
  }
  function Yn(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            var u = e.stateNode, s = fa(e.memoizedProps, u);
            (u.ref === null || u.ref.name !== s) && (u.ref = Ry(s)), l = u.ref;
            break;
          case 7:
            if (e.stateNode === null) {
              var m = new on(e);
              g(
                e.child,
                !1,
                EE,
                m,
                void 0,
                void 0
              ), e.stateNode = m;
            }
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof n == "function" ? e.refCleanup = n(l) : n.current = l;
      }
    } catch (b) {
      Ye(e, t, b);
    }
  }
  function wt(e, t) {
    var n = e.ref, l = e.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (u) {
          Ye(e, t, u);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (u) {
          Ye(e, t, u);
        }
      else n.current = null;
  }
  function pu(e, t) {
    if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null)
      for (var n = 0; n < t.length; n++)
        Ny(
          e.stateNode,
          t[n]
        );
  }
  function bg(e) {
    for (var t = e.return; t !== null && (uf(t) && Ny(e.stateNode, t.stateNode), !of(t)); )
      t = t.return;
  }
  function Ai(e) {
    for (var t = e.return; t !== null && (uf(t) && xE(e.stateNode, t.stateNode), !of(t)); )
      t = t.return;
  }
  function of(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 27;
  }
  function uf(e) {
    return e && e.tag === 7 && e.stateNode !== null;
  }
  function sf(e) {
    var t = e.type, n = e.memoizedProps, l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break e;
        case "img":
          n.src ? l.src = n.src : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (u) {
      Ye(e, e.return, u);
    }
  }
  function cf(e, t, n) {
    try {
      var l = e.stateNode;
      aE(l, e.type, n, t), l[Yt] = t;
    } catch (u) {
      Ye(e, e.return, u);
    }
  }
  function Sg(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ia(e.type) || e.tag === 4;
  }
  function ff(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Sg(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Ia(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function df(e, t, n, l) {
    var u = e.tag;
    if (u === 5 || u === 6)
      u = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(u, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(u), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ln)), pu(e, l), _e = !0;
    else if (u !== 4 && (u === 27 && (pu(e, l), l = null, Ia(e.type) && (n = e.stateNode, t = null)), e = e.child, e !== null))
      for (df(
        e,
        t,
        n,
        l
      ), e = e.sibling; e !== null; )
        df(
          e,
          t,
          n,
          l
        ), e = e.sibling;
  }
  function gu(e, t, n, l) {
    var u = e.tag;
    if (u === 5 || u === 6)
      u = e.stateNode, t ? n.insertBefore(u, t) : n.appendChild(u), pu(e, l), _e = !0;
    else if (u !== 4 && (u === 27 && (pu(e, l), l = null, Ia(e.type) && (n = e.stateNode)), e = e.child, e !== null))
      for (gu(
        e,
        t,
        n,
        l
      ), e = e.sibling; e !== null; )
        gu(
          e,
          t,
          n,
          l
        ), e = e.sibling;
  }
  function Eg(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var l = e.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      At(t, l, n), t[Ct] = e, t[Yt] = n;
    } catch (s) {
      Ye(e, e.return, s);
    }
  }
  var yu = !1, nn = null;
  function xg(e) {
    (e.tag === 30 || (e.subtreeFlags & 33554432) !== 0) && (yu = !0);
  }
  var qn = null;
  function Cg() {
    var e = qn;
    return qn = null, e;
  }
  var Vt = 0;
  function dr(e, t, n, l, u) {
    return Vt = 0, Tg(
      e.child,
      t,
      n,
      l,
      u
    );
  }
  function Tg(e, t, n, l, u) {
    for (var s = !1; e !== null; ) {
      if (e.tag === 5) {
        var m = e.stateNode;
        if (l !== null) {
          var b = If(m);
          l.push(b), b.view && (s = !0);
        } else
          s || If(m).view && (s = !0);
        yu = !0, Cy(
          m,
          Vt === 0 ? t : t + "_" + Vt,
          n
        ), Vt++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && u || Tg(
        e.child,
        t,
        n,
        l,
        u
      ) && (s = !0));
      e = e.sibling;
    }
    return s;
  }
  function Vn(e, t) {
    for (; e !== null; )
      e.tag === 5 ? Ty(e.stateNode, e.memoizedProps) : (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && t || Vn(
        e.child,
        t
      )), e = e.sibling;
  }
  function vu(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if ((e.tag !== 22 || e.memoizedState === null) && (vu(e), e.tag === 30 && (e.flags & 18874368) !== 0 && e.stateNode.paired)) {
          var t = e.memoizedProps;
          if (t.name == null || t.name === "auto")
            throw Error(o(544));
          var n = t.name;
          t = da(t.default, t.share), t !== "none" && (dr(
            e,
            n,
            t,
            null,
            !1
          ) || Vn(e.child, !1));
        }
        e = e.sibling;
      }
  }
  function mf(e, t) {
    if (e.tag === 30) {
      var n = e.stateNode, l = e.memoizedProps, u = fa(l, n), s = da(
        l.default,
        n.paired ? l.share : l.enter
      );
      s !== "none" ? dr(e, u, s, null, !1) ? (vu(e), n.paired || t || Sr(e, l.onEnter)) : Vn(e.child, !1) : vu(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        mf(e, t), e = e.sibling;
    else vu(e);
  }
  function hf(e) {
    if (nn !== null && nn.size !== 0) {
      var t = nn;
      if ((e.subtreeFlags & 18874368) !== 0)
        for (e = e.child; e !== null; ) {
          if (e.tag !== 22 || e.memoizedState === null) {
            if (e.tag === 30 && (e.flags & 18874368) !== 0) {
              var n = e.memoizedProps, l = n.name;
              if (l != null && l !== "auto") {
                var u = t.get(l);
                if (u !== void 0) {
                  var s = da(
                    n.default,
                    n.share
                  );
                  if (s !== "none" && (dr(
                    e,
                    l,
                    s,
                    null,
                    !1
                  ) ? (s = e.stateNode, u.paired = s, s.paired = u, Sr(e, n.onShare)) : Vn(e.child, !1)), t.delete(l), t.size === 0) break;
                }
              }
            }
            hf(e);
          }
          e = e.sibling;
        }
    }
  }
  function pf(e) {
    if (e.tag === 30) {
      var t = e.memoizedProps, n = fa(t, e.stateNode), l = nn !== null ? nn.get(n) : void 0, u = da(
        t.default,
        l !== void 0 ? t.share : t.exit
      );
      u !== "none" && (dr(e, n, u, null, !1) ? l !== void 0 ? (u = e.stateNode, l.paired = u, u.paired = l, nn.delete(n), Sr(e, t.onShare)) : Sr(e, t.onExit) : Vn(e.child, !1)), nn !== null && hf(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        pf(e), e = e.sibling;
    else
      nn !== null && hf(e);
  }
  function Rg(e) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var t = e.memoizedProps, n = fa(t, e.stateNode);
        t = da(t.default, t.update), e.flags &= -5, t !== "none" && dr(
          e,
          n,
          t,
          e.memoizedState = [],
          !1
        );
      } else
        (e.subtreeFlags & 33554432) !== 0 && Rg(e);
      e = e.sibling;
    }
  }
  function gf(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if (e.tag !== 22 || e.memoizedState === null) {
          if (e.tag === 30 && (e.flags & 18874368) !== 0) {
            var t = e.stateNode;
            t.paired !== null && (t.paired = null, Vn(e.child, !1));
          }
          gf(e);
        }
        e = e.sibling;
      }
  }
  function bu(e) {
    if (e.tag === 30)
      e.stateNode.paired = null, Vn(e.child, !1), gf(e);
    else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        bu(e), e = e.sibling;
    else gf(e);
  }
  function Og(e) {
    for (e = e.child; e !== null; )
      e.tag === 30 ? Vn(e.child, !1) : (e.subtreeFlags & 33554432) !== 0 && Og(e), e = e.sibling;
  }
  function yf(e, t, n, l, u, s, m) {
    for (var b = !1; t !== null; ) {
      if (t.tag === 5) {
        var O = t.stateNode;
        if (s !== null && Vt < s.length) {
          var B = s[Vt], $ = If(O);
          (B.view || $.view) && (b = !0);
          var I;
          if (I = (e.flags & 4) === 0)
            if ($.clip) I = !0;
            else {
              I = B.rect;
              var N = $.rect;
              I = I.y !== N.y || I.x !== N.x || I.height !== N.height || I.width !== N.width;
            }
          I && (e.flags |= 4), $.abs ? $ = !B.abs : (B = B.rect, $ = $.rect, $ = B.height !== $.height || B.width !== $.width), $ && (e.flags |= 32);
        } else e.flags |= 32;
        (e.flags & 4) !== 0 && Cy(
          O,
          Vt === 0 ? n : n + "_" + Vt,
          u
        ), b && (e.flags & 4) !== 0 || (qn === null && (qn = []), qn.push(
          O,
          Vt === 0 ? l : l + "_" + Vt,
          t.memoizedProps
        )), Vt++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && m ? e.flags |= t.flags & 32 : yf(
        e,
        t.child,
        n,
        l,
        u,
        s,
        m
      ) && (b = !0));
      t = t.sibling;
    }
    return b;
  }
  function wg(e, t) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var n = e.memoizedProps, l = e.stateNode, u = fa(n, l), s = da(n.default, n.update), m;
        m = e.memoizedState, e.memoizedState = null, l = e;
        var b = e.child;
        Vt = 0, u = yf(
          l,
          b,
          u,
          u,
          s,
          m,
          !1
        ), (e.flags & 4) !== 0 && u && Sr(e, n.onUpdate);
      } else
        (e.subtreeFlags & 33554432) !== 0 && wg(e);
      e = e.sibling;
    }
  }
  var St = !1, Le = !1, Gn = !1, vf = !1, Ag = typeof WeakSet == "function" ? WeakSet : Set, Et = null, Xn = !1, zi = !1, Su = !1, bf = !1;
  function _S(e, t, n) {
    if (e = e.containerInfo, Gf = Mr, e = _h(e), lc(e)) {
      if ("selectionStart" in e)
        var l = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          l = (l = e.ownerDocument) && l.defaultView || window;
          var u = l.getSelection && l.getSelection();
          if (u && u.rangeCount !== 0) {
            l = u.anchorNode;
            var s = u.anchorOffset, m = u.focusNode;
            u = u.focusOffset;
            try {
              l.nodeType, m.nodeType;
            } catch {
              l = null;
              break e;
            }
            var b = 0, O = -1, B = -1, $ = 0, I = 0, N = e, L = null;
            t: for (; ; ) {
              for (var re; N !== l || s !== 0 && N.nodeType !== 3 || (O = b + s), N !== m || u !== 0 && N.nodeType !== 3 || (B = b + u), N.nodeType === 3 && (b += N.nodeValue.length), (re = N.firstChild) !== null; )
                L = N, N = re;
              for (; ; ) {
                if (N === e) break t;
                if (L === l && ++$ === s && (O = b), L === m && ++I === u && (B = b), (re = N.nextSibling) !== null) break;
                N = L, L = N.parentNode;
              }
              N = re;
            }
            l = O === -1 || B === -1 ? null : { start: O, end: B };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Xf = { focusedElem: e, selectionRange: l }, Mr = !1, n = (n & 335544064) === n, Et = t, t = n ? 9270 : 1024; Et !== null; ) {
      if (e = Et, n && (l = e.deletions, l !== null))
        for (s = 0; s < l.length; s++)
          n && pf(l[s]);
      if (e.alternate === null && (e.flags & 2) !== 0)
        n && xg(e), Eu(n);
      else {
        if (e.tag === 22) {
          if (l = e.alternate, e.memoizedState !== null) {
            l !== null && l.memoizedState === null && n && pf(l), Eu(n);
            continue;
          } else if (l !== null && l.memoizedState !== null) {
            n && xg(e), Eu(n);
            continue;
          }
        }
        l = e.child, (e.subtreeFlags & t) !== 0 && l !== null ? (l.return = e, Et = l) : (n && Rg(e), Eu(n));
      }
    }
    nn = null;
  }
  function Eu(e) {
    for (; Et !== null; ) {
      var t = Et, n = e, l = t.alternate, u = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((u & 1024) !== 0 && l !== null) {
            n = void 0, u = l.memoizedProps, l = l.memoizedState;
            var s = t.stateNode;
            try {
              var m = wl(
                t.type,
                u
              );
              n = s.getSnapshotBeforeUpdate(
                m,
                l
              ), s.__reactInternalSnapshotBeforeUpdate = n;
            } catch (b) {
              Ye(t, t.return, b);
            }
          }
          break;
        case 3:
          if ((u & 1024) !== 0) {
            if (l = t.stateNode.containerInfo, n = l.nodeType, n === 9)
              Ff(l);
            else if (n === 1)
              switch (l.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  Ff(l);
                  break;
                default:
                  l.textContent = "";
              }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          n && l !== null && (n = fa(
            l.memoizedProps,
            l.stateNode
          ), u = t.memoizedProps, u = da(u.default, u.update), u !== "none" && dr(
            l,
            n,
            u,
            l.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((u & 1024) !== 0) throw Error(o(163));
      }
      if (l = t.sibling, l !== null) {
        l.return = t.return, Et = l;
        break;
      }
      Et = t.return;
    }
  }
  function zg(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Qn(e, n), l & 4 && wi(5, n);
        break;
      case 1:
        if (Qn(e, n), l & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (m) {
              Ye(n, n.return, m);
            }
          else {
            var u = wl(
              n.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                u,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (m) {
              Ye(
                n,
                n.return,
                m
              );
            }
          }
        l & 64 && yg(n), l & 512 && Yn(n, n.return);
        break;
      case 3:
        if (Qn(e, n), l & 64 && (e = n.updateQueue, e !== null)) {
          if (t = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            ip(e, t);
          } catch (m) {
            Ye(n, n.return, m);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Eg(n);
      case 26:
      case 5:
        Qn(e, n), t === null && l & 4 && sf(n), l & 512 && Yn(n, n.return);
        break;
      case 12:
        Qn(e, n);
        break;
      case 31:
        Qn(e, n), l & 4 && Dg(e, n);
        break;
      case 13:
        Qn(e, n), l & 4 && Bg(e, n), l & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = GS.bind(
          null,
          n
        ), RE(e, n))));
        break;
      case 22:
        if (l = n.memoizedState !== null || St, !l) {
          var s = t !== null && t.memoizedState !== null || Le;
          t = St, u = Le, St = l, (Le = s) && !u ? (l = 2, (n.subtreeFlags & 8772) !== 0 && (l |= 1), _n(
            e,
            n,
            l
          )) : Qn(e, n), St = t, Le = u;
        }
        break;
      case 30:
        Qn(e, n), l & 512 && Yn(n, n.return);
        break;
      case 7:
        l & 512 && Yn(n, n.return);
      default:
        Qn(e, n);
    }
  }
  function Sf(e, t) {
    for (e = e.child; e !== null; )
      Mg(e, t), e = e.sibling;
  }
  function Mg(e, t) {
    switch (e.tag) {
      case 5:
      case 26:
        try {
          var n = e.stateNode;
          if (t) {
            var l = n.style;
            typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none";
          } else {
            var u = e.stateNode, s = e.memoizedProps.style, m = s != null && s.hasOwnProperty("display") ? s.display : null;
            u.style.display = m == null || typeof m == "boolean" ? "" : ("" + m).trim();
          }
        } catch (O) {
          Ye(e, e.return, O);
        }
        Ef(e, t);
        break;
      case 6:
        try {
          e.stateNode.nodeValue = t ? "" : e.memoizedProps, _e = !0;
        } catch (O) {
          Ye(e, e.return, O);
        }
        break;
      case 18:
        try {
          var b = e.stateNode;
          t ? xy(b, !0) : xy(e.stateNode, !1);
        } catch (O) {
          Ye(e, e.return, O);
        }
        break;
      case 22:
      case 23:
        e.memoizedState === null && Sf(e, t);
        break;
      default:
        Sf(e, t);
    }
  }
  function Ef(e, t) {
    if (e.subtreeFlags & 67108864)
      for (e = e.child; e !== null; ) {
        e: {
          var n = e, l = t;
          switch (n.tag) {
            case 4:
              Mg(n, l);
              break e;
            case 22:
              n.memoizedState === null && Ef(n, l);
              break e;
            default:
              Ef(n, l);
          }
        }
        e = e.sibling;
      }
  }
  function Ng(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Ng(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Oo(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Fe = null, Gt = !1;
  function Mn(e, t, n) {
    for (n = n.child; n !== null; )
      _g(e, t, n), n = n.sibling;
  }
  function _g(e, t, n) {
    if (Jt && typeof Jt.onCommitFiberUnmount == "function")
      try {
        Jt.onCommitFiberUnmount(Fr, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Le || wt(n, t), Mn(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !Le && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Le || wt(n, t), Ai(n);
        var l = Fe, u = Gt;
        Ia(n.type) && (Fe = n.stateNode, Gt = !1), Mn(
          e,
          t,
          n
        ), jy(
          n.stateNode,
          n.type,
          n.memoizedProps
        ), Fe = l, Gt = u;
        break;
      case 5:
        Le || wt(n, t), Ai(n);
      case 6:
        if (n.tag === 6 && Ai(n), l = Fe, u = Gt, Fe = null, Mn(
          e,
          t,
          n
        ), Fe = l, Gt = u, Fe !== null)
          if (Gt)
            try {
              (Fe.nodeType === 9 ? Fe.body : Fe.nodeName === "HTML" ? Fe.ownerDocument.body : Fe).removeChild(n.stateNode), _e = !0;
            } catch (s) {
              Ye(
                n,
                t,
                s
              );
            }
          else
            try {
              Fe.removeChild(n.stateNode), _e = !0;
            } catch (s) {
              Ye(
                n,
                t,
                s
              );
            }
        break;
      case 18:
        Fe !== null && (Gt ? (e = Fe, Ey(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), Nr(e)) : Ey(Fe, n.stateNode));
        break;
      case 4:
        l = Fe, u = Gt, Fe = n.stateNode.containerInfo, Gt = !0, Mn(
          e,
          t,
          n
        ), Fe = l, Gt = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        qa(2, n, t), Le || qa(4, n, t), Mn(
          e,
          t,
          n
        );
        break;
      case 1:
        Le || (wt(n, t), l = n.stateNode, typeof l.componentWillUnmount == "function" && vg(
          n,
          t,
          l
        )), Mn(
          e,
          t,
          n
        );
        break;
      case 21:
        Mn(
          e,
          t,
          n
        );
        break;
      case 22:
        Le = (l = Le) || n.memoizedState !== null, Mn(
          e,
          t,
          n
        ), Le = l;
        break;
      case 30:
        wt(n, t), Mn(
          e,
          t,
          n
        );
        break;
      case 7:
        Le || wt(n, t), Mn(
          e,
          t,
          n
        );
        break;
      default:
        Mn(
          e,
          t,
          n
        );
    }
  }
  function Dg(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Nr(e);
      } catch (n) {
        Ye(t, t.return, n);
      }
    }
  }
  function Bg(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Nr(e);
      } catch (n) {
        Ye(t, t.return, n);
      }
  }
  function DS(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Ag()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Ag()), t;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function xu(e, t) {
    var n = DS(e);
    t.forEach(function(l) {
      if (!n.has(l)) {
        n.add(l);
        var u = XS.bind(null, e, l);
        l.then(u, u);
      }
    });
  }
  function jt(e, t, n) {
    var l = t.deletions;
    if (l !== null)
      for (var u = 0; u < l.length; u++) {
        var s = l[u], m = e, b = t, O = b;
        e: for (; O !== null; ) {
          switch (O.tag) {
            case 27:
              if (Ia(O.type)) {
                Fe = O.stateNode, Gt = !1;
                break e;
              }
              break;
            case 5:
              Fe = O.stateNode, Gt = !1;
              break e;
            case 3:
            case 4:
              Fe = O.stateNode.containerInfo, Gt = !0;
              break e;
          }
          O = O.return;
        }
        if (Fe === null) throw Error(o(160));
        _g(m, b, s), Fe = null, Gt = !1, m = s.alternate, m !== null && (m.return = null), s.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Ug(t, e, n), t = t.sibling;
  }
  var Nn = null;
  function Ug(e, t, n) {
    var l = e.alternate, u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (u & 4 && (l = e.updateQueue, l = l !== null ? l.events : null, l !== null))
          for (var s = 0; s < l.length; s++) {
            var m = l[s];
            m.ref.impl = m.nextImpl;
          }
        jt(t, e, n), Ht(e), u & 4 && (qa(3, e, e.return), wi(3, e), qa(5, e, e.return));
        break;
      case 1:
        jt(t, e, n), Ht(e), u & 512 && (Le || l === null || wt(l, l.return)), u & 64 && St && (e = e.updateQueue, e !== null && (t = e.callbacks, t !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? t : n.concat(t))));
        break;
      case 26:
        if (s = Nn, jt(t, e, n), Ht(e), u & 512 && (Le || l === null || wt(l, l.return)), u & 4)
          if (u = l !== null ? l.memoizedState : null, n = e.memoizedState, l === null)
            if (n === null)
              if (e.stateNode === null)
                if (St)
                  e.stateNode = vy(
                    e.type,
                    e.memoizedProps,
                    t.containerInfo,
                    e
                  );
                else {
                  e: {
                    t = e.type, n = e.memoizedProps, u = s.ownerDocument || s;
                    t: switch (t) {
                      case "title":
                        l = u.getElementsByTagName("title")[0], (!l || l[ti] || l[Ct] || l.namespaceURI === "http://www.w3.org/2000/svg" || l.hasAttribute("itemprop")) && (l = u.createElement(t), u.head.insertBefore(
                          l,
                          u.querySelector("head > title")
                        )), At(l, t, n), l[Ct] = e, vt(l), t = l;
                        break e;
                      case "link":
                        if (s = qy(
                          "link",
                          "href",
                          u
                        ).get(t + (n.href || ""))) {
                          for (m = 0; m < s.length; m++)
                            if (l = s[m], l.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && l.getAttribute("rel") === (n.rel == null ? null : n.rel) && l.getAttribute("title") === (n.title == null ? null : n.title) && l.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                              s.splice(m, 1);
                              break t;
                            }
                        }
                        l = u.createElement(t), At(l, t, n), u.head.appendChild(l);
                        break;
                      case "meta":
                        if (s = qy(
                          "meta",
                          "content",
                          u
                        ).get(t + (n.content || ""))) {
                          for (m = 0; m < s.length; m++)
                            if (l = s[m], l.getAttribute("content") === (n.content == null ? null : "" + n.content) && l.getAttribute("name") === (n.name == null ? null : n.name) && l.getAttribute("property") === (n.property == null ? null : n.property) && l.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && l.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                              s.splice(m, 1);
                              break t;
                            }
                        }
                        l = u.createElement(t), At(l, t, n), u.head.appendChild(l);
                        break;
                      default:
                        throw Error(o(468, t));
                    }
                    l[Ct] = e, vt(l), t = l;
                  }
                  e.stateNode = t;
                }
              else
                St || rd(s, e.type, e.stateNode);
            else
              e.stateNode = Yy(
                s,
                n,
                e.memoizedProps
              );
          else
            u !== n ? (u === null ? (t = l.stateNode, t === null || Le || t.parentNode.removeChild(t)) : u.count--, n === null ? St || rd(s, e.type, e.stateNode) : Yy(s, n, e.memoizedProps)) : n === null && e.stateNode !== null && cf(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        break;
      case 27:
        jt(t, e, n), Ht(e), u & 512 && (Le || l === null || wt(l, l.return)), l !== null && u & 4 && cf(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (s = Gn, Gn = !1, jt(t, e, n), Gn = s, Ht(e), u & 512 && (Le || l === null || wt(l, l.return)), e.flags & 32) {
          t = e.stateNode;
          try {
            Zl(t, ""), _e = !0;
          } catch ($) {
            Ye(e, e.return, $);
          }
        }
        u & 4 && e.stateNode != null && (t = e.memoizedProps, cf(
          e,
          t,
          l !== null ? l.memoizedProps : t
        )), u & 1024 && (vf = !0);
        break;
      case 6:
        if (jt(t, e, n), Ht(e), u & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          t = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = t, _e = !0;
          } catch ($) {
            Ye(e, e.return, $);
          }
        }
        break;
      case 3:
        if (_e = !1, Hu = null, s = Nn, Nn = Li(t.containerInfo), jt(t, e, n), Nn = s, Ht(e), u & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Nr(t.containerInfo);
          } catch ($) {
            Ye(e, e.return, $);
          }
        vf && (vf = !1, jg(e)), _e = !1;
        break;
      case 4:
        u = Gn, Gn = St, l = nh(), s = Nn, Nn = Li(
          e.stateNode.containerInfo
        ), jt(t, e, n), Ht(e), Nn = s, _e && zi && (Su = !0), _e = l, Gn = u;
        break;
      case 12:
        jt(t, e, n), Ht(e);
        break;
      case 31:
        jt(t, e, n), Ht(e), u & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, xu(e, t)));
        break;
      case 13:
        jt(t, e, n), Ht(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Ru = Pt()), u & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, xu(e, t)));
        break;
      case 22:
        s = e.memoizedState !== null, m = l !== null && l.memoizedState !== null;
        var b = St, O = Le, B = Gn;
        St = b || s, Gn = B || s, Le = O || m, jt(t, e, n), Le = O, Gn = B, St = b, Ht(e), u & 8192 && (t = e.stateNode, t._visibility = s ? t._visibility & -2 : t._visibility | 1, !s || l === null || m || St || Le || (t = m || Le, n = St, l = Le, St = s || St, Le = t, Va(e, 2), St = n, Le = l), !s && Gn || Sf(e, s)), u & 4 && (t = e.updateQueue, t !== null && (n = t.retryQueue, n !== null && (t.retryQueue = null, xu(e, n))));
        break;
      case 19:
        jt(t, e, n), Ht(e), u & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, xu(e, t)));
        break;
      case 30:
        u & 512 && (Le || l === null || wt(l, l.return)), u = nh(), s = zi, m = (n & 335544064) === n, b = e.memoizedProps, zi = m && da(
          b.default,
          b.update
        ) !== "none", jt(t, e, n), Ht(e), m && l !== null && _e && (e.flags |= 4), zi = s, _e = u;
        break;
      case 21:
        break;
      case 7:
        u & 512 && (Le || l === null || wt(l, l.return)), l && l.stateNode !== null && (l.stateNode._fragmentFiber = e);
      default:
        jt(t, e, n), Ht(e);
    }
  }
  function Ht(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if (Sg(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        l = null;
        for (var u = e.return; u !== null; ) {
          if (uf(u)) {
            var s = u.stateNode;
            l === null ? l = [s] : l.push(s);
          }
          if (of(u)) break;
          u = u.return;
        }
        var m = l;
        if (n == null) throw Error(o(160));
        switch (n.tag) {
          case 27:
            var b = n.stateNode, O = ff(e);
            gu(
              e,
              O,
              b,
              m
            );
            break;
          case 5:
            var B = n.stateNode;
            n.flags & 32 && (Zl(B, ""), n.flags &= -33);
            var $ = ff(e);
            gu(
              e,
              $,
              B,
              m
            );
            break;
          case 3:
          case 4:
            var I = n.stateNode.containerInfo, N = ff(e);
            df(
              e,
              N,
              I,
              m
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (L) {
        Ye(e, e.return, L);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function jg(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        jg(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, Mr = !0, t.reset(), Mr = !1), e = e.sibling;
      }
  }
  function mr(e, t) {
    if (t.subtreeFlags & 9270)
      for (t = t.child; t !== null; )
        Hg(t, e), t = t.sibling;
    else wg(t);
  }
  function Hg(e, t) {
    var n = e.alternate;
    if (n === null) mf(e, !1);
    else
      switch (e.tag) {
        case 3:
          if (bf = Xn = !1, Cg(), mr(t, e), !Xn && !Su) {
            if (e = qn, e !== null)
              for (var l = 0; l < e.length; l += 3) {
                n = e[l];
                var u = e[l + 1];
                Ty(n, e[l + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + u + ")"
                  }
                );
              }
            e = t.containerInfo, e = e.nodeType === 9 ? e.documentElement : e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "" && (e.style.viewTransitionName = "none", e.animate(
              { opacity: [0, 0], pointerEvents: ["none", "none"] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition-group(root)"
              }
            ), e.animate(
              { width: [0, 0], height: [0, 0] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition"
              }
            )), bf = !0;
          }
          qn = null;
          break;
        case 5:
          mr(t, e);
          break;
        case 4:
          l = Xn, Xn = !1, mr(t, e), Xn && (Su = !0), Xn = l;
          break;
        case 22:
          e.memoizedState === null && (n.memoizedState !== null ? mf(e, !1) : mr(t, e));
          break;
        case 30:
          l = Xn, u = Cg(), Xn = !1, mr(t, e), Xn && (e.flags |= 4);
          var s = e.memoizedProps, m = e.stateNode;
          t = fa(s, m), m = fa(n.memoizedProps, m);
          var b = da(s.default, s.update);
          b === "none" ? t = !1 : (s = n.memoizedState, n.memoizedState = null, n = e.child, Vt = 0, t = yf(
            e,
            n,
            t,
            m,
            b,
            s,
            !0
          ), Vt !== (s === null ? 0 : s.length) && (e.flags |= 32)), (e.flags & 4) !== 0 && t ? (Sr(
            e,
            e.memoizedProps.onUpdate
          ), qn = u) : u !== null && (u.push.apply(u, qn), qn = u), Xn = (e.flags & 32) !== 0 ? !0 : l;
          break;
        default:
          mr(t, e);
      }
  }
  function Qn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        zg(e, t.alternate, t), t = t.sibling;
  }
  function Va(e, t) {
    for (e = e.child; e !== null; ) {
      var n = e, l = t;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          qa(4, n, n.return), Va(
            n,
            l
          );
          break;
        case 1:
          wt(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && vg(
            n,
            n.return,
            u
          ), Va(
            n,
            l
          );
          break;
        case 27:
          (l & 2) !== 0 && jy(
            n.stateNode,
            n.type,
            n.memoizedProps
          );
        case 5:
          wt(n, n.return), n.tag !== 5 && n.tag !== 27 || Ai(n), Va(
            n,
            l
          );
          break;
        case 6:
          Ai(n);
          break;
        case 26:
          wt(n, n.return), u = n.stateNode, n.memoizedState !== null || u === null || Le || u.parentNode.removeChild(u), Va(
            n,
            l
          );
          break;
        case 22:
          n.memoizedState === null && Va(
            n,
            l
          );
          break;
        case 30:
          wt(n, n.return), Va(
            n,
            l
          );
          break;
        case 7:
          wt(n, n.return);
        default:
          Va(
            n,
            l
          );
      }
      e = e.sibling;
    }
  }
  function _n(e, t, n) {
    for (n = (t.subtreeFlags & 8772) !== 0 ? n : n & -2, t = t.child; t !== null; ) {
      var l = t.alternate, u = e, s = t, m = s.flags, b = (n & 1) !== 0;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          _n(
            u,
            s,
            n
          ), wi(4, s);
          break;
        case 1:
          if (_n(
            u,
            s,
            n
          ), l = s, u = l.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch ($) {
              Ye(l, l.return, $);
            }
          if (l = s, u = l.updateQueue, u !== null) {
            var O = l.stateNode;
            try {
              var B = u.shared.hiddenCallbacks;
              if (B !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < B.length; u++)
                  rp(B[u], O);
            } catch ($) {
              Ye(l, l.return, $);
            }
          }
          b && m & 64 && yg(s), Yn(s, s.return);
          break;
        case 27:
          (n & 2) !== 0 && Eg(s);
        case 5:
          s.tag !== 5 && s.tag !== 27 || bg(s), _n(
            u,
            s,
            n
          ), b && l === null && m & 4 && sf(s), Yn(s, s.return);
          break;
        case 6:
          bg(s);
          break;
        case 26:
          O = s.stateNode, s.memoizedState !== null || O === null || St || rd(
            Li(O.ownerDocument),
            s.type,
            O
          ), _n(
            u,
            s,
            n
          ), b && l === null && m & 4 && sf(s), Yn(s, s.return);
          break;
        case 12:
          _n(
            u,
            s,
            n
          );
          break;
        case 31:
          _n(
            u,
            s,
            n
          ), b && m & 4 && Dg(u, s);
          break;
        case 13:
          _n(
            u,
            s,
            n
          ), b && m & 4 && Bg(u, s);
          break;
        case 22:
          s.memoizedState === null && _n(
            u,
            s,
            n
          ), Yn(s, s.return);
          break;
        case 30:
          _n(
            u,
            s,
            n
          ), Yn(s, s.return);
          break;
        case 7:
          Yn(s, s.return);
        default:
          _n(
            u,
            s,
            n
          );
      }
      t = t.sibling;
    }
  }
  function xf(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && hi(n));
  }
  function Cf(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && hi(e));
  }
  function En(e, t, n, l) {
    var u = (n & 335544064) === n;
    if (t.subtreeFlags & (u ? 10262 : 10256))
      for (t = t.child; t !== null; )
        Lg(
          e,
          t,
          n,
          l
        ), t = t.sibling;
    else u && Og(t);
  }
  function Lg(e, t, n, l) {
    var u = (n & 335544064) === n;
    u && t.alternate === null && t.return !== null && t.return.alternate !== null && bu(t);
    var s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        En(
          e,
          t,
          n,
          l
        ), s & 2048 && wi(9, t);
        break;
      case 1:
        En(
          e,
          t,
          n,
          l
        );
        break;
      case 3:
        En(
          e,
          t,
          n,
          l
        ), u && bf && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), s & 2048 && (s = null, t.alternate !== null && (s = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== s && (t.refCount++, s != null && hi(s)));
        break;
      case 12:
        if (s & 2048) {
          En(
            e,
            t,
            n,
            l
          ), s = t.stateNode;
          try {
            var m = t.memoizedProps, b = m.id, O = m.onPostCommit;
            typeof O == "function" && O(
              b,
              t.alternate === null ? "mount" : "update",
              s.passiveEffectDuration,
              -0
            );
          } catch (B) {
            Ye(t, t.return, B);
          }
        } else
          En(
            e,
            t,
            n,
            l
          );
        break;
      case 31:
        En(
          e,
          t,
          n,
          l
        );
        break;
      case 13:
        En(
          e,
          t,
          n,
          l
        );
        break;
      case 23:
        break;
      case 22:
        m = t.stateNode, b = t.alternate, t.memoizedState !== null ? (u && b !== null && b.memoizedState === null && bu(b), m._visibility & 2 ? En(
          e,
          t,
          n,
          l
        ) : Mi(
          e,
          t
        )) : (u && b !== null && b.memoizedState !== null && bu(t), m._visibility & 2 ? En(
          e,
          t,
          n,
          l
        ) : (m._visibility |= 2, hr(
          e,
          t,
          n,
          l,
          (t.subtreeFlags & 10256) !== 0 || !1
        ))), s & 2048 && xf(b, t);
        break;
      case 24:
        En(
          e,
          t,
          n,
          l
        ), s & 2048 && Cf(t.alternate, t);
        break;
      case 30:
        u && (s = t.alternate, s !== null && (Vn(s.child, !0), Vn(t.child, !0))), En(
          e,
          t,
          n,
          l
        );
        break;
      default:
        En(
          e,
          t,
          n,
          l
        );
    }
  }
  function hr(e, t, n, l, u) {
    for (u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var s = e, m = t, b = n, O = l, B = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          hr(
            s,
            m,
            b,
            O,
            u
          ), wi(8, m);
          break;
        case 23:
          break;
        case 22:
          var $ = m.stateNode;
          m.memoizedState !== null ? $._visibility & 2 ? hr(
            s,
            m,
            b,
            O,
            u
          ) : Mi(
            s,
            m
          ) : ($._visibility |= 2, hr(
            s,
            m,
            b,
            O,
            u
          )), u && B & 2048 && xf(
            m.alternate,
            m
          );
          break;
        case 24:
          hr(
            s,
            m,
            b,
            O,
            u
          ), u && B & 2048 && Cf(m.alternate, m);
          break;
        default:
          hr(
            s,
            m,
            b,
            O,
            u
          );
      }
      t = t.sibling;
    }
  }
  function Mi(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, l = t, u = l.flags;
        switch (l.tag) {
          case 22:
            Mi(n, l), u & 2048 && xf(
              l.alternate,
              l
            );
            break;
          case 24:
            Mi(n, l), u & 2048 && Cf(l.alternate, l);
            break;
          default:
            Mi(n, l);
        }
        t = t.sibling;
      }
  }
  var Al = 8192;
  function zl(e, t, n) {
    if (e.subtreeFlags & Al)
      for (e = e.child; e !== null; )
        kg(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function kg(e, t, n) {
    switch (e.tag) {
      case 26:
        zl(
          e,
          t,
          n
        ), e.flags & Al && (e.memoizedState !== null ? kE(
          n,
          Nn,
          e.memoizedState,
          e.memoizedProps
        ) : (e = e.stateNode, (t & 335544128) === t && Qy(n, e)));
        break;
      case 5:
        zl(
          e,
          t,
          n
        ), e.flags & Al && (e = e.stateNode, (t & 335544128) === t && Qy(n, e));
        break;
      case 3:
      case 4:
        var l = Nn;
        Nn = Li(e.stateNode.containerInfo), zl(
          e,
          t,
          n
        ), Nn = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = Al, Al = 16777216, zl(
          e,
          t,
          n
        ), Al = l) : zl(
          e,
          t,
          n
        ));
        break;
      case 30:
        if ((e.flags & Al) !== 0 && (l = e.memoizedProps.name, l != null && l !== "auto")) {
          var u = e.stateNode;
          u.paired = null, nn === null && (nn = /* @__PURE__ */ new Map()), nn.set(l, u);
        }
        zl(
          e,
          t,
          n
        );
        break;
      default:
        zl(
          e,
          t,
          n
        );
    }
  }
  function $g(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Ni(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          Et = l, qg(
            l,
            e
          );
        }
      $g(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Yg(e), e = e.sibling;
  }
  function Yg(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ni(e), e.flags & 2048 && qa(9, e, e.return);
        break;
      case 3:
        Ni(e);
        break;
      case 12:
        Ni(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Cu(e)) : Ni(e);
        break;
      default:
        Ni(e);
    }
  }
  function Cu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          Et = l, qg(
            l,
            e
          );
        }
      $g(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          qa(8, t, t.return), Cu(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Cu(t));
          break;
        default:
          Cu(t);
      }
      e = e.sibling;
    }
  }
  function qg(e, t) {
    for (; Et !== null; ) {
      var n = Et;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          qa(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          hi(n.memoizedState.cache);
      }
      if (l = n.child, l !== null) l.return = n, Et = l;
      else
        e: for (n = e; Et !== null; ) {
          l = Et;
          var u = l.sibling, s = l.return;
          if (Ng(l), l === n) {
            Et = null;
            break e;
          }
          if (u !== null) {
            u.return = s, Et = u;
            break e;
          }
          Et = s;
        }
    }
  }
  var BS = {
    getCacheForType: function(e) {
      var t = Tt(ct), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return Tt(ct).controller.signal;
    }
  }, US = typeof WeakMap == "function" ? WeakMap : Map, De = 0, Xe = null, we = null, ze = 0, $e = 0, an = null, Ga = !1, pr = !1, Tf = !1, Ea = 0, rt = 0, Xa = 0, Ml = 0, Tu = 0, ln = 0, gr = 0, _i = null, Xt = null, Rf = !1, Ru = 0, Vg = 0, Ou = 1 / 0, wu = null, Qa = null, nt = 0, Dn = null, Nl = null, Kn = 0, Of = 0, wf = null, Gg = null, yr = null, vr = null, br = null, Di = 0, Au = null;
  function rn() {
    return (De & 2) !== 0 && ze !== 0 ? ze & -ze : ie.T !== null ? Hf() : Km();
  }
  function Xg() {
    if (ln === 0)
      if ((ze & 536870912) === 0 || Te) {
        var e = xo;
        xo <<= 1, (xo & 3932160) === 0 && (xo = 262144), ln = e;
      } else ln = 536870912;
    return e = Rt.current, e !== null && (e.flags |= 32), ln;
  }
  function Sr(e, t) {
    if (t != null) {
      var n = e.stateNode, l = n.ref;
      l === null && (l = n.ref = Ry(
        fa(e.memoizedProps, n)
      )), vr === null && (vr = []), vr.push(t.bind(null, l));
    }
  }
  function Qt(e, t, n) {
    (e === Xe && ($e === 2 || $e === 9) || e.cancelPendingCommit !== null) && (Er(e, 0), Ka(
      e,
      ze,
      ln,
      !1
    )), ei(e, n), ((De & 2) === 0 || e !== Xe) && (e === Xe && ((De & 2) === 0 && (Ml |= n), rt === 4 && Ka(
      e,
      ze,
      ln,
      !1
    )), Zn(e));
  }
  function Qg(e, t, n) {
    if ((De & 6) !== 0) throw Error(o(327));
    var l = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Wr(e, t), u = l ? LS(e, t) : zf(e, t, !0), s = l;
    do {
      if (u === 0) {
        pr && !l && Ka(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, s && !jS(n)) {
          u = zf(e, t, !1), s = !1;
          continue;
        }
        if (u === 2) {
          if (s = t, e.errorRecoveryDisabledLanes & s)
            var m = 0;
          else
            m = e.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
          if (m !== 0) {
            t = m;
            e: {
              var b = e;
              u = _i;
              var O = b.current.memoizedState.isDehydrated;
              if (O && (Er(b, m).flags |= 256), m = zf(
                b,
                m,
                !1
              ), m !== 2 && m !== 6) {
                if (Tf && !O) {
                  b.errorRecoveryDisabledLanes |= s, Ml |= s, u = 4;
                  break e;
                }
                s = Xt, Xt = u, s !== null && (Xt === null ? Xt = s : Xt.push.apply(
                  Xt,
                  s
                ));
              }
              u = m;
            }
            if (s = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          Er(e, 0), Ka(e, t, 0, !0);
          break;
        }
        e: {
          switch (l = e, s = u, s) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t && (t & 62914560) !== t)
                break;
            case 6:
              Ka(
                l,
                t,
                ln,
                !Ga
              );
              break e;
            case 2:
              Xt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (u = Ru + 300 - Pt(), 10 < u)) {
            if (Ka(
              l,
              t,
              ln,
              !Ga
            ), To(l, 0, !0) !== 0) break e;
            Kn = t, l.timeoutHandle = Zf(
              Kg.bind(
                null,
                l,
                n,
                Xt,
                wu,
                Rf,
                t,
                ln,
                Ml,
                gr,
                Ga,
                s,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break e;
          }
          Kg(
            l,
            n,
            Xt,
            wu,
            Rf,
            t,
            ln,
            Ml,
            gr,
            Ga,
            s,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Zn(e);
  }
  function Kg(e, t, n, l, u, s, m, b, O, B, $, I, N, L) {
    e.timeoutHandle = -1;
    var re = t.subtreeFlags, ce = (s & 335544064) === s;
    if (I = null, (ce || re & 8192 || (re & 16785408) === 16785408) && (I = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Ln
    }, nn = null, kg(
      t,
      s,
      I
    ), ce && (re = I, ce = e.containerInfo, ce = (ce.nodeType === 9 ? ce : ce.ownerDocument).__reactViewTransition, ce != null && (re.count++, re.waitingForViewTransition = !0, re = Yi.bind(re), ce.finished.then(re, re))), re = (s & 62914560) === s ? Ru - Pt() : (s & 4194048) === s ? Vg - Pt() : 0, re = $E(
      I,
      re
    ), re !== null)) {
      Kn = s, e.cancelPendingCommit = re(
        ty.bind(
          null,
          e,
          t,
          s,
          n,
          l,
          u,
          m,
          b,
          O,
          B,
          $,
          I,
          null,
          N,
          L
        )
      ), Ka(e, s, m, !B);
      return;
    }
    ty(
      e,
      t,
      s,
      n,
      l,
      u,
      m,
      b,
      O,
      B,
      $,
      I
    );
  }
  function jS(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var l = 0; l < n.length; l++) {
          var u = n[l], s = u.getSnapshot;
          u = u.value;
          try {
            if (!en(s(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Ka(e, t, n, l) {
    t = qm(e, t), t &= ~Tu, t &= ~Ml, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var u = t; 0 < u; ) {
      var s = 31 - Ft(u), m = 1 << s;
      l[s] = -1, u &= ~m;
    }
    n !== 0 && Gm(e, n, t);
  }
  function zu() {
    return (De & 6) === 0 ? (Bi(0), !1) : !0;
  }
  function Af() {
    if (we !== null) {
      if ($e === 0)
        var e = we.return;
      else
        e = we, pa = vl = null, Uc(e), or = null, yi = 0, e = we;
      for (; e !== null; )
        gg(e.alternate, e), e = e.return;
      we = null;
    }
  }
  function Er(e, t) {
    var n = e.timeoutHandle;
    return n !== -1 && (e.timeoutHandle = -1, iE(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Kn = 0, Af(), Xe = e, we = n = ma(e.current, null), ze = t, $e = 0, an = null, Ga = !1, pr = Wr(e, t), Tf = !1, gr = ln = Tu = Ml = Xa = rt = 0, Xt = _i = null, Rf = !1, Ea = qm(e, t), Ho(), n;
  }
  function Zg(e, t) {
    Ee = null, ie.H = uu, t === ir || t === Zo ? (t = tp(), $e = 3) : t === xc ? (t = tp(), $e = 4) : $e = t === Pc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, an = t, we === null && (rt = 1, su(
      e,
      yn(t, e.current)
    ));
  }
  function Ig() {
    var e = Rt.current;
    return e === null ? !0 : (ze & 4194048) === ze ? Nt === null : (ze & 62914560) === ze || (ze & 536870912) !== 0 ? e === Nt : !1;
  }
  function Pg() {
    var e = ie.H;
    return ie.H = uu, e === null ? uu : e;
  }
  function Jg() {
    var e = ie.A;
    return ie.A = BS, e;
  }
  function Mu() {
    rt = 4, Ga || (ze & 4194048) !== ze && Rt.current !== null || (pr = !0), (Xa & 134217727) === 0 && (Ml & 134217727) === 0 || Xe === null || Ka(
      Xe,
      ze,
      ln,
      !1
    );
  }
  function zf(e, t, n) {
    var l = De;
    De |= 2;
    var u = Pg(), s = Jg();
    (Xe !== e || ze !== t) && (wu = null, Er(e, t)), t = !1;
    var m = rt;
    e: do
      try {
        if ($e !== 0 && we !== null) {
          var b = we, O = an;
          switch ($e) {
            case 8:
              Af(), m = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Rt.current === null && (t = !0);
              var B = $e;
              if ($e = 0, an = null, xr(e, b, O, B), n && pr) {
                m = 0;
                break e;
              }
              break;
            default:
              B = $e, $e = 0, an = null, xr(e, b, O, B);
          }
        }
        HS(), m = rt;
        break;
      } catch ($) {
        Zg(e, $);
      }
    while (!0);
    return t && e.shellSuspendCounter++, pa = vl = null, De = l, ie.H = u, ie.A = s, we === null && (Xe = null, ze = 0, Ho()), m;
  }
  function HS() {
    for (; we !== null; ) Fg(we);
  }
  function LS(e, t) {
    var n = De;
    De |= 2;
    var l = Pg(), u = Jg();
    Xe !== e || ze !== t ? (wu = null, Ou = Pt() + 500, Er(e, t)) : pr = Wr(
      e,
      t
    );
    e: do
      try {
        if ($e !== 0 && we !== null) {
          t = we;
          var s = an;
          t: switch ($e) {
            case 1:
              $e = 0, an = null, xr(e, t, s, 1);
              break;
            case 2:
            case 9:
              if (Wh(s)) {
                $e = 0, an = null, Wg(t);
                break;
              }
              t = function() {
                $e !== 2 && $e !== 9 || Xe !== e || ($e = 7), Zn(e);
              }, s.then(t, t);
              break e;
            case 3:
              $e = 7;
              break e;
            case 4:
              $e = 5;
              break e;
            case 7:
              Wh(s) ? ($e = 0, an = null, Wg(t)) : ($e = 0, an = null, xr(e, t, s, 7));
              break;
            case 5:
              var m = null;
              switch (we.tag) {
                case 26:
                  m = we.memoizedState;
                case 5:
                case 27:
                  var b = we;
                  if (m ? Gy(m) : b.stateNode.complete) {
                    $e = 0, an = null;
                    var O = b.sibling;
                    if (O !== null) we = O;
                    else {
                      var B = b.return;
                      B !== null ? (we = B, Nu(B)) : we = null;
                    }
                    break t;
                  }
              }
              $e = 0, an = null, xr(e, t, s, 5);
              break;
            case 6:
              $e = 0, an = null, xr(e, t, s, 6);
              break;
            case 8:
              Af(), rt = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        kS();
        break;
      } catch ($) {
        Zg(e, $);
      }
    while (!0);
    return pa = vl = null, ie.H = l, ie.A = u, De = n, we !== null ? 0 : (Xe = null, ze = 0, Ho(), rt);
  }
  function kS() {
    for (; we !== null && !n1(); )
      Fg(we);
  }
  function Fg(e) {
    var t = hg(e.alternate, e, Ea);
    e.memoizedProps = e.pendingProps, t === null ? Nu(e) : we = t;
  }
  function Wg(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = og(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          ze
        );
        break;
      case 11:
        t = og(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          ze
        );
        break;
      case 5:
        Uc(t);
        var l = t;
        l === bt && (Te ? (Vo(l), l.tag === 5 && l.stateNode != null && (Pe = l.stateNode)) : (Vo(l), Te = !0));
      default:
        gg(n, t), t = we = qh(t, Ea), t = hg(n, t, Ea);
    }
    e.memoizedProps = e.pendingProps, t === null ? Nu(e) : we = t;
  }
  function xr(e, t, n, l) {
    pa = vl = null, Uc(t), or = null, yi = 0;
    var u = t.return;
    try {
      if (OS(
        e,
        u,
        t,
        n,
        ze
      )) {
        rt = 1, su(
          e,
          yn(n, e.current)
        ), we = null;
        return;
      }
    } catch (s) {
      if (u !== null) throw we = u, s;
      rt = 1, su(
        e,
        yn(n, e.current)
      ), we = null;
      return;
    }
    t.flags & 32768 ? (Te || l === 1 ? e = !0 : pr || (ze & 536870912) !== 0 ? e = !1 : (Ga = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Rt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), ey(t, e)) : Nu(t);
  }
  function Nu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        ey(
          t,
          Ga
        );
        return;
      }
      e = t.return;
      var n = MS(
        t.alternate,
        t,
        Ea
      );
      if (n !== null) {
        we = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        we = t;
        return;
      }
      we = t = e;
    } while (t !== null);
    rt === 0 && (rt = 5);
  }
  function ey(e, t) {
    do {
      var n = NS(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, we = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        we = e;
        return;
      }
      we = e = n;
    } while (e !== null);
    rt = 6, we = null;
  }
  function ty(e, t, n, l, u, s, m, b, O, B, $, I) {
    e.cancelPendingCommit = null;
    do
      _u();
    while (nt !== 0);
    if ((De & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      e === Xe && (we = Xe = null, ze = 0), Nl = t, Dn = e, Kn = n, wf = u, Gg = l, $S(
        e,
        t,
        n,
        m,
        b,
        O,
        I
      );
    }
  }
  function $S(e, t, n, l, u, s, m) {
    var b = t.lanes | t.childLanes;
    if (Of = b, b |= sc, d1(
      e,
      n,
      b,
      l,
      u,
      s
    ), vr = null, (n & 335544064) === n ? (br = hS(e), l = 10262) : (br = null, l = 10256), (t.subtreeFlags & l) !== 0 || (t.flags & l) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, QS(So, function() {
      return Df(), null;
    })) : (e.callbackNode = null, e.callbackPriority = 0), yu = !1, l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
      l = ie.T, ie.T = null, u = me.p, me.p = 2, s = De, De |= 4;
      try {
        _S(e, t, n);
      } finally {
        De = s, me.p = u, ie.T = l;
      }
    }
    nt = 1, yu ? yr = dE(
      m,
      e.containerInfo,
      br,
      Mf,
      Nf,
      qS,
      _f,
      Df,
      YS
    ) : (Mf(), Nf(), _f());
  }
  function YS(e) {
    if (nt !== 0) {
      var t = Dn.onRecoverableError;
      t(e, { componentStack: null });
    }
  }
  function qS() {
    nt === 3 && (nt = 0, Hg(Nl, Dn), nt = 4);
  }
  function Mf() {
    if (nt === 1) {
      nt = 0;
      var e = Dn, t = Nl, n = Kn, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = ie.T, ie.T = null;
        var u = me.p;
        me.p = 2;
        var s = De;
        De |= 4;
        try {
          zi = Su = !1, Ug(t, e, n), n = Xf;
          var m = _h(e.containerInfo), b = n.focusedElem, O = n.selectionRange;
          if (m !== b && b && b.ownerDocument && Nh(
            b.ownerDocument.documentElement,
            b
          )) {
            if (O !== null && lc(b)) {
              var B = O.start, $ = O.end;
              if ($ === void 0 && ($ = B), "selectionStart" in b)
                b.selectionStart = B, b.selectionEnd = Math.min(
                  $,
                  b.value.length
                );
              else {
                var I = b.ownerDocument || document, N = I && I.defaultView || window;
                if (N.getSelection) {
                  var L = N.getSelection(), re = b.textContent.length, ce = Math.min(O.start, re), xe = O.end === void 0 ? ce : Math.min(O.end, re);
                  !L.extend && ce > xe && (m = xe, xe = ce, ce = m);
                  var D = Mh(
                    b,
                    ce
                  ), z = Mh(
                    b,
                    xe
                  );
                  if (D && z && (L.rangeCount !== 1 || L.anchorNode !== D.node || L.anchorOffset !== D.offset || L.focusNode !== z.node || L.focusOffset !== z.offset)) {
                    var H = I.createRange();
                    H.setStart(D.node, D.offset), L.removeAllRanges(), ce > xe ? (L.addRange(H), L.extend(z.node, z.offset)) : (H.setEnd(z.node, z.offset), L.addRange(H));
                  }
                }
              }
            }
            for (I = [], L = b; L = L.parentNode; )
              L.nodeType === 1 && I.push({
                element: L,
                left: L.scrollLeft,
                top: L.scrollTop
              });
            for (typeof b.focus == "function" && b.focus(), b = 0; b < I.length; b++) {
              var Z = I[b];
              Z.element.scrollLeft = Z.left, Z.element.scrollTop = Z.top;
            }
          }
          Mr = !!Gf, Xf = Gf = null;
        } finally {
          De = s, me.p = u, ie.T = l;
        }
      }
      e.current = t, nt = 2;
    }
  }
  function Nf() {
    if (nt === 2) {
      nt = 0;
      var e = Dn, t = Nl, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = ie.T, ie.T = null;
        var l = me.p;
        me.p = 2;
        var u = De;
        De |= 4;
        try {
          zg(e, t.alternate, t);
        } finally {
          De = u, me.p = l, ie.T = n;
        }
      }
      nt = 3;
    }
  }
  function _f() {
    if (nt === 4 || nt === 3) {
      nt = 0;
      var e = yr;
      yr = null, a1();
      var t = Dn, n = Nl, l = Kn, u = Gg, s = (l & 335544064) === l ? 10262 : 10256;
      if ((n.subtreeFlags & s) !== 0 || (n.flags & s) !== 0 ? nt = 5 : (nt = 0, Nl = Dn = null, ny(t, t.pendingLanes)), s = t.pendingLanes, s === 0 && (Qa = null), $s(l), n = n.stateNode, Jt && typeof Jt.onCommitFiberRoot == "function")
        try {
          Jt.onCommitFiberRoot(
            Fr,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (u !== null) {
        n = ie.T, s = me.p, me.p = 2, ie.T = null;
        try {
          for (var m = t.onRecoverableError, b = 0; b < u.length; b++) {
            var O = u[b];
            m(O.value, {
              componentStack: O.stack
            });
          }
        } finally {
          ie.T = n, me.p = s;
        }
      }
      if (u = vr, m = br, br = null, u !== null && (vr = null, m === null && (m = []), e !== null))
        for (O = 0; O < u.length; O++)
          n = (0, u[O])(
            m
          ), n !== void 0 && e.finished.finally(n);
      (Kn & 3) !== 0 && _u(), Zn(t), s = t.pendingLanes, (l & 261930) !== 0 && (s & 42) !== 0 ? t === Au ? Di++ : (Di = 0, Au = t) : (Di = 0, Au = null), Bi(0);
    }
  }
  function ny(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, hi(t)));
  }
  function _u() {
    return yr !== null && (yr.skipTransition(), yr = null), Mf(), Nf(), _f(), Df();
  }
  function Df() {
    if (nt !== 5) return !1;
    var e = Dn, t = Of;
    Of = 0;
    var n = $s(Kn), l = ie.T, u = me.p;
    try {
      me.p = 32 > n ? 32 : n, ie.T = null, n = wf, wf = null;
      var s = Dn, m = Kn;
      if (nt = 0, Nl = Dn = null, Kn = 0, (De & 6) !== 0) throw Error(o(331));
      var b = De;
      if (De |= 4, Yg(s.current), Lg(
        s,
        s.current,
        m,
        n
      ), De = b, Bi(0, !1), Jt && typeof Jt.onPostCommitFiberRoot == "function")
        try {
          Jt.onPostCommitFiberRoot(Fr, s);
        } catch {
        }
      return !0;
    } finally {
      me.p = u, ie.T = l, ny(e, t);
    }
  }
  function ay(e, t, n) {
    t = yn(n, t), t = Ic(e.stateNode, t, 2), e = La(e, t, 2), e !== null && (ei(e, 2), Zn(e));
  }
  function Ye(e, t, n) {
    if (e.tag === 3)
      ay(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ay(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Qa === null || !Qa.has(l))) {
            e = yn(n, e), n = Wp(2), l = La(t, n, 2), l !== null && (eg(
              n,
              l,
              t,
              e
            ), ei(l, 2), Zn(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function Bf(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new US();
      var u = /* @__PURE__ */ new Set();
      l.set(t, u);
    } else
      u = l.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), l.set(t, u));
    u.has(n) || (Tf = !0, u.add(n), e = VS.bind(null, e, t, n), t.then(e, e));
  }
  function VS(e, t, n) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Xe === e && (ze & n) === n && ((rt === 4 || rt === 3 && (ze & 62914560) === ze && 300 > Pt() - Ru) && (De & 2) === 0 ? Er(e, 0) : Tu |= n, gr === ze && (gr = 0)), Zn(e);
  }
  function ly(e, t) {
    t === 0 && (t = Vm()), e = pl(e, t), e !== null && (ei(e, t), Zn(e));
  }
  function GS(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), ly(e, n);
  }
  function XS(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode, u = e.memoizedState;
        u !== null && (n = u.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    l !== null && l.delete(t), ly(e, n);
  }
  function QS(e, t) {
    return js(e, t);
  }
  var Cr = null, Tr = null, Uf = !1, Du = !1, jf = !1, Za = 0;
  function Zn(e) {
    e !== Tr && e.next === null && (Tr === null ? Cr = Tr = e : Tr = Tr.next = e), Du = !0, Uf || (Uf = !0, ZS());
  }
  function Bi(e, t) {
    if (!jf && Du) {
      jf = !0;
      do
        for (var n = !1, l = Cr; l !== null; ) {
          if (e !== 0) {
            var u = l.pendingLanes;
            if (u === 0) var s = 0;
            else {
              var m = l.suspendedLanes, b = l.pingedLanes;
              s = (1 << 31 - Ft(42 | e) + 1) - 1, s &= u & ~(m & ~b), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0;
            }
            s !== 0 && (n = !0, uy(l, s));
          } else
            s = ze, s = To(
              l,
              l === Xe ? s : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (s & 3) === 0 || Wr(l, s) || (n = !0, uy(l, s));
          l = l.next;
        }
      while (n);
      jf = !1;
    }
  }
  function KS() {
    ry();
  }
  function ry() {
    Du = Uf = !1;
    var e = 0;
    Za !== 0 && rE() && (e = Za);
    for (var t = Pt(), n = null, l = Cr; l !== null; ) {
      var u = l.next, s = iy(l, t);
      s === 0 ? (l.next = null, n === null ? Cr = u : n.next = u, u === null && (Tr = n)) : (n = l, (e !== 0 || (s & 3) !== 0) && (Du = !0)), l = u;
    }
    nt !== 0 && nt !== 5 || Bi(e), Za !== 0 && (Za = 0);
  }
  function iy(e, t) {
    for (var n = e.suspendedLanes, l = e.pingedLanes, u = e.expirationTimes, s = e.pendingLanes & -62914561; 0 < s; ) {
      var m = 31 - Ft(s), b = 1 << m, O = u[m];
      O === -1 ? ((b & n) === 0 || (b & l) !== 0) && (u[m] = f1(b, t)) : O <= t && (e.expiredLanes |= b), s &= ~b;
    }
    if (t = Xe, n = ze, n = To(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, n === 0 || e === t && ($e === 2 || $e === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && Hs(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || Wr(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (l !== null && Hs(l), $s(n)) {
        case 2:
        case 8:
          n = $m;
          break;
        case 32:
          n = So;
          break;
        case 268435456:
          n = Ym;
          break;
        default:
          n = So;
      }
      return l = oy.bind(null, e), n = js(n, l), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return l !== null && l !== null && Hs(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function oy(e, t) {
    if (nt !== 0 && nt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (_u() && e.callbackNode !== n)
      return null;
    var l = ze;
    return l = To(
      e,
      e === Xe ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (Qg(e, l, t), iy(e, Pt()), e.callbackNode != null && e.callbackNode === n ? oy.bind(null, e) : null);
  }
  function uy(e, t) {
    if (_u()) return null;
    Qg(e, t, !0);
  }
  function ZS() {
    oE(function() {
      (De & 6) !== 0 ? js(
        km,
        KS
      ) : ry();
    });
  }
  function Hf() {
    if (Za === 0) {
      var e = El;
      e === 0 && (e = Eo, Eo <<= 1, (Eo & 261888) === 0 && (Eo = 256)), Za = e;
    }
    return Za;
  }
  function sy(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : zo(e);
  }
  function IS(e, t, n, l, u) {
    if (t === "submit" && n && n.stateNode === u) {
      var s = sy(
        (u[Yt] || null).action
      ), m = l.submitter;
      m && (t = (t = m[Yt] || null) ? sy(t.formAction) : m.getAttribute("formAction"), t !== null && (s = t, m = null));
      var b = new Do(
        "action",
        "action",
        null,
        l,
        u
      );
      e.push({
        event: b,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (Za !== 0) {
                  var O = new FormData(u, m);
                  Gc(
                    n,
                    {
                      pending: !0,
                      data: O,
                      method: u.method,
                      action: s
                    },
                    null,
                    O
                  );
                }
              } else
                typeof s == "function" && (b.preventDefault(), O = new FormData(u, m), Gc(
                  n,
                  {
                    pending: !0,
                    data: O,
                    method: u.method,
                    action: s
                  },
                  s,
                  O
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var Lf = 0; Lf < uc.length; Lf++) {
    var kf = uc[Lf], PS = kf.toLowerCase(), JS = kf[0].toUpperCase() + kf.slice(1);
    zn(
      PS,
      "on" + JS
    );
  }
  zn(Uh, "onAnimationEnd"), zn(jh, "onAnimationIteration"), zn(Hh, "onAnimationStart"), zn("dblclick", "onDoubleClick"), zn("focusin", "onFocus"), zn("focusout", "onBlur"), zn(iS, "onTransitionRun"), zn(oS, "onTransitionStart"), zn(uS, "onTransitionCancel"), zn(Lh, "onTransitionEnd"), Ql("onMouseEnter", ["mouseout", "mouseover"]), Ql("onMouseLeave", ["mouseout", "mouseover"]), Ql("onPointerEnter", ["pointerout", "pointerover"]), Ql("onPointerLeave", ["pointerout", "pointerover"]), dl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), dl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), dl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), dl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), dl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), dl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Ui = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), FS = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ui)
  );
  function cy(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n], u = l.event;
      l = l.listeners;
      e: {
        var s = void 0;
        if (t)
          for (var m = l.length - 1; 0 <= m; m--) {
            var b = l[m], O = b.instance, B = b.currentTarget;
            if (b = b.listener, O !== s && u.isPropagationStopped())
              break e;
            s = b, u.currentTarget = B;
            try {
              s(u);
            } catch ($) {
              jo($);
            }
            u.currentTarget = null, s = O;
          }
        else
          for (m = 0; m < l.length; m++) {
            if (b = l[m], O = b.instance, B = b.currentTarget, b = b.listener, O !== s && u.isPropagationStopped())
              break e;
            s = b, u.currentTarget = B;
            try {
              s(u);
            } catch ($) {
              jo($);
            }
            u.currentTarget = null, s = O;
          }
      }
    }
  }
  function Ae(e, t) {
    var n = t[Im];
    n === void 0 && (n = t[Im] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    n.has(l) || (fy(t, e, 2, !1), n.add(l));
  }
  function $f(e, t, n) {
    var l = 0;
    t && (l |= 4), fy(
      n,
      e,
      l,
      t
    );
  }
  var Bu = "_reactListening" + Math.random().toString(36).slice(2);
  function Yf(e) {
    if (!e[Bu]) {
      e[Bu] = !0, Fm.forEach(function(n) {
        n !== "selectionchange" && (FS.has(n) || $f(n, !1, e), $f(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Bu] || (t[Bu] = !0, $f("selectionchange", !1, t));
    }
  }
  function fy(e, t, n, l) {
    switch (e0(t)) {
      case 2:
        var u = GE;
        break;
      case 8:
        u = XE;
        break;
      default:
        u = od;
    }
    n = u.bind(
      null,
      t,
      n,
      e
    ), u = void 0, !Zs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), l ? u !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: u
    }) : e.addEventListener(t, n, !0) : u !== void 0 ? e.addEventListener(t, n, {
      passive: u
    }) : e.addEventListener(t, n, !1);
  }
  function qf(e, t, n, l, u) {
    var s = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var m = l.tag;
        if (m === 3 || m === 4) {
          var b = l.stateNode.containerInfo;
          if (b === u) break;
          if (m === 4)
            for (m = l.return; m !== null; ) {
              var O = m.tag;
              if ((O === 3 || O === 4) && m.stateNode.containerInfo === u)
                return;
              m = m.return;
            }
          for (; b !== null; ) {
            if (m = fl(b), m === null) return;
            if (O = m.tag, O === 5 || O === 6 || O === 26 || O === 27) {
              l = s = m;
              continue e;
            }
            b = b.parentNode;
          }
        }
        l = l.return;
      }
    fh(function() {
      var B = s, $ = Qs(n), I = [];
      e: {
        var N = kh.get(e);
        if (N !== void 0) {
          var L = Do, re = e;
          switch (e) {
            case "keypress":
              if (No(n) === 0) break e;
            case "keydown":
            case "keyup":
              L = j1;
              break;
            case "focusin":
              re = "focus", L = Fs;
              break;
            case "focusout":
              re = "blur", L = Fs;
              break;
            case "beforeblur":
            case "afterblur":
              L = Fs;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              L = hh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              L = T1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              L = Y1;
              break;
            case Uh:
            case jh:
            case Hh:
              L = w1;
              break;
            case Lh:
              L = V1;
              break;
            case "scroll":
            case "scrollend":
              L = x1;
              break;
            case "wheel":
              L = X1;
              break;
            case "copy":
            case "cut":
            case "paste":
              L = z1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              L = gh;
              break;
            case "submit":
              L = k1;
              break;
            case "toggle":
            case "beforetoggle":
              L = K1;
          }
          var ce = (t & 4) !== 0, xe = !ce && (e === "scroll" || e === "scrollend"), D = ce ? N !== null ? N + "Capture" : null : N;
          ce = [];
          for (var z = B, H; z !== null; ) {
            var Z = z;
            if (H = Z.stateNode, Z = Z.tag, Z !== 5 && Z !== 26 && Z !== 27 || H === null || D === null || (Z = ai(z, D), Z != null && ce.push(
              ji(z, Z, H)
            )), xe) break;
            z = z.return;
          }
          0 < ce.length && (N = new L(
            N,
            re,
            null,
            n,
            $
          ), I.push({ event: N, listeners: ce }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (L = e === "mouseover" || e === "pointerover", N = e === "mouseout" || e === "pointerout", L && n !== Xs && (re = n.relatedTarget || n.fromElement) && (fl(re) || re[Vl]))
            break e;
          (N || L) && (re = $.window === $ ? $ : (L = $.ownerDocument) ? L.defaultView || L.parentWindow : window, N ? (L = n.relatedTarget || n.toElement, N = B, L = L ? fl(L) : null, L !== null && (xe = f(L), ce = L.tag, L !== xe || ce !== 5 && ce !== 27 && ce !== 6) && (L = null)) : (N = null, L = B), N !== L && (ce = hh, Z = "onMouseLeave", D = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (ce = gh, Z = "onPointerLeave", D = "onPointerEnter", z = "pointer"), xe = N == null ? re : ni(N), H = L == null ? re : ni(L), re = new ce(
            Z,
            z + "leave",
            N,
            n,
            $
          ), re.target = xe, re.relatedTarget = H, Z = null, fl($) === B && (ce = new ce(
            D,
            z + "enter",
            L,
            n,
            $
          ), ce.target = H, ce.relatedTarget = xe, Z = ce), xe = Z, ce = N && L ? X(
            N,
            L,
            WS
          ) : null, N !== null && dy(
            I,
            re,
            N,
            ce,
            !1
          ), L !== null && xe !== null && dy(
            I,
            xe,
            L,
            ce,
            !0
          )));
        }
        e: {
          if (N = B ? ni(B) : window, L = N.nodeName && N.nodeName.toLowerCase(), L === "select" || L === "input" && N.type === "file")
            var ue = Th;
          else if (xh(N))
            if (Rh)
              ue = aS;
            else {
              ue = tS;
              var Me = eS;
            }
          else
            L = N.nodeName, !L || L.toLowerCase() !== "input" || N.type !== "checkbox" && N.type !== "radio" ? B && Gs(B.elementType) && (ue = Th) : ue = nS;
          if (ue && (ue = ue(e, B))) {
            Ch(
              I,
              ue,
              n,
              $
            );
            break e;
          }
          Me && Me(e, N, B);
        }
        switch (Me = B ? ni(B) : window, e) {
          case "focusin":
            (xh(Me) || Me.contentEditable === "true") && (Fl = Me, rc = B, fi = null);
            break;
          case "focusout":
            fi = rc = Fl = null;
            break;
          case "mousedown":
            ic = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ic = !1, Dh(I, n, $);
            break;
          case "selectionchange":
            if (rS) break;
          case "keydown":
          case "keyup":
            Dh(I, n, $);
        }
        var de;
        if (ec)
          e: {
            switch (e) {
              case "compositionstart":
                var pe = "onCompositionStart";
                break e;
              case "compositionend":
                pe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                pe = "onCompositionUpdate";
                break e;
            }
            pe = void 0;
          }
        else
          Jl ? Sh(e, n) && (pe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (pe = "onCompositionStart");
        pe && (yh && n.locale !== "ko" && (Jl || pe !== "onCompositionStart" ? pe === "onCompositionEnd" && Jl && (de = dh()) : (za = $, Is = "value" in za ? za.value : za.textContent, Jl = !0)), Me = Uu(B, pe), 0 < Me.length && (pe = new ph(
          pe,
          e,
          null,
          n,
          $
        ), I.push({ event: pe, listeners: Me }), de ? pe.data = de : (de = Eh(n), de !== null && (pe.data = de)))), (de = I1 ? P1(e, n) : J1(e, n)) && (pe = Uu(B, "onBeforeInput"), 0 < pe.length && (Me = new ph(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          $
        ), I.push({
          event: Me,
          listeners: pe
        }), Me.data = de)), IS(
          I,
          e,
          B,
          n,
          $
        );
      }
      cy(I, t);
    });
  }
  function ji(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Uu(e, t) {
    for (var n = t + "Capture", l = []; e !== null; ) {
      var u = e, s = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || s === null || (u = ai(e, n), u != null && l.unshift(
        ji(e, u, s)
      ), u = ai(e, t), u != null && l.push(
        ji(e, u, s)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function WS(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function dy(e, t, n, l, u) {
    for (var s = t._reactName, m = []; n !== null && n !== l; ) {
      var b = n, O = b.alternate, B = b.stateNode;
      if (b = b.tag, O !== null && O === l) break;
      b !== 5 && b !== 26 && b !== 27 || B === null || (O = B, u ? (B = ai(n, s), B != null && m.unshift(
        ji(n, B, O)
      )) : u || (B = ai(n, s), B != null && m.push(
        ji(n, B, O)
      ))), n = n.return;
    }
    m.length !== 0 && e.push({ event: t, listeners: m });
  }
  var eE = /\r\n?/g, tE = /\u0000|\uFFFD/g;
  function my(e) {
    return (typeof e == "string" ? e : "" + e).replace(eE, `
`).replace(tE, "");
  }
  function hy(e, t) {
    return t = my(t), my(e) === t;
  }
  function qe(e, t, n, l, u, s) {
    switch (n) {
      case "children":
        if (typeof l == "string")
          t === "body" || t === "textarea" && l === "" || Zl(e, l);
        else if (typeof l == "number" || typeof l == "bigint")
          t !== "body" && Zl(e, "" + l);
        else return;
        break;
      case "className":
        Ao(e, "class", l);
        break;
      case "tabIndex":
        Ao(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ao(e, n, l);
        break;
      case "style":
        sh(e, l, s);
        return;
      case "data":
        if (t !== "object") {
          Ao(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        l = zo(l), e.setAttribute(n, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof s == "function" && (n === "formAction" ? (t !== "input" && qe(e, t, "name", u.name, u, null), qe(
            e,
            t,
            "formEncType",
            u.formEncType,
            u,
            null
          ), qe(
            e,
            t,
            "formMethod",
            u.formMethod,
            u,
            null
          ), qe(
            e,
            t,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (qe(e, t, "encType", u.encType, u, null), qe(e, t, "method", u.method, u, null), qe(e, t, "target", u.target, u, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        l = zo(l), e.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (e.onclick = Ln);
        return;
      case "onScroll":
        l != null && Ae("scroll", e);
        return;
      case "onScrollEnd":
        l != null && Ae("scrollend", e);
        return;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(o(61));
          if (n = l.__html, n != null) {
            if (u.children != null) throw Error(o(60));
            (s != null ? s.__html : void 0) !== n && (e.innerHTML = n);
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        n = zo(l), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, l) : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0 ? e.setAttribute(n, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, l) : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(n, l) : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(n) : e.setAttribute(n, l);
        break;
      case "popover":
        Ae("beforetoggle", e), Ae("toggle", e), wo(e, "popover", l);
        break;
      case "xlinkActuate":
        sa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        sa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        sa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        sa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        sa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        sa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        sa(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        sa(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        sa(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        wo(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N")
          n = S1.get(n) || n, wo(e, n, l);
        else return;
    }
    _e = !0;
  }
  function Vf(e, t, n, l, u, s) {
    switch (n) {
      case "style":
        sh(e, l, s);
        return;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(o(61));
          if (n = l.__html, n != null) {
            if (u.children != null) throw Error(o(60));
            (s != null ? s.__html : void 0) !== n && (e.innerHTML = n);
          }
        }
        break;
      case "children":
        if (typeof l == "string") Zl(e, l);
        else if (typeof l == "number" || typeof l == "bigint")
          Zl(e, "" + l);
        else return;
        break;
      case "onScroll":
        l != null && Ae("scroll", e);
        return;
      case "onScrollEnd":
        l != null && Ae("scrollend", e);
        return;
      case "onClick":
        l != null && (e.onclick = Ln);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!Wm.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (u = n.endsWith("Capture"), s = n.slice(2, u ? n.length - 7 : void 0), t = e[Yt] || null, t = t != null ? t[n] : null, typeof t == "function" && e.removeEventListener(s, t, u), typeof l == "function")) {
              typeof t != "function" && t !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(s, l, u);
              break e;
            }
            _e = !0, n in e ? e[n] = l : l === !0 ? e.setAttribute(n, "") : wo(e, n, l);
          }
        return;
    }
    _e = !0;
  }
  function At(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ae("error", e), Ae("load", e);
        var l = !1, u = !1, s;
        for (s in n)
          if (n.hasOwnProperty(s)) {
            var m = n[s];
            if (m != null)
              switch (s) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  qe(e, t, s, m, n, null);
              }
          }
        u && qe(e, t, "srcSet", n.srcSet, n, null), l && qe(e, t, "src", n.src, n, null);
        return;
      case "input":
        Ae("invalid", e);
        var b = s = m = u = null, O = null, B = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var $ = n[l];
            if ($ != null)
              switch (l) {
                case "name":
                  u = $;
                  break;
                case "type":
                  m = $;
                  break;
                case "checked":
                  O = $;
                  break;
                case "defaultChecked":
                  B = $;
                  break;
                case "value":
                  s = $;
                  break;
                case "defaultValue":
                  b = $;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if ($ != null)
                    throw Error(o(137, t));
                  break;
                default:
                  qe(e, t, l, $, n, null);
              }
          }
        rh(
          e,
          s,
          b,
          O,
          B,
          m,
          u,
          !1
        );
        return;
      case "select":
        Ae("invalid", e), l = m = s = null;
        for (u in n)
          if (n.hasOwnProperty(u) && (b = n[u], b != null))
            switch (u) {
              case "value":
                s = b;
                break;
              case "defaultValue":
                m = b;
                break;
              case "multiple":
                l = b;
              default:
                qe(e, t, u, b, n, null);
            }
        t = s, n = m, e.multiple = !!l, t != null ? Kl(e, !!l, t, !1) : n != null && Kl(e, !!l, n, !0);
        return;
      case "textarea":
        Ae("invalid", e), s = u = l = null;
        for (m in n)
          if (n.hasOwnProperty(m) && (b = n[m], b != null))
            switch (m) {
              case "value":
                l = b;
                break;
              case "defaultValue":
                u = b;
                break;
              case "children":
                s = b;
                break;
              case "dangerouslySetInnerHTML":
                if (b != null) throw Error(o(91));
                break;
              default:
                qe(e, t, m, b, n, null);
            }
        oh(e, l, u, s);
        return;
      case "option":
        for (O in n)
          if (n.hasOwnProperty(O) && (l = n[O], l != null))
            switch (O) {
              case "selected":
                e.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                qe(e, t, O, l, n, null);
            }
        return;
      case "dialog":
        Ae("beforetoggle", e), Ae("toggle", e), Ae("cancel", e), Ae("close", e);
        break;
      case "iframe":
      case "object":
        Ae("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Ui.length; l++)
          Ae(Ui[l], e);
        break;
      case "image":
        Ae("error", e), Ae("load", e);
        break;
      case "details":
        Ae("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ae("error", e), Ae("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (B in n)
          if (n.hasOwnProperty(B) && (l = n[B], l != null))
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                qe(e, t, B, l, n, null);
            }
        return;
      default:
        if (Gs(t)) {
          for ($ in n)
            n.hasOwnProperty($) && (l = n[$], l !== void 0 && Vf(
              e,
              t,
              $,
              l,
              n,
              void 0
            ));
          return;
        }
    }
    for (b in n)
      n.hasOwnProperty(b) && (l = n[b], l != null && qe(e, t, b, l, n, null));
  }
  var nE = {};
  function aE(e, t, n, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null, s = null, m = null, b = null, O = null, B = null, $ = null;
        for (L in n) {
          var I = n[L];
          if (n.hasOwnProperty(L) && I != null)
            switch (L) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                O = I;
              default:
                l.hasOwnProperty(L) || qe(e, t, L, null, l, I);
            }
        }
        for (var N in l) {
          var L = l[N];
          if (I = n[N], l.hasOwnProperty(N) && (L != null || I != null))
            switch (N) {
              case "type":
                L !== I && (_e = !0), s = L;
                break;
              case "name":
                L !== I && (_e = !0), u = L;
                break;
              case "checked":
                L !== I && (_e = !0), B = L;
                break;
              case "defaultChecked":
                L !== I && (_e = !0), $ = L;
                break;
              case "value":
                L !== I && (_e = !0), m = L;
                break;
              case "defaultValue":
                L !== I && (_e = !0), b = L;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (L != null)
                  throw Error(o(137, t));
                break;
              default:
                L !== I && qe(
                  e,
                  t,
                  N,
                  L,
                  l,
                  I
                );
            }
        }
        qs(
          e,
          m,
          b,
          O,
          B,
          $,
          s,
          u
        );
        return;
      case "select":
        L = m = b = N = null;
        for (s in n)
          if (O = n[s], n.hasOwnProperty(s) && O != null)
            switch (s) {
              case "value":
                break;
              case "multiple":
                L = O;
              default:
                l.hasOwnProperty(s) || qe(
                  e,
                  t,
                  s,
                  null,
                  l,
                  O
                );
            }
        for (u in l)
          if (s = l[u], O = n[u], l.hasOwnProperty(u) && (s != null || O != null))
            switch (u) {
              case "value":
                s !== O && (_e = !0), N = s;
                break;
              case "defaultValue":
                s !== O && (_e = !0), b = s;
                break;
              case "multiple":
                s !== O && (_e = !0), m = s;
              default:
                s !== O && qe(
                  e,
                  t,
                  u,
                  s,
                  l,
                  O
                );
            }
        t = b, n = m, l = L, N != null ? Kl(e, !!n, N, !1) : !!l != !!n && (t != null ? Kl(e, !!n, t, !0) : Kl(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        L = N = null;
        for (b in n)
          if (u = n[b], n.hasOwnProperty(b) && u != null && !l.hasOwnProperty(b))
            switch (b) {
              case "value":
                break;
              case "children":
                break;
              default:
                qe(e, t, b, null, l, u);
            }
        for (m in l)
          if (u = l[m], s = n[m], l.hasOwnProperty(m) && (u != null || s != null))
            switch (m) {
              case "value":
                u !== s && (_e = !0), N = u;
                break;
              case "defaultValue":
                u !== s && (_e = !0), L = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(o(91));
                break;
              default:
                u !== s && qe(e, t, m, u, l, s);
            }
        ih(e, N, L);
        return;
      case "option":
        for (var re in n)
          if (N = n[re], n.hasOwnProperty(re) && N != null && !l.hasOwnProperty(re))
            switch (re) {
              case "selected":
                e.selected = !1;
                break;
              default:
                qe(
                  e,
                  t,
                  re,
                  null,
                  l,
                  N
                );
            }
        for (O in l)
          if (N = l[O], L = n[O], l.hasOwnProperty(O) && N !== L && (N != null || L != null))
            switch (O) {
              case "selected":
                N !== L && (_e = !0), e.selected = N && typeof N != "function" && typeof N != "symbol";
                break;
              default:
                qe(
                  e,
                  t,
                  O,
                  N,
                  l,
                  L
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ce in n)
          N = n[ce], n.hasOwnProperty(ce) && N != null && !l.hasOwnProperty(ce) && qe(e, t, ce, null, l, N);
        for (B in l)
          if (N = l[B], L = n[B], l.hasOwnProperty(B) && N !== L && (N != null || L != null))
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(o(137, t));
                break;
              default:
                qe(
                  e,
                  t,
                  B,
                  N,
                  l,
                  L
                );
            }
        return;
      default:
        if (Gs(t)) {
          for (var xe in n)
            N = n[xe], n.hasOwnProperty(xe) && N !== void 0 && !l.hasOwnProperty(xe) && Vf(
              e,
              t,
              xe,
              void 0,
              l,
              N
            );
          for ($ in l)
            N = l[$], L = n[$], !l.hasOwnProperty($) || N === L || N === void 0 && L === void 0 || Vf(
              e,
              t,
              $,
              N,
              l,
              L
            );
          return;
        }
    }
    for (var D in n)
      N = n[D], n.hasOwnProperty(D) && N != null && !l.hasOwnProperty(D) && qe(e, t, D, null, l, N);
    for (I in l)
      N = l[I], L = n[I], !l.hasOwnProperty(I) || N === L || N == null && L == null || qe(e, t, I, N, l, L);
  }
  function py(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function lE() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), l = 0; l < n.length; l++) {
        var u = n[l], s = u.transferSize, m = u.initiatorType, b = u.duration;
        if (s && b && py(m)) {
          for (m = 0, b = u.responseEnd, l += 1; l < n.length; l++) {
            var O = n[l], B = O.startTime;
            if (B > b) break;
            var $ = O.transferSize, I = O.initiatorType;
            $ && py(I) && (O = O.responseEnd, m += $ * (O < b ? 1 : (b - B) / (O - B)));
          }
          if (--l, t += 8 * (s + m) / (u.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Gf = null, Xf = null;
  function Hi(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function gy(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function yy(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function vy(e, t, n, l) {
    return n = Hi(
      n
    ).createElement(e), n[Ct] = l, n[Yt] = t, At(n, e, t), vt(n), n;
  }
  function Qf(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Kf = null;
  function rE() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Kf ? !1 : (Kf = e, !0) : (Kf = null, !1);
  }
  var Zf = typeof setTimeout == "function" ? setTimeout : void 0, iE = typeof clearTimeout == "function" ? clearTimeout : void 0, by = typeof Promise == "function" ? Promise : void 0, Sy = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Zf, oE = typeof queueMicrotask == "function" ? queueMicrotask : typeof by < "u" ? function(e) {
    return by.resolve(null).then(e).catch(uE);
  } : Zf;
  function uE(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ia(e) {
    return e === "head";
  }
  function Ey(e, t) {
    var n = t, l = 0;
    do {
      var u = n.nextSibling;
      if (e.removeChild(n), u && u.nodeType === 8)
        if (n = u.data, n === "/$" || n === "/&") {
          if (l === 0) {
            e.removeChild(u), Nr(t);
            return;
          }
          l--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          l++;
        else if (n === "html")
          nd(
            e.ownerDocument.documentElement
          );
        else if (n === "head") {
          n = e.ownerDocument.head, nd(n);
          for (var s = n.firstChild; s; ) {
            var m = s.nextSibling, b = s.nodeName;
            s[ti] || b === "SCRIPT" || b === "STYLE" || b === "LINK" && s.rel.toLowerCase() === "stylesheet" || n.removeChild(s), s = m;
          }
        } else
          n === "body" && nd(e.ownerDocument.body);
      n = u;
    } while (n);
    Nr(t);
  }
  function xy(e, t) {
    var n = e;
    e = 0;
    do {
      var l = n.nextSibling;
      if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), l && l.nodeType === 8)
        if (n = l.data, n === "/$") {
          if (e === 0) break;
          e--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
      n = l;
    } while (n);
  }
  function Cy(e, t, n) {
    if (t = CSS.escape(t) !== t ? "r-" + btoa(t).replace(/=/g, "") : t, e.style.viewTransitionName = t, n != null && (e.style.viewTransitionClass = n), n = getComputedStyle(e), n.display === "inline") {
      if (t = e.getClientRects(), t.length === 1) var l = 1;
      else
        for (var u = l = 0; u < t.length; u++) {
          var s = t[u];
          0 < s.width && 0 < s.height && l++;
        }
      l === 1 && (e = e.style, e.display = t.length === 1 ? "inline-block" : "block", e.marginTop = "-" + n.paddingTop, e.marginBottom = "-" + n.paddingBottom);
    }
  }
  function Ty(e, t) {
    e = e.style, t = t.style;
    var n = t != null ? t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null : null;
    e.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = t != null ? t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null : null, e.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), e.display === "inline-block" && (t == null ? e.display = e.margin = "" : (n = t.display, e.display = n == null || typeof n == "boolean" ? "" : n, n = t.margin, n != null ? e.margin = n : (n = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], e.marginTop = n == null || typeof n == "boolean" ? "" : n, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], e.marginBottom = t == null || typeof t == "boolean" ? "" : t)));
  }
  function sE(e, t, n) {
    return n = n.ownerDocument.defaultView, {
      rect: e,
      abs: t.position === "absolute" || t.position === "fixed",
      clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
      view: 0 <= e.bottom && 0 <= e.right && e.top <= n.innerHeight && e.left <= n.innerWidth
    };
  }
  function If(e) {
    var t = e.getBoundingClientRect(), n = getComputedStyle(e);
    return sE(t, n, e);
  }
  function cE(e) {
    return e.documentElement.clientHeight;
  }
  function fE(e) {
    this.addEventListener("load", e), this.addEventListener("error", e);
  }
  function dE(e, t, n, l, u, s, m, b, O) {
    var B = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var $ = B.startViewTransition({
        update: function() {
          var N = B.defaultView, L = N.navigation && N.navigation.transition, re = B.fonts.status;
          l();
          var ce = [];
          if (re === "loaded" && (cE(B), B.fonts.status === "loading" && ce.push(B.fonts.ready)), re = ce.length, e !== null)
            for (var xe = e.suspenseyImages, D = 0, z = 0; z < xe.length; z++) {
              var H = xe[z];
              if (!H.complete) {
                var Z = H.getBoundingClientRect();
                if (0 < Z.bottom && 0 < Z.right && Z.top < N.innerHeight && Z.left < N.innerWidth) {
                  if (D += Xy(H), D > Lu) {
                    ce.length = re;
                    break;
                  }
                  H = new Promise(
                    fE.bind(H)
                  ), ce.push(H);
                }
              }
            }
          if (0 < ce.length)
            return N = Promise.race([
              Promise.all(ce),
              new Promise(function(ue) {
                return setTimeout(ue, 500);
              })
            ]).then(u, u), (L ? Promise.allSettled([L.finished, N]) : N).then(s, s);
          if (u(), L)
            return L.finished.then(
              s,
              s
            );
          s();
        },
        types: n
      });
      B.__reactViewTransition = $;
      var I = [];
      return $.ready.then(
        function() {
          for (var N = B.documentElement.getAnimations({
            subtree: !0
          }), L = 0; L < N.length; L++) {
            var re = N[L], ce = re.effect, xe = ce.pseudoElement;
            if (xe != null && xe.startsWith("::view-transition")) {
              I.push(re), re = ce.getKeyframes();
              for (var D = xe = void 0, z = !0, H = 0; H < re.length; H++) {
                var Z = re[H], ue = Z.width;
                if (xe === void 0) xe = ue;
                else if (xe !== ue) {
                  z = !1;
                  break;
                }
                if (ue = Z.height, D === void 0) D = ue;
                else if (D !== ue) {
                  z = !1;
                  break;
                }
                delete Z.width, delete Z.height, Z.transform === "none" && delete Z.transform;
              }
              z && xe !== void 0 && D !== void 0 && (ce.setKeyframes(re), z = getComputedStyle(
                ce.target,
                ce.pseudoElement
              ), z.width !== xe || z.height !== D) && (z = re[0], z.width = xe, z.height = D, z = re[re.length - 1], z.width = xe, z.height = D, ce.setKeyframes(re));
            }
          }
          m();
        },
        function(N) {
          B.__reactViewTransition === $ && (B.__reactViewTransition = null);
          try {
            if (typeof N == "object" && N !== null)
              switch (N.name) {
                case "InvalidStateError":
                  (N.message === "View transition was skipped because document visibility state is hidden." || N.message === "Skipping view transition because document visibility state has become hidden." || N.message === "Skipping view transition because viewport size changed." || N.message === "Transition was aborted because of invalid state") && (N = null);
              }
            N !== null && O(N);
          } finally {
            l(), u(), m();
          }
        }
      ), $.finished.finally(function() {
        for (var N = 0; N < I.length; N++)
          I[N].cancel();
        B.__reactViewTransition === $ && (B.__reactViewTransition = null), b();
      }), $;
    } catch {
      return l(), u(), m(), null;
    }
  }
  function _l(e, t) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + t + ")";
  }
  _l.prototype.animate = function(e, t) {
    return t = typeof t == "number" ? { duration: t } : q({}, t), t.pseudoElement = this._selector, this._scope.animate(e, t);
  }, _l.prototype.getAnimations = function() {
    for (var e = this._scope, t = this._selector, n = e.getAnimations({ subtree: !0 }), l = [], u = 0; u < n.length; u++) {
      var s = n[u].effect;
      s !== null && s.target === e && s.pseudoElement === t && l.push(n[u]);
    }
    return l;
  }, _l.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function Ry(e) {
    return {
      name: e,
      group: new _l("group", e),
      imagePair: new _l("image-pair", e),
      old: new _l("old", e),
      new: new _l("new", e)
    };
  }
  function on(e) {
    this._fragmentFiber = e, this._observers = this._eventListeners = null;
  }
  on.prototype.addEventListener = function(e, t, n) {
    var l = null, u = null;
    if (!(n != null && typeof n != "boolean" && (l = n.signal || null, l !== null && l.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var s = this._eventListeners;
      if (wy(s, e, t, n) === -1) {
        var m = this, b = t;
        n != null && typeof n != "boolean" && n.once === !0 && (b = function(O) {
          m.removeEventListener(
            e,
            t,
            n
          ), typeof t == "function" ? t.call(this, O) : t.handleEvent(O);
        }), l !== null && (u = m.removeEventListener.bind(
          m,
          e,
          t,
          n
        ), l.addEventListener("abort", u, { once: !0 }), u = l.removeEventListener.bind(l, "abort", u)), l = Rr(n), s.push({
          type: e,
          listener: t,
          optionsOrUseCapture: n,
          attachedListener: b,
          cleanup: u
        }), g(
          this._fragmentFiber.child,
          !1,
          mE,
          e,
          b,
          l
        );
      }
      this._eventListeners = s;
    }
  };
  function mE(e, t, n, l) {
    return T(e).addEventListener(
      t,
      n,
      l
    ), !1;
  }
  on.prototype.removeEventListener = function(e, t, n) {
    var l = this._eventListeners;
    if (l !== null && (t = wy(
      l,
      e,
      t,
      n
    ), t !== -1)) {
      var u = l[t];
      n = u.attachedListener;
      var s = u.cleanup;
      u = Rr(u.optionsOrUseCapture), g(
        this._fragmentFiber.child,
        !1,
        hE,
        e,
        n,
        u
      ), l.splice(t, 1), s !== null && s();
    }
  };
  function hE(e, t, n, l) {
    return T(e).removeEventListener(
      t,
      n,
      l
    ), !1;
  }
  function Rr(e) {
    return e != null && typeof e != "boolean" && (e.once === !0 || e.signal instanceof AbortSignal) ? { capture: e.capture, passive: e.passive } : e;
  }
  function Oy(e) {
    return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
  }
  function wy(e, t, n, l) {
    if (e.length === 0) return -1;
    l = Oy(l);
    for (var u = 0; u < e.length; u++) {
      var s = e[u];
      if (s.type === t && s.listener === n && Oy(s.optionsOrUseCapture) === l)
        return u;
    }
    return -1;
  }
  on.prototype.dispatchEvent = function(e) {
    var t = x(
      this._fragmentFiber
    );
    if (t === null) return !0;
    t = T(t);
    var n = this._eventListeners;
    if (n !== null && 0 < n.length || !e.bubbles) {
      var l = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
      if (n)
        for (var u = 0; u < n.length; u++) {
          var s = n[u];
          l.addEventListener(
            s.type,
            s.attachedListener,
            Rr(s.optionsOrUseCapture)
          );
        }
      if (t.appendChild(l), e = l.dispatchEvent(e), n)
        for (u = 0; u < n.length; u++)
          s = n[u], l.removeEventListener(
            s.type,
            s.attachedListener,
            Rr(s.optionsOrUseCapture)
          );
      return t.removeChild(l), e;
    }
    return t.dispatchEvent(e);
  }, on.prototype.focus = function(e) {
    g(
      this._fragmentFiber.child,
      !0,
      Ay,
      e,
      void 0,
      void 0
    );
  };
  function Ay(e, t) {
    return e.tag === 6 ? !1 : (e = T(e), OE(e, t));
  }
  on.prototype.focusLast = function(e) {
    var t = [];
    g(
      this._fragmentFiber.child,
      !0,
      Pf,
      t,
      void 0,
      void 0
    );
    for (var n = t.length - 1; 0 <= n && !Ay(t[n], e); n--) ;
  };
  function Pf(e, t) {
    return t.push(e), !1;
  }
  on.prototype.blur = function() {
    var e = x(
      this._fragmentFiber
    );
    e !== null && (e = T(e), e = Hi(e).activeElement, e !== null && g(
      this._fragmentFiber.child,
      !1,
      pE,
      e,
      void 0,
      void 0
    ));
  };
  function pE(e, t) {
    return e.tag === 6 ? !1 : (e = T(e), e === t || e.contains(t) ? (t.blur(), !0) : !1);
  }
  on.prototype.observeUsing = function(e) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), g(
      this._fragmentFiber.child,
      !1,
      gE,
      e,
      void 0,
      void 0
    );
  };
  function gE(e, t) {
    return e.tag === 6 || (e = T(e), t.observe(e)), !1;
  }
  on.prototype.unobserveUsing = function(e) {
    var t = this._observers;
    if (t !== null && t.has(e)) {
      t.delete(e), g(
        this._fragmentFiber.child,
        !1,
        yE,
        e,
        void 0,
        void 0
      );
      for (var n = t = 0; n < Bn.length; n++) {
        var l = Bn[n];
        l.fragmentInstance === this && l.observer === e ? e.unobserve(l.instance) : Bn[t++] = l;
      }
      Bn.length = t;
    }
  };
  function yE(e, t) {
    return e.tag === 6 || (e = T(e), t.unobserve(e)), !1;
  }
  var Bn = [], Jf = !1;
  function vE(e, t, n) {
    Bn.push({
      fragmentInstance: e,
      observer: t,
      instance: n
    }), Jf || (Jf = !0, wE(function() {
      Jf = !1;
      var l = Bn;
      Bn = [];
      for (var u = 0; u < l.length; u++) {
        var s = l[u];
        s.observer.unobserve(s.instance);
      }
    }));
  }
  on.prototype.getClientRects = function() {
    var e = [];
    return g(
      this._fragmentFiber.child,
      !1,
      bE,
      e,
      void 0,
      void 0
    ), e;
  };
  function bE(e, t) {
    if (e.tag === 6) {
      e = e.stateNode;
      var n = e.ownerDocument.createRange();
      n.selectNodeContents(e), t.push.apply(t, n.getClientRects());
    } else
      e = T(e), t.push.apply(t, e.getClientRects());
    return !1;
  }
  on.prototype.getRootNode = function(e) {
    var t = x(
      this._fragmentFiber
    );
    return t === null ? this : T(t).getRootNode(e);
  }, on.prototype.compareDocumentPosition = function(e) {
    var t = x(
      this._fragmentFiber
    );
    if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var n = [];
    g(
      this._fragmentFiber.child,
      !1,
      Pf,
      n,
      void 0,
      void 0
    );
    var l = T(t);
    if (n.length === 0) {
      if (n = l, w(this._fragmentFiber)) {
        e: {
          for (t = this._fragmentFiber.return; t !== null; ) {
            if (t.tag === 4) {
              t = t.stateNode.containerInfo;
              break e;
            }
            if (t.tag === 3 || t.tag === 5 || t.tag === 27)
              break;
            t = t.return;
          }
          t = null;
        }
        t != null && (n = t);
      }
      t = this._fragmentFiber;
      var u = l = n.compareDocumentPosition(e);
      return n === e ? u = Node.DOCUMENT_POSITION_CONTAINS : l & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = R(t)[1], n === null ? u = Node.DOCUMENT_POSITION_PRECEDING : (e = T(n).compareDocumentPosition(
        e
      ), u = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), u |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    t = T(n[0]), u = T(n[n.length - 1]);
    var s = w(this._fragmentFiber) ? t.parentElement : l;
    if (s == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    l = s.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, s = s.compareDocumentPosition(u) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var m = t.compareDocumentPosition(e), b = u.compareDocumentPosition(e), O = m & Node.DOCUMENT_POSITION_CONTAINED_BY || b & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return b = l && s && m & Node.DOCUMENT_POSITION_FOLLOWING && b & Node.DOCUMENT_POSITION_PRECEDING, t = l && t === e || s && u === e || O || b ? Node.DOCUMENT_POSITION_CONTAINED_BY : !l && t === e || !s && u === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : m, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || SE(
      t,
      this._fragmentFiber,
      n[0],
      n[n.length - 1],
      e
    ) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function SE(e, t, n, l, u) {
    var s = fl(u);
    if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (n = !!s)
        e: {
          for (; s !== null; ) {
            if (s.tag === 7 && (s === t || s.alternate === t)) {
              n = !0;
              break e;
            }
            s = s.return;
          }
          n = !1;
        }
      return n;
    }
    if (e & Node.DOCUMENT_POSITION_CONTAINS) {
      if (s === null)
        return s = u.ownerDocument, u === s || u === s.documentElement || u === s.body;
      e: {
        for (s = t, t = x(t); s !== null; ) {
          if (!(s.tag !== 5 && s.tag !== 3 && s.tag !== 27 || s !== t && s.alternate !== t)) {
            s = !0;
            break e;
          }
          s = s.return;
        }
        s = !1;
      }
      return s;
    }
    return e & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!s) && !(t = s === n) && (t = X(
      n,
      s,
      _
    ), t === null ? t = !1 : (g(
      t,
      !0,
      U,
      s,
      n
    ), s = M, M = null, t = s !== null)), t) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!s) && !(t = s === l) && (t = X(
      l,
      s,
      _
    ), t === null ? t = !1 : (g(
      t,
      !0,
      j,
      s,
      l
    ), s = M, Y = M = null, t = s !== null)), t) : !1;
  }
  function zy(e, t) {
    var n = e.ownerDocument.createRange();
    n.selectNodeContents(e), e = n.getBoundingClientRect(), window.scrollTo(
      window.scrollX + e.left,
      t ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight
    );
  }
  on.prototype.scrollIntoView = function(e) {
    if (typeof e == "object") throw Error(o(566));
    var t = [];
    g(
      this._fragmentFiber.child,
      !1,
      Pf,
      t,
      void 0,
      void 0
    );
    var n = e !== !1;
    if (t.length === 0) {
      var l = R(
        this._fragmentFiber
      );
      if (l = n ? l[1] || l[0] || x(this._fragmentFiber) : l[0] || l[1], l === null) return;
      if (l.tag === 6) {
        e = T(l), zy(e, n);
        return;
      }
      if (l = T(l), l.nodeType !== 9) {
        if (l.nodeType === 11) {
          n = "host" in l ? l.host : null, n !== null && n.scrollIntoView(e);
          return;
        }
        l.scrollIntoView(e);
      }
    }
    for (l = n ? t.length - 1 : 0; l !== (n ? -1 : t.length); ) {
      var u = t[l];
      u.tag === 6 ? (u = T(u), zy(u, n)) : T(u).scrollIntoView(e), l += n ? -1 : 1;
    }
  };
  function EE(e, t) {
    return e = T(e), My(e, t), !1;
  }
  function My(e, t) {
    e.reactFragments == null && (e.reactFragments = /* @__PURE__ */ new Set()), e.reactFragments.add(t);
  }
  function Ny(e, t) {
    var n = t._eventListeners;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var u = n[l];
        e.addEventListener(
          u.type,
          u.attachedListener,
          Rr(u.optionsOrUseCapture)
        );
      }
    e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(s) {
      for (var m = 0, b = 0; b < Bn.length; b++) {
        var O = Bn[b];
        (O.fragmentInstance !== t || O.observer !== s || O.instance !== e) && (Bn[m++] = O);
      }
      Bn.length = m, s.observe(e);
    }), My(e, t));
  }
  function xE(e, t) {
    var n = t._eventListeners;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var u = n[l];
        e.removeEventListener(
          u.type,
          u.attachedListener,
          Rr(u.optionsOrUseCapture)
        );
      }
    e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(s) {
      typeof s.rootMargin == "string" ? vE(
        t,
        s,
        e
      ) : s.unobserve(e);
    }), e.reactFragments != null && e.reactFragments.delete(t));
  }
  function Ff(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ff(n), Oo(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function CE(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var u = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[ti])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (s = e.getAttribute("rel"), s === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (s !== u.rel || e.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || e.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (s = e.getAttribute("src"), (s !== (u.src == null ? null : u.src) || e.getAttribute("type") !== (u.type == null ? null : u.type) || e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && s && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var s = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && e.getAttribute("name") === s)
          return e;
      } else return e;
      if (e = xn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function TE(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = xn(e.nextSibling), e === null)) return null;
    return e;
  }
  function _y(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = xn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Wf(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function ed(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function RE(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading")
      t();
    else {
      var l = function() {
        t(), n.removeEventListener("DOMContentLoaded", l);
      };
      n.addEventListener("DOMContentLoaded", l), e._reactRetry = l;
    }
  }
  function xn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var td = null;
  function Dy(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return xn(e.nextSibling);
          t--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function By(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (t === 0) return e;
          t--;
        } else n !== "/$" && n !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function OE(e, t) {
    function n() {
      l = !0;
    }
    if (e.ownerDocument.activeElement === e) return !0;
    var l = !1;
    try {
      e.ownerDocument.addEventListener("focus", n, !0), (e.focus || HTMLElement.prototype.focus).call(e, t);
    } finally {
      e.ownerDocument.removeEventListener("focus", n, !0);
    }
    return l;
  }
  function wE(e) {
    Sy(function() {
      Sy(function(t) {
        return e(t);
      });
    });
  }
  function Uy(e, t, n) {
    switch (t = Hi(n), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(o(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(o(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(o(454));
        return e;
      default:
        throw Error(o(451));
    }
  }
  function jy(e, t, n) {
    for (var l in n) {
      var u = n[l];
      n.hasOwnProperty(l) && u != null && qe(e, t, l, null, nE, u);
    }
    n.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === Ln && (e.onclick = null), Oo(e);
  }
  function nd(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Oo(e);
  }
  var Cn = /* @__PURE__ */ new Map(), Hy = /* @__PURE__ */ new Set();
  function Li(e) {
    if (typeof e.getRootNode == "function") {
      var t = e.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  var xa = me.d;
  me.d = {
    f: AE,
    r: zE,
    D: ME,
    C: NE,
    L: _E,
    m: DE,
    X: UE,
    S: BE,
    M: jE
  };
  function AE() {
    var e = xa.f(), t = zu();
    return e || t;
  }
  function zE(e) {
    var t = Gl(e);
    t !== null && t.tag === 5 && t.type === "form" ? kp(t) : xa.r(e);
  }
  var Or = typeof document > "u" ? null : document;
  function Ly(e, t, n) {
    var l = Or;
    if (l && typeof t == "string" && t) {
      var u = pn(t);
      u = 'link[rel="' + e + '"][href="' + u + '"]', typeof n == "string" && (u += '[crossorigin="' + n + '"]'), Hy.has(u) || (Hy.add(u), e = { rel: e, crossOrigin: n, href: t }, l.querySelector(u) === null && (t = l.createElement("link"), At(t, "link", e), vt(t), l.head.appendChild(t)));
    }
  }
  function ME(e) {
    xa.D(e), Ly("dns-prefetch", e, null);
  }
  function NE(e, t) {
    xa.C(e, t), Ly("preconnect", e, t);
  }
  function _E(e, t, n) {
    xa.L(e, t, n);
    var l = Or;
    if (l && e && t) {
      var u = 'link[rel="preload"][as="' + pn(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (u += '[imagesrcset="' + pn(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (u += '[imagesizes="' + pn(
        n.imageSizes
      ) + '"]')) : u += '[href="' + pn(e) + '"]';
      var s = u;
      switch (t) {
        case "style":
          s = wr(e);
          break;
        case "script":
          s = Ar(e);
      }
      if (!(Cn.has(s) || (e = q(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), Cn.set(s, e), l.querySelector(u) !== null || t === "style" && l.querySelector(ki(s)) || t === "script" && l.querySelector($i(s))))) {
        var m = l.createElement("link");
        At(m, "link", e), t === "style" && (m[Ro] = !0, m.onload = m.onerror = function() {
          Jm(m);
        }), vt(m), l.head.appendChild(m);
      }
    }
  }
  function DE(e, t) {
    xa.m(e, t);
    var n = Or;
    if (n && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + pn(l) + '"][href="' + pn(e) + '"]', s = u;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = Ar(e);
      }
      if (!Cn.has(s) && (e = q({ rel: "modulepreload", href: e }, t), Cn.set(s, e), n.querySelector(u) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector($i(s)))
              return;
        }
        l = n.createElement("link"), At(l, "link", e), vt(l), n.head.appendChild(l);
      }
    }
  }
  function BE(e, t, n) {
    xa.S(e, t, n);
    var l = Or;
    if (l && e) {
      var u = Xl(l).hoistableStyles, s = wr(e);
      t = t || "default";
      var m = u.get(s);
      if (!m) {
        var b = { loading: 0, preload: null };
        if (m = l.querySelector(
          ki(s)
        ))
          b.loading = 5;
        else {
          e = q(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = Cn.get(s)) && ad(e, n);
          var O = m = l.createElement("link");
          vt(O), At(O, "link", e), O._p = new Promise(function(B, $) {
            O.onload = B, O.onerror = $;
          }), O.addEventListener("load", function() {
            b.loading |= 1;
          }), O.addEventListener("error", function() {
            b.loading |= 2;
          }), b.loading |= 4, ju(m, t, l);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: b
        }, u.set(s, m);
      }
    }
  }
  function UE(e, t) {
    xa.X(e, t);
    var n = Or;
    if (n && e) {
      var l = Xl(n).hoistableScripts, u = Ar(e), s = l.get(u);
      s || (s = n.querySelector($i(u)), s || (e = q({ src: e, async: !0 }, t), (t = Cn.get(u)) && ld(e, t), s = n.createElement("script"), vt(s), At(s, "link", e), n.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, l.set(u, s));
    }
  }
  function jE(e, t) {
    xa.M(e, t);
    var n = Or;
    if (n && e) {
      var l = Xl(n).hoistableScripts, u = Ar(e), s = l.get(u);
      s || (s = n.querySelector($i(u)), s || (e = q({ src: e, async: !0, type: "module" }, t), (t = Cn.get(u)) && ld(e, t), s = n.createElement("script"), vt(s), At(s, "link", e), n.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, l.set(u, s));
    }
  }
  function ky(e, t, n, l) {
    var u = (u = mn.current) ? Li(u) : null;
    if (!u) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (n = wr(n.href), t = Xl(
          u
        ).hoistableStyles, l = t.get(n), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, t.set(n, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = wr(n.href);
          var s = Xl(
            u
          ).hoistableStyles, m = s.get(e);
          if (m || (u = u.ownerDocument || u, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, s.set(e, m), (s = u.querySelector(
            ki(e)
          )) ? s._p || (m.instance = s, m.state.loading = 5) : (s = Cn.get(e), s || (s = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, Cn.set(e, s)), HE(
            u,
            e,
            s,
            m.state
          ))), t && l === null)
            throw Error(o(528, ""));
          return m;
        }
        if (t && l !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (n = Ar(n), t = Xl(
          u
        ).hoistableScripts, l = t.get(n), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, t.set(n, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, e));
    }
  }
  function wr(e) {
    return 'href="' + pn(e) + '"';
  }
  function ki(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function $y(e) {
    return q({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function HE(e, t, n, l) {
    if (t = e.querySelector(
      'link[rel="preload"][as="style"][' + t + "]"
    )) {
      if (t[Ro] !== !0) {
        l.loading = 1;
        return;
      }
    } else
      t = e.createElement("link"), t[Ro] = !0, t.onload = t.onerror = Jm.bind(null, t), At(t, "link", n), vt(t), e.head.appendChild(t);
    l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    });
  }
  function Ar(e) {
    return '[src="' + pn(e) + '"]';
  }
  function $i(e) {
    return "script[async]" + e;
  }
  function Yy(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + pn(n.href) + '"]'
          );
          if (l)
            return t.instance = l, vt(l), l;
          var u = q({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), vt(l), At(l, "style", u), ju(l, n.precedence, e), t.instance = l;
        case "stylesheet":
          u = wr(n.href);
          var s = e.querySelector(
            ki(u)
          );
          if (s)
            return t.state.loading |= 4, t.instance = s, vt(s), s;
          l = $y(n), (u = Cn.get(u)) && ad(l, u), s = (e.ownerDocument || e).createElement("link"), vt(s);
          var m = s;
          return m._p = new Promise(function(b, O) {
            m.onload = b, m.onerror = O;
          }), At(s, "link", l), t.state.loading |= 4, ju(s, n.precedence, e), t.instance = s;
        case "script":
          return s = Ar(n.src), (u = e.querySelector(
            $i(s)
          )) ? (t.instance = u, vt(u), u) : (l = n, (u = Cn.get(s)) && (l = q({}, n), ld(l, u)), e = e.ownerDocument || e, u = e.createElement("script"), vt(u), At(u, "link", l), e.head.appendChild(u), t.instance = u);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, ju(l, n.precedence, e));
    return t.instance;
  }
  function ju(e, t, n) {
    for (var l = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = l.length ? l[l.length - 1] : null, s = u, m = 0; m < l.length; m++) {
      var b = l[m];
      if (b.dataset.precedence === t) s = b;
      else if (s !== u) break;
    }
    s ? s.parentNode.insertBefore(e, s.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function ad(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function ld(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Hu = null;
  function qy(e, t, n) {
    if (Hu === null) {
      var l = /* @__PURE__ */ new Map(), u = Hu = /* @__PURE__ */ new Map();
      u.set(n, l);
    } else
      u = Hu, l = u.get(n), l || (l = /* @__PURE__ */ new Map(), u.set(n, l));
    if (l.has(e)) return l;
    for (l.set(e, null), n = n.getElementsByTagName(e), u = 0; u < n.length; u++) {
      var s = n[u];
      if (!(s[ti] || s[Ct] || e === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = s.getAttribute(t) || "";
        m = e + m;
        var b = l.get(m);
        b ? b.push(s) : l.set(m, [s]);
      }
    }
    return l;
  }
  function rd(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function LE(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return e = t.disabled, typeof t.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Vy(e, t) {
    return e === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
  }
  function Gy(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Xy(e) {
    return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function Qy(e, t) {
    typeof t.decode == "function" && (e.imgCount++, t.complete || (e.imgBytes += Xy(t), e.suspenseyImages.push(t)), e = YE.bind(e), t.decode().then(e, e));
  }
  function kE(e, t, n, l) {
    if (n.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var u = wr(l.href), s = t.querySelector(
          ki(u)
        );
        if (s) {
          t = s._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Yi.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = s, vt(s);
          return;
        }
        s = t.ownerDocument || t, l = $y(l), (u = Cn.get(u)) && ad(l, u), s = s.createElement("link"), vt(s);
        var m = s;
        m._p = new Promise(function(b, O) {
          m.onload = b, m.onerror = O;
        }), At(s, "link", l), n.instance = s;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Yi.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var Lu = 0;
  function $E(e, t) {
    return e.stylesheets && e.count === 0 && $u(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var l = setTimeout(function() {
        if (e.stylesheets && $u(e, e.stylesheets), e.unsuspend) {
          var s = e.unsuspend;
          e.unsuspend = null, s();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Lu === 0 && (Lu = 62500 * lE());
      var u = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && $u(e, e.stylesheets), e.unsuspend)) {
            var s = e.unsuspend;
            e.unsuspend = null, s();
          }
        },
        (e.imgBytes > Lu ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(u);
      };
    } : null;
  }
  function Ky(e) {
    if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
      if (e.stylesheets) $u(e, e.stylesheets);
      else if (e.unsuspend) {
        var t = e.unsuspend;
        e.unsuspend = null, t();
      }
    }
  }
  function Yi() {
    this.count--, Ky(this);
  }
  function YE() {
    this.imgCount--, Ky(this);
  }
  var ku = null;
  function $u(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, ku = /* @__PURE__ */ new Map(), t.forEach(qE, e), ku = null, Yi.call(e));
  }
  function qE(e, t) {
    if (!(t.state.loading & 4)) {
      var n = ku.get(e);
      if (n) var l = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), ku.set(e, n);
        for (var u = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), s = 0; s < u.length; s++) {
          var m = u[s];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (n.set(m.dataset.precedence, m), l = m);
        }
        l && n.set(null, l);
      }
      u = t.instance, m = u.getAttribute("data-precedence"), s = n.get(m) || l, s === l && n.set(null, u), n.set(m, u), this.count++, l = Yi.bind(this), u.addEventListener("load", l), u.addEventListener("error", l), s ? s.parentNode.insertBefore(u, s.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(u, e.firstChild)), t.state.loading |= 4;
    }
  }
  var zr = {
    $$typeof: te,
    Provider: null,
    Consumer: null,
    _currentValue: kt,
    _currentValue2: kt,
    _threadCount: 0
  };
  function VE(e, t, n, l, u, s, m, b, O) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ls(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ls(0), this.hiddenUpdates = Ls(null), this.identifierPrefix = l, this.onUncaughtError = u, this.onCaughtError = s, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = O, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Zy(e, t, n, l, u, s, m, b, O, B, $, I) {
    return e = new VE(
      e,
      t,
      n,
      m,
      O,
      B,
      $,
      I,
      b
    ), t = 1, s === !0 && (t |= 24), s = qt(3, null, null, t), e.current = s, s.stateNode = e, t = bc(), t.refCount++, e.pooledCache = t, t.refCount++, s.memoizedState = {
      element: l,
      isDehydrated: n,
      cache: t
    }, Cc(s), e;
  }
  function Iy(e) {
    return e ? (e = tr, e) : tr;
  }
  function Py(e, t, n, l, u, s) {
    u = Iy(u), l.context === null ? l.context = u : l.pendingContext = u, l = Ha(t), l.payload = { element: n }, s = s === void 0 ? null : s, s !== null && (l.callback = s), n = La(e, l, t), n !== null && (Qt(n, e, t), vi(n, e, t));
  }
  function Jy(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function id(e, t) {
    Jy(e, t), (e = e.alternate) && Jy(e, t);
  }
  function Fy(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = pl(e, 67108864);
      t !== null && Qt(t, e, 67108864), id(e, 67108864);
    }
  }
  function Wy(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = rn();
      t = ks(t);
      var n = pl(e, t);
      n !== null && Qt(n, e, t), id(e, t);
    }
  }
  var Mr = !0;
  function GE(e, t, n, l) {
    var u = ie.T;
    ie.T = null;
    var s = me.p;
    try {
      me.p = 2, od(e, t, n, l);
    } finally {
      me.p = s, ie.T = u;
    }
  }
  function XE(e, t, n, l) {
    var u = ie.T;
    ie.T = null;
    var s = me.p;
    try {
      me.p = 8, od(e, t, n, l);
    } finally {
      me.p = s, ie.T = u;
    }
  }
  function od(e, t, n, l) {
    if (Mr) {
      var u = ud(l);
      if (u === null)
        qf(
          e,
          t,
          l,
          Yu,
          n
        ), t0(e, l);
      else if (KE(
        u,
        e,
        t,
        n,
        l
      ))
        l.stopPropagation();
      else if (t0(e, l), t & 4 && -1 < QE.indexOf(e)) {
        for (; u !== null; ) {
          var s = Gl(u);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                  var m = cl(s.pendingLanes);
                  if (m !== 0) {
                    var b = s;
                    for (b.pendingLanes |= 2, b.entangledLanes |= 2; m; ) {
                      var O = 1 << 31 - Ft(m);
                      b.entanglements[1] |= O, m &= ~O;
                    }
                    Zn(s), (De & 6) === 0 && (Ou = Pt() + 500, Bi(0));
                  }
                }
                break;
              case 31:
              case 13:
                b = pl(s, 2), b !== null && Qt(b, s, 2), zu(), id(s, 2);
            }
          if (s = ud(l), s === null && qf(
            e,
            t,
            l,
            Yu,
            n
          ), s === u) break;
          u = s;
        }
        u !== null && l.stopPropagation();
      } else
        qf(
          e,
          t,
          l,
          null,
          n
        );
    }
  }
  function ud(e) {
    return e = Qs(e), sd(e);
  }
  var Yu = null;
  function sd(e) {
    if (Yu = null, e = fl(e), e !== null) {
      var t = f(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = d(t), e !== null) return e;
          e = null;
        } else if (n === 31) {
          if (e = h(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Yu = e, null;
  }
  function e0(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (l1()) {
          case km:
            return 2;
          case $m:
            return 8;
          case So:
          case r1:
            return 32;
          case Ym:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var cd = !1, Pa = null, Ja = null, Fa = null, qi = /* @__PURE__ */ new Map(), Vi = /* @__PURE__ */ new Map(), Wa = [], QE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function t0(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Pa = null;
        break;
      case "dragenter":
      case "dragleave":
        Ja = null;
        break;
      case "mouseover":
      case "mouseout":
        Fa = null;
        break;
      case "pointerover":
      case "pointerout":
        qi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Vi.delete(t.pointerId);
    }
  }
  function Gi(e, t, n, l, u, s) {
    return e === null || e.nativeEvent !== s ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: l,
      nativeEvent: s,
      targetContainers: [u]
    }, t !== null && (t = Gl(t), t !== null && Fy(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), e);
  }
  function KE(e, t, n, l, u) {
    switch (t) {
      case "focusin":
        return Pa = Gi(
          Pa,
          e,
          t,
          n,
          l,
          u
        ), !0;
      case "dragenter":
        return Ja = Gi(
          Ja,
          e,
          t,
          n,
          l,
          u
        ), !0;
      case "mouseover":
        return Fa = Gi(
          Fa,
          e,
          t,
          n,
          l,
          u
        ), !0;
      case "pointerover":
        var s = u.pointerId;
        return qi.set(
          s,
          Gi(
            qi.get(s) || null,
            e,
            t,
            n,
            l,
            u
          )
        ), !0;
      case "gotpointercapture":
        return s = u.pointerId, Vi.set(
          s,
          Gi(
            Vi.get(s) || null,
            e,
            t,
            n,
            l,
            u
          )
        ), !0;
    }
    return !1;
  }
  function n0(e) {
    var t = fl(e.target);
    if (t !== null) {
      var n = f(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = d(n), t !== null) {
            e.blockedOn = t, Zm(e.priority, function() {
              Wy(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = h(n), t !== null) {
            e.blockedOn = t, Zm(e.priority, function() {
              Wy(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function qu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = ud(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(
          n.type,
          n
        );
        Xs = l, n.target.dispatchEvent(l), Xs = null;
      } else
        return t = Gl(n), t !== null && Fy(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function a0(e, t, n) {
    qu(e) && n.delete(t);
  }
  function ZE() {
    cd = !1, Pa !== null && qu(Pa) && (Pa = null), Ja !== null && qu(Ja) && (Ja = null), Fa !== null && qu(Fa) && (Fa = null), qi.forEach(a0), Vi.forEach(a0);
  }
  function Vu(e, t) {
    e.blockedOn === t && (e.blockedOn = null, cd || (cd = !0, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      ZE
    )));
  }
  var Gu = null;
  function l0(e) {
    Gu !== e && (Gu = e, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      function() {
        Gu === e && (Gu = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], l = e[t + 1], u = e[t + 2];
          if (typeof l != "function") {
            if (sd(l || n) === null)
              continue;
            break;
          }
          var s = Gl(n);
          s !== null && (e.splice(t, 3), t -= 3, Gc(
            s,
            {
              pending: !0,
              data: u,
              method: n.method,
              action: l
            },
            l,
            u
          ));
        }
      }
    ));
  }
  function Nr(e) {
    function t(O) {
      return Vu(O, e);
    }
    Pa !== null && Vu(Pa, e), Ja !== null && Vu(Ja, e), Fa !== null && Vu(Fa, e), qi.forEach(t), Vi.forEach(t);
    for (var n = 0; n < Wa.length; n++) {
      var l = Wa[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Wa.length && (n = Wa[0], n.blockedOn === null); )
      n0(n), n.blockedOn === null && Wa.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (l = 0; l < n.length; l += 3) {
        var u = n[l], s = n[l + 1], m = u[Yt] || null;
        if (typeof s == "function")
          m || l0(n);
        else if (m) {
          var b = null;
          if (s && s.hasAttribute("formAction")) {
            if (u = s, m = s[Yt] || null)
              b = m.formAction;
            else if (sd(u) !== null) continue;
          } else b = m.action;
          typeof b == "function" ? n[l + 1] = b : (n.splice(l, 3), l -= 3), l0(n);
        }
      }
  }
  function r0() {
    function e(s) {
      s.canIntercept && s.info === "react-transition" && s.intercept({
        handler: function() {
          return new Promise(function(m) {
            return u = m;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      u !== null && (u(), u = null), l || setTimeout(n, 20);
    }
    function n() {
      if (!l && !navigation.transition) {
        var s = navigation.currentEntry;
        s && s.url != null && navigation.navigate(s.url, {
          state: s.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var l = !1, u = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
        l = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), u !== null && (u(), u = null);
      };
    }
  }
  function fd(e) {
    this._internalRoot = e;
  }
  Xu.prototype.render = fd.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var n = t.current, l = rn();
    Py(n, l, e, t, null, null);
  }, Xu.prototype.unmount = fd.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Py(e.current, 2, null, e, null, null), zu(), t[Vl] = null;
    }
  };
  function Xu(e) {
    this._internalRoot = e;
  }
  Xu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Km();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Wa.length && t !== 0 && t < Wa[n].priority; n++) ;
      Wa.splice(n, 0, e), n === 0 && n0(e);
    }
  };
  var i0 = r.version;
  if (i0 !== "19.3.1")
    throw Error(
      o(
        527,
        i0,
        "19.3.1"
      )
    );
  me.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = y(t), e = e !== null ? v(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var IE = {
    bundleType: 0,
    version: "19.3.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: ie,
    reconcilerVersion: "19.3.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qu.isDisabled && Qu.supportsFiber)
      try {
        Fr = Qu.inject(
          IE
        ), Jt = Qu;
      } catch {
      }
  }
  return Ii.createRoot = function(e, t) {
    if (!c(e)) throw Error(o(299));
    var n = !1, l = "", u = Ip, s = Pp, m = Jp;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (m = t.onRecoverableError)), t = Zy(
      e,
      1,
      !1,
      null,
      null,
      n,
      l,
      null,
      u,
      s,
      m,
      r0
    ), e[Vl] = t.current, Yf(e), new fd(t);
  }, Ii.hydrateRoot = function(e, t, n) {
    if (!c(e)) throw Error(o(299));
    var l = !1, u = "", s = Ip, m = Pp, b = Jp, O = null;
    return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (m = n.onCaughtError), n.onRecoverableError !== void 0 && (b = n.onRecoverableError), n.formState !== void 0 && (O = n.formState)), t = Zy(
      e,
      1,
      !0,
      t,
      n ?? null,
      l,
      u,
      O,
      s,
      m,
      b,
      r0
    ), t.context = Iy(null), n = t.current, l = rn(), l = ks(l), u = Ha(l), u.callback = null, La(n, u, l), n = l, t.current.lanes = n, ei(t, n), Zn(t), e[Vl] = t.current, Yf(e), new Xu(t);
  }, Ii.version = "19.3.1", Ii;
}
var Ov;
function BO() {
  if (Ov) return Bd.exports;
  Ov = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (r) {
        console.error(r);
      }
  }
  return a(), Bd.exports = DO(), Bd.exports;
}
var UO = BO();
const jO = /* @__PURE__ */ nm(UO);
function gs() {
  return gs = Object.assign ? Object.assign.bind() : function(a) {
    for (var r = 1; r < arguments.length; r++) {
      var i = arguments[r];
      for (var o in i) ({}).hasOwnProperty.call(i, o) && (a[o] = i[o]);
    }
    return a;
  }, gs.apply(null, arguments);
}
const Hd = {
  light: {
    MuiTableRow: {
      styleOverrides: {
        head: {
          background: "#EEEEEE"
        }
      }
    }
  },
  dark: {
    MuiTableRow: {
      styleOverrides: {
        head: {
          background: "#212121"
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#424242",
          backgroundImage: "none"
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#424242",
          backgroundImage: "none"
        }
      }
    }
  },
  lightsOut: {
    MuiTableRow: {
      styleOverrides: {
        head: {
          background: "#212121"
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#000",
          backgroundImage: "none"
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#000",
          backgroundImage: "none"
        }
      }
    }
  }
}, HO = {
  default: {
    palette: {
      mode: "light"
    },
    typography: {
      // "fontFamily": "Quicksand"
    },
    shape: {
      borderRadius: 12
    }
  },
  light: {
    components: {
      ...Hd.light
    },
    palette: {
      primary: {
        main: "#F05F40"
      },
      secondary: {
        main: "#40f0bb"
      },
      mode: "light",
      background: {
        default: "#F5F5F5",
        cardContainer: "#fafafa"
      },
      customShadow: "0px 6px 9px 0px #00000014"
    },
    typography: {
      // "fontFamily": "Quicksand"
    },
    shape: {
      borderRadius: 12
    }
  },
  dark: {
    components: {
      ...Hd.dark
    },
    palette: {
      primary: {
        main: "#F05F40"
      },
      mode: "dark",
      background: {
        default: "#303030",
        paper: "#424242",
        cardContainer: "#424242"
      },
      customShadow: "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)"
    },
    typography: {
      // "fontFamily": "Quicksand"
    },
    shape: {
      borderRadius: 12
    }
  },
  lightsOut: {
    components: {
      ...Hd.lightsOut
    },
    palette: {
      primary: {
        main: "#F05F40"
      },
      mode: "dark",
      background: {
        default: "#000",
        paper: "#000",
        cardContainer: "#000"
      }
    },
    shadows: Array(25).fill("0px 4px 12px #888888"),
    typography: {
      // "fontFamily": "Quicksand"
    },
    shape: {
      borderRadius: 12
    }
  }
}, wv = (a) => ({
  MuiCard: {
    styleOverrides: {
      root: ({
        theme: r
      }) => {
        var i, o;
        return {
          backgroundColor: r.palette.mode === "dark" ? ((o = (i = a.palette) == null ? void 0 : i.background) == null ? void 0 : o.cardContainer) || "#424242" : void 0,
          backgroundImage: "none"
        };
      }
    }
  },
  MuiPaper: {
    styleOverrides: {
      root: ({
        theme: r
      }) => {
        var i, o;
        return {
          backgroundColor: r.palette.mode === "dark" ? ((o = (i = a.palette) == null ? void 0 : i.background) == null ? void 0 : o.paper) || "#424242" : void 0,
          backgroundImage: "none"
        };
      }
    }
  }
});
class LO extends E.Component {
  constructor(i) {
    super(i);
    _r(this, "handleReload", () => {
      const {
        reloadPath: i
      } = this.props;
      i && t1(i) ? window.location.href = i : window.location.reload();
    });
    this.state = {
      themeName: i.themeName || "light",
      hasAppError: !1
    }, this.themeSource = i.theme || HO;
    const o = this.themeSource[this.state.themeName];
    this.theme = oo({
      ...lv(o),
      components: {
        ...wv(o)
      }
    });
  }
  /*
   * ERROR BOUNDARY CAPABILITIES:
   *   CATCHES:
   *   - Render crashes (e.g., null references during render)
   *   - Missing JS Chunks (ChunkLoadError mid-session)
   *   - Synchronous errors in lifecycle methods/useEffect
   */
  static getDerivedStateFromError(i) {
    return {
      hasAppError: !0
    };
  }
  componentDidCatch(i, o) {
    console.error("HDTheme Error Boundary caught an error:", i, o);
  }
  componentDidUpdate(i) {
    if (this.props.themeName !== i.themeName) {
      const o = this.themeSource[this.props.themeName];
      this.theme = oo({
        ...lv(o),
        components: {
          ...wv(o)
        }
      }), this.setState({
        themeName: this.props.themeName
      });
    }
  }
  render() {
    return this.state.hasAppError ? /* @__PURE__ */ he.createElement("div", {
      style: {
        padding: "60px 20px",
        textAlign: "center",
        fontFamily: "system-ui, sans-serif",
        color: "#111827",
        margin: "20px auto",
        maxWidth: "600px"
      }
    }, /* @__PURE__ */ he.createElement("h3", {
      style: {
        marginBottom: "10px",
        fontSize: "1.5rem",
        fontWeight: "500"
      }
    }, "Something went wrong"), /* @__PURE__ */ he.createElement("p", {
      style: {
        marginBottom: "24px",
        color: "#4b5563",
        fontSize: "1rem"
      }
    }, "The application may have been updated in the background."), /* @__PURE__ */ he.createElement("button", {
      onClick: this.handleReload,
      style: {
        padding: "10px 24px",
        cursor: "pointer",
        background: "transparent",
        color: "#374151",
        border: "1px solid #d1d5db",
        borderRadius: "6px",
        fontSize: "0.875rem",
        fontWeight: "500"
      }
    }, "Reload Application")) : /* @__PURE__ */ he.createElement(GC, {
      injectFirst: !0
    }, /* @__PURE__ */ he.createElement(O5, {
      theme: this.theme
    }, this.props.children));
  }
}
function t1(a) {
  return !(!a || typeof a != "string" || !a.startsWith("/") || a.startsWith("//") || /^[a-zA-Z][a-zA-Z0-9+\-.]*:/i.test(a));
}
function kO(a) {
  if (a && typeof a == "object" && "componentPath" in a) {
    const {
      componentPath: r,
      ...i
    } = a;
    return Object.keys(i).length > 0 ? i : {};
  }
  return a;
}
function $O(a) {
  return {
    setWebsearchHeader: (r) => window.parent.postMessage({
      type: "setWebsearchHeader",
      header: r
    }, "*"),
    secondaryMenu: (r) => a(r),
    searchQuery: (r) => window.parent.postMessage({
      type: "searchQuery",
      query: r
    }, "*"),
    switchFullScreen: (r = !0, i = !1) => window.parent.postMessage({
      type: "switchFullScreen",
      fullScreen: r,
      navigatedViaRoute: i
    }, "*"),
    componentLoaded: () => window.parent.postMessage({
      type: "componentLoaded"
    }, "*"),
    loadAiGeneratedResponse: (r) => new Promise((i, o) => {
      const c = Date.now();
      function f(d) {
        var h, p;
        ((h = d.data) == null ? void 0 : h.type) === "loadAiGeneratedResponseResult" && ((p = d.data) == null ? void 0 : p.requestId) === c && (window.removeEventListener("message", f), d.data.error ? o(new Error(d.data.error)) : i(d.data.response));
      }
      window.addEventListener("message", f), window.parent.postMessage({
        type: "loadAiGeneratedResponse",
        payload: r,
        requestId: c
      }, "*");
    }),
    unload: (r = "") => window.parent.postMessage({
      type: "unload",
      message: r
    }, "*")
  };
}
const YO = {
  outerContainer: {
    display: "flex",
    position: "relative",
    flexDirection: "row",
    width: "100%"
  }
};
function qO(a) {
  E.useEffect(() => {
    if (!a) return;
    const r = (i) => {
      (i.key === "/" || i.code === "Slash") && window.parent.postMessage({
        type: "searchShortcutPressed",
        event: {
          key: i.key,
          code: i.code
        }
      }, "*");
    };
    return document.addEventListener("keydown", r), () => document.removeEventListener("keydown", r);
  }, [a]);
}
const VO = Ze(OO)(({
  theme: a
}) => ({
  zIndex: "5",
  position: "fixed",
  bottom: 58,
  right: 10,
  opacity: 0.8,
  width: "48px",
  height: "48px",
  [a.breakpoints.up("lg")]: {
    bottom: 58,
    right: "calc(100% - 1140px)"
  }
})), Av = Ze("div")(({
  theme: a
}) => ({
  display: "flex",
  justifyContent: "space-evenly",
  cursor: "pointer",
  position: "sticky",
  bottom: 0,
  backgroundColor: a.palette.background.default,
  zIndex: 1e3
})), GO = (a) => {
  var U;
  const {
    isMdUp: r
  } = a, [i, o] = E.useState(r), [c, f] = E.useState(!1);
  E.useEffect(() => {
    o(r);
  }, [r]);
  const {
    menu: d,
    componentFullWidth: h,
    fullHeight: p,
    applyBtnMdUp: y,
    applyBtnMdUpOnClick: v,
    applyBtnSmDown: g,
    applyBtnSmDownOnClick: x,
    filters: w,
    noOfFilters: R,
    preventAutoClose: C
  } = a.secondaryMenu, T = () => {
    o(!i), f(!c);
  }, M = (j) => {
    T(), j();
  }, Y = () => {
    T();
  };
  return E.useEffect(() => {
    var j;
    if ((j = a.secondaryMenu) != null && j.menu && document.getElementById("secondaryMenu")) {
      const X = document.getElementById("secondaryMenu").clientHeight > window.innerHeight;
      a.setHeightOverflow(X);
    }
  }, [(U = a.secondaryMenu) == null ? void 0 : U.menu]), /* @__PURE__ */ he.createElement(he.Fragment, null, !i && /* @__PURE__ */ he.createElement(VO, {
    onClick: T,
    color: "primary",
    className: h ? "fabButtonClose" : "fabButton"
  }, w ? R ? /* @__PURE__ */ he.createElement(j3, {
    badgeContent: R,
    color: "primary"
  }, /* @__PURE__ */ he.createElement(xv, null)) : /* @__PURE__ */ he.createElement(xv, null) : /* @__PURE__ */ he.createElement(AO, null)), r && i && /* @__PURE__ */ he.createElement(Sv, {
    variant: "persistent",
    anchor: "right",
    open: i,
    PaperProps: {
      elevation: 1,
      id: "secondaryMenu",
      sx: {
        boxSizing: "border-box",
        paddingTop: "4px",
        width: i ? "100%" : 0,
        position: "static",
        height: p ? "inherit" : "auto"
      }
    }
  }, d, y && v ? /* @__PURE__ */ he.createElement(Av, null, /* @__PURE__ */ he.createElement(Wu, {
    variant: "outlined",
    sx: {
      width: "50%"
    },
    color: "primary",
    onClick: Y
  }, "Close"), /* @__PURE__ */ he.createElement(Wu, {
    variant: "contained",
    sx: {
      width: "50%"
    },
    color: "primary",
    onClick: () => M(v)
  }, "Apply")) : /* @__PURE__ */ he.createElement(pv, {
    sx: {
      display: "flex",
      padding: "16px",
      cursor: "pointer"
    },
    onClick: T
  }, /* @__PURE__ */ he.createElement(x3, {
    variant: "caption"
  }, "Hide Menu"), /* @__PURE__ */ he.createElement(zO, {
    sx: {
      color: "grey",
      width: 16,
      height: 20
    }
  }))), !r && /* @__PURE__ */ he.createElement(Sv, {
    anchor: "right",
    open: c,
    onClose: T,
    PaperProps: {
      sx: {
        width: "80%"
      }
    }
  }, /* @__PURE__ */ he.createElement("div", {
    tabIndex: 0,
    role: "button",
    onClick: g && x || C ? void 0 : T,
    onKeyDown: g && x || C ? void 0 : T
  }, C && /* @__PURE__ */ he.createElement(pv, {
    sx: {
      display: "flex",
      justifyContent: "flex-start",
      padding: "10px"
    }
  }, /* @__PURE__ */ he.createElement(g3, {
    onClick: T,
    edge: "end",
    "aria-label": "close",
    size: "large"
  }, /* @__PURE__ */ he.createElement(MO, null))), d, g && x && /* @__PURE__ */ he.createElement(Av, null, /* @__PURE__ */ he.createElement(Wu, {
    variant: "outlined",
    color: "primary",
    style: {
      width: "50%"
    },
    onClick: Y
  }, "Close"), /* @__PURE__ */ he.createElement(Wu, {
    variant: "contained",
    color: "primary",
    style: {
      width: "50%"
    },
    onClick: () => M(x)
  }, "Apply")))));
};
var XO = /* @__PURE__ */ E.memo(GO);
const QO = ({
  secondaryMenuProps: a,
  isMdUp: r
}) => {
  const [i, o] = E.useState(!1), [c, f] = E.useState({
    scrollPos: 0,
    top: 0
  }), d = E.useRef(null), h = {
    innerContainer: {
      position: "sticky",
      top: 0,
      bottom: "auto",
      display: "flex",
      flexDirection: "column"
    }
  };
  return E.useEffect(() => {
    const p = () => {
      var g;
      const y = (g = d == null ? void 0 : d.current) == null ? void 0 : g.offsetHeight, v = window.innerHeight;
      f((x) => {
        const w = x.scrollPos - window.scrollY;
        let R = x.top + w;
        return R > 0 && (R = 0), R < v - y && (R = v - y), {
          top: R,
          scrollPos: window.scrollY
        };
      });
    };
    return window.addEventListener("scroll", p), () => {
      window.removeEventListener("scroll", p);
    };
  }, []), a && a !== "" && a.menu !== "" ? /* @__PURE__ */ he.createElement("div", {
    ref: d,
    style: {
      ...h.innerContainer,
      top: i ? c == null ? void 0 : c.top : 0,
      width: r ? "240px" : 0,
      height: "100%"
    }
  }, /* @__PURE__ */ he.createElement(XO, {
    setHeightOverflow: o,
    secondaryMenu: a,
    isMdUp: r
  })) : null;
};
let Ld = null;
function zv(a, r, i, o, c) {
  const f = document.getElementById("root");
  Ld || (Ld = jO.createRoot(f));
  const d = location.pathname.indexOf(r) < 0 ? "" : location.pathname.slice(0, location.pathname.indexOf(r));
  Ld.render(/* @__PURE__ */ he.createElement(a, {
    baseURL: r,
    basename: d,
    searchData: i,
    UIOptions: o,
    deployedBackendURL: c
  }));
}
function KO(a, r, i) {
  window.onmessage = function(f) {
    if (f.data.type === "dataRefresh") {
      const d = f.data.searchData && f.data.searchData[0];
      zv(a, r, d, f.data.UIOptions, i);
    }
  }, zv(a, r, {}, {}, i);
  const o = new ResizeObserver((f) => {
    if (f.length > 0) {
      const d = f[0].target.clientHeight;
      window.parent.postMessage({
        type: "resizeIframe",
        height: d
      }, "*");
    }
  }), c = document.getElementById("root");
  c && o.observe(c);
}
const ZO = (a) => {
  var U, j;
  const r = E.useRef(!1), i = Zv(), o = la(), c = bo(), f = wO(c.breakpoints.up("md")), [d, h] = E.useState(null), {
    format: p,
    UIOptions: y,
    searchData: v,
    baseURL: g = "",
    basename: x = ""
  } = a, w = p === "fullscreen", R = x + g, {
    componentStyles: C,
    ...T
  } = y || {}, M = E.useMemo(() => $O(h), []);
  qO(w), E.useEffect(() => {
    if (a.searchData && a.searchData.componentPath) {
      const _ = a.searchData.componentPath, X = _.startsWith(R) ? _.substring(R.length) : _;
      t1(X) ? i(X, {
        replace: !0
      }) : console.warn("[withHD] Blocked unsafe componentPath:", _);
    }
  }, [(U = a == null ? void 0 : a.searchData) == null ? void 0 : U.componentPath]), E.useEffect(() => {
    const _ = R + o.pathname + o.search;
    r.current ? _ && (!(a.searchData && a.searchData.componentPath) || a.searchData && a.searchData.componentPath && _ !== a.searchData.componentPath) && window.parent.postMessage({
      type: "updateComponentPath",
      componentPath: _
    }, "*") : r.current = !0;
  }, [o == null ? void 0 : o.pathname, o == null ? void 0 : o.search]);
  const Y = kO(v);
  return /* @__PURE__ */ he.createElement("div", {
    style: YO.outerContainer
  }, /* @__PURE__ */ he.createElement("div", {
    style: {
      width: f && w && d && d.menu !== "" ? "calc(100% - 400px)" : "100%",
      maxWidth: f && w && d && d.menu !== "" ? "966px" : "1160px",
      margin: f && w && ((j = y == null ? void 0 : y.componentStyles) == null ? void 0 : j.margin) || ""
    }
  }, /* @__PURE__ */ he.createElement(a.comp, gs({}, a, {
    UIOptions: T,
    searchData: Y,
    messageHandlers: M
  }))), w && /* @__PURE__ */ he.createElement(QO, {
    secondaryMenuProps: d,
    isMdUp: f
  }));
}, IO = (a) => {
  const r = (i) => {
    let {
      quickPanel: o,
      basename: c,
      searchData: f,
      UIOptions: d,
      ...h
    } = i ? {
      ...i
    } : {};
    o = o || !0, c = c || "", h.search = h.search || ((v) => console.log("New query = ", v));
    const p = f && (typeof f == "object" && !Array.isArray(f) || Array.isArray(f) && f.length > 0);
    let y = !0;
    try {
      y = window.self !== window.top;
    } catch {
      y = !0;
    }
    return /* @__PURE__ */ he.createElement(E.Fragment, null, p || d && d.sandbox || !y ? /* @__PURE__ */ he.createElement(B2, {
      basename: c + (i.baseURL || "")
    }, /* @__PURE__ */ he.createElement(LO, {
      themeName: d && d.themeName,
      theme: d && d.theme,
      reloadPath: `/${c + (i.baseURL || "")}`
    }, /* @__PURE__ */ he.createElement(c2, null, /* @__PURE__ */ he.createElement(Fv, {
      path: "*",
      element: /* @__PURE__ */ he.createElement(ZO, gs({}, i, {
        comp: a,
        quickPanel: o,
        format: d && d.format,
        searchData: f,
        UIOptions: d,
        basename: c
      }))
    })))) : null, !p && d && d.sandbox ? /* @__PURE__ */ he.createElement("div", {
      style: {
        position: "fixed",
        top: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "red",
        color: "white"
      }
    }, /* @__PURE__ */ he.createElement("h6", {
      style: {
        margin: "5px"
      }
    }, "No search data received. Component will not be loaded...")) : null);
  };
  return r.initHD = KO, r;
};
function PO(a, r) {
  r === void 0 && (r = {});
  var i = r.insertAt;
  if (!(typeof document > "u")) {
    var o = document.head || document.getElementsByTagName("head")[0], c = document.createElement("style");
    c.type = "text/css", i === "top" && o.firstChild ? o.insertBefore(c, o.firstChild) : o.appendChild(c), c.styleSheet ? c.styleSheet.cssText = a : c.appendChild(document.createTextNode(a));
  }
}
var JO = `/* placeholder animations */
.imgComponentStyles_placeholder__GXJke {
    margin: 0 auto;
    width: 100%;
    height: 18px;
    border-radius: 8px;
    background-color: #eee;
}

@keyframes imgComponentStyles_placeHolderShimmer__5-fnD {
    0% {
        background-position: -468px 0
    }

    100% {
        background-position: 468px 0
    }
}

.imgComponentStyles_animated-background__vGXc6 {
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: imgComponentStyles_placeHolderShimmer__5-fnD;
    animation-timing-function: linear;
    background: darkgray;
    background: linear-gradient(to right, #eeeeee 15%, #b2b2b2 18%, #eeeeee 33%);
    background-size: 800px 104px;
    height: 100%;
    border-radius: 20px;
    position: relative;
}

/* blinking dot */
@keyframes imgComponentStyles_up-right__Y-xzl {
    0% {
        transform: scale(1);
        opacity: .25
    }

    50% {
        transform: scale (1, 5);
        opacity: 1;
    }

    100% {
        transform: scale(1);
        opacity: .25;
    }
}

.imgComponentStyles_border__Lvjsc {
    border-radius: 50%;
    width: 8px;
    height: 8px;
    opacity: .25;
}

.imgComponentStyles_dot-animation__T9Onq {
    background-color: white;
    position: relative;
    top: -12px;
    left: 30px;
    -webkit-animation: imgComponentStyles_up-right__Y-xzl 1s infinite;
    -moz-animation: imgComponentStyles_up-right__Y-xzl 1s infinite;
    -o-animation: imgComponentStyles_up-right__Y-xzl 1s infinite;
    animation: imgComponentStyles_up-right__Y-xzl 1s infinite;
}`;
PO(JO);
const WO = IO(cx);
export {
  WO as default
};
