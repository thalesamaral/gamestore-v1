import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <>
      <>
      <div className="max-w-screen-xl mx-auto px-4 py-8 lg:py-28 gap-12 md:px-8">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl text-primary pb-20">Gamestore</h1>
          <div className="flex flex-col gap-2 justify-center">
            <Button variant="outline">
              <a href="http://localhost:3000/products">Cadastro de Produtos</a>
            </Button>
            <Button>
              <a href="http://localhost:3000/catalogo">Catálogo Público</a>
            </Button>
          </div>
        </div>
      </div>
    </>
    </>
  );
};

export default HomePage;
