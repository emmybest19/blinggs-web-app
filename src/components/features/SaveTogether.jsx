import React from "react";

export default function SaveTogether() {
  return (
    <section className="w-full px-4 py-12 md:py-20 bg-white rounded-2xl ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
            Two ways to save together
          </h2>
          <p className="mt-2 text-gray-500 text-base md:text-lg">
            Choose the structure that fits your group's needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Personal Groups */}
          <div className="relative rounded-2xl bg-slate-800 text-white p-6 md:p-8 shadow-lg flex flex-col justify-between">
            <div>
              <span className="inline-block mb-6 px-4 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700">
                Private Control
              </span>

              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Personal Groups
              </h3>

              <p className="text-slate-300 mb-6 max-w-md">
                Perfect for close friends and family. Create a savings circle where the admin has full control over withdrawals and management.
              </p>
            </div>

            <div className="flex items-center gap-3 text-slate-200">
              <div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 0h10.5A2.25 2.25 0 0119.5 12.75v6A2.25 2.25 0 0117.25 21h-10.5A2.25 2.25 0 014.5 18.75v-6A2.25 2.25 0 016.75 10.5z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-medium">Admin Controlled</p>
                <p className="text-sm text-slate-400">
                  Admin manages all funds and members.
                </p>
              </div>
            </div>

            {/* Icon */}
            <div className="absolute top-6 right-6 opacity-60">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="20" r="10" stroke="white" strokeWidth="2" />
                <path d="M12 52c2-10 14-14 20-14s18 4 20 14" stroke="white" strokeWidth="2" />
              </svg>
            </div>
          </div>

          {/* Public Groups */}
          <div className="relative rounded-2xl bg-emerald-800 text-white p-6 md:p-8 shadow-lg flex flex-col justify-between">
            <div>
              <span className="inline-block mb-6 px-4 py-1 text-sm rounded-full bg-emerald-200 text-emerald-900">
                Community Trust
              </span>

              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Public Groups
              </h3>

              <p className="text-emerald-100 mb-6 max-w-md">
                Designed for larger communities and cooperatives. Enhanced security requires 3-person approval for any withdrawal.
              </p>
            </div>

            <div className="flex items-center gap-3 text-emerald-100">
              <div className="w-9 h-9 rounded-full bg-emerald-700 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m6 2.25a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-medium">Multi‑Sig Approval</p>
                <p className="text-sm text-emerald-200">
                  Requires 3 approvals to withdraw funds.
                </p>
              </div>
            </div>

            {/* Icon */}
            <div className="absolute top-6 right-6 opacity-60">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="20" r="10" stroke="white" strokeWidth="2" />
                <path d="M12 52c2-10 14-14 20-14s18 4 20 14" stroke="white" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
