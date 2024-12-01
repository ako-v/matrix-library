import { VariantProps } from 'class-variance-authority';
import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
declare const switchVariants: (props?: ({
    size?: "md" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
interface SwitchProps extends SwitchPrimitives.SwitchProps, VariantProps<typeof switchVariants> {
}
declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLButtonElement>>;
export { Switch, type SwitchProps };
//# sourceMappingURL=Switch.d.ts.map