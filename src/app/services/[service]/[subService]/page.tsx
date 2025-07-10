import { notFound } from "next/navigation";
import ServicesNavBar from "@/app/components/ui/servicesNavBar";
import PageHeader from "@/app/components/ui/PageHeader";
import HtmlRenderer from "@/app/components/ui/HtmlRenderer";
import { loadWpPostsData, cleanShortcodes, getAllSubServicePaths } from "@/lib/data";

// ✅ Don't manually type `params`; Next.js will infer it
export default async function NestedServiceDetailPage({ params }: { params: { service: string; subService: string } }) {
  const { service: slug, subService: actionSlug } = params;

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
