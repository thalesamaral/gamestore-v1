import { GetProducts } from "@/actions/products/get-products";
import { Head } from "@/components/products/head";
import ProductsHeader from "@/components/products/header";
import { ListProducts } from "@/components/products/list-products";

export default async function ProductsPage() {
  const products = await GetProducts();

  return (
    <>
      <div>
        <ProductsHeader />
        <div className="flex flex-col gap-2 container mx-auto py-10 px-4">
          <Head />
          <ListProducts data={products}></ListProducts>
        </div>
      </div>
    </>
  );
}
