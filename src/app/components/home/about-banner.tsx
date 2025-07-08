"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutBanner = () => {
  return (
    <section className="bg-[#eee] relative text-gray-800 pb-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto  px-4 ">
        {/* Centered top image */}
        <div className="flex justify-center mb-12">
          <Image src="/images/img-hood.webp" width={512} height={107} alt="hood" />
        </div>

        {/* Text content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column */}
          <div className="lg:w-1/2 space-y-6 text-base md:text-lg leading-relaxed">
            <p className="text-gray-700">
              We deal in, design, and install ventilation systems from some of the most reputed brands in the industry.
              From multi-utility restaurant construction to kitchen{" "}
              <span className="font-bold text-red-500">hood installation</span> as well as fire suppression system
              installation, we are your go-to partner for planning and completing the entire crucial setup of a modern
              commercial restaurant in the most professional and satisfying manner.
            </p>
            <p className="text-gray-700">
              Our experts are highly skilled in the fabrication and installation of food facilities while focusing on
              efficiency and sustainability. No matter where you plan to set up your commercial kitchen or restaurant,
              our team is always fully prepared to provide you top quality service and prompt attention.
            </p>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2 space-y-6 text-base md:text-lg leading-relaxed">
            <h2 className="text-xl font-semibold text-gray-800">Our Commercial Kitchen is In Good Hands</h2>
            <p className="text-gray-700">
              We recommend <span className="font-bold text-red-500">fire protection systems</span> from only the most
              trusted brands such as Ansul, Range Guard, Pyrochem, and Amerex. Our professionals are uniquely qualified
              to properly install all the components of fire extinguishers, fire sprinklers, and fire alarm systems in{" "}
              <span className="font-bold text-red-500">restaurants, food trucks, and trailers</span>. In addition to
              this, we also specialize in the installation of highly efficient{" "}
              <span className="font-bold text-red-500">HVAC systems</span> as well as their inspection, repair, and
              maintenance. We firmly stand behind all the products we offer and provide follow-up to ensure a completely
              hassle-free operation.
            </p>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Link href="/about-us">
            <button className="px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-colors duration-200">
              About Hoot Builder
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
