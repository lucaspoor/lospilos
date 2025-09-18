"use client";

import useWindowDimensions from "@/functions/getviewport";
import Navbar from "./navbar";
import { useScrollY } from "./scroll";
import { useEffect, useState } from "react";

export default function NavRender() {
  const scrollY = useScrollY();
  const [dispositivo, setDispositivo] = useState("");

  /*
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (width) {
      if (width < 640) {
     
        setDispositivo("mobile");
      } else {

        setDispositivo("desktop");
      }
    } else {
      console.log("no cargo nada");
    }
  });*/

  return (
    <Navbar
      classname="fixed top-0 transition-all duration-500"
      bg={scrollY > 200 ? "#005f78" : "transparent"}
    />
  );
}
