import { ArrowDown, Bot, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Elements (section-only background color override) */}
      <div className="absolute inset-0 bg-[#fdf7eb]" />
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      
      {/* Decorative Shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-jade/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-khaki/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
          {/* Left: Text */}
          <div className="lg:w-1/2 text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-up opacity-0">
            <Zap className="w-4 h-4" />
            Automações Empresariais Inteligentes
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-foreground leading-[0.95] mb-6 animate-fade-up opacity-0 delay-100">
            Mais que processos.
            <br />
            <span className="text-primary italic">Pessoas preparadas.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up opacity-0 delay-200">
            Automatizamos seus processos com inteligência artificial e capacitamos 
            sua equipe para dominá-los. Automação com propósito, ensino com estratégia.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0 delay-300">
            <Button variant="hero" size="xl" asChild>
              <a href="#solucoes">Nossas Soluções</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#sobre">Como Funciona</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-16 animate-fade-up opacity-0 delay-400">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-primary mb-1">
                <Bot className="w-5 h-5" />
                <span className="font-display text-3xl font-medium">IA</span>
              </div>
              <span className="text-sm text-muted-foreground">Chatbots Inteligentes</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-primary mb-1">
                <Zap className="w-5 h-5" />
                <span className="font-display text-3xl font-medium">100%</span>
              </div>
              <span className="text-sm text-muted-foreground">Processos Otimizados</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-primary mb-1">
                <Users className="w-5 h-5" />
                <span className="font-display text-3xl font-medium">+</span>
              </div>
              <span className="text-sm text-muted-foreground">Equipes Capacitadas</span>
            </div>
          </div>

          </div>

          {/* Right: Image */}
          <div className="lg:w-1/2 flex justify-end">
            <img src="/src/assets/AlineAuten.png" alt="Aline Auten" className="w-80 max-w-full object-contain" />
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 delay-500">
            <a
              href="#solucoes"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <span className="text-xs tracking-widest uppercase">Scroll</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
