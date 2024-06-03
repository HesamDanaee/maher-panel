"use client";

import { Input } from "@/src/components/shadcn/input";
import Flex from "@/src/components/common/Flex";
import { Button } from "@/src/components/shadcn/button";
import customersData from "@/public/data/panel/customers.json";
import headersData from "@/public/data/panel/header.json";
import {
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { PiFile } from "react-icons/pi";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/shadcn/card";
import { DataTableViewOptions } from "@/src/components/shadcn/datatable/DataTableViewOptions";
import dataTables from "@/public/data/dataTables.json";
import { customers } from "@/src/constants/mockData";
import { useState } from "react";
import DashboardLayout from "@/src/components/layouts/DashboardLayout";
import Box from "@/src/components/common/Box";
import { GridCol } from "@/src/components/common/Grid";
import { DataTable } from "@/src/components/shadcn/datatable/DataTable";
import CreateNewCustomer from "./components/CreateNewCustomer";

interface CustomersProps {
  tab: DashboardSlugs;
}

export default function Customers({ tab }: CustomersProps) {
  const { navbar } = headersData;

  const {
    searchInput: { placeholder },
    exportBtn,
  } = customersData;

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const columns: ColumnDef<CustomersTable>[] = dataTables.customers;

  const table = useReactTable({
    data: customers,
    columns: columns,
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

            {/* Export Button */}

            <Button size="sm" variant="outline" className="h-8 gap-1">
              <PiFile className="h-3.5 w-3.5" />
              <Box className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                {exportBtn}
              </Box>
            </Button>

            {/* Create new customer button */}

            <CreateNewCustomer />
          </Flex>
        </Flex>
      </GridCol>

      {/* Table card */}
      <GridCol className="col-span-full row-start-2 row-end-13">
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
              data={customers}
            />
          </CardContent>
        </Card>
      </GridCol>
    </DashboardLayout>
  );
}
