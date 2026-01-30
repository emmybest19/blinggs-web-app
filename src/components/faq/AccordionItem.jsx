import { useState } from "react";

const faqs = [
  {
    section: "Account & Security",
    items: [
      {
        q: "Is Blingg safe to use?",
        a: "Yes. Blingg uses bank-grade encryption, biometric authentication, and is fully compliant with financial regulations.",
      },
      {
        q: "How do I verify my identity?",
        a: "You can verify your identity by uploading a valid government-issued ID and completing biometric verification within the app.",
      },
    ],
  },
  {
    section: "Payments & Transfers",
    items: [
      {
        q: "How long do transfers take?",
        a: "Transfers to other Blingg users are instant. Bank transfers usually reflect within minutes, depending on the receiving bank.",
      },
      {
        q: "Are there any fees?",
        a: "Most transfers are free. Certain premium features or special transfers may attract small processing fees.",
      },
    ],
  },
  {
    section: "Groups & Contributions",
    items: [
      {
        q: "What is the difference between Personal and Public groups?",
        a: "Personal groups are managed by a single admin. Public groups require approval from three designated signatories for withdrawals, making them safer for larger communities.",
      },
      {
        q: "Can I leave a group contribution?",
        a: "Yes. You can exit a group at any time, subject to the group rules and contribution cycle.",
      },
    ],
  },
];

function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm md:text-base font-medium text-gray-900">
          {q}
        </span>
        <span className="text-xl font-semibold text-indigo-500">
          {open ? "−" : "+"}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-40 opacity-100 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

function FAQCard({ title, items }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-base md:text-lg font-semibold mb-4 text-gray-900">
        {title}
      </h3>
      {items.map((item, idx) => (
        <AccordionItem key={idx} {...item} />
      ))}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="text-white py-8 px-4 md:px-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-10">
        Frequently Asked Questions
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {faqs.map((group, idx) => (
            <FAQCard key={idx} title={group.section} items={group.items} />
          ))}
        </div>

        <div className="bg-indigo-600 rounded-2xl p-8 flex flex-col relative  min-h-[300px]">
          <div>
            <h3 className="text-lg font-semibold mb-2">Need more help?</h3>
            <p className="text-sm text-indigo-100">
              Our support team is available 24/7 to assist you with any issues.
            </p>
          </div>

          <button className="mt-6 flex items-center justify-center gap-2 bg-white text-indigo-600 font-medium px-5 py-3 rounded-xl hover:bg-indigo-50 transition">
            Contact Support
            <img src="/images/arrowright.png" alt=""  className="w-3"/>
          </button>
          <img src="/images/faqchat.png" alt=""  className="w-20  md:w-44 absolute bottom-0 right-0"/>
        </div>
      </div>
    </section>
  );
}
