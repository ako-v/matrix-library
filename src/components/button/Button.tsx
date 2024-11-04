import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";
import { SpinnerIcon } from "../Icons/SpinnerIcon";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-sm text-xs font-normal transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:bg-muted disabled:text-gray-500",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-primary-600 focus:bg-primary focus:border focus:border-primary-300 focus:border-3 active:bg-primary active:border-none active:outline active:outline-1 active:outline-primary active:outline-offset-1",
        outline:
          "border border-primary text-primary hover:bg-primary-50 focus:bg-primary-50 focus:border-primary-300 focus:border-3 active:border active:border-primary active:outline active:outline-1 active:outline-primary active:outline-offset-1 disabled:border-gray-400",
        text: "text-text [&>svg]:text-primary border border-transparent hover:bg-primary-50 focus:border focus:border-primary-300 focus:border-3 active:border-none active:outline-primary active:outline active:outline-1 disabled:text-text-300 [&>svg]:disabled:text-text-300 disabled:bg-transparent",
        danger:
          "bg-danger text-danger-foreground hover:bg-danger-600 focus:bg-danger focus:border focus:border-danger-400 focus:border-3 active:bg-danger active:border-none active:outline active:outline-1 active:outline-danger active:outline-offset-1",
        warning:
          "bg-warning text-warning-foreground hover:bg-warning-600 focus:bg-warning focus:border focus:border-warning-400 focus:border-3 active:bg-warning active:border-none active:outline active:outline-1 active:outline-warning active:outline-offset-1",
        success:
          "bg-success text-success-foreground hover:bg-success-600 focus:bg-success focus:border focus:border-success-400 focus:border-3 active:bg-success active:border-none active:outline active:outline-1 active:outline-success active:outline-offset-1",
        info: "bg-info text-info-foreground hover:bg-info-600 focus:bg-info focus:border focus:border-info-400 focus:border-3 active:bg-info active:border-none active:outline active:outline-1 active:outline-info active:outline-offset-1",
      },
      size: {
        md: "h-8 p-2",
        sm: "h-6 p-1",
        lg: "h-10 rounded-md p-4 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, loading, disabled, startIcon, endIcon, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} disabled={disabled || loading} {...props}>
        {loading ? <SpinnerIcon /> : null}
        {startIcon}
        {children}
        {endIcon}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button };
