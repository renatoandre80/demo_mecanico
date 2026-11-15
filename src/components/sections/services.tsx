import { ArrowUpRight, Check } from "lucide-react";
import { services } from "@/content/services";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          id="servicos-title"
          eyebrow="Serviços"
          title={
            <>
              Tudo o que seu carro precisa, <span className="text-gradient">em um só lugar</span>
            </>
          }
          description="Da manutenção preventiva aos reparos mais complexos, com tecnologia de ponta e mão de obra especializada."
        />

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <li key={service.title}>
              <Reveal delay={(i % 3) * 0.08} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-ink-900 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-ink-800">
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-accent/0 blur-3xl transition-colors duration-500 group-hover:bg-accent/20"
                    aria-hidden
                  />
                  <div className="flex items-start justify-between">
                    <span className="grid size-12 place-items-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20 transition-colors group-hover:bg-accent group-hover:text-ink-950">
                      <service.icon className="size-6" aria-hidden />
                    </span>
                    <ArrowUpRight
                      className="size-5 text-ink-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      aria-hidden
                    />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-300">{service.description}</p>
                  <ul className="mt-6 space-y-2 border-t border-white/5 pt-5">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-ink-100">
                        <Check className="size-4 text-accent" aria-hidden />
                        {h}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
