import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (  
    <>
      <div className="max-w-screen-xl mx-auto px-4 py-8 lg:py-28 gap-12 md:px-8">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1>HomePage</h1>
          <Button><a href="http://localhost:3000/products">Lista de Produtos</a></Button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
