import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { HeroVisual } from "./hero-visual";

const trustPoints = ["Garantia de 12 meses", "Orçamento sem compromisso", "Peças originais"];

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-36 lg:pb-28">
      {/* Fundo decorativo */}
      <div className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" aria-hidden />
      <div className="absolute -top-40 left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px] lg:left-3/4" aria-hidden />

      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-8">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent-light">
              <Star className="size-3.5 fill-current" aria-hidden />
              Nota 4,9 no Google · +1.200 avaliações
            </p>
          </Reveal>

          {/* O H1 não começa invisível: preserva o LCP (Largest Contentful Paint) */}
          <h1
            id="hero-title"
            className="mt-6 font-display text-4xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Performance e <span className="text-gradient">Confiabilidade</span> para o seu Veículo
          </h1>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg text-pretty text-ink-300">
              Diagnóstico computadorizado, mecânicos certificados e transparência em cada etapa. Seu carro
              tratado com a precisão de uma equipe de competição.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#contato" size="lg">
              Agendar Revisão
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden />
            </ButtonLink>
            <ButtonLink href="#servicos" size="lg" variant="secondary">
              Conhecer Serviços
            </ButtonLink>
          </Reveal>

          <Reveal delay={0.3}>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink-300">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-accent" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <HeroVisual />
      </Container>
    </section>
  );
}
