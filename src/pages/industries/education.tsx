import Typography from '@mui/material/Typography';

import IndustryPage from '@/components/IndustryPage';

function EducationDescription() {
  return (
    <>
      <Typography>
        Our team of experts in the education industry uses data analytics,
        cutting-edge technologies, and innovative methodologies to create custom
        solutions that cater to the unique needs of each client. By leveraging
        these tools, we help education organizations streamline their operations,
        enhance student engagement and learning outcomes, and stay ahead of the
        curve in a rapidly evolving landscape. Our approach is grounded in
        collaboration, as we work closely with our clients to understand their
        specific challenges and identify opportunities for improvement. Through
        this partnership, we enable education providers to unlock their full
        potential and prepare students for success in an ever-changing world.
      </Typography>
    </>
  );
}

export default function Education() {
  return (
    <IndustryPage
      name='Education'
      backgroundImage='/industries/lecture.webp'
      subtitle='The students of the new generation'
      testimonials={[]}
      featuredInsights={[]}
      experience={<></>}
      description={<EducationDescription />}
    />
  );
}