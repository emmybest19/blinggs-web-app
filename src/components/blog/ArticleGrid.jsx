import React from "react";

export default function ArticlesGrid() {
  const articles = [
    {
      category: "Security",
      date: "Sep 25, 2023",
      title: "5 Tips for Secure Online Payments",
      description:
        "Protect your money with these essential security practices for digital banking.",
    },
    {
      category: "Crypto",
      date: "Oct 08, 2023",
      title: "Understanding Bitcoin to Naira Conversion",
      description:
        "A complete guide to converting your crypto assets to local currency safely and instantly.",
    },
    {
      category: "Security",
      date: "Sep 25, 2023",
      title: "5 Tips for Secure Online Payments",
      description:
        "Protect your money with these essential security practices for digital banking.",
    },
    {
      category: "Security",
      date: "Sep 25, 2023",
      title: "5 Tips for Secure Online Payments",
      description:
        "Protect your money with these essential security practices for digital banking.",
    },
    {
      category: "Crypto",
      date: "Oct 08, 2023",
      title: "Understanding Bitcoin to Naira Conversion",
      description:
        "A complete guide to converting your crypto assets to local currency safely and instantly.",
    },
    {
      category: "Security",
      date: "Sep 25, 2023",
      title: "5 Tips for Secure Online Payments",
      description:
        "Protect your money with these essential security practices for digital banking.",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gray-200 relative">
                <span className="absolute top-4 left-4 rounded-full bg-white px-4 py-1 text-sm font-medium text-indigo-600 shadow">
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{article.date}</span>
                </div>

                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  {article.title}
                </h3>

                <p className="mb-6 text-gray-600 text-sm leading-relaxed">
                  {article.description}
                </p>

                <a
                  href="#"
                  className="mt-auto inline-flex items-center gap-2 text-indigo-600 font-medium hover:underline"
                >
                  Read Article
                  <span className="text-xl">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
