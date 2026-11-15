export type Testimonial = {
  name: string;
  vehicle: string;
  quote: string;
  rating: number;
};

/** Depoimentos ilustrativos para o portfólio — substitua por avaliações reais do cliente. */
export const testimonials: Testimonial[] = [
  {
    name: "Ricardo M.",
    vehicle: "BMW 320i",
    quote:
      "Atendimento impecável. Explicaram cada etapa do serviço e entregaram antes do prazo. Meu carro nunca andou tão bem.",
    rating: 5,
  },
  {
    name: "Fernanda L.",
    vehicle: "Jeep Compass",
    quote:
      "Finalmente uma oficina em que confio. Orçamento transparente, fotos das peças e preço justo.",
    rating: 5,
  },
  {
    name: "Paulo S.",
    vehicle: "VW Golf GTI",
    quote:
      "Fizeram a retífica do motor com um cuidado absurdo. Equipe muito técnica e apaixonada por carros.",
    rating: 5,
  },
];
