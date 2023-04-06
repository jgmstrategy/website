import Typography from '@mui/material/Typography';

import ServicesPage from '@/components/ServicesPage';

function MarketingDescription() {
  return (
    <>
      <Typography>
        We hope to have a description of our industry and services we offer here soon.
      </Typography>
    </>
  );
}

export default function Marketing() {
  return (
    <ServicesPage
      name='Marketing'
      backgroundImage='/services/nyc.webp'
      subtitle='Find your product-market fit with us'
      testimonials={[]}
      featuredInsights={[]}
      experience={<></>}
      description={<MarketingDescription />}
    />
  );
}