"use client";

import { Tag } from "lucide-react";

export default function ReservaTarifa() {
  return (
    <section className="bg-cyan-800 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Columna izquierda: contenido */}
        <div>
          <h2 className="text-3xl  mb-4">
            RESERVA TU ESPACIO
          </h2>
          <p className="uppercase text-sm text-gray-300 mb-6">
            Check-in 15:00 · Check-out 11:00
          </p>

          {/* Valores */}
          <div className="bg-cyan-700/70 rounded-xl p-6 mb-6">
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
              <Tag size={20} /> Valores por noche
            </h3>
            <p className="text-lg">
              Apto hasta para:{" "}
              <span className="font-bold">2 carpas</span>
            </p>
             <p className="text-lg">
              Tipos de alojamiento:{" "}
              <span className="font-bold">Carpas y Motorhome</span>
            </p>
             <p className="text-lg">
              Comodidades:{" "}
              <span className="font-bold">Baños modernos con agua caliente</span>
            </p>
             <p className="text-lg">
              Reservas:{" "}
              <span className="font-bold">día completo o solo por el día</span>
            </p>
          </div>

          {/* Nota */}
          <p className="text-sm text-gray-300 mb-8">
            *Todas las personas, desde los 4 años, pagan tarifa normal.
          </p>

          {/* Botón */}
          <a
            href="https://wa.me/56912345678?text=Hola!%20Quiero%20reservar%20un%20refugio."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-cyan-900 transition-colors"
          >
            Reserva aquí tu sitio
          </a>
        </div>

        {/* Columna derecha: imagen */}
        <div className="w-full h-80 md:h-full  overflow-hidden shadow-xl">
          <img
            src="/im/gal/estrellas.jpg"
            alt="Refugio camping"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
