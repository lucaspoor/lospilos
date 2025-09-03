export default function History() {
  return (
    <section className="bg-white text-cyan-100 py-28 px-6 space-y-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl text-cyan-900 mb-4 ">
          Nuestros Campings y Características
        </h2>
        <p className="text-cyan-800">
          Disfruta de una experiencia única con instalaciones completas y acceso
          a la naturaleza lorem ipsum dolor lorem ipsum dolo lorem ipsum dolor
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Imagen izquierda */}
        <div className="relative">
          <img
            src="/im/gal/entrada.jpg"
            alt="Historia del camping"
            className=" shadow-xl "
          />
        </div>

        {/* Texto derecha */}
        <div>
          <h2 className="text-4xl  text-cyan-900 mb-6">Nuestros Inicios</h2>
          <p className="text-cyan-800 mb-8">
            El{" "}
            <span className="font-semibold text-cyan-900">
              Camping Los Pilos{" "}
            </span>
            abrió sus puertas en 1985 como un pequeño lugar de descanso junto al
            lago. Con el tiempo, se convirtió en un espacio de encuentro para
            familias, aventureros y amantes de la naturaleza.
          </p>

          {/* Cuadrícula con datos */}
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-cyan-800 p-4 rounded-md shadow-md">
              <h3 className="text-3xl font-bold text-white">1985</h3>
              <p className="text-sm text-cyan-100/80">
                Año de fundación del camping.
              </p>
            </div>
            <div className="bg-cyan-800 p-4 rounded-md shadow-md">
              <h3 className="text-3xl font-bold text-white">+100</h3>
              <p className="text-sm text-cyan-100/80">
                Primeros visitantes en la apertura.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Segundo bloque invertido */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Texto izquierda */}
        <div className="order-2 md:order-1">
          <h2 className="text-4xl  text-cyan-900 mb-6">
            Crecimiento y Tradición
          </h2>
          <p className="text-cyan-800 mb-8">
            Este camping pionero en la zona, nace en el año 1965, cuando un
            joven matrimonio compuesto por Herta Rascheya y Pepe Grammer con
            mucho entusiasmo deciden partir con un pequeño emprendimiento, una
            hostería, para luego, con el correr de los años derivar en al actual
            camping por la necesidad y petición de los mismos clientes,
            maravillados por el entorno natural privilegiado.
          </p>

          {/* Cuadrícula con datos */}
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-cyan-800 p-4 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-white">12</h3>
              <p className="text-sm text-cyan-100/80">
                Hectáreas disponibles para disfrutar.
              </p>
            </div>
            <div className="bg-cyan-800 p-4 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-white">+5000</h3>
              <p className="text-sm text-cyan-100/80">
                Visitantes han vivido la experiencia.
              </p>
            </div>
          </div>
        </div>

        {/* Imagen derecha */}
        <div className="relative order-1 md:order-2">
          <img
            src="/im/his/historia.jpg"
            alt="Crecimiento del camping"
            className=" shadow-xl "
          />
        </div>
      </div>
    </section>
  );
}
