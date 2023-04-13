import Typography from '@mui/material/Typography';

import IndustryPage from '@/components/IndustryPage';

function RestaurantsDescription() {
  return (
    <>
      <Typography>
        The restaurant industry plays a crucial role in the economy, providing jobs and fulfilling a basic human need for sustenance and social interaction. With the rise of technology and the changing consumer preferences, restaurants need to adapt to remain competitive. We work closely with restaurant owners and operators to develop comprehensive strategies that leverage the latest digital technologies, streamline operations, and enhance customer experiences. By providing innovative solutions for analytics, automation, marketing, and modernization, we help our clients stay ahead of the curve and succeed in this rapidly evolving industry.
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