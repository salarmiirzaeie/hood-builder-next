// No "use client" as this is now a Server Component
import { notFound } from "next/navigation";
import PageHeader from "@/app/components/ui/PageHeader";
import ServicesNavBar from "@/app/components/ui/servicesNavBar";
import HtmlRenderer from "@/app/components/ui/HtmlRenderer";
import { loadServicesData, loadWpPostsData, cleanShortcodes } from "@/lib/data"; // Use the centralized data loading

interface ServiceDetailPageProps {
  params: { service: string };
}

// 1. `generateStaticParams` to pre-render dynamic routes at build time
export async function generateStaticParams() {
  const servicesData = await loadServicesData();

  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

// 2. Main Page Component (Server Component)
export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { service: slug } = params;

  // Fetch data directly in the Server Component
  const servicesData = await loadServicesData();
  const wpPostsData = await loadWpPostsData();

  // Find the service data that matches the current slug
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    // next/navigation's notFound() is safe to use in Server Components
    notFound();
  }

  // Find the corresponding post content
  const html = wpPostsData.find((post) => post.post_name === slug)?.post_content;
  const cleanedHtml = cleanShortcodes(html || "");

  return (
    <div>
      {/* ServicesNavBar is likely a Client Component if it has interactive elements,
          but if not, it can be a Server Component. Assuming it might be interactive: */}
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
          {/* HtmlRenderer can be a Server Component if it just renders static HTML,
              or a Client Component if it has interactive features within the rendered HTML.
              Assuming it just renders HTML: */}
          <HtmlRenderer htmlString={cleanedHtml} />
        </div>
      </div>
    </div>
  );
}
