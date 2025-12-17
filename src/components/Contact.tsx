import { Mail, Phone, MapPin, Send, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message and open chat
    const phone = "5519992546004"; // company number in international format
    const parts = [];
    if (formData.name) parts.push(`Nome: ${formData.name}`);
    if (formData.email) parts.push(`Email: ${formData.email}`);
    if (formData.company) parts.push(`Empresa: ${formData.company}`);
    if (formData.message) parts.push(`Mensagem: ${formData.message}`);
    const message = `Olá! Tenho interesse. ${parts.join(' | ')}`;
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${phone}?text=${encoded}`;
    window.open(url, "_blank");
    toast({
      title: "Abrindo WhatsApp",
      description: "Sua mensagem será aberta no WhatsApp para confirmação e envio.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "autenium@gmail.com", href: "mailto:autenium@gmail.com" },
    { icon: Phone, label: "WhatsApp", value: "+55 (19) 99254-6004", href: "https://api.whatsapp.com/send?phone=5519992546004&text=Ol%C3%A1%21+Gostaria+de+informa%C3%A7%C3%B5es" },
    { icon: MapPin, label: "Localização", value: "Brasil - Atendimento Remoto", href: "https://www.google.com/maps/search/?api=1&query=Brasil+Atendimento+Remoto" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/autenium/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/autenium/?viewAsMember=true", label: "LinkedIn" },
    { icon: MessageCircle, href: "https://api.whatsapp.com/send?phone=5519992546004&text=Olá%21+Gostaria+de+solicitar+um+orçamento%21", label: "WhatsApp" },
  ];

  return (
    <section id="contato" className="py-24 md:py-32 bg-background relative">
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-sm tracking-widest uppercase text-primary mb-4 block animate-fade-up opacity-0">
              Vamos Conversar
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 animate-fade-up opacity-0 delay-100">
              Pronto para
              <br />
              <span className="italic text-primary">automatizar?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 animate-fade-up opacity-0 delay-200">
              Agende uma consultoria gratuita. Vamos entender seu negócio e 
              mostrar como a automação pode transformar seus resultados.
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
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                        target={/^https?:\/\//.test(item.href) ? "_blank" : undefined}
                        rel={/^https?:\/\//.test(item.href) ? "noopener noreferrer" : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-foreground font-medium">{item.value}</span>
                    )}
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
              <h3 className="font-display text-2xl text-foreground mb-6">
                Solicite uma proposta
              </h3>
              <div className="space-y-5">
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
                    placeholder="Seu nome"
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
                    htmlFor="company"
                    className="text-sm font-medium text-foreground mb-2 block"
                  >
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="Nome da empresa"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground mb-2 block"
                  >
                    Qual seu desafio?
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    placeholder="Descreva o processo que deseja automatizar..."
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
