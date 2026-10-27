export const SITE = {
  name: 'Joseph A. Simon',
  title: 'Law Offices of Joseph A. Simon, PLLC | Ann Arbor Criminal Defense',
  description: 'For 40+ years, Ann Arbor attorney Joseph A. Simon has defended clients throughout Southeast Michigan against OWI, drug, assault, domestic violence, and criminal sexual conduct charges. Confidential consultation, available 24/7.',
  lang: 'en',
  url:
    (typeof process !== 'undefined' && process.env.SITE_URL) ||
    'https://example.com',
  twitterHandle: '',
  socials: {
    linkedin: 'https://www.linkedin.com/in/joseph-simon-64812448',
  },
} as const;

export type SiteConfig = typeof SITE;
