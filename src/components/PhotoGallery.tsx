"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

interface PhotoGalleryProps {
  images: string[];
}


export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  const prevImage = () => {
    if (selectedIndex !== null) {
      setDirection(-1);
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const nextImage = () => {
    if (selectedIndex !== null) {
      setDirection(1);
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const closeModal = () => setSelectedIndex(null);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "ArrowRight") nextImage();
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      modalRef.current &&
      e.target instanceof Node &&
      !modalRef.current.contains(e.target)
    ) {
      closeModal();
    }
  };

  useEffect(() => {
    if (selectedIndex !== null) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedIndex]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    trackMouse: true,
  });

  const variants = {
    enter: (direction: number) => ({ x: direction > 0 ? "100%" : "-100%" }),
    center: { x: 0 },
    exit: (direction: number) => ({ x: direction < 0 ? "100%" : "-100%" }),
  };

  return (
    <div data-aos="fade-up" className="max-w-6xl mx-auto py-12 pt-2 px-0">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-1">
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            className="relative w-full aspect-square overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedIndex(idx)}
          >
            <img
              src={src}
              alt={`Foto ${idx + 1}`}
              className="absolute top-0 left-0 w-full h-full object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 16vw"
              srcSet={`${src}?w=400 400w, ${src}?w=800 800w, ${src}?w=1200 1200w, ${src}?w=1600 1600w`}
            />
          </motion.div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          {...swipeHandlers}
        >
          <div
            ref={modalRef}
            className="relative w-full h-full flex items-center justify-center"
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white text-3xl font-bold z-50 cursor-pointer"
            >
              ×
            </button>
            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-4xl font-bold z-50 cursor-pointer"
            >
              ‹
            </button>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.img
                key={selectedIndex}
                src={images[selectedIndex]}
                alt={`Foto ${selectedIndex + 1}`}
                className="w-full h-full object-contain"
                sizes="100vw"
                srcSet={`${images[selectedIndex]}?w=400 400w, ${images[selectedIndex]}?w=800 800w, ${images[selectedIndex]}?w=1200 1200w, ${images[selectedIndex]}?w=1600 1600w`}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.2 }}
              />
            </AnimatePresence>
            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-4xl font-bold z-50 cursor-pointer"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
