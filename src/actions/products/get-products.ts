import { db } from "@/lib/prisma";

// interface GetProductsParams {
//   searchParams: {
//     id: string,
//     name: string,
//     description: string,
//     price: number,
//   };
// }

export async function GetProducts() {
  const products = await db.product.findMany();

  return JSON.parse(JSON.stringify(products));
}

// export async function GetProducts({
//   searchParams: { id, name, description, price },
// }: GetProductsParams) {
//   const products = await db.product.findMany({
//     where: {
//       ...(id && { id }),
//       ...(name && { name: { contains: name, mode: "insensitive" } }),
//       ...(description && { description: { contains: description, mode: "insensitive" } }),
//       ...(price !== undefined && { price }),
//     },
//   });

//   return JSON.parse(JSON.stringify(products));
// }