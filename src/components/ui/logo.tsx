import { Gauge } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Logo() {
  return (
    <a href="#inicio" className="flex items-center gap-2.5" aria-label={`${siteConfig.fullName} — início`}>
      <span className="grid size-9 place-items-center rounded-lg bg-accent text-ink-950 shadow-glow">
        <Gauge className="size-5" strokeWidth={2.5} aria-hidden />
      </span>
      <span className="font-display text-lg font-extrabold tracking-tight">
        TORQUE<span className="text-accent">PRIME</span>
      </span>
    </a>
  );
}
