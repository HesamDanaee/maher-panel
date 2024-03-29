"use client";

import { DataTable } from "@/src/components/shadcn/datatable/DataTable";
import { invoices } from "@/src/constants/mockData";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/shadcn/Dropdown-menu";

import { Button } from "@/src/components/shadcn/button";
import dataTables from "@/public/data/dataTables.json";

import { MoreHorizontal } from "lucide-react";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/src/components/shadcn/datatable/DataTableColumnHeader";
import { useIsMobile } from "@/src/hooks/useIsMobile";

export default function InvoiceTable() {
  const isMobile = useIsMobile();

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
        <DataTableColumnHeader column={column} title={col.header!} />
      ),
    }));

  return !isMobile && <DataTable columns={invoiceColumns} data={invoices} />;
}
