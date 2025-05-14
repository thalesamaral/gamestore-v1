import AddProductButton from "./add-product-button";

export function Header() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between md:items-center space-y-8 md:space-y-0">
        <h1 className="text-2xl">Lista de Produtos</h1>
        <div className="flex flex-col md:flex-row md:items-center justify-end gap-2">
          <AddProductButton />
        </div>
      </div>
    </>
  );
}
