import React from "react";

export default function ContactSection() {
  return (
    <section className="w-full  px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6">
            {/* Email Card */}
            <div className="flex flex-col items-start gap-4 rounded-2xl bg-white p-6 shadow-sm">
              <img src="/images/email.png" alt="" className="w-12" />

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Email Us
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  support@bling.app
                </p>
              </div>
            </div>

            {/* Visit Card */}
            <div className="flex flex-col items-start gap-4 rounded-2xl bg-white p-6 shadow-sm">
              <img src="/images/visit.png" alt="" className="w-12" />

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Visit Us
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  123 Innovation Drive, Lekki Phase 1, Lagos, Nigeria
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
              <h2 className="mb-6 text-2xl font-semibold text-gray-900">
                Send a message
              </h2>

              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Johnny Evans"
                      className="w-full rounded-xl bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full rounded-xl bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="How can we help you?"
                    className="w-full resize-none rounded-xl bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
