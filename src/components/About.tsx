import { Target, BookOpen, Cog, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Cog,
      title: "Automação Inteligente",
      description: "Processos otimizados com IA de última geração",
    },
    {
      icon: BookOpen,
      title: "Capacitação",
      description: "Sua equipe aprende a dominar cada ferramenta",
    },
    {
      icon: Target,
      title: "Propósito",
      description: "Soluções alinhadas aos objetivos do seu negócio",
    },
    {
      icon: Users,
      title: "Parceria",
      description: "Acompanhamento contínuo e suporte dedicado",
    },
  ];

  const steps = [
    { number: "01", title: "Diagnóstico", description: "Analisamos seus processos e identificamos oportunidades" },
    { number: "02", title: "Desenvolvimento", description: "Criamos a automação personalizada para sua necessidade" },
    { number: "03", title: "Implementação", description: "Configuramos e integramos em seu ambiente" },
    { number: "04", title: "Capacitação", description: "Treinamos sua equipe para autonomia total" },
  ];

  return (
    <section id="sobre" className="py-24 md:py-32 bg-jade/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      
      {/* Decorative Elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-khaki/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-jade/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-sm tracking-widest uppercase text-primary mb-4 block animate-fade-up opacity-0">
            Por que a Autenium?
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 animate-fade-up opacity-0 delay-100">
            Automação com propósito,
            <br />
            <span className="italic text-primary">ensino com estratégia</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed animate-fade-up opacity-0 delay-200">
            Não entregamos apenas ferramentas. Entregamos transformação. Cada automação 
            vem acompanhada de capacitação para que sua equipe tenha autonomia real.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm animate-fade-up opacity-0"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-3xl text-foreground text-center mb-12 animate-fade-up opacity-0">
            Como <span className="italic text-primary">trabalhamos</span>
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative animate-fade-up opacity-0"
                style={{ animationDelay: `${500 + index * 100}ms` }}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-gradient-to-r from-primary/30 to-transparent" />
                )}
                
                <div className="relative z-10">
                  <span className="font-display text-5xl text-primary/20 font-medium block mb-2">
                    {step.number}
                  </span>
                  <h4 className="font-display text-xl text-foreground mb-2">{step.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="max-w-2xl mx-auto text-center mt-20 animate-fade-up opacity-0 delay-500">
          <blockquote className="font-display text-2xl md:text-3xl text-foreground italic leading-relaxed">
            "Tecnologia que entende pessoas. Automação que liberta potencial."
          </blockquote>
          <p className="text-primary mt-4 font-medium">— Equipe Autenium</p>
        </div>
      </div>
    </section>
  );
};

export default About;
