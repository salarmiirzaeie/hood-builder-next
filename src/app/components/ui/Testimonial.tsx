import Image from "next/image";
import React, { useState, useEffect } from "react";

// Define the interface for a single testimonial item
interface TestimonialItem {
  quote: string;
  author: string;
  avatarSrc?: string; // Optional avatar image source
}

// Define the props interface for the Testimonial component
interface TestimonialProps {
  testimonials: TestimonialItem[]; // Array of testimonial objects
  intervalTime?: number; // Time in milliseconds for auto-rotation (default 10 seconds)
}

const Testimonial: React.FC<TestimonialProps> = ({
  testimonials,
  intervalTime = 10000, // Default to 10 seconds
}) => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const totalPages = testimonials.length;

  useEffect(() => {
    // Set up the interval for automatic carousel rotation
    const timer = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % totalPages);
    }, intervalTime);

    // Clean up the interval when the component unmounts or dependencies change
    return () => clearInterval(timer);
  }, [testimonials, totalPages, intervalTime]); // Re-run effect if testimonials, totalPages, or intervalTime change

  // Function to handle clicking on pagination dots
  const goToTestimonial = (index: number) => {
    setCurrentTestimonialIndex(index);
  };

  if (!testimonials || testimonials.length === 0) {
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 flex flex-col items-center justify-center min-h-screen">
        <p className="text-gray-600">No testimonials to display.</p>
      </section>
    );
  }

  return (
    <div className=" flex flex-col  border-gray-200 items-center justify-center bg-white font-sans p-4">
      {/* Container for the logo grid */}
      <div className="w-full  max-w-7xl mx-auto py-12 md:py-24">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-12 text-center">Why Choose Us?</h2>
        {/* Testimonial Carousel Container */}
        <div className="max-w-7xl mx-auto w-full overflow-hidden rounded-xl ">
          {/* Carousel Track */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentTestimonialIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 bg-white p-8 sm:p-10 text-center">
                {/* Quote */}
                <p className="text-lg sm:text-xl text-gray-600 italic mb-8 leading-relaxed">"{testimonial.quote}"</p>

                {/* Avatar */}
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-pink-100 border-4 border-pink-500 shadow-md flex items-center justify-center">
                    <svg className="w-12 h-12 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM12 12.5c2.757 0 5-2.243 5-5s-2.243-5-5-5-5 2.243-5 5 2.243 5 5 5z" />
                    </svg>
                  </div>
                </div>

                {/* Author Name */}
                <p className="text-xl sm:text-2xl font-semibold text-gray-700">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span
              key={index}
              className={`block w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                index === currentTestimonialIndex ? "bg-gray-400" : "bg-gray-300"
              }`}
              onClick={() => goToTestimonial(index)} // Allow clicking dots to navigate
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
