import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_TITLE, APP_LOGO } from "@/const";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Início", path: "/" },
    { name: "Sobre", path: "/sobre" },
    { name: "Profissionais", path: "/profissionais" },
    { name: "Área de Atuação", path: "/areas" },
    { name: "Contato", path: "/contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center group cursor-pointer">
              <img
                src={APP_LOGO}
                alt="Tosati Advocacia"
                className="h-14 w-auto transition-transform group-hover:scale-105"
              />
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    location === item.path
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {item.name}
                </a>
              </Link>
            ))}
            <Button
              variant="default"
              size="sm"
              className="ml-4 bg-secondary text-secondary-foreground hover:bg-secondary/90"
              onClick={() => {
                const element = document.getElementById("contato");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = "/contato";
                }
              }}
            >
              Entre em Contato
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-primary/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <a
                    className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                      location === item.path
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
              <Button
                variant="default"
                className="mt-2 bg-secondary text-secondary-foreground hover:bg-secondary/90"
                onClick={() => {
                  setIsMenuOpen(false);
                  const element = document.getElementById("contato");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.href = "/contato";
                  }
                }}
              >
                Entre em Contato
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
