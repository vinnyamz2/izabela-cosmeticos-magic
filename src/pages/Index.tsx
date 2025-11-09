import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ProductCard } from "@/components/ProductCard";
import { WhatsAppTestimonials } from "@/components/WhatsAppTestimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import produto1 from "@/assets/products/produto-01.jpeg";
import produto2 from "@/assets/products/produto-02.jpeg";
import produto3 from "@/assets/products/produto-03.jpeg";

const Index = () => {
  const featuredProducts = [
    {
      name: "Pro Resgate",
      description: "Tratamento intensivo para recuperação capilar profunda, devolvendo vida aos fios danificados",
      image: produto1,
      benefits: ["Recuperação", "Força", "Revitalização"],
      category: "Tratamento",
    },
    {
      name: "A Terrena",
      description: "Hidratação profunda com ativos naturais que transformam seus cabelos com maciez e brilho intenso",
      image: produto2,
      benefits: ["Hidratação", "Brilho", "Maciez"],
      category: "Hidratação",
    },
    {
      name: "Mãe Terra",
      description: "Nutrição completa com ingredientes naturais, trazendo saúde e vitalidade aos seus cabelos",
      image: produto3,
      benefits: ["Nutrição", "Vitalidade", "Naturalidade"],
      category: "Nutrição",
    },
  ];


  const handleBuyClick = (productName: string) => {
    const message = `Olá Izabela! Tenho interesse no produto: ${productName}. Pode me dar mais informações?`;
    const whatsappUrl = `https://wa.me/5594984214990?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />

        <AboutSection />

        {/* Featured Products */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4 md:text-4xl">
                Produtos em Destaque
              </h2>
              <p className="text-muted-foreground">
                Seleção especial dos produtos mais procurados
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {featuredProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  {...product}
                  onBuyClick={() => handleBuyClick(product.name)}
                />
              ))}
            </div>

            <div className="text-center">
              <NavLink to="/produtos">
                <Button size="lg" variant="outline" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                  Ver todos os produtos
                </Button>
              </NavLink>
            </div>
          </div>
        </section>

        {/* WhatsApp Style Testimonials */}
        <WhatsAppTestimonials />

        <FAQ />
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton phoneNumber="5594984214990" variant="floating" />
    </div>
  );
};

export default Index;
