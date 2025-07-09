// app/services/[slug]/page.tsx
import Image from "next/image";
import servicesData from "@/data/services.json";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHeader from "@/app/components/ui/PageHeader";
import ServicesNavBar from "@/app/components/ui/servicesNavBar";

export async function generateStaticParams() {
  // Only generate paths for services of type 'link'
  return servicesData
    .filter((service) => service.type === "link")
    .map((service) => ({
      slug: service.slug,
    }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  // Find the service data that matches the current slug and is a direct link
  const service = servicesData.find((s) => s.slug === slug && s.type === "link");

  if (!service) {
    notFound();
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
