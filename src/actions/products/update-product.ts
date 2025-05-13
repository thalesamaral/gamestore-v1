"use server";

import { db } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

interface UpdateProductParams {
  id: string;
  name: string;
  description: string;
  price: number;
}

export async function UpdateProduct({
  id,
  name,
  description,
  price,
}: UpdateProductParams) {
  await db.product.update({
    where: { id },
    data: { name, description, price },
  });
  revalidatePath("/products")
}
