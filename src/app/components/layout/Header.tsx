// app/components/layout/Header.jsx
"use client";
import React, { useState } from "react";
import { Phone, Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import servicesData from "@/data/services.json"; // Adjust path if necessary

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State to manage which mobile sub-dropdown is open (stores the slug of the parent service)
  const [openMobileSubDropdown, setOpenMobileSubDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close any open sub-dropdown when the main mobile menu is toggled
    setOpenMobileSubDropdown(null);
  };

  const handleMobileSubDropdownToggle = (slug: string) => {
    setOpenMobileSubDropdown(openMobileSubDropdown === slug ? null : slug);
  };

  // Main navigation items (excluding ALL SERVICES, which is handled dynamically)
  const navItems = [
    { label: "ABOUT US", href: "/about-us" },
    { label: "CLIENTS", href: "/clients" },
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
            <nav className="hidden md:flex flex-1">
              <div className="flex space-x-6 lg:space-x-8 py-2">
                {/* Home Link (moved to the beginning) */}
                <Link
                  href="/"
                  className="text-gray-700 hover:text-indigo-600 px-2 py-1 text-sm font-medium rounded-md transition duration-300"
                >
                  Home
                </Link>

                {/* ALL SERVICES (main dropdown) */}
                <div className="relative group">
                  <h3 className="flex items-center text-gray-700 hover:text-indigo-600 px-2 py-1 text-sm font-medium rounded-md transition duration-300 focus:outline-none">
                    ALL SERVICES
                    <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  </h3>
                  {/* First-level dropdown content (visible on group-hover) */}
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform scale-95 group-hover:scale-100">
                    {servicesData.map((service, index) => (
                      <div key={index} className="relative group/item">
                        {/* Nested group for second-level hover */}
                        {service.type === "link" ? (
                          <Link
                            href={`/services/${service.slug}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                          >
                            {service.label}
                          </Link>
                        ) : (
                          <>
                            <Link
                              href={`/services/${service.slug}`} // Link to the category overview page
                              className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                            >
                              {service.label}
                              <ChevronDown className="w-4 h-4 ml-2 group-hover/item:rotate-180 transition-transform duration-300" />
                            </Link>
                            {/* Second-level dropdown (visible on group-hover/item) */}
                            {service.subServices && (
                              <div className="absolute left-full top-0 ml-1 w-48 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 ease-in-out transform scale-95 group-hover/item:scale-100">
                                {service.subServices.map((subService, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    href={`/services/${service.slug}/${subService.slug}`}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                                  >
                                    {subService.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Other Navigation Items */}
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
              <LinkScroll to="contactFormSection" spy={true} smooth={true} duration={500}>
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
          {/* Home Link for Mobile (moved to the beginning) */}
          <Link
            href="/"
            className="w-full text-left block text-gray-700 hover:bg-gray-100 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition duration-300"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setOpenMobileSubDropdown(null); // Close any open sub-dropdowns
            }}
          >
            Home
          </Link>

          {/* ALL SERVICES (main dropdown for mobile) */}
          <div className="relative">
            <button
              onClick={() => handleMobileSubDropdownToggle("all-services-main")} // Use a unique ID for the main dropdown
              className="w-full text-left flex items-center justify-between text-gray-700 hover:bg-gray-100 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition duration-300"
              aria-haspopup="true"
              aria-expanded={openMobileSubDropdown === "all-services-main" ? "true" : "false"}
            >
              ALL SERVICES
              {openMobileSubDropdown === "all-services-main" ? (
                <ChevronUp className="ml-1 w-5 h-5" />
              ) : (
                <ChevronDown className="ml-1 w-5 h-5" />
              )}
            </button>
            {openMobileSubDropdown === "all-services-main" && (
              <div className="mt-2 pl-4 border-l border-gray-200 space-y-1">
                {servicesData.map((service, index) => (
                  <div key={index}>
                    {service.type === "link" ? (
                      <Link
                        href={`/services/${service.slug}`}
                        className="block text-gray-700 hover:bg-gray-100 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium"
                        onClick={() => {
                          setIsMobileMenuOpen(false); // Close main menu
                          setOpenMobileSubDropdown(null); // Close all sub-dropdowns
                        }}
                      >
                        {service.label}
                      </Link>
                    ) : (
                      <>
                        <button
                          onClick={() => handleMobileSubDropdownToggle(service.slug)}
                          className="w-full text-left flex items-center justify-between text-gray-700 hover:bg-gray-100 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium"
                          aria-haspopup="true"
                          aria-expanded={openMobileSubDropdown === service.slug ? "true" : "false"}
                        >
                          {service.label}
                          {openMobileSubDropdown === service.slug ? (
                            <ChevronUp className="ml-1 w-5 h-5" />
                          ) : (
                            <ChevronDown className="ml-1 w-5 h-5" />
                          )}
                        </button>
                        {openMobileSubDropdown === service.slug && service.subServices && (
                          <div className="mt-2 pl-4 border-l border-gray-200 space-y-1">
                            {service.subServices.map((subService, subIndex) => (
                              <Link
                                key={subIndex}
                                href={`/services/${service.slug}/${subService.slug}`}
                                className="block text-gray-600 hover:bg-gray-50 hover:text-indigo-500 px-3 py-2 rounded-md text-sm font-medium"
                                onClick={() => {
                                  setIsMobileMenuOpen(false); // Close main menu
                                  setOpenMobileSubDropdown(null); // Close all sub-dropdowns
                                }}
                              >
                                {subService.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Other Mobile Navigation Items */}
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="w-full text-left block text-gray-700 hover:bg-gray-100 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition duration-300"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setOpenMobileSubDropdown(null); // Close any open sub-dropdowns
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="px-4 py-2">
          <LinkScroll to="contactFormSection" spy={true} smooth={true} duration={500}>
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
