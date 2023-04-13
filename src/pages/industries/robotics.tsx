import {
  Stack,
  Typography
} from '@mui/material';

import IndustryPage from '@/components/IndustryPage';

function RoboticsDescription() {
  return (
    <Stack direction='column' spacing={2}>
      <Typography>
        The robotics industry is experiencing unprecedented growth as automation
        technologies are rapidly transforming various sectors of the economy.
        From manufacturing and logistics to healthcare and defense, robots and
        autonomous systems are playing a vital role in improving operational
        efficiency, productivity, and safety. At our company, we work closely
        with businesses, organizations, and governments to develop innovative
        robotics solutions that are tailored to meet their unique needs.
      </Typography>
      <Typography>
        Our team of experts leverages cutting-edge technologies such as
        artificial intelligence, machine learning, and computer vision to design
        and build advanced robots that can perform complex tasks with precision
        and reliability. Through our collaborative approach, we enable our
        clients to leverage the full potential of robotics to drive growth,
        streamline operations, and create new value in the robotics industry.
      </Typography>
    </Stack>
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