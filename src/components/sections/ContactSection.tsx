import { contact } from "../../data/site";
import { Section } from "../layout/Section";
import { ButtonLink } from "../ui/ButtonLink";
import { SectionTitle } from "../ui/SectionTitle";

export function ContactSection() {
  return (
    <Section id="contact">
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.03] p-8 sm:p-10">
        <SectionTitle
          eyebrow="Contact"
          title="Need a freelance editor for UGC and paid social?"
          description="The fastest path is simple: watch the work, send a message, and let’s talk about your agency workflow."
        />

        <div className="flex flex-col gap-4 sm:flex-row">
          <ButtonLink href={`mailto:${contact.email}`}>Email me</ButtonLink>
          <ButtonLink href={contact.instagramUrl} target="_blank" rel="noreferrer" variant="secondary">
            DM on Instagram
          </ButtonLink>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-xs font-semibold tracking-[0.18em] text-white/45 uppercase">Email</p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-2 block text-lg font-medium text-white transition hover:text-white/80"
            >
              {contact.email}
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-xs font-semibold tracking-[0.18em] text-white/45 uppercase">Instagram</p>
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 block text-lg font-medium text-white transition hover:text-white/80"
            >
              @loanlvn
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}