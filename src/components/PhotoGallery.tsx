"use client";

import Image from "next/image";
import { useState } from "react";

interface PhotoGalleryProps {
  images: string[];
  propertyName: string;
}

export function PhotoGallery({ images, propertyName }: PhotoGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goNext = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  const goPrev = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      {/* Gallery Grid */}
      <div className="gallery-grid h-[280px] sm:h-[400px] lg:h-[500px]">
        {images.slice(0, 5).map((src, i) => (
          <button
            key={i}
            onClick={() => openLightbox(i)}
            className="relative overflow-hidden transition-opacity hover:opacity-90"
          >
            <Image
              src={src}
              alt={`${propertyName} — photo ${i + 1}`}
              fill
              className="object-cover"
              sizes={i === 0 ? "50vw" : "25vw"}
              priority={i === 0}
            />
            {i === 4 && images.length > 5 && (
              <div className="absolute inset-0 flex items-center justify-center bg-stone-950/50">
                <span className="text-lg font-medium text-white">
                  +{images.length - 5} more
                </span>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Show all photos button */}
      <button
        onClick={() => openLightbox(0)}
        className="mt-3 flex items-center gap-2 text-sm text-stone-400 transition-colors hover:text-white"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
          />
        </svg>
        Show all photos
      </button>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/95 backdrop-blur-sm">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-stone-800 text-white transition-colors hover:bg-stone-700"
            aria-label="Close gallery"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute left-6 top-6 text-sm text-stone-400">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Prev button */}
          <button
            onClick={goPrev}
            className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-stone-800/80 text-white transition-colors hover:bg-stone-700"
            aria-label="Previous photo"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Image */}
          <div className="relative h-[80vh] w-[90vw] max-w-5xl">
            <Image
              src={images[currentIndex]}
              alt={`${propertyName} — photo ${currentIndex + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          {/* Next button */}
          <button
            onClick={goNext}
            className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-stone-800/80 text-white transition-colors hover:bg-stone-700"
            aria-label="Next photo"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
