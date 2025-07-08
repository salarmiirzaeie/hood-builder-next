"use client";

import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";

interface CarouselItem {
  id: number;
  image: string;
  icon?: string;
  title: string;
  hasButton: boolean;
  buttonText?: string;
}

const originalItems: CarouselItem[] = [
  {
    id: 1,
    image: "/images/img-slider-air-balancing.webp",
    icon: "/icons/icon-white-wind.webp",
    title: "AIR BALANCING",
    hasButton: false,
  },
  {
    id: 2,
    image: "/images/img-slider-fire-protection.webp",
    icon: "/icons/icon-white-fireprotection.webp",
    title: "FIRE PROTECTION",
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

const VISIBLE_ITEMS_DESKTOP = 4;
// We duplicate enough items to cover one full "loop" on either side for seamless transition.
const DUPLICATION_COUNT = originalItems.length; // Better to duplicate the full array once
// This simplifies the scroll logic for looping.

const ImageSlider: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [itemWidth, setItemWidth] = useState(0); // State to store calculated item width

  // Duplicate items for infinite scroll effect
  const loopedItems = useMemo(() => {
    // Prepend the last 'DUPLICATION_COUNT' items and append the first 'DUPLICATION_COUNT' items
    // This creates a seamless loop when scrolling
    const pre = originalItems.slice(-DUPLICATION_COUNT);
    const post = originalItems.slice(0, DUPLICATION_COUNT);
    return [...pre, ...originalItems, ...post];
  }, []); // Dependency on originalItems, but it's static

  // Calculate item width once on mount and on resize to avoid forced reflows during interactions
  useEffect(() => {
    const calculateWidth = () => {
      if (carouselRef.current && carouselRef.current.children.length > 0) {
        // Ensure the first child is an HTMLElement to access offsetWidth
        const firstChild = carouselRef.current.children[0] as HTMLElement;
        setItemWidth(firstChild?.offsetWidth || 0);
      }
    };

    calculateWidth(); // Initial calculation on mount
    window.addEventListener("resize", calculateWidth); // Recalculate on window resize

    // Clean up event listener
    return () => window.removeEventListener("resize", calculateWidth);
  }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

  // Effect to perform initial scroll jump after the component mounts and itemWidth is known
  useEffect(() => {
    if (carouselRef.current && itemWidth > 0) {
      // Jump to the start of the "originalItems" section
      carouselRef.current.scrollLeft = DUPLICATION_COUNT * itemWidth;
    }
  }, [itemWidth]); // Re-run when itemWidth is set (after initial render)

  const scrollTo = useCallback(
    (target: number) => {
      if (!carouselRef.current || itemWidth === 0) return; // Ensure itemWidth is ready
      setIsScrolling(true);
      carouselRef.current.scrollTo({ left: target, behavior: "smooth" });
      // Use a timeout to reset isScrolling after the scroll animation is likely complete.
      // This duration might need fine-tuning based on your CSS scroll-behavior duration.
      setTimeout(() => setIsScrolling(false), 700);
    },
    [itemWidth] // Depend on itemWidth to ensure it's available
  );

  const goToPrev = useCallback(() => {
    const current = carouselRef.current?.scrollLeft || 0;
    scrollTo(current - itemWidth); // Use the state-managed itemWidth
  }, [itemWidth, scrollTo]);

  const goToNext = useCallback(() => {
    const current = carouselRef.current?.scrollLeft || 0;
    scrollTo(current + itemWidth); // Use the state-managed itemWidth
  }, [itemWidth, scrollTo]);

  const handleScroll = useCallback(() => {
    if (!carouselRef.current || isScrolling || itemWidth === 0) return; // Prevent loop if itemWidth is zero

    const scrollLeft = carouselRef.current.scrollLeft;
    const totalOriginalWidth = originalItems.length * itemWidth;
    const preWidth = DUPLICATION_COUNT * itemWidth;
    const postWidth = DUPLICATION_COUNT * itemWidth; // Equivalent to preWidth

    // Check if scrolled into the 'pre' duplicated section (towards the beginning)
    if (scrollLeft < preWidth) {
      // Instantly jump to the corresponding position in the 'original' section
      carouselRef.current.scrollLeft = preWidth + totalOriginalWidth - (preWidth - scrollLeft);
    }
    // Check if scrolled past the 'original' and into the 'post' duplicated section (towards the end)
    else if (scrollLeft >= preWidth + totalOriginalWidth) {
      // Instantly jump back to the corresponding position in the 'original' section
      carouselRef.current.scrollLeft = preWidth + (scrollLeft - (preWidth + totalOriginalWidth));
    }
  }, [isScrolling, itemWidth]); // Depend on itemWidth

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="relative w-full mt-2 overflow-hidden">
      <div
        ref={carouselRef}
        className="flex overflow-x-scroll scroll-smooth snap-x snap-mandatory hide-scrollbar space-x-2"
      >
        {loopedItems.map((item, i) => {
          // Determine if the current item is one of the initial visible items
          // This is critical for LCP prioritization.
          // The actual visible items start after the `DUPLICATION_COUNT` prepended items.
          // We prioritize the number of items that are expected to be visible on desktop.
          const isPriorityImage = i >= DUPLICATION_COUNT && i < DUPLICATION_COUNT + VISIBLE_ITEMS_DESKTOP;

          return (
            <div
              key={`${item.id}-${i}`} // Ensure unique keys for duplicated items
              className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 snap-start relative group"
              // minWidth calculation should be based on VISIBLE_ITEMS_DESKTOP
              style={{ minWidth: `calc(100% / ${VISIBLE_ITEMS_DESKTOP})` }}
            >
              <div className="relative w-full h-96 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  // The sizes prop is very important for Next.js Image responsiveness and LCP
                  // Ensure these values accurately reflect your responsive breakpoints and how much space the image takes
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1024px) 50vw,
                         (max-width: 1280px) 33vw,
                         25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105 z-10"
                  priority={isPriorityImage} // Dynamically apply priority
                />
                <div className="absolute z-20 inset-0 bg-[rgba(0,0,0,.5)] group-hover:bg-[rgba(169,167,144,.7)] transition-colors duration-300 flex flex-col justify-end items-start p-6 text-white">
                  {item.icon && (
                    <Image
                      src={item.icon}
                      alt={`${item.title} icon`}
                      width={50}
                      height={50}
                      // Icons are usually small and not LCP. No priority needed.
                      className="mb-4 opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  )}
                  <h3 className="text-xl md:text-2xl font-bold mb-2 uppercase leading-tight group-hover:text-amber-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  {item.hasButton && (
                    <button className="mt-4 px-6 py-2 border border-white text-white text-sm uppercase font-semibold rounded-full hover:bg-white hover:text-gray-800 transition-colors duration-300">
                      {item.buttonText}
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      <button
        onClick={goToPrev}
        aria-label="Previous slide"
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-75 p-3 rounded-full shadow-lg hover:bg-opacity-100 transition-all duration-300 z-30"
      >
        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        aria-label="Next slide"
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-75 p-3 rounded-full shadow-lg hover:bg-opacity-100 transition-all duration-300 z-30"
      >
        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default ImageSlider;
