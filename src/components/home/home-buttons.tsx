"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HomeButtons() {
  const { data: session } = useSession();
  const router = useRouter();

  function handleClick() {
    if (session) {
      router.push("/products");
    } else {
      router.push("/login");
    }
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 lg:py-28 gap-12 md:px-8">
      <div className="space-y-5 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl text-primary pb-20">Gamestore</h1>
        <div className="flex flex-col gap-2 justify-center">
          <Button variant="outline" onClick={handleClick}>
            Cadastro de Produtos
          </Button>
          <Link href="/catalogo">
            <Button className="w-full">Catálogo Público</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
