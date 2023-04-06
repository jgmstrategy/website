import Typography from '@mui/material/Typography';

import IndustryPage from '@/components/IndustryPage';

function HealthcareDescription() {
  return (
    <>
      <Typography>
        We hope to have a description of our industry and services we offer here soon.
      </Typography>
    </>
  );
}

export default function Healthcare() {
  return (
    <IndustryPage
      name='Healthcare'
      backgroundImage='/industries/doctor.webp'
      subtitle='Revitalize the nation with us'
      testimonials={[]}
      featuredInsights={[]}
      experience={<></>}
      description={<HealthcareDescription />}
    />
  );
}