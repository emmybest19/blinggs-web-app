/**
 * Help centre questions, grouped by category.
 *
 * The design shows one open item per group, so only three answers were given.
 * The remaining five are written from Blingg's own Terms of Service and Privacy
 * Policy rather than invented — each carries a `source` naming the clause it
 * came from. Where I had to go beyond what those documents actually say,
 * `needsReview: true` marks it so the copy can be confirmed before launch.
 */
export const faqGroups = [
  {
    id: 'account-security',
    title: 'Account & Security',
    items: [
      {
        id: 'licensed-financial-institution',
        question: 'Is Blingg a licensed financial institution?',
        answer:
          'Blingg operates as a secure financial technology platform in partnership with fully regulated CBN-licensed banks. All deposit facilities and bank rails are custody-protected under our partner bank structures, matching security requirements across top-tier West African processors.',
      },
      {
        id: 'financial-data-security',
        question: 'How is my financial data kept secure?',
        // Source: Privacy Policy §17 (Data Security) and §18 (Administrative Access).
        source: 'Privacy Policy §17, §18',
        answer:
          'Financial data is protected with encryption in transit, encryption at rest where appropriate, role-based access controls and multi-factor authentication on privileged administrative access. Access to sensitive information is logged and monitored, and administrative actions are recorded in our audit trail.',
      },
      {
        id: 'lost-private-keys',
        question: 'What happens if I lose access to my private keys?',
        // Source: Terms §22 (User Security Responsibilities), §28 (Suspension).
        source: 'Terms §22, §28',
        needsReview: true,
        answer:
          'Contact Blingg support immediately through the official channels in the app. We can restrict the account while we verify your identity and help you re-secure access. Remember that Blingg will never ask you to disclose your password, PIN or OTP through an unofficial channel.',
      },
    ],
  },
  {
    id: 'payments-transfers',
    title: 'Payments & Transfers',
    items: [
      {
        id: 'conversion-speed',
        question: 'How fast are conversion payments processed?',
        answer:
          'Naira bank rails and local transfers process in real-time, completing natively inside our messaging engine within seconds of trade confirmation.',
      },
      {
        id: 'daily-limits',
        question: 'What are the maximum daily transaction limits?',
        // Source: Terms §2 (Eligibility), §4 (KYC), §8 (Wallet) — the documents
        // describe tiered limits but publish no figures.
        source: 'Terms §2, §4, §8',
        needsReview: true,
        answer:
          'Limits depend on your verification tier. Completing a higher KYC tier raises your transfer and withdrawal ceilings, and certain features stay restricted until the required verification is complete. Your current limits are shown in the app before you confirm a transaction.',
      },
      {
        id: 'zero-fee-transfers',
        question: 'Are there zero-fee transfer options?',
        // Source: Terms §9 (Fees and Charges). Note the tension flagged below.
        source: 'Terms §9',
        needsReview: true,
        answer:
          'Peer-to-peer transfers between Blingg accounts carry no transfer fee. Charges may apply to bank withdrawals, currency conversion and some group disbursements, and any applicable fee is displayed before the transaction is completed.',
      },
    ],
  },
  {
    id: 'groups-contributions',
    title: 'Groups & Contributions',
    items: [
      {
        id: 'target-wallets',
        question: 'How do group contribution target wallets function?',
        answer:
          'Target wallets utilize shared automated consensus. Group partners specify contribution amounts, and smart contracts release funds strictly upon meeting pre-approved collective goals.',
      },
      {
        id: 'individual-withdrawal',
        question: 'Can partners withdraw resources individually?',
        // Source: Terms §11 (Group Contributions) — Personal vs General Groups.
        source: 'Terms §11',
        answer:
          "It depends on the group type. In Personal Groups the designated administrator manages funds according to the group's rules. In General Groups a withdrawal only proceeds once the required share of members — 60% under the current system — has approved it and all applicable security and payment checks have passed.",
      },
    ],
  },
]

/** Flattened count, used by the search empty state. */
export const totalQuestions = faqGroups.reduce(
  (count, group) => count + group.items.length,
  0
)
