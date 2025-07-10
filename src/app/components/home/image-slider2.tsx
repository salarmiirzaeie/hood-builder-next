"use client";

import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Import the carousel's CSS for core functionality
import Head from "next/head"; // For SEO meta tags

// --- Interfaces and Data ---

interface CarouselItem {
  id: number;
  image: string;
  icon?: string;
  title: string;
  hasButton: boolean;
  buttonText?: string;
  // Add a description for better SEO and accessibility
  description: string;
}

const originalItems: CarouselItem[] = [
  {
    id: 1,
    image: "/images/img-slider-air-balancing.webp",
    icon: "/icons/icon-white-wind.webp",
    title: "AIR BALANCING",
    hasButton: false,
    description: "Expert air balancing services for optimal HVAC system performance and energy efficiency.",
  },
  {
    id: 2,
    image: "/images/img-slider-fire-protection.webp",
    icon: "/icons/icon-white-fireprotection.webp",
    title: "FIRE PROTECTION",
    hasButton: false,
    description: "Comprehensive fire protection solutions to ensure safety and compliance for commercial properties.",
  },
  {
    id: 3,
    image: "/images/img-slider-hoods.webp",
    icon: "/icons/icon-white-hoods.webp",
    title: "HOODS, MUA, EXHAUST FANS",
    hasButton: false,
    description: "Installation and maintenance of commercial kitchen hoods, make-up air units, and exhaust fans.",
  },
  {
    id: 4,
    image: "/images/img-slider-generalcontracting.webp",
    icon: "/icons/icon-white-generalcontracting.webp",
    title: "RESTAURANT BUILD UP AND GENERAL CONTRACTING",
    hasButton: false,
    description: "Full-service general contracting for restaurant build-outs, renovations, and new constructions.",
  },
  {
    id: 5,
    image: "/images/img-slider-restaurants.webp",
    icon: "/icons/icon-white-restaurants.webp",
    title: "RESTAURANT SERVICES",
    hasButton: false,
    description: "Specialized services tailored for restaurants, including HVAC, plumbing, and equipment maintenance.",
  },
];

// Define responsive settings for the carousel
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4, // Show 4 items on desktop
    slidesToSlide: 1, // Slide one item at a time
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2, // Show 2 items on tablet
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1, // Show 1 item on mobile
    slidesToSlide: 1,
  },
};

// --- Custom Arrow Components (Optimized and Accessible) ---

interface ArrowProps {
  onClick: () => void;
  // Added for accessibility and better semantic HTML
  direction: "left" | "right";
  ariaLabel: string;
}

