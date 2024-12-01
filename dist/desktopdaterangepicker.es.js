import { jsxs as o, jsx as a } from "react/jsx-runtime";
import * as l from "react";
import { cn as n } from "./utils.es.js";
import { Calendar as u } from "./calendar.es.js";
import { Button as g } from "./button.es.js";
import { CalendarIcon as h } from "./calendaricon.es.js";
import { Popover as y, PopoverTrigger as x, PopoverContent as v } from "./popover.es.js";
import { formatDate as e } from "./format.es.js";
const k = ({
  formatStr: t,
  selected: r,
  placeholder: m,
  className: i,
  calendarClassName: s,
  ...p
}) => {
  const [f, d] = l.useState(!1);
  return /* @__PURE__ */ o(
    y,
    {
      open: f,
      onOpenChange: (c) => {
        d(c);
      },
      children: [
        /* @__PURE__ */ a(x, { asChild: !0, children: /* @__PURE__ */ o(
          g,
          {
            variant: "outline",
            className: n(
              "border-gray-300 text-text focus:ring-0 active:ring-transparent justify-start",
              !r && "text-muted-foreground",
              i
            ),
            children: [
              r ? /* @__PURE__ */ o("div", { className: "grid grid-cols-2 flex-1 justify-items-start", children: [
                /* @__PURE__ */ o("span", { children: [
                  "From: ",
                  r?.from ? e(r.from, t ?? "yyyy/MM/dd") : "-"
                ] }),
                " ",
                /* @__PURE__ */ o("span", { children: [
                  "To: ",
                  r?.to ? e(r.to, t ?? "yyyy/MM/dd") : "-"
                ] })
              ] }) : /* @__PURE__ */ a("span", { children: m ?? "Pick a Range" }),
              /* @__PURE__ */ a(h, { className: "mr-2 h-5 w-4 ms-auto" })
            ]
          }
        ) }),
        /* @__PURE__ */ a(v, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ a(u, { ...p, mode: "range", selected: r, className: n(s, "md:max-w-full md:w-[36rem]"), numberOfMonths: 2 }) })
      ]
    }
  );
};
export {
  k as DesktopDateRangePicker
};
//# sourceMappingURL=desktopdaterangepicker.es.js.map
