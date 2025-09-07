"use client";
import { Button, Card, CardContent } from "@/components/gpt";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CampingLosPilos() {
  const heroRef = useRef(null);
  const { scrollY } = useScroll({ target: heroRef });
  const y = useTransform(scrollY, [0, 300], ["0%", "20%"]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.2]);

  const sections = [
    { id: "historia", label: "Historia" },
    { id: "instalaciones", label: "Instalaciones" },
    { id: "tarifas", label: "Tarifas" },
    { id: "opiniones", label: "Opiniones" },
    { id: "contacto", label: "Contacto" },
    { id: "resumen", label: "Resumen" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-3">
          <h1 className="font-bold text-lg text-sky-700">Camping Los Pilos</h1>
          <ul className="flex space-x-4 text-sm font-medium">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => scrollToSection(s.id)}
                  className="hover:text-sky-600 transition-colors"
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero with parallax background */}
      <motion.section
        ref={heroRef}
        className="relative text-center py-32 px-6 shadow-md overflow-hidden h-[80vh] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/1600x900/?lake,camping')",
            y,
            scale,
          }}
        ></motion.div>
        <motion.div
          className="absolute inset-0 bg-sky-900/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1 }}
        ></motion.div>
        <motion.div
          className="relative z-10 text-white mt-16"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
            Camping Los Pilos
          </h1>
          <p className="text-xl max-w-2xl mx-auto drop-shadow">
            Naturaleza, tradición familiar y acceso directo al Lago Caburgua.
          </p>
        </motion.div>
      </motion.section>

      {/* Historia y ubicación */}
      <motion.section
        id="historia"
        className="max-w-5xl mx-auto py-12 px-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Historia y ubicación</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Fundado por José Gramer Weisser y Herta Ceballos Rascheya a fines de
            los años 60, hoy administrado por su hija Daisy Gramer.
          </li>
          <li>
            Ubicado en Caburgua, camino al Parque Nacional Huerquehue, Ruta
            S-911, km 5,5.
          </li>
          <li>Coordenadas aproximadas: 39°11'13" Sur, 71°46'31" Oeste.</li>
        </ul>
      </motion.section>

      {/* Instalaciones */}
      <motion.section
        id="instalaciones"
        className="max-w-5xl mx-auto py-12 px-6 bg-sky-50 rounded-2xl shadow-sm"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-6">
          Instalaciones y servicios
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "30 sitios con sombra de sauces",
            "Lavadero, mesa, parrilla y electricidad",
            "Baños equipados con agua caliente",
            "Quincho para días de lluvia",
            "Minimarket básico",
            "Juegos y parque infantil",
            "Acceso directo al Lago Caburgua",
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4">{item}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Tarifas */}
      <motion.section
        id="tarifas"
        className="max-w-5xl mx-auto py-12 px-6"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Tarifas y temporada</h2>
        <p className="mb-2">
          Precio aproximado: <strong>$70.000 CLP</strong> por sitio (hasta 6
          personas).
        </p>
        <p>Disponible sólo en temporada alta.</p>
      </motion.section>

      {/* Opiniones */}
      <motion.section
        id="opiniones"
        className="max-w-5xl mx-auto py-12 px-6 bg-sky-50 rounded-2xl shadow-sm"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-6">Opiniones</h2>
        <motion.blockquote
          className="italic border-l-4 border-sky-400 pl-4 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          “Linda vista, buena atención, excelentes baños y cada espacio con agua
          y mesas”
        </motion.blockquote>
        <motion.blockquote
          className="italic border-l-4 border-sky-400 pl-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          “Salida a la playa del lago Caburgua... perfecto para acampar y pasar
          las vacaciones con los niños”
        </motion.blockquote>
      </motion.section>

      {/* Contacto */}
      <motion.section
        id="contacto"
        className="max-w-5xl mx-auto py-12 px-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Contacto y reservas</h2>
        <p>📞 Celular: +56 9 9597 4344</p>
        <p>
          📧 Email:{" "}
          <a
            href="mailto:lospiloscaburgua@gmail.com"
            className="text-sky-600 underline"
          >
            lospiloscaburgua@gmail.com
          </a>
        </p>
        <p>
          🌐 Web:{" "}
          <a
            href="https://campinglospilos.cl"
            className="text-sky-600 underline"
          >
            campinglospilos.cl
          </a>
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button className="mt-4">Reservar ahora</Button>
        </motion.div>
      </motion.section>

      {/* Resumen rápido */}
      <motion.section
        id="resumen"
        className="max-w-5xl mx-auto py-12 px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-6">Resumen rápido</h2>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse w-full text-left shadow-sm">
            <thead>
              <tr className="bg-sky-100">
                <th className="p-3 border">Aspecto</th>
                <th className="p-3 border">Detalle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border">Ubicación</td>
                <td className="p-3 border">Lago Caburgua, cerca de Pucón</td>
              </tr>
              <tr>
                <td className="p-3 border">Historia</td>
                <td className="p-3 border">
                  Fundado por familia Gramer, continuidad generacional
                </td>
              </tr>
              <tr>
                <td className="p-3 border">Servicios</td>
                <td className="p-3 border">
                  Electricidad, agua, quincho, minimarket, juegos, baños
                </td>
              </tr>
              <tr>
                <td className="p-3 border">Acceso al lago</td>
                <td className="p-3 border">Directo desde el camping</td>
              </tr>
              <tr>
                <td className="p-3 border">Precio estimado</td>
                <td className="p-3 border">$70.000 CLP por sitio (6 pax)</td>
              </tr>
              <tr>
                <td className="p-3 border">Valoración</td>
                <td className="p-3 border">Muy buena (~4.5)</td>
              </tr>
              <tr>
                <td className="p-3 border">Contacto</td>
                <td className="p-3 border">
                  +56 9 9597 4344 / campinglospilos.cl
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="text-center py-6 bg-sky-100 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-sm">
          © {new Date().getFullYear()} Camping Los Pilos - Lago Caburgua
        </p>
      </motion.footer>
    </div>
  );
}
