import React from "react";
import ContactSection from "../components/faq/ContactSection";
import Accordionitem from "../components/faq/AccordionItem";
export default function FAQSection() {
  return (
    <div className="bg-[#434c5d] px-[15px] md:px-[60px] py-[10px] md:py-[30px]">
      <Accordionitem />
      <ContactSection />
    </div>
  );
}
