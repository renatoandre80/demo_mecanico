import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { whatsappLink } from "@/lib/whatsapp";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { BookingForm } from "./booking-form";

const { contact, hours } = siteConfig;

const channels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: contact.phoneDisplay,
    href: whatsappLink("Olá! Vim pelo site e gostaria de um orçamento."),
  },
  { icon: Mail, label: "E-mail", value: contact.email, href: `mailto:${contact.email}` },
  {
    icon: MapPin,
    label: "Endereço",
    value: `${contact.address.street} — ${contact.address.district}, ${contact.address.city}/${contact.address.state}`,
    href: contact.mapsUrl,
  },
];

export function Contact() {
  return (
    <section id="contato" aria-labelledby="contato-title" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute bottom-0 right-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-[140px]" aria-hidden />
      <Container className="grid gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            id="contato-title"
            align="left"
            eyebrow="Agendamento"
            title={
              <>
                Seu carro em <span className="text-gradient">boas mãos</span> a partir de hoje
              </>
            }
            description="Preencha o formulário e receba a confirmação do horário direto no seu WhatsApp. Sem filas, sem surpresas."
          />

          <Reveal delay={0.1}>
            <ul className="mt-10 space-y-4">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-ink-900/60 p-4 transition-colors hover:border-accent/40"
                  >
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-ink-950">
                      <c.icon className="size-5" aria-hidden />
                    </span>
                    <span>
                      <span className="block text-xs text-ink-400">{c.label}</span>
                      <span className="block text-sm font-medium">{c.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-start gap-4 rounded-2xl border border-white/5 bg-ink-900/60 p-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                <Clock className="size-5" aria-hidden />
              </span>
              <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 text-sm">
                {hours.map((h) => (
                  <div key={h.days} className="contents">
                    <dt className="text-ink-400">{h.days}</dt>
                    <dd className="font-medium">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <BookingForm />
        </Reveal>
      </Container>
    </section>
  );
}
