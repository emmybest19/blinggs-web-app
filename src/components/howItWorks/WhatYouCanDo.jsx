import React from 'react'

export default function WhatYouCanDo() {
  const features = [
    {
      title: 'Split Bills',
      description:
        'Out for dinner? Pay the bill and request shares from friends in the group chat.',
      bg: 'bg-blue-50',
    },
    {
      title: 'Save Together',
      description:
        'Create a Public Group for your cooperative society and manage funds transparently.',
      bg: 'bg-green-50',
    },
  ]

  return (
    <section className="w-full bg-[#434c5d] py-20 px-4 mt-[30px] rounded-3xl animate-fade-in-up">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-white mb-14 animate-fade-in-down">
          What can you do with Blingg?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bg} rounded-3xl p-8 shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up card-hover`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
