import { siteConfig } from "@/config/site";

/** Monta um link wa.me com a mensagem pré-preenchida. */
export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
