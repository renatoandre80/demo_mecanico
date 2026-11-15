import { Quote, Star } from "lucide-react";
import { testimonials } from "@/content/testimonials";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Testimonials() {
  return (
    <section id="depoimentos" aria-labelledby="depoimentos-title" className="border-t border-white/5 bg-ink-900/50 py-24 sm:py-32">
      <Container>
        <SectionHeading
          id="depoimentos-title"
          eyebrow="Depoimentos"
          title={
            <>
              Quem confia, <span className="text-gradient">recomenda</span>
            </>
          }
        />

        <ul className="mt-16 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <li key={t.name}>
              <Reveal delay={i * 0.1} className="h-full">
                <figure className="relative flex h-full flex-col rounded-2xl border border-white/5 bg-ink-950 p-7">
                  <Quote className="absolute right-6 top-6 size-10 text-accent/15" aria-hidden />
                  <div className="flex gap-0.5" role="img" aria-label={`Avaliação ${t.rating} de 5 estrelas`}>
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} className="size-4 fill-accent text-accent" aria-hidden />
                    ))}
                  </div>
                  <blockquote className="mt-5 flex-1 text-pretty leading-relaxed text-ink-100">“{t.quote}”</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                    <span className="grid size-10 place-items-center rounded-full bg-accent/15 font-display text-sm font-bold text-accent">
                      {t.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold">{t.name}</span>
                      <span className="block text-xs text-ink-400">{t.vehicle}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
