import { jsxs as r, jsx as o } from "react/jsx-runtime";
import { useEffect as f } from "react";
import { ToastProvider as l, Toast as p, ToastTitle as T, ToastClose as d, ToastViewport as h } from "./toast-components.es.js";
import { useToasts as u, toastParams as w } from "./use-toast.es.js";
import { InfoCircleIcon as C } from "./infocircleicon.es.js";
import { SuccessCircleIcon as N } from "./successcircleicon.es.js";
import { WarningCircleIcon as g } from "./warningcircleicon.es.js";
import { DangerCircleIcon as I } from "./dangercircleicon.es.js";
function x({ limit: e = 3, duration: t = 5e3 }) {
  const { toasts: a, removeToast: i } = u();
  return f(() => {
    e !== void 0 && (w.limit = e);
  }, [e, t]), /* @__PURE__ */ r(l, { duration: t, children: [
    Array.from(a).map(([c, { message: m, variant: s }]) => /* @__PURE__ */ r(
      p,
      {
        variant: s,
        onOpenChange: (n) => {
          n || setTimeout(() => i(c), 100);
        },
        children: [
          /* @__PURE__ */ r("div", { className: "flex gap-2 items-center", children: [
            /* @__PURE__ */ r("div", { children: [
              s === "danger" && /* @__PURE__ */ o(I, { className: "w-5 h-5" }),
              s === "success" && /* @__PURE__ */ o(N, { className: "w-5 h-5" }),
              s === "info" && /* @__PURE__ */ o(C, { className: "w-5 h-5" }),
              s === "warning" && /* @__PURE__ */ o(g, { className: "w-5 h-5" })
            ] }),
            m && /* @__PURE__ */ o(T, { children: m })
          ] }),
          /* @__PURE__ */ o(d, {})
        ]
      },
      c
    )),
    /* @__PURE__ */ o(h, {})
  ] });
}
x.displayName = "Toast";
export {
  x as Toast
};
//# sourceMappingURL=toast.es.js.map
