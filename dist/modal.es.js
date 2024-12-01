import { jsx as e, jsxs as n } from "react/jsx-runtime";
import * as r from "react";
import * as o from "@radix-ui/react-dialog";
import { VisuallyHidden as b } from "@radix-ui/react-visually-hidden";
import { cn as l } from "./utils.es.js";
import { CloseIcon as v } from "./closeicon.es.js";
const M = o.Portal, C = o.Close, c = r.forwardRef(({ className: a, ...t }, s) => /* @__PURE__ */ e(
  o.Overlay,
  {
    ref: s,
    className: l(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      a
    ),
    ...t
  }
));
c.displayName = o.Overlay.displayName;
const m = ({ className: a, ...t }) => /* @__PURE__ */ e("div", { className: l("flex flex-row justify-between", a), ...t });
m.displayName = "DialogHeader";
const D = ({ className: a, ...t }) => /* @__PURE__ */ e("div", { className: l("flex flex-row justify-end gap-2", a), ...t });
D.displayName = "DialogFooter";
const p = r.forwardRef(
  ({ className: a, ...t }, s) => /* @__PURE__ */ e(o.Title, { ref: s, className: l("text-lg font-semibold leading-none tracking-tight", a), ...t })
);
p.displayName = o.Title.displayName;
const f = r.forwardRef(({ className: a, ...t }, s) => /* @__PURE__ */ e(o.Description, { ref: s, className: l("text-sm text-muted-foreground", a), ...t }));
f.displayName = o.Description.displayName;
const z = r.forwardRef((a, t) => {
  const { title: s, className: u, children: N, fullScreen: i, open: g, onOpenChange: x, defaultOpen: h, modal: y, slotProps: d, ...w } = a;
  return /* @__PURE__ */ e(o.Root, { defaultOpen: h, modal: y, open: g, onOpenChange: x, children: /* @__PURE__ */ n(M, { ...d?.portal ?? {}, children: [
    /* @__PURE__ */ e(c, {}),
    /* @__PURE__ */ n(
      o.Content,
      {
        ref: t,
        className: l(
          "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 w-full max-w-lg p-4 border bg-background shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          i ? "w-screen h-screen" : "max-w-lg",
          u
        ),
        ...w,
        children: [
          /* @__PURE__ */ n(m, { ...d?.header ?? {}, children: [
            /* @__PURE__ */ e(p, { ...d?.title ?? {}, children: s }),
            /* @__PURE__ */ e(b, { children: /* @__PURE__ */ e(f, { children: s }) }),
            /* @__PURE__ */ n(
              C,
              {
                ...d?.close ?? {},
                className: l(
                  "disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground mt-0",
                  d?.close?.className
                ),
                children: [
                  /* @__PURE__ */ e(v, { className: "h-5 w-5" }),
                  /* @__PURE__ */ e("span", { className: "sr-only", children: "Close" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ e(
            "hr",
            {
              ...d?.divider ?? {},
              className: l("w-full border-muted -mt-[1px] pb-2", i && "w-screen -mx-4", d?.divider?.className)
            }
          ),
          N
        ]
      }
    )
  ] }) });
});
export {
  z as Modal,
  D as ModalFooter
};
//# sourceMappingURL=modal.es.js.map
