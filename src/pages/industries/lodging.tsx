import Typography from '@mui/material/Typography';

import IndustryPage from '@/components/IndustryPage';

function LodgingAccommodationDescription() {
  return (
    <>
      <Typography>
        We hope to have a description of our industry and services we offer here soon.
      </Typography>
    </>
  );
}

export default function LodgingAccommodation() {
  return (
    <IndustryPage
      name='Lodging & Accommodation'
      backgroundImage='/industries/villa.webp'
      subtitle='Let us help you take hospitality to the next level'
      testimonials={[]}
      featuredInsights={[]}
      experience={<></>}
      description={<LodgingAccommodationDescription />}
    />
  );
}