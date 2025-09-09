"use client";

import { MapPin, Car, Bus, ParkingCircle } from "lucide-react";
import dynamic from "next/dynamic";
const MapView = dynamic(() => import("./MapView"), { ssr: false });

export default function Ubicacion() {
  return (
    <section id="link_ubicacion" className="bg-cyan-900  text-white py-16 px-6">
      <div
        data-aos="fade-up"
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Columna izquierda: texto */}
        <div>
          <h2 className="text-3xl  mb-10">Ubicación & Cómo llegar</h2>
          <p className="text-lg mb-6 text-gray-200">
            <MapPin className="inline-block mr-2 text-cyan-400" size={20} />A
            solo <strong>21 km de Pucón</strong>.
          </p>

          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <Car className="text-cyan-400 mt-1" size={20} />
              <span>
                <strong>En auto:</strong> Acceso por camino Caburgua, dirección
                hacia renahue. Entrada señalizada.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Bus className="text-cyan-400 mt-1" size={20} />
              <span>
                <strong>En transporte público:</strong> Buses desde [Ciudad]
                hasta [Pueblo cercano], luego taxi o transfer local.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <ParkingCircle className="text-cyan-400 mt-1" size={20} />
              <span>
                <strong>Estacionamiento:</strong> Amplios espacios disponibles
                dentro del camping, sin costo adicional.
              </span>
            </li>
          </ul>
        </div>

        {/* Columna derecha: mapa */}
        <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl">
          <MapView />
          {/* Overlay caja flotante (opcional) */}
          <div className="absolute bottom-4 left-4 bg-black/60 text-white px-4 py-2 rounded-lg text-sm">
            📍 Camping Los Pilos
          </div>
        </div>
      </div>
    </section>
  );
}
