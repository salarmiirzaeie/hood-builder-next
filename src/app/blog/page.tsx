import React from "react";
import Breadcrumb from "../components/ui/Breadcrumb";
import BlogCard from "../components/ui/BlogCard";
interface BlogPost {
  id: number;
  imageUrl: string;
  category: string;
  title: string;
  author: string;
  date: string;
  description: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    imageUrl: "https://placehold.co/600x400/E0E0E0/333333?text=Restaurant+Remodeling",
    category: "Restaurant Remodeling",
    title: "Restaurant Remodeling: Know What You Are Getting Into",
    author: "By Michael Perzichilli",
    date: "February 19, 2025",
    description:
      "Restaurant remodeling can be an exciting yet daunting adventure for any owner looking to breathe new life into their space. Whether you are aiming for a complete overhaul or just...",
  },
  {
    id: 2,
    imageUrl: "https://placehold.co/600x400/D0D0D0/333333?text=HVAC+Zoning",
    category: "HVAC Zoning",
    title: "Why HVAC Zoning is a Game-Changer for Temperature Control in Offices, Restaurants and Warehouses",
    author: "By Michael Perzichilli",
    date: "February 19, 2025",
    description:
      "Temperature can be a critical aspect of managing energy consumption in Heating, Ventilation, and Air Conditioning (HVAC) systems. Traditionally, thermostats have been used to manage the, but in larger buildings...",
  },
  {
    id: 3,
    imageUrl: "https://placehold.co/600x400/C0C0C0/333333?text=Cooling+Systems",
    category: "Cooling Systems",
    title: "How to Design Cooling Systems for Your Restaurant Kitchen Before Summer Hits",
    author: "By Michael Perzichilli",
    date: "February 19, 2025",
    description:
      "Heat in Denver, we’re still shoveling snow and cranking the heat, but if you’re a restaurant owner planning a kitchen upgrade or a new build, summer’s heat is creeping up...",
  },
  {
    id: 4,
    imageUrl: "https://placehold.co/600x400/B0B0B0/333333?text=General+Contracting",
    category: "General Contracting",
    title: "How to Find the Best Restaurant General Contracting Service in Denver",
    author: "By Michael Perzichilli",
    date: "February 19, 2025",
    description:
      "The Denver restaurant industry is thriving, with new restaurants opening every month to meet the city’s growing demand for diverse dining experiences. But behind every successful restaurant is a solid...",
  },
  {
    id: 5,
    imageUrl: "https://placehold.co/600x400/A0A0A0/333333?text=Walk-in+Freezer",
    category: "Walk-in Freezer",
    title: "How Walk-in Freezer Maintenance Saves You Money in the Long Run",
    author: "By Michael Perzichilli",
    date: "January 25, 2023",
    description:
      "Walk-in freezers and coolers are among the most heavy-duty and costly assets in any restaurant. A sudden failure can derail your entire kitchen operation, leading to spoiled inventory, lost revenue...",
  },
  {
    id: 6,
    imageUrl: "https://placehold.co/600x400/909090/333333?text=Fire+Recovery",
    category: "Fire Recovery",
    title: "How to Manage Fire Recovery and Restoration on a Budget: A 2023 Guide for Restaurants",
    author: "By Michael Perzichilli",
    date: "January 19, 2023",
    description:
      "Fires are an unfortunate reality for many restaurants, food trucks, and commercial kitchens. Despite stringent fire safety protocols, accidents do happen, and the aftermath can be overwhelming. According to the National...",
  },
];
const page = () => {
  return (
    <div className="bg-[#eee] font-sans p-4 flex justify-center">
      <div className="w-full max-w-7xl mx-auto py-8 md:py-16  px-4">
        <Breadcrumb />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
