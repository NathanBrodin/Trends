"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Currency } from "@/registry/currencies";
import { Category } from "@/registry/categories";

export type RecentTransaction = {
  id: string;
  category: Category;
  name: string;
  amount: number;
  currency: Currency;
  bankAccountName?: string;
};

export const columns: ColumnDef<RecentTransaction>[] = [
  {
    accessorKey: "category",
    header: "Cat",
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">{row.original.category}</div>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "bankAccountName",
    header: "Bank Account",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NOK",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
];
