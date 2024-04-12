"use client";

import Link from "next/link";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/shadcn/card";
import { Button } from "@/src/components/shadcn/button";
import { Separator } from "@/src/components/shadcn/Separator";
import Flex from "@/src/components/common/Flex";
import Typography from "@/src/components/common/Typography";
import AuthForm from "./AuthForm";
import { login, signup } from "./AuthActions";
import data from "@/public/data/data.json";
import { useToast } from "@/src/components/shadcn/use-toast";
import { signupSchema, loginSchema } from "@/src/lib/validations";
import { yupResolver } from "@hookform/resolvers/yup";

interface AuthCardProps {
  slug: "login" | "signup" | "verify";
}

export default function AuthCard({ slug }: AuthCardProps) {
  const [loginState, dispatchLogin] = useFormState(login, {
    message: "",
    error: null,
  });

  const [signUpstate, dispatchSignup] = useFormState(signup, {
    message: "",
    success: false,
  });

  const loginForm = useForm({
    resolver: yupResolver(loginSchema),
  });

  const {
    control: loginControl,
    handleSubmit,
    register: loginRegister,
    formState: { errors: loginErrors },
  } = loginForm;

  const signupForm = useForm({
    resolver: yupResolver(signupSchema),
  });

  const {
    control: signupControl,
    handleSubmit: sHandleSubmit,
    register: signupRegister,
    formState: { errors: signupErrors },
  } = signupForm;

  const { toast } = useToast();

  const {
    auth: {
      login: { button, title, notif, inputs },
      signup: {
        title: sTitle,
        button: sButton,
        notif: sNotif,
        inputs: sInputs,
      },
      verify: {
        title: vTitle,
        subtitle: vSubtitle,
        inputs: vInputs,
        button: vButton,
      },
    },
  } = data;

  return (
    <Card className="xl:w-2/3 max-xl:w-3/4 max-lg:w-1/2 max-md:w-2/3 max-sm:w-full flex flex-col justify-between pt-4 border-none">
      <CardHeader className="text-center">
        <CardTitle>
          {slug === "login" ? title : slug === "signup" ? sTitle : vTitle}
        </CardTitle>
        <CardDescription>{slug === "verify" && vSubtitle}</CardDescription>
      </CardHeader>
      <form
        action={slug === "login" ? dispatchLogin : dispatchSignup}
        {...(slug === "login" ? loginForm : signupForm)}
      >
        <CardContent className="py-0">
          {slug === "login" && (
            <AuthForm
              register={loginRegister}
              errors={loginErrors}
              inputs={
                inputs as {
                  title: string;
                  placeholder: string;
                  name: TLoginForm;
                  required: string;
                  type: string;
                }[]
              }
            />
          )}
          {slug === "signup" && (
            <AuthForm
              register={signupRegister}
              errors={signupErrors}
              inputs={
                sInputs as {
                  title: string;
                  placeholder: string;
                  name: TSignupForm;
                  required: string;
                  type: string;
                }[]
              }
            />
          )}
          <Flex className="py-2">
            <Typography variant="p" className="font-extralight leading-5">
              {signUpstate.message}
            </Typography>
          </Flex>
        </CardContent>
        <CardFooter>
          <Flex className={`flex-col gap-y-4 items-center`}>
            <Button
              className="w-full bg-foreground hover:bg-background text-background hover:text-foreground border-[1px] hover:border-foreground font-bold"
              variant={"default"}
              type="submit"
            >
              {slug === "login"
                ? button
                : slug === "signup"
                ? sButton
                : vButton}
            </Button>
            {slug !== "verify" && (
              <>
                {" "}
                <Separator orientation="horizontal" className="relative my-3">
                  <Typography
                    variant="p"
                    className="max-md:w-2/3 text-foreground flex justify-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2"
                  >
                    {slug === "signup" ? sNotif[1] : notif[1]}
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
                    {slug === "signup" ? button : sButton}
                  </Button>
                </Link>
              </>
            )}
          </Flex>
        </CardFooter>
      </form>
    </Card>
  );
}
