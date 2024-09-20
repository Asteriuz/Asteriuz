'use client';

import HeroCarousel from "@/components/Home/Utils/HeroCarousel";
import hero1 from "@/assets/bg/hero1.webp";
import hero2 from "@/assets/bg/hero2.webp";
import FadeInSection from "./Utils/FadeInSection";

const slides = [
  {
    imageUrl: hero1.src,
    title: "Qualidade e Durabilidade em Artefatos de Ferro",
    toptitle: "Garantia de um projeto com excelência",
    subtitle:
      "Deixe Seus ambientes mais seguros, elegantes e resilientes com nossos produtos em ferro. Projetados para durar e impressionar",
    button1: "Saiba Mais",
    button1Link: "#sobre",
  },
  {
    imageUrl: hero2.src,
    title: "Explore Nossa Linha de Produtos de Ferro",
    toptitle: "Inovação e Versatilidade",
    subtitle:
      "Descubra produtos que aliam design moderno e funcionalidade superior, perfeitos para qualquer projeto ou ambiente",
    button1: "Nossos Produtos",
    button1Link: "#produtos",
  },
];

export default function Hero() {
  return (
      <section id="hero" className="relative h-[617px] lg:h-screen">
        <HeroCarousel slides={slides} />
      </section>
  );
}
