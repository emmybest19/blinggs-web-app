import React from 'react'

const sections = [
  {
    title: '1. Eligibility',
    content: [
      'To use Blingg, you must:',
      [
        'Be legally capable of entering a binding agreement.',
        'Be at least 18 years old, or the age of majority under applicable law.',
        'Provide accurate and complete registration information.',
        'Use the Services only where legally permitted.',
      ],
      'We may request identity verification at any time.',
    ],
  },
  {
    title: '2. Account Registration',
    content: [
      'You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account.',
      'You agree to:',
      [
        'Provide accurate, current, and complete information.',
        'Update your information when necessary.',
        'Maintain the security of your device and login credentials.',
        'Notify us immediately of unauthorized use.',
      ],
      'We may suspend or terminate accounts that contain false information or present security, fraud, or compliance risks.',
    ],
  },
  {
    title: '3. Description of Services',
    content: [
      'Blingg may provide services including, where available:',
      [
        'Messaging and communication tools',
        'Wallet and payment-related features',
        'Transfers between users',
        'Bank transfer integrations',
        'Group contribution features',
        'Community and social features',
        'Notifications and updates',
        'Other services introduced from time to time',
      ],
      'Some services may be offered through regulated third-party partners.',
      'Availability may vary by region, eligibility, verification status, and legal requirements.',
    ],
  },
  {
    title: '4. Financial Services Disclaimer',
    content: [
      'Blingg is a technology platform. Certain payment, banking, verification, or transfer functions may be provided by licensed third-party partners.',
      'We do not guarantee uninterrupted availability of partner services.',
      'You authorize us to transmit required data to our partners for service delivery, fraud prevention, and compliance purposes.',
    ],
  },
  {
    title: '5. User Obligations',
    content: [
      'You agree not to:',
      [
        'Use Blingg for unlawful, fraudulent, deceptive, or abusive purposes.',
        'Impersonate any person or entity.',
        'Violate sanctions, AML, anti-fraud, or financial crime laws.',
        'Upload malware, malicious code, or harmful content.',
        'Interfere with platform operations.',
        'Harvest user data without consent.',
        'Use automated bots without authorization.',
        'Infringe intellectual property rights.',
        'Circumvent fees, limits, or security controls.',
      ],
    ],
  },
  {
    title: '6. Payments, Transfers & Fees',
    content: [
      'Where applicable:',
      [
        'Fees may apply to certain transactions or premium features.',
        'Applicable fees will be disclosed in-app, on our website, or before transaction confirmation.',
        'Transactions may be subject to verification, limits, delays, reversals, or compliance review.',
        'We may decline, delay, suspend, or reverse transactions where required by law, partner rules, fraud prevention, technical issues, or risk management.',
        'Completed transactions may be irreversible except where required by law or operational error correction.',
      ],
    ],
  },
]

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#0b1220] text-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0f1b2d] to-[#0b1220] p-6 sm:p-10 lg:p-14">
          <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl"></div>

          <div className="relative z-10 max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Legal & Compliance
            </div>

            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Terms of
              <span className="text-emerald-400"> Service</span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
              These Terms govern your access to and use of the Blingg platform,
              including our applications, products, financial features, and
              related services.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                <p className="text-sm text-white/50">Effective Date</p>
                <p className="mt-1 font-medium">28/04/2026</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                <p className="text-sm text-white/50">Last Updated</p>
                <p className="mt-1 font-medium">28/04/2026</p>
              </div>
            </div>
          </div>
        </div>

        {/* Intro */}
        <div className="mt-8 rounded-[32px] border border-white/10 bg-[#111827] p-6 sm:p-8">
          <p className="text-sm leading-8 text-white/70 sm:text-base">
            Welcome to <span className="font-medium text-white">Blingg</span>, a
            digital platform operated by{' '}
            <span className="text-emerald-400">
              Zeta Technology Limited (RC No. 9293143)
            </span>
            . By creating an account, accessing, or using Blingg, you agree to
            be bound by these Terms. If you do not agree, do not use the
            Services.
          </p>
        </div>

        {/* Main Layout */}
        <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-12">
          {/* Sidebar */}
          <div className="xl:col-span-3">
            <div className="xl:sticky xl:top-6 rounded-[32px] border border-white/10 bg-[#111827] p-6">
              <h3 className="mb-6 text-lg font-semibold">Table of Contents</h3>

              <div className="space-y-3">
                {sections.map((section, index) => (
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

          {/* Content */}
          <div className="space-y-6 xl:col-span-9">
            {sections.map((section, index) => (
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
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
                    Contact Information
                  </div>

                  <h2 className="text-3xl font-semibold sm:text-4xl">
                    Need Help?
                  </h2>

                  <p className="mt-4 max-w-2xl leading-8 text-white/70">
                    For legal inquiries, compliance matters, or questions
                    regarding these Terms of Service, please contact us.
                  </p>
                </div>

                <div className="min-w-full rounded-3xl border border-white/10 bg-white/5 p-6 sm:min-w-[320px] lg:min-w-[350px]">
                  <div className="space-y-5">
                    <div>
                      <p className="text-sm text-white/50">Company</p>

                      <p className="mt-1 font-medium">
                        Zeta Technology Limited
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-white/50">RC Number</p>

                      <p className="mt-1 font-medium">9293143</p>
                    </div>

                    <div>
                      <p className="text-sm text-white/50">Email</p>

                      <a
                        href="mailto:Contact@blinggapp.com"
                        className="mt-1 block text-emerald-400 hover:underline"
                      >
                        Contact@blinggapp.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Acknowledgement */}
            <section className="mb-10 rounded-[32px] border border-white/10 bg-[#111827] p-6 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-2xl">
                  ✓
                </div>

                <div>
                  <h2 className="text-2xl font-semibold">Acknowledgement</h2>

                  <p className="mt-4 leading-8 text-white/70">
                    By using Blingg, you acknowledge that you have read,
                    understood, and agreed to these Terms of Service.
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
