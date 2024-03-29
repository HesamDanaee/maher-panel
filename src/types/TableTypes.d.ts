type InvoiceTable = {
  tier: number;
  creationDate: string;
  uniqueTaxId: string;
  billType: string;
  billIssue: string;
  shippingStatus: string;
  action: string;
};

type TaxpayersTable = {
  name: string;
  kind: string;
  nationalId: string;
  status: string;
};

type GoodsTable = {
  goodsUnit: string;
  goodsName: string;
  price: string;
  taxPercent: string;
  taxStatus: string;
};

type CustomersTable = {
  name: string;
  mobile: number;
  nationalId1: string;
  nationalId2: string;
  postCode: string;
};
