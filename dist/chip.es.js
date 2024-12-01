import { jsxs as l, jsx as t } from "react/jsx-runtime";
import d from "react";
import { Slot as c } from "@radix-ui/react-slot";
import { cva as f } from "class-variance-authority";
import { cn as e } from "./utils.es.js";
import { CloseIcon as g } from "./closeicon.es.js";
const x = f("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-xs font-medium", {
  variants: {
    variant: {
      primary: "bg-primary-100 text-primary-700 border border-primary",
      neutral: "bg-gray-50 text-text-400 border border-gray-400"
    },
    size: {
      sm: "px-2 h-6",
      md: "px-4 h-8",
      lg: "px-6 h-10 text-sm"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
}), h = d.forwardRef(({ className: a, variant: m, asChild: o = !1, children: s, onClose: i, size: r, ...p }, n) => /* @__PURE__ */ l(o ? c : "span", { className: e(x({ variant: m, size: r, className: a })), ref: n, ...p, children: [
  s,
  i ? /* @__PURE__ */ t(
    "button",
    {
      className: e(
        { "-me-3 [&>svg]:w-5 [&>svg]:h-5": r === "lg" },
        { "-me-2 [&>svg]:w-4.5 [&>svg]:h-4.5": r === "md" || r === void 0 },
        { "-me-1 [&>svg]:w-4 [&>svg]:h-4": r === "sm" }
      ),
      children: /* @__PURE__ */ t(g, {})
    }
  ) : null
] }));
h.displayName = "Chip";
export {
  h as Chip
};
//# sourceMappingURL=chip.es.js.map
