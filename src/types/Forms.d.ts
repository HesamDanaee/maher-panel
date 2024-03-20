interface IRegisterFormIndividual {
  fullName: string;
  naCode: string;
  ecCode: string;
  postCode: string;
  invoice: string;
  birthdate: string;
  address: string;
}
type IRegisterFormIndividNames =
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

interface IRegisterForm {
  UniqueTaxIdentifier: string;
  publicKey: string;
  personalKey: string;
  ElecSigCertificate: string;
}
