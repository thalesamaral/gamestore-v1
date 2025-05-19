"use client";

import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

const ProductsHeader = () => {
  const router = useRouter();
  const handleBackClick = () => router.back();
  // const handleOrdersClick = () => router.push(`/${slug}/orders`);
  return (
    <div className="relative h-[100px] w-full">
      <h1 className="text-4xl text-center py-10">Cadastro de Produtos</h1>
      <Button
        variant="secondary"
        size="icon"
        className="absolute left-4 top-4 z-50 rounded-full"
        onClick={handleBackClick}
      >
        <ChevronLeftIcon />
      </Button>
    </div>
  );
};

export default ProductsHeader;
