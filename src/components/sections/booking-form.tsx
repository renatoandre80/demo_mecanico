"use client";

import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { services } from "@/content/services";
import { whatsappLink } from "@/lib/whatsapp";
import { buttonStyles } from "@/components/ui/button";
import { cn } from "@/lib/cn";

type Fields = { name: string; phone: string; vehicle: string; service: string; date: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const initial: Fields = { name: "", phone: "", vehicle: "", service: "", date: "", message: "" };

function validate(f: Fields): Errors {
  const errors: Errors = {};
  if (f.name.trim().length < 2) errors.name = "Informe seu nome.";
  if (f.phone.replace(/\D/g, "").length < 10) errors.phone = "Informe um telefone válido com DDD.";
  if (f.vehicle.trim().length < 2) errors.vehicle = "Informe o modelo do veículo.";
  if (!f.service) errors.service = "Selecione um serviço.";
  return errors;
}

/** Máscara simples para telefone brasileiro: (11) 99999-9999 */
function maskPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

const inputBase =
  "w-full rounded-xl border bg-ink-950 px-4 py-3 text-sm text-ink-100 placeholder:text-ink-400 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

/**
 * Formulário de agendamento. Sem backend: gera uma mensagem formatada e abre o WhatsApp,
 * canal de maior conversão para negócios locais no Brasil.
 * Para persistir leads, troque o envio por uma Server Action (ex.: Resend, Supabase).
 */
export function BookingForm() {
  const [fields, setFields] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const update = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const value = key === "phone" ? maskPhone(e.target.value) : e.target.value;
    setFields((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((err) => ({ ...err, [key]: undefined }));
  };

  /** Data mínima = hoje (fuso local). Definida no foco para não divergir do HTML pré-renderizado. */
  function setMinToToday(e: React.FocusEvent<HTMLInputElement>) {
    const now = new Date();
    e.currentTarget.min = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().split("T")[0];
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const result = validate(fields);
    setErrors(result);
    if (Object.keys(result).length > 0) {
      const first = Object.keys(result)[0];
      document.getElementById(`f-${first}`)?.focus();
      return;
    }

    const date = fields.date ? new Date(`${fields.date}T12:00:00`).toLocaleDateString("pt-BR") : "A combinar";
    const text = [
      "Olá! Gostaria de agendar um serviço.",
      "",
      `*Nome:* ${fields.name}`,
      `*Telefone:* ${fields.phone}`,
      `*Veículo:* ${fields.vehicle}`,
      `*Serviço:* ${fields.service}`,
      `*Data preferida:* ${date}`,
      fields.message && `*Observações:* ${fields.message}`,
    ]
      .filter((line): line is string => typeof line === "string")
      .join("\n");

    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    setSent(true);
    setFields(initial);
  }

  const field = (key: keyof Fields) => ({
    id: `f-${key}`,
    name: key,
    value: fields[key],
    onChange: update(key),
    "aria-invalid": Boolean(errors[key]),
    "aria-describedby": errors[key] ? `f-${key}-error` : undefined,
    className: cn(inputBase, errors[key] ? "border-red-500/70" : "border-ink-600"),
  });

  const errorMsg = (k: keyof Fields) =>
    errors[k] ? (
      <p id={`f-${k}-error`} className="mt-1.5 text-xs text-red-400">
        {errors[k]}
      </p>
    ) : null;


  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-white/10 bg-ink-900 p-6 shadow-2xl shadow-black/40 sm:p-8">
      <h3 className="font-display text-2xl font-bold">Agende sua revisão</h3>
      <p className="mt-2 text-sm text-ink-300">Resposta em até 15 minutos no horário comercial.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="f-name" className="mb-1.5 block text-sm font-medium">Nome completo</label>
          <input {...field("name")} type="text" autoComplete="name" placeholder="Seu nome" />
          {errorMsg("name")}
        </div>
        <div>
          <label htmlFor="f-phone" className="mb-1.5 block text-sm font-medium">WhatsApp</label>
          <input {...field("phone")} type="tel" inputMode="tel" autoComplete="tel" placeholder="(11) 99999-9999" />
          {errorMsg("phone")}
        </div>
        <div>
          <label htmlFor="f-vehicle" className="mb-1.5 block text-sm font-medium">Veículo</label>
          <input {...field("vehicle")} type="text" placeholder="Ex.: Golf GTI 2020" />
          {errorMsg("vehicle")}
        </div>
        <div>
          <label htmlFor="f-service" className="mb-1.5 block text-sm font-medium">Serviço</label>
          <select {...field("service")}>
            <option value="">Selecione…</option>
            {services.map((s) => (
              <option key={s.title} value={s.title}>{s.title}</option>
            ))}
            <option value="Revisão completa">Revisão completa</option>
            <option value="Outro">Outro</option>
          </select>
          {errorMsg("service")}
        </div>
        <div>
          <label htmlFor="f-date" className="mb-1.5 block text-sm font-medium">
            Data preferida <span className="text-ink-400">(opcional)</span>
          </label>
          <input {...field("date")} type="date" onFocus={setMinToToday} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="f-message" className="mb-1.5 block text-sm font-medium">
            Observações <span className="text-ink-400">(opcional)</span>
          </label>
          <textarea {...field("message")} rows={3} placeholder="Descreva o problema ou o que precisa" />
        </div>
      </div>

      <button type="submit" className={buttonStyles({ size: "lg", className: "mt-8 w-full" })}>
        <Send className="size-5" aria-hidden />
        Enviar pelo WhatsApp
      </button>

      <div aria-live="polite">
        <AnimatePresence>
          {sent && (
            <m.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-4 flex items-center justify-center gap-2 text-sm text-emerald-400"
            >
              <CheckCircle2 className="size-4" aria-hidden />
              Pronto! Finalize o envio na janela do WhatsApp.
            </m.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
