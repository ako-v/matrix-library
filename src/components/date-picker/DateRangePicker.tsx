import React from "react";

import defaultTheme from "tailwindcss/defaultTheme";
import { MobileDateRangePicker, MobileDateRangePickerProps } from "./MobileDateRangePicker";
import { DesktopDateRangePicker, DesktopDateRangePickerProps } from "./DesktopDateRangePicker";

type DateRangePickerProps = DesktopDateRangePickerProps & MobileDateRangePickerProps & {};

const DateRangePicker: React.FC<DateRangePickerProps> = props => {
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

  return isMobile ? <MobileDateRangePicker {...props} /> : <DesktopDateRangePicker {...props} />;
};

export {
  DateRangePicker,
  DesktopDateRangePicker,
  MobileDateRangePicker,
  type DateRangePickerProps,
  type DesktopDateRangePickerProps,
  type MobileDateRangePickerProps,
};
