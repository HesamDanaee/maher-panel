"use client";

import signupData from "@/public/data/register/signup.json";
import Flex from "@/src/components/common/Flex";
import Typography from "@/src/components/common/Typography";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  signupFormIndividualSchema,
  signupFormLegalEntetiesSchema,
  TSignupFormIndividualSchema,
  TSignupFormLegalEntetiesSchema,
} from "@/src/constants/validations/registerFourStepSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/src/components/shadcn/form";
import List from "@/src/components/common/List";
import { Input } from "@/src/components/shadcn/input";
import Container from "@/src/components/common/Container";
import { Button } from "@/src/components/shadcn/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Taxpayer = "individual" | "legalEnteties";

interface SignupProps {
  taxpayer: Taxpayer;
}

export default function Signup({ taxpayer }: SignupProps) {
  const {
    title,
    inputs: { enTitles, individual, legalEnteties, titles },
    button,
  } = signupData;

  const router = useRouter();

  // Individual form
  const methods = useForm<TSignupFormIndividualSchema>({
    resolver: yupResolver(signupFormIndividualSchema),
  });

  const { control, handleSubmit } = methods;
  // Legalenteties form
  const methods2 = useForm<TSignupFormLegalEntetiesSchema>({
    resolver: yupResolver(signupFormLegalEntetiesSchema),
  });

  const { control: sControl, handleSubmit: ShandleSubmit } = methods2;

  const submitForm = (data: TSignupFormIndividualSchema) => {
    router.push("/uniqueIdentifier");
  };

  const submitForm2 = (data: TSignupFormLegalEntetiesSchema) => {
    router.push("/uniqueIdentifier");
  };

  return (
    <Flex className="flex-col items-center space-y-14">
      <Typography variant="h3" className="font-normal">
        {title}
      </Typography>

      <Container className="!max-w-xl flex-col space-y-3">
        {/* @ts-ignore */}
        <Form {...(taxpayer === "individual" ? methods : methods2)}>
          <form
            onSubmit={
              taxpayer === "individual"
                ? handleSubmit(submitForm)
                : ShandleSubmit(submitForm2)
            }
            className="w-full"
          >
            <Flex className="flex-col space-y-3">
              <List
                className="!flex-row items-center justify-center gap-x-4 !space-y-0"
                list={titles}
                render={(title, x) => (
                  <Link
                    href={`${enTitles[x]}`}
                    className={`flex w-1/5 ${
                      taxpayer === enTitles[x] ? "bg-foreground" : "bg-none"
                    } hover:bg-background  border-[1px] hover:border-foreground font-bold place-content-center rounded-lg cursor-pointer p-3 group transition duration-200 ease-in-out`}
                  >
                    <Typography
                      className={`${
                        taxpayer === enTitles[x]
                          ? "text-background"
                          : "text-foreground"
                      } group-hover:text-foreground text-md font-semibold`}
                      variant="p"
                    >
                      {title}
                    </Typography>
                  </Link>
                )}
              />

              {taxpayer === "individual" ? (
                <List
                  className="space-y-1"
                  list={
                    individual as {
                      placeholder: string;
                      name: keyof TSignupFormIndividualSchema;
                      required: string;
                      type: string;
                    }[]
                  }
                  render={({ name, type, placeholder }, x) => (
                    <FormField
                      key={name}
                      control={control}
                      name={name}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder={placeholder}
                              type={type}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                />
              ) : (
                <List
                  className="space-y-1"
                  list={
                    legalEnteties as {
                      placeholder: string;
                      name: keyof TSignupFormLegalEntetiesSchema;
                      required: string;
                      type: string;
                    }[]
                  }
                  render={({ name, type, placeholder }, x) => (
                    <FormField
                      key={name}
                      control={sControl}
                      name={name}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder={placeholder}
                              type={type}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                />
              )}

              <Button
                className="w-full bg-foreground hover:bg-background text-background hover:text-foreground border-[1px] hover:border-foreground font-bold"
                variant={"default"}
                type="submit"
              >
                {button}
              </Button>
            </Flex>
          </form>
        </Form>
      </Container>
    </Flex>
  );
}
