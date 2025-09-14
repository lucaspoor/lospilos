"use client";
import { HeroCarousel } from "./hero-carousel";

const images = [
  { src: "/im/hero/hero1.jpeg", slogan: "Tu aventura junto al Lago Caburgua" },
  {
    src: "/im/hero/hero3.jpeg",
    slogan: "Naturaleza, descanso y diversión en un solo lugar",
  },
  {
    src: "/im/hero/carpas.jpeg",
    slogan: "Una experiencia que te conecta con la naturaleza",
  },
  {
    src: "/im/hero/llegando.jpg",
    slogan: "Bosques, lagos y montañas a tu alcance",
  },
  {
    src: "/im/hero/atardecer.jpeg",
    slogan: "El rojo atardecer nos invita al calor del fuego",
  },
];

export default function Hero() {
  return (
    <div className="relative">
      <HeroCarousel images={images} interval={5000} height="h-[100vh]" />
    </div>
  );
}
