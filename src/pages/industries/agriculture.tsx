import Typography from '@mui/material/Typography';

import IndustryPage from '@/components/IndustryPage';

function AgricultureDescription() {
  return (
    <>
      <Typography>
        We hope to have a description of our industry and services we offer here soon.
      </Typography>
    </>
  );
}

function AgricultureExperience() {
  return (
    <>
      <Typography>We hope to put something here soon.</Typography>
    </>
  );
}

export default function Agriculture() {
  return (
    <IndustryPage
      name='Agriculture'
      backgroundImage='/industries/agriculture.webp'
      subtitle='Take your production to the next level'
      testimonials={[]}
      featuredInsights={[]}
      experience={<AgricultureExperience />}
      description={<AgricultureDescription />}
    />
  );
}