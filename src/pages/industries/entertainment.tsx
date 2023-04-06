import Typography from '@mui/material/Typography';

import IndustryPage from '@/components/IndustryPage';

function EntertainmentDescription() {
  return (
    <>
      <Typography>
        We hope to have a description of our industry and services we offer here soon.
      </Typography>
    </>
  );
}

export default function Entertainment() {
  return (
    <IndustryPage
      name='Entertainment'
      backgroundImage='/industries/circus.webp'
      subtitle='Bring on the new shows'
      testimonials={[]}
      featuredInsights={[]}
      experience={<></>}
      description={<EntertainmentDescription />}
    />
  );
}