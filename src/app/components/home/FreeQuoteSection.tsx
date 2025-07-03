// components/FreeQuoteSection.tsx
import React from "react";

const FreeQuoteSection: React.FC = () => {
  return (
    <section className="bg-primary text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">Get a Free Quote</h2>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10">
          {/* Left Section - Text Content */}
          <div className="lg:w-3/5 space-y-6 text-lg md:text-xl leading-relaxed">
            <p>
              If you operate in and around Denver, Colorado, we can build and{" "}
              <span className="font-bold text-amber-300">design a new restaurant</span> or provide you with restaurant
              remodeling to bring your dream to life. We can provide you with restaurant repair to keep your business in
              the best condition all the year through, and we can provide you with restaurant cleaning to keep your
              business attractive for your clientele.
            </p>
            <p>
              Most importantly, we can ensure your kitchen operates efficiently with{" "}
              <span className="font-bold text-amber-300">hood installation</span> and repair, fire suppression system
              maintenance and repair, and HVAC – heating and air condition maintenance and repair.
            </p>
            <p>
              In short, when it comes to restaurant building, construction, remodeling, HVAC systems, fire suppression
              systems, ventilation hoods, or any other aspect of your business, Hood Builder is there to help. Call
              today and receive a free quote.
            </p>
            <p className="text-amber-300 font-semibold mt-8">
              For a Full and Fast price Quote, Contact Hood Builder today at{" "}
              <a href="tel:+13037777720" className="underline hover:no-underline">
                (303) 777 7720
              </a>
            </p>
          </div>

          {/* Right Section - Call to Action */}
          <div className="lg:w-2/5 flex flex-col items-center lg:items-end text-center lg:text-right">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 lg:max-w-md">
              Get Your Restaurant Constructed and Designed by Experts
            </h3>
            <button
              className="bg-white text-blue-800 font-bold py-4 px-10 rounded-full text-lg uppercase
                               hover:bg-gray-200 transition-colors duration-300 shadow-lg"
            >
              GET YOUR FREE QUOTE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeQuoteSection;
