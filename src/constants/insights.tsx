export type insightType = {
  name: string;
  href: string;
  desc: string;
  image: string;
};

export const insights = [
  {
    name: 'House Passes Debt Ceiling Limit',
    href: '/insights/debt-ceiling-limit',
    desc: 'Debt limit bill passed amidst concerns.',
    image: 'https://csis-website-prod.s3.amazonaws.com/s3fs-public/styles/1200x522/s3/publication/GettyImages-83951850.jpg'
  },
  {
    name: 'May Jobs Report',
    href: '/insights/2023-may-jobs-report',
    desc: 'Surpassing expecatations, but really?',
    image: 'https://cdn.shopify.com/s/files/1/0746/2561/files/wall_street_1920_large.jpg'
  },
  {
    name: 'Better Patient Experiences',
    href: '/insights/better-patient-experiences',
    desc: 'Learn how JGM Strategy is able to keep stress levels low in the waiting room.',
    image: '/insights/better-patient-experiences.jpg'
  },
  {
    name: 'World Resource Report 2023',
    href: '/insights/world-resource-report',
    desc: 'Find your way in the world stage with our latest logistics report.',
    image: '/insights/world-resource-report.jpg'
  },
  {
    name: 'Diversity and Generative AI',
    href: '/insights/diversity-ai',
    desc: 'See how we can help you ensure marginalized groups are included every step of the way.',
    image: '/insights/diversity-ai.jpg'
  }
];