import { GetProducts } from "@/actions/products/get-products";
import { Header } from "@/components/products/header";
import { ListProducts } from "@/components/products/list-products";

export default async function ProductsPage() {
  const products = await GetProducts();

  return (
    <>
      <div className="flex flex-col p-6 items-center">
        <h1 className="text-4xl">Cadastro de Produtos</h1>
        <div className="container mx-auto py-10">
          <Header />
          <ListProducts data={products}></ListProducts>
        </div>
      </div>
    </>
  );
}
