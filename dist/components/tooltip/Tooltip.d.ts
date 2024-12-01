import { TooltipProps, TooltipProviderProps, TooltipTriggerProps } from '@radix-ui/react-tooltip';
import * as React from "react";
declare const TooltipProvider: React.FC<TooltipProviderProps>;
declare const Tooltip: React.FC<TooltipProps>;
declare const TooltipTrigger: React.ForwardRefExoticComponent<TooltipTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const TooltipContent: React.ForwardRefExoticComponent<Omit<import('@radix-ui/react-tooltip').TooltipContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
type TooltipContentProps = React.ComponentProps<typeof TooltipContent>;
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider, type TooltipProps, type TooltipContentProps, type TooltipTriggerProps, type TooltipProviderProps, };
//# sourceMappingURL=Tooltip.d.ts.map