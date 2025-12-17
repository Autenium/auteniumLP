import { Leaf, Award, Heart, Recycle } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Leaf,
      title: "100% Natural",
      description: "Ingredientes selecionados diretamente da natureza",
    },
    {
      icon: Award,
      title: "Qualidade Premium",
      description: "Certificações internacionais de excelência",
    },
    {
      icon: Heart,
      title: "Feito com Amor",
      description: "Cada produto é criado com dedicação artesanal",
    },
    {
      icon: Recycle,
      title: "Sustentável",
      description: "Comprometidos com o meio ambiente",
    },
  ];

  return (
    <section id="sobre" className="py-24 md:py-32 bg-jade/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      
      {/* Decorative Elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-khaki/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-jade/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative animate-fade-up opacity-0">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=1000&fit=crop"
                alt="Nossa história"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-card p-6 rounded-2xl shadow-elevated max-w-[200px]">
              <span className="font-display text-5xl text-primary font-medium">10+</span>
              <p className="text-muted-foreground text-sm mt-1">Anos de experiência no mercado</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-sm tracking-widest uppercase text-primary mb-4 block animate-fade-up opacity-0">
              Sobre Nós
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 animate-fade-up opacity-0 delay-100">
              Autenticidade é nossa
              <br />
              <span className="italic text-primary">essência</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 animate-fade-up opacity-0 delay-200">
              Na Autenium, acreditamos que cada produto deve contar uma história. 
              Nossa missão é trazer até você produtos que combinam a pureza da 
              natureza com a sofisticação do design contemporâneo.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 animate-fade-up opacity-0 delay-300">
              Fundada com a visão de criar experiências autênticas, nossa empresa 
              se destaca pela curadoria meticulosa de cada item em nosso catálogo, 
              garantindo qualidade excepcional em cada detalhe.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="animate-fade-up opacity-0"
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
