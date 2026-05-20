import React from 'react'

export default function StartInMinutes() {
  const steps = [
    {
      id: 1,
      title: 'Download',
      description: 'Get Bling from your app store.',
      icon: <img src="/images/download.png" alt="" />,
    },
    {
      id: 2,
      title: 'Sign Up',
      description: 'Create account in 2 minutes.',
      icon: <img src="/images/signup.png" alt="" />,
    },
    {
      id: 3,
      title: 'Transact',
      description: 'Start sending money instantly.',
      icon: <img src="/images/transact.png" alt="" />,
    },
  ]

  return (
    <section className="w-full bg-white py-10 px-10 rounded-3xl animate-fade-in-up">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-down">
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
          <div className="hidden md:block absolute top-11 left-0 right-0 h-px bg-indigo-200 animate-pulse" />

          {steps.map((step, idx) => (
            <div
              key={step.id}
              className="relative z-10 flex flex-col items-center text-center max-w-xs animate-fade-in-up card-hover"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300">
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
  )
}
