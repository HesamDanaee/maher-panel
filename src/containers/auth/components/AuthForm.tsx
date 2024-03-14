import Flex from "@/src/components/common/Flex";
import { Checkbox } from "@/src/components/shadcn/checkbox";
import { Input } from "@/src/components/shadcn/input";

interface AuthFormProps {
  action: (formData: FormData) => void;
  inputs: {
    title: string;
    name: string;
    placeholder: string;
    required: string;
    type: string;
  }[];
}

export default function AuthForm({ action, inputs }: AuthFormProps) {
  return (
    <div className="">
      <form action={action}>
        <Flex className="flex-col gap-y-5 py-6">
          {inputs.map(({ name, placeholder, type, title, required }) =>
            type !== "checkbox" ? (
              <Input
                key={name}
                placeholder={placeholder}
                type={type}
                required={required === "1"}
                className="border-muted"
              />
            ) : (
              <Flex className="items-center gap-x-4" key={name}>
                <Checkbox />
                <label className="text-foreground text-xs">{title}</label>
              </Flex>
            )
          )}
        </Flex>
      </form>
    </div>
  );
}
