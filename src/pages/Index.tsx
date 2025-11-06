import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ProductCard } from "@/components/ProductCard";
import { TestimonialChat } from "@/components/TestimonialChat";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const Index = () => {
  // Sample products (você pode adicionar mais depois)
  const featuredProducts = [
    {
      name: "Shampoo Hidratante Premium",
      price: "R$ 89,90",
      description: "Hidratação profunda e brilho natural para todos os tipos de cabelo",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500",
      benefits: ["Hidratação", "Brilho", "Maciez"],
      category: "Cabelos",
    },
    {
      name: "Sérum Facial Vitamina C",
      price: "R$ 129,90",
      description: "Clareamento, proteção antioxidante e rejuvenescimento da pele",
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500",
      benefits: ["Clareamento", "Anti-idade", "Proteção"],
      category: "Pele",
    },
    {
      name: "Creme Corporal Nutritivo",
      price: "R$ 65,90",
      description: "Nutrição intensa e aroma suave para pele macia o dia todo",
      image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=500",
      benefits: ["Nutrição", "Hidratação", "Perfume"],
      category: "Corpo",
    },
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      message: "Adorei o atendimento da Izabela! Ela me ajudou a escolher os produtos certos para meu tipo de pele. Minha pele nunca esteve tão bonita! 💚",
      rating: 5,
    },
    {
      name: "Ana Costa",
      message: "Produtos originais, entrega rápida e preço justo. Super recomendo! A Izabela é muito atenciosa e sempre tira minhas dúvidas.",
      rating: 5,
    },
    {
      name: "Juliana Santos",
      message: "Comprei o shampoo e já vi resultados em uma semana! Meu cabelo está mais hidratado e brilhoso. Voltarei a comprar com certeza!",
      rating: 5,
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

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4 md:text-4xl">
                O que dizem as clientes
              </h2>
              <p className="text-muted-foreground">
                Depoimentos reais de quem já comprou comigo
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialChat key={index} {...testimonial} />
              ))}
            </div>

            <div className="text-center mt-12">
              <NavLink to="/depoimentos">
                <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                  Ver mais depoimentos
                </Button>
              </NavLink>
            </div>
          </div>
        </section>

        <FAQ />
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton phoneNumber="5594984214990" variant="floating" />
    </div>
  );
};

export default Index;
