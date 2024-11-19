"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "../../lib/utils";
import { Calendar } from "./calendar";
import { Button } from "../button/Button";
import { Popover, PopoverContent, PopoverTrigger } from "../popover/Popover";
import { PropsBase, PropsRange, DateRange } from "react-day-picker";

type DateRangePickerProps = PropsBase &
  Omit<PropsRange, "mode"> & {
    formatStr?: string;
    placeholder?: string;
    calendarClassName?: string;
    selected?: DateRange;
    required?: boolean;
  };

const DateRangePicker: React.FC<DateRangePickerProps> = ({ formatStr, selected, placeholder, className, calendarClassName, ...props }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Popover
      open={isOpen}
      onOpenChange={open => {
        setIsOpen(open);
      }}
    >
      <PopoverTrigger asChild>
        <div className="flex gap-2">
          <Button
            variant={"outline"}
            className={cn(
              "border-gray-300 text-text focus:ring-0 active:ring-transparent justify-start",
              !selected && "text-muted-foreground",
              className,
            )}
          >
            {selected?.from ? format(selected.from, formatStr ?? "yyyy/MM/dd") : <span>{placeholder ?? "From"}</span>}
            <CalendarIcon className="mr-2 h-4 w-4 ms-auto" />
          </Button>
          <Button
            variant={"outline"}
            className={cn(
              "border-gray-300 text-text focus:ring-0 active:ring-transparent justify-start",
              !selected && "text-muted-foreground",
              className,
            )}
          >
            {selected?.to ? format(selected.to, formatStr ?? "yyyy/MM/dd") : <span>{placeholder ?? "To"}</span>}
            <CalendarIcon className="mr-2 h-4 w-4 ms-auto" />
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar {...props} mode="range" selected={selected} className={cn(calendarClassName, "md:w-[36rem]")} numberOfMonths={2} />
      </PopoverContent>
    </Popover>
  );
};

export default DateRangePicker;
