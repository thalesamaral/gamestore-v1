"use server";

import { db } from "@/lib/prisma";
import { Category } from "@prisma/client";
import { revalidatePath } from "next/cache";

interface UpdateProductParams {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
}

export async function UpdateProduct({
  id,
  name,
  description,
  price,
  category,
}: UpdateProductParams) {
  await db.product.update({
    where: { id },
    data: { name, description, price, category },
  });
  revalidatePath("/products");
}
