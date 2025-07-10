import Link from "next/link";
import React from "react";
import { loadWpPostsAllData } from "@/lib/data";
import Image from "next/image";
import { WPPost } from "@/types";
interface BlogPost {
  ID: string;
  post_title: string;
  post_name: string;
  post_content: string;
}

export default async function BlogCard({ post }: { post: WPPost }) {
  return (
    <Link href={`/blog/${post.post_name}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
        <Image
          src={post.image || "/wp-content/uploads/2025/06/ChatGPT-Image-Jun-4-2025-04_42_27-PM-1.webp"} // Show a loading placeholder or default image while imageUrl is being set
          alt={post.post_name || ""}
          className="w-full h-48 object-cover"
          width={400}
          height={250}
        />
        <div className="p-6">
          {/* <p className="text-sm text-gray-500 mb-2">{post.category}</p> */}
          <h2 className="text-lg font-semibold text-gray-800 mb-3">{post.post_title}</h2>
          {/* <p className="text-gray-600 text-sm mb-4">
        {post.author} • {post.date}
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3">{post.description}</p> */}
          {/* You should pass the actual blog post ID to the link */}
          <p className="text-primary hover:underline text-sm font-medium">Read More</p>
        </div>
      </div>
    </Link>
  );
}
