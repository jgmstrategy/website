import Typography from '@mui/material/Typography';

import IndustryPage from '@/components/IndustryPage';

function DigitalMediaDescription() {
  return (
    <>
      <Typography>
        We hope to have a description of our industry and services we offer here soon.
      </Typography>
    </>
  );
}

export default function DigitalMedia() {
  return (
    <IndustryPage
      name='Digital Media'
      backgroundImage='/industries/hollywood.webp'
      subtitle='We help you build media for the coming age'
      testimonials={[]}
      featuredInsights={[]}
      experience={<></>}
      description={<DigitalMediaDescription />}
    />
  );
}