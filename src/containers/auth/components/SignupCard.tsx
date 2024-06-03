"use client";

import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/shadcn/form";
import { useAction } from "next-safe-action/hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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
import { signupAction } from "./AuthActions";
import signupData from "@/public/data/auth/signup.json";
import loginData from "@/public/data/auth/login.json";
import { useToast } from "@/src/components/shadcn/use-toast";
import { signupSchema, SignupSchema } from "@/src/schema/authSchema";
import { Input } from "@/src/components/shadcn/input";
import { Checkbox } from "@/src/components/shadcn/checkbox";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function SignupCard() {
  const { title, button, notif, inputs } = signupData;
  const { button: loginBtn } = loginData;
  const { execute, result, status } = useAction(signupAction);
  const { toast } = useToast();

  const form = useForm<SignupSchema>({
    resolver: yupResolver(signupSchema),
  });

  const { control, handleSubmit } = form;

  const submitSignup = (value: SignupSchema) => execute(value);

  useEffect(() => {
    const { message, status } = result.data ?? {
      message: "",
    };

    if (message) {
      toast({
        title: message,
      });

      if (status) redirect("/auth/login");
    }
  }, [result, toast]);

  return (
    <Card className="xl:w-2/3 max-xl:w-3/4 max-lg:w-1/2 max-md:w-2/3 max-sm:w-full flex flex-col justify-between pt-4 border-none">
      <CardHeader className="text-center">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={handleSubmit(submitSignup)}>
          <CardContent className="py-0">
            <Flex className="flex-col py-4 space-y-2">
              {inputs.map(({ name, placeholder, title, type }) => (
                <FormField
                  key={name}
                  control={control}
                  name={name as keyof SignupSchema}
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
              <Link href={"login"} className="w-full">
                <Button
                  className="w-full bg-background hover:bg-foreground text-foreground hover:text-background border-[1px] border-foreground font-bold"
                  variant={"default"}
                >
                  {loginBtn}
                </Button>
              </Link>
            </Flex>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
