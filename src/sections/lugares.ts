const array: Array<Lugar> = [
  {
    name: "Pucón",
    disabled: true,
    coords: [-39.27667, -71.97444],
    section: "Ciudades y Servicios",
    desc: "Pucón es la ciudad base para explorar la Araucanía lacustre, con alojamientos, restaurantes, tours y servicios turísticos. Desde aquí salen excursiones a parques, termas, ríos y el volcán Villarrica. Su costanera es ideal para caminar y su vida nocturna animada.",
    img: "lugares/0.png",
  },
  {
    name: "Ojos del Caburgua",
    coords: [-39.2394, -71.83399],
    section: "Atracciones Naturales",
    desc: "Conjunto de pozones de agua azul intenso alimentados por desagüe subterráneo del lago Caburgua. Cuenta con senderos, miradores y pasarelas para apreciar las cascadas. Ideal para toda la familia, complementable con visitas a Playa Blanca o Negra.",
    img: "lugares/1.png",
  },
  {
    name: "Parque Nacional Huerquehue",
    coords: [-39.13861, -71.66639],
    section: "Atracciones Naturales",
    desc: "Famoso por bosques de araucarias milenarias, lagunas y espectaculares vistas del volcán Villarrica. Ofrece senderos variados, destacando el circuito a las lagunas Chico, Verde y Toro. Perfecto para trekking, fotografía y avistamiento de aves.",
    img: "lugares/2.png",
  },
  {
    name: "Volcán Villarrica",
    coords: [-39.42083, -71.93917],
    section: "Ríos y Deportes de Aventura / Volcán",
    desc: "Uno de los volcanes más activos de Sudamérica y atracción principal. Desde Pucón se hacen ascensos guiados al cráter. En invierno es centro de ski y en verano ofrece vistas panorámicas de la región.",
    img: "lugares/3.png",
  },
  {
    name: "Termas Menetúe",
    coords: [-39.33, -71.95],
    section: "Termas y Relajo",
    desc: "Complejo termal a 30 km de Pucón con piscinas techadas y al aire libre, spa y restaurante. Excelente para relajarse tras trekking o actividades de aventura.",
    img: "lugares/4.png",
  },
  {
    name: "Río Trancura",
    coords: [-39.25833, -71.87411],
    section: "Ríos y Deportes de Aventura",
    desc: "Epicentro del rafting en Pucón. Bajadas para todos los niveles en aguas rápidas. Popular para kayakistas y pesca con mosca durante la temporada.",
    img: "lugares/5.png",
  },
  {
    name: "Salto Los Copihues",
    coords: [-39.241, -71.834],
    section: "Atracciones Naturales",
    desc: "Cascada cercana a los Ojos del Caburgua, de fácil acceso y menos concurrida. Excelente para disfrutar la naturaleza en un ambiente tranquilo.",
    img: "lugares/6.png",
  },
  {
    name: "Salto La China",
    coords: [-39.35, -71.82],
    section: "Atracciones Naturales",
    desc: "Salto de agua fotogénico en Palguín. Lugar menos masificado, ideal para quienes disfrutan caminar senderos de dificultad baja a media.",
    img: "lugares/7.png",
  },
  {
    name: "Salto El León",
    coords: [-39.42046, -71.76095],
    section: "Atracciones Naturales",
    desc: "Una de las cascadas más impresionantes, con salto alto y vegetación exuberante. Cuenta con senderos, miradores y áreas de picnic.",
    img: "lugares/8.png",
  },
  {
    name: "Laguna Verde",
    coords: [-39.2, -71.84],
    section: "Atracciones Naturales",
    desc: "Laguna pequeña rodeada de bosque nativo. Ideal para caminatas familiares, observación de aves y disfrutar la tranquilidad del entorno.",
    img: "lugares/9.png",
  },
  {
    name: "Reserva Nacional Villarrica",
    coords: [-39.417, -71.933],
    section: "Atracciones Naturales",
    desc: "Área protegida con bosques nativos, miradores y senderos. Punto de partida para explorar el volcán Villarrica y rutas hacia Coñaripe.",
    img: "lugares/10.png",
  },
  {
    name: "Playas de Lago Caburgua",
    coords: [-39.12778, -71.77333],
    section: "Playas y Actividades Náuticas",
    desc: "Playas famosas del Lago Caburgua. Playa Blanca de arena clara y ambiente familiar, Playa Negra de arena volcánica y más tranquila. Ideales para nadar y disfrutar el paisaje.",
    img: "lugares/11.png",
  },
  {
    name: "Termas Huife",
    coords: [-39.31, -71.9],
    section: "Termas y Relajo",
    desc: "Complejo termal tradicional con piscinas al aire libre junto al río Liucura. Ofrece ambiente natural y servicios de spa.",
    img: "lugares/12.png",
  },
  {
    name: "Los Pozones",
    coords: [-39.3, -71.89],
    section: "Termas y Relajo",
    desc: "Termas rústicas accesibles con piscinas de piedra en el bosque. Populares entre mochileros y jóvenes, especialmente en la noche.",
    img: "lugares/13.png",
  },
  {
    name: "Santuario El Cañi",
    coords: [-39.29, -71.92],
    section: "Trekking y Senderismo",
    desc: "Área privada con uno de los trekkings más emblemáticos de Pucón. Exigente, recompensa con vistas de volcanes y lagunas desde la cumbre.",
    img: "lugares/14.png",
  },
  {
    name: "Cuevas Volcánicas",
    coords: [-39.28, -71.9],
    section: "Atracciones Naturales",
    desc: "Formación geológica de antiguas erupciones del volcán Villarrica. Se recorren túneles de lava y se aprende sobre la historia volcánica en visitas guiadas.",
    img: "lugares/15.png",
  },
];
export type Lugar = {
  name: string;
  coords: number[];
  section: string;
  desc: string;
  img: string;
  disabled?: boolean;
};

export const lugares = array.filter((l) => !l.disabled);
