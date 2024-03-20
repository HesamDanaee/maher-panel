import Grid, { GridCol } from "@/src/components/common/Grid";
import { invoiceColumns } from "@/src/constants/tabledata/invoiceTable";
import { DataTable } from "@/src/components/shadcn/datatable/DataTable";

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
    <Grid className="w-full h-full grid-cols-12 grid-rows-8 gap-0">
      <GridCol className="col-start-3 col-end-11 row-start-3 row-end-6">
        <DataTable columns={invoiceColumns} data={invoices} />
      </GridCol>
    </Grid>
  );
}
