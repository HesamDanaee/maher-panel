"use client";



import { Input } from "@/src/components/shadcn/input";
import Flex from "@/src/components/common/Flex";
import { Button } from "@/src/components/shadcn/button";
import goodsData from "@/public/data/panel/goods.json";
import headersData from "@/public/data/panel/header.json";
import {format} from 'date-fns-jalali'

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
import { goods } from "@/src/constants/mockData";
import { useState } from "react";
import DashboardLayout from "@/src/components/layouts/DashboardLayout";
import Typography from "@/src/components/common/Typography";
import Box from "@/src/components/common/Box";
import { GridCol } from "@/src/components/common/Grid";
import { DataTable } from "@/src/components/shadcn/datatable/DataTable";
import NewGood from "./components/NewGood";
interface GoodsProps {
  tab: DashboardSlugs;
  goodsResult?: Goods[][];
  userGoodsList:UserGoodsData[][]
}

export default function Goods({ tab, goodsResult, userGoodsList }: GoodsProps) {
  const { navbar } = headersData;
  const {
    exportBtn,
    input: { placeholder },
  } = goodsData;

  const mappedGoods = userGoodsList.flat(1).map(good => ({...good,updated_at:format(good.updated_at,"yyyy/m/d"),created_at:format(good.created_at,"yyyy/m/d")}))

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const column: ColumnDef<UserGoodsData>[] = dataTables.goods;

  const table = useReactTable({
    data: mappedGoods,
    columns: column,
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
                (table.getColumn("title")?.getFilterValue() as string) ??
                ""
              }
              onChange={(event) =>
                table
                  .getColumn("title")
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

            <NewGood goodsResult={goodsResult ?? []} />
          </Flex>
        </Flex>
      </GridCol>

      {/* Tabs content */}
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

            />
          </CardContent>
        </Card>
      </GridCol>
    </DashboardLayout>
  );
}
