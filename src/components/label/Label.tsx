import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const labelVariants = cva("text-xs font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70");

const Label = React.forwardRef<HTMLLabelElement, React.ComponentPropsWithoutRef<"label"> & VariantProps<typeof labelVariants>>(
  ({ className, ...props }, ref) => <label ref={ref} className={cn(labelVariants({ className }))} {...props} />,
);
Label.displayName = "Label";

export { Label };