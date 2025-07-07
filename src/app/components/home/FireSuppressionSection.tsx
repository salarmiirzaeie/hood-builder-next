// components/FireSuppressionSection.tsx
import React from "react";

const FireSuppressionSection: React.FC = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto  px-4 ">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center">Fire Suppression Systems</h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Detailed Information */}
          <div className="lg:w-1/2 space-y-6 text-base md:text-lg leading-relaxed">
            <p>
              Grease deposits, overheating oil and fat as well as electrical hazards are common causes of the commercial
              kitchen fire. To reduce the risk of fire, it is essential to keep the ventilation hood systems in good
              order. Our highly skilled technicians will maintain and service your kitchen hoods in an effective manner
              so that fire hazards can be removed. Our professional{" "}
              <span className="font-bold text-primary">kitchen hood cleaning</span> will prevent grease buildup and
              ensure the safety of your people and assets as a result. Plus, this will help you maintain a safe and
              comfortable working environment.
            </p>
            <p>
              There are many aspects to commercial hood system, including cooker hoods, exhaust fans, and restaurant
              <span className="font-bold text-primary"> grease interceptors</span>. Just to name a few. We have the
              expertise and parts to help with all aspects of your commercial restaurant equipment, including your hood
              systems.
            </p>
            <p>
              In case there is an occurrence of fire, our innovative fire prevention systems will help you control it
              immediately. Our <span className="font-bold text-primary">installation procedures</span> are accurate and
              top quality and in line with the appliance- specific needs of your food facility. Our goal is to safeguard
              your building against the dangers of fire so that no physician injuries and property damage happen.
            </p>
            <p>
              We can then regularly maintain your fire suppression system or provide you with fire protection repair in
              order to keep your business, customers, and staff safe.
            </p>
          </div>

          {/* Right Column - Service Overview and Call to Action */}
          <div className="lg:w-1/2 space-y-6 text-base md:text-lg leading-relaxed">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Let Us Be Your Restaurant Builder and Restaurant Maintenance Service
            </h3>
            <p>
              Your restaurant deserves to have a professional contracting service on call. That way, you can ensure that
              your interior design remains clean, your HVAC system is always in good working order, and your fire
              suppression systems are always prepared to keep everyone and everything safe.
            </p>
            <p>
              For full operational efficiency in your foodservice facility, you should always work with expert
              restaurant contractors such as Hood Builder. Equipped with branded tools and equipment, we carry out each
              job with the utmost effectiveness and then clean up the space thoroughly for a spotless look. With our
              company by your side, you’ll never have a hard time maintaining your commercial kitchen as well as the
              dining area for a pleasurable customer experience.
            </p>
            <p>
              Whenever an exhaust fan malfunctions or there is an issue with the fire suppression system, all you need
              to do is give our restaurant contractors a quick phone call. We’ll respond immediately and dispatch our
              team of highly qualified technicians to fix the issues in a timely manner.
            </p>
            <div className="pt-4 flex justify-center lg:justify-start">
              {/* Centered button on small, left-aligned on large */}
              <button
                className="bg-primary text-white font-bold py-4 px-10 rounded-full text-lg uppercase
                                 hover:bg-blue-800 transition-colors duration-300 shadow-lg"
              >
                GET A FREE QUOTE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FireSuppressionSection;
