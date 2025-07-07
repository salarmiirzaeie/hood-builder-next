"use client";
import Image from "next/image";
import React from "react";
import { toast } from "react-toastify";

// Main App component
const Clients = () => {
  // Array of logo data (using placeholder images for demonstration)
  const logos = [
    { name: "Pizza Hut", src: "/logos/logo-pizzahut.webp", width: 82, height: 83 },
    { name: "McDonalds", src: "/logos/logo-ikea.webp", width: 119, height: 21 },
    { name: "Toyota", src: "/logos/logo-carrefour.webp", width: 106, height: 84 },
    { name: "Nissan", src: "/logos/logo-costco.webp", width: 132, height: 118 },
    { name: "Costco", src: "/logos/logo-subway.webp", width: 134, height: 39 },
    { name: "IKEA", src: "/logos/logo-toyota.webp", width: 82, height: 67 },
    { name: "Carrefour", src: "/logos/logo-mcdonalds.webp", width: 96, height: 65 },
    { name: "Subway", src: "/logos/logo-nissan.webp", width: 94, height: 80 },
  ];
  const notify = () => toast("Coming Soon!");

  return (
    <div className=" flex flex-col border-b border-gray-200 items-center justify-center bg-white font-sans p-4">
      {/* Container for the logo grid */}
      <div className="w-full  max-w-7xl mx-auto py-12 md:py-24">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-8 justify-items-center items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center p-2">
              <Image
                src={logo.src}
                alt={`${logo.name} Logo`}
                width={logo.width}
                height={logo.height}
                className="max-w-full h-auto object-contain rounded-lg shadow-sm hover:scale-105 transition-transform duration-200"
                // Fallback for image loading errors
              />
            </div>
          ))}
        </div>
      </div>

      {/* Button Section */}
      <div className="mt-8 mb-16">
        <button
          onClick={notify}
          className="px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-colors duration-200"
        >
          VIEW ALL CLIENTS
        </button>
      </div>
    </div>
  );
};

export default Clients;
