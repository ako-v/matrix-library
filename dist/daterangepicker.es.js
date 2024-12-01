import { jsx as i } from "react/jsx-runtime";
import e from "react";
import s from "./defaulttheme.es.js";
import { MobileDateRangePicker as m } from "./mobiledaterangepicker.es.js";
import { DesktopDateRangePicker as c } from "./desktopdaterangepicker.es.js";
const b = (t) => {
  const [r, n] = e.useState(0);
  return e.useEffect(() => {
    const o = new ResizeObserver(() => {
      n(window.innerWidth);
    });
    return o.observe(document.documentElement), () => {
      o.disconnect();
    };
  }, []), e.useMemo(() => window !== void 0 ? window?.matchMedia?.(`(max-width: ${s.screens.md})`)?.matches : !1, [r]) ? /* @__PURE__ */ i(m, { ...t }) : /* @__PURE__ */ i(c, { ...t });
};
export {
  b as DateRangePicker,
  c as DesktopDateRangePicker,
  m as MobileDateRangePicker
};
//# sourceMappingURL=daterangepicker.es.js.map
