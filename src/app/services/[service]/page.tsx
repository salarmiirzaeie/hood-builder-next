import { notFound } from "next/navigation";
import PageHeader from "@/app/components/ui/PageHeader";
import ServicesNavBar from "@/app/components/ui/servicesNavBar";
import HtmlRenderer from "@/app/components/ui/HtmlRenderer";
import { loadServicesData, loadWpPostsData, cleanShortcodes } from "@/lib/data"; // Use the centralized data loading
import { Metadata } from "next";

type Props = {
  params: Promise<{ service: string; subService: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: slug } = await params;

  const servicesData = await loadServicesData();

  const service = servicesData.find((s) => s.slug === slug);
  return {
    title: service?.title || "",
    description: service?.description || "",
  };
}
export async function generateStaticParams() {
  const servicesData = await loadServicesData();

  return servicesData.map((service) => ({
    service: service.slug,
  }));
}

export default async function SubServicePage({ params }: Props) {
  const { service: slug } = await params;

  const servicesData = await loadServicesData();
  const wpPostsData = await loadWpPostsData();

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Find the corresponding post content
  const html = wpPostsData.find((post) => post.post_name === slug)?.post_content;
  const cleanedHtml = cleanShortcodes(html || "");

  return (
    <div>
      <ServicesNavBar />
      <PageHeader
        imageAlt="Service Detail" // More specific alt text
        imageUrl="/images/img-bg-featured.webp"
        title={service.description}
        breadcrumbs={[
          { label: "Hoodbuilder", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title || "" },
        ]}
      />
      <div className="bg-white text-black font-sans p-4 flex justify-center">
        <div className="w-full max-w-7xl mx-auto py-8 md:py-16 px-4">
          <HtmlRenderer htmlString={cleanedHtml} />
        </div>
      </div>
    </div>
  );
}
