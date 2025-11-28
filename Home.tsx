import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scale, Users, FileText, Briefcase, Clock, Shield, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsCarousel from "@/components/NewsCarousel";
import { Link } from "wouter";
import { useParallax } from "@/hooks/useParallax";

export default function Home() {
  const { ref: heroRef, offset: heroOffset } = useParallax(0.5);

  const services = [
    {
      icon: Users,
      title: "Direito de Família",
      description:
        "Divórcios, guarda de filhos, pensão alimentícia e questões sensíveis tratadas com profissionalismo e empatia.",
    },
    {
      icon: FileText,
      title: "Sucessões",
      description:
        "Inventários, partilhas e planejamento sucessório com eficiência e menor impacto para a família.",
    },
    {
      icon: Briefcase,
      title: "Direito Trabalhista",
      description:
        "Defesa dos direitos de empregados e empregadores, garantindo cumprimento da legislação.",
    },
  ];

  const differentials = [
    {
      icon: Clock,
      title: "Respostas em até 24h",
      description: "Comprometimento com agilidade no atendimento",
    },
    {
      icon: Shield,
      title: "Transparência Total",
      description: "Relatórios regulares sobre o andamento dos processos",
    },
    {
      icon: Scale,
      title: "Abrangência Nacional",
      description: "Atendimento online e presencial em todo o Brasil",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay - Parallax Effect */}
        <div className="absolute inset-0 z-0" style={{ transform: `translateY(${heroOffset * 0.3}px)` }}>
          <img
            src="/hero-legal.jpg"
            alt="Elementos Jurídicos - Tosati Advocacia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-secondary/30">
              <Scale className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-white">
                Advocacia Especializada
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Soluções Jurídicas com
              <span className="block text-secondary">
                Excelência e Compromisso
              </span>
            </h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Atuação especializada em Direito de Família, Sucessões e
              Trabalhista, com abrangência nacional. Oferecemos um
              acompanhamento humano, acessível e comprometido com a solução dos
              seus problemas legais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contato">
                <Button
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6"
                >
                  Entre em Contato
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/sobre">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 text-lg px-8 py-6"
                >
                  Conheça Nossa História
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* News Carousel */}
      <NewsCarousel />

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Áreas de Atuação
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Prezamos pela transparência, acessibilidade e celeridade,
              oferecendo um atendimento ético e comprometido.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20"
              >
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/areas">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Ver Todas as Áreas
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Por que escolher a Tosati Advocacia?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Nosso foco é preservar e resolver conflitos de forma profissional,
                eficiente e com o menor impacto possível, especialmente em
                situações sensíveis. Mais do que representação jurídica, entregamos
                um acompanhamento humano, disciplinar.
              </p>

              <div className="space-y-4">
                {differentials.map((diff, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary/10">
                        <diff.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {diff.title}
                      </h3>
                      <p className="text-muted-foreground">{diff.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://i.ibb.co/Kj8DcX1v/Chat-GPT-Image-17-de-nov-de-2025-13-33-51.png"
                alt="Consultoria Jurídica"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-secondary text-secondary-foreground p-6 rounded-tl-lg shadow-lg">
                <p className="text-sm font-semibold mb-2">Experiência</p>
                <p className="text-3xl font-bold">15+</p>
                <p className="text-xs text-secondary-foreground/80">
                  Anos de advocacia especializada
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para resolver sua questão jurídica?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Entre em contato conosco e receba uma consultoria especializada.
            Estamos prontos para ajudá-lo.
          </p>
          <Link href="/contato">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6"
            >
              Agendar Consulta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
