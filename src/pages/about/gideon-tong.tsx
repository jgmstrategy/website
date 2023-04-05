import Typography from '@mui/material/Typography';

import Profile from '../../components/Profile';

export default function GideonTong() {
  return (
    <Profile
      name='Gideon Tong'
      image='/about/gideon.webp'
      title='Partner'
      location='San Diego, CA'
      email='gideon@jgmstrategy.com'
      linkedin='https://www.linkedin.com/in/gideontong'
      tagline='Gideon is a founding partner of JGM Strategy Consulting.'
      expertise={[
        {
          name: 'Automation',
          href: '/services/automation'
        },
        {
          name: 'Logistics',
          href: '/services/logistics'
        },
        {
          name: 'Modernization',
          href: '/services/modernization'
        },
        {
          name: 'Operations',
          href: '/services/operations'
        },
        {
          name: 'Education',
          href: '/industries/education'
        },
        {
          name: 'Robotics',
          href: '/industries/robotics'
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
        Gideon Tong is a founding partner of JGM Strategy Consulting and serves as a chair
        on the board of directors. He is a highly skilled and experienced business professional
        with a diverse background in business operations, logistics, and engineering. Gideon
        earned a Bachelor&apos;s degree in Electrical Engineering from UC San Diego, which equipped
        him with the technical skills and problem-solving abilities to excel in his career.
      </Typography>
      <Typography sx={{ paddingBottom: '1rem', fontSize: 18, fontWeight: 300 }}>
        Throughout his career, Gideon has gained significant experience in business operations,
        helping clients streamline their processes, and improve their efficiency. With his
        expertise in logistics, he has helped numerous organizations optimize their supply chain
        and distribution processes, reducing costs and improving customer satisfaction.
      </Typography>
      <Typography sx={{ paddingBottom: '1rem', fontSize: 18, fontWeight: 300 }}>
        Gideon&apos;s experience in engineering has also proven invaluable in his role as a founding
        partner at JGM Strategy Consulting. He is highly proficient in identifying and solving
        complex technical problems, and he uses his expertise to help clients develop innovative
        solutions that meet their unique needs and challenges.
      </Typography>
      <Typography sx={{ fontSize: 18, fontWeight: 300 }}>
        Overall, Gideon Tong is a dynamic and versatile business leader who brings a wealth
        of knowledge and experience to his role at JGM Strategy Consulting. With his background
        in business operations, logistics, and engineering, he is able to provide clients with
        comprehensive and effective solutions that help them achieve their goals and maximize
        their success.
      </Typography>
    </Profile>
  );
}