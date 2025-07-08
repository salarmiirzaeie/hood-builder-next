import React from "react";
import QuoteForm from "../components/ui/QuoteForm";
import PageHeader from "../components/ui/PageHeader";
import Clients from "../components/home/Clients";

const page = () => {
  const logos = [
    { name: "Pizza Hut", src: "/logos/logo-pizzahut.webp", width: 82, height: 83 },
    { name: "McDonalds", src: "/logos/logo-ikea.webp", width: 119, height: 21 },
    { name: "Toyota", src: "/logos/logo-carrefour.webp", width: 106, height: 84 },
    { name: "Nissan", src: "/logos/logo-costco.webp", width: 132, height: 118 },
    { name: "Costco", src: "/logos/logo-subway.webp", width: 134, height: 39 },
    { name: "IKEA", src: "/logos/logo-toyota.webp", width: 82, height: 67 },
    { name: "Carrefour", src: "/logos/logo-mcdonalds.webp", width: 96, height: 65 },
    { name: "Subway", src: "/logos/logo-nissan.webp", width: 94, height: 80 },
    { name: "Target", src: "/logos/logo-target.webp", width: 69, height: 88 },
    { name: "Walgreens", src: "/logos/logo-walgreens.webp", width: 170, height: 39 },
    { name: "Walmart", src: "/logos/logo-walmart.webp", width: 170, height: 39 },
    { name: "Citibank", src: "/logos/logo-citibank.webp", width: 170, height: 39 },
    { name: "Johndeere", src: "/logos/logo-johndeere.webp", width: 170, height: 39 },
    { name: "Spar", src: "/logos/logo-spar.webp", width: 170, height: 39 },
    { name: "Volkswagen", src: "/logos/logo-volkswagen.webp", width: 170, height: 39 },
    { name: "Renault", src: "/logos/logo-renault.webp", width: 170, height: 39 },
    { name: "Porsche", src: "/logos/logo-porsche.webp", width: 170, height: 39 },
    { name: "Hilton", src: "/logos/logo-hilton.webp", width: 170, height: 39 },
    { name: "Olivegarden", src: "/logos/logo-olivegarden.webp", width: 170, height: 39 },
    { name: "Kodak", src: "/logos/logo-kodak.webp", width: 170, height: 39 },
    { name: "Pepsi", src: "/logos/logo-pepsi.webp", width: 170, height: 39 },
    { name: "Kfc", src: "/logos/logo-kfc.webp", width: 170, height: 39 },
    { name: "Holidayinn", src: "/logos/logo-holidayinn.webp", width: 170, height: 39 },
    { name: "Fedex", src: "/logos/logo-fedex.webp", width: 170, height: 39 },
    { name: "Burgerking", src: "/logos/logo-burgerking.webp", width: 170, height: 39 },
    { name: "Britishairways", src: "/logos/logo-britishairways.webp", width: 170, height: 39 },
    { name: "Ibm", src: "/logos/logo-ibm.webp", width: 170, height: 39 },
    { name: "Bbva", src: "/logos/logo-bbva.webp", width: 170, height: 39 },
    { name: "Itau", src: "/logos/logo-itau.webp", width: 170, height: 39 },
    { name: "3m", src: "/logos/logo-3m.webp", width: 170, height: 39 },
    { name: "Mayoclinic", src: "/logos/logo-mayoclinic.webp", width: 170, height: 39 },
    { name: "Doutor", src: "/logos/logo-doutor.webp", width: 170, height: 39 },
    { name: "Thehomedepot", src: "/logos/logo-thehomedepot.webp", width: 170, height: 39 },
  ];
  return (
    <div>
      <PageHeader
        imageAlt="Hood Builder Clients"
        imageUrl="/images/img-aboutus2.webp"
        title="Our Clients"
        breadcrumbs={[{ label: "Hood Builder", href: "/" }, { label: "Hood Builder Clients" }]}
      />

      <Clients showButton={false} logos={logos} />
      <QuoteForm />
    </div>
  );
};

export default page;
