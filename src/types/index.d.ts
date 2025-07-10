export interface WPPost {
  ID: string;
  post_author: string;
  post_date: string;
  post_date_gmt: string;
  post_content: string;
  post_title: string;
  post_excerpt: string;
  post_status: string;
  comment_status: string;
  ping_status: string;
  post_name: string;
  to_ping: string;
  pinged: string;
  post_modified: string;
  post_modified_gmt: string;
  post_content_filtered: string;
  post_parent: string;
  guid: string;
  menu_order: string;
  post_type: string;
  post_mime_type: string;
  comment_count: string;
  filter: string;
  image?: string;
  // Add other properties from wp_posts(1).json if any
}
// (Keep existing BlogPost and WPPost interfaces from previous example)

export interface SubService {
  id: string;
  slug: string; // This will be `actionSlug` in your route
  title: string;
  description: string;
  // Add other properties if any
}

export interface ServiceItem {
  id: string;
  slug: string; // This will be the parent `slug` in your route
  title: string;
  description: string;
  type: string; // e.g., "dropdown", "link"
  subServices?: SubService[]; // Optional, for dropdown types
  // Add other properties from your servicesData.json if any
}
