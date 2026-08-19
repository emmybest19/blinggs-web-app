/** Grouped question/answer content for the FAQ page. */
export const faqGroups = [
  {
    id: 'account-security',
    section: 'Account & Security',
    items: [
      {
        q: 'Is Blingg safe to use?',
        a: 'Yes. Blingg uses bank-grade encryption, biometric authentication, and is fully compliant with financial regulations.',
      },
      {
        q: 'How do I verify my identity?',
        a: 'You can verify your identity by uploading a valid government-issued ID and completing biometric verification within the app.',
      },
    ],
  },
  {
    id: 'payments-transfers',
    section: 'Payments & Transfers',
    items: [
      {
        q: 'How long do transfers take?',
        a: 'Transfers to other Blingg users are instant. Bank transfers usually reflect within minutes, depending on the receiving bank.',
      },
      {
        q: 'Are there any fees?',
        a: 'Most transfers are free. Certain premium features or special transfers may attract small processing fees.',
      },
    ],
  },
  {
    id: 'groups-contributions',
    section: 'Groups & Contributions',
    items: [
      {
        q: 'What is the difference between Personal and Public groups?',
        a: 'Personal groups are managed by a single admin. Public groups require approval from 60% of group members for withdrawals, making them safer for larger communities.',
      },
      {
        q: 'Can I leave a group contribution?',
        a: 'Yes. You can exit a group at any time, subject to the group rules and contribution cycle.',
      },
    ],
  },
]
