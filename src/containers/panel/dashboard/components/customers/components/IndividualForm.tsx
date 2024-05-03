"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/shadcn/dialog";
import { ReactNode, useState } from "react";
import { Button } from "@/src/components/shadcn/button";
import Typography from "@/src/components/common/Typography";
import Flex from "@/src/components/common/Flex";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/shadcn/select";
import { Input } from "@/src/components/shadcn/input";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField } from "@/src/components/shadcn/form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  individualSchema,
  IndividualSchemaType,
} from "@/src/constants/validations/newCustomerSchema";

interface NewCustomerModalProps {
  trigger: ReactNode;
  data: {
    title: string;
    description?: string;
    inputs: Inputs;
    submit: string;
  };
}
interface Inputs {
  options: string[];
  enTitles: string[];
  inputs: Individual[];
  submit: string;
}
interface Individual {
  placeholder: string;
  name: keyof IndividualSchemaType;
  required?: string;
  type: string;
}

type CustomerType = "individual" | "legalEnteties";

export default function NewCustomerModal({
  trigger,
  data: {
    title,
    description,
    submit,
    inputs: { options, inputs, enTitles },
  },
}: NewCustomerModalProps) {
  const [selectedOption, setSelectedOption] =
    useState<CustomerType>("individual");

  const form = useForm({
    resolver: yupResolver(individualSchema),
  });

  const { control, handleSubmit } = form;

  const onSubmit = (value: IndividualSchemaType) => {
    console.log(value);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="pt-14 max-sm:w-[95%]">
        <DialogHeader>
          <DialogTitle>
            <Typography
              variant="h4"
              className="text-start text-foreground font-light"
            >
              {title}
            </Typography>
          </DialogTitle>
          {description && (
            <DialogDescription>
              <Typography
                variant="p"
                className="text-start text-ghost font-thin"
              >
                {description}
              </Typography>
            </DialogDescription>
          )}
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex className="flex-col gap-y-4">
              <Select
                defaultValue={
                  selectedOption === "individual" ? options[0] : options[1]
                }
                onValueChange={(value) =>
                  setSelectedOption(
                    enTitles[
                      options.findIndex((val) => val === value)
                    ] as CustomerType
                  )
                }
              >
                <SelectTrigger className="w-full flex-row-reverse">
                  <SelectValue placeholder={selectedOption} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {options.map((item, x) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Flex className="flex-col gap-y-2">
                {inputs.map(({ name, placeholder }) => (
                  <FormField
                    key={name}
                    name={name}
                    control={control}
                    render={({ field }) => (
                      <FormControl>
                        <Input placeholder={placeholder} {...field} />
                      </FormControl>
                    )}
                  />
                ))}
              </Flex>
            </Flex>
          </form>
        </Form>
        <DialogFooter>
          <Button
            className="w-full bg-accent text-foreground hover:bg-background hover:text-foreground border-[1px] border-ghost"
            variant={"default"}
          >
            {submit}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
