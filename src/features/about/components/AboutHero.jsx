import { aboutPillars } from '../data/about.data'

export default function AboutHero({ onGetStarted }) {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0f1b2d] to-[#0b1220] p-6 sm:p-10 lg:p-14">
      {/* Glow */}
      <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        {/* Left content */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            About Blingg
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Built for
            <span className="text-emerald-400"> African Communities</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            Blingg is a community-driven SocialTech platform built for how
            Africans truly connect, support one another, and grow together.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={onGetStarted}
              className="rounded-full bg-white px-6 py-3 font-medium text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              Get Started
            </button>

            <a
              href="#our-story"
              className="rounded-full border border-white/20 px-6 py-3 transition-all duration-300 hover:border-emerald-400 hover:text-emerald-400"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right card */}
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-sm">
          <div className="space-y-6">
            {aboutPillars.map((pillar) => (
              <div
                key={pillar.id}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#101827] p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-2xl">
                  {pillar.icon}
                </div>

                <div>
                  <h3 className="text-lg font-semibold">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/60">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
