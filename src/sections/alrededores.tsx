"use client";
import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

// corregir path de los iconos de leaflet en algunos bundlers
// delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// Marcadores: coordenadas (decimal) — algunas son aproximadas; editarlas si quieres precisión.
const lugares = [
  // Datos verificados / bien documentados
  {
    name: "Pucón (ciudad)",
    coords: [-39.27667, -71.97444],
    section: "Ciudades y Servicios",
    desc: "Ciudad base para explorar la zona.",
  },
  {
    name: "Ojos del Caburgua",
    coords: [-39.2394, -71.83399], // fuente: coordenadas públicas (ver fuente)
    section: "Atracciones Naturales",
    desc: "Pozones de agua azulada y cascadas.",
  },
  {
    name: "Parque Nacional Huerquehue",
    coords: [-39.13861, -71.66639],
    section: "Atracciones Naturales",
    desc: "Bosques de araucarias, lagunas y senderos.",
  },
  {
    name: "Volcán Villarrica",
    coords: [-39.42083, -71.93917],
    section: "Ríos y Deportes de Aventura / Volcán",
    desc: "Volcán activo, ascensos guiados y vistas panorámicas.",
  },
  {
    name: "Termas Menetúe (Menetue)",
    coords: [-39.33, -71.95], // aproximado cerca de Camino Internacional Km 30 (ver fuente)
    section: "Termas y Relajo",
    desc: "Complejo termal (Camino Internacional, km 30).",
  },
  {
    name: "Río Trancura (zona put-in)",
    coords: [-39.25833, -71.87411], // coordenada de put-in aproximada para actividades río/rafting.
    section: "Ríos y Deportes de Aventura",
    desc: "Rafting, kayak y pesca deportiva (zona baja/tramos para rafting).",
  },

  // Marcadores cercanos / aproximados (lugares con menos disponibilidad de coordenadas exactas)
  {
    name: "Salto Los Copihues (aprox.)",
    coords: [-39.241, -71.834], // aproximado — cercano a Ojos del Caburgua. Ajustar si tienes coordenada exacta.
    section: "Atracciones Naturales",
    desc: "Cascada accesible; está muy cerca de Ojos del Caburgua.",
  },
  {
    name: "Salto La China (aprox.)",
    coords: [-39.35, -71.82], // aproximación basada en Palguín / áreas cercanas.
    section: "Atracciones Naturales",
    desc: "Cascada fotogénica; popular en rutas desde Pucón.",
  },
  {
    name: "Salto El León",
    coords: [-39.42046, -71.76095], // fuente: imágenes y geo-referencias públicas.
    section: "Atracciones Naturales",
    desc: "Complejo turístico con saltos y piscinas naturales.",
  },
  {
    name: "Laguna Verde (Laguna de las Ranas) (aprox.)",
    coords: [-39.2, -71.84], // aproximada — ajustar si consigues coordenada exacta
    section: "Atracciones Naturales",
    desc: "Lugar para caminatas familiares (Laguna Verde / Laguna de las Ranas).",
  },
  {
    name: "Reserva Nacional / Villarrica (zona)",
    coords: [-39.417, -71.933],
    section: "Atracciones Naturales",
    desc: "Reserva / Parque con senderos y miradores (Villarrica).",
  },
  {
    name: "Playas de Lago Caburgua (Playa Blanca / Playa Negra) (aprox.)",
    coords: [-39.12778, -71.77333], // lago Caburgua (playas en su orilla).
    section: "Playas y Actividades Náuticas",
    desc: "Playa Blanca y Playa Negra en torno al Lago Caburgua.",
  },
  {
    name: "Termas Huife (aprox.)",
    coords: [-39.31, -71.9],
    section: "Termas y Relajo",
    desc: "Termas naturales en el área de Huife (aprox. camino Huife).",
  },
  {
    name: "Los Pozones (aprox.)",
    coords: [-39.3, -71.89],
    section: "Termas y Relajo",
    desc: "Pozones y piscinas termales (área Huife/entorno).",
  },
  {
    name: "Santuario El Cañi (aprox.)",
    coords: [-39.29, -71.92],
    section: "Trekking y Senderismo",
    desc: "Destino local de trekking (marcado como Santuario El Cañi).",
  },
  {
    name: "Cueva Volcánica (túnel de lava, aprox.)",
    coords: [-39.28, -71.9],
    section: "Atracciones Naturales",
    desc: "Túneles de lava cercanos a Pucón.",
  },
  {
    name: "Restaurante El Mirador (ejemplo)",
    coords: [-39.2775, -71.975], // en Pucón (puedes poner la ubicación exacta si la conoces)
    section: "Ciudades y Servicios",
    desc: "Restaurante local (marca de ejemplo).",
  },
  {
    name: "Cafetería junto a Ojos del Caburgua (ejemplo)",
    coords: [-39.2394, -71.834],
    section: "Ciudades y Servicios",
    desc: "Punto de servicio para visitantes en Ojos del Caburgua.",
  },
];

function FitBoundsToMarkers({ markers }: any) {
  const map = useMap();
  useEffect(() => {
    if (!markers || markers.length === 0) return;
    const latlngs = markers.map((m: any) => m.coords);
    map.fitBounds(latlngs, { padding: [60, 60] });
  }, [map, markers]);
  return null;
}

export function MapPucon() {
  // centro inicial: Pucón
  const center = [-39.27667, -71.97444];

  return (
    <div className="w-full h-[70vh] rounded-2xl overflow-hidden shadow-lg">
      <MapContainer
        center={center as any}
        zoom={11}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <FitBoundsToMarkers markers={lugares} />

        {lugares.map((l, i) => (
          <Marker key={i} position={l.coords as any}>
            <Popup>
              <div className="min-w-[180px]">
                <strong>{l.name}</strong>
                <div className="text-sm mt-1">{l.section}</div>
                <div className="text-xs mt-2">{l.desc}</div>
                <div className="text-xs mt-2 text-gray-500">
                  {Array.isArray(l.coords)
                    ? `Lat: ${l.coords[0].toFixed(6)}, Lng: ${l.coords[1].toFixed(6)}`
                    : ""}
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
