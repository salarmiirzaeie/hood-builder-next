"use client";
// components/RestaurantInfoSection.tsx
import React from "react";

const RestaurantInfoSection: React.FC = () => {
  return (
    <div className=" bg-white font-sans py-4 flex px-4 md:px-8 lg:px-16">
      <div className="w-full max-w-7xl mx-auto py-8 md:py-16 px-4 space-y-6">
        {/* Restaurant Safety Measures */}
        <div>
          <h2 className="text-lg md:text-xl font-bold text-primary mb-2">Restaurant Safety Measures</h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Not only can we provide you with restaurant renovation, repair, and design services, but we can maintain a
            safe atmosphere for years to come. We can ensure that restaurant layout design adheres to all safety and
            fire codes, but we don't stop there. When it comes to your kitchen, we offer the very best HVAC hood
            services to keep the risk of dangerous fire to an absolute minimum.
          </p>
        </div>

        {/* HVAC Services */}
        <div>
          <h2 className="text-lg md:text-xl font-bold text-primary mb-2">HVAC Services</h2>
          <p className="text-base text-gray-700 md:text-lg leading-relaxed">
            A large aspect of our Colorado general contracting business comes from our HVAC customers. When running a
            restaurant or hospitality business, you want to ensure that your atmosphere always remains cozy. After all,
            customers won't visit a restaurant where the air is stuffy or where impurities tend to hang in the air.
            Likewise, when your <span className="font-bold text-primary">HVAC system</span> isn't working properly,
            staff morale can fall and that can spell bad news for any business.
          </p>
        </div>

        {/* Restaurant Plumbing Services */}
        <div>
          <h2 className="text-lg md:text-xl font-bold text-primary mb-2">Restaurant Plumbing Services</h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            We can complete all aspects of a restaurant build, including maintenance and repair. Restaurant plumbing,
            for example, is incredibly important for safety and sanitation. We maintain strict codes of conduct and work
            quickly to maintain and repair your restaurant plumbing services using years of training and experience.
          </p>
        </div>

        {/* Proudly Serving Commercial Kitchens Across Colorado */}
        <div>
          <h2 className="text-lg md:text-xl font-bold text-primary mb-2">
            Proudly Serving Commercial Kitchens Across Colorado
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            Although our main office is based in Denver, CO, our team of experts designs, installs, and maintains
            commercial kitchen systems for restaurants, hotels, and any other food service facilities across Colorado.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            Whether you're opening a new restaurant or upgrading outdated equipment, we guarantee fast, precise, and
            fully customized solutions wherever you are in the following cities and nearby areas:
          </p>
          <div className="flex flex-wrap gap-x-6 text-gray-700 gap-y-2 text-md md:text-lg">
            <span>Arvada</span>
            <span>Aurora</span>
            <span>Boulder</span>
            <span>Brighton</span>
            <span>Broomfield</span>
            <span>Castle Rock</span>
            <span>Centennial</span>
            <span>Colorado Springs</span>
            <span>Denver</span>
            <span>Englewood</span>
            <span>Fort Collins</span>
            <span>Greeley</span>
            <span>Lafayette</span>
            <span>Lakewood</span>
            <span>Littleton</span>
            <span>Longmont</span>
            <span>Loveland</span>
            <span>Northglenn</span>
            <span>Parker</span>
            <span>Pueblo</span>
            <span>Thornton</span>
            <span>Westminster</span>
            <span>Wheat Ridge</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfoSection;
