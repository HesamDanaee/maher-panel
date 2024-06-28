import { ObjectSchema, string, number, InferType } from "yup";

const nationalCodePattern = /^[0-9]{10}$/;
const letterPattern = /^[\u0600-\u06FFa-zA-Z\s]*$/;
const phonePattern =
  /^(\+98|0|98|0098)([ ]|-|[()]){0,2}9\d([ ]|-|[()]){0,2}(?:\d([ ]|-|[()]){0,2}){8}$/;

const individualSchema = new ObjectSchema({
  type: string().default("real"),
  name: string().required("فیلد نام و نام خانوادگی الزامی می باشد"),
  national_code: string()
    .matches(nationalCodePattern, "کد ملی معتبر نمی باشد")
    .required("فیلد کد ملی الزامی می باشد"),
  economic_code: string().required("فیلد کد اقتصادی الزامی می باشد"),
  postal_code: string().required("فیلد کد پستی الزامی می باشد"),
  address: string().required("فیلد آدرس الزامی می باشد"),
  branch: string().required("فیلد شعبه اجباری می باشد"),
});

const legalEntetiesSchema = new ObjectSchema({
  type: string().default("legal"),
  name: string().required("فیلد نام و نام خانوادگی الزامی می باشد"),
  shenase_meli: string()
    .matches(nationalCodePattern, "کد ملی معتبر نمی باشد")
    .required("فیلد کد ملی الزامی می باشد"),
  economic_code: string().required("فیلد کد اقتصادی الزامی می باشد"),
  postal_code: string().required("فیلد کد پستی الزامی می باشد"),
  address: string().required("فیلد آدرس الزامی می باشد"),
  branch: string().required("فیلد شعبه اجباری می باشد"),
  phone: string().required("فیلد شماره موبایل الزامی می باشد"),
});

export type IndividualSchemaType = InferType<typeof individualSchema>;

export type LegalEntetiesSchemaType = InferType<typeof legalEntetiesSchema>;

export { individualSchema, legalEntetiesSchema };
