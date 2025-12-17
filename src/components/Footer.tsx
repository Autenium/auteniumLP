import logoAutenium from "@/assets/logo-autenium.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    solucoes: ["Chatbot com IA", "Assistente Virtual Pro", "Projetos Personalizados"],
    empresa: ["Sobre Nós", "Como Funciona", "Blog", "Carreiras"],
    suporte: ["Contato", "FAQ", "Documentação", "Status"],
  };

  return (
    <footer className="bg-foreground text-primary-foreground py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-5" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src={logoAutenium} 
                alt="Autenium Logo" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/70 leading-relaxed mb-4 max-w-sm">
              Mais que processos. Pessoas preparadas. Automatizamos com propósito 
              e ensinamos com estratégia.
            </p>
            <p className="text-jade font-display text-lg italic">
              "Tecnologia que entende pessoas."
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-display text-lg mb-4">Soluções</h4>
            <ul className="space-y-3">
              {links.solucoes.map((link) => (
                <li key={link}>
                  <a
                    href="#solucoes"
                    className="text-primary-foreground/70 hover:text-jade transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-lg mb-4">Empresa</h4>
            <ul className="space-y-3">
              {links.empresa.map((link) => (
                <li key={link}>
                  <a
                    href="#sobre"
                    className="text-primary-foreground/70 hover:text-jade transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display text-lg mb-4">Suporte</h4>
            <ul className="space-y-3">
              {links.suporte.map((link) => (
                <li key={link}>
                  <a
                    href="#contato"
                    className="text-primary-foreground/70 hover:text-jade transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} Autenium. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-primary-foreground/50 hover:text-jade transition-colors text-sm">
              Termos de Uso
            </a>
            <a href="#" className="text-primary-foreground/50 hover:text-jade transition-colors text-sm">
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
