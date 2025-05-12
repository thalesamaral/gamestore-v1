import { Form } from "react-hook-form";
import { Button } from "../ui/button";
import { PanelTopClose, Save } from "lucide-react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Product } from "@prisma/client";

interface FormProductProps {
  transactionId?: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function FormProduct({
  transactionId,
  open,
  setOpen,
}: FormProductProps) {
  const parsedData = defaultValues
    ? {
        ...defaultValues,
        date: new Date(defaultValues.date),
      }
    : {
        amount: 50,
        category: TransactionCategory.OTHER,
        date: new Date(),
        name: "",
        paymentMethod: TransactionPaymentMethod.PIX,
        type: TransactionType.EXPENSE,
      };
  const form = useForm<TransactionSchemaType>({
    resolver: zodResolver(TransactionSchema),
  });

  const onSubmit = async (data: Product) => {
    try {
      return await CreateProduct(data);
    } catch (error) {
      console.error(error);
    } finally {
      setOpen(false);
      form.reset();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome da transação</FormLabel>
              <FormControl>
                <Input placeholder="Digite o nome..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2 w-full justify-end">
          <Button
            type="button"
            variant="outline"
            onClick={() => setOpen(!open)}
          >
            <PanelTopClose size={16} />
            Cancelar
          </Button>
          <Button type="submit">
            <Save size={16} />
              Adicionar
          </Button>
        </div>
      </form>
    </Form>
  );
}
