// components/ImageSlider.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image"; // Make sure to import Image for Next.js

// Define the type for a single blog post item
interface BlogPost {
  id: number;
  category: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  description: string;
  imageUrl: string;
  beforeAfter: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    category: "FROM THE BLOG",
    title: "Restaurant Remodeling: Know What You Are Getting Into",
    author: "Now Admin",
    date: "Jun 14, 2025",
    readTime: "4 min read",
    description: "Restaurant remodeling can be an exciting yet daunting adventure. Whether you're looking to...",
    imageUrl: "/images/img-article-hvac-zoning-for-offices-warehouses-restaurants.webp", // Ensure leading slash for public assets
    beforeAfter: true,
  },
  {
    id: 2,
    category: "FROM THE BLOG",
    title: "Why HVAC Zoning is a Game-Changer for Temperature Control in Offices, Restaurants and Warehouses",
    author: "Hood Builder Professional",
    date: "May 20, 2025",
    readTime: "4 min read",
    description: "Temperature control is a critical aspect of managing energy consumption and ensuring...",
    imageUrl: "/images/img-article-restaurant-kitchen-cooling-system-design-summe.webp", // Ensure leading slash
    beforeAfter: false,
  },
  {
    id: 3,
    category: "FROM THE BLOG",
    title: "How to Design Cooling Systems for Your Restaurant Kitchen Before Summer Hits",
    author: "Hood Builder Professional",
    date: "May 12, 2025",
    readTime: "4 min read",
    description: "When it comes to designing a new commercial kitchen, you might be tempted to focus on...",
    imageUrl: "/images/ChatGPT-Image-Jun-4-2025-04_42_27-PM-1.webp", // Ensure leading slash
    beforeAfter: false,
  },
  {
    id: 4,
    category: "FROM THE BLOG",
    title: "Understanding Restaurant Fire Suppression Systems: A Comprehensive Guide", // Changed title for uniqueness
    author: "Hood Builder Professional",
    date: "Apr 28, 2025", // Changed date for uniqueness
    readTime: "5 min read",
    description: "Fire safety is paramount in any commercial kitchen. Learn about the types of fire suppression...",
    imageUrl: "/images/img-article-general-contracting.webp", // Added a different image for visual distinction
    beforeAfter: false,
  },
];

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image with grayscale and color states applied via CSS filter */}
      {/* Using Next.js Image component for optimization */}
      <Image
        src={post.imageUrl}
        alt={post.title}
        layout="responsive" // Make image responsive to parent container
        width={400} // Example width (adjust based on your actual image aspect ratio)
        height={250} // Example height
        objectFit="cover"
        className={`transition-all duration-500 ease-in-out ${isHovered ? "" : "grayscale"}`}
        // Fallback for image loading errors can be handled by Next.js Image component
      />
      {/* 
      {post.beforeAfter && (
        <div className="absolute inset-0 flex items-center justify-between p-4 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-xl font-bold bg-orange-500 px-4 py-2 rounded-md">BEFORE</span>
          <span className="text-xl font-bold bg-orange-500 px-4 py-2 rounded-md">AFTER</span>
        </div>
      )} */}

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex flex-col justify-end p-4 text-white">
        <p className="text-sm text-orange-400 mb-1">{post.category}</p>
        <h3 className="text-xl font-bold mb-2 leading-tight">{post.title}</h3>
        <p className="text-xs text-gray-300 mb-2">
          {post.author} | {post.date} | {post.readTime}
        </p>
        <p className="text-sm text-gray-400">{post.description}</p>
      </div>
    </div>
  );
};

const BlogPostsSection: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 font-inter">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-10">Our Latest Insights</h2>
        {/* Adjusted grid for 4 columns across all sizes */}
        <div className="grid grid-cols-1 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPostsSection;
