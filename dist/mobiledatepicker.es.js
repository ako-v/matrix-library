import { jsxs as a, Fragment as b, jsx as e } from "react/jsx-runtime";
import * as c from "react";
import { VisuallyHidden as y } from "@radix-ui/react-visually-hidden";
import { cn as m } from "./utils.es.js";
import { Calendar as v } from "./calendar.es.js";
import { Button as n } from "./button.es.js";
import { CalendarIcon as M } from "./calendaricon.es.js";
import { Dialog as k, DialogContent as w, DialogHeader as j, DialogTitle as O, DialogDescription as P } from "./dialog.es.js";
import { formatDate as d } from "./format.es.js";
const V = ({
  formatStr: o,
  selected: t,
  placeholder: p,
  className: f,
  calendarClassName: h,
  cancelText: x,
  applyText: u,
  onSelect: g,
  ...N
}) => {
  const [D, l] = c.useState(!1), [r, i] = c.useState(t), s = () => {
    l(!1), i(t);
  }, C = () => {
    g?.(r), l(!1);
  };
  return /* @__PURE__ */ a(b, { children: [
    /* @__PURE__ */ a(
      n,
      {
        variant: "outline",
        className: m(
          "border-gray-300 text-text focus:ring-0 active:ring-transparent justify-start",
          !t && "text-muted-foreground",
          f
        ),
        onClick: () => l(!0),
        children: [
          t ? d(t, o ?? "eee, MMM dd") : /* @__PURE__ */ e("span", { children: p ?? "Pick a date" }),
          /* @__PURE__ */ e(M, { className: "mr-2 h-5 w-5 ms-auto" })
        ]
      }
    ),
    /* @__PURE__ */ e(k, { open: D, onOpenChange: s, children: /* @__PURE__ */ a(w, { className: "h-dscreen w-screen p-0 flex flex-col gap-0 data-[state=open]:animate-slide-from-bottom data-[state=closed]:animate-slide-to-bottom overflow-auto max-w-screen-2xl sm:rounded-none", children: [
      /* @__PURE__ */ a(j, { className: "p-4 border-b border-b-gray-200", children: [
        /* @__PURE__ */ e(O, { asChild: !0, children: /* @__PURE__ */ a("div", { className: "text-sm font-bold space-y-1 mt-3", children: [
          /* @__PURE__ */ e("h5", { className: "text-text-300", children: r?.getFullYear() ?? /* @__PURE__ */ e("pre", { children: " " }) }),
          /* @__PURE__ */ e("h6", { className: "", children: r ? d(r, o ?? "eee, MMM dd") : /* @__PURE__ */ e("pre", { children: " " }) })
        ] }) }),
        /* @__PURE__ */ e(y, { children: /* @__PURE__ */ e(P, { children: "Date Picker" }) })
      ] }),
      /* @__PURE__ */ a("div", { className: "flex-1 flex flex-col items-center p-4", children: [
        /* @__PURE__ */ e(v, { ...N, mode: "single", selected: r, onSelect: i, className: m("p-0", h) }),
        /* @__PURE__ */ a("div", { className: "flex justify-center items-center gap-4 mt-auto w-full", children: [
          /* @__PURE__ */ e(n, { variant: "text", className: "flex-1 h-10", onClick: s, children: x ?? "Cancel" }),
          /* @__PURE__ */ e(n, { variant: "primary", className: "flex-1 h-10", onClick: C, children: u ?? "Apply" })
        ] })
      ] })
    ] }) })
  ] });
};
export {
  V as MobileDatePicker
};
//# sourceMappingURL=mobiledatepicker.es.js.map
