import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';
declare const chipVariants: (props?: ({
    variant?: "primary" | "neutral" | null | undefined;
    size?: "md" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
interface ChipProps extends React.ButtonHTMLAttributes<HTMLSpanElement>, VariantProps<typeof chipVariants> {
    asChild?: boolean;
    onClose?: () => void;
}
declare const Chip: React.ForwardRefExoticComponent<ChipProps & React.RefAttributes<HTMLSpanElement>>;
export { Chip, type ChipProps };
//# sourceMappingURL=Chip.d.ts.map