import React from "react";

export default function ArticleHeader() {
  return (
    <section className="w-full flex justify-center px-4 py-10">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-lg px-6 py-10 sm:px-10">
        {/* Category */}
        <span className="inline-block mb-6 rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-600">
          Crypto
        </span>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Understanding Bitcoin to Naira Conversion
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-base sm:text-lg max-w-3xl mb-8">
          A complete guide to converting your crypto assets to local currency safely and instantly.
        </p>

        {/* Author Section */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Avatar */}
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-semibold">
            MC
          </div>

          {/* Author Info */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <div>
              <p className="text-gray-900 font-medium">Michael Chen</p>
              <p className="text-sm text-gray-500">Crypto Specialist</p>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Oct 08, 2023
              </span>
              <span className="flex items-center gap-1">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                6 min read
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
