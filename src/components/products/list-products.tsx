"use client";

import { productColumns, Produto } from "./columns";
import { DataTable } from "../data-table";

interface ListProductsProps {
  data: Produto[];
}
export function ListProducts({ data }: ListProductsProps) {
  return data ? <DataTable columns={productColumns} data={data} /> : "";
}
