import React from 'react'

const sections = [
  {
    title: '1. Who We Are',
    content: [
      'Blingg is operated by:',
      'Zeta Technology Limited',
      'RC No. 9293143',
      'Email: Contact@blinggapp.com',
      'Address: 14 Diamond Hill Calabar',
    ],
  },

  {
    title: '2. Information We Collect',
    content: [
      'We may collect the following categories of information:',
      [
        'Full name',
        'Username',
        'Phone number',
        'Email address',
        'Date of birth',
        'Profile photo',
        'Password or authentication credentials',
        'Residential or billing address',
        'Government-issued ID where required',
        'BVN, NIN, or equivalent identifiers where lawful',
        'Customer support messages and requests',
      ],
    ],
  },

  {
    title: '3. How We Collect Information',
    content: [
      'We collect information when you:',
      [
        'Register or update an account',
        'Use wallet or payment features',
        'Use chat or social features',
        'Upload contacts, photos, or status updates',
        'Contact customer support',
        'Participate in promotions or surveys',
        'Enable permissions such as location or contacts',
        'Interact with our website or notifications',
      ],
      'We may also receive information from trusted partners and service providers.',
    ],
  },

  {
    title: '4. How We Use Your Information',
    content: [
      'We may use your information to:',
      [
        'Create and manage accounts',
        'Verify identity and KYC status',
        'Process transfers and payments',
        'Deliver chat and social features',
        'Help users connect with contacts',
        'Detect fraud and suspicious activity',
        'Improve reliability and performance',
        'Send OTPs, alerts, receipts, and updates',
        'Respond to support requests',
        'Comply with legal obligations',
      ],
    ],
  },

  {
    title: '5. End-to-End Encryption',
    content: [
      'Supported messaging features may use end-to-end encryption based on the Signal Protocol or compatible cryptographic implementations.',
      [
        'Messages are encrypted on the sender’s device',
        'Only intended recipients can decrypt content',
        'Blingg cannot ordinarily read encrypted messages in transit',
        'Encryption keys remain under user/device control',
      ],
      'Important limitations may apply to backups, metadata, abuse reports, group management data, or compromised devices.',
    ],
  },

  {
    title: '6. How We Share Information',
    content: [
      'We may share information with service providers, financial partners, regulators, and lawful authorities where required.',
      [
        'Cloud hosting providers',
        'Identity verification systems',
        'Payment processors',
        'Analytics providers',
        'Security monitoring tools',
        'Customer support systems',
      ],
      'We do not sell personal data in violation of applicable law.',
    ],
  },

  {
    title: '7. Contacts Permission',
    content: [
      'If you grant contact access:',
      [
        'We may help you find friends already using Blingg',
        'Improve invitations and community discovery',
        'Reduce duplicate accounts and fraud',
      ],
      'You may revoke permission in your device settings.',
    ],
  },

  {
    title: '8. Location Permission',
    content: [
      'If enabled, location may be used for:',
      [
        'Nearby/community discovery features',
        'Fraud prevention',
        'Security checks',
        'Regional optimization',
      ],
      'You may disable permission in your device settings.',
    ],
  },

  {
    title: '9. Cookies & Similar Technologies',
    content: [
      'For web services, we may use cookies and similar technologies for:',
      ['Authentication', 'Security', 'Preferences', 'Analytics', 'Performance'],
    ],
  },

  {
    title: '10. Data Retention',
    content: [
      'We retain information only for as long as reasonably necessary for:',
      [
        'Providing services',
        'Maintaining security',
        'Resolving disputes',
        'Regulatory compliance',
        'Fraud investigations',
      ],
    ],
  },

  {
    title: '11. Data Security',
    content: [
      'We use reasonable technical and organizational safeguards including:',
      [
        'Encryption in transit',
        'Access controls',
        'Role-based permissions',
        'Monitoring systems',
        'Secure development practices',
        'Incident response procedures',
      ],
      'No system is completely secure.',
    ],
  },

  {
    title: '12. Your Rights',
    content: [
      'Subject to applicable law, you may request to:',
      [
        'Access your information',
        'Correct inaccurate data',
        'Delete eligible data',
        'Withdraw consent where applicable',
        'Request portability where applicable',
      ],
    ],
  },

  {
    title: '13. Account Deletion',
    content: [
      'You may request deletion through in-app tools or support where available.',
      'We may retain necessary information for legal obligations, fraud prevention, financial compliance, and dispute resolution.',
    ],
  },

  {
    title: '14. Children',
    content: [
      'Blingg is not intended for persons below the minimum legal age required to use the Services.',
      'We may suspend accounts reasonably believed to belong to underage users.',
    ],
  },

  {
    title: '15. International Data Transfers',
    content: [
      'Your information may be processed in countries where our providers operate.',
      'Where required, we use appropriate safeguards for lawful transfers.',
    ],
  },

  {
    title: '16. Marketing Communications',
    content: [
      'We may send product news, campaigns, or offers where permitted by law.',
      'You may opt out of promotional messages while still receiving service notices.',
    ],
  },

  {
    title: '17. Third-Party Services',
    content: [
      'Blingg may integrate with third-party services or external platforms.',
      'We are not responsible for their privacy practices.',
    ],
  },

  {
    title: '18. Incident Response',
    content: [
      'If we become aware of a data incident requiring notification under applicable law, we will take steps consistent with legal obligations and security considerations.',
    ],
  },

  {
    title: '19. Nigeria Data Protection Compliance',
    content: [
      'Where applicable, we aim to comply with relevant Nigerian privacy and data protection laws, including obligations under the Nigeria Data Protection Act.',
    ],
  },

  {
    title: '20. Changes to This Policy',
    content: [
      'We may update this Privacy Policy periodically.',
      'Material changes may be communicated through the app, website, email, or other reasonable methods.',
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0b1220] text-white px-4 py-8 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0f1b2d] to-[#0b1220] p-6 sm:p-10 lg:p-14">
          <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"></div>

          <div className="relative z-10 max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Privacy & Data Protection
            </div>

            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Privacy
              <span className="text-emerald-400"> Policy</span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
              This Privacy Policy explains how Blingg collects, uses, stores,
              shares, and protects personal information across our messaging,
              payment, and community services.
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
        </section>

        {/* Intro */}
        <section className="mt-8 rounded-[32px] border border-white/10 bg-[#111827] p-6 sm:p-8">
          <p className="text-sm leading-8 text-white/70 sm:text-base">
            By accessing or using Blingg, you acknowledge that you have read and
            understood this Privacy Policy and how we process your information
            across our platform and services.
          </p>
        </section>

        {/* Main Content */}
        <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-12">
          {/* Sidebar */}
          <div className="xl:col-span-3">
            <div className="rounded-[32px] border border-white/10 bg-[#111827] p-6 xl:sticky xl:top-6">
              <h3 className="mb-6 text-lg font-semibold">Table of Contents</h3>

              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
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

            {/* Contact */}
            <section className="rounded-[32px] border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 to-[#111827] p-6 sm:p-8">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="mb-5 inline-flex rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
                    Contact Us
                  </div>

                  <h2 className="text-3xl font-semibold sm:text-4xl">
                    Privacy Questions?
                  </h2>

                  <p className="mt-4 max-w-2xl leading-8 text-white/70">
                    For privacy inquiries, data requests, compliance matters, or
                    support relating to this Privacy Policy, contact our team.
                  </p>
                </div>

                <div className="min-w-full rounded-3xl border border-white/10 bg-white/5 p-6 sm:min-w-[320px] lg:min-w-[360px]">
                  <div className="space-y-5">
                    <div>
                      <p className="text-sm text-white/50">Company</p>

                      <p className="mt-1 font-medium">
                        Zeta Technology Limited
                      </p>
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

                    <div>
                      <p className="text-sm text-white/50">Address</p>

                      <p className="mt-1 font-medium">
                        14 Diamond Hill Calabar
                      </p>
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
                    understood, and accepted this Privacy Policy.
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
