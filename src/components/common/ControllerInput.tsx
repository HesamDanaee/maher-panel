import { Controller, Control, FieldValues, FieldErrors } from "react-hook-form";
import { Input } from "../shadcn/input";

interface ControllerInputProps<X> {
  control: Control<
    {
      [key: string]: any;
    },
    any
  >;
  name: string;
  placeholder: string;
  errors: FieldErrors;
  type: X;
}

export default function ControllerInput<X>({
  control,
  name,
  placeholder,
  errors,
  type,
}: ControllerInputProps<X>) {
  return (
    <Controller
      control={control}
      name={name}
      render={(field) => (
        <Input
          {...field}
          placeholder={placeholder}
          aria-invalid={errors[name] ? "true" : "false"}
          autoComplete="on"
          className={`placeholder:text-secondary text-primary ${
            type === "checkbox"
              ? "checkbox checkbox-primary checkbox-xs"
              : `input ${
                  errors[name] && "input-error placeholder:text-red-600"
                } w-full`
          }  
         
        ${errors}
        `}
        />
      )}
    />
  );
}
