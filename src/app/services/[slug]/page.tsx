// app/services/[slug]/page.tsx
import servicesData from "@/data/services.json";
import { notFound } from "next/navigation";
import PageHeader from "@/app/components/ui/PageHeader";
import ServicesNavBar from "@/app/components/ui/servicesNavBar";
import HtmlRenderer from "@/app/components/ui/HtmlRenderer";
import data from "@/data/wp_posts(1).json";
import { cleanShortcodes } from "@/utils/cleanShortcodes";

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Find the service data that matches the current slug and is a direct link
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const html = data.find((post) => post.post_name === slug)?.post_content;
  const cleaned = cleanShortcodes(html || "");
  return (
    <div>
      <ServicesNavBar />
      <PageHeader
        imageAlt="FAQ"
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
          <HtmlRenderer htmlString={cleaned || ""} />
        </div>
      </div>
    </div>
  );
}
