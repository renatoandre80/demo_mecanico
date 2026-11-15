import { differentials, stats } from "@/content/differentials";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Differentials() {
  return (
    <section
      id="diferenciais"
      aria-labelledby="diferenciais-title"
      className="relative overflow-hidden border-y border-white/5 bg-ink-900/50 py-24 sm:py-32"
    >
      <div className="absolute left-0 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" aria-hidden />
      <Container>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse gap-2 bg-ink-950 p-6 text-center sm:p-8">
              <dt className="text-sm text-ink-300">{stat.label}</dt>
              <dd className="font-display text-3xl font-extrabold text-accent sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-24 grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <SectionHeading
            id="diferenciais-title"
            align="left"
            eyebrow="Por que a Torque Prime"
            title={
              <>
                Confiança se constrói <span className="text-gradient">com transparência</span>
              </>
            }
            description="Sabemos que deixar o carro na oficina exige confiança. Por isso, você acompanha tudo e só paga pelo que aprovar."
          />

          <ul className="grid gap-5 sm:grid-cols-2">
            {differentials.map((item, i) => (
              <li key={item.title}>
                <Reveal delay={i * 0.08} className="h-full rounded-2xl border border-white/5 bg-ink-950/80 p-6">
                  <item.icon className="size-7 text-accent" aria-hidden />
                  <h3 className="mt-4 font-display text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">{item.description}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
