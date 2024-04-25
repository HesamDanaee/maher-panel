"use client";

import { Input } from "@/src/components/shadcn/input";
import Flex from "@/src/components/common/Flex";
import { Button } from "@/src/components/shadcn/button";
import data from "@/public/data/data.json";
import {
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { PiPlus, PiFile } from "react-icons/pi";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/shadcn/card";

import {
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/shadcn/Tabs";
import { DataTableViewOptions } from "@/src/components/shadcn/datatable/DataTableViewOptions";
import { DataTableColumnHeader } from "@/src/components/shadcn/datatable/DataTableColumnHeader";
import dataTables from "@/public/data/dataTables.json";
import { invoices } from "@/src/constants/mockData";
import { useState } from "react";
import DashboardLayout from "@/src/components/layouts/DashboardLayout";
import Typography from "@/src/components/common/Typography";
import Box from "@/src/components/common/Box";
import { GridCol } from "@/src/components/common/Grid";
import { DataTable } from "@/src/components/shadcn/datatable/DataTable";
import CreateNewModal from "@/src/components/common/CreateNewModal";

interface InvoiceProps {
  tab: DashboardSlugs;
}

export default function Invoice({ tab }: InvoiceProps) {
  const {
    panel: {
      header: { navbar },
      invoice: {
        main: {
          table: { title },
          exportBtn,
          searchInput: { placeholder },
          newInvoice: { button, options, modal },
        },
      },
    },
  } = data;

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [activeTab, setActiveTab] = useState(options[0].value);

  const invoiceColumns: ColumnDef<InvoiceTable>[] = dataTables.invoice;

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

      <GridCol className="col-span-full row-start-1 row-end-2">
        <Flex className="items-center row-span-1">
          <TabsList>
            {options.map(({ value, text }, z) => (
              <TabsTrigger
                key={`tab-${z}`}
                value={value}
                onClick={() => setActiveTab(value)}
              >
                {text}
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
              <PiFile className="h-3.5 w-3.5" />
              <Box className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                {exportBtn}
              </Box>
            </Button>

            <CreateNewModal
              trigger={
                <Button size="sm" className="h-8 gap-1">
                  <PiPlus className="h-3.5 w-3.5" />
                  <Typography className="text-background sr-only sm:not-sr-only sm:whitespace-nowrap">
                    {button}
                  </Typography>
                </Button>
              }
              data={modal}
            />
          </Flex>
        </Flex>
      </GridCol>

      {/* Tabs content */}
      <GridCol className="col-span-full row-start-2 row-end-13">
        <TabsContent value={activeTab} className="row-span-11">
          <Card x-chunk="dashboard-06-chunk-0 h-full">
            <CardHeader className="text-end">
              <CardTitle>
                {navbar.find(({ href }) => href === tab)?.mobileText}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <DataTable
                table={table}
                columns={table._getColumnDefs()}
                data={invoices}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </GridCol>
    </DashboardLayout>
  );
}
