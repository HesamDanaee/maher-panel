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

const goods: GoodsTable[] = [
  {
    goodsName: "",
    goodsUnit: "",
    price: "",
    taxPercent: "",
    taxStatus: "",
  },
];

export default function Goods() {
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

  const goodsColumn: ColumnDef<GoodsTable>[] = dataTables.goods;

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
      </Flex>

      {/* Invoice data table */}
      <DataTable columns={goodsColumn} data={goods} />
    </TabsLayout>
  );
}
