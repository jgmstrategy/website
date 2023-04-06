import Typography from '@mui/material/Typography';

import IndustryPage from '@/components/IndustryPage';

function RoboticsDescription() {
  return (
    <>
      <Typography>
        We hope to have a description of our industry and services we offer here soon.
      </Typography>
    </>
  );
}

export default function Robotics() {
  return (
    <IndustryPage
      name='Robotics'
      backgroundImage='/industries/robot.webp'
      subtitle='Bleeding edge robots are already here: we help you build them'
      testimonials={[]}
      featuredInsights={[]}
      experience={<></>}
      description={<RoboticsDescription />}
    />
  );
}