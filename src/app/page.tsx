import RestaurantServicesHero from "./components/home/RestaurantServicesHero";
import InfoSection from "./components/home/Info";
import Clients from "./components/home/Clients";
import Description from "./components/home/Discription";
import ServicesBanner from "./components/home/services-banner";
import BlogPostsSection from "./components/home/Blogs";
import ImageSlider from "./components/home/ImageSlider";
import FreeQuoteSection from "./components/home/FreeQuoteSection";
import FireSuppressionSection from "./components/home/FireSuppressionSection";
import RestaurantInfoSection from "./components/home/RestaurantInfoSection";
import AboutBanner from "./components/home/about-banner";

export default function Home() {
  const logos = [
    { name: "Pizza Hut", src: "/logos/logo-pizzahut.webp", width: 82, height: 83 },
    { name: "McDonalds", src: "/logos/logo-ikea.webp", width: 119, height: 21 },
    { name: "Toyota", src: "/logos/logo-carrefour.webp", width: 106, height: 84 },
    { name: "Nissan", src: "/logos/logo-costco.webp", width: 132, height: 118 },
    { name: "Costco", src: "/logos/logo-subway.webp", width: 134, height: 39 },
    { name: "IKEA", src: "/logos/logo-toyota.webp", width: 82, height: 67 },
    { name: "Carrefour", src: "/logos/logo-mcdonalds.webp", width: 96, height: 65 },
    { name: "Subway", src: "/logos/logo-nissan.webp", width: 94, height: 80 },
  ];
  return (
    <div>
      <RestaurantServicesHero />
      <ImageSlider />
      <InfoSection />
      <Clients logos={logos} />
      <Description />
      <ServicesBanner />
      <RestaurantInfoSection />
      <AboutBanner />

      <FireSuppressionSection />
      <FreeQuoteSection />
      <BlogPostsSection />
    </div>
  );
}
