import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import { cn } from "../../lib/utils";
import { CloseIcon } from "../Icons/CloseIcon";

const ModalPortal = DialogPrimitive.Portal;

const ModalClose = DialogPrimitive.Close;

const ModalOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
  />
));
ModalOverlay.displayName = DialogPrimitive.Overlay.displayName;

const ModalHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-row justify-between", className)} {...props} />
);
ModalHeader.displayName = "DialogHeader";

const ModalFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-row justify-end gap-2", className)} {...props} />
);
ModalFooter.displayName = "DialogFooter";

const ModalTitle = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Title>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>>(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Title ref={ref} className={cn("text-lg font-semibold leading-none tracking-tight", className)} {...props} />
  ),
);
ModalTitle.displayName = DialogPrimitive.Title.displayName;

const ModalDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => <DialogPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />);
ModalDescription.displayName = DialogPrimitive.Description.displayName;

interface ModalProps extends DialogPrimitive.DialogProps, Omit<DialogPrimitive.DialogContentProps, "title"> {
  title: React.ReactNode;
  slotProps?: {
    title?: React.ComponentProps<typeof ModalTitle>;
    close?: React.ComponentProps<typeof ModalClose>;
    header?: React.ComponentProps<typeof ModalHeader>;
    portal?: React.ComponentProps<typeof ModalPortal>;
  };
}

const Modal = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, ModalProps>((props, ref) => {
  const { title, className, children, open, onOpenChange, defaultOpen, modal, slotProps, ...restProps } = props;

  return (
    <DialogPrimitive.Root defaultOpen={defaultOpen} modal={modal} open={open} onOpenChange={onOpenChange}>
      <ModalPortal {...(slotProps?.portal ?? {})}>
        <ModalOverlay />
        <DialogPrimitive.Content
          ref={ref}
          className={cn(
            "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 grid gap-2 w-full max-w-lg p-4 border bg-background shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            className,
          )}
          {...restProps}
        >
          <ModalHeader {...(slotProps?.header ?? {})}>
            <ModalTitle {...(slotProps?.title ?? {})}>{title}</ModalTitle>
            <VisuallyHidden>
              <ModalDescription>{title}</ModalDescription>
            </VisuallyHidden>
            <ModalClose
              {...(slotProps?.close ?? {})}
              className={cn(
                "disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground mt-0",
                slotProps?.close?.className,
              )}
            >
              <CloseIcon className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </ModalClose>
          </ModalHeader>
          {/* Divider: the padding and margin is because of a bug in chrome causes the border to be shown with more height than expected */}
          <hr className="w-full border-muted -mt-[1px] pb-2" />
          {children}
        </DialogPrimitive.Content>
      </ModalPortal>
    </DialogPrimitive.Root>
  );
});

export { Modal, ModalFooter, type ModalProps };