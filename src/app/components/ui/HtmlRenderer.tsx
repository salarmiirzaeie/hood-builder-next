// components/HtmlRenderer.tsx
"use client";
type HtmlRendererProps = {
  htmlString: string;
};

export default function HtmlRenderer({ htmlString }: HtmlRendererProps) {
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
}
