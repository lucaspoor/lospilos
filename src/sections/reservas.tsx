"use client";

import { Tag, Tent, Car, Home, Info } from "lucide-react";

const temporadaBaja = [
  { label: "Por persona, por día", price: "$6.500" },
  { label: "Por persona, para acampar", price: "$13.000", suffix: "por noche" },
];

const temporadaAlta = [
  {
    label: "Sitio para acampar — hasta 6 personas (1 auto)",
    price: "$100.000",
    suffix: "diario",
  },
  {
    label: "Sitio por el día — hasta 6 personas (1 auto)",
    price: "$55.000",
  },
  {
    label: "Estacionamiento por el día — 1 auto, hasta 6 personas",
    price: "$42.000",
  },
  { label: "Cabaña para 6 personas", price: "$180.000" },
];

const comodidades = [
  { icon: Tent, text: "Apto hasta para 2 carpas" },
  { icon: Car, text: "Carpas y motorhome" },
  { icon: Home, text: "Cabaña equipada para 6 personas" },
  { icon: Tag, text: "Baños con agua caliente 24/7" },
];

export default function ReservaTarifa() {
  return (
    <section id="link_reservas" className="bg-cyan-800 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">TARIFAS 2026-2027</h2>
          <p className="uppercase text-sm text-cyan-200">
            Check-in 15:00 · Check-out 11:00
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Temporada baja */}
          <div data-aos="fade-up" className="bg-cyan-700/70 rounded-xl p-8">
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-2">
              <Tag size={20} /> Temporada baja
            </h3>
            <p className="text-sm text-cyan-100 mb-6">
              Primavera hasta el 24 de diciembre de 2026 y todo marzo de 2027.
            </p>
            <ul>
              {temporadaBaja.map((item) => (
                <li
                  key={item.label}
                  className="flex items-baseline justify-between gap-4 py-3 border-b border-cyan-600/50 last:border-0"
                >
                  <span className="text-cyan-50">{item.label}</span>
                  <span className="text-right whitespace-nowrap">
                    <span className="text-xl font-bold">{item.price}</span>
                    {item.suffix && (
                      <span className="ml-1 text-sm text-cyan-200">
                        {item.suffix}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Temporada alta */}
          <div data-aos="fade-up" className="bg-cyan-700/70 rounded-xl p-8">
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-2">
              <Tag size={20} /> Temporada alta
            </h3>
            <p className="text-sm text-cyan-100 mb-6">
              Desde el 24 de diciembre de 2026 hasta el 28 de febrero de 2027.
            </p>
            <ul>
              {temporadaAlta.map((item) => (
                <li
                  key={item.label}
                  className="flex items-baseline justify-between gap-4 py-3 border-b border-cyan-600/50 last:border-0"
                >
                  <span className="text-cyan-50">{item.label}</span>
                  <span className="text-right whitespace-nowrap">
                    <span className="text-xl font-bold">{item.price}</span>
                    {item.suffix && (
                      <span className="ml-1 text-sm text-cyan-200">
                        {item.suffix}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Comodidades */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8"
        >
          {comodidades.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-3 bg-cyan-900/40 rounded-lg px-4 py-3"
            >
              <item.icon size={20} className="shrink-0 text-cyan-200" />
              <span className="text-sm text-cyan-50">{item.text}</span>
            </div>
          ))}
        </div>

        <p className="flex items-center gap-2 text-sm text-cyan-100 mt-8">
          <Info size={16} className="shrink-0" />
          *Todas las personas, desde los 4 años, pagan tarifa normal.
        </p>

        <div className="text-center mt-8">
          <a
            href="https://wa.me/56995974344?text=Hola!%20Quiero%20reservar%20un%20sitio%20en%20Camping%20Los%20Pilos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-cyan-900 transition-colors"
          >
            Reserva aquí tu sitio
          </a>
        </div>
      </div>
    </section>
  );
}
