import { Analytics } from "@vercel/analytics/react";
import { lazy, Suspense, useState } from "react";
import { Header } from "./components/layout/Header";
import { AboutSection } from "./components/sections/AboutSection";
import { ContactSection } from "./components/sections/ContactSection";
import { Footer } from "./components/sections/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { PortfolioSection } from "./components/sections/PortfolioSection";
import type { PortfolioVideo } from "./types";

const VideoModal = lazy(() => import("./components/ui/VideoModal"));

export default function App() {
  const [selectedVideo, setSelectedVideo] = useState<PortfolioVideo | null>(null);

  return (
    <div className="min-h-screen bg-[#07070a] text-white">
      <Header />

      <main>
        <HeroSection />
        <PortfolioSection onOpenVideo={setSelectedVideo} />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />

      <Suspense fallback={null}>
        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      </Suspense>

      <Analytics />
    </div>
  );
}