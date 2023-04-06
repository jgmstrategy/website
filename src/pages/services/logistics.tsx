import Typography from '@mui/material/Typography';

import ServicesPage from '@/components/ServicesPage';

function LogisticsDescription() {
  return (
    <>
      <Typography>
        We hope to have a description of our industry and services we offer here soon.
      </Typography>
    </>
  );
}

export default function Logistics() {
  return (
    <ServicesPage
      name='Logistics'
      backgroundImage='/services/truck.webp'
      subtitle='Hit every last-mile target with us'
      testimonials={[]}
      featuredInsights={[]}
      experience={<></>}
      description={<LogisticsDescription />}
    />
  );
}