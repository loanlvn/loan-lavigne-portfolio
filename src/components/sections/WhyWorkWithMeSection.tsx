import { reasons } from "../../data/site";
import { Section } from "../layout/Section";
import { SectionTitle } from "../ui/SectionTitle";

export function WhyWorkWithMeSection() {
  return (
    <Section id="why-me">
      <SectionTitle
        eyebrow="Why work with me"
        title="Not just editing. Better creative instinct."
        description="A lot of editors can cut. Fewer understand why a short-form video gets watched."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {reasons.map((reason) => (
          <div
            key={reason.title}
            className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6"
          >
            <h3 className="text-lg font-semibold text-white">{reason.title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/65">{reason.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}