import React from "react";
import { Link } from "react-router-dom";

import { articles } from "../../lib/data";

export default function ArticlesGrid() {
   return (
    <section className="w-full max-w-7xl mx-auto py-5 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/blog/${article.id}`}
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
                  <img src="/images/calendar.png" alt=""  className="w-4"/>
                  <span>{article.date}</span>
                </div>

                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  {article.title}
                </h3>

                <p className="mb-6 text-gray-600 text-sm leading-relaxed">
                  {article.description}
                </p>

                {/* <a
                  href="#"
                  className="mt-auto inline-flex items-center gap-2 text-indigo-600 font-medium hover:underline"
                >
                  Read Article
                  <span className="text-xl">→</span>
                </a> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
