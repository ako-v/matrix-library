import { jsxs as u, jsx as v } from "react/jsx-runtime";
import * as b from "react";
import { Slot as m } from "@radix-ui/react-slot";
import { cva as p } from "class-variance-authority";
import { cn as d } from "./utils.es.js";
import { SpinnerIcon as y } from "./spinnericon.es.js";
const l = p(
  "inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-sm text-xs font-normal transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:bg-muted disabled:text-gray-500",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary-600 focus:bg-primary focus:border-primary focus:ring focus:ring-primary-300 active:bg-primary active:ring active:ring-1 active:ring-primary active:ring-offset-2",
        outline: "border border-primary text-primary hover:bg-primary-50 focus:bg-primary-50 focus:border-primary-100 focus:ring focus:ring-primary-100 active:bg-primary-50 active:border-primary active:ring-1 active:ring-primary active:ring-offset-2 disabled:border-gray-400",
        text: "text-text [&>svg]:text-primary border border-transparent hover:bg-primary-50 focus:border focus:border-primary-300 focus:border-3 active:border-none active:outline-primary active:outline active:outline-1 disabled:text-text-300 [&>svg]:disabled:text-text-300 disabled:bg-transparent",
        danger: "bg-danger text-danger-foreground hover:bg-danger-600 focus:bg-danger focus:ring focus:ring-danger-400 active:bg-danger active:ring-1 active:ring-danger active:ring-offset-2",
        warning: "bg-warning text-warning-foreground hover:bg-warning-600 focus:bg-warning focus:ring focus:ring-warning-400 active:bg-warning active:ring-1 active:ring-warning active:ring-offset-2",
        success: "bg-success text-success-foreground hover:bg-success-600 focus:bg-success focus:ring focus:ring-success-400 active:bg-success active:ring-1 active:ring-success active:ring-offset-2",
        info: "bg-info text-info-foreground hover:bg-info-600 focus:bg-info focus:ring focus:ring-info-400 active:bg-info active:ring-1 active:ring-info active:ring-offset-2",
        primaryOnDark: "bg-gray-0 text-primary hover:bg-primary-50 focus:bg-gray-0 focus:border-none focus:ring focus:ring-primary-100 active:ring-0 active:bg-gray-0 active:outline active:outline-2 active:outline-gray-0 active:outline-offset-1",
        outlineOnDark: "border border-gray-0 text-gray-0 hover:bg-primary-100 hover:text-primary focus:text-primary focus:bg-primary-50 focus:border-primary-50 focus:ring focus:ring-primary-100 active:text-gray-0 active:bg-transparent active:border-gray-0 active:ring-0 active:outline active:outline-1 active:outline-gray-0 active:outline-offset-2",
        textOnDark: "text-gray-0 hover:bg-primary-50 hover:text-text [&>svg]:hover:text-primary focus:text-text focus:bg-transparent focus:border-none [&>svg]:focus:text-primary-100 focus:ring focus:ring-primary-100 active:ring-0 active:bg-primary-50 active:text-text [&>svg]:active:text-primary active:outline active:outline-1 active:outline-gray-0 active:outline-offset-1"
      },
      size: {
        md: "h-8 p-2",
        sm: "h-6 p-1",
        lg: "h-10 rounded-md p-4 text-sm"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
), x = b.forwardRef(
  ({ className: e, variant: i, size: t, asChild: a = !1, children: o, loading: r, disabled: n, startIcon: c, endIcon: g, ...s }, f) => /* @__PURE__ */ u(a ? m : "button", { className: d(l({ variant: i, size: t, className: e })), ref: f, disabled: n || r, ...s, children: [
    r ? /* @__PURE__ */ v(y, {}) : null,
    c,
    o,
    g
  ] })
);
x.displayName = "Button";
export {
  x as Button
};
//# sourceMappingURL=button.es.js.map
