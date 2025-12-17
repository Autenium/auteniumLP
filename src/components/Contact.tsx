import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "contato@autenium.com" },
    { icon: Phone, label: "Telefone", value: "+55 (11) 99999-9999" },
    { icon: MapPin, label: "Endereço", value: "São Paulo, SP - Brasil" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <section id="contato" className="py-24 md:py-32 bg-background relative">
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-sm tracking-widest uppercase text-primary mb-4 block animate-fade-up opacity-0">
              Contato
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 animate-fade-up opacity-0 delay-100">
              Vamos conversar
              <br />
              <span className="italic text-primary">sobre seu projeto</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 animate-fade-up opacity-0 delay-200">
              Estamos sempre prontos para ouvir você. Entre em contato para 
              descobrir como podemos ajudar a transformar suas ideias em realidade.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 animate-fade-up opacity-0"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs tracking-widest uppercase text-muted-foreground block">
                      {item.label}
                    </span>
                    <span className="text-foreground font-medium">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 animate-fade-up opacity-0 delay-500">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-up opacity-0 delay-200">
            <form
              onSubmit={handleSubmit}
              className="bg-card p-8 md:p-10 rounded-3xl shadow-soft"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground mb-2 block"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground mb-2 block"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground mb-2 block"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    placeholder="Como podemos ajudar?"
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
