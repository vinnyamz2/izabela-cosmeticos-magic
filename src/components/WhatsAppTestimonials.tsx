import { WhatsAppTestimonial } from "./WhatsAppTestimonial";
import { WhatsAppButton } from "./WhatsAppButton";
import { MessageCircle } from "lucide-react";

export const WhatsAppTestimonials = () => {
  const testimonials = [
    {
      clientName: "Maria Silva",
      clientCity: "São Paulo - SP",
      clientAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
      consultantName: "Izabela Mendes",
      consultantAvatar: "/src/assets/izabela-logo-green.png",
      rating: 5,
      messages: [
        {
          sender: "consultant" as const,
          text: "Oi Maria! Como você está gostando do Shampoo Hidratante? 😊",
          time: "14:23",
        },
        {
          sender: "client" as const,
          text: "Oi Izabela! Estou amando! Meu cabelo nunca esteve tão macio e brilhoso 😍✨",
          time: "14:25",
        },
        {
          sender: "client" as const,
          text: "Olha, vou gravar um áudio pra você ouvir minha alegria! 💚",
          time: "14:26",
        },
        {
          sender: "client" as const,
          audioUrl: "https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav",
          audioDuration: "0:17",
          time: "14:27",
        },
      ],
    },
    {
      clientName: "Ana Costa",
      clientCity: "Rio de Janeiro - RJ",
      clientAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
      consultantName: "Izabela Mendes",
      consultantAvatar: "/src/assets/izabela-logo-green.png",
      rating: 5,
      messages: [
        {
          sender: "consultant" as const,
          text: "Oi Ana! Tudo bem? Como foi com o Sérum de Vitamina C? 💛",
          time: "10:15",
        },
        {
          sender: "client" as const,
          text: "Izabela, to impressionada! Minha pele tá outra em apenas 2 semanas! 🤩",
          time: "10:18",
        },
        {
          sender: "client" as const,
          text: "Já indiquei pra 3 amigas! Produtos originais mesmo, entrega rápida e preço justo 👏",
          time: "10:19",
        },
        {
          sender: "consultant" as const,
          text: "Que felicidade ouvir isso! Obrigada pela confiança 💚🙏",
          time: "10:20",
        },
      ],
    },
    {
      clientName: "Juliana Santos",
      clientCity: "Belo Horizonte - MG",
      clientAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Juliana",
      consultantName: "Izabela Mendes",
      consultantAvatar: "/src/assets/izabela-logo-green.png",
      rating: 5,
      messages: [
        {
          sender: "consultant" as const,
          text: "Oi Ju! E aí, gostou do Creme Corporal? 🌸",
          time: "16:42",
        },
        {
          sender: "client" as const,
          text: "Gostei é pouco, Iza! AMEI! 😍 O cheiro é maravilhoso e deixa a pele super hidratada o dia todo",
          time: "16:45",
        },
        {
          sender: "client" as const,
          audioUrl: "https://www2.cs.uic.edu/~i101/SoundFiles/PinkPanther30.wav",
          audioDuration: "0:22",
          time: "16:46",
        },
        {
          sender: "consultant" as const,
          text: "Fico muito feliz! Você merece os melhores produtos 💚✨",
          time: "16:48",
        },
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4 md:text-4xl">
            💬 Conversas Reais com Clientes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Veja o que minhas clientes dizem sobre os produtos Dornelas
          </p>
          <p className="text-sm text-secondary font-semibold mt-2">
            💚 Depoimentos reais de clientes satisfeitas
          </p>
        </div>

        {/* Carrossel horizontal */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="snap-center flex-shrink-0">
                <WhatsAppTestimonial {...testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <WhatsAppButton
            phoneNumber="5594984214990"
            className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="font-semibold">Fale comigo no WhatsApp 💬</span>
          </WhatsAppButton>
          <p className="text-sm text-muted-foreground mt-4">
            Respondo em minutos! Atendimento personalizado para você 💚
          </p>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
};
