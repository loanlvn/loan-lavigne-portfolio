import { ButtonLink } from "../ui/ButtonLink";
import { Section } from "../layout/Section";
import { Tag } from "../ui/Tag";

export function HeroSection() {
  return (
    <Section id="hero" className="relative overflow-hidden pt-16 sm:pt-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="mb-6 flex flex-wrap gap-2">
            <Tag>UGC Editing</Tag>
            <Tag>Paid Ads</Tag>
            <Tag>Short-form</Tag>
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Premium UGC video editing for ads and social media that gets
            watched.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
            I’m Loan Lavigne, a French former content creator turned video
            editor. I edit fast, native, performance-driven short-form videos
            for brands and agencies that need stronger hooks, cleaner pacing,
            and better retention.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#portfolio">Watch my work</ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Let’s work together
            </ButtonLink>
          </div>
        </div>

        <div className="relative">
          <div className="mb-6 flex items-center gap-5 rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <img
              src="/profile/loan.jpg"
              alt="Loan Lavigne"
              className="h-24 w-24 rounded-[1.25rem] border border-white/10 object-cover shadow-lg"
              loading="lazy"
            />
            <div>
              <p className="text-sm text-white/50">Freelance Video Editor</p>
              <p className="mt-1 text-xl font-semibold text-white">
                Loan Lavigne
              </p>
              <p className="mt-2 text-sm text-white/60">
                Former content creator turned performance-driven UGC editor
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_20px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#0f1014] p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-white/55">Editor Snapshot</p>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-300">
                  Available for agencies
                </span>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-semibold text-white">2 × 100K</p>
                  <p className="mt-1 text-sm text-white/55">
                    TikTok growth background
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-semibold text-white">17K</p>
                  <p className="mt-1 text-sm text-white/55">
                    Instagram audience
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-semibold text-white">4</p>
                  <p className="mt-1 text-sm text-white/55">
                    Featured portfolio videos
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-semibold text-white">GetPOV</p>
                  <p className="mt-1 text-sm text-white/55">
                    Current UGC agency collaboration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
