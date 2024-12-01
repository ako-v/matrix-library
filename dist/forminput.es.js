import { jsx as o, jsxs as P } from "react/jsx-runtime";
import { FormField as F, FormItem as a, FormLabel as u, FormControl as f, FormMessage as c } from "./form.es.js";
import { TextField as x } from "./textfield.es.js";
const I = (e) => {
  const { name: s, control: t, defaultValue: l, disabled: m, rules: p, shouldUnregister: n, label: i, slotProps: r } = e;
  return /* @__PURE__ */ o(
    F,
    {
      control: t,
      name: s,
      defaultValue: l,
      disabled: m,
      rules: p,
      shouldUnregister: n,
      render: ({ field: d }) => /* @__PURE__ */ P(a, { ...r?.formItemProps ?? {}, children: [
        /* @__PURE__ */ o(u, { ...r?.formLabelProps ?? {}, children: i }),
        /* @__PURE__ */ o(f, { ...r?.formControlProps ?? {}, children: /* @__PURE__ */ o(
          x,
          {
            ...r?.textFieldProps ?? {},
            slotProps: { inputProps: { ...r?.textFieldProps?.slotProps?.inputProps, ...d } }
          }
        ) }),
        /* @__PURE__ */ o(c, { ...r?.formMessageProps ?? {} })
      ] })
    }
  );
};
export {
  I as FormInput
};
//# sourceMappingURL=forminput.es.js.map
