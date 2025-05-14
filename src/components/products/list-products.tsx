"use client";

import { Product } from "@prisma/client";
import { productColumns } from "./columns";
import { DataTable } from "../data-table";

interface ListProductsProps {
  data: Product[];
}
export function ListProducts({ data }: ListProductsProps) {
  return data ? <DataTable columns={productColumns} data={data} /> : "";
}
