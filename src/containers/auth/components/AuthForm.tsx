import Flex from "@/src/components/common/Flex";
import { Checkbox } from "@/src/components/shadcn/checkbox";
import { Input } from "@/src/components/shadcn/input";
import {
  Controller,
  Control,
  FieldValues,
  Path,
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";

interface AuthFormProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  inputs: {
    title: string;
    name: Path<T>;
    placeholder: string;
    required: string;
    type: string;
  }[];
}

export default function AuthForm<T extends FieldValues>({
  errors,
  register,
  inputs,
}: AuthFormProps<T>) {
  console.log(errors);
  return (
    <Flex className="flex-col gap-y-5 py-6">
      {inputs.map(({ name, placeholder, type, title, required }) =>
        type !== "checkbox" ? (
          <Input
            key={name}
            id={name}
            type={type}
            {...register(name)}
            placeholder={
              errors[name]
                ? (errors[`${name}`]?.message as string)
                : placeholder
            }
            aria-invalid={errors[name] ? "true" : "false"}
            autoComplete="on"
            className={`border-muted focus:outline-none placeholder:text-secondary text-primary ${
              type === "checkbox"
                ? "checkbox checkbox-primary checkbox-xs"
                : `input ${
                    errors[name] && "input-error placeholder:text-destructive"
                  } w-full`
            }  
       
      ${errors}
      `}
          />
        ) : (
          <Flex className="items-center gap-x-4" key={name}>
            <Checkbox />
            <label className="text-foreground text-xs">{title}</label>
          </Flex>
        )
      )}
    </Flex>
  );
}

{
  /* <Controller
name={name}
control={control}
key={name}
render={({ field, formState: { errors } }) => (
  <Input
    {...field}
    id={name}
    name={name}
    type={type}
    placeholder={
      errors[name]
        ? (errors[`${name}`]?.message as string)
        : placeholder
    }
    aria-invalid={errors[name] ? "true" : "false"}
    autoComplete="on"
    className={`border-muted focus:outline-none placeholder:text-secondary text-primary ${
      type === "checkbox"
        ? "checkbox checkbox-primary checkbox-xs"
        : `input ${
            errors[name] &&
            "input-error placeholder:text-destructive"
          } w-full`
    }  
 
${errors}
`}
  />
)}
/> */
}
