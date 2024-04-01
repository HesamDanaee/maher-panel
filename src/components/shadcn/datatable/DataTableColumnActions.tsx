import { DataTableColumnHeader } from "./DataTableColumnHeader";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/shadcn/Dropdown-menu";
import { Button } from "@/src/components/shadcn/button";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

interface DataTableColumnActionsProps {
  dataTable: ColumnDef<{ [key: string]: string }>[];
}

export default function DataTableColumnActions({
  dataTable,
}: DataTableColumnActionsProps) {
  return (
    <>
      {dataTable
        .map((col) =>
          (col as any).accessorKey === "action"
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
          header: ({ column }: any) => (
            <DataTableColumnHeader
              column={column}
              title={(col as any).header}
            />
          ),
        }))}
    </>
  );
}
