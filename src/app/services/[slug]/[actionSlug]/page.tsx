// app/services/[slug]/[actionSlug]/page.tsx
import servicesData from "@/data/services.json"; // Adjust path if necessary
import { notFound } from "next/navigation";
import ServicesNavBar from "@/app/components/ui/servicesNavBar";
import PageHeader from "@/app/components/ui/PageHeader";

export async function generateStaticParams() {
  const paths: { slug: string; actionSlug: string }[] = []; // Changed 'categorySlug' to 'slug'

  servicesData.forEach((service) => {
    if (service.type === "dropdown" && service.subServices) {
      service.subServices.forEach((subService) => {
        paths.push({
          slug: service.slug, // Changed 'categorySlug' to 'slug'
          actionSlug: subService.slug,
        });
      });
    }
  });
  // console.log("Generated Paths for Nested Services (New Structure):", paths); // For debugging
  return paths;
}

interface ServicePageParams {
  slug: string;
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
  const { slug } = await params;

  // Find the parent service category using the 'slug' parameter
  const parentService = servicesData.find((s) => s.slug === slug && s.type === "dropdown"); // Changed 'categorySlug' to 'slug'

  if (!parentService || !parentService.subServices) {
    notFound(); // Category not found or not a dropdown type
  }

  // Find the specific sub-service

  return (
    <div>
      <ServicesNavBar />
      <PageHeader
        imageAlt="FAQ"
        imageUrl="/images/img-bg-featured.webp"
        title="Restaurant Remodeling Services for a Restaurant Renovation | Denver, CO | Fort Collins | Boulder"
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: slug }]}
      />
      <div className="bg-white font-sans p-4 flex justify-center">
        <div className="w-full max-w-7xl mx-auto py-8 md:py-16 px-4"></div>
      </div>
    </div>
  );
}
