export default function LegalContactCard({ eyebrow, title, description, details }) {
  return (
    <section className="rounded-[32px] border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 to-[#111827] p-6 sm:p-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
            {eyebrow}
          </div>

          <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>

          <p className="mt-4 leading-8 text-white/70">{description}</p>
        </div>

        <div className="min-w-full rounded-3xl border border-white/10 bg-white/5 p-6 sm:min-w-[320px] lg:min-w-[360px]">
          <div className="space-y-5">
            {details.map((detail) => (
              <div key={detail.label}>
                <p className="text-sm text-white/50">{detail.label}</p>

                {detail.href ? (
                  <a
                    href={detail.href}
                    className="mt-1 block text-emerald-400 hover:underline"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="mt-1 font-medium">{detail.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
