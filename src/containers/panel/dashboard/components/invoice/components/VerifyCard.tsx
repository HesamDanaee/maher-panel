"use client";

import { useAction } from "next-safe-action/hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/shadcn/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/shadcn/card";
import { Button } from "@/src/components/shadcn/button";
import Flex from "@/src/components/common/Flex";
import { verifyAction } from "./verifyAction";
import verifyData from "@/public/data/auth/verify.json";
import { useToast } from "@/src/components/shadcn/use-toast";

import { useEffect } from "react";
import { Checkbox } from "@/src/components/shadcn/checkbox";
import { Input } from "@/src/components/shadcn/input";
import { redirect } from "next/navigation";
import verifySchema, { VerifySchema } from "@/src/schema/verifySchema";

export default function VerifyCard() {
  const {
    button,
    resendCode,
    title,
    description,
    inputs: { name, placeholder, type },
  } = verifyData;

  const { execute, result, status } = useAction(verifyAction);

  const { toast } = useToast();

  const form = useForm<VerifySchema>({
    resolver: yupResolver(verifySchema),
  });

  const { control, handleSubmit } = form;

  const submitLogin = (value: VerifySchema) => execute(value);

  useEffect(() => {
    const { status, message } = result.data ?? {
      message: "",
    };

    if (message) {
      toast({
        title: message,
      });

      if (status) redirect("/panel/dashboard/invoice");
    }
  }, [result, toast]);

  return (
    <Card className="xl:w-2/3 max-xl:w-3/4 max-lg:w-1/2 max-md:w-2/3 max-sm:w-full flex flex-col justify-between pt-4 border-none">
      <CardHeader className="text-center space-y-7">
        <CardTitle>{title}</CardTitle>

        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={handleSubmit(submitLogin)}>
          <CardContent className="py-0">
            <Flex className="flex-col py-4 space-y-2">
              <FormField
                key={name}
                control={control}
                name={name as keyof VerifySchema}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      {type === "checkbox" ? (
                        <Flex className="items-center gap-x-4" key={name}>
                          <Checkbox />
                          <label className="text-foreground text-xs">
                            {title}
                          </label>
                        </Flex>
                      ) : (
                        <Input
                          placeholder={placeholder}
                          type={type}
                          {...field}
                        />
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Flex>
          </CardContent>
          <CardFooter>
            <Flex className={`flex-col gap-y-4 items-center`}>
              <Button
                className="w-full bg-background hover:bg-foreground text-foreground hover:text-background border-[1px] hover:border-background font-bold"
                variant={"default"}
                type="submit"
              >
                {resendCode}
              </Button>
              <Button
                className="w-full bg-foreground hover:bg-background text-background hover:text-foreground border-[1px] hover:border-foreground font-bold"
                variant={"default"}
                type="submit"
              >
                {button}
              </Button>
            </Flex>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
