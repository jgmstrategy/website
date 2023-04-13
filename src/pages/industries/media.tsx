import {
  Typography
} from '@mui/material';

import IndustryPage from '@/components/IndustryPage';

function DigitalMediaDescription() {
  return (
    <>
      <Typography>
        The digital media industry is a constantly evolving landscape, with new
        technologies and platforms emerging every day. In order to stay ahead of
        the curve, companies need to be able to adapt quickly and embrace
        emerging trends. Our company partners with digital media companies,
        content creators, and advertising agencies to help them leverage the
        latest technologies and strategies. From developing optimized content for
        new platforms, to creating targeted marketing campaigns and harnessing
        the power of data analytics, we provide innovative solutions that drive
        growth and engagement. Our team of experts is passionate about
        transforming businesses and driving innovation through emerging
        technologies, such as AI and machine learning, in order to help our
        clients thrive in this fast-paced industry.
      </Typography>
    </>
  );
}

export default function DigitalMedia() {
  return (
    <IndustryPage
      name='Digital Media'
      backgroundImage='/industries/hollywood.webp'
      subtitle='We help you build media for the coming age'
      testimonials={[]}
      featuredInsights={[]}
      experience={<></>}
      description={<DigitalMediaDescription />}
    />
  );
}