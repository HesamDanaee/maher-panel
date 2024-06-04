"use client";

import servicesData from "@/public/data/register/services.json";
import Flex from "@/src/components/common/Flex";
import Typography from "@/src/components/common/Typography";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  TServicesSchema,
  servicesSchema,
} from "@/src/constants/validations/registerFourStepSchema";
import List from "@/src/components/common/List";
import { Input } from "@/src/components/shadcn/input";
import Container from "@/src/components/common/Container";
import { Button } from "@/src/components/shadcn/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/src/components/shadcn/select";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/shadcn/form";

interface ServicesProps {
  goods: Goods[][];
}

export default function Services({ goods }: ServicesProps) {
  const { title, inputs, button } = servicesData;

  const form = useForm<TServicesSchema>({
    resolver: yupResolver(servicesSchema),
  });

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = form;

  const submitForm = (data: TServicesSchema) => {};

  return (
    <Flex className="flex-col items-center space-y-14">
      <Typography variant="h3" className="font-normal">
        {title}
      </Typography>

      <Container className="!max-w-xl flex-col space-y-3">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submitForm)} className=" space-y-6">
            {inputs.map(({ name, placeholder, type }) => (
              <FormField
                key={name}
                control={control}
                name={name as keyof TServicesSchema}
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel value={field.value}>{placeholder}</FormLabel>
                    {name === "productName" ? (
                      <Select onValueChange={field.onChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {goods[0].map(({ ID, DescriptionOfID }) => (
                              <SelectItem key={ID} value={DescriptionOfID}>
                                {DescriptionOfID}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    ) : (
                      <FormControl>
                        <Input type={type} {...field} />
                      </FormControl>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button
              className="w-full bg-background hover:bg-foreground text-foreground hover:text-background border-[1px] border-foreground font-bold"
              variant={"default"}
            >
              {button}
            </Button>
          </form>
        </Form>
      </Container>
    </Flex>
  );
}
