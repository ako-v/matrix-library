import { jsxs as d, jsx as r } from "react/jsx-runtime";
import * as m from "react";
import { cva as f } from "class-variance-authority";
import { cn as i } from "./utils.es.js";
const p = f(
  "flex w-full rounded-sm border border-input text-gray-800 bg-transparent p-0 text-xs font-medium shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-text-300 hover:border-primary-400 focus-within:border-primary-400 focus-within:outline-none focus-within:ring focus-within:ring-primary-100  disabled:cursor-not-allowed disabled:text-text-300 disabled:bg-gray-100 disabled:border-gray-100",
  {
    variants: {
      size: {
        sm: "h-7",
        md: "h-9",
        lg: "h-11"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), u = m.forwardRef(({ className: o, slotProps: t, suffix: e, endButton: n, size: a, ...s }, l) => /* @__PURE__ */ d("div", { ...s, className: i(p({ size: a, className: o })), children: [
  /* @__PURE__ */ r(
    "input",
    {
      ref: l,
      ...t?.inputProps ?? {},
      className: i(
        "focus:outline-none w-full h-full px-3 py-1 rounded-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-text-300 ",
        t?.inputProps?.className
      )
    }
  ),
  typeof e == "string" || typeof e == "number" ? /* @__PURE__ */ r("span", { className: "inline-flex items-center px-2 text-xs font-medium text-primary bg-primary-50 m-0.5 rounded-sm", children: e }) : e,
  n
] }));
u.displayName = "TextField";
export {
  u as TextField
};
//# sourceMappingURL=textfield.es.js.map
