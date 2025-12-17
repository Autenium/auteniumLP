import { ArrowUpRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  category: string;
  image: string;
  index: number;
}

const ProductCard = ({ title, category, image, index }: ProductCardProps) => {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-card animate-fade-up opacity-0"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <span className="text-xs tracking-widest uppercase text-jade mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {category}
        </span>
        <div className="flex items-end justify-between">
          <h3 className="font-display text-2xl text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {title}
          </h3>
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 hover:scale-110 cursor-pointer">
            <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
          </div>
        </div>
      </div>

      {/* Default Label */}
      <div className="absolute bottom-6 left-6 group-hover:opacity-0 transition-opacity duration-300">
        <span className="text-xs tracking-widest uppercase text-muted-foreground">
          {category}
        </span>
        <h3 className="font-display text-xl text-foreground">{title}</h3>
      </div>
    </div>
  );
};

const Products = () => {
  const products = [
    {
      title: "Essência Natural",
      category: "Fragrâncias",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=750&fit=crop",
    },
    {
      title: "Coleção Orgânica",
      category: "Skincare",
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=750&fit=crop",
    },
    {
      title: "Linha Premium",
      category: "Acessórios",
      image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&h=750&fit=crop",
    },
    {
      title: "Edição Limitada",
      category: "Especiais",
      image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&h=750&fit=crop",
    },
  ];

  return (
    <section id="produtos" className="py-24 md:py-32 bg-background relative">
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-sm tracking-widest uppercase text-primary mb-4 block animate-fade-up opacity-0">
            Nossa Coleção
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 animate-fade-up opacity-0 delay-100">
            Produtos que
            <br />
            <span className="italic text-primary">contam histórias</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed animate-fade-up opacity-0 delay-200">
            Cada produto em nossa coleção é cuidadosamente selecionado para oferecer 
            a melhor experiência em qualidade e design.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.title} {...product} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-up opacity-0 delay-500">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all group"
          >
            Ver catálogo completo
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
