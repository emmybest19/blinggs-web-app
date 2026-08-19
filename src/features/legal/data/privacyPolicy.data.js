import { company, contact } from '@shared/config/site.config'

export const privacySections = [
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

export const privacyPolicyDocument = {
  id: 'privacy-policy',
  hero: {
    eyebrow: 'Privacy & Data Protection',
    titleLead: 'Privacy',
    titleAccent: 'Policy',
    intro:
      'This Privacy Policy explains how Blingg collects, uses, stores, shares, and protects personal information across our messaging, payment, and community services.',
    meta: [
      { label: 'Effective Date', value: '28/04/2026' },
      { label: 'Last Updated', value: '28/04/2026' },
    ],
  },
  preamble:
    'By accessing or using Blingg, you acknowledge that you have read and understood this Privacy Policy and how we process your information across our platform and services.',
  tocTitle: 'Table of Contents',
  sections: privacySections,
  contact: {
    eyebrow: 'Contact Us',
    title: 'Privacy Questions?',
    description:
      'For privacy inquiries, data requests, compliance matters, or support relating to this Privacy Policy, contact our team.',
    details: [
      { label: 'Company', value: company.legalName },
      {
        label: 'Email',
        value: contact.generalEmail,
        href: `mailto:${contact.generalEmail}`,
      },
      { label: 'Address', value: '14 Diamond Hill Calabar' },
    ],
  },
  acknowledgement: {
    icon: '✓',
    title: 'Acknowledgement',
    body: 'By using Blingg, you acknowledge that you have read, understood, and accepted this Privacy Policy.',
  },
}
