import Typography from '@mui/material/Typography';

import IndustryPage from '@/components/IndustryPage';

function RetailDescription() {
  return (
    <>
      <Typography>
        The retail industry is undergoing a rapid transformation as new technologies and changing consumer behaviors are disrupting traditional business models. At our company, we partner with retailers to help them navigate these challenges and capitalize on new opportunities. We work closely with our clients to develop innovative strategies that leverage the latest technologies such as e-commerce platforms, digital marketing, and analytics to create more personalized shopping experiences for their customers. Our approach is to not just provide short-term solutions, but to work with retailers to transform their business models, build customer loyalty, and position them for long-term success in a rapidly changing retail landscape.
      </Typography>
    </>
  );
}

export default function Retail() {
  return (
    <IndustryPage
      name='Retail'
      backgroundImage='/industries/mall.webp'
      subtitle='Take your customers on the greatest shopping trip'
      testimonials={[]}
      featuredInsights={[]}
      experience={<></>}
      description={<RetailDescription />}
    />
  );
}