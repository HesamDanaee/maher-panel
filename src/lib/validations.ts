// import { object, string, number } from "yup";
import { object, string, number } from "yup";
const passPattern =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
const namePattern = /^.{4,21}$/;

const loginSchema = object({
  mobile: number().min(10).max(11).required(""),
  password: string()
    .matches(
      passPattern,
      "رمزعبور باید شامل حداقل یک حرف کوچک، یک حرف بزرگ، یک عدد، یک کاراکتر ویژه، حداقل ۸ کاراکتر و فاقد فاصله باشد."
    )
    .required("رمز عبور الزامی می باشد"),
});

const signupSchema = object().shape({
  name: string()
    .matches(namePattern, "نام کاربری باید حداقل 4 و حداکثر 22 کاراکتر باشد")
    .required("نام کاربری ضروری می باشد."),
  mobile: string()
    .min(10, "")
    .max(11, "")
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
    .required("رمز عبور الزامی می باشد"),
});

export { loginSchema, signupSchema };
