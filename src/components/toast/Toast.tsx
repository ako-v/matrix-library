import { useEffect } from "react";
import { Toast, ToastClose, ToastProvider, ToastTitle, ToastViewport } from "./toast-components";

import { useToasts, toastParams } from "./use-toast";
import { InfoCircleIcon } from "../Icons/InfoCircleIcon";
import { SuccessCircleIcon } from "../Icons/SuccessCircleIcon";
import { WarningCircleIcon } from "../Icons/WarningCircleIcon";
import { DestructiveCircleIcon } from "../Icons/DestructiveCircleIcon";

export type ToastProps = {
  limit?: number;
  duration?: number;
};

export function Toaster({ limit = 3, duration = 5000 }: ToastProps) {
  const { toasts, removeToast } = useToasts();

  useEffect(() => {
    if (limit !== undefined) {
      toastParams.limit = limit;
    }
  }, [limit, duration]);

  return (
    <ToastProvider duration={duration}>
      {Array.from(toasts).map(([key, { message, variant }]) => {
        return (
          <Toast
            key={key}
            variant={variant}
            onOpenChange={open => {
              if (!open) {
                setTimeout(() => removeToast(key), 100); // let the animation finish then remove the toast
              }
            }}
          >
            <div className="flex gap-2 items-center">
              <div>
                {variant === "danger" && <DestructiveCircleIcon className="w-5 h-5" />}
                {variant === "success" && <SuccessCircleIcon className="w-5 h-5" />}
                {variant === "info" && <InfoCircleIcon className="w-5 h-5" />}
                {variant === "warning" && <WarningCircleIcon className="w-5 h-5" />}
              </div>
              {message && <ToastTitle>{message}</ToastTitle>}
            </div>
            <ToastClose />
            {/* {action} */}
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
