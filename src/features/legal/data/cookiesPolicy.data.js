import { company, contact } from '@shared/config/site.config'

export const cookieSections = [
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

export const cookiesPolicyDocument = {
  id: 'cookies-policy',
  hero: {
    eyebrow: 'Website Cookies & Tracking',
    titleLead: 'Cookies',
    titleAccent: 'Policy',
    intro:
      'Learn how Blingg uses cookies and similar technologies to improve security, performance, authentication, and your overall experience across our platform.',
    meta: [
      { label: 'Last Updated', value: 'May 2026' },
      { label: 'Policy Type', value: 'Cookies & Tracking' },
    ],
  },
  preamble:
    'Welcome to Blingg (“Blingg”, “we”, “our”, or “us”). This Cookies Policy explains how we use cookies and similar technologies when you use our website, mobile application, and related services.',
  tocTitle: 'Quick Navigation',
  sections: cookieSections,
  contact: {
    eyebrow: 'Contact Us',
    title: 'Questions About Cookies?',
    description:
      'If you have questions about this Cookies Policy or how Blingg uses cookies and similar technologies, please contact our support team.',
    details: [
      {
        label: 'Support Email',
        value: contact.supportEmail,
        href: `mailto:${contact.supportEmail}`,
      },
      { label: 'Platform', value: company.productName },
      { label: 'Mission', value: company.tagline },
    ],
  },
  acknowledgement: {
    icon: '🍪',
    title: 'Your Privacy Matters',
    body: 'Blingg uses cookies responsibly to improve security, platform performance, and your overall user experience while respecting your privacy and preferences.',
  },
}
