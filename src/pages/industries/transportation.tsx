import Typography from '@mui/material/Typography';

import IndustryPage from '@/components/IndustryPage';

function TransportationDescription() {
  return (
    <>
      <Typography>
        We hope to have a description of our industry and services we offer here soon.
      </Typography>
    </>
  );
}

export default function Transportation() {
  return (
    <IndustryPage
      name='Transportation'
      backgroundImage='/industries/cars.webp'
      subtitle='We help you with last-mile and delivery logistics'
      testimonials={[]}
      featuredInsights={[]}
      experience={<></>}
      description={<TransportationDescription />}
    />
  );
}