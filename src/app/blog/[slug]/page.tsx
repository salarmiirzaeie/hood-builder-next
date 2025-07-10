import Breadcrumb from "@/app/components/ui/Breadcrumb";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#eee] font-sans p-4 flex justify-center">
      <div className="w-full max-w-7xl mx-auto py-8 md:py-16 px-4">
        <Breadcrumb />
      </div>
    </div>
  );
};

export default page;
