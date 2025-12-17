import { Bot, Sparkles, Wrench, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SolutionCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  icon: React.ElementType;
  index: number;
  highlighted?: boolean;
}

const SolutionCard = ({ title, description, price, features, icon: Icon, index, highlighted }: SolutionCardProps) => {
  return (
    <div
      className={`relative p-8 rounded-3xl animate-fade-up opacity-0 transition-all duration-500 hover:-translate-y-2 ${
        highlighted 
          ? "bg-primary text-primary-foreground shadow-glow" 
          : "bg-card shadow-soft hover:shadow-elevated"
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-jade text-foreground text-xs font-medium rounded-full">
          Mais Popular
        </div>
      )}

      {/* Icon */}
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
        highlighted ? "bg-primary-foreground/20" : "bg-primary/10"
      }`}>
        <Icon className={`w-7 h-7 ${highlighted ? "text-primary-foreground" : "text-primary"}`} />
      </div>

      {/* Content */}
      <h3 className={`font-display text-2xl mb-2 ${highlighted ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h3>
      <p className={`text-sm mb-6 leading-relaxed ${highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
        {description}
      </p>

      {/* Price */}
      <div className="mb-6">
        <span className={`text-xs uppercase tracking-wider ${highlighted ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
          A partir de
        </span>
        <div className={`font-display text-4xl font-medium ${highlighted ? "text-primary-foreground" : "text-foreground"}`}>
          {price}
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${highlighted ? "text-jade" : "text-primary"}`} />
            <span className={`text-sm ${highlighted ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button 
        variant={highlighted ? "secondary" : "outline"} 
        className="w-full group"
        asChild
      >
        <a href="#contato">
          Solicitar Proposta
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </Button>
    </div>
  );
};

const Products = () => {
  const solutions = [
    {
      title: "Chatbot com IA",
      description: "Atendimento automatizado inteligente para seu negócio. Respostas rápidas e personalizadas 24/7.",
      price: "R$ 799,90",
      icon: Bot,
      features: [
        "IA conversacional avançada",
        "Integração com WhatsApp",
        "Respostas personalizadas",
        "Relatórios de atendimento",
        "Treinamento da equipe incluso",
      ],
    },
    {
      title: "Assistente Virtual Pro",
      description: "Chatbot completo com integrações Google. Automatize tarefas e libere sua equipe para o estratégico.",
      price: "R$ 1.099,90",
      icon: Sparkles,
      highlighted: true,
      features: [
        "Tudo do plano anterior",
        "Integração Google Drive",
        "Automação Google Sheets",
        "Gestão de Gmail automatizada",
        "Sincronização com Calendar",
        "Suporte prioritário",
      ],
    },
    {
      title: "Projeto Personalizado",
      description: "Soluções sob medida para desafios únicos. Analisamos seu processo e criamos a automação ideal.",
      price: "R$ 990,90",
      icon: Wrench,
      features: [
        "Análise completa do processo",
        "Arquitetura personalizada",
        "Integrações customizadas",
        "Treinamento completo",
        "Documentação técnica",
        "Suporte dedicado",
      ],
    },
  ];

  return (
    <section id="solucoes" className="py-24 md:py-32 bg-background relative">
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-sm tracking-widest uppercase text-primary mb-4 block animate-fade-up opacity-0">
            Nossas Soluções
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 animate-fade-up opacity-0 delay-100">
            Automações que
            <br />
            <span className="italic text-primary">transformam negócios</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed animate-fade-up opacity-0 delay-200">
            Escolha a solução ideal para automatizar seus processos e capacitar sua equipe.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.title} {...solution} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-up opacity-0 delay-500">
          <p className="text-muted-foreground mb-4">
            Não sabe qual escolher? Vamos conversar sobre suas necessidades.
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all group"
          >
            Agendar consultoria gratuita
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
