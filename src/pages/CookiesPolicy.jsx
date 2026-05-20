import React from 'react'

const cookieSections = [
  {
    title: 'What Are Cookies?',
    content: [
      'Cookies are small text files stored on your device when you visit a website or use certain online services. They help improve functionality, security, and user experience.',
    ],
  },

  {
    title: 'How Blingg Uses Cookies',
    content: [
      'We use cookies and similar technologies to:',
      [
        'Keep users signed in securely',
        'Improve website and app performance',
        'Remember user preferences and settings',
        'Analyze traffic and platform usage',
        'Enhance security and fraud prevention',
        'Support authentication and session management',
        'Provide a smoother and personalized experience',
      ],
    ],
  },

  {
    title: 'Essential Cookies',
    content: [
      'These cookies are necessary for the operation of our platform and cannot be disabled.',
      'They help with:',
      [
        'Login authentication',
        'Security verification',
        'Session management',
        'Fraud prevention',
      ],
    ],
  },

  {
    title: 'Performance & Analytics Cookies',
    content: [
      'These cookies help us understand how users interact with Blingg so we can improve our services and overall user experience.',
    ],
  },

  {
    title: 'Functional Cookies',
    content: [
      'These cookies remember your preferences such as:',
      ['Language settings', 'Theme preferences', 'Device recognition'],
    ],
  },

  {
    title: 'Third-Party Services',
    content: [
      'Some cookies may be provided by trusted third-party service providers integrated into our platform.',
      [
        'Analytics providers',
        'Security partners',
        'Payment processing services',
      ],
    ],
  },

  {
    title: 'Managing Cookies',
    content: [
      'Most browsers and devices allow you to:',
      [
        'View cookies',
        'Delete cookies',
        'Block cookies',
        'Control cookie permissions',
      ],
      'Disabling certain cookies may affect some parts of the Blingg experience and platform functionality.',
    ],
  },

  {
    title: 'Data Privacy',
    content: [
      'Cookies used by Blingg are handled in accordance with our Privacy Policy and are used to support security, performance, and user experience improvements.',
    ],
  },

  {
    title: 'Updates to This Policy',
    content: [
      'We may update this Cookies Policy periodically to reflect changes to our services, technology, or legal requirements.',
      'Updated versions will be posted on this page.',
    ],
  },
]

