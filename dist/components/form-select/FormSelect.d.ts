import { ControllerProps, FieldPath, FieldValues } from 'react-hook-form';
import { SelectContentProps, SelectItemProps, SelectProps, SelectTriggerProps, SelectValueProps } from '@radix-ui/react-select';
type FormSelectProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = Omit<ControllerProps<TFieldValues, TName>, "render"> & {
    label: string;
    options: {
        value: string | number;
        label: string | number;
    }[];
    loading?: boolean;
    loadingText?: string;
    emptyOptionsText?: string;
    placeholder?: string;
    slotProps?: {
        formItemProps?: React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>;
        formLabelProps?: React.HTMLAttributes<HTMLLabelElement> & React.RefAttributes<HTMLLabelElement>;
        formMessageProps?: React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>;
        selectProps?: SelectProps;
        selectTriggerProps?: SelectTriggerProps;
        selectValueProps?: Omit<SelectValueProps, "placeholder">;
        selectContentProps?: SelectContentProps;
        selectItemProps?: SelectItemProps;
    };
};
declare const FormSelect: <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>(props: FormSelectProps<TFieldValues, TName>) => import("react/jsx-runtime").JSX.Element;
export { FormSelect, type FormSelectProps };
//# sourceMappingURL=FormSelect.d.ts.map