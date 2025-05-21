import { useContext } from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { FormatMonetaryValue } from "@/lib/currency";

import { CartContext, CartProduct } from "./contexts/cart";
import CartProductItem from "./cart-product-item";
import { Button } from "../ui/button";

const CartSheet = () => {
  const { isOpen, toggleCart, products, total } = useContext(CartContext);

  function ConvertOrderToASCII(products: CartProduct[]) {
    const lines = [];
    lines.push("Olá gostaria de finalizar meu pedido que iniciei na Gamestore:")
    lines.push("🛒 *Resumo do Pedido:*");
    lines.push("```");
    lines.push(`Produto              Qtd    Preço`);
    lines.push("-----------------------------------");

    products.forEach((product) => {
      const name = product.name.slice(0, 20).padEnd(20, " ");
      const qty = String(product.quantity).padStart(3, " ");
      const price = product.price.toFixed(2).padStart(8, " ");
      lines.push(`${name}${qty} ${price}`);
    });

    lines.push("-----------------------------------");
    const total = products
      .reduce((sum, p) => sum + p.quantity * p.price, 0)
      .toFixed(2);
    lines.push(
      `Total               ${"".padStart(3)} ${total.padStart(8, " ")}`
    );
    lines.push("```");

    const message = lines.join("\n");
    return encodeURIComponent(message);
  }

  function handleSendMessage() {
    const WhastAppLinkApi = "https://api.whatsapp.com/send?phone=";
    const PhoneNumer = "5561998303657";
    window.open(
      `${WhastAppLinkApi}${PhoneNumer}&text=${ConvertOrderToASCII(products)}`,
      "_blank"
    );
  }
  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent className="w-[80%]">
        <SheetHeader>
          <SheetTitle className="text-left">Carrinho</SheetTitle>
        </SheetHeader>
        <div className="flex h-full flex-col py-5">
          <div className="flex-auto">
            {products.map((product) => (
              <CartProductItem key={product.id} product={product} />
            ))}
          </div>
          <Card className="mb-6">
            <CardContent className="p-5">
              <div className="flex justify-between">
                <p className="text-sm text-muted-foreground">Total</p>
                <p className="text-sm font-semibold">
                  {FormatMonetaryValue(total)}
                </p>
              </div>
            </CardContent>
          </Card>
          <Button
            className="w-full rounded-full"
            onClick={() => handleSendMessage()}
          >
            Finalizar pedido
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
