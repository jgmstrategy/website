import {
  Stack,
  Typography
} from '@mui/material';

import IndustryPage from '@/components/IndustryPage';

function TransportationDescription() {
  return (
    <Stack direction='column' spacing={2}>
      <Typography>
        The transportation industry plays a crucial role in connecting people and
        goods across the globe. With the rapid development of technology,
        transportation companies are facing unprecedented challenges and
        opportunities. To stay competitive, companies must not only keep up with
        the latest advances in technology but also find innovative ways to
        integrate them into their operations.
      </Typography>
      <Typography>
        At our company, we work closely with transportation providers to help
        them navigate this complex landscape. Our services include analytics,
        automation, logistics, and modernization, all of which can help
        transportation companies improve their efficiency, reduce costs, and
        deliver a better experience for their customers. By leveraging the power
        of data, AI, and machine learning, we help our clients stay ahead of the
        curve and seize new opportunities in the transportation industry.
      </Typography>
    </Stack>
  );
}

export default function Transportation() {
  return (
    <IndustryPage
      name='Transportation'
      backgroundImage='/industries/cars.webp'
      subtitle='We help you with last-mile and delivery logistics'
      testimonials={[]}
      featuredInsights={[]}
      experience={<></>}
      description={<TransportationDescription />}
    />
  );
}