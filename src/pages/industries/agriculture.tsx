import Typography from '@mui/material/Typography';

import IndustryPage from '@/components/IndustryPage';

function AgricultureDescription() {
  return (
    <>
      <Typography>
        The agriculture industry is currently undergoing a transformation, with technology playing an increasingly critical role in addressing the industry's most pressing challenges. At our company, we recognize that agriculture is a vital part of the global economy, providing food, fiber, and fuel for the world's population. To succeed in this evolving landscape, companies must embrace new technologies, such as precision agriculture, automation, and digital marketing.

        We partner with farmers, livestock breeders, machinery manufacturers, and food processors to develop comprehensive strategies that help them optimize their operations, reduce waste, and enhance the sustainability of their practices. By leveraging the power of data analytics, e-commerce platforms, and logistics solutions, we enable our clients to transform their businesses and take advantage of new opportunities in the agriculture industry.
      </Typography>
    </>
  );
}

function AgricultureExperience() {
  return (
    <>
      <Typography>We hope to put our experience here soon.</Typography>
    </>
  );
}

export default function Agriculture() {
  return (
    <IndustryPage
      name='Agriculture'
      backgroundImage='/industries/agriculture.webp'
      subtitle='Take your production to the next level'
      testimonials={[]}
      featuredInsights={[]}
      experience={<AgricultureExperience />}
      description={<AgricultureDescription />}
    />
  );
}