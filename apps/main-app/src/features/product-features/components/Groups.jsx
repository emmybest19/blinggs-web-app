import groupImg from '@shared/assets/group-img-feature.png'
import FeatureSplit from './FeatureSplit'

export default function Groups() {
  return (
    <FeatureSplit
      badge="GROUPS"
      title="Create & manage groups"
      body="Organize shared expenses with public groups anyone can join, and keep close circles private with invite-only contributions."
      bullets={[
        'Public groups for community contributions',
        'Private groups for close circles',
        'Invite-only access and member management',
      ]}
      image={groupImg}
      imageAlt="chat_and_pay"
      imageSide="left"
    />
  )
}
