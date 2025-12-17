import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-background to-jade/10" />
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      
      {/* Decorative Shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-jade/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-khaki/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-primary/10 rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-up opacity-0">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Catálogo de Produtos Premium
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-foreground leading-[0.95] mb-6 animate-fade-up opacity-0 delay-100">
            Autenticidade em
            <br />
            <span className="text-primary italic">cada detalhe</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up opacity-0 delay-200">
            Descubra nossa coleção exclusiva de produtos que combinam qualidade excepcional 
            com design atemporal. Cada peça é selecionada pensando em você.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0 delay-300">
            <Button variant="hero" size="xl" asChild>
              <a href="#produtos">Explorar Produtos</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#sobre">Nossa História</a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 delay-500">
            <a
              href="#produtos"
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
