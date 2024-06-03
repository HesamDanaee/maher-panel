"use client";
import Flex from "@/src/components/common/Flex";
import Typography from "@/src/components/common/Typography";
import React, { useState } from "react";

import { useForm } from "react-hook-form";

import goodsData from "@/public/data/panel/goods.json";
import {
  Form,
  FormControl,
  FormLabel,
  FormField,
  FormItem,
  FormMessage,
} from "@/src/components/shadcn/form";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/shadcn/Table";

import { Input } from "@/src/components/shadcn/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { newGoodSchema, NewGoodSchemaType } from "@/src/schema/goodsSchema";
import { Button } from "@/src/components/shadcn/button";
import { Separator } from "@/src/components/shadcn/Separator";
import Grid, { GridCol } from "@/src/components/common/Grid";
import Box from "@/src/components/common/Box";

export default function NewGoodForm() {
  const [goods, setGoods] = useState<NewGoodSchemaType[]>([]);

  const {
    newGood: {
      newGoodForm: {
        title,
        inputs,
        addButton,
        table: { thData, caption, emptyList },
      },
    },
  } = goodsData;

  const form = useForm<NewGoodSchemaType>({
    resolver: yupResolver(newGoodSchema),
  });

  const { handleSubmit, control } = form;

  const onSubmit = (value: NewGoodSchemaType) =>
    setGoods((prev) => [...prev, value]);

  return (
    <Flex className="flex-col items-center space-y-4">
      <Typography variant="h4" className="text-foreground font-semibold">
        {title}
      </Typography>

      <Separator orientation="horizontal" />

      {/* Form to add new good */}
      <Flex className="!h-auto">
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <Flex className="w-full flex-col space-y-4 py-4">
              <Grid className="grid-cols-2 max-md:grid-cols-1">
                {inputs.map(({ name, label, type, options }, z) => (
                  <GridCol key={name} className="col-span-auto !row-auto">
                    <FormField
                      control={control}
                      name={name as keyof NewGoodSchemaType}
                      render={({ field }) => (
                        <FormItem className="relative">
                          <FormLabel value={field.value}>{label}</FormLabel>
                          <FormControl>
                            <Input type={type} {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </GridCol>
                ))}
              </Grid>
              <Button type="submit">{addButton}</Button>
            </Flex>
          </form>
        </Form>
      </Flex>

      <Separator orientation="horizontal" />

      {/* Table to display added goods */}

      <Box className="w-full max-h-[300px] overflow-y-auto">
        {goods.length > 0 ? (
          <Table className="overflow-hidden">
            <TableCaption>{caption}</TableCaption>
            <TableHeader>
              <TableRow>
                {thData.map((th, x) => (
                  <TableHead key={x} className="text-center">
                    {th}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {goods.map((good, x) => (
                <TableRow key={x} className="text-center">
                  {Object.values(good).map((value, z) => (
                    <TableCell key={z}>{value}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <Flex className="w-full p-6 place-content-center">
            <Typography variant="h4" className="font-semibold">
              {emptyList}
            </Typography>
          </Flex>
        )}
      </Box>
    </Flex>
  );
}
