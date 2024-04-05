"use client";

import data from "@/public/data/data.json";
import Flex from "@/src/components/common/Flex";
import Typography from "@/src/components/common/Typography";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  signupFormIndividualSchema,
  TSignupFormIndividualSchema,
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

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<TSignupFormIndividualSchema>({
    resolver: yupResolver(signupFormIndividualSchema),
  });

  const submitForm = (data: TSignupFormIndividualSchema) => {
    router.push("/uniqueIdentifier");
  };

  return (
    <Flex className="flex-col items-center space-y-14">
      <Typography variant="h3" className="font-normal">
        {title}
      </Typography>

      <Container className="!max-w-xl flex-col space-y-3">
        <form onSubmit={handleSubmit(submitForm)} className="w-full">
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

            <List
              className="space-y-3"
              list={taxpayer === "individual" ? individual : legalEnteties}
              render={({ name, type, placeholder }, x) => (
                <Controller
                  control={control}
                  name={name as IRegisterFormIndividualNames}
                  render={(field) => (
                    <Input
                      {...field}
                      placeholder={placeholder}
                      aria-invalid={
                        errors[name as IRegisterFormIndividualNames]
                          ? "true"
                          : "false"
                      }
                      autoComplete="on"
                      className={`placeholder:text-secondary text-primary ${
                        type === "checkbox"
                          ? "checkbox checkbox-primary checkbox-xs"
                          : `input ${
                              errors[name as IRegisterFormIndividualNames] &&
                              "input-error placeholder:text-red-600"
                            } w-full`
                      }  
                     
                    ${errors}
                    `}
                    />
                  )}
                />
              )}
            />

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
