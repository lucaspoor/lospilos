import React from "react";

const data = [
  {
    title: "AREAS DE CAMPING",
    description:
"Nuestras parcelas de camping están pensadas para tu comodidad y conexión con la naturaleza. Con espacio para carpas, parrilla y lavadero individual, cada sector ofrece privacidad y comodidad. Aquí podrás disfrutar de noches estrelladas y despertar rodeado de aire puro en un entorno seguro y acogedor.",
    img: "/im/ser/espacios.jpg",
  },
  {
    title: "ACCESO PRIVADO A LA PLAYA",
    description:
    "Nuestro camping ofrece acceso exclusivo a la playa, ideal para relajarte junto al lago o disfrutar de actividades acuáticas en un entorno seguro y tranquilo. Aquí podrás vivir momentos únicos, lejos de las multitudes, conectándote con la naturaleza en un espacio pensado solo para ti.",
    img: "/im/ser/playa.jpeg",
  },
  {
    title: "ÁREAS DE PICNIC y FOGATAS",
    description:
      "Disfruta momentos inolvidables alrededor de una fogata o compartiendo en nuestras áreas de picnic. Perfectas para reuniones familiares o entre amigos, cuentan con mesas y espacios preparados para pasar tardes agradables al aire libre. Ademas los campings cuentan con parrilla para que puedas realizar un asado de ensueño junto a tu familia o amigos.",
    img: "/im/ser/espacio.jpg",
  },
  {
    title: "BAÑOS Y ESTACIONAMIENTOS",
    description:
    "Disfruta de baños y duchas con agua caliente, siempre limpios y cómodos para tu tranquilidad. Además, contamos con amplios estacionamientos seguros y de fácil acceso, pensados para que tu experiencia de camping sea práctica y sin preocupaciones, desde que llegas hasta el momento de partir."
  ,  img: "/im/ser/estacionamientos.jpg",
  },
];

export default function Servicios() {
  return (
    <div className="w-full bg-white flex-col flex items-center">
         <h2 className="text-4xl text-cyan-900 mb-4 text-center">Instalaciones y Servicios</h2>
    <p className="text-center mb-12 text-cyan-800">Disfruta de una experiencia única con instalaciones completas y acceso a la naturaleza.</p>
    <section className="max-w-6xl bg-white mx-auto py-16 px-6 grid md:grid-cols-2 gap-12">
      {data.map((item, idx) => (
        <div key={idx} className="flex flex-col">
          <img
            src={item.img}
            alt={item.title}
            className="mb-4 object-cover w-full h-64"
          />
          <h3 className="text-xl text-cyan-900 font-bold mb-2">{item.title}</h3>
          <p className="text-cyan-800">{item.description}</p>
        </div>
      ))}
    </section>
    </div>
  );
}
