import { useEffect } from "react";
import type { PortfolioVideo } from "../../types";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";

type VideoModalProps = {
  video: PortfolioVideo | null;
  onClose: () => void;
};

export default function VideoModal({ video, onClose }: VideoModalProps) {
  useLockBodyScroll(Boolean(video));

  useEffect(() => {
    if (!video) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label={`${video.title} video modal`}
    >
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#0c0c0f] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-sm text-white/80 transition hover:bg-black/70 hover:text-white"
          aria-label="Close video modal"
        >
          Close
        </button>

        <div className="aspect-video w-full bg-black">
          {video.embedUrl ? (
            <iframe
              src={video.embedUrl}
              title={video.title}
              className="h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-white/60">
              Missing video source
            </div>
          )}
        </div>

        <div className="border-t border-white/10 p-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-white/45 uppercase">
            {video.category}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">{video.title}</h3>
          <p className="mt-3 max-w-3xl text-white/65">{video.description}</p>
        </div>
      </div>
    </div>
  );
}