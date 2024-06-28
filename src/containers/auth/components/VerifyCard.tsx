"use client";

import Link from "next/link";
import useSWRMutation from "swr/mutation";
import { Form, FormField } from "@/src/components/shadcn/form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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
import staticData from "@/public/data/auth/verify.json";
import loginData from "@/public/data/auth/login.json";
import { useToast } from "@/src/components/shadcn/use-toast";
import { verifySchema, VerifySchema } from "@/src/schema/authSchema";
import { useRouter } from "next/navigation";
import fetcher from "@/src/lib/clientFetcher";
import APIS from "@/src/constants/apis";
import { useEffect, useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/src/components/shadcn/input-otp";

import { Fragment } from "react";

import Typography from "@/src/components/common/Typography";

export default function VerifyCard() {
  const [isCodeSent, setIsCodeSent] = useState(false);
  const router = useRouter();

  const { title, description, button, input, resendCode, toLogin } = staticData;

  const { trigger } = useSWRMutation(
    APIS.panel.sendSMS,
    async (url) => await fetcher<SendSMSRes, SendSMSRes>(url, "POST")
  );

  const { trigger: verfyCode } = useSWRMutation(
    APIS.panel.verify,
    async (url: string, { arg }: { arg: FormData }) =>
      await fetcher<SendSMSRes, SendSMSRes>(url, "POST", arg)
  );

  const { toast } = useToast();

  const form = useForm<VerifySchema>({
    resolver: yupResolver(verifySchema),
  });

  const { control, handleSubmit } = form;

  const submitVerify = async (value: VerifySchema) => {
    const payload = new FormData();
    payload.append("code", value.code);

    const { ok, message } = await verfyCode(payload);

    if (message) {
      toast({
        title: message,
      });

      if (ok) router.push("/auth/login");
    }
  };

  useEffect(() => {
    if (!isCodeSent) {
      trigger();
      setIsCodeSent((prev) => true);
    }
  }, [isCodeSent, trigger]);

  return (
    <Card className="xl:w-2/3 max-xl:w-3/4 max-lg:w-1/2 max-md:w-2/3 max-sm:w-full flex flex-col justify-between pt-4 border-none">
      <CardHeader className="text-center gap-y-2">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      {/* @ts-ignore */}
      <Form {...form}>
        <form onSubmit={handleSubmit(submitVerify)}>
          <CardContent className="py-0">
            <Flex className="w-full flex-col py-4">
              <FormField
                key={input.name}
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
                  className="!w-auto bg-transparent hover:bg-muted"
                  onClick={() => trigger()}
                >
                  <Typography variant="p">{resendCode}</Typography>
                </Button>

                <Flex className={`flex-col gap-y-4 items-center`}>
                  <Button
                    className="w-full bg-foreground hover:bg-background text-background hover:text-foreground border-[1px] hover:border-foreground font-bold"
                    variant={"default"}
                    type="submit"
                  >
                    {button}
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
