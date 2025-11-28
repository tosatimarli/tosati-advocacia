import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-primary/90">
      <div className="container text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-9xl font-bold text-secondary mb-4">404</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Página Não Encontrada
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Desculpe, a página que você está procurando não existe ou foi
            movida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                <Home className="mr-2 h-5 w-5" />
                Voltar para Home
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Voltar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
