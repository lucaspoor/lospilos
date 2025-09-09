"use client";
export function Mapa() {
  return (
    <iframe
      src="https://www.openstreetmap.org/export/embed.html?bbox=-71.78375601768495%2C-39.190813400895145%2C-71.7665469646454%2C-39.18326266703219&amp;layer=mapnik&amp;marker=-39.187038135362215%2C-71.77515149116516"
      className="w-full h-full border-0"
      allowFullScreen
      loading="lazy"
    ></iframe>
  );
}
