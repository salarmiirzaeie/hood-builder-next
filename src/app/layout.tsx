import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Updated metadata to prevent indexing
export const metadata: Metadata = {
  title:
    "Restaurant Design, Repair and Construction | One-Step-Shop | Hood Builder | Boulder | Fort Collins | Denver,CO",
  description:
    "Hood Builder is your One-Step-Shop in Colorado, offering hood and HVAC installation, repair, cleaning, and maintenance services for restaurants. They also provide restaurant design and construction services. | Boulder | Fort Collins | Denver,CO",
  robots: {
    index: false,
    follow: false,
    nosnippet: true, // Optional: Prevents snippets from appearing in search results
    noarchive: true, // Optional: Prevents cached copies of the page
    nocache: true, // Optional: Prevents caching by search engines
    noimageindex: true, // Optional: Prevents images on the page from being indexed
    nositelinkssearchbox: true, // Optional: Prevents a sitelinks search box from appearing for your site
  },
  // The 'googleBot' property is not part of the standard Metadata type.
  // The 'robots' rules for 'userAgent: "*"' already apply to Googlebot.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
