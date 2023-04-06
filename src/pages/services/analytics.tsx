import Typography from '@mui/material/Typography';

import ServicesPage from '@/components/ServicesPage';

function AnalyticsDescription() {
  return (
    <>
      <Typography>
        We hope to have a description of our industry and services we offer here soon.
      </Typography>
    </>
  );
}

export default function Analytics() {
  return (
    <ServicesPage
      name='Analytics'
      backgroundImage='/services/graphs.webp'
      subtitle='See the data that powers our modern world'
      testimonials={[]}
      featuredInsights={[]}
      experience={<></>}
      description={<AnalyticsDescription />}
    />
  );
}