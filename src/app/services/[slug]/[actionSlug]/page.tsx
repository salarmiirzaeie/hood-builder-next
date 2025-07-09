// app/services/[slug]/[actionSlug]/page.tsx
import Image from "next/image";
import servicesData from "@/data/services.json"; // Adjust path if necessary
import { notFound } from "next/navigation";
import Link from "next/link";
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

export default function NestedServiceDetailPage({ params }: { params: { slug: string; actionSlug: string } }) {
  // Changed 'categorySlug' to 'slug'
  const { slug, actionSlug } = params; // Changed 'categorySlug' to 'slug'

  // Find the parent service category using the 'slug' parameter
  const parentService = servicesData.find((s) => s.slug === slug && s.type === "dropdown"); // Changed 'categorySlug' to 'slug'

  if (!parentService || !parentService.subServices) {
    notFound(); // Category not found or not a dropdown type
  }

  // Find the specific sub-service
  const subService = parentService.subServices.find((ss) => ss.slug === actionSlug);

  if (!subService) {
    notFound(); // Sub-service not found
  }

  return (
    <div>
      <ServicesNavBar />
      <PageHeader
        imageAlt="FAQ"
        imageUrl="/images/img-bg-featured.webp"
        title="Restaurant Remodeling Services for a Restaurant Renovation | Denver, CO | Fort Collins | Boulder"
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: params.slug }]}
      />
      <div className="bg-white font-sans p-4 flex justify-center">
        <div className="w-full max-w-7xl mx-auto py-8 md:py-16 px-4"></div>
      </div>
    </div>
  );
}
