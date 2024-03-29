"use client";

import { Input } from "@/src/components/shadcn/input";
import Flex from "@/src/components/common/Flex";
import { Button } from "@/src/components/shadcn/button";
import data from "@/public/data/data.json";
import NewInvoice from "./components/NewInvoice";
import TabsLayout from "@/src/components/layouts/TabsLayout";
import InvoicesDataCard from "./components/InvoicesDataCard";
import InvoiceTable from "./components/InvoiceTable";

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
      <Flex className="w-auto basis-1/6 max-sm:flex-col-reverse gap-y-2 !h-auto sm:justify-between">
        <Input
          className="w-1/3 max-lg:w-2/3 max-sm:w-full placeholder:text-secondary placeholder:font-light sm:hidden"
          placeholder={placeholder}
        />
        <NewInvoice trigger={<Button className="btn1">{button}</Button>} />
      </Flex>

      {/* Invoice data table */}

      <InvoiceTable />

      <InvoicesDataCard />
    </TabsLayout>
  );
}
