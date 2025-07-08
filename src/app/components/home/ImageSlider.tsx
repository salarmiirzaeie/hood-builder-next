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
// Changed DUPLICATION_COUNT to mirror the full original array length.
// This is best practice for truly seamless infinite carousels where
// you jump instantly back to the original content.
const DUPLICATION_COUNT = originalItems.length;

const ImageSlider: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  // No longer need itemRef for width calculation, as it's derived from container
  const [isScrolling, setIsScrolling] = useState(false);

  const loopedItems = useMemo(() => {
    const pre = originalItems.slice(-DUPLICATION_COUNT); // Prepend last DUPLICATION_COUNT items
    const post = originalItems.slice(0, DUPLICATION_COUNT); // Append first DUPLICATION_COUNT items
    return [...pre, ...originalItems, ...post];
  }, []);

  const getItemWidth = useCallback(() => {
    // Calculate width based on the carousel container's width and the number of visible items
    const containerWidth = carouselRef.current?.offsetWidth || 0;
    // Account for potential `gap` or `space-x` if you add it back.
    // For `minWidth: calc(100% / ${VISIBLE_ITEMS_DESKTOP})`, this calculation is accurate.
    return containerWidth / VISIBLE_ITEMS_DESKTOP;
  }, []);

  // --- Initial Position (Instant Jump, Not a Smooth Scroll) ---
  // This useEffect ensures the carousel starts at the "real" beginning
  // of your items, not the duplicated prepended ones.
  // It happens instantly on mount, before user interaction.
  useEffect(() => {
    if (carouselRef.current) {
      // Set scrollLeft to the start of the 'originalItems' section
      carouselRef.current.scrollLeft = DUPLICATION_COUNT * getItemWidth();
    }
  }, [getItemWidth]); // Depend on getItemWidth to ensure calculation is ready

  const scrollTo = useCallback((target: number) => {
    if (!carouselRef.current) return;
    setIsScrolling(true);
    carouselRef.current.scrollTo({ left: target, behavior: "smooth" });
    setTimeout(() => setIsScrolling(false), 600); // Match this with your CSS scroll-behavior duration
  }, []);

  const goToPrev = useCallback(() => {
    const current = carouselRef.current?.scrollLeft || 0;
    scrollTo(current - getItemWidth());
  }, [getItemWidth, scrollTo]);

  const goToNext = useCallback(() => {
    const current = carouselRef.current?.scrollLeft || 0;
    scrollTo(current + getItemWidth());
  }, [getItemWidth, scrollTo]);

  const handleScroll = useCallback(() => {
    if (!carouselRef.current || isScrolling) return;

    const scrollLeft = carouselRef.current.scrollLeft;
    const itemWidth = getItemWidth();
    if (itemWidth === 0) return; // Avoid division by zero

    const totalOriginalWidth = originalItems.length * itemWidth;
    const preWidth = DUPLICATION_COUNT * itemWidth;
    // The "post" duplicated section starts right after the "original" section
    const postStart = preWidth + totalOriginalWidth;

    // If scrolled into the pre-pended duplicates (left end)
    if (scrollLeft < preWidth) {
      // Calculate how far into the 'pre' section we are (from its start)
      const offsetInPre = preWidth - scrollLeft;
      // Jump to the equivalent position in the 'original' content,
      // measured from the *end* of the original content backwards.
      carouselRef.current.scrollLeft = postStart - offsetInPre;
    }
    // If scrolled into the appended duplicates (right end)
    else if (scrollLeft >= postStart) {
      // Calculate how far into the 'post' section we are (from its start)
      const offsetInPost = scrollLeft - postStart;
      // Jump back to the equivalent position in the 'original' section,
      // measured from the *start* of the original content forwards.
      carouselRef.current.scrollLeft = preWidth + offsetInPost;
    }
  }, [isScrolling, getItemWidth]);

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
        className="flex overflow-x-scroll scroll-smooth snap-x snap-mandatory hide-scrollbar"
        // Ensure no external spacing like space-x-2 here that conflicts with minWidth calculation
      >
        {loopedItems.map((item, i) => {
          // Identify images that are part of the *initial visible segment*
          // after the programmatic jump to the 'originalItems' section.
          // These are the images from index `DUPLICATION_COUNT` up to `DUPLICATION_COUNT + VISIBLE_ITEMS_DESKTOP - 1`
          const isPriorityImage = i >= DUPLICATION_COUNT && i < DUPLICATION_COUNT + VISIBLE_ITEMS_DESKTOP;

          return (
            <div
              key={`${item.id}-${i}`} // Use a combined key for uniqueness
              className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 snap-start relative group"
              style={{ minWidth: `calc(100% / ${VISIBLE_ITEMS_DESKTOP})` }}
            >
              <div className="relative w-full h-96 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1024px) 50vw,
                         (max-width: 1280px) 33vw,
                         25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105 z-10"
                  priority={isPriorityImage} // Apply priority to the items that are visible AFTER the instant initial jump
                />
                <div className="absolute z-20 inset-0 bg-[rgba(0,0,0,.5)] group-hover:bg-[rgba(169,167,144,.7)] transition-colors duration-300 flex flex-col justify-end items-start p-6 text-white">
                  {item.icon && (
                    <Image
                      src={item.icon}
                      alt={`${item.title} icon`} // More descriptive alt text
                      width={50}
                      height={50}
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
