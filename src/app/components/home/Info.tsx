"use client";
import React from "react";
import { Link } from "react-scroll";

const InfoSection = () => {
  return (
    <section className="flex  flex-col items-center border-b border-gray-200 justify-center bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto    text-center">
        {/* Title */}
        <h2 className="text-md sm:text-md md:text-xl font-semibold text-primary mb-6">
          Full Mechanical and Fire Protection Installation and Services.
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10">
          Hood Builder is one of the most trusted names for HVAC installation, hood set up, and commercial restaurant
          design. Whether you already run a food service business or want to open a facility soon, our design and
          remodeling services are designed to perfectly serve all your needs. We have been working with hospitality
          businesses for more than two decades and our client base continues to grow further. All the credit for this
          goes to our passionate and hard-working team of installation experts and interior designers who are truly
          invested in your business success.
        </p>

        {/* Call to Action Button */}
        <Link
          to="contactFormSection" // Matches the name of the Element in the Footer
          spy={true}
          smooth={true}
          duration={500}
        >
          <button className="bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            GET A FREE QUOTE
          </button>
        </Link>
      </div>
    </section>
  );
};

export default InfoSection;
