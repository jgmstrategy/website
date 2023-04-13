import {
  Stack,
  Typography
} from '@mui/material';

import IndustryPage from '@/components/IndustryPage';

function HealthcareDescription() {
  return (
    <Stack direction='column' spacing={2}>
      <Typography>
        The healthcare industry is one of the most critical sectors in society,
        as it plays a vital role in ensuring the well-being of individuals and
        communities. With the rise of new technologies and the changing landscape
        of healthcare, there are significant opportunities to improve patient
        outcomes, increase access to care, and reduce costs.
      </Typography>
      <Typography>
        To help our clients navigate this complex environment, we offer a range
        of services that leverage cutting-edge technology, data analytics, and
        operational expertise. Our team works closely with healthcare providers,
        payers, and other stakeholders to design and implement innovative
        solutions that improve the patient experience, streamline workflows, and
        drive better health outcomes.
      </Typography>
      <Typography>
        From telemedicine and digital health platforms to supply chain
        optimization and revenue cycle management, our solutions enable
        healthcare organizations to operate more efficiently and effectively,
        while staying ahead of regulatory changes and industry trends. We are
        committed to working collaboratively with our clients to create a more
        accessible, affordable, and high-quality healthcare system for all.
      </Typography>
    </Stack>
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