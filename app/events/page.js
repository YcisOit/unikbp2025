"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  PlusIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

export default function EventsPage() {
  const images = [
    "/images/event1.jpg",
    "/images/event2.jpg",
    "/images/event3.jpg",
    "/images/event4.jpg",
    "/images/event5.jpg",
    "/images/event6.jpg",
    "/images/event7.jpg",
    "/images/event8.jpg",
    "/images/event9.jpg",
    "/images/event10.jpg",
    "/images/event11.jpg",
    "/images/event12.jpg",
    "/images/event13.jpg",
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentLightboxIndex, setCurrentLightboxIndex] = useState(0);

  function openLightbox(index) {
    setCurrentLightboxIndex(index);
    setLightboxOpen(true);
  }

  function closeLightbox() {
    setLightboxOpen(false);
  }

  function prevImage() {
    setCurrentLightboxIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  }

  function nextImage() {
    setCurrentLightboxIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  }

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      {/* Background Header Section */}
      <div
        className="h-[250px] bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/tback.png')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-lg md:text-4xl font-bold font-['Times_New_Roman']">
            Events
          </h1>

          <div className="border-t-2 border-white w-[80%] md:w-[500px] my-4" />

          <div className="text-white py-2 px-6 flex items-center space-x-2 text-sm">
            <Image
              src="/images/breadcrumb.png"
              alt="breadcrumb"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <Link href="/" className="hover:underline cursor-pointer">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#fbbf24] font-semibold">Events</span>
          </div>
        </div>
      </div>

      {/* Images Grid Section */}
      <div className="w-full max-w-7xl mx-auto p-4 overflow-visible">
        {/* First 3 rows - 4 images per row */}
        <div className="grid grid-cols-4 gap-4">
          {images.slice(0, 12).map((src, idx) => (
            <div
              key={idx}
              className={`border-2 border-black rounded overflow-hidden relative cursor-pointer transition-all duration-300`}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => openLightbox(idx)}
              style={{ width: 300, height: 170 }}
            >
              <Image
                src={src}
                alt={`Event ${idx + 1}`}
                width={300}
                height={200}
                className={`object-cover transition duration-300 ${
                  hoveredIndex === idx ? "blur-[2px]" : ""
                }`}
              />

              {/* Hover overlay icon */}
              {hoveredIndex === idx && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-yellow-400 bg-opacity-90 p-2 rounded-full">
                    <PlusIcon className="h-6 w-6 text-black" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 4th row with 1 image centered */}
        <div className="flex justify-center mt-4 relative">
          <div
            className={`border-2 border-black rounded overflow-hidden relative cursor-pointer transition-all duration-300`}
            onMouseEnter={() => setHoveredIndex(12)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => openLightbox(12)}
            style={{ width: 300, height: 170 }}
          >
            <Image
              src={images[12]}
              alt="Event 13"
              width={300}
              height={200}
              className={`object-cover transition duration-300 ${
                hoveredIndex === 12 ? "blur-[2px]" : ""
              }`}
            />

            {/* Hover overlay icon */}
            {hoveredIndex === 12 && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-yellow-400 bg-opacity-90 p-2 rounded-full">
                  <PlusIcon className="h-6 w-6 text-black" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox / Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative bg-white p-4 rounded shadow-lg max-w-4xl w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-yellow-400 rounded-full p-2 hover:bg-yellow-500 transition"
              aria-label="Previous Image"
            >
              <ChevronLeftIcon className="h-6 w-6 text-black" />
            </button>

            {/* Image */}
            <Image
              src={images[currentLightboxIndex]}
              alt={`Lightbox Image ${currentLightboxIndex + 1}`}
              width={700}
              height={450}
              className="object-contain rounded"
            />

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-400 rounded-full p-2 hover:bg-yellow-500 transition"
              aria-label="Next Image"
            >
              <ChevronRightIcon className="h-6 w-6 text-black" />
            </button>

            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-black font-bold text-3xl leading-none hover:text-red-600 transition"
              onClick={closeLightbox}
              aria-label="Close Lightbox"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
