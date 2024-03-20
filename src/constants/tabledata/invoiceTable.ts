import { ColumnDef } from "@tanstack/react-table";

export const invoiceColumns: ColumnDef<InvoiceTable>[] = [
  {
    accessorKey: "tier",
    header: "ردیف",
  },
  {
    accessorKey: "creationDate",
    header: "تاریخ و ساعت ایجاد",
  },
  {
    accessorKey: "uniqueTaxId",
    header: "شماره منحصر به فرد مالیاتی",
  },
  {
    accessorKey: "billIssue",
    header: "نوع صورتحساب",
  },
  {
    accessorKey: "shippingStatus",
    header: "موضوع صورتحساب",
  },
  {
    accessorKey: "action",
    header: "وضعیت ارسال",
  },
];
