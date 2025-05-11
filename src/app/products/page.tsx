import { GetProducts } from "@/actions/products/get-products";
import { ListProducts } from "@/components/products/list-products";

const products = await GetProducts();

export default async function ProductsPage() {
  // const products = await db.product.findMany();
  return (
    <div className="container mx-auto py-10">
      <ListProducts data={products}></ListProducts>
    </div>
  );
}
