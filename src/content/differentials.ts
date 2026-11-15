import { Award, Clock, ShieldCheck, Users, type LucideIcon } from "lucide-react";

export type Stat = { value: number; suffix: string; label: string };

export const stats: Stat[] = [
  { value: 15, suffix: "+", label: "Anos de experiência" },
  { value: 12, suffix: "k+", label: "Veículos atendidos" },
  { value: 98, suffix: "%", label: "Clientes satisfeitos" },
  { value: 12, suffix: " meses", label: "De garantia nos serviços" },
];

export type Differential = { title: string; description: string; icon: LucideIcon };

export const differentials: Differential[] = [
  {
    title: "Transparência total",
    description: "Orçamento aprovado por você, com fotos e vídeos das peças substituídas.",
    icon: ShieldCheck,
  },
  {
    title: "Prazo cumprido",
    description: "Agendamento com horário marcado e acompanhamento do serviço pelo WhatsApp.",
    icon: Clock,
  },
  {
    title: "Equipe certificada",
    description: "Mecânicos com formação técnica e treinamentos constantes nas montadoras.",
    icon: Users,
  },
  {
    title: "Garantia real",
    description: "Todos os serviços com garantia por escrito de até 12 meses.",
    icon: Award,
  },
];
