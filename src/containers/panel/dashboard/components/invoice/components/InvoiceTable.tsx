"use client";

import { DataTable } from "@/src/components/shadcn/datatable/DataTable";
import { ColumnDef, Table } from "@tanstack/react-table";
import { useIsMobile } from "@/src/hooks/useIsMobile";

interface InvoiceTableProps {
  invoices: InvoiceTable[];
  columns: ColumnDef<InvoiceTable>[];
  table: Table<InvoiceTable>;
}

export default function InvoiceTable({
  columns,
  table,
  invoices,
}: InvoiceTableProps) {
  const isMobile = useIsMobile();

  return (
    !isMobile && <DataTable table={table} columns={columns} data={invoices} />
  );
}
