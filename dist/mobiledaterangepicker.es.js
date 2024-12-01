import { jsxs as o, Fragment as k, jsx as r } from "react/jsx-runtime";
import * as d from "react";
import { VisuallyHidden as j } from "@radix-ui/react-visually-hidden";
import { cn as f } from "./utils.es.js";
import { Calendar as w } from "./calendar.es.js";
import { Button as s } from "./button.es.js";
import { CalendarIcon as R } from "./calendaricon.es.js";
import { Dialog as F, DialogContent as O, DialogHeader as P, DialogTitle as A, DialogDescription as H } from "./dialog.es.js";
import { formatDate as n } from "./format.es.js";
const K = ({
  formatStr: l,
  selected: i,
  placeholder: h,
  className: p,
  calendarClassName: g,
  onDayClick: x,
  cancelText: y,
  applyText: u,
  onSelect: N,
  ...v
}) => {
  const [T, m] = d.useState(!1), [e, a] = d.useState(i), b = (t, D, M) => {
    x?.(t, D, M), !e || !e.from ? a({ from: t, to: void 0 }) : t < e.from ? e.to ? a({ from: t, to: e.to }) : a({ from: t, to: e.from }) : e?.from?.getTime() === t?.getTime() && (e?.from?.getTime() === e?.to?.getTime() || !e.to) ? a(void 0) : e?.from?.getTime() !== e?.to?.getTime() && (e.from?.getTime() === t?.getTime() || e?.to?.getTime() === t?.getTime()) ? a({ from: t, to: t }) : a({ ...e, to: t });
  }, c = () => {
    m(!1), a(i);
  }, C = () => {
    N?.(e), m(!1);
  };
  return /* @__PURE__ */ o(k, { children: [
    /* @__PURE__ */ o(
      s,
      {
        variant: "outline",
        className: f(
          "border-gray-300 text-text focus:ring-0 active:ring-transparent justify-start",
          !i && "text-muted-foreground",
          p
        ),
        onClick: () => m(!0),
        children: [
          i ? /* @__PURE__ */ o("div", { className: "grid grid-cols-2 flex-1 justify-items-start", children: [
            /* @__PURE__ */ o("span", { children: [
              "From: ",
              i?.from ? n(i.from, l ?? "yyyy/MM/dd") : "-"
            ] }),
            " ",
            /* @__PURE__ */ o("span", { children: [
              "To: ",
              i?.to ? n(i.to, l ?? "yyyy/MM/dd") : "-"
            ] })
          ] }) : /* @__PURE__ */ r("span", { children: h ?? "Pick a Range" }),
          /* @__PURE__ */ r(R, { className: "mr-2 h-5 w-4 ms-auto" })
        ]
      }
    ),
    /* @__PURE__ */ r(F, { open: T, onOpenChange: c, children: /* @__PURE__ */ o(O, { className: "h-dscreen w-screen p-0 flex flex-col gap-0 data-[state=open]:animate-slide-from-bottom data-[state=closed]:animate-slide-to-bottom overflow-auto max-w-screen-2xl sm:rounded-none", children: [
      /* @__PURE__ */ o(P, { children: [
        /* @__PURE__ */ r(A, { asChild: !0, children: /* @__PURE__ */ o("div", { className: "grid grid-cols-2 border-b border-b-gray-200 mt-3", children: [
          /* @__PURE__ */ o("div", { className: "text-sm font-bold space-y-1 border-e border-e-gray-200 p-4", children: [
            /* @__PURE__ */ r("h5", { className: "text-text-300 font-medium text-xs", children: "From" }),
            /* @__PURE__ */ r("h6", { className: "", children: e?.from ? n(e.from, l ?? "eee, MMM dd") : /* @__PURE__ */ r("pre", { children: " " }) })
          ] }),
          /* @__PURE__ */ o("div", { className: "text-sm font-bold space-y-1 p-4 flex flex-col justify-center", children: [
            /* @__PURE__ */ r("h5", { className: "text-text-300 font-medium text-xs", children: "To" }),
            /* @__PURE__ */ r("h6", { className: "", children: e?.to ? n(e.to, l ?? "eee, MMM dd") : /* @__PURE__ */ r("pre", { children: " " }) })
          ] })
        ] }) }),
        /* @__PURE__ */ r(j, { children: /* @__PURE__ */ r(H, { children: "Date Picker" }) })
      ] }),
      /* @__PURE__ */ o("div", { className: "flex-1 flex flex-col items-center p-4", children: [
        /* @__PURE__ */ r(w, { ...v, mode: "range", selected: i, onDayClick: b, className: f("p-0", g) }),
        /* @__PURE__ */ o("div", { className: "flex justify-center items-center gap-4 mt-auto w-full", children: [
          /* @__PURE__ */ r(s, { variant: "text", className: "flex-1 h-10", onClick: c, children: y ?? "Cancel" }),
          /* @__PURE__ */ r(s, { variant: "primary", className: "flex-1 h-10", onClick: C, children: u ?? "Apply" })
        ] })
      ] })
    ] }) })
  ] });
};
export {
  K as MobileDateRangePicker
};
//# sourceMappingURL=mobiledaterangepicker.es.js.map
