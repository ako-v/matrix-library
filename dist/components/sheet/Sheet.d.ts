import { DialogProps as SheetProps, DialogTriggerProps as SheetTriggerProps, DialogCloseProps as SheetCloseProps, DialogPortalProps as SheetPortalProps, DialogOverlayProps as SheetOverlayProps, DialogDescriptionProps as SheetDescriptionProps, DialogTitleProps as SheetTitleProps } from '@radix-ui/react-dialog';
import { VariantProps } from 'class-variance-authority';
import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
declare const Sheet: React.FC<SheetPrimitive.DialogProps>;
declare const SheetTrigger: React.ForwardRefExoticComponent<SheetPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const SheetClose: React.ForwardRefExoticComponent<SheetPrimitive.DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
declare const SheetPortal: React.FC<SheetPrimitive.DialogPortalProps>;
declare const SheetOverlay: React.ForwardRefExoticComponent<Omit<SheetPrimitive.DialogOverlayProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const sheetVariants: (props?: ({
    side?: "left" | "right" | "top" | "bottom" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>, VariantProps<typeof sheetVariants> {
}
declare const SheetContent: React.ForwardRefExoticComponent<SheetContentProps & React.RefAttributes<HTMLDivElement>>;
declare const SheetHeader: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
type SheetHeaderProps = React.ComponentProps<typeof SheetHeader>;
declare const SheetFooter: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
type SheetFooterProps = React.ComponentProps<typeof SheetFooter>;
declare const SheetTitle: React.ForwardRefExoticComponent<Omit<SheetPrimitive.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
declare const SheetDescription: React.ForwardRefExoticComponent<Omit<SheetPrimitive.DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
export { Sheet, SheetPortal, SheetOverlay, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription, type SheetProps, type SheetPortalProps, type SheetOverlayProps, type SheetTriggerProps, type SheetCloseProps, type SheetContentProps, type SheetHeaderProps, type SheetFooterProps, type SheetTitleProps, type SheetDescriptionProps, };
//# sourceMappingURL=Sheet.d.ts.map