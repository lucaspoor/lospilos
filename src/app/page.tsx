"use client"

import Actividades from "@/sections/actividades";

import Contacto from "@/sections/contacto";
import Footer from "@/sections/footer";
import Gallery from "@/sections/gallery";
import Hero from "@/sections/hero";
import History from "@/sections/history";
import Reserva from "@/sections/reservas";
import Servicios from "@/sections/servicios";
import Ubicacion from "@/sections/ubicacion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const arreglo = [1, 2, 3, 4];

export default function Home() {
  
    useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <Hero></Hero>
      <Servicios></Servicios>
      <Actividades></Actividades>

      <Reserva></Reserva>

      <History></History>

      <Gallery></Gallery>
      <Ubicacion></Ubicacion>
      <Contacto></Contacto>
      <Footer></Footer>
    </div>
  );
}
