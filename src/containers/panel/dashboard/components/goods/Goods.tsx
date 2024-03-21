import Grid, { GridCol } from "@/src/components/common/Grid";
import { invoiceColumns } from "@/src/constants/dataTables/invoiceTable";
import { DataTable } from "@/src/components/shadcn/datatable/DataTable";
import TabsLayout from "@/src/components/layouts/TabsLayout";

const invoices: InvoiceTable[] = [
  {
    action: "sdf",
    billIssue: "sdff",
    creationDate: "hazzz",
    shippingStatus: "zxgs",
    tier: 1,
    uniqueTaxId: "xcdss",
  },
  {
    action: "sdf",
    billIssue: "sdff",
    creationDate: "hazzz",
    shippingStatus: "zxgs",
    tier: 2,
    uniqueTaxId: "xcdss",
  },
  {
    action: "sdf",
    billIssue: "sdff",
    creationDate: "hazzz",
    shippingStatus: "zxgs",
    tier: 3,
    uniqueTaxId: "xcdss",
  },
  {
    action: "sdf",
    billIssue: "sdff",
    creationDate: "hazzz",
    shippingStatus: "zxgs",
    tier: 4,
    uniqueTaxId: "xcdss",
  },
  {
    action: "sdf",
    billIssue: "sdff",
    creationDate: "hazzz",
    shippingStatus: "zxgs",
    tier: 5,
    uniqueTaxId: "xcdss",
  },
  {
    action: "sdf",
    billIssue: "sdff",
    creationDate: "hazzz",
    shippingStatus: "zxgs",
    tier: 6,
    uniqueTaxId: "xcdss",
  },
  {
    action: "sdf",
    billIssue: "sdff",
    creationDate: "hazzz",
    shippingStatus: "zxgs",
    tier: 7,
    uniqueTaxId: "xcdss",
  },
];

export default function Invoice() {
  return (
    <TabsLayout>
      <DataTable columns={invoiceColumns} data={invoices} />
    </TabsLayout>
  );
}
