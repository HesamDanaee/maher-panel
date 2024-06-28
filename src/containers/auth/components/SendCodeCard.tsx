"use client";

import useSWRMutation from "swr/mutation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
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
import Flex from "@/src/components/common/Flex";
import resetData from "@/public/data/auth/reset.json";
import { useToast } from "@/src/components/shadcn/use-toast";
import { resetSchema, ResetSchema } from "@/src/schema/authSchema";
import { Input } from "@/src/components/shadcn/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import APIS from "@/src/constants/apis";
import fetcher from "@/src/lib/clientFetcher";

export default function SendCodeCard() {
  const router = useRouter();

  const {
    button,
    toLogin,
    title,
    inputs: { sendCode },
  } = resetData;

  const { trigger } = useSWRMutation(
    APIS.auth.reset,
    async (url: string, { arg }: { arg: FormData }) =>
      await fetcher<ResetCodeRes, ResetCodeRes>(url, "POST", arg)
  );

  const { toast } = useToast();

  const form = useForm({
    resolver: yupResolver(resetSchema),
  });

  const { handleSubmit, control, getValues } = form;

  const onSubmit = async (value: ResetSchema) => {
    const payload = new FormData();
    payload.set("mobile", value.mobile);
    const { ok, message } = await trigger(payload);

    if (message) {
      toast({
        title: message,
      });

      if (ok) router.push(`/auth/OTP?mobile=${getValues("mobile")}`);
    }
  };

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
                key={sendCode.name}
                control={control}
                name="mobile"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder={sendCode.placeholder}
                        type={sendCode.type}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Flex>
          </CardContent>

          <CardFooter>
            <Flex className="flex-col space-y-8 items-center">
              <Flex className="flex-col space-y-8 py-4 justify-center">
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
