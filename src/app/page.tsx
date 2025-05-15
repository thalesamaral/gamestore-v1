import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 py-8 lg:py-28 gap-12 md:px-8">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl pb-8">HomePage</h1>
          <div className="flex gap-2 justify-center">
            <Button>
              <a href="http://localhost:3000/products">Cadastro de Produtos</a>
            </Button>
            <Button variant="destructive">
              <a href="http://localhost:3000/catalogo">Catálogo Público</a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
