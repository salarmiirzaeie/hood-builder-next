import React from "react";
interface BlogPost {
  id: number;
  imageUrl: string;
  category: string;
  title: string;
  author: string;
  date: string;
  description: string;
}
const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <div
      key={post.id}
      className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
    >
      <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <p className="text-sm text-gray-500 mb-2">{post.category}</p>
        <h2 className="text-lg font-semibold text-gray-800 mb-3">{post.title}</h2>
        <p className="text-gray-600 text-sm mb-4">
          {post.author} • {post.date}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3">{post.description}</p>
        <a href="#" className="text-primary hover:underline text-sm font-medium">
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
