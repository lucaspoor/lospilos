"use client"

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSwipeable } from "react-swipeable";

const actividades = [
  {
    titulo: "Pesca en lago/río",
    descripcion: "Disfruta de la pesca en un entorno natural único.",
    img: "/im/gal/boyas.jpg",
  },
  {
    titulo: "Senderismo y caminatas",
    descripcion: "Explora senderos y vive la naturaleza a tu ritmo.",
    img: "/im/gal/entrada.jpg",
  },
  {
    titulo: "Paseos en bote o kayak",
    descripcion: "Recorre la laguna en kayak o en bote con reserva. Recorre la laguna en kayak o en bote con reserva. Recorre la laguna en kayak o en bote con reserva. Recorre la laguna en kayak o en bote con reserva.",
    img: "/im/gal/espacios.jpg",
  },
  {
    titulo: "Actividades familiares",
    descripcion: "Áreas verdes, juegos y espacios para compartir en familia.",
    img: "/im/gal/niños.jpg",
  },
  {
    titulo: "Momentos únicos",
    descripcion: "Captura recuerdos con fotos dinámicas disfrutando del lugar.",
    img: "/im/gal/boyas.jpg",
  },
];

export default function Actividades() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? actividades.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === actividades.length - 1 ? 0 : prev + 1));
  };




  // autoplay


  return (
    <section  className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto relative">
        <h2 className="text-3xl text-cyan-800 text-center mb-4">Actividades Y Entretenimiento</h2>
        <p className="text-center mb-12 text-gray-600">
          ALgunas de las actividades recreativas que puedes realizar en nuestro camping
        </p>

        {/* contenedor principal */}
        <div
         
          className="relative overflow-hidden  shadow-lg h-[36rem]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* slides */}
          {actividades.map((act, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                i === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* imagen */}
              <img
                src={act.img}
                alt={act.titulo}
                className="w-full h-full object-cover"
              />

              {/* overlay con fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-800/80 via-cyan-800/30 to-transparent" />

              {/* texto encima */}
              <div className="absolute bottom-0 left-0 p-8 text-white max-w-lg">
                <h3 className="text-2xl font-semibold mb-2">{act.titulo}</h3>
                <p className="text-sm">{act.descripcion}</p>
              </div>
            </div>
          ))}

          {/* flechas */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/40 p-2 rounded-full shadow hover:bg-white z-20"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/40 p-2 rounded-full shadow hover:bg-white z-20"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* dots */}
        <div id="link-galeria" className="flex justify-center mt-6 space-x-3">
          {actividades.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                index === i ? "bg-cyan-600" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
