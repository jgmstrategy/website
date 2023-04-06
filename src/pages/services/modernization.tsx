import Typography from '@mui/material/Typography';

import ServicesPage from '@/components/ServicesPage';

function ModernizationDescription() {
  return (
    <>
      <Typography>
        We hope to have a description of our industry and services we offer here soon.
      </Typography>
    </>
  );
}

export default function Modernization() {
  return (
    <ServicesPage
      name='Modernization'
      backgroundImage='/services/future.webp'
      subtitle='Reach for the future with bleeding edge technology and processes'
      testimonials={[]}
      featuredInsights={[]}
      experience={<></>}
      description={<ModernizationDescription />}
    />
  );
}