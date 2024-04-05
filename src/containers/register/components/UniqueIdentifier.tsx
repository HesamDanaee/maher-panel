"use client";

import data from "@/public/data/data.json";
import Flex from "@/src/components/common/Flex";
import Typography from "@/src/components/common/Typography";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  uniqueIdentifierSchema,
  TUniqueIdentifierSchema,
} from "@/src/constants/validations/registerFourStepSchema";
import List from "@/src/components/common/List";
import { Input } from "@/src/components/shadcn/input";
import Container from "@/src/components/common/Container";
import { Button } from "@/src/components/shadcn/button";
import Link from "next/link";

export default function UniqueIdentifier() {
  const {
    register: {
      uniqueIdentifier: { title, inputs, button },
    },
  } = data;

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<TUniqueIdentifierSchema>({
    resolver: yupResolver(uniqueIdentifierSchema),
  });

  const submitForm = (data: TUniqueIdentifierSchema) => {};

  console.log(errors);

  return (
    <Flex className="flex-col items-center space-y-14">
      <Typography variant="h3" className="font-normal">
        {title}
      </Typography>

      <Container className="!max-w-xl flex-col space-y-3">
        <form onSubmit={handleSubmit(submitForm)} className="w-full">
          <Flex className="flex-col space-y-3">
            <List
              className="space-y-3"
              list={inputs}
              render={({ name, placeholder }, x) => (
                <Controller
                  control={control}
                  name={name as TUniqueIdentifierNames}
                  render={(field) => (
                    <Input
                      {...field}
                      className="placeholder:text-secondary"
                      placeholder={placeholder}
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
