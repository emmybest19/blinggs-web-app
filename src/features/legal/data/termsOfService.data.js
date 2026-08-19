import { company, contact } from '@shared/config/site.config'

export const termsSections = [
  {
    title: "1. Eligibility",
    content: [
      "To use Blingg, you must:",
      [
        "Be legally capable of entering a binding agreement.",
        "Be at least 18 years old, or the age of majority under applicable law.",
        "Provide accurate and complete registration information.",
        "Use the Services only where legally permitted.",
      ],
      "We may request identity verification at any time.",
    ],
  },
  {
    title: "2. Account Registration",
    content: [
      "You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account.",
      "You agree to:",
      [
        "Provide accurate, current, and complete information.",
        "Update your information when necessary.",
        "Maintain the security of your device and login credentials.",
        "Notify us immediately of unauthorized use.",
      ],
      "We may suspend or terminate accounts that contain false information or present security, fraud, or compliance risks.",
    ],
  },
  {
    title: "3. Description of Services",
    content: [
      "Blingg may provide services including, where available:",
      [
        "Messaging and communication tools",
        "Wallet and payment-related features",
        "Transfers between users",
        "Bank transfer integrations",
        "Group contribution features",
        "Community and social features",
        "Notifications and updates",
        "Other services introduced from time to time",
      ],
      "Some services may be offered through regulated third-party partners.",
      "Availability may vary by region, eligibility, verification status, and legal requirements.",
    ],
  },
  {
    title: "4. Financial Services Disclaimer",
    content: [
      "Blingg is a technology platform. Certain payment, banking, verification, or transfer functions may be provided by licensed third-party partners.",
      "We do not guarantee uninterrupted availability of partner services.",
      "You authorize us to transmit required data to our partners for service delivery, fraud prevention, and compliance purposes.",
    ],
  },
  {
    title: "5. User Obligations",
    content: [
      "You agree not to:",
      [
        "Use Blingg for unlawful, fraudulent, deceptive, or abusive purposes.",
        "Impersonate any person or entity.",
        "Violate sanctions, AML, anti-fraud, or financial crime laws.",
        "Upload malware, malicious code, or harmful content.",
        "Interfere with platform operations.",
        "Harvest user data without consent.",
        "Use automated bots without authorization.",
        "Infringe intellectual property rights.",
        "Circumvent fees, limits, or security controls.",
      ],
    ],
  },
  {
    title: "6. Payments, Transfers & Fees",
    content: [
      "Where applicable:",
      [
        "Fees may apply to certain transactions or premium features.",
        "Applicable fees will be disclosed in-app, on our website, or before transaction confirmation.",
        "Transactions may be subject to verification, limits, delays, reversals, or compliance review.",
        "We may decline, delay, suspend, or reverse transactions where required by law, partner rules, fraud prevention, technical issues, or risk management.",
        "Completed transactions may be irreversible except where required by law or operational error correction.",
      ],
    ],
  },
];

export const termsOfServiceDocument = {
  id: 'terms-of-service',
  hero: {
    eyebrow: 'Legal & Compliance',
    titleLead: 'Terms of',
    titleAccent: 'Service',
    intro:
      'These Terms govern your access to and use of the Blingg platform, including our applications, products, financial features, and related services.',
    meta: [
      { label: 'Effective Date', value: '28/04/2026' },
      { label: 'Last Updated', value: '28/04/2026' },
    ],
  },
  tocTitle: 'Table of Contents',
  sections: termsSections,
  contact: {
    eyebrow: 'Contact Information',
    title: 'Need Help?',
    description:
      'For legal inquiries, compliance matters, or questions regarding these Terms of Service, please contact us.',
    details: [
      { label: 'Company', value: company.legalName },
      { label: 'RC Number', value: company.rcNumber },
      {
        label: 'Email',
        value: contact.generalEmail,
        href: `mailto:${contact.generalEmail}`,
      },
    ],
  },
  acknowledgement: {
    icon: '✓',
    title: 'Acknowledgement',
    body: 'By using Blingg, you acknowledge that you have read, understood, and agreed to these Terms of Service.',
  },
}
