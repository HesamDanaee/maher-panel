import { ObjectSchema, string, number, InferType, ref } from "yup";
const passPattern =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
const namePattern = /^.{4,21}$/;

const loginSchema = new ObjectSchema({
  mobile: string()
    .min(10, "شماره موبایل باید حداقل 10 کاراکتر باشد")
    .max(11, "شماره موبایل باید حداکثر 11 کاراکتر باشد")
    .required("شماره موبایل الزامی می باشد"),
  password: string()
    .matches(
      passPattern,
      "رمزعبور باید شامل حداقل یک حرف کوچک، یک حرف بزرگ، یک عدد، یک کاراکتر ویژه، حداقل ۸ کاراکتر و فاقد فاصله باشد."
    )
    .required("رمز عبور الزامی می باشد"),
});

const signupSchema = new ObjectSchema({
  name: string()
    .matches(namePattern, "نام کاربری باید حداقل 4 و حداکثر 22 کاراکتر باشد")
    .required("نام کاربری ضروری می باشد."),
  mobile: string()
    .min(10, "شماره موبایل باید حداقل 10 کاراکتر باشد")
    .max(11, "شماره موبایل باید حداکثر 11 کاراکتر باشد")
    .required("شماره موبایل الزامی می باشد"),
  password: string()
    .matches(
      passPattern,
      "رمزعبور باید شامل حداقل یک حرف کوچک، یک حرف بزرگ، یک عدد، یک کاراکتر ویژه، حداقل ۸ کاراکتر و فاقد فاصله باشد."
    )
    .required("رمز عبور الزامی می باشد"),
  confirmPassword: string()
    .matches(
      passPattern,
      "رمزعبور باید شامل حداقل یک حرف کوچک، یک حرف بزرگ، یک عدد، یک کاراکتر ویژه، حداقل ۸ کاراکتر و فاقد فاصله باشد."
    )

    .oneOf([ref("password")], "رمز عبور مطابقت ندارد")
    .required("رمز عبور الزامی می باشد"),
});

const resetSchema = new ObjectSchema({
  mobile: string()
    .min(10, "شماره موبایل باید حداقل 10 کاراکتر باشد")
    .max(11, "شماره موبایل باید حداکثر 11 کاراکتر باشد")
    .required("شماره موبایل الزامی می باشد"),
});

const codeSchema = new ObjectSchema({
  mobile: string()
    .min(10, "شماره موبایل باید حداقل 10 کاراکتر باشد")
    .max(11, "شماره موبایل باید حداکثر 11 کاراکتر باشد")
    .required("شماره موبایل الزامی می باشد"),
  code: string().required(""),
});

const verifySchema = new ObjectSchema({
  code: string().required(""),
});

export { loginSchema, signupSchema, resetSchema, codeSchema, verifySchema };

export type LoginSchema = InferType<typeof loginSchema>;
export type SignupSchema = InferType<typeof signupSchema>;
export type ResetSchema = InferType<typeof resetSchema>;
export type CodeSchema = InferType<typeof codeSchema>;
export type VerifySchema = InferType<typeof verifySchema>;
