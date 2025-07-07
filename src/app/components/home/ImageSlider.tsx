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

const VISIBLE_ITEMS_DESKTOP = 4;
const DUPLICATION_COUNT = VISIBLE_ITEMS_DESKTOP;

const ImageSlider: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const loopedItems = useMemo(() => {
    const pre = originalItems.slice(-DUPLICATION_COUNT);
    const post = originalItems.slice(0, DUPLICATION_COUNT);
    return [...pre, ...originalItems, ...post];
  }, []);

  const getItemWidth = useCallback(() => {
    return itemRef.current?.offsetWidth || 0;
  }, []);

  const scrollTo = useCallback((target: number) => {
    if (!carouselRef.current) return;
    setIsScrolling(true);
    carouselRef.current.scrollTo({ left: target, behavior: "smooth" });
    setTimeout(() => setIsScrolling(false), 600);
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
    const totalWidth = originalItems.length * itemWidth;
    const preWidth = DUPLICATION_COUNT * itemWidth;

    if (scrollLeft < preWidth) {
      carouselRef.current.scrollLeft = totalWidth + scrollLeft;
    } else if (scrollLeft >= preWidth + totalWidth) {
      carouselRef.current.scrollLeft = scrollLeft - totalWidth;
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
        className="flex overflow-x-scroll scroll-smooth snap-x snap-mandatory hide-scrollbar space-x-2"
      >
        {loopedItems.map((item, i) => (
          <div
            ref={i === DUPLICATION_COUNT ? itemRef : null}
            key={`${item.id}-${i}`}
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
                priority={i >= DUPLICATION_COUNT && i < DUPLICATION_COUNT + VISIBLE_ITEMS_DESKTOP}
              />
              <div className="absolute z-20 inset-0 bg-[rgba(0,0,0,.5)] group-hover:bg-[rgba(169,167,144,.7)] transition-colors duration-300 flex flex-col justify-end items-start p-6 text-white">
                {item.icon && (
                  <Image
                    src={item.icon}
                    alt="icon"
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
        ))}
      </div>

      {/* Navigation */}
      <button
        onClick={goToPrev}
        aria-label="Previous"
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-75 p-3 rounded-full shadow-lg hover:bg-opacity-100 transition-all duration-300 z-30"
      >
        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        aria-label="Next"
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
