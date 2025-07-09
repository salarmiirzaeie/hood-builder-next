"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Breadcrumb: React.FC = () => {
  const path = usePathname();
  const title = path.split("/")[1];
  return (
    <div className=" flex flex-col items-center justify-center font-sans px-4">
      {/* Container for the logo grid */}
      <div className="w-full  max-w-7xl  flex justify-center items-center">
        <div className=" border-b border-gray-300 ">
          <div className="text-gray-500   text-base mb-2">
            <a href="#" className="hover:underline">
              Hood Builder
            </a>
            <span className="mx-1">&gt;</span>{" "}
            <span className="font-semibold">{title[0].toUpperCase() + title.slice(1)}</span>
          </div>
          <h1 className="text-5xl text-center font-bold text-primary mb-4">
            {title[0].toUpperCase() + title.slice(1)}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
