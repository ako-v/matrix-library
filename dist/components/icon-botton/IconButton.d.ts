import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';
declare const iconButtonVariants: (props?: ({
    variant?: "danger" | "warning" | "success" | "info" | "form" | "table" | "toolbar" | null | undefined;
    size?: "md" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof iconButtonVariants> {
    asChild?: boolean;
    loading?: boolean;
}
declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { IconButton, type IconButtonProps };
//# sourceMappingURL=IconButton.d.ts.map