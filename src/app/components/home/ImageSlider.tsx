// components/ImageSlider.tsx
"use client"; // This directive marks the component as a Client Component

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image"; // Optimized image component for Next.js

// Define the type for a single carousel item
interface CarouselItem {
  id: number;
  image: string;
  icon?: string; // Optional icon path
  title: string;
  hasButton: boolean;
  buttonText?: string; // Optional button text if hasButton is true
}

const originalCarouselItems: CarouselItem[] = [
  {
    id: 1,
    image: "/images/img-slider-fire-protection.webp",
    icon: "/icons/icon-white-fireprotection.webp",
    title: "FIRE PROTECTION",
    hasButton: false,
  },

  {
    id: 2,
    image: "/images/img-slider-air-balancing.webp",
    icon: "/icons/icon-white-wind.webp",
    title: "AIR BALANCING",
    hasButton: false,
  },
  {
    id: 3,
    image: "/images/img-slider-hoods.webp",
    icon: "/icons/icon-white-hoods.webp",
    title: "HOODS, MUA, EXHAUST FANS",
    hasButton: false,
  },
  {
    id: 4,
    image: "/images/img-slider-generalcontracting.webp",
    icon: "/icons/icon-white-generalcontracting.webp",
    title: "RESTAURANT BUILD UP AND GENERAL CONTRACTING",
    hasButton: false,
  },
  {
    id: 5,
    image: "/images/img-slider-restaurants.webp",
    icon: "/icons/icon-white-restaurants.webp",
    title: "RESTAURANT SERVICES",
    hasButton: false,
  },
];

const VISIBLE_ITEMS_DESKTOP = 4; // Number of items visible at once on desktop (xl breakpoint)
const DUPLICATION_COUNT = VISIBLE_ITEMS_DESKTOP; // For smooth infinite loop

const getLoopedItems = (items: CarouselItem[]): CarouselItem[] => {
  if (items.length === 0) return [];
  const preItems = items.slice(-DUPLICATION_COUNT);
  const postItems = items.slice(0, DUPLICATION_COUNT);
  return [...preItems, ...items, ...postItems];
};

