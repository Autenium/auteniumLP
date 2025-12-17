import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAutenium from "@/assets/logo-autenium.jpeg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#produtos", label: "Produtos" },
    { href: "#sobre", label: "Sobre" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 group">
          <img 
            src={logoAutenium} 
            alt="Autenium Logo" 
            className="h-12 w-auto group-hover:scale-105 transition-transform"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground/70 hover:text-primary transition-colors duration-300 text-sm tracking-wide font-medium"
            >
              {link.label}
            </a>
          ))}
          <Button variant="outline" size="sm">
            Fale Conosco
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg shadow-elevated transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground/70 hover:text-primary transition-colors duration-300 text-lg font-display py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button variant="outline" className="mt-2">
            Fale Conosco
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
