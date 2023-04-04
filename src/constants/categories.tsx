export type categoryType = {
  name: string;
  href: string;
  desc: string;
};

export type expertiseType = {
  name: string;
  href: string;
}

export const industries = [
  {
    name: 'Agriculture',
    href: '/industries/agriculture',
    desc: 'Farming, agribusiness, livestock, food and beverage manufacturing'
  },
  {
    name: 'Construction',
    href: '/industries/construction',
    desc: 'Construction companies and contractors'
  },
  {
    name: 'Digital Media',
    href: '/industries/media',
    desc: 'Digital design, videos, animations, social media'
  },
  {
    name: 'Education',
    href: '/industries/education',
    desc: 'Schools, higher education, tutoring centers'
  },
  {
    name: 'Entertainment',
    href: '/industries/entertainment',
    desc: 'Circus, theater shows, plays, carnivals'
  },
  {
    name: 'Healthcare',
    href: '/industries/healthcare',
    desc: 'Doctors, dentistries, private practices, clinics'
  },
  {
    name: 'Lodging & Accommodation',
    href: '/industries/lodging',
    desc: 'Hotels, hostels, private stays, packages'
  },
  {
    name: 'Physical Media',
    href: '/industries/paper',
    desc: 'Paper, print media, newspapers, DVDs, advertising'
  },
  {
    name: 'Real Estate',
    href: '/industries/realestate',
    desc: 'Real estate, rental properties, real estate agents'
  },
  {
    name: 'Restaurants',
    href: '/industries/restaurants',
    desc: 'Food service, food delivery'
  },
  {
    name: 'Retail',
    href: '/industries/retail',
    desc: 'Physical storefronts, online retail'
  },
  {
    name: 'Robotics',
    href: '/industries/robotics',
    desc: 'Industrial robotics, autonomous vehicles'
  },
  {
    name: 'Transportation',
    href: '/industries/transportation',
    desc: 'Infrastructure, automobiles, public transportation'
  },
];

export const services = [
  {
    name: 'Digital Media',
    href: '/services/digital',
    desc: 'Video editing, photo editing, poster design'
  },
  {
    name: 'Logistics',
    href: '/services/logistics',
    desc: 'Timekeeping, software'
  },
  {
    name: 'Modernization',
    href: '/services/modernization',
    desc: 'System upgrades, technology upgrades'
  },
  {
    name: 'Operations',
    href: '/services/operations',
    desc: 'CRM, sales software'
  },
];