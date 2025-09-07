import React from "react";
import { PhotoGallery } from "@/components/PhotoGallery";

const images = [
  "im/Los-Pilos-Caburgua-58.jpg",
  "im/Los-Pilos-Caburgua-121.jpg",
  "im/hero/cache/Los-Pilos-Caburgua-36.jpg",
  "im/hero/cache/10-Los-Pilos-Octubre-2.jpg",
  "im/hero/Los-Pilos-Caburgua-40.jpg",
  "im/hero/Los-Pilos-Caburgua-43.jpg",
  "im/Los-Pilos-Caburgua-28.jpg",
  "im/Los-Pilos-Caburgua-48.jpg",
  "im/Los-Pilos-Caburgua-12.jpg",
  "im/Los-Pilos-Caburgua-56.jpg",
  "im/Los-Pilos-Caburgua-26.jpg",
  "im/Los-Pilos-Caburgua-29.jpg",
  "im/Los-Pilos-Caburgua-32.jpg",
  "im/Los-Pilos-Caburgua-30.jpg",
  "im/Los-Pilos-Caburgua-41.jpg",
  "im/Los-Pilos-Caburgua-49.jpg",
  "im/Los-Pilos-Caburgua-50.jpg",
  "im/Los-Pilos-Caburgua-47.jpg",
  "im/Los-Pilos-Caburgua-27.jpg",
  "im/Los-Pilos-Caburgua-42.jpg",
  "im/Los-Pilos-Caburgua-51.jpg",
  "im/Los-Pilos-Caburgua-31.jpg",
];

export default function Gallery() {
  return <PhotoGallery images={images} />;
}
