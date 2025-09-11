"use client";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import useWindowDimensions from "@/functions/getviewport";
import Navbar from "@/components/navbar";
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
];

const movimages = [
  { src: "/im/hero3mv.png" },
  { src: "/im/hero/hero3.jpeg" },
  { src: "/im/hero/hero1.jpg" },
  { src: "/im/hero/hero4.jpeg" },
];

export default function Hero() {
  return (
    <div className="relative">
      <HeroCarousel images={images} interval={5000} height="h-[100vh]" />
    </div>
  );
}
