# Torque Prime — Landing Page de Oficina Mecânica

Landing page premium, responsiva e de alta conversão para oficina mecânica. Projeto de portfólio.

**Stack:** Next.js 16 (App Router, Cache Components) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide React

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm run lint
```

## Estrutura

```
src/
├── app/                 # rotas, layout, metadata, robots, sitemap, ícone
├── config/site.ts       # dados do negócio (nome, contato, horários) — fonte única de verdade
├── content/             # conteúdo das seções (serviços, diferenciais, depoimentos...)
├── lib/                 # utilitários (cn, whatsapp)
└── components/
    ├── ui/              # primitivos reutilizáveis (Button, Container, Reveal...)
    ├── layout/          # Navbar, Footer
    ├── sections/        # seções da landing
    └── providers/       # MotionProvider (LazyMotion)
```

Para adaptar a outro cliente, edite apenas `src/config/site.ts` e `src/content/*`.

## Decisões técnicas

- **Server Components por padrão**: só Navbar, formulário e animações são Client Components.
- **Framer Motion com `LazyMotion` + `m`**: bundle inicial menor; `reducedMotion="user"` respeita acessibilidade.
- **LCP preservado**: o `<h1>` do hero não começa invisível.
- **SEO**: metadata/Open Graph, JSON-LD `AutoRepair` (negócio local), `robots.txt` e `sitemap.xml` gerados.
- **Acessibilidade**: HTML semântico, skip link, foco visível, `aria-*` no menu e formulário.
- **Segurança**: headers (HSTS, X-Frame-Options, nosniff, Referrer/Permissions-Policy) em `next.config.ts`.
- **Conversão**: formulário de agendamento validado que envia a mensagem formatada para o WhatsApp.

## Imagem do hero

O hero usa um conta-giros animado em SVG como placeholder. Para usar uma foto real, coloque-a em
`public/images/hero.jpg` e siga o comentário em `src/components/sections/hero-visual.tsx`.

## Deploy (Vercel)

1. Em [vercel.com/new](https://vercel.com/new), importe o repositório `renatoandre80/demo_mecanico`.
2. Framework detectado automaticamente (Next.js) — não é preciso alterar nada.
3. (Opcional) Defina `NEXT_PUBLIC_SITE_URL` com o domínio final (ver `.env.example`).

Cada push na `main` gera deploy de produção; cada Pull Request gera um Preview Deploy.
