"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
// import { Product } from "@prisma/client";
import { FormProduct } from "./form-product";

interface ProductProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  // product?: Product;
}
export function ProductSheet({ open, setOpen }: ProductProps) {
  return (
    <>
      <Sheet open={open} onOpenChange={() => setOpen(!open)}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Formulário</SheetTitle>
            <SheetDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </SheetDescription>
            <div>
              <FormProduct
                open={open}
                setOpen={setOpen}
              />
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
