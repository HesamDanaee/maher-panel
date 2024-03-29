"use client";

import { DataTable } from "@/src/components/shadcn/datatable/DataTable";
import { Input } from "@/src/components/shadcn/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/shadcn/Dropdown-menu";
import Flex from "@/src/components/common/Flex";
import { Button } from "@/src/components/shadcn/button";

import data from "@/public/data/data.json";
import dataTables from "@/public/data/dataTables.json";
import NewInvoice from "./components/NewInvoice";
import TabsLayout from "@/src/components/layouts/TabsLayout";
import { MoreHorizontal } from "lucide-react";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/src/components/shadcn/datatable/DataTableColumnHeader";

import { invoices } from "@/src/constants/mockData";
import DataCard from "@/src/components/common/DataCard";
import InvoicesDataCard from "./components/InvoicesDataCard";

export default function Invoice() {
  const invoiceColumns: ColumnDef<InvoiceTable>[] = dataTables.invoice
    .map((col) =>
      col.accessorKey === "action"
        ? {
            id: "actions",
            cell: ({ row }) => {
              const invoice = row.original;

              return (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="h-8 w-8 p-0 hover:bg-secondary"
                    >
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem
                      onClick={() =>
                        navigator.clipboard.writeText(invoice.billIssue)
                      }
                    >
                      Copy payment ID
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>View customer</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            },
          }
        : col
    )
    .map((col) => ({
      ...col,
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title={col.header} />
      ),
    }));

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
      <Flex className="w-auto basis-1/6 max-sm:flex-col-reverse max-sm:gap-y-3 !h-auto justify-between">
        <Input
          className="w-1/3 max-lg:w-2/3 max-sm:w-full placeholder:text-secondary placeholder:font-light sm:hidden"
          placeholder={placeholder}
        />
        <NewInvoice trigger={<Button className="btn1">{button}</Button>} />
      </Flex>

      {/* Invoice data table */}

      <DataTable columns={invoiceColumns} data={invoices} />

      <InvoicesDataCard />
    </TabsLayout>
  );
}
