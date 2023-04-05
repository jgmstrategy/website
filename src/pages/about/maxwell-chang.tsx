import Typography from '@mui/material/Typography';

import Profile from '../../components/Profile';

export default function MaxwellChang() {
  return (
    <Profile
      name='Maxwell Chang'
      image='/about/maxwell.webp'
      title='Partner'
      location='Mountain View, CA'
      email='max@jgmstrategy.com'
      linkedin='https://www.linkedin.com/in/maxwell-chang/'
      tagline='Maxwell is a founding partner of JGM Strategy Consulting.'
      expertise={[
        {
          name: 'Healthcare',
          href: '/industries/healthcare'
        },
        {
          name: 'Entertainment',
          href: '/industries/entertainment'
        },
        {
          name: 'Robotics',
          href: '/industries/robotics'
        },
        {
          name: 'Automation',
          href: '/services/automation'
        },
        {
          name: 'Modernization',
          href: '/services/modernization'
        }
      ]}
      education={[
        {
          school: 'University of California, San Diego',
          degree: 'BS Electrical Engineering'
        }
      ]}
    >
      <Typography sx={{ paddingBottom: '1rem', fontSize: 20, fontWeight: 300 }}>
        Maxwell Chang is a founding partner and chair member of JGM Strategy Consulting, with
        an impressive background in electrical engineering and a strong business acumen. Like
        his fellow founding partners, Maxwell also graduated from UC San Diego, where he obtained
        a degree in Electrical Engineering.
      </Typography>
      <Typography sx={{ paddingBottom: '1rem', fontSize: 18, fontWeight: 300 }}>
        Maxwell&apos;s extensive experience in electrical engineering has allowed him to develop a
        unique set of problem-solving and analytical skills, which he has applied to his work in
        the business world. His keen eye for detail and his ability to think critically have proven
        invaluable in helping clients identify and overcome complex challenges.
      </Typography>
      <Typography sx={{ paddingBottom: '1rem', fontSize: 18, fontWeight: 300 }}>
        Along with his expertise in electrical engineering, Maxwell also possesses a deep
        understanding of the business landscape. He has a keen sense of how businesses operate
        and how they can leverage technology and innovation to gain a competitive edge. With
        his strong business acumen, Maxwell is able to help clients develop effective strategies
        and tactics that drive growth and improve profitability.
      </Typography>
      <Typography sx={{ fontSize: 18, fontWeight: 300 }}>
        Overall, Maxwell Chang is a highly accomplished business professional who brings a unique
        set of skills and experience to his role at JGM Strategy Consulting. With his background
        in electrical engineering and his keen eye for the business side of things, Maxwell is
        able to help clients tackle complex challenges and achieve their goals.
      </Typography>
    </Profile>
  );
}