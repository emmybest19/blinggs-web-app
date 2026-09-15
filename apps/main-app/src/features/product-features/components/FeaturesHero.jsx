import Hero from '@shared/ui/Hero'

export default function FeaturesHero() {
  return (
    <Hero
      badge="FEATURES"
      title="Everything you need."
      accentTitle="Nothing you don't."
      subtitle="Experience a financial app built for modern life. Fully encrypted secure chat, painless payments, unified savings circles, and instantly liquid crypto accounts."
      actions={[
        { to: '/EarlyAccess', label: 'Get Early Access' },
        { to: '/watchdemo', label: 'Watch Live Demo', variant: 'outline' },
      ]}
    />
  )
}
