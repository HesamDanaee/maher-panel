interface ISignupForm {
  name: string;
  mobile: number;
  password: string;
  confirmPassword: string;
}
type TSignupForm = "name" | "mobile" | "password" | "confirmPassword";

interface ILoginForm {
  mobile: number;
  password: string;
}
type TLoginForm = "mobile" | "password";

interface IRegisterFormIndividual {
  fullName: string;
  naCode: string;
  ecCode: string;
  postCode: string;
  invoice: string;
  birthdate: string;
  address: string;
}
type IRegisterFormIndividualNames =
  | "invoice"
  | "fullName"
  | "naCode"
  | "ecCode"
  | "postCode"
  | "birthdate"
  | "address";

interface IRegisterFormLegalEntities {
  companyName: string;
  companyRegistrationNumber: string;
  ecCode: string;
  postCode: string;
  invoice: string;
  companyRegistrationDate: string;
  address: string;
}

type IRegisterFormLegalEntetiesNames =
  | "companyName"
  | "companyRegistrationNumber"
  | "ecCode"
  | "postCode"
  | "invoice"
  | "companyRegistrationDate"
  | "address";

interface IServicesForm {
  productCode: string;
  productName: string;
  unitOfGoods: string;
  price: string;
}

type IServicesFormNames =
  | "productCode"
  | "productName"
  | "unitOfGoods"
  | "price";

interface IUniqueIdentifierForm {
  UniqueTaxIdentifier: string;
  publicKey: string;
  personalKey: string;
  ElecSigCertificate: string;
}
type TUniqueIdentifierNames =
  | "UniqueTaxIdentifier"
  | "publicKey"
  | "personalKey"
  | "ElecSigCertificate";

interface IRegisterForm {
  UniqueTaxIdentifier: string;
  publicKey: string;
  personalKey: string;
  ElecSigCertificate: string;
}
