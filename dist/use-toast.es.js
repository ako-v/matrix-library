import o from "react";
const i = {
  limit: 3
}, e = /* @__PURE__ */ new Map(), n = { setState: () => {
} }, a = (t) => (e.size >= i.limit && e.delete(e.keys().next().value), e.set(String(Date.now()), t), n.setState(new Map(e)), e), c = (t) => {
  e.delete(t), n.setState(new Map(e));
}, s = (t) => a({ message: t, variant: "default" });
s.success = (t) => a({ message: t, variant: "success" });
s.danger = (t) => a({ message: t, variant: "danger" });
s.warning = (t) => a({ message: t, variant: "warning" });
s.info = (t) => a({ message: t, variant: "info" });
const d = () => {
  const [t, r] = o.useState(e);
  return o.useEffect(() => (n.setState = r, () => {
    n.setState = () => {
    };
  }), [t]), { toast: s, toasts: t, addToast: a, removeToast: c };
};
export {
  s as toast,
  i as toastParams,
  d as useToasts
};
//# sourceMappingURL=use-toast.es.js.map
