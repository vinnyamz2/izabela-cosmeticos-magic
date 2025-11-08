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
    // TOCTUS - Tratamentos Profissionais
    {
      name: "Toctus - Cauterização Capilar",
      description: "Tratamento intensivo que sela as cutículas, recupera a fibra capilar e devolve o brilho e a maciez aos fios. Resultado profissional desde a primeira aplicação.",
      image: new URL("@/assets/products/produto-01.jpeg", import.meta.url).href,
      benefits: ["Selagem", "Recuperação", "Brilho"],
      category: "tratamentos",
    },
    {
      name: "Toctus - Reposição Lipídica",
      description: "Repõe a massa lipídica dos fios, promovendo hidratação profunda e nutrição. Ideal para cabelos secos e ressecados que precisam recuperar a vitalidade.",
      image: new URL("@/assets/products/produto-02.jpeg", import.meta.url).href,
      benefits: ["Reposição", "Nutrição", "Hidratação"],
      category: "tratamentos",
    },
    {
      name: "Toctus - Reconstrução Absoluta",
      description: "Sistema completo de reconstrução para cabelos danificados. Reconstrói a fibra capilar desde o córtex, devolvendo força e resistência aos fios.",
      image: new URL("@/assets/products/produto-03.jpeg", import.meta.url).href,
      benefits: ["Reconstrução", "Força", "Resistência"],
      category: "tratamentos",
    },
    {
      name: "Toctus - Matizador Professional",
      description: "Neutraliza tons indesejados e realça a cor dos cabelos loiros, grisalhos ou descoloridos. Resultado profissional com brilho e saúde.",
      image: new URL("@/assets/products/produto-04.jpeg", import.meta.url).href,
      benefits: ["Matização", "Brilho", "Neutralização"],
      category: "tratamentos",
    },
    {
      name: "Toctus - Botox Capilar",
      description: "Tratamento de rejuvenescimento capilar que preenche, hidrata e restaura os fios. Reduz o volume e proporciona efeito liso prolongado.",
      image: new URL("@/assets/products/produto-05.jpeg", import.meta.url).href,
      benefits: ["Rejuvenescimento", "Preenchimento", "Efeito Liso"],
      category: "tratamentos",
    },
    {
      name: "Toctus - Smoothing Treatment",
      description: "Alisamento térmico de alta performance que reduz o volume e proporciona fios alinhados com movimento natural e brilho intenso.",
      image: new URL("@/assets/products/produto-06.jpeg", import.meta.url).href,
      benefits: ["Alisamento", "Redução de Volume", "Brilho"],
      category: "tratamentos",
    },
    {
      name: "Toctus - Cronograma Capilar Professional",
      description: "Sistema completo de tratamento com hidratação, nutrição e reconstrução. Devolve vida, força e beleza aos cabelos.",
      image: new URL("@/assets/products/produto-07.jpeg", import.meta.url).href,
      benefits: ["Hidratação", "Nutrição", "Reconstrução"],
      category: "tratamentos",
    },
    {
      name: "Toctus - Máscara Hidratação Aromacqua",
      description: "Proteção e hidratação intensa com óleos essenciais. Cabelos selados, saudáveis e com brilho intenso. Perfeita para todos os tipos de cabelo.",
      image: new URL("@/assets/products/produto-31.jpeg", import.meta.url).href,
      benefits: ["Proteção", "Hidratação", "Brilho"],
      category: "hidratacao",
    },
    {
      name: "Toctus - ProResgate Multi Tratamento",
      description: "Restauração profunda para cabelos danificados e quimicamente tratados. Fios livres de pontas duplas, limpeza suave e sistema completo de reparação absoluta.",
      image: new URL("@/assets/products/produto-32.jpeg", import.meta.url).href,
      benefits: ["Restauração", "Reparação", "Reconstrução"],
      category: "tratamentos",
    },

    // TOCTUS - Nano Carbon System
    {
      name: "Toctus - Nano Carbon Intensive Repair",
      description: "Com 21 aminoácidos essenciais e nanoqueratina, atua desde o córtex até a cutícula, reparando microlesões e combatendo a porosidade. Devolve força, brilho e maciez.",
      image: new URL("@/assets/products/produto-35.jpeg", import.meta.url).href,
      benefits: ["Reparação Profunda", "21 Aminoácidos", "Nanoqueratina"],
      category: "tratamentos",
    },
    {
      name: "Toctus - Nano Carbon System Linha Completa",
      description: "Restauração profunda da fibra capilar. Desenvolvida para reconstruir, preencher e repor massa dos fios danificados por processos químicos, térmicos e ambientais.",
      image: new URL("@/assets/products/produto-36.jpeg", import.meta.url).href,
      benefits: ["Restauração", "Reconstrução", "Reposição"],
      category: "tratamentos",
    },

    // DORNELAS - Progressivas
    {
      name: "Dornelas - Progressiva Sem Formol",
      description: "Alisamento profissional sem formol com durabilidade prolongada. Fios alinhados, saudáveis e com movimento natural.",
      image: new URL("@/assets/products/produto-08.jpeg", import.meta.url).href,
      benefits: ["Sem Formol", "Alisamento", "Durabilidade"],
      category: "alisamento",
    },
    {
      name: "Dornelas - Sistema de Alisamento Professional",
      description: "Tecnologia avançada de alisamento que respeita a estrutura dos fios. Resultado liso impecável com brilho e saúde.",
      image: new URL("@/assets/products/produto-09.jpeg", import.meta.url).href,
      benefits: ["Alisamento", "Saúde", "Brilho"],
      category: "alisamento",
    },
    {
      name: "Dornelas - Finalizador Termo Ativado",
      description: "Finalizador térmico que proporciona alinhamento perfeito, reduz o frizz e prolonga o efeito liso. Proteção térmica inclusa.",
      image: new URL("@/assets/products/produto-10.jpeg", import.meta.url).href,
      benefits: ["Proteção Térmica", "Anti-Frizz", "Alinhamento"],
      category: "alisamento",
    },

    // FLUENCE - Cronograma Capilar
    {
      name: "Fluence - Kit Cronograma Completo",
      description: "Um tratamento completo para o seu cabelo. Sistema de hidratação, nutrição e reconstrução que restaura a saúde dos fios. Inclui shampoo purificante e máscaras especializadas.",
      image: new URL("@/assets/products/produto-33.jpeg", import.meta.url).href,
      benefits: ["Hidratação", "Nutrição", "Reconstrução"],
      category: "tratamentos",
    },
    {
      name: "Fluence - Cronograma Hidratação",
      description: "Máscara de hidratação profunda enriquecida com óleo de coco e queratina. Devolve a umidade natural dos fios.",
      image: new URL("@/assets/products/produto-11.jpeg", import.meta.url).href,
      benefits: ["Hidratação", "Maciez", "Brilho"],
      category: "hidratacao",
    },
    {
      name: "Fluence - Cronograma Nutrição",
      description: "Nutrição intensa com óleos vegetais que repõem lipídios essenciais. Cabelos nutridos, fortes e revitalizados.",
      image: new URL("@/assets/products/produto-12.jpeg", import.meta.url).href,
      benefits: ["Nutrição", "Força", "Vitalidade"],
      category: "hidratacao",
    },
    {
      name: "Fluence - Cronograma Reconstrução",
      description: "Reconstrução profunda com proteínas e queratina. Reconstrói a fibra capilar danificada por processos químicos.",
      image: new URL("@/assets/products/produto-13.jpeg", import.meta.url).href,
      benefits: ["Reconstrução", "Proteínas", "Queratina"],
      category: "tratamentos",
    },

    // FLUENCE - Monovin (Crescimento)
    {
      name: "Fluence - Monovin Linha Completa",
      description: "Ver cabelo caindo todo dia dói! É mais que estética, é autoestima. Monovin trata da raiz ao fio, devolvendo força, crescimento e segurança. Shampoo, máscara, tônico e suplemento.",
      image: new URL("@/assets/products/produto-34.jpeg", import.meta.url).href,
      benefits: ["Crescimento", "Fortalecimento", "Tratamento Completo"],
      category: "crescimento",
    },
    {
      name: "Fluence - Monovin Shampoo Pro A e B5",
      description: "Estimula o crescimento capilar com vitaminas A e B5. Fortalece os fios desde a raiz e promove densidade capilar.",
      image: new URL("@/assets/products/produto-14.jpeg", import.meta.url).href,
      benefits: ["Crescimento", "Vitaminas", "Fortalecimento"],
      category: "crescimento",
    },
    {
      name: "Fluence - Monovin Máscara Capilar",
      description: "Máscara intensiva com óleo de rícino que fortalece e promove o crescimento saudável dos fios. Ação profunda na raiz.",
      image: new URL("@/assets/products/produto-15.jpeg", import.meta.url).href,
      benefits: ["Fortalecimento", "Crescimento", "Densidade"],
      category: "crescimento",
    },
    {
      name: "Fluence - Monovin Tônico Minoxidil 5%",
      description: "Tônico capilar com minoxidil que estimula o crescimento e reduz a queda. Aplicação prática para uso diário.",
      image: new URL("@/assets/products/produto-16.jpeg", import.meta.url).href,
      benefits: ["Anti-Queda", "Crescimento", "Estimulante"],
      category: "crescimento",
    },
    {
      name: "Fluence - Monovin Suplemento Capilar",
      description: "Suplemento em cápsulas com vitaminas e minerais essenciais para o crescimento capilar. Tratamento de dentro para fora.",
      image: new URL("@/assets/products/produto-17.jpeg", import.meta.url).href,
      benefits: ["Suplementação", "Vitaminas", "Crescimento"],
      category: "crescimento",
    },

    // Tratamentos Adicionais
    {
      name: "Kit Home Care Manutenção",
      description: "Kit completo para manutenção dos tratamentos em casa. Prolonga os resultados profissionais com produtos de alta performance.",
      image: new URL("@/assets/products/produto-18.jpeg", import.meta.url).href,
      benefits: ["Manutenção", "Durabilidade", "Praticidade"],
      category: "tratamentos",
    },
    {
      name: "Protocolo Restauração Intensiva",
      description: "Protocolo profissional de restauração para cabelos extremamente danificados. Sistema de múltiplas etapas para recuperação total.",
      image: new URL("@/assets/products/produto-19.jpeg", import.meta.url).href,
      benefits: ["Restauração", "Recuperação", "Profissional"],
      category: "tratamentos",
    },
    {
      name: "Sistema Anti-Oleosidade",
      description: "Controla a oleosidade excessiva do couro cabeludo sem ressecar os fios. Equilíbrio perfeito para raiz oleosa e pontas secas.",
      image: new URL("@/assets/products/produto-20.jpeg", import.meta.url).href,
      benefits: ["Controle", "Equilíbrio", "Regulação"],
      category: "tratamentos",
    },
    {
      name: "Ativador de Cachos Natural",
      description: "Define e modela cachos com movimento natural. Reduz o frizz e proporciona cachos definidos e hidratados.",
      image: new URL("@/assets/products/produto-21.jpeg", import.meta.url).href,
      benefits: ["Definição", "Anti-Frizz", "Hidratação"],
      category: "hidratacao",
    },
    {
      name: "Neutralizante Pós-Química",
      description: "Neutraliza resíduos químicos após processos de coloração, descoloração ou alisamento. Estabiliza o pH e protege os fios.",
      image: new URL("@/assets/products/produto-22.jpeg", import.meta.url).href,
      benefits: ["Neutralização", "Proteção", "Estabilização"],
      category: "tratamentos",
    },
    {
      name: "Ampola Recuperação Elástica",
      description: "Ampola intensiva que recupera a elasticidade natural dos fios. Ideal para cabelos que perderam resistência e força.",
      image: new URL("@/assets/products/produto-23.jpeg", import.meta.url).href,
      benefits: ["Elasticidade", "Resistência", "Recuperação"],
      category: "tratamentos",
    },
    {
      name: "Selante de Cutículas Térmico",
      description: "Sela as cutículas com proteção térmica. Alinha os fios e proporciona brilho espelhado duradouro.",
      image: new URL("@/assets/products/produto-24.jpeg", import.meta.url).href,
      benefits: ["Selagem", "Brilho", "Proteção"],
      category: "tratamentos",
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
                <TabsTrigger value="tratamentos" className="py-3">Tratamentos</TabsTrigger>
                <TabsTrigger value="hidratacao" className="py-3">Hidratação</TabsTrigger>
                <TabsTrigger value="alisamento" className="py-3">Alisamento</TabsTrigger>
                <TabsTrigger value="crescimento" className="py-3">Crescimento</TabsTrigger>
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
