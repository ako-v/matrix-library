"use client";

import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "../../lib/utils";

const SwipableDrawer = ({ shouldScaleBackground = true, ...props }: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
);
SwipableDrawer.displayName = "SwipableDrawer";

const SwipableDrawerTrigger = DrawerPrimitive.Trigger;

const SwipableDrawerPortal = DrawerPrimitive.Portal;

const SwipableDrawerClose = DrawerPrimitive.Close;

const SwipableDrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => <DrawerPrimitive.Overlay ref={ref} className={cn("fixed inset-0 z-50 bg-black/80", className)} {...props} />);
SwipableDrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const SwipableDrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <SwipableDrawerPortal>
    <SwipableDrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background", className)}
      {...props}
    >
      <div className="mx-auto my-2 h-1.5 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </SwipableDrawerPortal>
));
SwipableDrawerContent.displayName = "DrawerContent";

const SwipableDrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)} {...props} />
);
SwipableDrawerHeader.displayName = "DrawerHeader";

const SwipableDrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
);
SwipableDrawerFooter.displayName = "DrawerFooter";

const SwipableDrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title ref={ref} className={cn("text-lg font-semibold leading-none tracking-tight", className)} {...props} />
));
SwipableDrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const SwipableDrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => <DrawerPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />);
SwipableDrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  SwipableDrawer,
  SwipableDrawerPortal,
  SwipableDrawerOverlay,
  SwipableDrawerTrigger,
  SwipableDrawerClose,
  SwipableDrawerContent,
  SwipableDrawerHeader,
  SwipableDrawerFooter,
  SwipableDrawerTitle,
  SwipableDrawerDescription,
};
