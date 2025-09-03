export default function Gallery() {
  return (
    <section className="py-24 pb-36 bg-white">
      <div id="lucas" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <h2 className="text-3xl text-cyan-800 text-center mb-4">Galería de fotos</h2>
        <p className="text-center mb-12 text-gray-600">
          ¡Fotos de los paisajes y espacios que posee nuestro camping junto a nuestra gente!
        </p>


        {/* Grid de imágenes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            "boyas.jpg",
            "entrada.jpg",
            "espacios.jpg",
            "estrellas.jpg",
            "jardin.jpg",
            "lago.jpg",
            "niños.jpg",
            "playa.jpeg",
          ].map((img, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden  m-3 "
            >
              <img
                src={`/im/gal/${img}`}
                alt={`Galería ${idx + 1}`}
                className="w-full md:h-44 h-64  object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay de color en hover */}
              <div className="absolute inset-0 bg-cyan-800 bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
