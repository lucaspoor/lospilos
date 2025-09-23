import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Camping Los Pilos",
  description:
    "Bienvenido al camping 'los pilos' un maravilloso espacio natural en el que podras construit junto a tus amigos y famililia, memorias para toda la vida",
  keywords:
    "camping, Los Pilos, Pucón, naturaleza, aventura, turismo, Chile, araucania",
  authors: [{ name: "Camping Los Pilos" }],
  creator: "http://www.pooweb.cl",
  publisher: "Camping Los Pilos",
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
  },
  openGraph: {
    title: "Camping Los Pilos",
    description:
      "Bienvenido al camping 'los pilos' un maravilloso espacio natural en el que podras construit junto a tus amigos y famililia, memorias para toda la vida",
    url: "https://lospilos.cl",
    siteName: "Camping Los Pilos",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/favicon-96x96.png", // Make sure to add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Camping Los Pilos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Camping Los Pilos",
    description:
      "Bienvenido al camping 'los pilos' un maravilloso espacio natural en el que podras construit junto a tus amigos y famililia, memorias para toda la vida",
    images: ["/favicon-96x96.png"], // Same image as OpenGraph
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};
