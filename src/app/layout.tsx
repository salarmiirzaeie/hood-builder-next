import type { Metadata } from "next";
import { Open_Sans } from "next/font/google"; // Changed from Geist and Geist_Mono
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";

// Configure Open Sans
const openSans = Open_Sans({
  variable: "--font-open-sans", // Define a CSS variable for Open Sans
  subsets: ["latin"],
  display: "swap", // Important for preventing layout shifts (CLS)
});

// Updated metadata to prevent indexing (as per your previous code)
export const metadata: Metadata = {
  title:
    "Restaurant Design, Repair and Construction | One-Step-Shop | Hood Builder | Boulder | Fort Collins | Denver,CO",
  description:
    "Hood Builder is your One-Step-Shop in Colorado, offering hood and HVAC installation, repair, cleaning, and maintenance services for restaurants. They also provide restaurant design and construction services. | Boulder | Fort Collins | Denver,CO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply the Open Sans font variable to the body */}
      <Script
        src="https://cdn.callrail.com/companies/649937440/3df2f50517e0b811abc8/12/swap.js"
        strategy="afterInteractive"
      />

      <body className={`${openSans.variable} antialiased`}>
        <Header />
        {children}
        <ToastContainer />

        <Footer />
      </body>
    </html>
  );
}
