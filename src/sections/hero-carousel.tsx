import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });
import { motion, AnimatePresence } from "framer-motion";
import React, {
  useState,
  useEffect,
  useRef,
  TouchEvent,
  KeyboardEvent,
} from "react";

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
  height = "h-[60vh]",
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
      className={`relative overflow-hidden ${height} w-full bg-gray-900/5`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
    >
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
              alt={img.alt ?? `Slide ${i + 1}`}
              className="object-cover w-full h-full"
              loading={i === index ? "eager" : "lazy"}
            />

            {img.caption && (
              <div className="absolute left-6 bottom-8 max-w-lg p-4 bg-black/40 backdrop-blur-sm rounded-md text-white">
                <h3 className="text-xl font-semibold">{img.caption.title}</h3>
                {img.caption.subtitle && (
                  <p className="mt-1 text-sm opacity-90">
                    {img.caption.subtitle}
                  </p>
                )}
                {img.caption.cta && (
                  <a
                    href={img.caption.cta.href}
                    className="inline-block mt-3 px-4 py-2 rounded-md border border-white/30 bg-white/10 text-sm hover:bg-white/20"
                  >
                    {img.caption.cta.label}
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        className="opacity-50 absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white focus:outline-none focus:ring-2 focus:ring-white"
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
        className="opacity-50 absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white focus:outline-none focus:ring-2 focus:ring-white"
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

      <div className="absolute left-1/2 -translate-x-1/2 bottom-4 z-20 flex gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full focus:outline-none ring-1 ring-white/30 transition-all ${i === index ? "scale-110 bg-white" : "bg-white/40"}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
          />
        ))}
      </div>
      <div className="absolute top-0 left-0 w-full h-full text-white bg-black/10">
        <div className="grid grid-rows-3 h-screen">
          <div className=""></div>
          <div className=""></div>
          <div className="flex items-start flex-col justify-start px-4 md:p-16">
            <div className={`${montserrat.className} font-bold text-lg mb-2`}>
              Camping los Pilos
            </div>

            <h4
              className={`${montserrat.className}`}
              style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.6)" }}
            >
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="font-bold text-3xl md:text-4xl max-w-md "
              >
                {images[index].slogan}
              </motion.div>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
