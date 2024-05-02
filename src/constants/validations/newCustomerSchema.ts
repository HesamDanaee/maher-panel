import { ObjectSchema, string, number, InferType } from "yup";

const individualSchema = new ObjectSchema({
  customer: string(),
  fullName: string(),
  naCode: number(),
  ecCode: string(),
  postCode: string(),
  invoice: string(),
  birthdate: string(),
  address: string(),
});

const legalEntetiesSchema = new ObjectSchema({
  customer: string(),
  companyName: string(),
  companyRegistrationNumber: string(),
  ecCode: number(),
  postCode: string(),
  invoice: string(),
  companyRegistrationDate: string(),
  address: string(),
});

export type IndividualSchemaType = InferType<typeof individualSchema>;

export type LegalEntetiesSchemaType = InferType<typeof legalEntetiesSchema>;

export { individualSchema, legalEntetiesSchema };
