"use client";

import { MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useState } from "react";
import { ProductSheet } from "./product-sheet";
import { Product } from "@prisma/client";

interface ProductActionColumnProps {
  product: Product;
}

export function ProductActionColumn({ product }: ProductActionColumnProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && <ProductSheet open setOpen={setOpen} product={product}/>}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Ações</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setOpen(true)}>
            Editar
          </DropdownMenuItem>
          <DropdownMenuItem>Deletar</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
