import Typography from '@mui/material/Typography';

import ServicesPage from '@/components/ServicesPage';

function ECommerceDescription() {
  return (
    <>
      <Typography>
        We hope to have a description of our industry and services we offer here soon.
      </Typography>
    </>
  );
}

export default function ECommerce() {
  return (
    <ServicesPage
      name='E-Commerce'
      backgroundImage='/services/shopping.webp'
      subtitle='Online is the new in-person shopping'
      testimonials={[]}
      featuredInsights={[]}
      experience={<></>}
      description={<ECommerceDescription />}
    />
  );
}