import React from "react";

// Share Article Component
export function ShareArticle() {
  return (
    <section className="w-full flex justify-center px-4 pb-20">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-lg px-6 py-8 sm:px-10 sm:py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Text */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900">
              Share this article
            </h4>
            <p className="text-gray-500 text-sm">
              Help others discover this content
            </p>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.949.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.723 0-4.932 2.21-4.932 4.93 0 .39.045.765.127 1.124-4.094-.205-7.725-2.165-10.15-5.144-.424.722-.666 1.561-.666 2.475 0 1.708.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.228-.616v.06c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.6 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14.001-7.496 14.001-13.986 0-.209 0-.42-.016-.63.962-.689 1.8-1.56 2.46-2.548z" />
              </svg>
            </button>

            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </button>

            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .73.593 1.324 1.325 1.324h11.495v-9.294h-3.13v-3.622h3.13v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.324-.594 1.324-1.324v-21.35c0-.732-.594-1.325-1.324-1.325z" />
              </svg>
            </button>

            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 8a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
