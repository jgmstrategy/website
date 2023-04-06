import Typography from '@mui/material/Typography';

import Profile from '../../components/Profile';
import { people } from '@/constants/people';

const KEY = 'Jason Estabillo';

export default function JasonEstabillo() {
  return (
    <Profile
      name={people[KEY].name}
      image='/about/jason.webp'
      title={people[KEY].role}
      location='San Diego, CA'
      email='jason@jgmstrategy.com'
      linkedin='https://www.linkedin.com/in/jsnne/'
      tagline='Jason is a founding partner of JGM Strategy Consulting.'
      expertise={[
        {
          name: 'Restaurants',
          href: '/industries/restaurants'
        },
        {
          name: 'Real Estate',
          href: '/industries/realestate'
        },
        {
          name: 'Retail',
          href: '/industries/retail'
        },
        {
          name: 'Analytics',
          href: '/services/analytics'
        },
        {
          name: 'Marketing',
          href: '/services/marketing'
        }
      ]}
      education={[
        {
          school: 'University of California, San Diego',
          degree: 'BA Business Economics'
        }
      ]}
    >
      <Typography sx={{ paddingBottom: '1rem', fontSize: 20, fontWeight: 300 }}>
        Jason Estabillo is a highly accomplished business professional and founding partner of
        JGM Strategy Consulting, a leading strategic consulting firm. With an extensive background
        in the restaurant and retail industry, Jason has developed a deep understanding of the
        business landscape and the key drivers of success. As a chair on the board of directors,
        Jason provides invaluable insights and strategic guidance to help organizations achieve
        their goals and maximize their potential.
      </Typography>
      <Typography sx={{ paddingBottom: '1rem', fontSize: 18, fontWeight: 300 }}>
        One of Jason&apos;s primary areas of expertise is analytics, where he leverages his strong
        analytical skills and experience to help businesses make data-driven decisions. He is
        highly proficient in data analysis and interpretation, and he works closely with clients
        to develop customized analytical solutions that provide valuable insights into their
        operations and performance.
      </Typography>
      <Typography sx={{ paddingBottom: '1rem', fontSize: 18, fontWeight: 300 }}>
        In addition to his analytical prowess, Jason is also well-versed in finance and marketing,
        two critical areas for businesses looking to grow and succeed in today&apos;s highly
        competitive marketplace. With his deep knowledge of financial modeling, budgeting, and
        forecasting, Jason helps clients develop sound financial strategies that support growth
        and maximize profitability. And with his expertise in marketing, Jason is able to help
        businesses develop effective marketing campaigns that drive customer engagement and increase
        brand awareness.
      </Typography>
      <Typography sx={{ fontSize: 18, fontWeight: 300 }}>
        Overall, Jason Estabillo is a highly skilled and experienced business professional who
        brings a wealth of knowledge and expertise to his role at JGM Strategy Consulting. With
        his strong background in the restaurant and retail industry, and his specialization in
        analytics, finance, and marketing, Jason is an invaluable asset to any organization looking
        to achieve long-term success and growth.
      </Typography>
    </Profile>
  );
}