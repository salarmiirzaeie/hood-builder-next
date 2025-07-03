import Image from "next/image";
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

export default function Home() {
  return (
    <div>
      <RestaurantServicesHero />
      <ImageSlider />
      <InfoSection />
      <Clients />
      <Description />
      <ServicesBanner />
      <RestaurantInfoSection />
      <ServicesBanner />

      <FireSuppressionSection />
      <FreeQuoteSection />
      <BlogPostsSection />
    </div>
  );
}
