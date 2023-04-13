import {
  Stack,
  Typography
} from '@mui/material';

import IndustryPage from '@/components/IndustryPage';

function ConstructionDescription() {
  return (
    <Stack direction='column' spacing={2}>
      <Typography>
        The construction industry is in the midst of significant transformation,
        driven by technological advancements and shifts in customer demands.
        To stay competitive, companies must differentiate themselves by adopting
        new digital technologies, rethinking their traditional value chain
        activities, and investing in customer-centric strategies.
      </Typography>
      <Typography>
        At our company, we work closely with construction companies, real estate
        developers, architects, and engineering firms to help them navigate this
        dynamic landscape. From modernizing construction sites with smart
        technologies and robotics to implementing sustainable building practices
        and enhancing customer experiences, we partner with our clients to develop
        innovative solutions that enable them to achieve their business goals. By
        leveraging our expertise in analytics, automation, and digital media, we
        help construction companies optimize their operations, reduce costs, and
        create more efficient and sustainable buildings.
      </Typography>
    </Stack>
  );
}

export default function Construction() {
  return (
    <IndustryPage
      name='Construction'
      backgroundImage='/industries/construction.webp'
      subtitle='Build up and soar with us'
      testimonials={[]}
      featuredInsights={[]}
      experience={<></>}
      description={<ConstructionDescription />}
    />
  );
}