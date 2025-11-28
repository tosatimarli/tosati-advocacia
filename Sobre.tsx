import { Card, CardContent } from "@/components/ui/card";
import { Target, Award, Heart, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Sobre() {
  const valores = [
    {
      icon: Award,
      title: "Qualidade",
      description: "Um dever permanente em todos os nossos serviços",
    },
    {
      icon: Target,
      title: "Profissionalismo e Justiça",
      description: "Decisões e atitudes tomadas com ética e responsabilidade",
    },
    {
      icon: Heart,
      title: "Ética e Lealdade",
      description: "Compromisso de toda nossa equipe com honestidade",
    },
    {
      icon: TrendingUp,
      title: "Respeito Mútuo",
      description: "Base na relação humana e disciplinar",
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
              Sobre Nós
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Excelência jurídica aliada a um atendimento humanizado e
              comprometido com resultados
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground leading-relaxed">
                Na atual conjuntura econômica do país, com excessiva carga
                tributária e encargos sociais altamente penalizadoras, a
                Consultoria Jurídica consolidou-se como solução para o setor
                empresarial, oferecendo serviços de consultoria altamente
                especializada na área jurídica.
              </p>
              <p className="text-lg text-foreground leading-relaxed mt-6">
                Com um referencial de qualidade técnica, apresento soluções
                adequadas às necessidades específicas de cada cliente, no
                conjunto de suas especializações nos campos do Direito.
              </p>
              <p className="text-lg text-foreground leading-relaxed mt-6">
                A aplicação do Direito em consonância com a realidade me coloca
                na vanguarda da advocacia empresarial, tornando nossa
                contratação um investimento de retorno rápido e garantido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Nossos Objetivos
              </h2>
            </div>

            <Card className="border-2 border-primary/20 shadow-lg">
              <CardContent className="p-8 md:p-12">
                <p className="text-xl text-foreground leading-relaxed text-center">
                  Atender bem nossos clientes com consultoria e execução
                  especializada, satisfazendo suas necessidades e cumprindo à
                  risca os compromissos firmados através de acordos e prazos
                  pré-estabelecidos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Princípios que guiam nossa atuação e relacionamento com clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {valores.map((valor, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/30"
              >
                <CardContent className="p-8">
                  <div className="bg-secondary/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-colors">
                    <valor.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {valor.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {valor.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nosso Compromisso
            </h2>
            <div className="space-y-6 text-lg opacity-90">
              <p className="leading-relaxed">
                Prezamos pela <strong>transparência, acessibilidade e celeridade</strong>,
                oferecendo um atendimento ético e comprometido com os melhores
                resultados para nossos clientes.
              </p>
              <p className="leading-relaxed">
                Nosso foco é <strong>prevenir e resolver conflitos</strong> de forma
                profissional, eficiente e com o menor impacto possível,
                especialmente em questões sensíveis como divórcios, guarda de
                filhos, inventários e partilhas.
              </p>
              <p className="leading-relaxed">
                Nos comprometemos com <strong>respostas em até 24 horas</strong> e com o
                envio regular de relatórios por e-mail sobre o andamento dos
                processos.
              </p>
              <p className="text-xl font-semibold mt-8">
                Mais do que representação jurídica, entregamos um acompanhamento
                humano, acessível e comprometido com a solução dos seus
                problemas legais.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
