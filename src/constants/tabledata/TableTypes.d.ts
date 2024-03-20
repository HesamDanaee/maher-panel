type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

type InvoiceTable = {
  tier: number;
  creationDate: string;
  uniqueTaxId: string;
  billIssue: string;
  shippingStatus: string;
  action: string;
};
