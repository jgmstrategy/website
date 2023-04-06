import Typography from '@mui/material/Typography';

import IndustryPage from '@/components/IndustryPage';

function PhysicalMediaDescription() {
  return (
    <>
      <Typography>
        We hope to have a description of our industry and services we offer here soon.
      </Typography>
    </>
  );
}

export default function PhysicalMedia() {
  return (
    <IndustryPage
      name='Physical Media'
      backgroundImage='/industries/sign.webp'
      subtitle='The real world is just around the corner'
      testimonials={[]}
      featuredInsights={[]}
      experience={<></>}
      description={<PhysicalMediaDescription />}
    />
  );
}