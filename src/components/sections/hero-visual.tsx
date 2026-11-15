"use client";

import { m } from "framer-motion";
import { Cpu, ShieldCheck } from "lucide-react";

/**
 * Placeholder da imagem principal.
 *
 * Para usar uma foto real (carro esportivo / motor), coloque o arquivo em
 * `public/images/hero.jpg` e substitua o bloco do conta-giros por:
 *
 *   <Image src="/images/hero.jpg" alt="Motor V8 em detalhe" fill priority
 *          sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
 *
 * (import Image from "next/image") — `priority` garante o carregamento antecipado do LCP.
 */
export function HeroVisual() {
  const ticks = Array.from({ length: 41 }, (_, i) => i);

  return (
    <m.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-lg"
    >
      <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-linear-to-br from-ink-800 via-ink-900 to-ink-950 p-8 shadow-2xl shadow-black/50">
        <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
        <div className="absolute inset-x-10 bottom-0 h-1/2 rounded-full bg-accent/25 blur-3xl" aria-hidden />

        {/* Conta-giros animado */}
        <svg viewBox="0 0 200 200" className="relative h-full w-full" role="img" aria-label="Conta-giros ilustrativo">
          <defs>
            <linearGradient id="arc" x1="0" x2="1">
              <stop offset="0%" stopColor="#ff6a00" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#ff6a00" />
            </linearGradient>
          </defs>
          {ticks.map((i) => {
            const angle = -225 + (i * 270) / 40;
            const rad = (angle * Math.PI) / 180;
            const major = i % 5 === 0;
            const r1 = major ? 72 : 78;
            const red = i >= 32;
            return (
              <line
                key={i}
                x1={100 + r1 * Math.cos(rad)}
                y1={100 + r1 * Math.sin(rad)}
                x2={100 + 86 * Math.cos(rad)}
                y2={100 + 86 * Math.sin(rad)}
                stroke={red ? "#ff3b3b" : major ? "#e7e7ee" : "#6b6b7b"}
                strokeWidth={major ? 2 : 1}
                strokeLinecap="round"
              />
            );
          })}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((n) => {
            const rad = ((-225 + n * 33.75) * Math.PI) / 180;
            return (
              <text
                key={n}
                x={100 + 60 * Math.cos(rad)}
                y={100 + 60 * Math.sin(rad) + 3}
                textAnchor="middle"
                fontSize="9"
                fontWeight="700"
                fill={n >= 7 ? "#ff3b3b" : "#9a9aab"}
              >
                {n}
              </text>
            );
          })}
          <m.circle
            cx="100"
            cy="100"
            r="92"
            fill="none"
            stroke="url(#arc)"
            strokeWidth="3"
            strokeLinecap="round"
            pathLength={1}
            strokeDasharray="0.75 1"
            transform="rotate(135 100 100)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 0.75 }}
            transition={{ duration: 1.6, ease: "easeOut", delay: 0.3 }}
          />
          <m.g
            initial={{ rotate: -135 }}
            animate={{ rotate: [-135, 95, 40] }}
            transition={{ duration: 2.2, times: [0, 0.6, 1], ease: "easeInOut", delay: 0.4 }}
          >
            {/* círculo invisível: centraliza a bounding box (origem da rotação) no eixo do ponteiro */}
            <circle cx="100" cy="100" r="66" fill="transparent" />
            <line x1="100" y1="100" x2="100" y2="34" stroke="#ff6a00" strokeWidth="3" strokeLinecap="round" />
          </m.g>
          <circle cx="100" cy="100" r="8" fill="#14141a" stroke="#ff6a00" strokeWidth="2" />
          <text x="100" y="140" textAnchor="middle" fontSize="7" letterSpacing="2" fill="#6b6b7b">
            RPM x1000
          </text>
        </svg>
      </div>

      {/* Cards flutuantes */}
      <m.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute -left-2 top-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-900/80 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-8"
      >
        <span className="grid size-10 place-items-center rounded-xl bg-accent/15 text-accent">
          <Cpu className="size-5" aria-hidden />
        </span>
        <div>
          <p className="text-xs text-ink-400">Diagnóstico</p>
          <p className="text-sm font-semibold">100% digital</p>
        </div>
      </m.div>

      <m.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute -right-2 bottom-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-900/80 px-4 py-3 shadow-xl backdrop-blur-md sm:-right-8"
      >
        <span className="grid size-10 place-items-center rounded-xl bg-emerald-500/15 text-emerald-400">
          <ShieldCheck className="size-5" aria-hidden />
        </span>
        <div>
          <p className="text-xs text-ink-400">Garantia</p>
          <p className="text-sm font-semibold">Até 12 meses</p>
        </div>
      </m.div>
    </m.div>
  );
}
