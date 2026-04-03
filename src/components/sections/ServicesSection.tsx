import { services } from "../../data/site";
import { Section } from "../layout/Section";
import { SectionTitle } from "../ui/SectionTitle";

export function ServicesSection() {
  return (
    <Section id="services">
      <SectionTitle
        eyebrow="Services"
        title="Simple offer. Clear value."
        description="Built for agencies and brands that need sharp short-form creative without bloated process."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.05]"
          >
            <h3 className="text-lg font-semibold text-white">{service.title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/65">{service.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}