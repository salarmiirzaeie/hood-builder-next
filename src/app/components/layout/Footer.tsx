import React from "react";
import { MapPin } from "lucide-react"; // Only MapPin is used from lucide-react now
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Logo, Contact Info, Contact Us Button */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-8 border-b border-gray-700 mb-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
            {/* External SVG Logo from public directory - using a placeholder for demonstration */}
            <Image
              src="/logos/logo-footer.svg" // Placeholder for logo
              alt="HoodBuilder Logo"
              className="h-10 mr-0 md:mr-4 mb-4 md:mb-0 rounded-md"
            />
            <p className="text-lg text-white">
              For Queries and Quote Contact Hood Builder today at{" "}
              <span className="text-secondary font-bold whitespace-nowrap">303-777-7720</span>
            </p>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md shadow-lg transition duration-300 ease-in-out w-full md:w-auto">
            CONTACT US
          </button>
        </div>

        {/* Middle Section: Navigation Links */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mb-8">
          {/* Restaurant Services */}
          <div>
            <h3 className="text-secondary font-bold text-lg mb-4">RESTAURANT SERVICES</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Commercial Kitchen Cleaning
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Commercial Kitchen & Restaurant Construction
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Commercial Kitchen Design & Remodeling
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Commercial Restaurant Equipment in Denver, Colorado
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Restaurant Remodeling
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Walk-in Coolers and Freezers
                </a>
              </li>
            </ul>
          </div>

          {/* HVAC */}
          <div>
            <h3 className="text-secondary font-bold text-lg mb-4">HVAC</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Air Conditioning Service in Denver, Colorado
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Heating Services in Denver, Colorado
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Make-Up Air Service in Denver, Colorado
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Ventilation Services in Denver, Colorado
                </a>
              </li>
            </ul>
          </div>

          {/* Hoods */}
          <div>
            <h3 className="text-secondary font-bold text-lg mb-4">HOODS</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Cleaning
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Fans
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Installation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Make-Up Air
                </a>
              </li>
            </ul>
          </div>

          {/* Food Truck Design */}
          <div>
            <h3 className="text-secondary font-bold text-lg mb-4">FOOD TRUCK DESIGN</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Food Truck / Food Trailer
                </a>
              </li>
            </ul>
          </div>

          {/* General Contracting */}
          <div>
            <h3 className="text-secondary font-bold text-lg mb-4">GENERAL CONTRACTING</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Architectural Drawing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Electrical Drawing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Fire Suppression System Drawing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Mechanical Drawing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Plumbing Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Structural Engineering
                </a>
              </li>
            </ul>
          </div>

          {/* Fire Protection */}
          <div>
            <h3 className="text-secondary font-bold text-lg mb-4">FIRE PROTECTION</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Buckeye
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Ansul
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Pyrocem
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Amerex
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Range Guard
                </a>
              </li>
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h3 className="text-secondary font-bold text-lg mb-4">OTHER LINKS</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Hood Builder Clients
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-1 xl:col-span-1">
            <h3 className="text-secondary font-bold text-lg mb-4 flex items-center justify-center sm:justify-start">
              <MapPin className="mr-2" size={20} /> LOCATION
            </h3>
            <p className="text-gray-400 text-center sm:text-left">Unit 215, 5925 E Evans Ave, Denver, CO 80222</p>
          </div>
        </div>

        {/* Bottom Section: Certifications, Copyright, and Lead Info */}
        <div className="flex flex-col items-center text-center pt-8 border-t border-gray-700">
          <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 mb-4">
            {/* Placeholder for certification logos */}
            <Image src="/logos/logo-footer-copyright.webp" alt="EPA Logo" className="h-12 rounded-md my-1" />
          </div>
          <p className="text-gray-400 mb-2 text-sm sm:text-base">
            California Contractors License #: 943941 We are C-16 and C-20 Certified.
          </p>
          <p className="text-gray-400 mb-4 text-sm sm:text-base">We are EPA Certified.</p>
          <p className="text-secondary text-sm mb-2">Get Leads by Top Organic Leads.</p>
          <p className="text-gray-500 text-sm">Copyright © 2025 Hood Builder. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
