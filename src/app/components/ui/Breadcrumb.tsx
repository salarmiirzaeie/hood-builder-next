"use client";
import React from "react";
// import { useRouter } from 'next/router'; // No longer needed if path is passed via props

// Define the props for the Breadcrumb component
interface BreadcrumbProps {
  path: string; // The path to generate breadcrumbs from, now a required prop
  homeText?: string; // Optional text for the home link
  separator?: React.ReactNode; // Optional separator between breadcrumb items
  capitalizeSegments?: boolean; // Option to capitalize route segments
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  path, // Destructure the new path prop
  homeText = "Home",
  separator = ">",
  capitalizeSegments = true,
}) => {
  // Now using the 'path' prop instead of useRouter().asPath
  const pathnames = path.split("/").filter((x) => x); // Get path segments and filter out empty strings

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {/* Home link */}
        <li className="inline-flex items-center">
          <a
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white rounded-md p-1 transition-colors duration-200"
          >
            {homeText}
          </a>
        </li>

        {/* Dynamic path segments */}
        {pathnames.map((name, index) => {
          const href = "/" + pathnames.slice(0, index + 1).join("/"); // Construct the full path for the segment
          const isLast = index === pathnames.length - 1; // Check if it's the last segment

          // Format the segment name
          const formattedName = capitalizeSegments
            ? name
                .replace(/-/g, " ")
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")
            : name.replace(/-/g, " ");

          return (
            <li key={href} className="flex items-center">
              {/* Separator */}
              <span className="mx-1 text-gray-400 dark:text-gray-500">{separator}</span>
              {isLast ? (
                // Current page (last segment) - not a link
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{formattedName}</span>
              ) : (
                // Other segments - links
                <a
                  href={href}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white rounded-md p-1 transition-colors duration-200"
                >
                  {formattedName}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
