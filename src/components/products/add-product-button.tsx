"use client";
import { useState } from "react";

import { Button } from "../ui/button";
import { ProductSheet } from "./product-sheet";
import { FilePlus } from "lucide-react";

export default function AddProductButton() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)}>
                <FilePlus />
                Adicionar
            </Button>
            <ProductSheet open={open} setOpen={setOpen} />
        </>
    );
}
