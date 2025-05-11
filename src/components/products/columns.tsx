"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Produto = {
  id: string,
  name: string,
  description: string,
  price: number,
}

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
  },
]
