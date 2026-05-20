import React from 'react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0b1220] text-white px-4 py-8 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0f1b2d] to-[#0b1220] p-6 sm:p-10 lg:p-14">
          {/* Glow */}
          <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"></div>

          <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Content */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
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
                <button className="rounded-full bg-white px-6 py-3 font-medium text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  Get Started
                </button>

                <button className="rounded-full border border-white/20 px-6 py-3 transition-all duration-300 hover:border-emerald-400 hover:text-emerald-400">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Card */}
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#101827] p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-2xl">
                    💬
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Secure Messaging</h3>

                    <p className="mt-2 text-sm leading-7 text-white/60">
                      Chat securely with individuals, families, and communities
                      in one trusted platform.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#101827] p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-2xl">
                    🤝
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">
                      Group Contributions
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-white/60">
                      Manage collective savings, projects, and support systems
                      transparently.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#101827] p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-2xl">
                    💸
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">
                      Seamless Transfers
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-white/60">
                      Send and receive money instantly within a simple and
                      reliable ecosystem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Story Section */}
        <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left Large Card */}
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
                <p>
                  Across Africa, communities thrive on cooperation — from family
                  support systems to savings groups and collective projects.
                </p>

                <p>
                  Blingg digitizes these familiar structures, making it easier
                  for people to communicate, contribute, manage funds
                  transparently, and stay connected in one unified platform.
                </p>

                <p>
                  Our platform enables users to chat securely, create personal
                  and general groups, manage contributions openly, send and
                  receive money seamlessly, and build stronger communities
                  through technology that feels familiar, accessible, and
                  reliable.
                </p>

                <p>
                  At Blingg, we believe technology should strengthen
                  communities, not replace them. That is why we are building
                  digital infrastructure designed around trust, simplicity,
                  collaboration, and everyday human connection.
                </p>
              </div>
            </div>
          </div>

          {/* Right Stats */}
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
              <div className="text-emerald-400 text-sm font-medium">
                Mission
              </div>

              <h3 className="mt-4 text-3xl font-semibold leading-tight">
                Connect.
                <br />
                Contribute.
                <br />
                Grow Together.
              </h3>

              <div className="mt-6 h-[1px] w-full bg-white/10"></div>

              <p className="mt-6 text-sm leading-7 text-white/60">
                Building digital infrastructure for African communities through
                communication and financial collaboration.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mt-8 rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0f1b2d] to-[#111827] p-6 sm:p-10">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm">
              Core Values
            </div>

            <h2 className="text-3xl font-semibold sm:text-4xl">
              What Drives Blingg
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl">🔒</div>

              <h3 className="mt-5 text-xl font-semibold">Trust</h3>

              <p className="mt-4 text-sm leading-7 text-white/60">
                Secure systems and transparent contribution management built for
                confidence.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl">🌍</div>

              <h3 className="mt-5 text-xl font-semibold">Community</h3>

              <p className="mt-4 text-sm leading-7 text-white/60">
                Technology designed around collective growth and everyday
                relationships.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl">⚡</div>

              <h3 className="mt-5 text-xl font-semibold">Simplicity</h3>

              <p className="mt-4 text-sm leading-7 text-white/60">
                Easy-to-use experiences that feel natural and familiar to
                everyone.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl">📈</div>

              <h3 className="mt-5 text-xl font-semibold">Growth</h3>

              <p className="mt-4 text-sm leading-7 text-white/60">
                Empowering individuals and groups to build stronger futures
                together.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className="mt-8 mb-10 overflow-hidden rounded-[32px] border border-emerald-400/20 bg-gradient-to-r from-emerald-500/10 to-[#111827] p-6 sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
                Join Blingg
              </div>

              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                The Future of Community
                <span className="text-emerald-400"> Collaboration</span>
              </h2>

              <p className="mt-5 leading-8 text-white/70">
                Experience messaging, contributions, and money transfers built
                specifically for how communities connect and grow together.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-white px-6 py-3 font-medium text-black transition-all duration-300 hover:scale-[1.02]">
                Download App
              </button>

              <button className="rounded-full border border-white/20 px-6 py-3 transition-all duration-300 hover:border-emerald-400 hover:text-emerald-400">
                Contact Us
              </button>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  )
}
