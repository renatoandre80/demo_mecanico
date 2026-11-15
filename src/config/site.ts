/**
 * Fonte única de verdade para os dados do negócio.
 * Troque estes valores para adaptar a landing page a outro cliente.
 */
export const siteConfig = {
  name: "Torque Prime",
  fullName: "Torque Prime Auto Center",
  description:
    "Oficina mecânica premium com diagnóstico computadorizado, retífica de motores, suspensão, freios e injeção eletrônica. Agende sua revisão online.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  locale: "pt_BR",
  contact: {
    /** Somente dígitos, com DDI — usado no link do WhatsApp. */
    whatsapp: "5511999999999",
    phoneDisplay: "(11) 99999-9999",
    email: "contato@torqueprime.com.br",
    address: {
      street: "Av. das Oficinas, 1500",
      district: "Vila Mecânica",
      city: "São Paulo",
      state: "SP",
      zip: "01000-000",
    },
    mapsUrl: "https://maps.google.com/?q=Av.+das+Oficinas+1500+S%C3%A3o+Paulo",
  },
  hours: [
    { days: "Segunda a Sexta", time: "08h às 18h" },
    { days: "Sábado", time: "08h às 13h" },
  ],
  social: {
    instagram: "https://instagram.com/",
  },
} as const;

export const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#processo", label: "Como Funciona" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
] as const;
