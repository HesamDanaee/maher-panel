"use client";

import { Button } from "@/src/components/shadcn/button";
import { DialogClose } from "@/src/components/shadcn/dialog";
import Flex from "@/src/components/common/Flex";
import { Input } from "@/src/components/shadcn/input";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField } from "@/src/components/shadcn/form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  legalEntetiesSchema,
  LegalEntetiesSchemaType,
} from "@/src/constants/validations/newCustomerSchema";
import useSWRMutation from "swr/mutation";
import APIS from "@/src/constants/apis";
import fetcher from "@/src/lib/clientFetcher";
import { useToast } from "@/src/components/shadcn/use-toast";
import inputsData from "@/public/data/register/signup.json";

export default function LegalEntetiesForm() {
  const {
    inputs: { legalEnteties },
    submit,
  } = inputsData;
  const form = useForm({
    resolver: yupResolver(legalEntetiesSchema),
  });

  const { toast } = useToast();
  const { trigger: addCustomer } = useSWRMutation(
    APIS.panel.customer.add,
    async (url: string, { arg }: { arg: FormData }) =>
      await fetcher<AddLegalRes, AddLegalRes>(url, "POST", arg)
  );

  const { control, handleSubmit } = form;

  const onSubmit = async (value: LegalEntetiesSchemaType) => {
    const payload = new FormData();
    for (let [key, v] of Object.entries(value)) {
      payload.set(key, v);
    }

    const { data, message } = await addCustomer(payload);

    toast({
      title: message,
    });
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

          <DialogClose>
            <Button
              className="w-full bg-accent text-foreground hover:bg-background hover:text-foreground border-[1px] border-ghost"
              variant={"default"}
              type="submit"
            >
              {submit}
            </Button>
          </DialogClose>
        </Flex>
      </form>
    </Form>
  );
}
