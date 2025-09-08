"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { link } from "fs";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navbar = [
    { text: "Inicio", link: "#link_inicio" },
    { text: "Reservas", link: "#link_reservas" },
    { text: "Actividades", link: "#link_actividades" },
    { text: "Ubicación", link: "#link_ubicacion" },
    { text: "Contacto", link: "#link_contacto" },
  ];

  return (
    <nav className="bg-cyan-800 text-white  fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}

        <img src="/im/logowhite.png" className="p-2 lg:w-56 w-48"></img>
        {/* Links - versión escritorio */}
        <ul className="hidden md:flex space-x-6">
          {navbar.map((e, i) => {
            return (
              <li key={e.text}>
                <Link href={e.link} className="hover:text-cyan-300 transition">
                  {e.text}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Botón menú hamburguesa - versión móvil */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú móvil desplegable */}

      <div
        className={`
          absolute top-24 left-0 w-full bg-cyan-800 shadow-md md:hidden
          transform transition-all duration-300 ease-in-out
          ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-5 pointer-events-none"
          }
        `}
      >
        <div className="flex flex-col items-center py-6 space-y-4">
          {navbar.map((e, i) => {
            return (
              <Link
                key={e.text}
                href={e.link}
                className="hover:text-cyan-300 transition"
                onClick={() => setIsOpen(false)}
              >
                {e.text}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
