import Typography from '@mui/material/Typography';

import IndustryPage from '@/components/IndustryPage';

function AgricultureDescription() {
  return (
    <>
      <Typography>
        We hope to have a description of our industry and services we offer here soon.
      </Typography>
    </>
  );
}

export default function Agriculture() {
  return (
    <IndustryPage
      name='Agriculture'
      subtitle='Get ahead of production with our consultation'
      description={<AgricultureDescription />}
    />
  );
}