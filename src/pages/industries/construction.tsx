import Typography from '@mui/material/Typography';

import IndustryPage from '@/components/IndustryPage';

function ConstructionDescription() {
  return (
    <>
      <Typography>
        We hope to have a description of our industry and services we offer here soon.
      </Typography>
    </>
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