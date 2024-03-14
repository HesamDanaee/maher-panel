import { ObjectSchema, object, string, number } from "yup";

const postalCodeRegex = /\b(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}\b/;
const naCodeRegex = /^\d{10}$/;
const taxRegex = /^[A-Za-z0-9]+$/;

// - - - - Signup form Schema - - - - //

const signupFormIndividualSchema = new ObjectSchema({
  fullName: string().required("فیلد نام و نام خانوادگی الزامی می باشد"),
  naCode: string()
    .matches(naCodeRegex, "کد ملی وارد شده صحیح نمی باشد")
    .required("فیلد کد ملی الزامی می باشد"),
  ecCode: string().required("فیلد کد اقتصادی الزامی می باشد"),
  postCode: string()
    .matches(postalCodeRegex, "کد پستی وارد شده صحیح نمی باشد")
    .required("فیلد کد پستی الزامی می باشد"),
  invoice: string().required("فیلد عدد شروع فاکتور الزامی می باشد"),
  birthdate: string().required("فیلد تاریخ تولد الزامی می باشد"),
  address: string().required("فیلد آدرس الزامی می باشد"),
});

const signupFormLegalEntetiesSchema = new ObjectSchema({
  companyName: string().required("فیلد نام و نام شرکت الزامی می باشد"),
  companyRegistrationNumber: string()
    .matches(naCodeRegex, "کد ملی وارد شده صحیح نمی باشد")
    .required("فیلد شماره ثبت شرکت الزامی می باشد"),
  ecCode: string().required("فیلد کد اقتصادی الزامی می باشد"),
  postCode: string()
    .matches(postalCodeRegex, "کد پستی وارد شده صحیح نمی باشد")
    .required("فیلد کد پستی الزامی می باشد"),
  invoice: string().required("فیلد عدد شروع فاکتور الزامی می باشد"),
  companyRegistrationDate: string().required(
    "فیلد تاریخ ثبت شرکت الزامی می باشد"
  ),
  address: string().required("فیلد آدرس الزامی می باشد"),
});

// - - - - uniqueIdentifier form Schema - - - - //

const uniqueIdentifierSchema = new ObjectSchema({
  UniqueTaxIdentifier: string()
    .matches(taxRegex, "شناسه یکتای وارد شده صحیح نمی باشد")
    .required("شناسه یکتای مالیاتی الزامی می باشد"),
  publicKey: string().required("فیلد کلید عمومی الزامی می باشد"),
  personalKey: string().required("فیلد کلید خصوصی الزامی می باشد"),
  ElecSigCertificate: string().required(
    "فیلد گواهی امضا الکترونیک الزامی می باشد"
  ),
});

// - - - - services form Schema - - - - //

const servicesSchema = new ObjectSchema({
  productCode: string()
    .matches(taxRegex, "شناسه یکتای وارد شده صحیح نمی باشد")
    .required("شناسه یکتای مالیاتی الزامی می باشد"),
  productName: string().required("فیلد کلید عمومی الزامی می باشد"),
  unitOfGoods: string().required("فیلد کلید خصوصی الزامی می باشد"),
  price: string().required("فیلد گواهی امضا الکترونیک الزامی می باشد"),
});

export {
  signupFormIndividualSchema,
  signupFormLegalEntetiesSchema,
  uniqueIdentifierSchema,
  servicesSchema,
};
