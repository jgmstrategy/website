import Typography from '@mui/material/Typography';

import IndustryPage from '@/components/IndustryPage';

function RealEstateDescription() {
  return (
    <>
      <Typography>
        The real estate industry is a vital part of the global economy, providing opportunities for investment, shelter, and commerce. It encompasses a wide range of activities, including buying, selling, and renting of residential and commercial properties, property management, and real estate development. The industry faces a host of challenges such as increased competition, changing consumer preferences, and evolving regulatory requirements. To overcome these challenges, we offer a range of services that help our clients differentiate themselves in the market and capitalize on new opportunities.

        Our team of experts works closely with real estate developers, investors, and property managers to develop customized strategies that improve business performance, reduce costs, and enhance customer experience. We leverage cutting-edge technologies such as data analytics, automation, and digital marketing to streamline operations and optimize decision-making. Our services include market research and analysis, financial modeling, project management, and asset management. By partnering with us, our clients gain a competitive edge and position themselves for long-term success in the dynamic real estate industry.
      </Typography>
    </>
  );
}

export default function RealEstate() {
  return (
    <IndustryPage
      name='Real Estate'
      backgroundImage='/industries/house.webp'
      subtitle='We take property management to the future'
      testimonials={[]}
      featuredInsights={[]}
      experience={<></>}
      description={<RealEstateDescription />}
    />
  );
}