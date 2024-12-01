import { jsxs as a, jsx as r } from "react/jsx-runtime";
import * as h from "react";
import { cn as g } from "./utils.es.js";
import { Calendar as C } from "./calendar.es.js";
import { Button as x } from "./button.es.js";
import { Popover as k, PopoverTrigger as v, PopoverContent as D } from "./popover.es.js";
import { CalendarIcon as P } from "./calendaricon.es.js";
import { formatDate as N } from "./format.es.js";
const L = ({
  formatStr: e,
  selected: o,
  placeholder: n,
  className: i,
  calendarClassName: s,
  closeOnSelect: m,
  onDayClick: p,
  ...c
}) => {
  const [f, t] = h.useState(!1), l = (d, u, y) => {
    p?.(d, u, y), m && t(!1);
  };
  return /* @__PURE__ */ a(k, { open: f, onOpenChange: t, children: [
    /* @__PURE__ */ r(v, { asChild: !0, children: /* @__PURE__ */ a(
      x,
      {
        variant: "outline",
        className: g(
          "border-gray-300 text-text focus:ring-0 active:ring-transparent justify-start",
          !o && "text-muted-foreground",
          i
        ),
        children: [
          o ? N(o, e ?? "yyyy/MM/dd") : /* @__PURE__ */ r("span", { children: n ?? "Pick a date" }),
          /* @__PURE__ */ r(P, { className: "mr-2 h-5 w-5 ms-auto" })
        ]
      }
    ) }),
    /* @__PURE__ */ r(D, { className: "w-auto p-0", children: /* @__PURE__ */ r(
      C,
      {
        ...c,
        mode: "single",
        selected: o,
        captionLayout: "dropdown-years",
        className: s,
        onDayClick: l
      }
    ) })
  ] });
};
export {
  L as DesktopDatePicker
};
//# sourceMappingURL=desktopdatepicker.es.js.map
