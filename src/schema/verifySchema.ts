import { ObjectSchema, string, InferType } from "yup";

const verifySchema = new ObjectSchema({
  mobile: string()
    .min(10, "شماره موبایل باید حداقل 10 کاراکتر باشد")
    .max(11, "شماره موبایل باید حداکثر 11 کاراکتر باشد")
    .required("شماره موبایل الزامی می باشد"),
});

export default verifySchema;

export type VerifySchema = InferType<typeof verifySchema>;
