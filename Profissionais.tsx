import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function Profissionais() {
  const professionals = [
    {
      name: "Marli Tosati",
      oab: "OAB/SP 155.667",
      image: "/marli-tosati.jpg",
      description:
        "Advogada especializada em Direito de Família, Sucessões e Trabalhista, com ampla experiência em casos complexos e sensíveis. Comprometida com a excelência no atendimento e resultados efetivos para seus clientes.",
    },
    {
      name: "Soraia Caetano Gomes",
      oab: "OAB/SP 500.079",
      image: "/soraia-gomes.jpg",
      description:
        "Profissional dedicada com sólida formação em Direito, atuando com foco em soluções jurídicas personalizadas. Reconhecida pela abordagem humanizada e comprometimento com os interesses de seus clientes.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Nossa Equipe
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Profissionais experientes e comprometidas com a excelência no
              atendimento jurídico
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Professionals Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="space-y-16 max-w-6xl mx-auto">
            {professionals.map((professional, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 hover:border-primary/20 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <CardContent className="p-0">
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
                      index % 2 === 1 ? "lg:grid-flow-dense" : ""
                    }`}
                  >
                    {/* Image Section */}
                    <div
                      className={`relative h-[400px] lg:h-auto ${
                        index % 2 === 1 ? "lg:col-start-2" : ""
                      }`}
                    >
                      <img
                        src={professional.image}
                        alt={professional.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden" />
                    </div>

                    {/* Content Section */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="mb-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                          {professional.name}
                        </h2>
                        <p className="text-lg text-primary font-semibold">
                          {professional.oab}
                        </p>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {professional.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Agende uma Consulta
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato com nossa equipe e receba orientação jurídica
            especializada para o seu caso.
          </p>
          <Link href="/contato">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
            >
              Entre em Contato
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
