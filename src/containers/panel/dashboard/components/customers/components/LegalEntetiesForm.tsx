"use client";

import { ReactNode } from "react";
import { Button } from "@/src/components/shadcn/button";

import Flex from "@/src/components/common/Flex";

import { Input } from "@/src/components/shadcn/input";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField } from "@/src/components/shadcn/form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  legalEntetiesSchema,
  LegalEntetiesSchemaType,
} from "@/src/constants/validations/newCustomerSchema";
import inputsData from "@/public/data/register/signup.json";

interface Inputs {
  options: string[];
  enTitles: string[];
  inputs: LegalEnteties[];
  submit: string;
}

interface LegalEnteties {
  placeholder: string;
  name: keyof LegalEntetiesSchemaType;
  required?: string;
  type: string;
}

export default function LegalEntetiesForm() {
  const {
    inputs: { legalEnteties },
    submit,
  } = inputsData;
  const form = useForm({
    resolver: yupResolver(legalEntetiesSchema),
  });

  const { control, handleSubmit } = form;

  const onSubmit = (value: LegalEntetiesSchemaType) => {
    console.log(value);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex className="flex-col gap-y-4">
          <Flex className="flex-col gap-y-2">
            {legalEnteties.map(({ name, placeholder }) => (
              <FormField
                key={name}
                name={name as keyof LegalEntetiesSchemaType}
                control={control}
                render={({ field }) => (
                  <FormControl>
                    <Input placeholder={placeholder} {...field} />
                  </FormControl>
                )}
              />
            ))}
          </Flex>
          <Button
            className="w-full bg-accent text-foreground hover:bg-background hover:text-foreground border-[1px] border-ghost"
            variant={"default"}
          >
            {submit}
          </Button>
        </Flex>
      </form>
    </Form>
  );
}
