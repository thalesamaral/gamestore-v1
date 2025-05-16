import { Product } from "@prisma/client";
import { FormatMonetaryValue } from "@/lib/currency";
import Image from "next/image";
import Link from "next/link";

interface ProductsProps {
  productsMenu: Product[];
}
const ProductMenu = ({ productsMenu }: ProductsProps) => {
  return (
    <div className="space-y-3 px-5">
      {productsMenu.map((product) => (
        <Link
          key={product.id}
          href={`/catalogo/${product.id}`}
          // href="/"
          className="flex items-center justify-between gap-10 border-b py-3"
        >
          {/* ESQUERDA */}
          <div>
            <h3 className="text-sm font-medium">{product.name}</h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              {product.description}
            </p>
            <p className="pt-3 text-sm font-semibold">
              {FormatMonetaryValue(product.price)}
            </p>
          </div>
          
          {/* DIREITA */}
          <div className="relative min-h-[82px] min-w-[120px]">
            <Image
              src={"/game-wallpaper.avif"}
              alt={product.name}
              fill
              className="rounded-lg object-contain"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductMenu;
