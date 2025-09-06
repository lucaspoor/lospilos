import Actividades from "@/sections/actividades";

import ContactSection from "@/sections/contact-section";
import Footer from "@/sections/footer";
import Gallery from "@/sections/gallery";
import Hero from "@/sections/hero";
import History from "@/sections/history";
import Reserva from "@/sections/reservas";
import Servicios from "@/sections/servicios";
import Ubicacion from "@/sections/ubicacion";

const arreglo = [1, 2, 3, 4];

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <History></History>
      <Servicios></Servicios>
      <Reserva></Reserva>
      <Actividades></Actividades>

      <Gallery></Gallery>
      <Ubicacion></Ubicacion>
      <ContactSection></ContactSection>
      <Footer></Footer>
    </div>
  );
}
