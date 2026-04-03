import { aboutParagraphs } from "../../data/site";
import { Section } from "../layout/Section";
import { SectionTitle } from "../ui/SectionTitle";
import { Tag } from "../ui/Tag";

export function AboutSection() {
  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <SectionTitle
            eyebrow="About"
            title="A creator mindset applied to editing."
            description="That background matters more than most editors admit."
          />
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <div className="mb-6 flex flex-wrap gap-2">
            <Tag>Former content creator</Tag>
            <Tag>Retention-focused</Tag>
            <Tag>Agency-ready</Tag>
          </div>

          <div className="space-y-4 text-white/70">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-7">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}