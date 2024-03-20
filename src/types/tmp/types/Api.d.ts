interface GoodsListRes {
  status: boolean;
  statusCode: number;
  message: string;
  data: GoodsList[][];
  error: any[];
}

interface GoodsList {
  id_goods: number;
  ID: string;
  Type: string;
  Date: string;
  SpecialOrGeneral: string;
  TaxableOrFree: string;
  Vat: string;
  VatCustomPurposes: string;
  DescriptionOfID: string;
  RunDate: string;
  ExpirationDate: string;
  created_at: string;
  updated_at: string;
}
