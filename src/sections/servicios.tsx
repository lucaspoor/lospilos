import React from "react";

const data = [
  {
    title: "AREAS DE CAMPING",
    description:
      "Nuestros sitios de camping están pensados para tu comodidad y conexión con la naturaleza. Con espacio para carpas, parrilla, lavadero individual, cada sector ofrece privacidad y comodidad. Aquí podrás disfrutar de noches estrelladas y despertar en lo mas puro de la naturaleza.",
    img: "/im/nuevas/area.jpeg",
  },
  {
    title: "ACCESO DIRECTO A LA PLAYA",
    description:
      "En nuestro camping estaras a tan solo pasos de la playa, ideal para poder relajarte junto al lago o disfrutar de actividades acuáticas en un entorno seguro y tranquilo. Aquí podrás vivir momentos únicos, sin tener que recorrer grandes distancias desde tu sitio. ",
    img: "/im/ser/playa.jpeg",
  },
  {
    title: "ÁREAS DE PICNIC",
    description:
      "Disfruta momentos inolvidables compartiendo en nuestras áreas de picnic. Perfectas para reuniones familiares o entre amigos, cuentan con mesas y espacios preparados para pasar tardes agradables al aire libre. Los campings cuentan con parrilla para que puedas realizar un asado de ensueño junto a tu familia y amigos.",
    img: "/im/nuevas/vistas.jpeg",
  },
  {
    title: "BAÑOS Y ESTACIONAMIENTOS",
    description:
      "Descansa con total comodidad en nuestras instalaciones de primer nivel: baños y duchas con agua caliente disponibles 24/7, mantenidos con los más altos estándares de limpieza. Tu vehículo estará seguro en nuestros amplios estacionamientos de fácil acceso, diseñados estratégicamente para que tu única preocupación sea disfrutar de tu estadía, desde el momento de tu llegada hasta tu partida.",
    img: "/im/nuevas/baños.jpeg",
  },
  {
    title: "JUEGOS INFANTILES",
    description:
      "Unos clásicos juegos de madera: castillos, casas, toboganes y columpios para que tus hijos puedan desarrollar sus habilidades y compartir con amigos.",
    img: "/im/gal/juegos-horizontal.jpeg",
  },
];

export default function Servicios() {
  return (
    <div
      className="w-full bg-white flex-col flex items-center  pt-20"
      id="link_instalaciones"
    >
      <div className="max-w-6xl mx-auto px-6 ">
        <h2 data-aos="fade-up" className="text-4xl text-cyan-900 mb-4">
          Instalaciones y Servicios{" "}
        </h2>
        <p data-aos="fade-up" className="text-cyan-800">
          Disfruta de una experiencia única con instalaciones completas y acceso
          a la naturaleza.
        </p>

        <section className="py-16 grid md:grid-cols-2 gap-12">
          {data.map((item, idx) => (
            <div data-aos="fade-up" key={idx} className="flex flex-col">
              <img
                src={item.img}
                alt={item.title}
                className="mb-4 object-cover w-full h-64"
              />
              <h3 className="text-xl text-cyan-900 font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-cyan-800">{item.description}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
