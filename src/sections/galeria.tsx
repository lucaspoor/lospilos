import { PhotoGallery } from "@/components/PhotoGallery";

const images = [
  "/im/gal/playa.jpeg",
  "/im/gal/cascada.jpeg",
  "/im/gal/cristalino.jpeg",
  "/im/gal/laplaya.jpeg",
  "/im/gal/mediterraneo.jpeg",
  "/im/gal/olas.jpeg",
  "/im/gal/otoño.jpeg",
  "/im/gal/primavera.jpeg",
  "/im/gal/boyas.jpg",
  "/im/gal/entrada.jpg",
  "/im/gal/espacios.jpg",
  "/im/gal/estrellas.jpg",
  "/im/gal/jardin.jpg",
  "/im/gal/lago.jpg",
  "/im/gal/niños.jpg",
];

export default function Galeria() {
  return (
    <section id="link_galeria" className=" bg-white">
      <div id="lucas" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 data-aos="fade-up" className="text-4xl text-cyan-800 mb-4">
          Galería de fotos
        </h2>
        <p data-aos="fade-up" className="mb-12 text-cyan-800">
          ¡Una selección de fotos de los paisajes y espacios que encuentras en
          los Pilos y sus alrededores!
        </p>
        <PhotoGallery images={images}></PhotoGallery>
      </div>
    </section>
  );
}
