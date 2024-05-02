"use client";

import Link from "next/link";
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
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/shadcn/card";
import { Button } from "@/src/components/shadcn/button";
import { Separator } from "@/src/components/shadcn/Separator";
import Flex from "@/src/components/common/Flex";
import Typography from "@/src/components/common/Typography";
import { loginAction } from "./AuthActions";
import data from "@/public/data/data.json";
import { useToast } from "@/src/components/shadcn/use-toast";
import { loginSchema, LoginSchema } from "@/src/schema/authSchema";
import { useEffect } from "react";
import { Checkbox } from "@/src/components/shadcn/checkbox";
import { Input } from "@/src/components/shadcn/input";
import { redirect } from "next/navigation";

interface LoginCardProps {
  slug: "login" | "signup" | "verify";
}

export default function LoginCard({ slug }: LoginCardProps) {
  const {
    auth: {
      login: { button, title, notif, inputs },
      signup: { button: signupBtn },
    },
  } = data;

  const { execute, result, status } = useAction(loginAction);

  const { toast } = useToast();

  const form = useForm<LoginSchema>({
    resolver: yupResolver(loginSchema),
  });

  const { control, handleSubmit } = form;

  const submitLogin = (value: LoginSchema) => execute(value);

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
      <CardHeader className="text-center">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={handleSubmit(submitLogin)}>
          <CardContent className="py-0">
            <Flex className="flex-col py-4 space-y-2">
              {inputs.map(({ name, placeholder, title, type }) => (
                <FormField
                  key={name}
                  control={control}
                  name={name as keyof LoginSchema}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel />
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
              ))}
            </Flex>
          </CardContent>
          <CardFooter>
            <Flex className={`flex-col gap-y-4 items-center`}>
              <Button
                className="w-full bg-foreground hover:bg-background text-background hover:text-foreground border-[1px] hover:border-foreground font-bold"
                variant={"default"}
                type="submit"
              >
                {button}
              </Button>

              <Separator orientation="horizontal" className="relative my-3">
                <Typography
                  variant="p"
                  className="max-md:w-2/3 text-foreground flex justify-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2"
                >
                  {notif[1]}
                </Typography>
              </Separator>
              <Link
                href={slug === "login" ? "signup" : "login"}
                className="w-full"
              >
                <Button
                  className="w-full bg-background hover:bg-foreground text-foreground hover:text-background border-[1px] border-foreground font-bold"
                  variant={"default"}
                >
                  {signupBtn}
                </Button>
              </Link>
            </Flex>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
