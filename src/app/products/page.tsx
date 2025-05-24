import { GetProducts } from "@/actions/products/get-products";
import { Head } from "@/components/products/head";
import ProductsHeader from "@/components/products/header";
import { ListProducts } from "@/components/products/list-products";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function ProductsPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

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
