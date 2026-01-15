import React from "react";

export default function StartInMinutes() {
  const steps = [
    {
      id: 1,
      title: "Download",
      description: "Get Bling from your app store.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-7 w-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v12m0 0l4-4m-4 4l-4-4M4 17h16"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Sign Up",
      description: "Create account in 2 minutes.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-7 w-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 9a3 3 0 11-6 0 3 3 0 016 0zM6 20a6 6 0 1112 0H6z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Transact",
      description: "Start sending money instantly.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-7 w-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 3L3 10l7 2 2 7 9-16z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-4 rounded-2xl">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Start in minutes
          </h2>
          <p className="mt-4 text-gray-500 text-base md:text-lg">
            No paperwork, no long queues. Just download and go.
          </p>
        </div>

        {/* Steps */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-16 md:gap-8">
          {/* Horizontal line (desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-indigo-200" />

          {steps.map((step) => (
            <div
              key={step.id}
              className="relative z-10 flex flex-col items-center text-center max-w-xs"
            >
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 shadow-md">
                {step.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                {step.id}. {step.title}
              </h3>

              <p className="mt-2 text-gray-500 text-sm md:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
