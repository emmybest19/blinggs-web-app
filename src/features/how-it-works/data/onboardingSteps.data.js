import { Download, Send, UserPlus } from 'lucide-react'

/** The three "Start in Minutes" onboarding steps. */
export const onboardingSteps = [
  {
    id: 'download',
    stepNumber: '01',
    title: 'Download App',
    description:
      'Get Blingg instantly from iOS App Store or Google Play Store.',
    icon: Download,
    badge: 'Free Download',
  },
  {
    id: 'sign-up',
    stepNumber: '02',
    title: 'Quick Sign Up',
    description:
      'Create your account in under 2 minutes with zero paper paperwork.',
    icon: UserPlus,
    badge: 'Instant KYC',
  },
  {
    id: 'transact',
    stepNumber: '03',
    title: 'Chat & Transact',
    description: 'Start messaging friends and sending money seamlessly.',
    icon: Send,
    badge: 'Instant Transfer',
  },
]
