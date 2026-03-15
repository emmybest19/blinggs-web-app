import React from "react";
import { Link } from "react-router-dom";

import { articles } from "../../lib/data";

export default function ArticlesGrid() {
   return (
    <section className="w-full max-w-7xl mx-auto py-5 px-4 animate-fade-in-up">
      <div className="mx-auto max-w-7xl">
        {/* Page header with animation */}
        <div className="mb-12 animate-fade-in-down">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Latest Articles</h1>
          <p className="text-white/60">Explore our latest insights on fintech, crypto, and security</p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, idx) => (
            <Link
              key={article.id}
              to={`/blog/${article.id}`}
              className={`overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up card-hover stagger-item-${(idx % 6) + 1}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-indigo-400 to-emerald-400 relative overflow-hidden group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                <span className="absolute top-4 left-4 rounded-full bg-white px-4 py-1 text-sm font-medium text-indigo-600 shadow-lg animate-scale-in-small" style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}>
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <div className="mb-3 flex items-center gap-2 text-sm text-gray-500 animate-fade-in-up-delay-1" style={{ animationDelay: `${idx * 0.1 + 0.1}s` }}>
                  <img src="/images/calendar.png" alt=""  className="w-4"/>
                  <span>{article.date}</span>
                </div>

                <h3 className="mb-3 text-lg font-semibold text-gray-900 line-clamp-2 animate-fade-in-up-delay-2" style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}>
                  {article.title}
                </h3>

                <p className="mb-6 text-gray-600 text-sm leading-relaxed line-clamp-2 animate-fade-in-up-delay-3" style={{ animationDelay: `${idx * 0.1 + 0.3}s` }}>
                  {article.description}
                </p>

                {/* Read more link */}
                <div className="mt-auto pt-4 border-t border-gray-200 flex items-center justify-between group/link">
                  <span className="text-indigo-600 font-medium text-sm group-hover/link:text-emerald-600 transition-colors">Read Article</span>
                  <span className="text-xl text-indigo-600 group-hover/link:text-emerald-600 group-hover/link:translate-x-2 transition-all duration-300">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
