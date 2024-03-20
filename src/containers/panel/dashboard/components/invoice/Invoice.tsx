import { invoiceColumns } from "@/src/constants/tabledata/invoiceTable";
import { DataTable } from "@/src/components/shadcn/datatable/DataTable";
import { Input } from "@/src/components/shadcn/input";
import Flex from "@/src/components/common/Flex";
import { Button } from "@/src/components/shadcn/button";

import data from "@/public/data.json";
import NewInvoice from "./components/NewInvoice";
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
    <TabsLayout>
      {/* filter input and new invoice button */}
      <Flex className="w-auto max-sm:flex-col-reverse max-sm:gap-y-3 !h-auto justify-between">
        <Input
          className="w-1/3 max-lg:w-2/3 max-sm:w-full placeholder:text-secondary placeholder:font-light"
          placeholder={placeholder}
        />
        <NewInvoice trigger={<Button className="btn1">{button}</Button>} />
      </Flex>

      {/* Invoice data table */}
      <DataTable columns={invoiceColumns} data={invoices} />
    </TabsLayout>
  );
}
