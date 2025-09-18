"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSwipeable } from "react-swipeable";

const actividades = [
    {
   titulo: "Pesca en Lago o Río",
    descripcion: "Disfruta de la pesca en un entorno tranquilo, donde el canto de los pájaros y la brisa sobre el agua hacen de cada captura un momento especial.",
    img: "/im/actividades/pesca.jpg",
  },
   {
    titulo: "Paseos en Bote o Kayak",
    descripcion: "Explora la laguna en bote o kayak y disfruta de la calma del agua, la fauna local y paisajes impresionantes. Actividad con reserva previa para momentos tranquilos y seguros.",
    img: "/im/actividades/kayak.jpg",
  },
  {
    titulo: "Senderismo y caminatas",
 descripcion: "Recorre senderos rodeados de bosque, aire fresco y vistas panorámicas de montañas y lagos. Ideal para conectarte con la naturaleza a tu propio ritmo.",
    img: "/im/actividades/senda.jpg",
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
    <section id="link_actividades" className="bg-white py-16 px-6">
      <div data-aos="fade-up" className="max-w-5xl mx-auto relative">
        <h2 className="text-4xl text-cyan-800 text-center mb-4">
          Actividades Y Entretenimiento
        </h2>
        <p className="text-center mb-12 text-gray-600">
          Algunas de las actividades recreativas que puedes realizar:
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
                className="w-full h-full object-cover object-right" 
              />

              {/* overlay con fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-800 via-cyan-800/20 to-transparent" />

              {/* texto encima */}
              <div className="absolute bottom-0 left-0 p-8 text-white max-w-lg">
                <h3 className="md:text-3xl text-2xl font-semibold mb-2">{act.titulo}</h3>
                <p className="md:text-md text-sm">{act.descripcion}</p>
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
