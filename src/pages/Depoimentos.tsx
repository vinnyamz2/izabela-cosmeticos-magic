import { Navbar } from "@/components/Navbar";
import { TestimonialChat } from "@/components/TestimonialChat";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Star } from "lucide-react";

const Depoimentos = () => {
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
    {
      name: "Carla Oliveira",
      message: "A máscara capilar é simplesmente perfeita! Meu cabelo estava muito danificado e agora está lindo, macio e com muito brilho. Obrigada, Izabela!",
      rating: 5,
    },
    {
      name: "Patrícia Lima",
      message: "Comprei o sérum de vitamina C e estou vendo resultados incríveis! Minha pele está mais clara e uniforme. Recomendo demais!",
      rating: 5,
    },
    {
      name: "Fernanda Souza",
      message: "O creme corporal tem um cheiro maravilhoso e deixa a pele super macia. Estou viciada! E o atendimento da Izabela é nota 10!",
      rating: 5,
    },
    {
      name: "Beatriz Alves",
      message: "Já sou cliente há meses e não troco por nada! Produtos de qualidade, preço justo e a Izabela sempre disponível para ajudar. ❤️",
      rating: 5,
    },
    {
      name: "Renata Cardoso",
      message: "Recebi minha encomenda super rápido e bem embalada. Os produtos vieram lacrados e originais. Confiança total!",
      rating: 5,
    },
    {
      name: "Amanda Ferreira",
      message: "A água micelar é perfeita! Remove toda a maquiagem sem agredir a pele. Melhor compra que fiz!",
      rating: 5,
    },
    {
      name: "Camila Rocha",
      message: "O perfume que comprei é incrível! Durabilidade excelente e um cheiro sofisticado. A Izabela me ajudou a escolher e acertou em cheio!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Header */}
        <section className="hero-gradient grain-texture py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-primary mb-4 md:text-5xl animate-fade-in">
              Depoimentos das Clientes
            </h1>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-6 animate-slide-up">
              Veja o que as pessoas estão falando sobre os produtos e atendimento
            </p>
            
            {/* Rating Summary */}
            <div className="inline-flex items-center gap-3 bg-background/60 rounded-full px-6 py-3 card-shadow animate-scale-in">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-semibold text-primary">
                5.0 • Mais de 100 avaliações
              </span>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialChat key={index} {...testimonial} />
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center bg-muted/30 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Quer fazer parte dessa história?
              </h3>
              <p className="text-foreground/80 mb-6">
                Entre em contato e descubra os produtos perfeitos para você!
              </p>
              <WhatsAppButton
                phoneNumber="5594984214990"
                message="Olá Izabela! Vi os depoimentos e quero conhecer os produtos!"
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

export default Depoimentos;
