"use client";

import { Product } from "@prisma/client";
import { ClockIcon } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { FormatMonetaryValue } from "@/lib/currency";
import { CATEGORY_LABELS } from "@/schemas/product-schema";

// import { CartContext } from "../contexts/cart";
// import CartSheet from "./cart-sheet";

interface CatalogoCategoriesProps {
  products: Product[];
}

const CatalogoCategoriesaaa = ({ products }: CatalogoCategoriesProps) => {
  const categories = useMemo(() => {
    const grouped: { [key in keyof typeof CATEGORY_LABELS]?: Product[] } = {};
    for (const product of products) {
      if (!grouped[product.category]) {
        grouped[product.category] = [];
      }
      grouped[product.category]?.push(product);
    }
    return grouped;
  }, [products]);

  const categoryKeys = Object.keys(CATEGORY_LABELS) as (keyof typeof CATEGORY_LABELS)[];
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof CATEGORY_LABELS>(
    categoryKeys[0]
  );

  // const { products: cartProducts, total, toggleCart, totalQuantity } = useContext(CartContext);

  return (
    <div className="relative z-50 mt-[-1.5rem] rounded-t-3xl bg-white">
      <div className="p-5">
        <div className="flex items-center gap-3">
          <Image
            src={"/game-wallpaper.avif"}
            alt={"game-wallpaper"}
            height={45}
            width={45}
          />
          <div>
            <h2 className="text-lg font-semibold">Gamestore</h2>
            <p className="text-xs opacity-55">Tudo sobre games em um só lugar!</p>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-1 text-xs text-green-500">
          <ClockIcon size={12} />
          <p>Aberto!</p>
        </div>
      </div>

      <ScrollArea className="w-full">
        <div className="flex w-max space-x-4 p-4 pt-0">
          {categoryKeys.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "secondary"}
              size="sm"
              className="rounded-full"
            >
              {CATEGORY_LABELS[category]}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <h3 className="px-5 pt-2 font-semibold">
        {CATEGORY_LABELS[selectedCategory]}
      </h3>
      <Products products={categories[selectedCategory] || []} />

      {cartProducts.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 flex w-full items-center justify-between border-t bg-white px-5 py-3">
          <div>
            <p className="text-xs text-muted-foreground">Total dos pedidos</p>
            <p className="text-sm font-semibold">
              {FormatMonetaryValue(total)}
              <span className="text-xs font-normal text-muted-foreground">
                / {totalQuantity} {totalQuantity > 1 ? "itens" : "item"}
              </span>
            </p>
          </div>
          <Button onClick={toggleCart}>Ver sacola</Button>
          <CartSheet />
        </div>
      )}
    </div>
  );
};

export default CatalogoCategoriesaaa;
