import { jsx as r, Fragment as R, jsxs as g } from "react/jsx-runtime";
import * as n from "react";
import { Slot as N } from "@radix-ui/react-slot";
import E from "./defaulttheme.es.js";
import { createContextScope as S } from "@radix-ui/react-context";
import { cn as d } from "./utils.es.js";
import { Modal as A } from "./modal.es.js";
import { IconButton as _ } from "./iconbutton.es.js";
import { ChevronsRightIcon as j } from "./chevronsrighticon.es.js";
const p = "Drawer", [k] = S(p), [I, v] = k(p), W = n.forwardRef((s, e) => {
  const { asChild: m, anchor: i = "right", children: t, open: a, width: f = 240, className: l, onClose: c, __scopeDrawer: w, mobileBreakpoint: o, ...h } = s, u = m ? N : "div", [M, C] = n.useState(0);
  n.useEffect(() => {
    const b = new ResizeObserver(() => {
      C(window.innerWidth);
    });
    return b.observe(document.documentElement), () => {
      b.disconnect();
    };
  }, []);
  const D = n.useMemo(() => window !== void 0 ? o ? !window?.matchMedia?.(`(min-width: ${o})`)?.matches : !window?.matchMedia?.(`(min-width: ${E.screens.md})`)?.matches : !1, [o, M]);
  return /* @__PURE__ */ r(u, { ref: e, className: d("flex", l), ...h, children: /* @__PURE__ */ r(I, { anchor: i, onClose: c, open: a, width: f, isMobile: D, scope: w, children: t }) });
});
W.displayName = p;
const x = "DrawerMain", z = n.forwardRef(
  ({ asChild: s, children: e, className: m, style: i, __scopeDrawer: t, ...a }, f) => {
    const l = s ? N : "div", { anchor: c, open: w, width: o, isMobile: h } = v(x, t), u = n.useMemo(() => h ? {} : c === "left" ? { marginInlineStart: w ? o : 0 } : { marginInlineEnd: w ? o : 0 }, [c, w, o, h]);
    return /* @__PURE__ */ r(l, { ref: f, className: d("flex-grow overflow-hidden", m), style: { ...i, ...u }, ...a, children: e });
  }
);
z.displayName = x;
const y = "DrawerContent", O = n.forwardRef(({ children: s, title: e, __scopeDrawer: m }, i) => {
  const { anchor: t, open: a, width: f, onClose: l, isMobile: c } = v(y, m);
  return /* @__PURE__ */ r(R, { children: c ? /* @__PURE__ */ r(A, { title: e, open: a, onOpenChange: l, ref: i, fullScreen: !0, children: s }) : /* @__PURE__ */ r("div", { className: d("hidden md:block overflow-hidden"), style: { width: f }, ref: i, children: /* @__PURE__ */ g(
    "div",
    {
      className: d(
        "overflow-y-auto flex flex-col h-full top-0 z-[120] bg-background transition-all border-gray-200",
        a ? "" : t === "left" ? "-translate-x-full rtl:translate-x-full invisible" : "translate-x-full rtl:-translate-x-full invisible",
        t === "left" ? "border-r" : "border-l"
      ),
      children: [
        /* @__PURE__ */ g(
          "div",
          {
            className: d(
              "h-9 flex items-center gap-2 p-2 bg-background w-full sticky top-0 border-b border-gray-200",
              t === "right" ? "justify-start rtl:justify-end" : "justify-end rtl:justify-start"
            ),
            children: [
              /* @__PURE__ */ r(_, { onClick: l, className: "w-5 h-5 p-0", children: /* @__PURE__ */ r(j, { className: d("w-5 h-5", t === "right" ? "rtl:-scale-100" : "-scale-100 rtl:scale-100") }) }),
              typeof e == "string" || typeof e == "number" ? /* @__PURE__ */ r("h2", { className: "text-lg font-bold text-text", children: e }) : e
            ]
          }
        ),
        s
      ]
    }
  ) }) });
});
O.displayName = y;
export {
  W as Drawer,
  O as DrawerContent,
  z as DrawerMain
};
//# sourceMappingURL=drawer.es.js.map
