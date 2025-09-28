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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.campinglospilos.cl"),
  title: {
    default: "Camping Los Pilos - Caburgua, Pucón",
    template: "%s | Camping Los Pilos",
  },
  description:
    "Camping 'Los Pilos': excelente espacio para carpas, quincho, baños de primera calidad en bella playa de arena blanca en el Caburgua",
  keywords:
    "camping, Los Pilos, Pucón, naturaleza, aventura, turismo, Chile, araucania, Caburgua, playa",
  authors: [{ name: "Camping Los Pilos" }],
  creator: "http://www.pooweb.cl",
  publisher: "Camping Los Pilos",
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "https://www.campinglospilos.cl",
  },
  openGraph: {
    title: "Camping Los Pilos - Caburgua, Pucón",
    description:
      "Camping 'Los Pilos': excelente espacio para carpas, quincho, baños de primera calidad en bella playa de arena blanca en el Caburgua",
    url: "https://www.campinglospilos.cl",
    siteName: "Camping Los Pilos",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vista panorámica de Camping Los Pilos en Caburgua",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Camping Los Pilos - Caburgua, Pucón",
    description:
      "Camping 'Los Pilos': excelente espacio para carpas, quincho, baños de primera calidad en bella playa de arena blanca en el Caburgua",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vista panorámica de Camping Los Pilos en Caburgua",
      },
    ],
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon",
        url: "/apple-icon-180x180.png",
      },
    ],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Campground",
              name: "Camping Los Pilos",
              image: "https://www.campinglospilos.cl/og-image.jpg",
              description:
                "Camping 'Los Pilos': excelente espacio para carpas, quincho, baños de primera calidad en bella playa de arena blanca en el Caburgua",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Caburgua",
                addressRegion: "Araucanía",
                addressCountry: "CL",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "-39.2727",
                longitude: "-71.7892",
              },
              url: "https://www.campinglospilos.cl",
              telephone: "++56 9 9597 4344", // Add your phone number
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
