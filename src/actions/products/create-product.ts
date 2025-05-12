"use server";

import { db } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

interface CreateProductParams {
  name: string;
  description: string;
  price: number;
}

export async function CreateProduct(params: CreateProductParams) {
  await db.product.create({
    data: {
      ...params,
      // id: product.id,
    },
  });

  revalidatePath("/products");
}
