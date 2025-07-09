// app/services/[slug]/[actionSlug]/page.tsx
import servicesData from "@/data/services.json"; // Adjust path if necessary
import { notFound } from "next/navigation";
import ServicesNavBar from "@/app/components/ui/servicesNavBar";
import PageHeader from "@/app/components/ui/PageHeader";
import data from "@/data/wp_posts(1).json";
import { cleanShortcodes } from "@/utils/cleanShortcodes";
import HtmlRenderer from "@/app/components/ui/HtmlRenderer";
export async function generateStaticParams() {
  const paths: { slug: string; actionSlug: string; title: string; description: string }[] = []; // Changed 'categorySlug' to 'slug'

  servicesData.forEach((service) => {
    if (service.type === "dropdown" && service.subServices) {
      service.subServices.forEach((subService) => {
        paths.push({
          slug: service.slug, // Changed 'categorySlug' to 'slug'
          actionSlug: subService.slug,
          title: subService.title,
          description: subService.description,
        });
      });
    }
  });
  // console.log("Generated Paths for Nested Services (New Structure):", paths); // For debugging
  return paths;
}

interface ServicePageParams {
  slug: string;
  actionSlug: string;
}

// Define the interface for the *props* that your component will receive
// This is what the 'PageProps' constraint is likely looking for.
interface ServiceDetailPageProps {
  // params is a Promise in Next.js 15+ App Router
  params: Promise<ServicePageParams>;
  // If you also use searchParams, they are also Promises
  // searchParams?: Promise<{[key: string]: string | string[] | undefined}>;
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  // Await the params Promise to get the actual slug
  const { actionSlug } = await params;
  const parentServiceData = await generateStaticParams();
  // Find the parent service category using the 'slug' parameter
  const parentService = parentServiceData.find((s) => s.actionSlug === actionSlug); // Changed 'categorySlug' to 'slug'
  if (!parentService || !parentService.slug) {
    notFound(); // Category not found or not a dropdown type
  }

  const html = data.find((post) => post.post_name === actionSlug)?.post_content;
  const cleaned = cleanShortcodes(html || "");
  // Find the specific sub-service

  return (
    <div>
      <ServicesNavBar />
      <PageHeader
        imageAlt="FAQ"
        imageUrl="/images/img-bg-featured.webp"
        title={parentService.description}
        breadcrumbs={[
          { label: "Hoodbuilder", href: "/" },
          { label: "Services", href: "/services" },
          { label: parentService.title || "" },
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
