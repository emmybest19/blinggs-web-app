import { ArrowRightLeft, PiggyBank, Receipt, ShieldCheck } from 'lucide-react'

import EscrowPreview from '../components/previews/EscrowPreview'
import InstantTransferPreview from '../components/previews/InstantTransferPreview'
import SavingsPoolPreview from '../components/previews/SavingsPoolPreview'
import SplitBillPreview from '../components/previews/SplitBillPreview'

/**
 * "What can you do with Blingg" cards. Each entry pairs copy with the small
 * mock UI that illustrates it, so adding a capability never means editing the
 * grid component.
 */
export const capabilities = [
  {
    id: 'split-bills',
    title: 'Split Bills Seamlessly',
    description:
      'Out for dinner or sharing rent? Pay the bill upfront and request instant split payments directly inside your group chat.',
    icon: Receipt,
    iconClassName: 'text-indigo-400',
    Preview: SplitBillPreview,
  },
  {
    id: 'save-together',
    title: 'Save & Pool Funds',
    description:
      'Create a shared community pool or cooperative wallet. Track contributions transparently with multi-sig approval safeguards.',
    icon: PiggyBank,
    iconClassName: 'text-[#00D4AA]',
    Preview: SavingsPoolPreview,
  },
  {
    id: 'instant-send',
    title: 'Zero-Fee Transfers',
    description:
      'Send and receive money instantly to any Blingg user or external bank account with zero hidden fees.',
    icon: ArrowRightLeft,
    iconClassName: 'text-sky-400',
    Preview: InstantTransferPreview,
  },
  {
    id: 'safe-escrow',
    title: 'Protected Payments',
    description:
      'Every group transaction and individual payout is guarded by strict bank-grade encryption and automated anti-fraud checks.',
    icon: ShieldCheck,
    iconClassName: 'text-amber-400',
    Preview: EscrowPreview,
  },
]
