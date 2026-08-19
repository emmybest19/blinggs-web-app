import { aboutValues } from '../data/about.data'

export default function AboutValues() {
  return (
    <section className="mt-8 mb-10 rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0f1b2d] to-[#111827] p-6 sm:p-10">
      <div className="max-w-3xl">
        <div className="mb-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm">
          Core Values
        </div>

        <h2 className="text-3xl font-semibold sm:text-4xl">
          What Drives Blingg
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {aboutValues.map((value) => (
          <div
            key={value.id}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div className="text-3xl">{value.icon}</div>

            <h3 className="mt-5 text-xl font-semibold">{value.title}</h3>

            <p className="mt-4 text-sm leading-7 text-white/60">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
