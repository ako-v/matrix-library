import { jsxs as c, jsx as r } from "react/jsx-runtime";
import { useState as s } from "react";
import { cn as o } from "./utils.es.js";
import { Button as u } from "./button.es.js";
import { TimePickerContent as f } from "./timepickercontent.es.js";
import { Popover as d, PopoverTrigger as g, PopoverContent as l } from "./popover.es.js";
const k = ({ time: t, onTimeChange: a, className: i, slotsProps: e, ...p }) => {
  const [n, m] = s(!1);
  return /* @__PURE__ */ c(d, { open: n, onOpenChange: m, children: [
    /* @__PURE__ */ r(g, { asChild: !0, children: /* @__PURE__ */ r(
      u,
      {
        variant: "outline",
        className: o("border-gray-300 text-text focus:ring-0 active:ring-transparent justify-start", i),
        ...p,
        children: `${t?.hour?.toString()?.padStart(2, "0") ?? "--"} : ${t?.minute?.toString()?.padStart(2, "0") ?? "--"} ${t?.ampm ?? "--"}`
      }
    ) }),
    /* @__PURE__ */ r(l, { ...e?.content ?? {}, className: o("w-auto p-0", e?.content?.className), children: /* @__PURE__ */ r(f, { isOpen: n, onTimeChange: a, time: t, slotsProps: e }) })
  ] });
};
export {
  k as DesktopTimePicker
};
//# sourceMappingURL=desktoptimepicker.es.js.map
