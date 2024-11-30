import React from "react";
import defaultTheme from "tailwindcss/defaultTheme";

import { Time } from "./TimePickerContent";
import { MobileTimePicker, MobileTimePickerProps } from "./MobileTimePicker";
import { DesktopTimePicker, DesktopTimePickerProps } from "./DesktopTimePicker";

type TimePickerProps = DesktopTimePickerProps & {};

const TimePicker: React.FC<TimePickerProps> = props => {
  // re render to show proper modal on resize
  const [windowSize, setWindowSize] = React.useState(0);
  React.useEffect(() => {
    const observer = new ResizeObserver(() => {
      setWindowSize(window.innerWidth);
    });

    observer.observe(document.documentElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  const isMobile = React.useMemo(() => {
    if (window !== undefined) {
      return window?.matchMedia?.(`(max-width: ${defaultTheme.screens.md})`)?.matches;
    }
    return false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowSize]);

  return isMobile ? <MobileTimePicker {...props} /> : <DesktopTimePicker {...props} />;
};

export { TimePicker, DesktopTimePicker, type DesktopTimePickerProps, MobileTimePicker, type MobileTimePickerProps, type TimePickerProps, type Time };
