import { jsx as r, jsxs as o } from "react/jsx-runtime";
import { createElement as F } from "react";
import { useController as N } from "react-hook-form";
import { cn as x } from "./utils.es.js";
import { SpinnerIcon as T } from "./spinnericon.es.js";
import { FormField as V, FormItem as k, FormLabel as y, FormControl as L, FormMessage as j } from "./form.es.js";
import { Select as M, SelectTrigger as E, SelectValue as O, SelectContent as U, SelectItem as a } from "./select.es.js";
const G = (h) => {
  const {
    name: c,
    control: m,
    defaultValue: i,
    disabled: t,
    rules: d,
    shouldUnregister: p,
    label: n,
    options: s,
    loading: u,
    loadingText: b,
    emptyOptionsText: P,
    placeholder: v,
    slotProps: e
  } = h, { field: g } = N({ name: c, control: m, rules: d, defaultValue: i, disabled: t, shouldUnregister: p }), S = typeof s[0]?.value == "number", C = (l) => {
    S ? g.onChange(Number(l)) : g.onChange(l);
  };
  return /* @__PURE__ */ r(
    V,
    {
      control: m,
      name: c,
      defaultValue: i,
      disabled: t,
      rules: d,
      shouldUnregister: p,
      render: ({ field: l }) => /* @__PURE__ */ o(k, { ...e?.formItemProps ?? {}, children: [
        /* @__PURE__ */ r(y, { ...e?.formLabelProps ?? {}, children: n }),
        /* @__PURE__ */ o(
          M,
          {
            ...e?.selectProps ?? {},
            disabled: t,
            onValueChange: C,
            value: l.value !== void 0 ? String(l.value) : void 0,
            children: [
              /* @__PURE__ */ r(L, { children: /* @__PURE__ */ r(
                E,
                {
                  ...e?.selectTriggerProps ?? {},
                  className: x("*:truncate [&>span]:inline-block", e?.selectTriggerProps?.className),
                  children: /* @__PURE__ */ r(O, { ...e?.selectValueProps ?? {}, placeholder: v ?? n })
                }
              ) }),
              /* @__PURE__ */ o(U, { ...e?.selectContentProps ?? {}, children: [
                u && /* @__PURE__ */ o(a, { ...e?.selectItemProps ?? {}, value: "-1", disabled: !0, children: [
                  /* @__PURE__ */ r(T, { className: "inline-block mb-0.5" }),
                  " ",
                  b || "Loading..."
                ] }),
                !u && !s.length ? /* @__PURE__ */ r(
                  a,
                  {
                    ...e?.selectItemProps ?? {},
                    value: "8fdcaeb67c8ad943c80fe54c3b1059b700d9254389a38a4a1fc39a6eee728623",
                    disabled: !0,
                    children: P || "No Items"
                  }
                ) : null,
                s?.map((f, I) => /* @__PURE__ */ F(a, { ...e?.selectItemProps ?? {}, value: String(f.value), key: I + "_" + n }, f.label))
              ] })
            ]
          }
        ),
        /* @__PURE__ */ r(j, { ...e?.formMessageProps ?? {} })
      ] })
    }
  );
};
export {
  G as FormSelect
};
//# sourceMappingURL=formselect.es.js.map
