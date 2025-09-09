import { Facebook, Instagram, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-cyan-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Logo y descripción */}
        <div>
          <h2 className="text-2xl font-bold">Camping Los Pilos</h2>
          <p className="mt-4 text-sm text-gray-200">
            Disfruta la naturaleza con la mejor vista al lago, rodeado de paz y
            aire puro. Ven a vivir la experiencia de acampar en un entorno
            único.
          </p>
        </div>

        {/* Enlaces útiles */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-cyan-300 transition">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-300 transition">
                Reservas
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-300 transition">
                Actividades
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-300 transition">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contacto</h3>
          <p className="text-sm">📍 Camping Los Pilos, Pucón, Chile</p>
          <p className="text-sm">📞 +56 9 1234 5678</p>
          <p className="text-sm">✉️ contacto@lospilos.cl</p>

          {/* Redes sociales */}
          <div className="flex space-x-4 mt-4">
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
      <a
        className="bottom-4 right-4 fixed"
        aria-label="Chat on WhatsApp"
        href="https://wa.me/56996151880"
      >
        <img className="h-12" alt="Contáctanos por WhatsApp" src="wtsp.png" />
      </a>

      {/* Línea inferior */}
      <div className="border-t py-10 border-cyan-700 mt-8 text-center text-sm text-gray-200">
        © 2025 Camping Los Pilos. Todos los derechos reservados. Desarrollado
        por:{" "}
        <a className="underline" href="https://www.pooweb.cl/">
          Poo Web
        </a>
      </div>
    </footer>
  );
}
