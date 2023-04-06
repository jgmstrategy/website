import Typography from '@mui/material/Typography';

import ServicesPage from '@/components/ServicesPage';

function OperationsDescription() {
  return (
    <>
      <Typography>
        We hope to have a description of our industry and services we offer here soon.
      </Typography>
    </>
  );
}

export default function Operations() {
  return (
    <ServicesPage
      name='Operations'
      backgroundImage='/services/notes.webp'
      subtitle='Manage efficiently'
      testimonials={[]}
      featuredInsights={[]}
      experience={<></>}
      description={<OperationsDescription />}
    />
  );
}