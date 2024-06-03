"use client";

import { useSearchParams } from "next/navigation";
import { useAction } from "next-safe-action/hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/src/components/shadcn/input-otp";
import { Form, FormField } from "@/src/components/shadcn/form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/shadcn/card";
import { Button } from "@/src/components/shadcn/button";
import Flex from "@/src/components/common/Flex";
import { OTPAction, sendCodeAction } from "./AuthActions";
import resetData from "@/public/data/auth/reset.json";

import { useToast } from "@/src/components/shadcn/use-toast";
import { codeSchema, CodeSchema } from "@/src/schema/authSchema";

import { Fragment, useEffect } from "react";
import Link from "next/link";
import Typography from "@/src/components/common/Typography";
import { redirect } from "next/navigation";

export default function OTPCard() {
  const {
    confirmBtn,
    resendCode,
    toLogin,
    title,
    inputs: { validateCode },
  } = resetData;

  const mobile = useSearchParams().get("mobile");
  const { execute, result } = useAction(OTPAction);
  const { execute: resend, result: resendResult } = useAction(sendCodeAction);
  const { toast } = useToast();

  const form = useForm<CodeSchema>({
    resolver: yupResolver(codeSchema),
    defaultValues: {
      code: "",
      mobile: mobile ?? "",
    },
  });

  const { handleSubmit, control } = form;

  const onSubmit = (value: CodeSchema) => execute(value);

  useEffect(() => {
    const { status, message } = result.data ?? {
      message: "",
    };

    if (message) {
      toast({
        title: message,
      });

      if (status) redirect("/auth/login");
    }
  }, [result, toast]);

  useEffect(() => {
    const { status, message } = resendResult.data ?? {
      message: "",
    };

    if (message) {
      toast({
        title: message,
      });
    }
  }, [resendResult, toast]);

  return (
    <Card className="xl:w-2/3 max-xl:w-3/4 max-lg:w-1/2 max-md:w-2/3 max-sm:w-full flex flex-col justify-between pt-4 border-none">
      <CardHeader className="text-center">
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      {/* @ts-ignore */}
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="py-0">
            <Flex className="w-full flex-col py-4">
              <FormField
                key={validateCode.name}
                control={control}
                name="code"
                render={({ field }) => (
                  <InputOTP
                    {...field}
                    maxLength={5}
                    render={({ slots }) => (
                      <InputOTPGroup className="gap-2 mx-auto" dir="ltr">
                        {slots.map((slot, index) => (
                          <Fragment key={index}>
                            <InputOTPSlot
                              className="!rounded-xs border border-foreground"
                              {...slot}
                            />
                            {index !== slots.length - 1 && (
                              <InputOTPSeparator />
                            )}
                          </Fragment>
                        ))}
                      </InputOTPGroup>
                    )}
                  />
                )}
              />
            </Flex>
          </CardContent>

          <CardFooter>
            <Flex className="flex-col space-y-8 items-center">
              <Flex className="flex-col space-y-8 py-4 justify-center">
                <Button
                  className="w-auto bg-transparent hover:bg-muted"
                  onClick={() => {
                    resend({
                      mobile: mobile ?? "",
                    });
                  }}
                >
                  <Typography variant="p">{resendCode}</Typography>
                </Button>

                <Flex className={`flex-col gap-y-4 items-center`}>
                  <Button
                    className="w-full bg-foreground hover:bg-background text-background hover:text-foreground border-[1px] hover:border-foreground font-bold"
                    variant={"default"}
                    type="submit"
                  >
                    {confirmBtn}
                  </Button>

                  <Link href={"login"} className="w-full">
                    <Button
                      className="w-full bg-background hover:bg-foreground text-foreground hover:text-background border-[1px] border-foreground font-bold"
                      variant={"default"}
                    >
                      {toLogin}
                    </Button>
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
