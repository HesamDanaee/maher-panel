"use client";

import { DataTable } from "@/src/components/shadcn/datatable/DataTable";
import { Input } from "@/src/components/shadcn/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
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

import { PiCaretDown } from "react-icons/pi";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

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
  // const table = useReactTable({
  //   data,
  //   columns,
  //   onSortingChange: setSorting,
  //   onColumnFiltersChange: setColumnFilters,
  //   getCoreRowModel: getCoreRowModel(),
  //   getPaginationRowModel: getPaginationRowModel(),
  //   getSortedRowModel: getSortedRowModel(),
  //   getFilteredRowModel: getFilteredRowModel(),
  //   onColumnVisibilityChange: setColumnVisibility,
  //   onRowSelectionChange: setRowSelection,
  //   state: {
  //     sorting,
  //     columnFilters,
  //     columnVisibility,
  //     rowSelection,
  //   },
  // });
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

  const invoiceColumns: ColumnDef<InvoiceTable>[] = dataTables.invoice;

  return (
    <TabsLayout>
      {/* filter input and new invoice button */}
      <Flex className="w-auto max-sm:flex-col-reverse max-sm:gap-y-3 !h-auto justify-between">
        <Input
          className="w-1/3 max-lg:w-2/3 max-sm:w-full placeholder:text-secondary placeholder:font-light"
          placeholder={placeholder}
        />
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <PiCaretDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {invoiceColumns
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu> */}
        <NewInvoice trigger={<Button className="btn1">{button}</Button>} />
      </Flex>

      {/* Invoice data table */}
      <DataTable columns={invoiceColumns} data={invoices} />
    </TabsLayout>
  );
}
