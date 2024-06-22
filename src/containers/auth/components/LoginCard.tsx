"use client";

import Link from "next/link";
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
import { Separator } from "@/src/components/shadcn/Separator";
import Flex from "@/src/components/common/Flex";
import Typography from "@/src/components/common/Typography";
import loginData from "@/public/data/auth/login.json";
import signupData from "@/public/data/auth/signup.json";
import { loginSchema, LoginSchema } from "@/src/schema/authSchema";
import { Checkbox } from "@/src/components/shadcn/checkbox";
import { Input } from "@/src/components/shadcn/input";
import { useRouter } from "next/navigation";
import fetcher from "@/src/lib/clientFetcher";
import { setCookie } from "@/src/lib/utils";
import APIS from "@/src/constants/apis";
import useSWR from "swr";

export default function LoginCard() {
  const router = useRouter();

  const { button, title, notif, inputs } = loginData;
  const { button: signupBtn } = signupData;

  const { trigger } = useSWRMutation(
    APIS.login,
    async (url: string, { arg }: { arg: FormData }) =>
      await fetcher<LoginRes, LoginRes>(url, "POST", arg)
  );

  const { trigger: triggerIsActive } = useSWRMutation(
    APIS.isActive,
    async (url: string) => await fetcher<IsActiveRes, IsActiveRes>(url, "POST")
  );

  const form = useForm<LoginSchema>({
    resolver: yupResolver(loginSchema),
  });

  const { control, handleSubmit } = form;

  const submitLogin = async (value: LoginSchema) => {
    const payload = new FormData();
    for (let [key, v] of Object.entries(value)) {
      payload.set(key, v);
    }

    const { status, access_token, expires_in } = await trigger(payload);

    if (status && access_token) {
      setCookie("token", access_token, expires_in);
      const { data, ok } = (await triggerIsActive()) ?? {};
      ok && data?.active === 0
        ? router.push("/auth/verify")
        : data?.active === 1 &&
          status &&
          router.push("/panel/dashboard/invoice");
    }
  };

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
                      <FormControl>
                        {type === "checkbox" ? (
                          <Flex className="items-center justify-between py-3">
                            <Flex
                              className="!w-auto items-center gap-x-2"
                              key={name}
                            >
                              <Checkbox />
                              <label className="text-foreground text-xs">
                                {title}
                              </label>
                            </Flex>

                            <Link href={"/auth/sendCode"}>
                              <Typography
                                variant="p"
                                className="text-xs hover:underline"
                              >
                                {notif[4]}
                              </Typography>
                            </Link>
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
            <Flex className="flex-col space-y-4">
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
                <Link href={"signup"} className="w-full">
                  <Button
                    className="w-full bg-background hover:bg-foreground text-foreground hover:text-background border-[1px] border-foreground font-bold"
                    variant={"default"}
                  >
                    {signupBtn}
                  </Button>
                </Link>
              </Flex>
            </Flex>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
