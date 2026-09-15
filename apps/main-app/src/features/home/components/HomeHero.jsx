import Hero from '@shared/ui/Hero'

export default function HomeHero() {
  return (
    <Hero
      badge="NOW IN PRIVATE BETA"
      title="Message. Pay."
      accentTitle="Grow Together."
      subtitle="The all-in-one super app that combines secure messaging with powerful financial tools. Send money, manage group savings, and trade crypto — seamlessly."
      actions={[
        { to: '/waitlist', label: 'Join Waitlist' },
        { to: '/affiliate', label: 'Our Affiliate Program', variant: 'outline' },
      ]}
    />
  )
}
