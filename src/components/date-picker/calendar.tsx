/* eslint-disable camelcase */
import * as React from "react";
import { Chevron, DayPicker, DayPickerProps } from "react-day-picker";

import { cn } from "../../lib/utils";
import { ChevronLeftIcon } from "../Icons/ChevronLeftIcon";
import { ChevronRightIcon } from "../Icons/ChevronRightIcon";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { Button } from "../button/Button";
import { ChevronDownIcon } from "../Icons/ChevronDownIcon";

export type CalendarProps = DayPickerProps & {};

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  const yearCollapseRef = React.useRef<HTMLDivElement>(null);
  const [size, setSize] = React.useState({ width: 0, height: 0 });

  React.useEffect(() => {
    if (yearCollapseRef.current) {
      const { width, height } = yearCollapseRef.current.parentElement?.parentElement?.parentElement?.getBoundingClientRect() ?? {
        width: 0,
        height: 0,
      };
      setSize({ width, height });
    }
  }, []);

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3 relative w-full max-w-sm group/root", className)}
      classNames={{
        months: "flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0",
        month: "space-y-4 peer",
        month_caption: "flex justify-center pt-1 relative items-center",
        dropdowns: "flex gap-2",
        caption_label: "text-sm font-bold",
        nav: "space-x-1 flex items-center group-has-[[data-state=open]]/root:hidden",
        button_previous: "h-7 w-7 bg-transparent p-0 text-primary hover:opacity-100 absolute left-3 top-3 z-10",
        button_next: "h-7 w-7 bg-transparent p-0 text-primary hover:opacity-100 absolute right-3 top-3 z-10",
        month_grid: cn("w-full border-collapse space-y-1"),
        weekdays: "grid grid-cols-7",
        weekday: "text-text rounded-md w-8 font-bold text-sm",
        week: "mt-2 h-11 grid grid-cols-7 items-center",
        day: "relative p-0 text-center text-sm h-11 w-11 md:w-9 md:h-9 ",
        day_button: "w-full h-full p-0",
        range_start: "bg-secondary/50 rounded-l-full rtl:rounded-r-full rtl:rounded-l-none",
        range_end: "bg-secondary/50 rounded-r-full rtl:rounded-l-full rtl:rounded-r-none",
        selected:
          "[&>button]:bg-secondary [&>button]:rounded-full text-text font-bold [&>button]:hover:bg-secondary [&>button]:hover:text-text [&>button]:focus:bg-secondary [&>button]:focus:text-text",
        today: "text-primary font-bold",
        outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        disabled: "text-muted-foreground opacity-50",
        range_middle: "[&>button]:data-[selected='true']:bg-secondary/50 [&>button]:data-[selected='true']:rounded-none text-accent-foreground",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: props => {
          if (props.orientation === "left") {
            return <ChevronLeftIcon {...props} className="h-6 w-6" />;
          } else if (props.orientation === "right") {
            return <ChevronRightIcon {...props} className="h-6 w-6" />;
          }
          return <Chevron {...props} />;
        },
        YearsDropdown: props => {
          const handleChange = (value: string) => {
            props.onChange?.({ target: { value: value } } as unknown as React.ChangeEvent<HTMLSelectElement>);
          };
          return (
            <Collapsible ref={yearCollapseRef}>
              <CollapsibleTrigger className="group flex gap-1">
                {props.value} <ChevronDownIcon className="text-primary w-6 h-6 group-data-[state='open']:rotate-180 transition-transform ms-auto" />
              </CollapsibleTrigger>
              <CollapsibleContent
                className="overflow-auto z-50 absolute bg-popover left-2 top-11 p-1"
                style={{ width: size.width, height: size.height - 44 }}
              >
                <div className="flex flex-row flex-wrap gap-4">
                  {props.options?.reverse()?.map(option => (
                    <CollapsibleTrigger asChild key={option.label}>
                      <Button
                        data-value={option.value}
                        variant="text"
                        className={cn("h-6 w-14 py-1 px-3 rounded-full font-bold", props.value === option.value && "bg-secondary")}
                        onClick={() => handleChange(option.value.toString())}
                      >
                        {option.label}
                      </Button>
                    </CollapsibleTrigger>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          );
        },
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
