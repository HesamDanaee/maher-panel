import { ObjectSchema, number, string, InferType } from "yup";

const priceRegex = /^\d+(,\d{1,2})?$/;

const newGoodSchema = new ObjectSchema({
  type: string().required("انتخاب نوع کالا الزامی می باشد"),
  name: string().required("انتخاب نام کالا الزامی می باشد"),
  unit: string().required("انتخاب واحد کالا الزامی می باشد"),
  price: number()
    .test("priceFormat", "invalid price number", (value) => {
      if (value) return priceRegex.test(value?.toString());
    })
    .required("انتخاب قیمت کالا الزامی می باشد"),
});

export { newGoodSchema };

export type NewGoodSchemaType = InferType<typeof newGoodSchema>;
