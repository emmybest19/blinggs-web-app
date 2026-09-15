import featurePay from '@shared/assets/payments-main-img.png'
import FeatureSplit from './FeatureSplit'

export default function FeaturePayments() {
  return (
    <FeatureSplit
      badge="PAYMENTS"
      title="Smart Payments"
      body="Enjoy rapid transfers, direct debit mandates, and contactless utilities. Instant confirmation guarantees absolute peace of mind."
      bullets={[
        'Zero transfer fees',
        'All Nigerian banks supported',
        '256-bit encryption standards',
      ]}
      image={featurePay}
      imageAlt="smart_payments"
      imageSide="right"
      dark={false}
    />
  )
}
