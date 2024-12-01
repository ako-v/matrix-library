import { __exports as c } from "./clonedeep.es2.js";
(function(n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "cloneDeep", {
    enumerable: !0,
    get: function() {
      return r;
    }
  });
  function r(e) {
    return Array.isArray(e) ? e.map((t) => r(t)) : typeof e == "object" && e !== null ? Object.fromEntries(Object.entries(e).map(([t, o]) => [
      t,
      r(o)
    ])) : e;
  }
})(c);
//# sourceMappingURL=clonedeep.es.js.map
