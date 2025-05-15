import CatalogoHeader from "@/components/catalogo/header";
import CatalogoCategories from "@/components/catalogo/categories";
import { GetProducts } from "@/actions/products/get-products";

export default async function CatalogoPage() {
  const products = await GetProducts();

  return (
    <>
      <div>
        <CatalogoHeader />
        <CatalogoCategories productsByCategory={products}/>
      </div>
    </>
  );
}
