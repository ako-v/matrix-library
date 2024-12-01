import { VariantProps } from 'class-variance-authority';
import * as React from "react";
declare const textFieldVariants: (props?: ({
    size?: "md" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
interface TextFieldProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof textFieldVariants> {
    suffix?: React.ReactNode;
    endButton?: React.ReactNode;
    slotProps?: {
        inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    };
}
declare const TextField: React.ForwardRefExoticComponent<TextFieldProps & React.RefAttributes<HTMLInputElement>>;
export { TextField, type TextFieldProps };
//# sourceMappingURL=TextField.d.ts.map