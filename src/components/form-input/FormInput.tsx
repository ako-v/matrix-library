import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../form/Form";
import { SlotProps } from "@radix-ui/react-slot";
import { Control, ControllerProps, FieldPath, FieldValues } from "react-hook-form";
import { TextField, TextFieldProps } from "../text-field/TextField";

export type FormInputProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> = Omit<
  ControllerProps<TFieldValues, TName>,
  "render"
> & {
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

const FormInput = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>(props: FormInputProps<TFieldValues, TName>) => {
  const { name, control, defaultValue, disabled, rules, shouldUnregister, label, slotProps } = props;

  return (
    <FormField
      control={control}
      name={name}
      defaultValue={defaultValue}
      disabled={disabled}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({ field }) => {
        return (
          <FormItem {...(slotProps?.formItemProps ?? {})}>
            <FormLabel {...(slotProps?.formLabelProps ?? {})}>{label}</FormLabel>
            <FormControl {...(slotProps?.formControlProps ?? {})}>
              <TextField
                {...(slotProps?.textFieldProps ?? {})}
                slotProps={{ inputProps: { ...slotProps?.textFieldProps?.slotProps?.inputProps, ...field } }}
              />
            </FormControl>
            <FormMessage {...(slotProps?.formMessageProps ?? {})} />
          </FormItem>
        );
      }}
    />
  );
};
export default FormInput;