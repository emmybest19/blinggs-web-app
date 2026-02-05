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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
          {/* Personal Groups */}
          <div className="relative rounded-2xl bg-slate-800 text-white p-6 md:p-8 shadow-lg flex flex-col justify-between text-sm md:text-lg">
            <div>
              <span className="inline-block mb-6 px-4 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700">
                Private Control
              </span>

              <h3 className="text-xl md:text-3xl font-semibold mb-4">
                Personal Groups
              </h3>

              <p className="text-slate-300 mb-6 max-w-md">
                Designed for life’s special moments. Personal Groups on Blingg
                let friends and family save, contribute, and donate together
                with ease. Create a shared wallet, contribute anytime, and
                withdraw instantly — no approvals needed. <br />
                Perfect for: Weddings • Birthdays • Naming ceremonies • Burial
                support • Baby showers • Housewarming • Family & friends savings
                Simple. Fast. Stress-free.
              </p>
            </div>

            <div className="flex items-center gap-3 text-slate-200">
              <img src="/images/admincontrol.png" alt="" className="w-5 " />
              <div>
                <p className="font-medium">Admin Controlled</p>
                <p className="text-sm text-slate-400">
                  Admin manages all funds and members.
                </p>
              </div>
            </div>

            <div className="absolute top-2 right-4 opacity-60">
              <img
                src="/images/group2.png"
                alt=""
                className="md:w-28 md:h-32 w-20 "
              />
            </div>

            {/* Icon */}
            {/* <div className="absolute top-6 right-6 opacity-60">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="20" r="10" stroke="white" strokeWidth="2" />
                <path d="M12 52c2-10 14-14 20-14s18 4 20 14" stroke="white" strokeWidth="2" />
              </svg>
            </div> */}
          </div>

          {/* Public Groups */}
          <div className="relative rounded-2xl bg-emerald-800 text-white p-6 md:p-8 shadow-lg flex flex-col justify-between">
            <div>
              <span className="inline-block mb-6 px-4 py-1 text-sm rounded-full bg-emerald-200 text-emerald-900">
                Community Trust
              </span>

              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                General Groups
              </h3>

              <p className="text-emerald-100 mb-6 max-w-md">
                Because group money deserves group control. General Groups are
                designed for transparency and accountability. All contributions
                go into a secure group wallet Withdrawal requests are visible to
                members. <br/>Enhanced security 60% of members must approve before
                funds are released No single person can misuse group funds Best
                for: Churches • Cooperatives • Associations • Community projects
                With Blingg, every contribution is protected by shared approval.
              </p>
            </div>

            <div className="flex items-center gap-2 text-emerald-100">
              <img src="/images/multisig.png" alt="" className="w-5" />
              <div>
                <p className="font-medium">Multi‑Sig Approval</p>
                <p className="text-sm text-emerald-200">
                  Requires 3 approvals to withdraw funds.
                </p>
              </div>
            </div>

            <div className="absolute top-2 right-4 opacity-60">
              <img
                src="/images/group2.png"
                alt=""
                className="md:w-28 md:h-32 w-20 "
              />
            </div>

            {/* Icon */}
            {/* <div className="absolute top-6 right-6 opacity-60">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="20" r="10" stroke="white" strokeWidth="2" />
                <path d="M12 52c2-10 14-14 20-14s18 4 20 14" stroke="white" strokeWidth="2" />
              </svg>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
