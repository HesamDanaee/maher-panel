import Grid, { GridCol } from "@/src/components/common/Grid";
import { invoiceColumns } from "@/src/constants/tabledata/invoiceTable";
import { DataTable } from "@/src/components/shadcn/datatable/DataTable";
import { Input } from "@/src/components/shadcn/input";
import Flex from "@/src/components/common/Flex";
import { Button } from "@/src/components/shadcn/button";

import data from "@/public/data.json";
import NewInvoice from "./components/NewInvoice";

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
  const {
    panel: {
      invoice: {
        main: {
          searchInput: { placeholder },
          newInvoice: { button },
        },
      },
    },
  } = data;

  return (
    <Grid className="w-full h-full grid-cols-12 grid-rows-8 gap-0">
      <GridCol className="flex flex-col gap-y-3 col-start-3 col-end-11 row-start-3 row-end-6">
        {/* filter input and new invoice button */}
        <Flex className="w-auto !h-auto justify-between">
          <Input
            className="w-1/3 placeholder:text-secondary placeholder:font-light"
            placeholder={placeholder}
          />
          <NewInvoice trigger={<Button className="btn1">{button}</Button>} />
        </Flex>

        {/* Invoice data table */}
        <DataTable columns={invoiceColumns} data={invoices} />
      </GridCol>
    </Grid>
  );
}
