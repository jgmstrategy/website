import Typography from '@mui/material/Typography';

import ServicesPage from '@/components/ServicesPage';

function DigitalMediaDescription() {
  return (
    <>
      <Typography>
        We hope to have a description of our industry and services we offer here soon.
      </Typography>
    </>
  );
}

export default function DigitalMedia() {
  return (
    <ServicesPage
      name='Digital Media'
      backgroundImage='/services/movie.webp'
      subtitle='Expand your market and reach new heights'
      testimonials={[]}
      featuredInsights={[]}
      experience={<></>}
      description={<DigitalMediaDescription />}
    />
  );
}