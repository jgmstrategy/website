export type PeopleType = {
  name: string;
  role: string;
  avatar?: string;
  image?: string;
  href?: string;
};

interface PeopleArrayType {
  [key: string]: PeopleType;
};

export const people: PeopleArrayType = {
  'Jason Estabillo': {
    name: 'Jason Estabillo',
    role: 'Founding Partner',
    avatar: '/about/jason.avatar.webp',
    image: '/about/jason.jpg',
    href: '/about/jason-estabillo'
  },
  'Gideon Tong': {
    name: 'Gideon Tong',
    role: 'Founding Partner',
    avatar: '/about/gideon.avatar.webp',
    image: '/about/gideon.jpg',
    href: '/about/gideon-tong'
  },
  'Maxwell Chang': {
    name: 'Maxwell Chang',
    role: 'Founding Partner',
    avatar: '/about/maxwell.avatar.webp',
    image: '/about/maxwell.jpg',
    href: '/about/maxwell-chang'
  }
};

export type PeopleOption = keyof typeof people;