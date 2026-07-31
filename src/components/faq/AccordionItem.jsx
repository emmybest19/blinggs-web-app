import { useState } from "react";
import { Plus, Minus, MessageSquare, ArrowRight } from "lucide-react";

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
        a: "Personal groups are managed by a single admin. Public groups require approval from 60% of group members for withdrawals, making them safer for larger communities.",
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
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-4 text-left group transition-colors"
      >
        <span className="text-sm md:text-base font-medium text-gray-900 group-hover:text-indigo-600">
          {q}
        </span>
        <span className="text-indigo-500 shrink-0 ml-2">
          {open ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

function FAQCard({ title, items }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <h3 className="text-base md:text-lg font-semibold mb-2 text-gray-900">
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
    <section className="py-12 px-4 md:px-10 max-w-7xl mx-auto font-sans">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
        Frequently Asked Questions
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* FAQ Cards Column */}
        <div className="lg:col-span-2 space-y-6">
          {faqs.map((group, idx) => (
            <FAQCard key={idx} title={group.section} items={group.items} />
          ))}
        </div>

        {/* Need Help Banner Card */}
        <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden shadow-lg min-h-[320px]">
          <div className="space-y-3 z-10">
            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Need more help?</h3>
            <p className="text-sm text-indigo-100 leading-relaxed max-w-xs">
              Our dedicated support team is available 24/7 to assist you with any questions.
            </p>
          </div>

          <div className="z-10 pt-6">
            <button className="flex items-center justify-center gap-2 bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-all shadow-sm active:scale-95">
              <span>Contact Support</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Decorative Background Accent */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
}