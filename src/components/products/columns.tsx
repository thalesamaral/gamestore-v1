"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ProductActionColumn } from "./product-action-column";
import { FormatMonetaryValue } from "@/lib/currency";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Produto = {
  id: string;
  name: string;
  description: string;
  price: number;
};

export const productColumns: ColumnDef<Produto>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "description",
    header: "Descrição",
  },
  {
    accessorKey: "price",
    header: "Preço",
    cell: ({ row: { original: product } }) => (
      <span>{FormatMonetaryValue(product.price)}</span>
    ),
  },
  {
    accessorKey: "action",
    header: "Ações",
    cell: ({ row: { original: product } }) => (
      <ProductActionColumn product={product} />
    ),
  },
];
