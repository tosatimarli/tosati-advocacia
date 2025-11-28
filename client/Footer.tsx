import { Scale, Mail, Phone, MapPin } from "lucide-react";
import { APP_TITLE } from "@/const";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-secondary p-2 rounded-lg">
                <Scale className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-tight">
                  {APP_TITLE}
                </span>
                <span className="text-xs uppercase tracking-wider opacity-90">
                  Advocacia
                </span>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Atuação especializada em Direito de Família, Sucessões e
              Trabalhista, com abrangência nacional.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 opacity-90" />
                <span className="opacity-90">
                  Av. Professor Augusto Cézar, 930 - Centro
                  <br />
                  Araraquara - SP - CEP: 14801-240
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 opacity-90" />
                <a
                  href="tel:+5516982121914"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  (16) 9.8212-1914
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 opacity-90" />
                <a
                  href="mailto:tosatimarli@gmail.com"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  tosatimarli@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Áreas de Atuação</h3>
            <ul className="space-y-2 text-sm">
              <li className="opacity-90">• Direito de Família</li>
              <li className="opacity-90">• Sucessões e Inventários</li>
              <li className="opacity-90">• Direito Trabalhista</li>
              <li className="opacity-90">• Consultoria Jurídica</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-90">
            <p>
              © {currentYear} {APP_TITLE}. Todos os direitos reservados.
            </p>
            <p>
              Desenvolvido com excelência para atender nossos clientes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