const CustomArrow: React.FC<ArrowProps> = ({ onClick, direction, ariaLabel }) => {
  const arrowClass = direction === "left" ? "left-4" : "right-4";
  const svgPath =
    direction === "left" ? (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
    ) : (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    );

  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`absolute top-1/2 ${arrowClass} -translate-y-1/2 bg-white bg-opacity-75 p-3 rounded-full shadow-lg hover:bg-opacity-100 transition-all duration-300 z-30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}
      // Add more semantic role for screen readers
      role="button"
    >
      <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {svgPath}
      </svg>
    </button>
  );
};

// --- Custom Dot Component (Optimized and Accessible) ---

// --- Main ImageSlider Component ---

const ImageSlider: React.FC = () => {
  // Preload LCP image if it's the first image in the carousel
  // This helps with "Largest Contentful Paint image was lazily loaded" and LCP timing.
  const lcpImageUrl = originalItems[0]?.image; // Assuming the first item's image is the most likely LCP.

  return (
    <>
      {/* SEO Optimization: Preload LCP image */}
      {lcpImageUrl && (
        <Head>
          <link rel="preload" href={lcpImageUrl} as="image" />
          {/* Add a meta description if your page doesn't have one */}
          <meta
            name="description"
            content="Explore our comprehensive services including air balancing, fire protection, kitchen hood systems, general contracting, and specialized restaurant services."
          />
          {/* Add a canonical link if this component is on a page that could have duplicate content */}
          {/* <link rel="canonical" href="https://yourwebsite.com/your-carousel-page" /> */}
        </Head>
      )}

      <div className="relative w-full mt-2 overflow-hidden" role="region" aria-label="Our Company Services Carousel">
        <Carousel
          responsive={responsive}
          infinite={true}
          arrows={true}
          customLeftArrow={<CustomArrow onClick={() => {}} direction="left" ariaLabel="Previous slide" />}
          customRightArrow={<CustomArrow onClick={() => {}} direction="right" ariaLabel="Next slide" />}
          showDots={true}
          renderDotsOutside={true}
          dotListClass="custom-dot-list"
          // `itemClass` can be useful for styling individual items if needed
          // For now, let's rely on the flexbox/width inside the item itself
          // itemClass="flex justify-center items-center" // Example, adjust as needed for spacing
          containerClass="carousel-container" // Custom class for the carousel container
          // Performance and Accessibility Props for react-multi-carousel
          partialVisible={false} // Prevents half-shown items which can improve LCP for some layouts
          removeArrowOnDeviceType={["mobile"]} // Hide arrows on small screens if desired
          draggable={true} // Enable dragging on touch devices
          swipeable={true} // Enable swiping on touch devices
          keyBoardControl={true} // Enable keyboard navigation (Tab, Arrow keys)
          minimumTouchDrag={80} // Adjust sensitivity for touch drag
          autoPlay={false} // Disable autoplay to avoid unexpected movement and improve accessibility
          autoPlaySpeed={3000} // Speed if autoplay is enabled
          transitionDuration={500} // Smooth transition duration
        >
          {originalItems.map((item, index) => (
            <div
              key={item.id} // Use item.id as key
              className="px-2" // Add horizontal padding for spacing between items (adjust as needed)
              role="group"
              aria-roledescription="slide"
              // Announce current slide number for screen readers, ensuring it maps to originalItems length
              aria-label={`${item.title}, slide ${index + 1} of ${originalItems.length}`}
            >
              <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-md">
                {/* Added rounded-lg and shadow for better aesthetics */}
                <Image
                  src={item.image}
                  alt={item.title} // Use title for alt text, it's descriptive
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105 z-10"
                  // LCP Optimization: Set priority for the first image only
                  // This tells Next.js to load it eagerly and optimize for LCP.
                  // `react-multi-carousel` will handle lazy loading for other off-screen images.
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"} // Explicitly lazy load others
                />
                {item.icon && (
                  <Image
                    src={item.icon}
                    alt={`${item.title} service icon`} // More descriptive alt for icon
                    width={50}
                    height={50}
                    className="absolute z-20 top-6 left-6 opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                    loading="lazy" // Icons are generally less critical for LCP
                  />
                )}
                <div className="absolute z-20 inset-0 bg-[rgba(0,0,0,.5)] group-hover:bg-[rgba(169,167,144,.7)] transition-colors duration-300 flex flex-col justify-end items-start p-6 text-white">
                  {/* Corrected heading hierarchy: Use h2 for major sections, h3 for subsections */}
                  <h2 className="text-xl md:text-2xl font-bold mb-2 uppercase leading-tight group-hover:text-amber-300 transition-colors duration-300">
                    {item.title}
                  </h2>
                  {/* Add a hidden description for SEO and screen readers */}
                  <p className="sr-only">{item.description}</p>
                  {item.hasButton && (
                    <button className="mt-4 px-6 py-2 border border-white text-white text-sm uppercase font-semibold rounded-full hover:bg-white hover:text-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                      {item.buttonText}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        {/* Global Styles for react-multi-carousel dots and potentially other elements */}
        <style jsx global>{`
          /* Custom dot list styling */
          .react-multi-carousel-dot-list {
            display: flex;
            justify-content: center;
            margin-top: 1.5rem; /* Increased margin for better spacing */
            gap: 0.75rem; /* Increased gap for better visual separation */
            padding-bottom: 1rem; /* Ensure space at the bottom */
          }

          /* Default dot button style */
          .react-multi-carousel-dot button {
            width: 0.75rem; /* w-3 */
            height: 0.75rem; /* h-3 */
            border-radius: 9999px; /* rounded-full */
            background-color: #9ca3af; /* bg-gray-400 */
            transition: background-color 0.3s ease; /* transition-colors duration-300 */
            border: none; /* Remove default button border */
            padding: 0; /* Remove default button padding */
            cursor: pointer; /* Indicate it's clickable */
          }

          /* Active dot button style */
          .react-multi-carousel-dot--active button {
            background-color: #4b5563; /* bg-gray-800 */
          }

          /* Item spacing (adjust px value for desired gap) */
          /* .carousel-item-padding-40-px {
            padding: 0 10px;
          } */

          /* Override default carousel container margin if needed */
          .carousel-container {
            padding-bottom: 4rem; /* Add padding to prevent dots from overlapping content */
          }

          /* Accessibility: Hidden content for screen readers */
          .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border-width: 0;
          }
        `}</style>
      </div>
    </>
  );
};

export default ImageSlider;
