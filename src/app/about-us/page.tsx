import React from "react";
import QuoteForm from "../components/ui/QuoteForm";
import PageHeader from "../components/ui/PageHeader";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const page = () => {
  return (
    <div>
      <PageHeader
        imageAlt="About Us"
        imageUrl="/images/img-bg-featured.webp"
        title="Hood Builder / Bio Green Ventilation Services, Inc."
        breadcrumbs={[{ label: "Hood Builder", href: "/" }, { label: "About Us" }]}
        description="Providing services to our clients with quality service and topmost care for 25 years. From turnkey restaurant construction to hood installation and maintenance, food trucks and HVAC maintenance and service, Hood Builder has you covered."
      />
      <div className=" bg-white text-gray-800 font-inter py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="flex flex-col space-y-8">
            {/* About Hood Builder */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">About Hood Builder</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <span className="font-bold text-blue-600">Hood Builder By Green Ventilation Systems, Inc.</span> is the
                leading distribution, fabrication, and installation company for hood facilities of any size. We have
                offices and plants across the United States that enable us to help you with all of your construction,
                flooring or maintenance needs, no matter where you happen to be.
              </p>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  width={710}
                  height={260}
                  src="/images/content-img-aboutus.webp"
                  alt="Two workers inspecting electrical panel"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                For 25 years, we have been providing our clients with quality service and experience. From canteen
                restaurant consultation to hood maintenance and equipment, Hood Builder has you covered.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-8">
            {/* Any Sized Facility, Anywhere in the Country */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">Any Sized Facility, Anywhere in the Country</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We have worked with some of the biggest names in business, including McDonalds, PepsiCo, Applebees,
                Arbys, Olive Garden, British Airways, 3M, Johns Deere, The Home Depot and many more.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We sell all systems and brands, are experts in design and fabrication, and we install all systems to
                your exact specifications. Our leading team of mechanical, electrical, and structural engineers and
                contractors will exceed your expectations while providing you with everything required to get your
                business up and running at optimum performance.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you want quality service from a leading team of experts at competitive pricing, your only choice
                should be Hood Builder. We can begin by providing you a quote for our services. Once you decide to work
                with us, we will begin to first understand your commercial contracting needs. Our job is to give you the
                confidence that the work we perform will exceed all of your competitors.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Use our other clients, you come to prefer us for our competitive pricing, quality of service, and the
                fact that you can come to us for all your mechanical, electrical, structural and new suppression
                requirements.
              </p>
              <p className="text-gray-700 leading-relaxed mt-8">
                For a full and fast price quote, contact Hood Builder today at{" "}
                <span className="font-bold">(800) 750-7855</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <img
          src="/images/img-aboutus2.webp" // Placeholder image URL
          alt="Restaurant with city view background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay Content Box */}
        <div className="relative z-10 bg-[rgba(0,0,0,0.65)] bg-opacity-75 p-6 md:p-10 rounded-lg shadow-xl max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-4">
          {/* Title */}
          <h2 className="text-secondary text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Full Construction and Remodelling Services
          </h2>

          {/* Description */}
          <p className="text-gray-200 text-base md:text-lg mb-6">
            We do plans, city approvals, full construction and remodelling for facilities at any size and location
            nationwide.
          </p>

          {/* Services List */}
          <ul className="text-gray-200 space-y-2">
            <li className="flex items-center text-sm md:text-base">
              <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 text-secondary flex-shrink-0" />
              Restaurant Construction
            </li>
            <li className="flex items-center text-sm md:text-base">
              <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 text-secondary flex-shrink-0" />
              Road Truck Construction
            </li>
            <li className="flex items-center text-sm md:text-base">
              <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 text-secondary flex-shrink-0" />
              Commercial Kitchen Hoods
            </li>
            <li className="flex items-center text-sm md:text-base">
              <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 text-secondary flex-shrink-0" />
              Fire Suppression Systems
            </li>
            <li className="flex items-center text-sm md:text-base">
              <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 text-secondary flex-shrink-0" />
              Cleaning & Maintenance
            </li>
          </ul>
        </div>
      </div>
      <QuoteForm />
    </div>
  );
};

export default page;