const ImageSlider: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [loopedCarouselItems, setLoopedCarouselItems] = useState<CarouselItem[]>([]);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [visibleItemsCount, setVisibleItemsCount] = useState(1); // Default to 1 for mobile

  useEffect(() => {
    setLoopedCarouselItems(getLoopedItems(originalCarouselItems));
  }, []);

  // Effect to initialize scroll position
  useEffect(() => {
    if (carouselRef.current && loopedCarouselItems.length > 0) {
      const itemElement = carouselRef.current.children[0] as HTMLElement;
      if (itemElement) {
        const itemWidth = itemElement.offsetWidth;
        carouselRef.current.scrollLeft = DUPLICATION_COUNT * itemWidth;
      }
    }
  }, [loopedCarouselItems]);

  // Effect to determine visible items based on screen size
  useEffect(() => {
    const calculateVisibleItems = () => {
      if (carouselRef.current) {
        const carouselWidth = carouselRef.current.offsetWidth;
        const itemElement = carouselRef.current.children[DUPLICATION_COUNT] as HTMLElement; // Get a real item
        if (itemElement) {
          const itemWidth = itemElement.offsetWidth;
          // Calculate how many items fit in the current carousel width
          // Use Math.round to handle potential fractional widths from browser rendering
          setVisibleItemsCount(Math.round(carouselWidth / itemWidth));
        } else {
          // Fallback if itemElement is not found, e.g., during initial render
          setVisibleItemsCount(1);
        }
      }
    };

    // Initial calculation
    calculateVisibleItems();

    // Add event listener for window resize
    window.addEventListener("resize", calculateVisibleItems);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", calculateVisibleItems);
    };
  }, [loopedCarouselItems]); // Re-run if looped items change, though not strictly necessary for this logic alone

  const scrollToPosition = useCallback(
    (targetScrollLeft: number) => {
      if (carouselRef.current && !isScrolling) {
        setIsScrolling(true);
        carouselRef.current.scrollTo({
          left: targetScrollLeft,
          behavior: "smooth",
        });

        // Set a timeout to clear isScrolling after the scroll animation
        // 600ms is a reasonable duration, adjust if your smooth scroll is faster/slower
        setTimeout(() => {
          setIsScrolling(false);
        }, 600);
      }
    },
    [isScrolling]
  );

  const goToPrev = () => {
    if (carouselRef.current && !isScrolling) {
      const currentScrollLeft = carouselRef.current.scrollLeft;
      // Get the width of a single item
      const itemWidth = (carouselRef.current.children[0] as HTMLElement)?.offsetWidth || 0;
      // Scroll by one visible item
      const scrollStep = 1;

      const targetScrollLeft = currentScrollLeft - scrollStep * itemWidth;
      scrollToPosition(targetScrollLeft);
    }
  };

  const goToNext = () => {
    if (carouselRef.current && !isScrolling) {
      const currentScrollLeft = carouselRef.current.scrollLeft;
      // Get the width of a single item
      const itemWidth = (carouselRef.current.children[0] as HTMLElement)?.offsetWidth || 0;
      // Scroll by one visible item
      const scrollStep = 1;

      const targetScrollLeft = currentScrollLeft + scrollStep * itemWidth;
      scrollToPosition(targetScrollLeft);
    }
  };

  const handleScroll = useCallback(() => {
    if (!carouselRef.current || isScrolling) return;

    const scrollLeft = carouselRef.current.scrollLeft;
    const itemWidth = (carouselRef.current.children[0] as HTMLElement)?.offsetWidth || 0;

    const totalRealItemsWidth = originalCarouselItems.length * itemWidth;
    const preItemsWidth = DUPLICATION_COUNT * itemWidth;

    if (scrollLeft < preItemsWidth) {
      carouselRef.current.scrollLeft = totalRealItemsWidth + scrollLeft;
    } else if (scrollLeft >= preItemsWidth + totalRealItemsWidth) {
      carouselRef.current.scrollLeft = scrollLeft - totalRealItemsWidth;
    }
  }, [isScrolling]);

  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.addEventListener("scroll", handleScroll);
      return () => {
        carouselElement.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  if (loopedCarouselItems.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full mt-2 overflow-hidden">
      <div
        className="flex overflow-x-scroll bg-white scroll-smooth snap-x snap-mandatory hide-scrollbar space-x-2"
        ref={carouselRef}
      >
        {loopedCarouselItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            // These width classes define how many items are visible at each breakpoint
            // On mobile (default), w-full means 1 item is visible
            // md:w-1/2 means 2 items visible on medium screens
            // lg:w-1/3 means 3 items visible on large screens
            // xl:w-1/4 means 4 items visible on extra-large screens
            className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 snap-start relative group"
            // The minWidth ensures a consistent item width across the entire track,
            // based on the desktop layout's ideal item size,
            // which helps with precise scrolling calculations.
            style={{ minWidth: `calc(100% / ${VISIBLE_ITEMS_DESKTOP})` }}
          >
            <div className="relative w-full h-96 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 z-10 group-hover:scale-105"
              />
              <div
                className="absolute z-20 inset-0 bg-[rgba(0,0,0,.5)] transition-colors duration-300 ease-in-out
                           group-hover:bg-[rgba(169,167,144,.7)] flex flex-col justify-end items-start p-6 text-white"
              >
                {item.icon && (
                  <Image
                    src={item.icon}
                    alt="icon"
                    width={50}
                    height={50}
                    className="mb-4 opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                  />
                )}
                <h3 className="text-xl md:text-2xl font-bold mb-2 uppercase leading-tight transition-colors duration-300 group-hover:text-amber-300">
                  {item.title}
                </h3>
                {item.hasButton && (
                  <button
                    className="mt-4 px-6 py-2 border border-white text-white text-sm uppercase font-semibold
                               rounded-full hover:bg-white hover:text-gray-800 transition-colors duration-300"
                  >
                    {item.buttonText}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Removed 'hidden md:block' to show on all screen sizes */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-75 p-3 rounded-full shadow-lg
                   hover:bg-opacity-100 transition-all duration-300 z-30" /* Removed hidden md:block */
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-75 p-3 rounded-full shadow-lg
                   hover:bg-opacity-100 transition-all duration-300 z-30" /* Removed hidden md:block */
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  );
};

export default ImageSlider;
