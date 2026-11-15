import { processSteps } from "@/content/process";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Process() {
  return (
    <section id="processo" aria-labelledby="processo-title" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          id="processo-title"
          eyebrow="Como funciona"
          title={
            <>
              Do agendamento à entrega <span className="text-gradient">em 4 passos</span>
            </>
          }
          description="Um processo simples e previsível, pensado para economizar o seu tempo."
        />

        <ol className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Linha conectando os passos no desktop */}
          <div
            className="absolute left-0 right-0 top-7 hidden h-px bg-linear-to-r from-transparent via-accent/40 to-transparent lg:block"
            aria-hidden
          />
          {processSteps.map((step, i) => (
            <li key={step.title} className="relative">
              <Reveal delay={i * 0.12}>
                <span className="relative grid size-14 place-items-center rounded-2xl border border-accent/40 bg-ink-950 font-display text-xl font-extrabold text-accent shadow-glow">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{step.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
