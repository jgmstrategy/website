import Typography from '@mui/material/Typography';

import IndustryPage from '@/components/IndustryPage';

function EducationDescription() {
  return (
    <>
      <Typography>
        We hope to have a description of our industry and services we offer here soon.
      </Typography>
    </>
  );
}

export default function Education() {
  return (
    <IndustryPage
      name='Education'
      backgroundImage='/industries/lecture.webp'
      subtitle='The students of the new generation'
      testimonials={[]}
      featuredInsights={[]}
      experience={<></>}
      description={<EducationDescription />}
    />
  );
}