export default function CookiesPolicyPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#0b1220] px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0f1b2d] to-[#0b1220] p-6 sm:p-10 lg:p-14">
          {/* Glow Effect */}
          <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"></div>

          <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            {/* Left Content */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Website Cookies & Tracking
              </div>

              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Cookies
                <span className="text-emerald-400"> Policy</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Learn how Blingg uses cookies and similar technologies to
                improve security, performance, authentication, and your overall
                experience across our platform.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                  <p className="text-sm text-white/50">Last Updated</p>

                  <p className="mt-1 font-medium">May 2026</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                  <p className="text-sm text-white/50">Policy Type</p>

                  <p className="mt-1 font-medium">Cookies & Tracking</p>
                </div>
              </div>
            </div>

            {/* Right Visual Cards */}
            <div className="grid grid-cols-1 gap-5">
              <div className="rounded-[28px] border border-white/10 bg-white p-6 text-black">
                <div className="text-sm font-medium text-emerald-600">
                  Secure Authentication
                </div>

                <h3 className="mt-4 text-4xl font-bold">Privacy</h3>

                <p className="mt-4 leading-7 text-black/60">
                  Cookies help maintain secure sessions, account protection, and
                  fraud prevention systems.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-[#111827] p-6">
                <div className="text-sm font-medium text-emerald-400">
                  Personalized Experience
                </div>

                <p className="mt-5 leading-8 text-white/70">
                  Blingg uses cookies to remember preferences, optimize
                  performance, and deliver a smoother community-driven
                  experience.
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-emerald-400"></div>
                  <div className="h-3 w-3 rounded-full bg-white/20"></div>
                  <div className="h-3 w-3 rounded-full bg-white/20"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="mt-8 rounded-[32px] border border-white/10 bg-[#111827] p-6 sm:p-8">
          <p className="text-sm leading-8 text-white/70 sm:text-base">
            Welcome to Blingg (“Blingg”, “we”, “our”, or “us”). This Cookies
            Policy explains how we use cookies and similar technologies when you
            use our website, mobile application, and related services.
          </p>
        </section>

        {/* Main Content */}
        <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-12">
          {/* Sidebar */}
          <div className="xl:col-span-3">
            <div className="rounded-[32px] border border-white/10 bg-[#111827] p-6 xl:sticky xl:top-6">
              <h3 className="mb-6 text-lg font-semibold">Quick Navigation</h3>

              <div className="space-y-3">
                {cookieSections.map((section, index) => (
                  <a
                    key={index}
                    href={`#section-${index}`}
                    className="block text-sm text-white/60 transition hover:text-emerald-400"
                  >
                    {section.title}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Main Sections */}
          <div className="space-y-6 xl:col-span-9">
            {cookieSections.map((section, index) => (
              <section
                key={index}
                id={`section-${index}`}
                className="rounded-[32px] border border-white/10 bg-[#111827] p-6 transition-all duration-300 hover:border-emerald-400/20 sm:p-8"
              >
                <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">
                  {section.title}
                </h2>

                <div className="space-y-5">
                  {section.content.map((item, idx) => {
                    if (Array.isArray(item)) {
                      return (
                        <ul key={idx} className="ml-2 space-y-3">
                          {item.map((listItem, listIdx) => (
                            <li
                              key={listIdx}
                              className="flex gap-3 text-white/70"
                            >
                              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-400"></span>

                              <span className="leading-7">{listItem}</span>
                            </li>
                          ))}
                        </ul>
                      )
                    }

                    return (
                      <p
                        key={idx}
                        className="text-sm leading-8 text-white/70 sm:text-base"
                      >
                        {item}
                      </p>
                    )
                  })}
                </div>
              </section>
            ))}

            {/* Contact Section */}
            <section className="rounded-[32px] border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 to-[#111827] p-6 sm:p-8">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <div className="mb-5 inline-flex rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
                    Contact Us
                  </div>

                  <h2 className="text-3xl font-semibold sm:text-4xl">
                    Questions About Cookies?
                  </h2>

                  <p className="mt-5 leading-8 text-white/70">
                    If you have questions about this Cookies Policy or how
                    Blingg uses cookies and similar technologies, please contact
                    our support team.
                  </p>
                </div>

                <div className="min-w-full rounded-3xl border border-white/10 bg-white/5 p-6 sm:min-w-[320px] lg:min-w-[360px]">
                  <div className="space-y-5">
                    <div>
                      <p className="text-sm text-white/50">Support Email</p>

                      <a
                        href="mailto:support@blinggapp.com"
                        className="mt-1 block text-emerald-400 hover:underline"
                      >
                        support@blinggapp.com
                      </a>
                    </div>

                    <div>
                      <p className="text-sm text-white/50">Platform</p>

                      <p className="mt-1 font-medium">Blingg</p>
                    </div>

                    <div>
                      <p className="text-sm text-white/50">Mission</p>

                      <p className="mt-1 font-medium">
                        Connect. Contribute. Grow Together.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer Acknowledgement */}
            <section className="mb-10 rounded-[32px] border border-white/10 bg-[#111827] p-6 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-2xl">
                  🍪
                </div>

                <div>
                  <h2 className="text-2xl font-semibold">
                    Your Privacy Matters
                  </h2>

                  <p className="mt-4 leading-8 text-white/70">
                    Blingg uses cookies responsibly to improve security,
                    platform performance, and your overall user experience while
                    respecting your privacy and preferences.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
