import { jsx as r } from "react/jsx-runtime";
import e from "react";
import { DesktopDatePicker as c } from "./desktopdatepicker.es.js";
import { MobileDatePicker as d } from "./mobiledatepicker.es.js";
import i from "./defaulttheme.es.js";
const b = (t) => {
  const [n, s] = e.useState(0);
  e.useEffect(() => {
    const o = new ResizeObserver(() => {
      s(window.innerWidth);
    });
    return o.observe(document.documentElement), () => {
      o.disconnect();
    };
  }, []);
  const m = e.useMemo(() => window !== void 0 ? window?.matchMedia?.(`(max-width: ${i.screens.md})`)?.matches : !1, [n]);
  return console.log(i.screens.md), m ? /* @__PURE__ */ r(d, { ...t }) : /* @__PURE__ */ r(c, { ...t });
};
export {
  b as DatePicker,
  c as DesktopDatePicker,
  d as MobileDatePicker
};
//# sourceMappingURL=datepicker.es.js.map
