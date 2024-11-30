import React from "react";
import { DesktopDatePicker, DesktopDatePickerProps } from "./DesktopDatePicker";
import { MobileDatePicker, MobileDatePickerProps } from "./MobileDatePicker";
import defaultTheme from "tailwindcss/defaultTheme";

type DatePickerProps = DesktopDatePickerProps & MobileDatePickerProps & {};

const DatePicker: React.FC<DatePickerProps> = props => {
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

  console.log(defaultTheme.screens.md);

  return isMobile ? <MobileDatePicker {...props} /> : <DesktopDatePicker {...props} />;
};

export { DatePicker, DesktopDatePicker, MobileDatePicker, type DatePickerProps, type DesktopDatePickerProps, type MobileDatePickerProps };
