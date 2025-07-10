import Breadcrumb from "@/app/components/ui/Breadcrumb";
import HtmlRenderer from "@/app/components/ui/HtmlRenderer";
import { cleanShortcodes, loadWpBlogs } from "@/lib/data";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const servicesData = await loadWpBlogs();

  const service = servicesData.find((s) => s.post_name === slug);
  return {
    title: service?.post_title || "",
  };
}
export async function generateStaticParams() {
  const servicesData = await loadWpBlogs();

  return servicesData.map((service) => ({
    slug: service.post_name,
  }));
}
export default async function Page({ params }: Props) {
  const blogs = await loadWpBlogs();

  const { slug } = await params;

  const blog = blogs.find((b) => b.post_name === slug);

  if (!blog) {
    notFound();
  }

  const html = blog.post_content;
  const cleanedHtml = cleanShortcodes(html || "");
  return (
    <div className="bg-white font-sans p-4 flex justify-center">
      <div className="w-full max-w-7xl mx-auto py-8 md:py-16 px-4">
        <Breadcrumb name={blog.post_title} />
        <div className="bg-white text-black font-sans py-16  flex justify-center">
          <HtmlRenderer htmlString={cleanedHtml} />
        </div>
      </div>
    </div>
  );
}
