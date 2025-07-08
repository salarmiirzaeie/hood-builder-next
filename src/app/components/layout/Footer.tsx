"use client";

import React from "react";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { toast } from "react-toastify";
import Link from "next/link";

// Toast helper
const notify = () => toast("Coming soon!");

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-8 border-b border-gray-700 mb-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
            <Image
              src="/logos/logo-footer.svg"
              alt="HoodBuilder Logo"
              width={225}
              height={70}
              className="mr-0 md:mr-4 mb-4 md:mb-0 rounded-md"
            />
            <p className="text-lg text-white">
              For Queries and Quote Contact Hood Builder today at{" "}
              <span>
                <Link href="tel:+13037777720" className="text-secondary font-bold whitespace-nowrap">
                  303-777-7720
                </Link>
              </span>
            </p>
          </div>

          {/* CONTACT US button (already a button, correctly handled) */}
          <button
            onClick={notify}
            className="bg-secondary outline hover:bg-primary text-white font-bold py-3 px-6 rounded-md shadow-lg transition duration-300 ease-in-out w-full md:w-auto"
          >
            CONTACT US
          </button>
        </div>

        {/* Middle Section */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mb-8">
          {/* Restaurant Services */}
          <div>
            <h3 className="text-secondary font-bold text-lg mb-4">RESTAURANT SERVICES</h3>
            <ul className="space-y-2">
              <li>
                {/* Changed to button */}
                <button
                  onClick={notify}
                  className="text-left w-full hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Commercial Kitchen Cleaning
                </button>
              </li>
              <li>
                {/* Changed to button */}
                <button
                  onClick={notify}
                  className="text-left w-full hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Commercial Kitchen &amp; Restaurant Construction
                </button>
              </li>
              <li>
                {/* Changed to button */}
                <button
                  onClick={notify}
                  className="text-left w-full hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Commercial Kitchen Design &amp; Remodeling
                </button>
              </li>
              <li>
                {/* Changed to button */}
                <button
                  onClick={notify}
                  className="text-left w-full hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Commercial Restaurant Equipment in Denver, Colorado
                </button>
              </li>
              <li>
                {/* Changed to button */}
                <button
                  onClick={notify}
                  className="text-left w-full hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Restaurant Remodeling
                </button>
              </li>
              <li>
                {/* Changed to button */}
                <button
                  onClick={notify}
                  className="text-left w-full hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Walk‑in Coolers and Freezers
                </button>
              </li>
            </ul>
          </div>

          {/* HVAC */}
          <div>
            <h3 className="text-secondary font-bold text-lg mb-4">HVAC</h3>
            <ul className="space-y-2">
              {[
                "Air Conditioning Service in Denver, Colorado",
                "Heating Services in Denver, Colorado",
                "Make‑Up Air Service in Denver, Colorado",
                "Ventilation Services in Denver, Colorado",
              ].map((label) => (
                <li key={label}>
                  {/* Changed to button */}
                  <button
                    onClick={notify}
                    className="text-left w-full hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* HOODS */}
          <div>
            <h3 className="text-secondary font-bold text-lg mb-4">HOODS</h3>
            <ul className="space-y-2">
              {["Cleaning", "Fans", "Installation", "Make‑Up Air"].map((label) => (
                <li key={label}>
                  {/* Changed to button */}
                  <button
                    onClick={notify}
                    className="text-left w-full hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Food Truck Design */}
          <div>
            <h3 className="text-secondary font-bold text-lg mb-4">FOOD TRUCK DESIGN</h3>
            <ul className="space-y-2">
              <li>
                {/* Changed to button */}
                <button
                  onClick={notify}
                  className="text-left w-full hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                  Food Truck / Food Trailer
                </button>
              </li>
            </ul>
          </div>

          {/* General Contracting */}
          <div>
            <h3 className="text-secondary font-bold text-lg mb-4">GENERAL CONTRACTING</h3>
            <ul className="space-y-2">
              {[
                "Architectural Drawing",
                "Electrical Drawing",
                "Fire Suppression System Drawing",
                "Mechanical Drawing",
                "Plumbing Services",
                "Structural Engineering",
              ].map((label) => (
                <li key={label}>
                  {/* Changed to button */}
                  <button
                    onClick={notify}
                    className="text-left w-full hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Fire Protection */}
          <div>
            <h3 className="text-secondary font-bold text-lg mb-4">FIRE PROTECTION</h3>
            <ul className="space-y-2">
              {["Service", "Buckeye", "Ansul", "Pyrocem", "Amerex", "Range Guard"].map((label) => (
                <li key={label}>
                  {/* Changed to button */}
                  <button
                    onClick={notify}
                    className="text-left w-full hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links (assuming these *will* be actual pages) */}
          <div>
            <h3 className="text-secondary font-bold text-lg mb-4">OTHER LINKS</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Hood Builder Clients", "FAQ", "Blog", "Contact Us", "Sitemap"].map((label) => (
                <li key={label}>
                  {/* These should ideally be Next.js <Link> components if they lead to actual pages */}
                  {/* For now, keeping as buttons since they trigger 'Coming soon!' */}
                  <button
                    onClick={notify}
                    className="text-left w-full hover:text-white transition duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-1 xl:col-span-1">
            <h3 className="text-secondary font-bold text-lg mb-4 flex items-center justify-center sm:justify-start">
              <MapPin className="mr-2" size={20} /> LOCATION
            </h3>
            <p className="text-gray-400 text-center sm:text-left">Unit 215, 5925 E Evans Ave, Denver, CO 80222</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center text-center pt-8 border-t border-gray-700">
          <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 mb-4">
            <Image
              src="/logos/logo-footer-copyright.webp"
              height={66}
              width={208}
              alt="EPA Logo"
              className="h-12 rounded-md my-1"
            />
          </div>
          <p className="text-gray-400 mb-2 text-sm sm:text-base">
            California Contractors License #: 943941 • C‑16 &amp; C‑20 Certified
          </p>
          <p className="text-gray-400 mb-4 text-sm sm:text-base">We are EPA Certified.</p>
          <p className="text-secondary text-sm mb-2">Get Leads by Top Organic Leads.</p>
          <p className="text-gray-500 text-sm">Copyright © 2025 Hood Builder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
