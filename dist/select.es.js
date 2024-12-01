import { jsx as t, jsxs as d } from "react/jsx-runtime";
import * as l from "react";
import * as e from "@radix-ui/react-select";
import { cn as s } from "./utils.es.js";
import { CheckIcon as x } from "./checkicon.es.js";
import { ChevronUpIcon as b } from "./chevronupicon.es.js";
import { ChevronDownIcon as c } from "./chevrondownicon.es.js";
import { CloseIcon as g } from "./closeicon.es.js";
const m = l.createContext({ onClear: () => {
}, value: void 0 }), w = ({ onValueChange: r, value: o, ...a }) => {
  const n = () => {
    r?.("");
  };
  return /* @__PURE__ */ t(m.Provider, { value: { onClear: n, value: o }, children: /* @__PURE__ */ t(e.Root, { ...a, value: o, onValueChange: r }) });
};
w.displayName = e.Root.displayName;
const U = e.Group, k = e.Value, N = l.forwardRef(({ className: r, children: o, ...a }, n) => {
  const { onClear: i, value: u } = l.useContext(m), h = (y) => {
    y.stopPropagation();
  };
  return /* @__PURE__ */ d(
    e.Trigger,
    {
      ref: n,
      className: s(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-sm border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground hover:border hover:border-primary focus:border focus:border-primary focus:outline-none focus:ring focus:ring-primary-100 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-text-300 disabled:border-none [&>span]:line-clamp-1 [&_svg]:disabled:text-text-300",
        r
      ),
      ...a,
      children: [
        o,
        /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
          u && /* @__PURE__ */ t(e.Icon, { asChild: !0, onPointerDown: h, onClickCapture: i, children: /* @__PURE__ */ t(g, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ t(e.Icon, { asChild: !0, children: /* @__PURE__ */ t(c, { className: "h-4 w-4 text-primary " }) })
        ] })
      ]
    }
  );
});
N.displayName = e.Trigger.displayName;
const p = l.forwardRef(({ className: r, ...o }, a) => /* @__PURE__ */ t(e.ScrollUpButton, { ref: a, className: s("flex cursor-default items-center justify-center py-1", r), ...o, children: /* @__PURE__ */ t(b, {}) }));
p.displayName = e.ScrollUpButton.displayName;
const f = l.forwardRef(({ className: r, ...o }, a) => /* @__PURE__ */ t(e.ScrollDownButton, { ref: a, className: s("flex cursor-default items-center justify-center py-1", r), ...o, children: /* @__PURE__ */ t(c, {}) }));
f.displayName = e.ScrollDownButton.displayName;
const v = l.forwardRef(({ className: r, children: o, position: a = "popper", ...n }, i) => /* @__PURE__ */ t(e.Portal, { children: /* @__PURE__ */ d(
  e.Content,
  {
    ref: i,
    className: s(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      a === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1 max-h-[--radix-select-content-available-height]",
      r
    ),
    position: a,
    ...n,
    children: [
      /* @__PURE__ */ t(p, {}),
      /* @__PURE__ */ t(
        e.Viewport,
        {
          className: s("p-1", a === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
          children: o
        }
      ),
      /* @__PURE__ */ t(f, {})
    ]
  }
) }));
v.displayName = e.Content.displayName;
const S = l.forwardRef(
  ({ className: r, ...o }, a) => /* @__PURE__ */ t(e.Label, { ref: a, className: s("px-2 py-1.5 text-sm font-semibold", r), ...o })
);
S.displayName = e.Label.displayName;
const C = l.forwardRef(
  ({ className: r, children: o, ...a }, n) => /* @__PURE__ */ d(
    e.Item,
    {
      ref: n,
      className: s(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-gray-200 data-[active=true]:bg-gray-300 data-[active=true]:font-bold data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        r
      ),
      ...a,
      children: [
        /* @__PURE__ */ t("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ t(e.ItemIndicator, { children: /* @__PURE__ */ t(x, { className: "h-4 w-4" }) }) }),
        /* @__PURE__ */ t(e.ItemText, { children: o })
      ]
    }
  )
);
C.displayName = e.Item.displayName;
const I = l.forwardRef(({ className: r, ...o }, a) => /* @__PURE__ */ t(e.Separator, { ref: a, className: s("-mx-1 my-1 h-px bg-muted", r), ...o }));
I.displayName = e.Separator.displayName;
export {
  w as Select,
  v as SelectContent,
  U as SelectGroup,
  C as SelectItem,
  S as SelectLabel,
  f as SelectScrollDownButton,
  p as SelectScrollUpButton,
  I as SelectSeparator,
  N as SelectTrigger,
  k as SelectValue
};
//# sourceMappingURL=select.es.js.map
