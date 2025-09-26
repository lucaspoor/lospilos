import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

import { motion } from "framer-motion";
import React, { useState, useEffect, useRef, TouchEvent } from "react";

interface CarouselCaption {
  title: string;
  subtitle?: string;
  cta?: {
    href: string;
    label: string;
  };
}

interface CarouselImage {
  src: string;
  alt?: string;
  slogan?: string;
  caption?: CarouselCaption;
}

interface HeroCarouselProps {
  images: CarouselImage[];
  interval?: number;
  height?: string;
}

export function HeroCarousel({
  images,
  interval = 5000,
  height = "h-[85vh]", // un poco más alto para desktop
}: HeroCarouselProps) {
  const [index, setIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const count = images.length;

  useEffect(() => {
    if (count === 0) return;

    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setIndex((i) => (i + 1) % count);
      }, interval);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [count, interval, isPaused]);

  useEffect(() => {
    function onKey(e: globalThis.KeyboardEvent) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function prev() {
    setIndex((i) => (i - 1 + count) % count);
  }

  function next() {
    setIndex((i) => (i + 1) % count);
  }

  function onTouchStart(e: TouchEvent<HTMLDivElement>) {
    touchStartX.current = e.changedTouches[0].clientX;
  }

  function onTouchMove(e: TouchEvent<HTMLDivElement>) {
    touchEndX.current = e.changedTouches[0].clientX;
  }

  function onTouchEnd() {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (Math.abs(diff) > threshold) {
      diff > 0 ? next() : prev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  }

  if (count === 0) return null;

  return (
    <section
      className={`relative overflow-hidden ${height} w-full`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
    >
      {/* Slides */}
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className={`flex-shrink-0 w-full relative ${height} bg-center bg-cover`}
            aria-hidden={i !== index}
          >
            <img
              src={img.src}
              className="object-cover w-full h-full"
              loading={i === index ? "eager" : "lazy"}
            />
            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 "></div>
          </div>
        ))}
      </div>

      {/* Texto responsivo estilo Patagonia Camp */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div
          className={`${montserrat.className} px-6 md:px-20 lg:px-32 xl:pl-64 xl:pr-20 max-w-4xl text-left`}
        >
          {/* Subtítulo pequeño */}
          <p className="uppercase tracking-widest text-sm md:text-base font-medium text-white/90 mb-3">
            Bienvenidos a
          </p>

          {/* Título principal */}
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-3xl md:text-5xl lg:text-6xl  leading-tight text-white"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}
          >
            {images[index].slogan}
          </motion.h1>

          {/* Subtítulo descriptivo */}
          {images[index].caption?.subtitle && (
            <p className="mt-4 text-base md:text-lg lg:text-xl text-white/90 max-w-lg leading-relaxed">
              {images[index].caption.subtitle}
            </p>
          )}

          {/* Botón CTA */}
          {images[index].caption?.cta && (
            <a
              href={images[index].caption.cta.href}
              className="inline-block mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-md shadow-md hover:bg-yellow-500 transition"
            >
              {images[index].caption.cta.label}
            </a>
          )}
        </div>
      </div>

      {/* Controles */}
      <button
        onClick={prev}
        className="opacity-50  md:block hidden absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/10 hover:bg-black/30 text-white"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={next}
        className="opacity-50 absolute  md:block hidden right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/10 hover:bg-black/30 text-white"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Indicadores */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 z-20 flex gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full focus:outline-none ring-1 ring-white/30 transition-all ${
              i === index ? "scale-110 bg-white" : "bg-white/40"
            }`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
          />
        ))}
      </div>
    </section>
  );
}
