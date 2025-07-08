"use client";
import React, { useRef, useState } from "react";
import PageHeader from "../components/ui/PageHeader";

const Page = () => {
  const faqData = [
    {
      question: "Is It Necessary To Have My Kitchen Exhaust System Cleaned?",
      answer:
        "Yes. The law states that kitchen grease exhaust cleaning must be performed on a regular basis, and the Fire Marshal, Health Inspector and your insurance company will be closely monitoring your compliance. The law isn’t set out to inconvenience you. Vent hood cleaning to remove kitchen grease prevents fire and improves air flow, leading to a safer and cleaner kitchen environment. As an added bonus, you can improve the life of your vent hoods and exhaust systems by engaging in regular cleaning and maintenance.",
    },
    {
      question: "How Often Should I Have My Vent Hoods Cleaned?",
      answer:
        "At Hood Builder, we recommend that incredibly busy kitchens engage in quarterly cleaning schedules, such as those operating 24-hours per day. For moderately busy kitchens, a thorough cleaning every six months should suffice. Low-volume kitchens can get away with annual vent hood cleanings, but for kitchens that primarily use wood or coal, monthly cleanings might be best.",
    },
    {
      question: "Why Can't I Just Rely On My Employees To Clean My Vent Hoods?",
      answer:
        "Cleaning vent hoods and the ventilation systems they’re attached to is a tedious task that requires experience, training and specialized equipment. If you employ individuals who happen to be qualified and certified, that is an ideal scenario for passing vent hood inspections and getting the most efficiency and safety from your vent hood performance. On the other hand, if you don’t employ anyone who is qualified and certified to clean kitchen ventilation systems, it pays to hire a professional team like Hood Builder to do the work for you.",
    },
    {
      question: "When I Hire Hood Builder To Clean My Kitchen, Will I Have To Shut My Business Down?",
      answer:
        "At Hood Builder, we work around your schedule. You tell us when to clean and we’ll show up with tools in hand, ready to get the job done to your complete satisfaction.",
    },
    {
      question: "Do You Adhere To Any Standards When Performing Vent Hood Cleaning And Maintenance?",
      answer:
        "Yes. At Hood Builder, our technicians are trained and certified in advanced cleaning systems course work as mandated by the National Fire Protection Association. The NFPA is the authority on fire, electrical and building safety protocols. When you choose Hood Builder, you can be sure that your vent hood cleaning, kitchen equipment maintenance and fire suppression system installation will adhere to the stringent standards of the NFPA and all other related associations.",
    },
    {
      question: "How Much Do You Charge For Vent Hood Cleaning In Denver?",
      answer:
        "We wish we could tell you a definite figure to make the process easier to figure for your budget, but unfortunately there are several factors to consider. When determine how much to quote for a vent hood cleaning project, we take into consideration the type of system you have and the volume of work involved. However, we also guarantee that we can beat our competitors’ prices, and offer special rates to our long-term clients. We don’t want you to just use Hood Builder once. We want to return again and again to keep your vent hoods sparkling clean, your kitchen air clean, and your personnel safe from fire. Contact Hood Builder today to receive a free quote.",
    },
    {
      question: "Is Your Work Guaranteed?",
      answer:
        "Yes. At Hood Builder, we guarantee our work 100%. If you are not satisfied with any aspect of our work, we will remedy the situation as quickly and efficiently as possible. If you are not satisfied in any way, we will work to make the situation right at no additional cost to you. Contact us today to learn more about our satisfaction guarantee.",
    },
    {
      question: "How Long Does It Take To Clean The Average Commercial Kitchen?",
      answer:
        "The time our team takes to clean your exhaust system depends on the condition of the system in question. If your exhaust and vent hoods haven’t been cleaned for some time, our team may take longer to complete the job than if cleaning was performed on a regular basis. A larger kitchen will also take longer to clean than a smaller one. On average, the Hood Builder team can complete a vent hood and exhaust system cleaning in about three hours, and usually at night when your restaurant is closed for the evening.",
    },
    {
      question: "Are You Licensed And Insured?",
      answer: "Yes. Hood Builder is fully licensed and insured for your uncompromised protection.",
    },
    {
      question: "What Other Services Can You Offer?",
      answer:
        "Hood Builder can keep your exhaust systems clean, including all hoods, vents, fans, and duct work, as well as perform kitchen equipment maintenance and service. Our technician can also check your fire suppression systems for compliance, maintain your systems and perform regular service to keep your kitchen, equipment and personnel safe from harm at all times. To learn more about the cleaning, maintenance and installation services we offer, visit our Services page.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleOpen = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div>
      <PageHeader
        imageAlt="FAQ"
        imageUrl="/images/img-bg-featured.webp"
        title="FAQ Kitchen Exhaust Hood & Hood Cleaning Service in Denver"
        breadcrumbs={[{ label: "Hood Builder", href: "/" }, { label: "FAQ" }]}
        description="Get all your questions answered..."
      />
      <div className="bg-white font-sans p-4 flex justify-center">
        <div className="w-full max-w-7xl mx-auto py-8 md:py-16 px-4">
          {faqData.map((item, index) => (
            <div key={index} className="mb-4 border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
              <button
                className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-700 hover:text-gray-900 focus:outline-none"
                onClick={() => toggleOpen(index)}
              >
                <span className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-3 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={openIndex === index ? "M5 13l4 4L19 7" : "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}
                    />
                  </svg>
                  {item.question}
                </span>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
              <div
                ref={(el) => {
                  if (el) {
                    contentRefs.current[index] = el;
                  }
                }}
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  maxHeight: openIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : "0px",
                  opacity: openIndex === index ? 1 : 0,
                  transitionProperty: "max-height, opacity",
                }}
              >
                <div className="mt-3 pl-8 text-gray-600">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
