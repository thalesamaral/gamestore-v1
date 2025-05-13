import { DeleteProduct } from "@/actions/products/delete-product";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Product } from "@prisma/client";

interface ProductAlertDeleteProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  product: Product;
}

export function ProductAlertDelete({
  open,
  setOpen,
  product,
}: ProductAlertDeleteProps) {
  async function HandleDelete() {
    await DeleteProduct({ id: product.id });
    setOpen(!open);
  }

  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Deseja excluír o produto {product.name}?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Esta ação não pode ser desfeita. Isso excluirá permanentemente seu
            produto e removerá seus dados de nossos servidores.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setOpen(!open)}>
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction onClick={() => HandleDelete()}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
