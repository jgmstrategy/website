import Typography from '@mui/material/Typography';

import Profile from '../../components/Profile';

export default function JasonEstabillo() {
  return (
    <Profile
      name='Jason Estabillo'
      image='/about/jason.webp'
      title='Partner'
      location='San Diego, CA'
      email='jason@jgmstrategy.com'
      linkedin='https://www.linkedin.com/in/jsnne/'
      tagline='Jason is a founding partner of JGM Strategy Consulting.'
      expertise={[
        {
          name: 'Restaurants',
          href: '/industries/restaurants'
        }
      ]}
      education={[
        {
          school: 'University of California, San Diego',
          degree: 'BA Business Economics'
        }
      ]}
    >
      <Typography>Long description is coming soon!</Typography>
    </Profile>
  );
}