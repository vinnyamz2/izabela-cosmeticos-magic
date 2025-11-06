import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Produtos = () => {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const products = [
    {
      name: "Shampoo Hidratante Premium",
      price: "R$ 89,90",
      description: "Hidratação profunda e brilho natural para todos os tipos de cabelo",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500",
      benefits: ["Hidratação", "Brilho", "Maciez"],
      category: "cabelos",
    },
    {
      name: "Condicionador Reparador",
      price: "R$ 79,90",
      description: "Repara pontas duplas e fortalece os fios danificados",
      image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500",
      benefits: ["Reparação", "Fortalecimento", "Maciez"],
      category: "cabelos",
    },
    {
      name: "Máscara Capilar Reconstrução",
      price: "R$ 99,90",
      description: "Tratamento intensivo para cabelos muito danificados",
      image: "https://images.unsplash.com/photo-1526045478516-99145907023c?w=500",
      benefits: ["Reconstrução", "Força", "Vitalidade"],
      category: "cabelos",
    },
    {
      name: "Sérum Facial Vitamina C",
      price: "R$ 129,90",
      description: "Clareamento, proteção antioxidante e rejuvenescimento da pele",
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500",
      benefits: ["Clareamento", "Anti-idade", "Proteção"],
      category: "pele",
    },
    {
      name: "Creme Facial Noturno",
      price: "R$ 119,90",
      description: "Hidratação noturna profunda e regeneração celular",
      image: "https://images.unsplash.com/photo-1556228852-80a00282d0ae?w=500",
      benefits: ["Regeneração", "Hidratação", "Anti-idade"],
      category: "pele",
    },
    {
      name: "Água Micelar Purificante",
      price: "R$ 69,90",
      description: "Remove maquiagem e impurezas sem agredir a pele",
      image: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=500",
      benefits: ["Limpeza", "Suavidade", "Hidratação"],
      category: "pele",
    },
    {
      name: "Creme Corporal Nutritivo",
      price: "R$ 65,90",
      description: "Nutrição intensa e aroma suave para pele macia o dia todo",
      image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=500",
      benefits: ["Nutrição", "Hidratação", "Perfume"],
      category: "corpo",
    },
    {
      name: "Esfoliante Corporal Revitalizante",
      price: "R$ 59,90",
      description: "Remove células mortas e renova a pele",
      image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=500",
      benefits: ["Esfoliação", "Renovação", "Maciez"],
      category: "corpo",
    },
    {
      name: "Óleo Corporal Hidratante",
      price: "R$ 89,90",
      description: "Hidratação luxuosa com óleo essenciais",
      image: "https://images.unsplash.com/photo-1583334345525-5ab44e30f14e?w=500",
      benefits: ["Hidratação", "Nutrição", "Brilho"],
      category: "corpo",
    },
    {
      name: "Perfume Floral Elegance",
      price: "R$ 159,90",
      description: "Fragrância sofisticada com notas florais e amadeiradas",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500",
      benefits: ["Durabilidade", "Elegância", "Sofisticação"],
      category: "perfumes",
    },
    {
      name: "Perfume Fresh Day",
      price: "R$ 139,90",
      description: "Aroma fresco e cítrico para o dia a dia",
      image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500",
      benefits: ["Frescor", "Leveza", "Durabilidade"],
      category: "perfumes",
    },
  ];

  const filteredProducts =
    selectedCategory === "todos"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleBuyClick = (productName: string) => {
    const message = `Olá Izabela! Tenho interesse no produto: ${productName}. Pode me dar mais informações?`;
    const whatsappUrl = `https://wa.me/5594984214990?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Header */}
        <section className="hero-gradient grain-texture py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-primary mb-4 md:text-5xl animate-fade-in">
              Catálogo de Produtos
            </h1>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto animate-slide-up">
              Escolha os produtos ideais para o seu cuidado pessoal
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Category Tabs */}
            <Tabs defaultValue="todos" className="mb-12" onValueChange={setSelectedCategory}>
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8 h-auto">
                <TabsTrigger value="todos" className="py-3">Todos</TabsTrigger>
                <TabsTrigger value="cabelos" className="py-3">Cabelos</TabsTrigger>
                <TabsTrigger value="pele" className="py-3">Pele</TabsTrigger>
                <TabsTrigger value="corpo" className="py-3">Corpo</TabsTrigger>
                <TabsTrigger value="perfumes" className="py-3">Perfumes</TabsTrigger>
              </TabsList>

              <TabsContent value={selectedCategory}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product, index) => (
                    <ProductCard
                      key={index}
                      {...product}
                      onBuyClick={() => handleBuyClick(product.name)}
                    />
                  ))}
                </div>

                {filteredProducts.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">
                      Nenhum produto encontrado nesta categoria.
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>

            {/* CTA */}
            <div className="mt-16 text-center bg-muted/30 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Não encontrou o que procura?
              </h3>
              <p className="text-foreground/80 mb-6">
                Entre em contato comigo e vou te ajudar a encontrar o produto perfeito!
              </p>
              <WhatsAppButton
                phoneNumber="5594984214990"
                message="Olá Izabela! Preciso de ajuda para escolher um produto."
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton phoneNumber="5594984214990" variant="floating" />
    </div>
  );
};

export default Produtos;
