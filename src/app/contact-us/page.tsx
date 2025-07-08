import React from "react";
import PageHeader from "../components/ui/PageHeader";

const page = () => {
  const servicesData = {
    introduction:
      "Hood Builder provides all services related to commercial kitchens and restaurant kitchens as well as food trucks and trailers.",
    categories: [
      {
        title: "Construction Services:",
        items: [
          "Restaurant Construction",
          "Commercial Kitchen Construction Services",
          "Restaurant Remodel",
          "Restaurant General Construction",
          "Restaurant Renovation",
          "Restaurant Build Up",
          "Fire Restoration for Restaurants",
          "Restaurant Design Firms",
          "Restaurant Fire Restoration",
          "Restaurant Fire Recovery",
          "Restaurant Repair",
          "Restaurant Builder",
        ],
      },
      {
        title: "Installation and Repair Services:",
        items: [
          "Commercial Kitchen Hood Installation",
          "Restaurant Hood Repair",
          "HVAC Repair",
          "Hood Repair",
          "Duct Repair",
          "Range Hood Installation",
          "Grease Trap Installation",
          "Rooftop Unit Installation",
          "HVAC Installation",
          "HVAC Repair",
          "Hood Maintenance",
          "HVAC Service",
        ],
      },
      {
        title: "Cleaning Services:",
        items: [
          "Hood Exhaust Cleaning",
          "Grease Trap Cleaning",
          "Commercial Kitchen Cleaning",
          "Restaurant Hood Cleaning",
          "Restaurant Kitchen Cleaning",
          "Air Restaurant Cleaning",
          "Kitchen Equipment Cleaning",
          "Trash Chute Cleaning",
          "Nightly Restaurant Cleaning",
          "Duct Cleaning",
          "Covid 19 Sanitizing Service",
          "Restaurant Grease Interceptor",
        ],
      },
      {
        title: "Fire Services:",
        items: [
          "Fire Protection Services",
          "Fire System Inspection",
          "Extinguisher Certification",
          "Ansul System Inspection",
          "Fire System Certification",
          "Fire Suppression System",
          "Smoke Detector",
          "Fire Detector",
          "Fire Alarm Installation",
          "Fire Sprinkler Inspection",
          "Fire Sprinkler Repair",
          "Fire Sprinkler Heads",
        ],
      },
    ],
    serviceAreas: {
      introduction: "We offer our services in all Colorado cities such as:",
      cities: [
        "Boulder",
        "Montreux",
        "Aurora",
        "Loveland",
        "Centennial",
        "Pueblo",
        "Fort Collins",
        "Colorado Springs",
        "etc.",
      ],
    },
  };

  return (
    <div>
      <PageHeader
        imageAlt="Contact Us"
        imageUrl="/images/img-bg-featured.webp"
        title="Contact Us"
        breadcrumbs={[{ label: "Hood Builder", href: "/" }, { label: "Contact Us" }]}
      />
      <div className=" bg-white font-sans p-4 flex justify-center">
        <div className="w-full max-w-7xl mx-auto py-8 md:py-16 px-4">
          {/* Services Introduction */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 rounded-md">Services</h2>
            <p className="text-gray-700 leading-relaxed r">{servicesData.introduction}</p>
          </div>
          {/* Services Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {servicesData.categories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg ">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 rounded-md">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-700 rounded-md">
                      <span className="mr-2 text-gray-500">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Service Areas Section */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 rounded-md">Service Areas:</h3>
            <p className="text-gray-700 leading-relaxed mb-4 rounded-md">{servicesData.serviceAreas.introduction}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {servicesData.serviceAreas.cities.map((city, index) => (
                <div key={index} className="flex items-center text-gray-700 bg-white p-3 rounded-lg ">
                  <span className="mr-2 text-gray-500">•</span>
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
