"use client";

import {
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Facebook,
  Instagram,
} from "lucide-react";
import { ContactForm } from "./ContactForm";

export default function Contacto() {
  return (
    <section className="relative bg-white text-gray-800 py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Columna izquierda: Formulario */}
        <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200">
          <h2 className="text-3xl mb-6 text-cyan-700">Contáctanos</h2>
          <ContactForm />
        </div>

        {/* Columna derecha: Datos de contacto */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl mb-2 text-cyan-700">
            Información de contacto
          </h2>
          <p className="text-gray-600">
            Estamos aquí para responder tus dudas y ayudarte a planificar tu
            estadía.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <Phone className="text-cyan-500" /> +56 9 1234 5678
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-cyan-500" /> contacto@campinglospilos.cl
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle className="text-cyan-500" /> WhatsApp: +56 9 9876
              5432
            </li>
          </ul>

          {/* Horarios */}
          <div className="bg-gray-100 rounded-xl p-4 shadow-sm border border-gray-200">
            <h3 className="flex items-center gap-2 font-semibold text-cyan-600">
              <Clock /> Horarios de atención
            </h3>
            <p className="text-gray-700 mt-2">
              Lunes a Viernes: 09:00 – 18:00 hrs
              <br />
              Sábados: 10:00 – 14:00 hrs
            </p>
          </div>

          {/* Redes sociales */}
          <div className="flex gap-6 mt-4">
            <a
              href="#"
              className="p-3 bg-gray-100 rounded-full hover:bg-cyan-500 hover:text-white transition shadow"
            >
              <Facebook />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-100 rounded-full hover:bg-cyan-500 hover:text-white transition shadow"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
