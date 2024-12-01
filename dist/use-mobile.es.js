import * as o from "react";
import s from "./defaulttheme.es.js";
function c() {
  const [r, n] = o.useState(void 0), e = Number(s.screens.md.slice(0, -2));
  return o.useEffect(() => {
    const t = window.matchMedia(`(max-width: ${e - 1}px)`), i = () => {
      n(window.innerWidth < e);
    };
    return t.addEventListener("change", i), n(window.innerWidth < e), () => t.removeEventListener("change", i);
  }, [e]), !!r;
}
export {
  c as useIsMobile
};
//# sourceMappingURL=use-mobile.es.js.map
