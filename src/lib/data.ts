import { promises as fs } from "fs";
import path from "path";
import { ServiceItem, WPPost } from "@/types"; // Import new types

export async function loadServicesData(): Promise<ServiceItem[]> {
  const filePath = path.join(process.cwd(), "src/data", "services.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  return JSON.parse(jsonData) as ServiceItem[];
}

export async function loadWpPostsData(): Promise<WPPost[]> {
  const filePath = path.join(process.cwd(), "src/data", "wp_posts(1).json");
  const jsonData = await fs.readFile(filePath, "utf8");
  return JSON.parse(jsonData) as WPPost[];
}
export async function loadWpPostsAllData(): Promise<WPPost[]> {
  const filePath = path.join(process.cwd(), "src/data", "wp_posts.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  return JSON.parse(jsonData) as WPPost[];
}
export async function loadWpBlogs(): Promise<WPPost[]> {
  const filePath = path.join(process.cwd(), "src/data", "parent.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  return JSON.parse(jsonData) as WPPost[];
}

export const cleanShortcodes = (text: string): string => {
  return text.replace(/\[\/?\w+(?:\s+[^\]]*)?\]/g, "");
};

export async function getAllSubServicePaths(): Promise<
  { slug: string; actionSlug: string; title: string; description: string }[]
> {
  const servicesData = await loadServicesData();
  const paths: { slug: string; actionSlug: string; title: string; description: string }[] = [];

  servicesData.forEach((service) => {
    if (service.type === "dropdown" && service.subServices) {
      service.subServices.forEach((subService) => {
        paths.push({
          slug: service.slug,
          actionSlug: subService.slug,
          title: subService.title, // Add title and description for convenience
          description: subService.description,
        });
      });
    }
  });
  return paths;
}
