import React from "react";

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The main title for the page header.
   */
  title: string;
  /**
   * Optional breadcrumbs to display above the title.
   * Each item should have a 'label' and an optional 'href'.
   */
  breadcrumbs?: { label: string; href?: string }[];
  /**
   * Optional description text to display below the title.
   */
  description?: string;
  /**
   * The URL for the image to display in the right box.
   */
  imageUrl: string;
  /**
   * The alt text for the image.
   */
  imageAlt: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumbs, description, imageUrl, imageAlt, ...props }) => {
  return (
    <div className="flex flex-col md:flex-row  justify-between     bg-white text-white   overflow-hidden" {...props}>
      {/* Left Box: Text Content */}
      {/* Left Box: Text Content */}
      <div className="flex flex-col justify-center bg-primary w-full md:w-1/2 p-4 md:p-8 order-1">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="text-sm mb-2" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              {breadcrumbs.map((item, index) => (
                <li key={index} className="flex items-center">
                  {item.href ? (
                    <a href={item.href} className="hover:underline hover:text-blue-200 transition-colors duration-200">
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                  {index < breadcrumbs.length - 1 && (
                    <svg
                      className="flex-shrink-0 mx-2 h-4 w-4 text-blue-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                    </svg>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">{title}</h1>

        {description && <p className="text-lg sm:text-xl text-blue-100 max-w-3xl">{description}</p>}
      </div>

      {/* Right Box: Image */}
      <div className="w-full md:w-1/2 bg-gray-200 flex items-center justify-center h-[200px] sm:h-[300px] md:h-[400px] order-2 md:order-2">
        <img src={imageUrl} alt={imageAlt} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default PageHeader;
