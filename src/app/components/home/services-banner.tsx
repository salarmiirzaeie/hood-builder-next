import Image from "next/image";
import React from "react";

// Main App component
const ServicesBanner = () => {
  return (
    <div
      className="relative w-full h-[500px]  bg-cover bg-center flex items-center justify-center text-white p-4"
      style={{ backgroundImage: "/images/img-bg-featured.webp" }} // Placeholder background image
    >
      <Image src={"/images/img-bg-featured.webp"} alt="Background Image" layout="fill" objectFit="cover" />
      {/* Overlay to darken the background image and improve text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Container */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
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
        <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75 transition-colors duration-200">
          VIEW OUR SERVICES
        </button>
      </div>
    </div>
  );
};

export default ServicesBanner;
