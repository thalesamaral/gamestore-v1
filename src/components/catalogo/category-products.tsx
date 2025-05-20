import { Product } from "@prisma/client";
import { FormatMonetaryValue } from "@/lib/currency";
import Image from "next/image";
import Link from "next/link";

interface ProductsProps {
  categoryProducts: Product[];
}
const CategoryProducts = ({ categoryProducts }: ProductsProps) => {
  return (
    <div className="space-y-3 px-5">
      {categoryProducts.map((product) => (
        <Link
          key={product.id}
          href={`/catalogo/${product.id}`}
          className="flex items-center justify-between gap-10 border-b py-3"
        >
          {/* ESQUERDA */}
          <div>
            <h3 className="text-base font-semibold">{product.name}</h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              {product.description}
            </p>
            <p className="pt-3 text-sm font-semibold">
              {FormatMonetaryValue(product.price)}
            </p>
            <p className="text-sm text-muted-foreground">
              Quantidade em estoque:{" "}
              <span className="font-bold text-purple-500">
                {new Intl.NumberFormat("pt-BR").format(product.stock)}
              </span>
            </p>
          </div>

          {/* DIREITA */}
          <div className="relative min-h-[82px] min-w-[120px]">
            <Image
              // src={"/game-product.jpeg"}
              src={product.imageUrl}
              alt={product.name}
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryProducts;
