interface GetAllGoodsRes {
  status: boolean;
  statusCode: number;
  message: string;
  data: Goods[][];
  error: any[];
}

interface Goods {
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
