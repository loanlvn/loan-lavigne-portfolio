import type { PortfolioVideo } from "../../types";
import { portfolioVideos } from "../../data/videos";
import { Section } from "../layout/Section";
import { SectionTitle } from "../ui/SectionTitle";

type PortfolioSectionProps = {
  onOpenVideo: (video: PortfolioVideo) => void;
};

export function PortfolioSection({ onOpenVideo }: PortfolioSectionProps) {
  return (
    <Section id="portfolio">
      <SectionTitle
        eyebrow="Portfolio"
        title="Work built to stop the scroll and hold attention."
        description="Four selected edits that show a mix of UGC, paid social, hook variation, and agency-ready delivery."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {portfolioVideos.map((video) => (
          <article
            key={video.id}
            className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-white/20"
          >
            <button
              onClick={() => onOpenVideo(video)}
              className="relative block w-full overflow-hidden text-left"
              aria-label={`Watch ${video.title}`}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                loading="lazy"
                className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute right-4 bottom-4 rounded-full border border-white/15 bg-black/50 px-4 py-2 text-sm text-white backdrop-blur-md">
                Watch video
              </div>
            </button>

            <div className="p-6">
              <p className="text-xs font-semibold tracking-[0.18em] text-white/45 uppercase">
                {video.category}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">{video.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/65">{video.description}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}