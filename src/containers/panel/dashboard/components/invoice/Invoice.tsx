"use client";

import { Input } from "@/src/components/shadcn/input";
import Flex from "@/src/components/common/Flex";
import { Button } from "@/src/components/shadcn/button";
import data from "@/public/data/data.json";
import InvoiceTable from "./components/InvoiceTable";
import {
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { File, MoreHorizontal, PlusCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/shadcn/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/shadcn/Tabs";
import Grid from "@/src/components/common/Grid";
import { DataTableViewOptions } from "@/src/components/shadcn/datatable/DataTableViewOptions";
import { DataTableColumnHeader } from "@/src/components/shadcn/datatable/DataTableColumnHeader";
import dataTables from "@/public/data/dataTables.json";
import { invoices } from "@/src/constants/mockData";
import { useState } from "react";
import DashboardLayout from "@/src/components/layouts/DashboardLayout";

interface InvoiceProps {
  tab: DashboardSlugs;
}

export default function Invoice({ tab }: InvoiceProps) {
  const {
    panel: {
      header: { navbar },
      invoice: {
        main: {
          searchInput: { placeholder },
          newInvoice: { button, options },
        },
      },
    },
  } = data;

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [activeTab, setActiveTab] = useState(options[0]);
  const invoiceColumns: ColumnDef<InvoiceTable>[] = dataTables.invoice
    .map((col) =>
      col.accessorKey === "action"
        ? {
            id: "actions",
            cell: ({ row }: any) => {
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
        <DataTableColumnHeader column={column} title={(col as any).header!} />
      ),
    }));

  const table = useReactTable({
    data: invoices,
    columns: invoiceColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  });

  return (
    <DashboardLayout>
      {/* Tabs list */}
      <Flex className="items-center row-span-1">
        <TabsList>
          {options.map((tab, z) => (
            <TabsTrigger
              key={`tab-${z}`}
              value={tab}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>

        <Flex className="!w-auto ml-auto flex items-center gap-2">
          <Input
            placeholder={placeholder}
            value={
              (table.getColumn("creationDate")?.getFilterValue() as string) ??
              ""
            }
            onChange={(event) =>
              table
                .getColumn("creationDate")
                ?.setFilterValue(event.target.value)
            }
            className="md:min-w-[400px] max-sm:w-full placeholder:text-secondary placeholder:font-light text-end"
          />

          <DataTableViewOptions table={table} />

          <Button size="sm" variant="outline" className="h-8 gap-1">
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Export
            </span>
          </Button>
          <Button size="sm" className="h-8 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add Product
            </span>
          </Button>
        </Flex>
      </Flex>

      {/* Tabs content */}
      <TabsContent value={activeTab} className="row-span-11">
        <Card x-chunk="dashboard-06-chunk-0 h-full">
          <CardHeader className="text-end">
            <CardTitle>
              {navbar.find(({ href }) => href === tab)?.mobileText}
            </CardTitle>
            {/* <CardDescription>
                    Manage your products and view their sales performance.
                  </CardDescription> */}
          </CardHeader>
          <CardContent>
            <InvoiceTable
              columns={invoiceColumns}
              table={table}
              invoices={invoices}
            />
          </CardContent>
        </Card>
      </TabsContent>
    </DashboardLayout>
  );
}
