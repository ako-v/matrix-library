import { SlotProps } from '@radix-ui/react-slot';
import { Control, ControllerProps, FieldPath, FieldValues } from 'react-hook-form';
import { TextFieldProps } from '../text-field/TextField';
type FormInputProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> = Omit<ControllerProps<TFieldValues, TName>, "render"> & {
    label: string;
    control: Control<TFieldValues>;
    slotProps?: {
        formItemProps?: React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>;
        formLabelProps?: React.HTMLAttributes<HTMLLabelElement> & React.RefAttributes<HTMLLabelElement>;
        formMessageProps?: React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>;
        formControlProps?: Omit<SlotProps & React.RefAttributes<HTMLElement>, "ref"> & React.RefAttributes<HTMLElement>;
        textFieldProps?: TextFieldProps & React.RefAttributes<HTMLInputElement>;
    };
};
declare const FormInput: <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>(props: FormInputProps<TFieldValues, TName>) => import("react/jsx-runtime").JSX.Element;
export { FormInput, type FormInputProps };
//# sourceMappingURL=FormInput.d.ts.map