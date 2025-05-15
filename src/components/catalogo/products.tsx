import { Product } from "@prisma/client";
// import Image from "next/image";
// import Link from "next/link";
import { FormatMonetaryValue } from "@/lib/currency";

interface ProductsProps {
  products: Product[];
}

const Products = ({ products }: ProductsProps) => {
  return (
    <div className="space-y-3 px-5">
      {products.map((product) => (
        <>
          <div>
            <h3 className="text-sm font-medium">{product.name}</h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              {product.description}
            </p>
            <p className="pt-3 text-sm font-semibold">
              {FormatMonetaryValue(product.price)}
            </p>
          </div>
        </>
      ))}
    </div>
  );
};

export default Products;
