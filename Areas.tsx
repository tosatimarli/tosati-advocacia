import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, FileText, Briefcase, Check, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function Areas() {
  const areas = [
    {
      icon: Users,
      title: "Direito de Família",
      description:
        "Atuação especializada em questões familiares sensíveis, com foco em soluções que preservem o bem-estar de todos os envolvidos.",
      services: [
        "Divórcio consensual e litigioso",
        "Guarda e visitação de filhos",
        "Pensão alimentícia",
        "Reconhecimento e dissolução de união estável",
        "Regulamentação de convivência",
        "Alteração de regime de bens",
        "Investigação e negatória de paternidade",
        "Adoção",
      ],
      color: "primary",
    },
    {
      icon: FileText,
      title: "Sucessões e Inventários",
      description:
        "Assessoria completa em planejamento sucessório e processos de inventário, garantindo eficiência e menor impacto familiar.",
      services: [
        "Inventário judicial e extrajudicial",
        "Partilha de bens",
        "Testamentos",
        "Planejamento sucessório",
        "Doações",
        "Alvará judicial",
        "Arrolamento de bens",
        "Sobrepartilha",
      ],
      color: "secondary",
    },
    {
      icon: Briefcase,
      title: "Direito Trabalhista",
      description:
        "Defesa dos direitos trabalhistas de empregados e empregadores, com atuação preventiva e contenciosa.",
      services: [
        "Rescisões contratuais",
        "Verbas rescisórias",
        "Horas extras e adicionais",
        "Acidente de trabalho e doenças ocupacionais",
        "Assédio moral e sexual",
        "Estabilidade e reintegração",
        "Consultoria preventiva trabalhista",
        "Negociações coletivas",
      ],
      color: "accent",
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
              Áreas de Atuação
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Expertise jurídica especializada para atender suas necessidades
              com excelência e comprometimento
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="space-y-16 max-w-6xl mx-auto">
            {areas.map((area, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 hover:border-primary/20 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {/* Header Section */}
                    <div className="bg-primary text-primary-foreground p-8 lg:p-12 flex flex-col justify-center">
                      <div className="bg-secondary/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                        <area.icon className="h-8 w-8 text-secondary" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {area.title}
                      </h2>
                      <p className="text-white/90 leading-relaxed">
                        {area.description}
                      </p>
                    </div>

                    {/* Services List */}
                    <div className="lg:col-span-2 p-8 lg:p-12 bg-muted/30">
                      <h3 className="text-2xl font-bold text-foreground mb-6">
                        Serviços Oferecidos
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {area.services.map((service, serviceIndex) => (
                          <div
                            key={serviceIndex}
                            className="flex items-start gap-3"
                          >
                            <div className="bg-secondary/20 p-1 rounded-full mt-1 flex-shrink-0">
                              <Check className="h-4 w-4 text-secondary" />
                            </div>
                            <span className="text-foreground">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nossa Abordagem
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p className="leading-relaxed">
                Nosso foco é <strong className="text-foreground">prevenir e resolver conflitos</strong> de
                forma profissional, eficiente e com o menor impacto possível,
                especialmente em questões sensíveis como divórcios, guarda de
                filhos, inventários e partilhas.
              </p>
              <p className="leading-relaxed">
                Também atuamos com excelência em demandas trabalhistas,
                garantindo o cumprimento dos direitos e deveres tanto de
                empregados quanto de empregadores.
              </p>
              <p className="leading-relaxed">
                Oferecemos <strong className="text-foreground">atendimentos online e presenciais</strong>, de
                forma prática e segura, adaptados às necessidades de cada
                cliente, com <strong className="text-foreground">abrangência nacional</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Precisa de Assessoria Jurídica?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Entre em contato conosco e receba orientação especializada para o
            seu caso. Estamos prontos para ajudá-lo.
          </p>
          <Link href="/contato">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6"
            >
              Fale Conosco
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
