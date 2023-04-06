import Typography from '@mui/material/Typography';

import IndustryPage from '@/components/IndustryPage';

function RestaurantsDescription() {
  return (
    <>
      <Typography>
        We hope to have a description of our industry and services we offer here soon.
      </Typography>
    </>
  );
}

export default function Restaurants() {
  return (
    <IndustryPage
      name='Restaurants'
      backgroundImage='/industries/restaurant.webp'
      subtitle='Food service? We help you with that service'
      testimonials={[]}
      featuredInsights={[]}
      experience={<></>}
      description={<RestaurantsDescription />}
    />
  );
}