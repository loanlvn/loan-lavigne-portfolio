export type NavLink = {
  label: string;
  href: `#${string}`;
};

export type StatItem = {
  value: string;
  label: string;
  note?: string;
};

export type PortfolioVideo = {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  embedUrl?: string; // Vimeo / YouTube embed URL recommended
  videoUrl?: string; // optional local or hosted mp4
};

export type ServiceItem = {
  title: string;
  description: string;
};

export type ReasonItem = {
  title: string;
  description: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type ContactInfo = {
  email: string;
  instagramUrl: string;
};