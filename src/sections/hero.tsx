"use client";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import useWindowDimensions from "@/functions/getviewport";
import Navbar from "@/components/navbar";

const images = [
  { route: "/im/favoritas/hero3.jpeg" },
  { route: "/im/favoritas/hero2.jpeg" },
  { route: "/im/favoritas/hero1.jpg" },
  { route: "/im/favoritas/hero4.jpeg" },
];

const movimages = [
  { route: "/im/hero3mv.png" },
  { route: "/im/favoritas/hero3.jpeg" },
  { route: "/im/favoritas/hero1.jpg" },
  { route: "/im/favoritas/hero4.jpeg" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const time = 3000;
  const [responsiveBanner, setResponsiveBanner] = useState("");
  const [dispositivo, setDispositivo] = useState("");
  const bannerdesktop = images[index].route;
  const bannermov = movimages[index].route;

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (width) {
      if (width < 640) {
        setResponsiveBanner(bannermov);
        setDispositivo("mobile");
      } else {
        setResponsiveBanner(bannerdesktop);
        setDispositivo("desktop");
      }
    } else {
      console.log("no cargo nada");
    }
  });

  /* useEffect(() => {
    if (index < 3) {
      const timer = setTimeout(() => {
        setIndex(index + 1);
      }, time);
    } else {
      setTimeout(() => {
        setIndex(0);
      }, time);
    }
  }, [index]); */

  return (
    <div id="link_inicio" className={`overflow-clip relative md:h-[800px] sm:h-[750px] h-[650px] `}>
      <div className="flex justify-center bg-black bg-opacity-40 hero-overlay overflow-x-auto  ">
        <Image
          alt="Banner"
          width={1920}
          height={1000}
          src={responsiveBanner}
          className="sm:min-h-[1000px] h-auto lg:min-w-[1920px] sm:min-w-[1400px] min-h-[800px] min-w-[400px]  align-middle bg-center fixed top-0 -z-10"
          quality={80}
          objectPosition="center"
        ></Image>
      </div>
      <div className="absolute top-0 right-0 left-0 bottom-0 ">
        <div className="flex w-full h-full justify-center items-center ">
          <div className="flex flex-col px-6  items-baseline-last text-white ">
            <p className="font-roboto  xl:text-3xl text-xl tracking-widest">
              Bienvenidos a el
            </p>
            <h1 className=" text-7xl text-shadow-lg  ">
              CAMPING LOS PILOS
            </h1>
            <h2 className="xl:text-4xl text-xl  mt-5">
              "Un lugar para descansar y crear recuerdos inolvidables"
            </h2>
          </div>
        </div>

        <Navbar></Navbar>
      </div>
    </div>
  );
}
