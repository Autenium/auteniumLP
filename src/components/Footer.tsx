const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    produtos: ["Fragrâncias", "Skincare", "Acessórios", "Especiais"],
    empresa: ["Sobre Nós", "Nossa História", "Sustentabilidade", "Carreiras"],
    suporte: ["Contato", "FAQ", "Envio", "Devoluções"],
  };

  return (
    <footer className="bg-foreground text-primary-foreground py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-5" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display text-xl font-semibold">
                A
              </div>
              <span className="font-display text-2xl font-medium tracking-tight">
                Autenium
              </span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed mb-6 max-w-sm">
              Autenticidade em cada detalhe. Produtos premium selecionados 
              para quem valoriza qualidade e design atemporal.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display text-lg mb-4">Produtos</h4>
            <ul className="space-y-3">
              {links.produtos.map((link) => (
                <li key={link}>
                  <a
                    href="#produtos"
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
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
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
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
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
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
            <a href="#" className="text-primary-foreground/50 hover:text-primary transition-colors text-sm">
              Termos de Uso
            </a>
            <a href="#" className="text-primary-foreground/50 hover:text-primary transition-colors text-sm">
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
