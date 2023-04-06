import Typography from '@mui/material/Typography';

import IndustryPage from '@/components/IndustryPage';

function RealEstateDescription() {
  return (
    <>
      <Typography>
        We hope to have a description of our industry and services we offer here soon.
      </Typography>
    </>
  );
}

export default function RealEstate() {
  return (
    <IndustryPage
      name='Real Estate'
      backgroundImage='/industries/house.webp'
      subtitle='We take property management to the future'
      testimonials={[]}
      featuredInsights={[]}
      experience={<></>}
      description={<RealEstateDescription />}
    />
  );
}