import { siteConfig } from "@/config/site";
import { services } from "@/content/services";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Contact } from "@/components/sections/contact";
import { Differentials } from "@/components/sections/differentials";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";

/** Dados estruturados (Schema.org) — habilitam rich results de negócio local no Google. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: siteConfig.fullName,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: `+${siteConfig.contact.whatsapp}`,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.address.street,
    addressLocality: siteConfig.contact.address.city,
    addressRegion: siteConfig.contact.address.state,
    postalCode: siteConfig.contact.address.zip,
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "13:00" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços",
    itemListElement: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title } })),
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // Conteúdo estático e controlado por nós; escapamos "<" por segurança
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Navbar />
      <main id="conteudo">
        <Hero />
        <Services />
        <Differentials />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
