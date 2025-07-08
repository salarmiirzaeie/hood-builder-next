"use client";
import React, { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    // { label: "ALL SERVICES", href: "/services" },
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about-us" },
    { label: "CLIENTS", href: "/clients" },
    // { label: "HOODBUILDER'S PROJECTS", href: "/hoodbuilders-featured-projects" },
    { label: "FAQ", href: "/faq" },
    // { label: "BLOG", href: "/blog" },
    { label: "CONTACT US", href: "/contact-us" },
  ];
  return (
    <header className="font-inter">
      {/* Main Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <Link className="flex flex-col items-start cursor-pointer" href="/">
              <Image width={200} height={100} src="/logos/logo-main-3.webp" alt="Hoodbuilder Logo" />
            </Link>
          </div>

          {/* Phone Number */}
          <div className="flex items-center text-gray-700 text-lg font-semibold">
            <Phone className="w-5 h-5 mr-2 text-gray-600" />
            <Link href="tel:+13037777720">(303) 777 7720</Link>
          </div>
        </div>
      </div>

      {/* Navigation Bar Section */}
      <div className="bg-white border-t border-gray-200 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            {/* Hamburger Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition duration-300"
                aria-expanded={isMobileMenuOpen ? "true" : "false"}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu color="#a9a790" className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex flex-1 overflow-x-auto whitespace-nowrap scrollbar-hide">
              <div className="flex space-x-6 lg:space-x-8 py-2">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-gray-700 hover:text-indigo-600 px-2 py-1 text-sm font-medium rounded-md transition duration-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Get Quote Button */}
            <div className="flex-shrink-0 ml-4">
              <LinkScroll
                to="contactFormSection" // Matches the name of the Element in the Footer
                spy={true}
                smooth={true}
                duration={500}
              >
                <button className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-sm">
                  GET QUOTE
                </button>
              </LinkScroll>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden bg-white shadow-lg border-t border-gray-200 py-2`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="w-full text-left block text-gray-700 hover:bg-gray-100 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="px-4 py-2">
          <LinkScroll
            to="contactFormSection" // Matches the name of the Element in the Footer
            spy={true}
            smooth={true}
            duration={500}
          >
            <button className="w-full bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 text-sm">
              GET QUOTE
            </button>
          </LinkScroll>
        </div>
      </div>
    </header>
  );
};

export default Header;
