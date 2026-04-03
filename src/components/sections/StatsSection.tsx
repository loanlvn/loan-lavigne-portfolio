import { stats } from "../../data/site";
import { Section } from "../layout/Section";

export function StatsSection() {
  return (
    <Section className="pt-8 sm:pt-12">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div
            key={`${item.label}-${item.value}`}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
          >
            <p className="text-2xl font-semibold text-white">{item.value}</p>
            <p className="mt-2 text-sm text-white/65">{item.label}</p>
            {item.note ? <p className="mt-2 text-xs text-white/40">{item.note}</p> : null}
          </div>
        ))}
      </div>
    </Section>
  );
}