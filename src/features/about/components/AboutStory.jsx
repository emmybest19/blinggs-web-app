import { aboutStory } from '../data/about.data'

export default function AboutStory() {
  return (
    <section
      id="our-story"
      className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3"
    >
      {/* Left large card */}
      <div className="lg:col-span-2 rounded-[32px] border border-white/10 bg-[#111827] p-6 sm:p-10">
        <div className="max-w-4xl">
          <div className="mb-5 inline-flex rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
            Our Story
          </div>

          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Technology Built Around
            <span className="text-emerald-400"> Human Connection</span>
          </h2>

          <div className="mt-8 space-y-6 text-sm leading-8 text-white/70 sm:text-base">
            {aboutStory.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Right stats */}
      <div className="space-y-6">
        <div className="rounded-[32px] border border-white/10 bg-white text-black p-6">
          <div className="text-emerald-600 text-sm font-medium">
            Community First
          </div>

          <h3 className="mt-4 text-4xl font-bold">Trust</h3>

          <p className="mt-4 leading-7 text-black/60">
            Built around transparency, cooperation, and reliable digital
            experiences for everyday people.
          </p>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-[#111827] p-6">
          <div className="text-emerald-400 text-sm font-medium">Mission</div>

          <h3 className="mt-4 text-3xl font-semibold leading-tight">
            Connect.
            <br />
            Contribute.
            <br />
            Grow Together.
          </h3>

          <div className="mt-6 h-[1px] w-full bg-white/10" />

          <p className="mt-6 text-sm leading-7 text-white/60">
            Building digital infrastructure for African communities through
            communication and financial collaboration.
          </p>
        </div>
      </div>
    </section>
  )
}
