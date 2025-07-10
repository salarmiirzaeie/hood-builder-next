import { notFound } from "next/navigation";
import ServicesNavBar from "@/app/components/ui/servicesNavBar";
import PageHeader from "@/app/components/ui/PageHeader";
import HtmlRenderer from "@/app/components/ui/HtmlRenderer";
import { loadWpPostsData, cleanShortcodes, getAllSubServicePaths } from "@/lib/data";
import { Metadata } from "next";

type Props = {
  params: Promise<{ service: string; subService: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { service: slug, subService: actionSlug } = await params;

  const subServiceData = await getAllSubServicePaths();

  const parentService = subServiceData.find((s) => s.actionSlug === actionSlug && s.slug === slug);
  return {
    title: parentService?.title || "",
    description: parentService?.description || "",
  };
}
export async function generateStaticParams() {
  const subServiceData = await getAllSubServicePaths();

  return subServiceData.map((service) => ({
    service: service.slug,
    subService: service.actionSlug,
  }));
}
export default async function NestedServiceDetailPage({ params }: Props) {
  const { service: slug, subService: actionSlug } = await params;
  const subServiceData = await getAllSubServicePaths();
  const wpPostsData = await loadWpPostsData();

  const parentService = subServiceData.find((s) => s.actionSlug === actionSlug && s.slug === slug);

  if (!parentService) {
    notFound();
  }

  const html = wpPostsData.find((post) => post.post_name === actionSlug)?.post_content;
  const cleanedHtml = cleanShortcodes(html || "");

  return (
    <div>
      <ServicesNavBar />
      <PageHeader
        imageAlt={`Details for ${parentService.title}`}
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
          <HtmlRenderer htmlString={cleanedHtml} />
        </div>
      </div>
    </div>
  );
}
