import React from "react";
import Breadcrumb from "../components/ui/Breadcrumb";
import BlogCard from "../components/ui/BlogCard";
import data from "@/data/wp_posts(1).json";

interface BlogPost {
  ID: string;
  post_title: string;
  post_name: string;
  post_content: string;
}
const Page = () => {
  const blogs = data
    .filter((post) => post.post_type === "post")
    .sort((a, b) => new Date(b.post_date).getTime() - new Date(a.post_date).getTime());

  // Group blogs by year
  const blogsByYear = blogs.reduce((acc: { [key: number]: BlogPost[] }, post) => {
    const year = new Date(post.post_date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {});

  // Sort years in descending order
  const sortedYears = Object.keys(blogsByYear).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <div className="bg-[#eee] font-sans p-4 flex justify-center">
      <div className="w-full max-w-7xl mx-auto py-8 md:py-16 px-4">
        <Breadcrumb />

        {sortedYears.map((year) => (
          <div key={year} className="mt-16">
            {/* Added margin-top for separation */}
            <h2 className="text-3xl font-bold text-gray-800 mb-8">{year}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogsByYear[parseInt(year)].map((post) => (
                <BlogCard key={post.ID} post={post} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
