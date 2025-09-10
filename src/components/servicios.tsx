import Lists from "./lists";

const courses = [
  "E-Commerce",
  "UI UX Design",
  "Web Development",
  "Creative Design",
  "Mobile App Development",
  "Social Media Marketing",
  "Content Marketing & Advertising",
];

const ServiciosInstalaciones = () => {
  return (
    <div className=" text-white py-10 bg-gray-500">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Logo y descripción */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Resumen Servicios e Instalaciones
          </h2>

          <div className="mb-4">
            <h3 className="text-xl font-bold">Playa privada</h3>
            <ul>
              <li>Acceso directo al Lago Caburgua</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold">Sitios espaciosos</h3>
            <ul>
              <li>~40 m²</li>
              <li>Buena sombra</li>
              <li>Espacio para varias carpas</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold">Equipamiento por sitio</h3>

            <ul>
              <li>Lavadero</li>
              <li>Mesa</li>
              <li>Pancho con parrilla</li>
              <li>Electricidad</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold">Instalaciones comunes</h3>
            <ul>
              <li>Baños con agua caliente</li>
              <li>Quincho</li>
              <li>Minimarket</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold">Actividades & recreación</h3>
            <ul>
              <li>Mesa de ping-pong</li>
              <li>Parque de juegos infantil</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ServiciosInstalaciones };
