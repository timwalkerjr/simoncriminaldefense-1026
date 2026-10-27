export const SITE = {
  name: 'Law Offices of Joseph A. Simon',
  title: 'Law Offices of Joseph A. Simon | Ann Arbor Criminal Defense Attorney',
  description: 'For 40+ years, Ann Arbor attorney Joseph A. Simon has defended clients throughout Southeast Michigan against OWI, drug, assault, domestic violence, and criminal sexual conduct charges. Confidential consultation, available 24/7.',
  lang: 'en',
  url:
    (typeof process !== 'undefined' && process.env.SITE_URL) ||
    'https://ee60f2da-61a8f7e-preview.buildsites.xyz',
  phone: '(734) 887-6200',
  address: '1310 South Main Street, Suite 11, Ann Arbor, MI 48104',
  twitterHandle: '',
  socials: {
    facebook: '',
    linkedin: 'https://www.linkedin.com/in/joseph-simon-64812448',
    twitter: '',
  },
} as const;

export type SiteConfig = typeof SITE;
