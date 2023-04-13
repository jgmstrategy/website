import Typography from '@mui/material/Typography';

import IndustryPage from '@/components/IndustryPage';

function PhysicalMediaDescription() {
  return (
    <>
      <Typography>
        The physical media industry is undergoing a significant transformation as new technologies and changing consumer behaviors are disrupting traditional business models. To succeed in this new landscape, companies must adapt to the shift towards digital media consumption and explore innovative ways to monetize their content. At our company, we work with physical media industry players to develop strategies that address these challenges and seize new opportunities.

        Our experts help clients modernize their operations through automation, analytics, and other cutting-edge technologies. We also assist in the development of new revenue streams through e-commerce platforms and other digital solutions. By leveraging the power of data analytics and logistics solutions, we enable our clients to optimize their supply chains and enhance their customer experience. Whether you are a manufacturer, distributor, or retailer in the physical media industry, we can help you navigate this evolving landscape and achieve long-term success.
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