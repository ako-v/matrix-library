import { jsx as t } from "react/jsx-runtime";
import e from "react";
import n from "./defaulttheme.es.js";
import { MobileTimePicker as s } from "./mobiletimepicker.es.js";
import { DesktopTimePicker as c } from "./desktoptimepicker.es.js";
const b = (i) => {
  const [r, m] = e.useState(0);
  return e.useEffect(() => {
    const o = new ResizeObserver(() => {
      m(window.innerWidth);
    });
    return o.observe(document.documentElement), () => {
      o.disconnect();
    };
  }, []), e.useMemo(() => window !== void 0 ? window?.matchMedia?.(`(max-width: ${n.screens.md})`)?.matches : !1, [r]) ? /* @__PURE__ */ t(s, { ...i }) : /* @__PURE__ */ t(c, { ...i });
};
export {
  c as DesktopTimePicker,
  s as MobileTimePicker,
  b as TimePicker
};
//# sourceMappingURL=timepicker.es.js.map
