"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Logo {
  name: string;
  src: string;
  width: number;
  height: number;
}
interface ClientsProps {
  logos: Logo[];
  showButton?: boolean;
}
// Main App component
const Clients: React.FC<ClientsProps> = ({ logos, showButton = true }) => {
  // Array of logo data (using placeholder images for demonstration)

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

      {showButton && (
        <div className="mt-8 mb-16">
          <Link href={"/clients"}>
            <button className="px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-colors duration-200">
              VIEW ALL CLIENTS
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Clients;
