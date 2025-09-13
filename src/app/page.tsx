"use client";

import Instalaciones from "@/components/instalaciones";
import Navbar from "@/components/navbar";
import { PhotoGallery } from "@/components/PhotoGallery";
import { ServiciosInstalaciones } from "@/components/servicios";
import Actividades from "@/sections/actividades";
import { MapPucon } from "@/sections/alrededores";

import ContactSection from "@/sections/contact-section";
import Footer from "@/sections/footer";
import Galeria from "@/sections/galeria";
import Gallery from "@/sections/gallery";
import Hero from "@/sections/hero";
import Heroe from "@/sections/heroe";
import History from "@/sections/history";
import Reserva from "@/sections/reservas";
import { AtractivosZona } from "@/sections/atractivos-zona";
import Servicios from "@/sections/servicios";
import Ubicacion from "@/sections/ubicacion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const arreglo = [1, 2, 3, 4];

const images = [
  "/im/gal/playa.jpeg",
  "/im/gal/cascada.jpeg",
  "/im/gal/cristalino.jpeg",
  "/im/gal/juegosluz.jpeg",
  "/im/gal/juegospucon.jpeg",
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

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <Heroe></Heroe>
      <Servicios></Servicios>
      <Actividades></Actividades>
      <Galeria></Galeria>
      <Ubicacion></Ubicacion>
      <ContactSection></ContactSection>
      <ServiciosInstalaciones></ServiciosInstalaciones>
      <AtractivosZona />
      <Footer></Footer>
    </div>
  );
}
