export type Experience = {
  title: string
  company: string
  location: string
  period: string
  highlights: string[]
}

export type Education = {
  program: string
  institution: string
  timeline: string
  details: string
}

export type Project = {
  title: string
  focus: string
  outcomes: string[]
  year: string
}

export type SkillCategory = {
  title: string
  items: string[]
}

export const profile = {
  name: 'Pankaj D. Kakade',
  title: 'Sales & Marketing Strategist · Financial Educator',
  location: 'Kopargaon, Maharashtra, India',
  contact: {
    phone: '+91 9325685829',
    email: 'pankajkakade89@gmail.com',
    linkedin: 'https://www.linkedin.com/in/pankaj-kakade-380a55384/',
  },
  summary:
    'Motivated BBA graduate combining frontline sales success with marketing research and financial education. Passionate about designing high-touch customer journeys, simplifying investment concepts, and translating insights into measurable growth.',
  objective:
    'I love building trust with customers, elevating brands through thoughtful storytelling, and teaching financial literacy that empowers confident decision making.',
  education: [
    {
      program: 'Bachelor of Business Administration (BBA)',
      institution: 'Savitribai Phule Pune University',
      timeline: '2023 – 2024',
      details: 'SY: 78%, FY: 54.43%',
    },
    {
      program: 'H.S.C & S.S.C',
      institution: 'Savitribai Phule Pune University',
      timeline: '2018 – 2020',
      details: 'H.S.C 62%, S.S.C 44%',
    },
  ],
  experience: [
    {
      title: 'Marketing & Teaching — Stock Market Education (Part-time)',
      company: 'Pharos Fintech and Investment',
      location: 'Kopargaon, Maharashtra',
      period: 'Dec 2024 – Dec 2025',
      highlights: [
        'Led beginner workshops to demystify stock market fundamentals for first-time investors.',
        'Crafted simplified case studies that boosted learner engagement and retention.',
        'Developed modular content that lifted learner satisfaction by 30%.',
      ],
    },
    {
      title: 'Credit Card Sales Executive',
      company: 'RBL Bank · RuralShores Business Services Pvt. Ltd.',
      location: 'Kopargaon',
      period: 'Feb 2021 – Dec 2024',
      highlights: [
        'Explained complex policy details with 100% compliance and clarity.',
        'Increased approvals by 25% through refined targeting and persuasive demos.',
        'Nurtured repeat business through premium service rituals and upselling.',
      ],
    },
    {
      title: 'Sales Associate — Finance and Loans',
      company: 'Bajaj Finance',
      location: 'Kopargaon, Maharashtra',
      period: 'Jan 2020 – Oct 2021',
      highlights: [
        'Promoted personal finance products with a consultative, relationship-first approach.',
        'Exceeded monthly targets consistently and held a 90% satisfaction score.',
        'Strengthened retention with proactive follow-ups and curated offers.',
      ],
    },
  ] satisfies Experience[],
  projects: [
    {
      title: 'Brand Awareness Study: Tata Motors EV Segment',
      focus: 'Sales & Marketing Research',
      year: '2024',
      outcomes: [
        'Interviewed 100+ participants to decode EV perception and brand salience.',
        'Identified three key purchase drivers to inform targeted campaigns.',
      ],
    },
    {
      title: 'Customer Buying Behavior Study: TVS Motors',
      focus: 'Consumer Research',
      year: '2023',
      outcomes: [
        'Analyzed responses from 120+ customers to map retention triggers.',
        'Recommended communication strategies that lifted brand retention by 10–15%.',
      ],
    },
  ] satisfies Project[],
  skills: [
    {
      title: 'Sales & Marketing',
      items: ['Lead generation', 'Client acquisition', 'Negotiation', 'Promotional strategy'],
    },
    {
      title: 'Financial Education',
      items: ['Stock market training', 'Investment awareness', 'Mentorship'],
    },
    {
      title: 'Market Research',
      items: ['Data collection', 'Survey design', 'Consumer analysis', 'Insight storytelling'],
    },
  ] satisfies SkillCategory[],
}

