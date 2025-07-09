// components/ServicesNavBar.tsx
import React from "react";
import {
  Utensils,
  FireExtinguisher,
  Hammer,
  Fan,
  AirVent,
  Truck,
  LucideIcon, // Import LucideIcon type
} from "lucide-react"; // Make sure you have lucide-react installed: npm install lucide-react

// Define the type for each service item
interface ServiceItem {
  id: string;
  name: string;
  icon: LucideIcon; // Use the LucideIcon type for the icon component
}

// Array of service data
const services: ServiceItem[] = [
  { id: "restaurant-services", name: "RESTAURANT SERVICES", icon: Utensils },
  { id: "fire-protection", name: "FIRE PROTECTION", icon: FireExtinguisher },
  { id: "general-contracting", name: "GENERAL CONTRACTING", icon: Hammer },
  { id: "hoods-mua-exhaust-fans", name: "HOODS, MUA, EXHAUST FANS", icon: Fan },
  { id: "hvac", name: "HVAC", icon: AirVent },
  { id: "food-truck-food-trailer", name: "FOOD TRUCK / FOOD TRAILER", icon: Truck },
];

const ServicesNavBar: React.FC = () => {
  return (
    <div className="w-full  hidden sm:block bg-gray-100 py-4 px-2 sm:px-4 lg:px-6 font-inter">
      {/*
          The main container for the service items.
          - flex: Enables flexbox layout.
          - flex-wrap: Allows items to wrap to the next line on smaller screens.
          - justify-center: Centers items horizontally when they don't fill the row.
          - gap-4: Adds space between items.
          - overflow-x-auto: Enables horizontal scrolling if items exceed container width on very small screens,
                             though flex-wrap should handle most cases.
          - scrollbar-hide: Hides the scrollbar (requires custom CSS or a plugin if not supported by default).
                            For a more robust solution, consider a custom scrollbar or just let it show.
        */}
      <div className="flex flex-wrap justify-center gap-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="
                flex flex-row gap-3 items-center justify-center text-center
                p-2 sm:p-6
                bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300
                flex-1
               
                cursor-pointer
                border border-gray-200
              "
          >
            {/* Icon */}
            <div className="mb-2 text-gray-500">
              <service.icon className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            {/* Text */}
            <p className="text-sm sm:text-base font-medium text-gray-700 uppercase leading-tight">{service.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesNavBar;
