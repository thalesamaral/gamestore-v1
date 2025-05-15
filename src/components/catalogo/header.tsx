"use client";

import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

const CatalogoHeader = () => {
  const router = useRouter();
  const handleBackClick = () => router.back();
  // const handleOrdersClick = () => router.push(`/${slug}/orders`);
  return (
    <div className="relative h-[250px] w-full">
      <Button
        variant="secondary"
        size="icon"
        className="absolute left-4 top-4 z-50 rounded-full"
        onClick={handleBackClick}
      >
        <ChevronLeftIcon />
      </Button>
      <Image
        src={"/game-wallpaper.avif"}
        alt={"game-wallpaper"}
        fill
        className="object-cover"
      />
      <Button
        variant="secondary"
        size="icon"
        className="absolute right-4 top-4 z-50 rounded-full"
        onClick={handleBackClick}
      >
        <ScrollTextIcon />
      </Button>
    </div>
  );
};

export default CatalogoHeader;
