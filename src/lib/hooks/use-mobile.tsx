import * as React from "react";
import defaultTheme from "tailwindcss/defaultTheme";

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);
  const mobileBreakpoint = Number(defaultTheme.screens.md.slice(0, -2));

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${mobileBreakpoint - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < mobileBreakpoint);
    return () => mql.removeEventListener("change", onChange);
  }, [mobileBreakpoint]);

  return !!isMobile;
}
