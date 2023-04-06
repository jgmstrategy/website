import Typography from '@mui/material/Typography';

import ServicesPage from '@/components/ServicesPage';

function AutomationDescription() {
  return (
    <>
      <Typography>
        We hope to have a description of our industry and services we offer here soon.
      </Typography>
    </>
  );
}

export default function Automation() {
  return (
    <ServicesPage
      name='Automation'
      backgroundImage='/services/cars.webp'
      subtitle='Expedite your work and cut your costs'
      testimonials={[]}
      featuredInsights={[]}
      experience={<></>}
      description={<AutomationDescription />}
    />
  );
}