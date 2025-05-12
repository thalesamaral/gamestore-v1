"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PanelTopClose, Save } from "lucide-react";
import { CreateProduct } from "@/actions/products/create-product";
import { FormatMonetaryValue } from "@/lib/currency";

interface FormProductProps {
  // defaultValues?: TransactionSchemaType;
  // productId?: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  price: z
    .number({
      required_error: "O valor é obrigatório.",
    })
    .positive({
      message: "O valor deve ser positivo.",
    }),
});

export function FormProduct({
  // defaultValues,
  // productId,
  open,
  setOpen,
}: FormProductProps) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 50,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    try {
      return CreateProduct(values);
    } catch (error) {
      console.error(error);
    } finally {
      setOpen(false);
      form.reset();
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome do produto</FormLabel>
              <FormControl>
                <Input placeholder="Digite o nome..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Input placeholder="Digite a descrição..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preço</FormLabel>
              <FormControl>
                <Input
                  placeholder="R$ 3.000,00"
                  type="text"
                  {...field}
                  value={FormatMonetaryValue(field.value)}
                  onChange={(e) => {
                    const inputValue = e.target.value.replace(/[^\d]/g, "");
                    const numericValue = Number(inputValue) / 100;
                    field.onChange(numericValue);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <Button type="submit">Submit</Button> */}
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
            Salvar
          </Button>
        </div>
      </form>
    </Form>
  );
}
