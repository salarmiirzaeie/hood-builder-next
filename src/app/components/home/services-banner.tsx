"use client";

import Image from "next/image";
import React from "react";
import { toast } from "react-toastify";

// Main App component
const ServicesBanner = () => {
  const notify = () => toast("Coming Soon!");

  return (
    <div className="relative w-full h-[400px]  bg-cover bg-center flex items-center justify-center text-white p-4">
      <Image src={"/images/img-bg-featured.webp"} alt="Background Image" fill className="object-cover" />
      {/* Overlay to darken the background image and improve text readability */}

      {/* Content Container */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 leading-tight">
          Plans, City Approvals, Full Construction and Remodeling Services
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg mb-8 leading-relaxed">
          For over 25 years, we have been providing our clients with full construction, remodeling, and cleaning
          services at competitive pricing. Our leading team of mechanical, electrical, and structural experts, and
          contractors can execute projects of any size, and are sure to exceed your expectations for more than any Hood
          Builder competitor.
        </p>

        {/* Button */}
        <button
          onClick={notify}
          className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75 transition-colors duration-200"
        >
          VIEW OUR SERVICES
        </button>
      </div>
    </div>
  );
};

export default ServicesBanner;
