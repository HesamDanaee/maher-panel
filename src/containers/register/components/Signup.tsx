"use client";

import data from "@/public/data/data.json";
import Flex from "@/src/components/common/Flex";
import Typography from "@/src/components/common/Typography";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  signupFormIndividualSchema,
  signupFormLegalEntetiesSchema,
  TSignupFormIndividualSchema,
  TSignupFormLegalEntetiesSchema,
} from "@/src/constants/validations/registerFourStepSchema";
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
    register: {
      signup: {
        title,
        inputs: { enTitles, individual, legalEnteties, titles },
        button,
      },
    },
  } = data;

  const router = useRouter();

  // Individual form
  const methods = useForm<TSignupFormIndividualSchema>({
    resolver: yupResolver(signupFormIndividualSchema),
  });

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = methods;
  // Legalenteties form
  const methods2 = useForm<TSignupFormLegalEntetiesSchema>({
    resolver: yupResolver(signupFormLegalEntetiesSchema),
  });

  const {
    control: sControl,
    formState: { errors: sErrors },
    handleSubmit: ShandleSubmit,
  } = methods2;

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
        <form
          {...(taxpayer === "individual" ? methods : methods2)}
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
                className="space-y-3"
                list={
                  individual as {
                    placeholder: string;
                    name: IRegisterFormIndividualNames;
                    required: string;
                    type: string;
                  }[]
                }
                render={({ name, type, placeholder }, x) => (
                  <Controller
                    control={control}
                    name={name}
                    render={(field) => (
                      <Input
                        {...field}
                        placeholder={
                          errors[name]
                            ? (errors[`${name}`]?.message as string)
                            : placeholder
                        }
                        aria-invalid={errors[name] ? "true" : "false"}
                        autoComplete="on"
                        className={`placeholder:text-secondary text-primary ${
                          type === "checkbox"
                            ? "checkbox checkbox-primary checkbox-xs"
                            : `input ${
                                errors[name] &&
                                "input-error placeholder:text-destructive"
                              } w-full`
                        }  
                     
                    ${errors}
                    `}
                      />
                    )}
                  />
                )}
              />
            ) : (
              <List
                className="space-y-3"
                list={
                  legalEnteties as {
                    placeholder: string;
                    name: IRegisterFormLegalEntetiesNames;
                    required: string;
                    type: string;
                  }[]
                }
                render={({ name, type, placeholder }, x) => (
                  <Controller
                    control={sControl}
                    name={name}
                    render={(field) => (
                      <Input
                        {...field}
                        placeholder={
                          sErrors[name]
                            ? (sErrors[name]?.message as string)
                            : placeholder
                        }
                        aria-invalid={sErrors[name] ? "true" : "false"}
                        autoComplete="on"
                        className={`placeholder:text-secondary text-primary ${
                          type === "checkbox"
                            ? "checkbox checkbox-primary checkbox-xs"
                            : `input ${
                                sErrors[name] &&
                                "input-error placeholder:text-destructive"
                              } w-full`
                        }  
                   
                  ${sErrors}
                  `}
                      />
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
      </Container>
    </Flex>
  );
}
