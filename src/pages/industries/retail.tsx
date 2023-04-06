import Typography from '@mui/material/Typography';

import IndustryPage from '@/components/IndustryPage';

function RetailDescription() {
  return (
    <>
      <Typography>
        We hope to have a description of our industry and services we offer here soon.
      </Typography>
    </>
  );
}

export default function Retail() {
  return (
    <IndustryPage
      name='Retail'
      backgroundImage='/industries/mall.webp'
      subtitle='Take your customers on the greatest shopping trip'
      testimonials={[]}
      featuredInsights={[]}
      experience={<></>}
      description={<RetailDescription />}
    />
  );
}