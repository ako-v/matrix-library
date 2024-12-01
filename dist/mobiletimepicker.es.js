import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { useState as s } from "react";
import { VisuallyHidden as m } from "@radix-ui/react-visually-hidden";
import { cn as c } from "./utils.es.js";
import { Button as d } from "./button.es.js";
import { TimePickerContent as f } from "./timepickercontent.es.js";
import { SwipableDrawer as u, SwipableDrawerContent as w, SwipableDrawerHeader as S, SwipableDrawerTitle as h, SwipableDrawerDescription as b } from "./swipabledrawer.es.js";
const N = ({ time: e, onTimeChange: n, className: o, slotsProps: l, ...p }) => {
  const [i, a] = s(!1);
  return /* @__PURE__ */ t(u, { open: i, onOpenChange: a, children: [
    /* @__PURE__ */ r(
      d,
      {
        variant: "outline",
        className: c("border-gray-300 text-text focus:ring-0 active:ring-transparent justify-start", o),
        onClick: () => a(!0),
        ...p,
        children: `${e?.hour?.toString()?.padStart(2, "0") ?? "--"} : ${e?.minute?.toString()?.padStart(2, "0") ?? "--"} ${e?.ampm ?? "--"}`
      }
    ),
    /* @__PURE__ */ t(w, { children: [
      /* @__PURE__ */ r(S, { className: "p-0", children: /* @__PURE__ */ t(m, { children: [
        /* @__PURE__ */ r(h, { className: "text-primary text-lg font-bold text-start", children: " " }),
        /* @__PURE__ */ r(b, { children: " " })
      ] }) }),
      /* @__PURE__ */ r(f, { isOpen: i, onTimeChange: n, time: e, slotsProps: l })
    ] })
  ] });
};
export {
  N as MobileTimePicker
};
//# sourceMappingURL=mobiletimepicker.es.js.map
