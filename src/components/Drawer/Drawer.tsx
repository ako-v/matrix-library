"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import defaultTheme from "tailwindcss/defaultTheme";
import { createContextScope, Scope } from "@radix-ui/react-context";

import { cn } from "../../lib/utils";
import { Modal } from "../modal/Modal";
import { IconButton } from "../icon-botton/IconButton";
import { ChevronsRightIcon } from "../Icons/ChevronsRightIcon";

type ScopedProps<P> = P & { __scopeDrawer?: Scope };

const DRAWER_NAME = "Drawer";

const [createDrawerContext] = createContextScope(DRAWER_NAME);

interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose?: () => void;
  anchor?: "left" | "right";
  width?: number;
  children?: React.ReactNode;
  asChild?: boolean;
  mobileBreakpoint?: number;
}

type DrawerContextValue = {
  open: boolean;
  onClose?: () => void;
  anchor: "left" | "right";
  width: number;
  isMobile: boolean;
};

const [DrawerProvider, useDrawerProvider] = createDrawerContext<DrawerContextValue>(DRAWER_NAME);

const Drawer = React.forwardRef<React.ElementRef<"div">, ScopedProps<DrawerProps>>((props, ref) => {
  const { asChild, anchor = "right", children, open, width = 240, className, onClose, __scopeDrawer, mobileBreakpoint, ...restProps } = props;
  const Comp = asChild ? Slot : "div";

  // re render to show proper modal on resize
  const [resized, setResized] = React.useState(false);
  React.useEffect(() => {
    const observer = new ResizeObserver(() => {
      setResized(prev => !prev);
    });

    observer.observe(document.documentElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  const isMobile = React.useMemo(() => {
    if (mobileBreakpoint) {
      return !global?.window?.matchMedia?.(`(min-width: ${mobileBreakpoint})`)?.matches;
    }
    return !global?.window?.matchMedia?.(`(min-width: ${defaultTheme.screens.md})`)?.matches;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mobileBreakpoint, resized]);

  return (
    <Comp ref={ref} className={cn("flex", className)} {...restProps}>
      <DrawerProvider anchor={anchor} onClose={onClose} open={open} width={width} isMobile={isMobile} scope={__scopeDrawer}>
        {children}
      </DrawerProvider>
    </Comp>
  );
});

Drawer.displayName = DRAWER_NAME;

interface DrawerMainProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild: boolean;
}

const DRAWER_MAIN_NAME = "DrawerMain";

const DrawerMain = React.forwardRef<HTMLDivElement, ScopedProps<DrawerMainProps>>(
  ({ asChild, children, className, style, __scopeDrawer, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    const { anchor, open, width, isMobile } = useDrawerProvider(DRAWER_MAIN_NAME, __scopeDrawer);

    const marginStyle = React.useMemo(() => {
      if (isMobile) {
        return {};
      }
      if (anchor === "left") {
        return { marginInlineStart: open ? width : 0 };
      } else {
        return { marginInlineEnd: open ? width : 0 };
      }
    }, [anchor, open, width, isMobile]);

    return (
      <Comp ref={ref} className={cn("flex-grow overflow-hidden", className)} style={{ ...style, ...marginStyle }} {...props}>
        {children}
      </Comp>
    );
  },
);

DrawerMain.displayName = DRAWER_MAIN_NAME;

type DrawerContentProps = {
  children?: React.ReactNode;
  title: React.ReactNode;
};

const DRAWER_CONTENT_NAME = "DrawerContent";

const DrawerContent = React.forwardRef<HTMLDivElement, ScopedProps<DrawerContentProps>>(({ children, title, __scopeDrawer }, ref) => {
  const { anchor, open, width, onClose, isMobile } = useDrawerProvider(DRAWER_CONTENT_NAME, __scopeDrawer);

  return (
    <>
      {isMobile ? (
        <Modal title={title} open={open} onOpenChange={onClose} ref={ref} fullScreen>
          {children}
        </Modal>
      ) : (
        <div className={cn("hidden md:block overflow-hidden")} style={{ width }} ref={ref}>
          <div
            className={cn(
              "overflow-y-auto flex flex-col h-full top-0 z-[120] bg-background transition-all border-gray-200",
              open ? "" : anchor === "left" ? "-translate-x-full rtl:translate-x-full invisible" : "translate-x-full rtl:-translate-x-full invisible",
              anchor === "left" ? "border-r" : "border-l",
            )}
          >
            <div
              className={cn(
                "h-9 flex items-center gap-2 p-2 bg-background w-full sticky top-0 border-b border-gray-200",
                anchor === "right" ? "justify-start rtl:justify-end" : "justify-end rtl:justify-start",
              )}
            >
              <IconButton onClick={onClose} className="w-5 h-5 p-0">
                <ChevronsRightIcon className={cn("w-5 h-5", anchor === "right" ? "rtl:-scale-100" : "-scale-100 rtl:scale-100")} />
              </IconButton>
              {typeof title === "string" || typeof title === "number" ? <h2 className="text-lg font-bold text-text">{title}</h2> : title}
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
});

DrawerContent.displayName = DRAWER_CONTENT_NAME;

const Root = Drawer;
const Main = DrawerMain;
const Content = DrawerContent;

export { Drawer, DrawerMain, DrawerContent, Root, Main, Content };
export type { DrawerContentProps, DrawerMainProps, DrawerProps };
