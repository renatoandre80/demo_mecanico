import { navLinks, siteConfig } from "@/config/site";
import { services } from "@/content/services";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

export function Footer() {
  const { address } = siteConfig.contact;

  return (
    <footer className="border-t border-white/5 bg-ink-900/60">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-300">{siteConfig.description}</p>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="mt-6 inline-grid size-10 place-items-center rounded-lg border border-ink-600 text-ink-300 transition-colors hover:border-accent hover:text-accent"
          >
            <InstagramIcon className="size-5" aria-hidden />
          </a>
        </div>

        <nav aria-label="Rodapé">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-100">Navegação</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-ink-300 transition-colors hover:text-accent">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-100">Serviços</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-300">
            {services.slice(0, 5).map((s) => (
              <li key={s.title}>{s.title}</li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/5">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-400 sm:flex-row">
          <p>
            © {siteConfig.fullName}. Todos os direitos reservados.
          </p>
          <address className="not-italic">
            {address.street} · {address.city}/{address.state} · CEP {address.zip}
          </address>
        </Container>
      </div>
    </footer>
  );
}
