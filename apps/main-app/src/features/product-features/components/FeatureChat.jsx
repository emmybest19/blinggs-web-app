import chatFeatureImg from '@shared/assets/chat-conversation.png'
import FeatureSplit from './FeatureSplit'

export default function FeatureChat() {
  return (
    <FeatureSplit
      badge="MESSAGING"
      title="Chat & Pay"
      body="Messaging and commerce blended into one smooth flow. Request money and send receipts natively within the conversation."
      bullets={[
        'End-to-end encrypted messages',
        'Send money mid-conversation',
        'Voice notes, images & payments in one thread',
      ]}
      image={chatFeatureImg}
      imageAlt="chat_and_pay"
      imageSide="left"
    />
  )
}
