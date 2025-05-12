import { GetProducts } from "@/actions/products/get-products";
import AddProductButton from "@/components/products/add-product-button";
import { ListProducts } from "@/components/products/list-products";

const products = await GetProducts();

export default async function ProductsPage() {
  return (
    <>
      <div className="flex flex-col p-5">
        <h1 className="text-2xl">Lista de Produtos</h1>
        <div className="container mx-auto py-10">
          <AddProductButton />
          <ListProducts data={products}></ListProducts>
        </div>
      </div>
    </>
  );
}
