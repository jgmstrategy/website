import {
  Stack,
  Typography
} from '@mui/material';

import IndustryPage from '@/components/IndustryPage';

function LodgingAccommodationDescription() {
  return (
    <Stack direction='column' spacing={2}>
      <Typography>
        The lodging and accommodation industry is an essential part of the global
        economy, providing travelers with a wide range of options for their
        stays, including hotels, motels, resorts, bed and breakfasts, and
        vacation rentals. To succeed in this highly competitive market, companies
        must adapt to changing consumer preferences and technological advancements.
      </Typography>
      <Typography>
        At our company, we help lodging and accommodation businesses transform
        their operations and improve the customer experience by leveraging
        cutting-edge technology and innovative solutions. Our services include
        digital marketing, e-commerce, data analytics, supply chain optimization,
        and operational efficiency improvements.
      </Typography>
      <Typography>
        We work closely with our clients to identify their unique challenges and
        opportunities, developing customized strategies that enable them to
        remain competitive and profitable in an ever-evolving marketplace.
        Whether it&apos;s improving their online presence, streamlining their supply
        chain, or enhancing the guest experience, our experts are dedicated to
        helping lodging and accommodation companies achieve success.
      </Typography>
    </Stack>
  );
}

export default function LodgingAccommodation() {
  return (
    <IndustryPage
      name='Lodging & Accommodation'
      backgroundImage='/industries/villa.webp'
      subtitle='Let us help you take hospitality to the next level'
      testimonials={[]}
      featuredInsights={[]}
      experience={<></>}
      description={<LodgingAccommodationDescription />}
    />
  );
}