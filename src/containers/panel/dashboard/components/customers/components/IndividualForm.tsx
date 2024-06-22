"use client";

import { Button } from "@/src/components/shadcn/button";
import Flex from "@/src/components/common/Flex";

import { Input } from "@/src/components/shadcn/input";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/shadcn/form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  individualSchema,
  IndividualSchemaType,
} from "@/src/constants/validations/newCustomerSchema";

import inputsData from "@/public/data/register/signup.json";
import useSWRMutation from "swr/mutation";
import APIS from "@/src/constants/apis";
import fetcher from "@/src/lib/clientFetcher";
import { useToast } from "@/src/components/shadcn/use-toast";

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

export default function IndividualForm() {
  const {
    inputs: { individual },
    submit,
  } = inputsData;

  const { toast } = useToast();
  const { trigger: addCustomer } = useSWRMutation(
    APIS.addCustomer,
    async (url: string, { arg }: { arg: FormData }) =>
      await fetcher<AddCustomersRes, AddCustomersRes>(url, "POST", arg)
  );

  const form = useForm({
    resolver: yupResolver(individualSchema),
  });

  const { control, handleSubmit } = form;

  const onSubmit = async (value: IndividualSchemaType) => {
    const payload = new FormData();
    for (let [key, v] of Object.entries(value)) {
      payload.set(key, v);
    }
    const { message } = (await addCustomer(payload)) ?? {};

    toast({
      title: message,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex className="flex-col gap-y-4">
          <Flex className="flex-col gap-y-2">
            {individual.map(({ name, placeholder }) => (
              <FormField
                key={name}
                name={name as keyof IndividualSchemaType}
                control={control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder={placeholder} {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
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
