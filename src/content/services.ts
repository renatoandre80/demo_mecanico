import {
  Cpu,
  Cog,
  Disc3,
  Zap,
  Droplets,
  Snowflake,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
};

export const services: Service[] = [
  {
    title: "Diagnóstico Computadorizado",
    description:
      "Scanners de última geração leem todos os módulos eletrônicos e apontam a falha com precisão — sem achismos.",
    icon: Cpu,
    highlights: ["Leitura de todos os módulos", "Relatório detalhado"],
  },
  {
    title: "Retífica de Motores",
    description:
      "Recondicionamento completo com usinagem de precisão, devolvendo potência e confiabilidade de fábrica.",
    icon: Cog,
    highlights: ["Usinagem de precisão", "Garantia de 12 meses"],
  },
  {
    title: "Suspensão e Freios",
    description:
      "Segurança e estabilidade em cada curva. Pastilhas, discos, amortecedores e geometria completa.",
    icon: Disc3,
    highlights: ["Peças certificadas", "Alinhamento 3D"],
  },
  {
    title: "Injeção Eletrônica",
    description:
      "Limpeza e calibração de bicos, sensores e corpo de borboleta para máxima eficiência de consumo.",
    icon: Zap,
    highlights: ["Teste de vazão", "Economia de combustível"],
  },
  {
    title: "Troca de Óleo e Filtros",
    description:
      "Lubrificantes homologados pelo fabricante e checklist de 30 itens em cada troca.",
    icon: Droplets,
    highlights: ["Óleos homologados", "Checklist de 30 itens"],
  },
  {
    title: "Ar-Condicionado",
    description:
      "Higienização, recarga de gás e reparo do sistema para conforto térmico em qualquer estação.",
    icon: Snowflake,
    highlights: ["Higienização completa", "Detecção de vazamentos"],
  },
];
