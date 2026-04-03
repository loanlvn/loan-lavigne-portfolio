import type {
  ContactInfo,
  NavLink,
  ReasonItem,
  ServiceItem,
  SocialLink,
  StatItem,
} from "../types";

export const navLinks: NavLink[] = [
  { label: "Work", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Me", href: "#why-me" },
  { label: "Contact", href: "#contact" },
];

export const stats: StatItem[] = [
  {
    value: "2 × 100K",
    label: "TikTok accounts grown",
    note: "@loanlvn / @loanlavigne",
  },
  {
    value: "17K",
    label: "Instagram audience built",
  },
  {
    value: "Creator → Editor",
    label: "Former content creator perspective",
  },
  {
    value: "GetPOV",
    label: "Current French UGC agency collaboration",
  },
];

export const services: ServiceItem[] = [
  {
    title: "UGC Editing",
    description:
      "Performance-driven short-form edits built for social proof, pace, and clarity.",
  },
  {
    title: "Paid Ads Editing",
    description:
      "Ad-focused structure with stronger hooks, cleaner rhythm, and conversion-minded storytelling.",
  },
  {
    title: "Hook Variations",
    description:
      "Multiple hook versions to test angles, scroll-stopping intros, and messaging approaches.",
  },
  {
    title: "Multi-format Delivery",
    description:
      "Fast exports adapted for vertical, square, and landscape placements.",
  },
  {
    title: "Short-form Editing",
    description:
      "TikTok, Reels, Shorts, and UGC assets optimized for retention and mobile consumption.",
  },
];

export const reasons: ReasonItem[] = [
  {
    title: "I understand hooks and retention",
    description:
      "I built audiences myself, so I edit with real short-form instincts instead of just applying templates.",
  },
  {
    title: "Former creator perspective",
    description:
      "I know what makes a video feel native, believable, fast, and watchable on social platforms.",
  },
  {
    title: "Performance + brand balance",
    description:
      "The goal is not just flashy editing. It is editing that performs without killing the brand feel.",
  },
  {
    title: "Agency-friendly workflow",
    description:
      "Clear communication, fast iteration, organized delivery, and adaptation to testing workflows.",
  },
];

export const socials: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com/loanlvn" },
  { label: "Email", href: "mailto:loanlavigne.pro@gmail.com" },
];

export const contact: ContactInfo = {
  email: "loanlavigne.pro@gmail.com",
  instagramUrl: "https://instagram.com/loanlvn",
};

export const aboutParagraphs = [
  "I’m Loan Lavigne, a 23-year-old French video editor specialized in UGC-style content for social media and paid ads.",
  "Before focusing on editing, I built two TikTok accounts to 100K followers each and grew an audience on Instagram. That background gave me a sharp understanding of hooks, pacing, watch time, and what actually feels native on short-form platforms.",
  "Today, I work with GetPOV, a French UGC agency, editing short-form videos designed to perform while staying clean, modern, and brand-aware.",
];