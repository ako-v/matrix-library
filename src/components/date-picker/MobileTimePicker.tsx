import { HTMLAttributes, useState } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import { cn } from "../../lib/utils";
import { Button } from "../button/Button";
import { Time, TimePickerContent } from "./TimePickerContent";
import {
  SwipableDrawer,
  SwipableDrawerContent,
  SwipableDrawerDescription,
  SwipableDrawerHeader,
  SwipableDrawerTitle,
} from "../drawer/SwipableDrawer";

type MobileTimePickerProps = HTMLAttributes<HTMLButtonElement> & {
  time: Time | undefined;
  onTimeChange: (time: Time | undefined) => void;
  slotsProps?: {
    content?: HTMLAttributes<HTMLDivElement>;
  };
};

const MobileTimePicker: React.FC<MobileTimePickerProps> = ({ time, onTimeChange, className, slotsProps, ...restProps }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SwipableDrawer open={isOpen} onOpenChange={setIsOpen}>
      <Button
        variant={"outline"}
        className={cn("border-gray-300 text-text focus:ring-0 active:ring-transparent justify-start", className)}
        onClick={() => setIsOpen(true)}
        {...restProps}
      >
        {`${time?.hour?.toString()?.padStart(2, "0") ?? "--"} : ${time?.minute?.toString()?.padStart(2, "0") ?? "--"} ${time?.ampm ?? "--"}`}
      </Button>
      <SwipableDrawerContent>
        <SwipableDrawerHeader className="p-0">
          <VisuallyHidden>
            <SwipableDrawerTitle className="text-primary text-lg font-bold text-start"> </SwipableDrawerTitle>
            <SwipableDrawerDescription> </SwipableDrawerDescription>
          </VisuallyHidden>
        </SwipableDrawerHeader>
        <TimePickerContent isOpen={isOpen} onTimeChange={onTimeChange} time={time} slotsProps={slotsProps} />
      </SwipableDrawerContent>
    </SwipableDrawer>
  );
};
export { MobileTimePicker, type MobileTimePickerProps };
