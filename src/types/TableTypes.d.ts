type InvoiceTable = {
  tier: number;
  creationDate: string;
  uniqueTaxId: string;
  billIssue: string;
  shippingStatus: string;
  action: string;
};

type TaxpayersTable = {
  name: number;
  kind: string;
  nationalId: string;
  status: string;
};

type GoodsTable = {
  goodsUnit: number;
  goodsName: string;
  price: string;
  taxPercent: string;
  taxStatus: string;
};

type CustomersTable = {
  name: number;
  mobile: string;
  nationalId1: string;
  nationalId2: string;
  postCode: string;
};
