import { ObjectSchema, number, string, InferType } from "yup";

const priceRegex = /^\d+(,\d{1,2})?$/;

const newGoodSchema = new ObjectSchema({
  title: string().required("انتخاب نام کالا الزامی می باشد"),
  number: number().required("انتخاب تعداد کالا الزامی می باشد"),
  unit: string().required("انتخاب واحد کالا الزامی می باشد"),
  good_id: number()
    .test("priceFormat", "invalid price number", (value) => {
      if (value) return priceRegex.test(value?.toString());
    })
    .required("انتخاب آیدی کالا الزامی می باشد"),
});

export { newGoodSchema };

export type NewGoodSchemaType = InferType<typeof newGoodSchema>;
