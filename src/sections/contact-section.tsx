"use client";

import {
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Facebook,
  Instagram,
} from "lucide-react";

import { ContactFormContainer } from "./contact-form-container";
const enc = "Y29udGFjdG9AbG9zcGlsb3MuY2w=";

export default function ContactSection() {
  return (
    <section className="relative bg-white text-gray-800 py-20 md:px-6 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Columna izquierda: Formulario */}
        <div className="bg-gray-50 rounded-2xl md:p-8 p-6 shadow-lg border border-gray-200">
          <h2 className="text-3xl mb-6 text-cyan-700">Contáctanos</h2>
          <ContactFormContainer />
        </div>

        {/* Columna derecha: Datos de contacto */}
        <div className="flex flex-col justify-center space-y-6 mx-4">
          <h2 className="text-3xl mb-2 text-cyan-700">
            Información de contacto
          </h2>
          <p className="text-gray-600">
            Estamos aquí para responder tus dudas y ayudarte a planificar tu
            estadía.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <Phone className="text-cyan-500" /> +56 9 9876 5432
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-cyan-500" /> {atob(enc)}
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
              href="https://www.facebook.com/groups/39115305147/"
              className="hover:text-cyan-300 transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/explore/locations/1022170229/camping-los-pilos"
              className="hover:text-cyan-300 transition"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
