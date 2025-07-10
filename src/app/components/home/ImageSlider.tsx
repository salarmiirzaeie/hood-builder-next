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
// We duplicate enough items to ensure smooth infinite scroll without jumps
// A good rule of thumb is to duplicate at least the number of visible items
// or even 2x visible items for very fast scrolls.
const DUPLICATION_FACTOR = 2; // Increased from 1 to 2 for smoother transitions on rapid scrolls
const DUPLICATION_COUNT = VISIBLE_ITEMS_DESKTOP * DUPLICATION_FACTOR;

const ImageSlider: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null); // Ref for a single item to get its width
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentItemIndex, setCurrentItemIndex] = useState(0); // To track current item for accessibility and potential indicators

  // Looping items using useMemo for performance
  const loopedItems = useMemo(() => {
    // Prepend items from the end to create a seamless loop
    const pre = originalItems.slice(-DUPLICATION_COUNT);
    // Append items from the beginning
    const post = originalItems.slice(0, DUPLICATION_COUNT);
    return [...pre, ...originalItems, ...post];
  }, []); // Dependency array is empty as originalItems is static

  // Calculate the initial scroll position to start at the "real" first item
  const initialScrollOffset = useMemo(() => {
    return DUPLICATION_COUNT * (itemRef.current?.offsetWidth ?? 0);
  }, []);

  // Use a state to control if the carousel is initialized (i.e., initial scroll done)
  const [isInitialized, setIsInitialized] = useState(false);

  // Set initial scroll position once the component mounts and ref is available
  useEffect(() => {
    if (carouselRef.current && !isInitialized) {
      carouselRef.current.scrollLeft = initialScrollOffset;
      setIsInitialized(true);
    }
  }, [initialScrollOffset, isInitialized]); // Only re-run if initialScrollOffset changes

  const getItemWidth = useCallback(() => {
    // Use optional chaining and nullish coalescing for safety
    return itemRef.current?.offsetWidth ?? 0;
  }, []); // No dependencies needed as ref itself doesn't change

  const scrollTo = useCallback((target: number, smooth: boolean = true) => {
    if (!carouselRef.current) return;
    setIsScrolling(true);
    carouselRef.current.scrollTo({ left: target, behavior: smooth ? "smooth" : "auto" });
    // Adjust timeout based on `smooth` behavior
    setTimeout(() => setIsScrolling(false), smooth ? 600 : 0);
  }, []);

  const goToPrev = useCallback(() => {
    const current = carouselRef.current?.scrollLeft || 0;
    scrollTo(current - getItemWidth());
  }, [getItemWidth, scrollTo]);

  const goToNext = useCallback(() => {
    const current = carouselRef.current?.scrollLeft || 0;
    scrollTo(current + getItemWidth());
  }, [getItemWidth, scrollTo]);

  // Optimized scroll handling for infinite loop and current item tracking
  const handleScroll = useCallback(() => {
    if (!carouselRef.current || isScrolling) return;

    const scrollLeft = carouselRef.current.scrollLeft;
    const itemWidth = getItemWidth();
    const originalContentWidth = originalItems.length * itemWidth;
    const preContentWidth = DUPLICATION_COUNT * itemWidth;

    // Determine the "real" current index for pagination/accessibility
    // Adjust scrollLeft by preContentWidth to get the relative position within original items
    const relativeScrollLeft = scrollLeft - preContentWidth;
    const newIndex = Math.round(relativeScrollLeft / itemWidth) % originalItems.length;
    setCurrentItemIndex(newIndex < 0 ? newIndex + originalItems.length : newIndex);

    // Handle infinite looping logic
    if (scrollLeft < preContentWidth && !isScrolling) {
      // If scrolled into the prepended section, jump to the end of the original content
      carouselRef.current.scrollLeft = originalContentWidth + scrollLeft;
    } else if (scrollLeft >= preContentWidth + originalContentWidth && !isScrolling) {
      // If scrolled into the appended section, jump to the beginning of the original content
      carouselRef.current.scrollLeft = scrollLeft - originalContentWidth;
    }
  }, [isScrolling, getItemWidth]); // Add loopedItems.length for full dependency completeness, though static

  // Effect for scroll event listener
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    // Use passive listener for better scroll performance
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="relative w-full mt-2 overflow-hidden" role="region" aria-label="Image Carousel">
      <div
        ref={carouselRef}
        className="flex overflow-x-scroll scroll-smooth snap-x snap-mandatory hide-scrollbar space-x-2"
        style={{ scrollBehavior: isScrolling ? "smooth" : "auto" }} // Control scroll behavior based on state
      >
        {loopedItems.map((item, i) => {
          const currentRealIndex = Math.floor((carouselRef.current?.scrollLeft ?? 0) / getItemWidth());
          const isNearView =
            i >= currentRealIndex - VISIBLE_ITEMS_DESKTOP &&
            i <= currentRealIndex + VISIBLE_ITEMS_DESKTOP + (VISIBLE_ITEMS_DESKTOP - 1);

          // Inside your loopedItems.map
          return (
            <div
              ref={i === DUPLICATION_COUNT ? itemRef : null}
              key={`${item.id}-${i}`}
              className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 snap-start relative group"
              style={{ minWidth: `calc(100% / ${VISIBLE_ITEMS_DESKTOP})` }}
              role="group"
              aria-roledescription="slide"
              aria-label={`${item.title} ${
                (i - DUPLICATION_COUNT + 1 + originalItems.length) % originalItems.length
              } of ${originalItems.length}`}
            >
              <div className="relative w-full h-96 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105 z-10"
                  // Ensure priority is set for the image that will be the LCP
                  // This is typically the first "real" item after the duplicated ones
                  priority={i === DUPLICATION_COUNT} // Set priority ONLY for the very first "real" item
                  // Next.js Image component handles `loading="eager"` and `fetchpriority="high"` automatically when `priority` is true.
                  // You generally don't need to explicitly set `loading` or `fetchpriority` if `priority` is true.
                  // For other images, let Next.js optimize default loading or use your isNearView logic for eager loading.
                  loading={i === DUPLICATION_COUNT || isNearView ? "eager" : "lazy"}
                />
                {/* ... rest of your code */}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      <button
        onClick={goToPrev}
        aria-label="Previous slide" // More specific aria-label
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-75 p-3 rounded-full shadow-lg hover:bg-opacity-100 transition-all duration-300 z-30"
      >
        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        aria-label="Next slide" // More specific aria-label
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-75 p-3 rounded-full shadow-lg hover:bg-opacity-100 transition-all duration-300 z-30"
      >
        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Optional: Add Pagination/Indicators for better UX and accessibility */}
      <div className="flex justify-center mt-4 space-x-2">
        {originalItems.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => {
              const targetScroll = (DUPLICATION_COUNT + index) * getItemWidth();
              scrollTo(targetScroll);
            }}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentItemIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
