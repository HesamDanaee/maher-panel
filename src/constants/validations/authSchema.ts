import { ObjectSchema, object, string } from "yup";

const loginSchema = new ObjectSchema({
  mobile: string().required("فیلد شماره موبایل الزامی می باشد "),
  password: string().required("فیلد رمز عبور الزامی می باشد"),
});

const signupSchema = new ObjectSchema({
  name: string().required("فیلد نام الزامی می باشد "),
  lastName: string().required("فیلد نام خانوادگی الزامی می باشد"),
  mobile: string().required("فیلد شماره موبایل الزامی می باشد "),
  password: string().required("فیلد رمز عبور الزامی می باشد"),
  password2: string().required("فیلد تکرار رمز عبور الزامی می باشد"),
});

export { loginSchema, signupSchema };
