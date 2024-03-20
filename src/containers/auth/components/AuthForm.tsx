import Flex from "@/src/components/common/Flex";
import { Checkbox } from "@/src/components/shadcn/checkbox";
import { Input } from "@/src/components/shadcn/input";

interface AuthFormProps {
  inputs: {
    title: string;
    name: string;
    placeholder: string;
    required: string;
    type: string;
  }[];
}

export default function AuthForm({ inputs }: AuthFormProps) {
  return (
    <Flex className="flex-col gap-y-5 py-6">
      {inputs.map(({ name, placeholder, type, title, required }) =>
        type !== "checkbox" ? (
          <Input
            key={name}
            id={name}
            name={name}
            placeholder={placeholder}
            type={type}
            required={required === "1"}
            className="border-muted focus:outline-none"
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
