import Typography from '@mui/material/Typography';

import IndustryPage from '@/components/IndustryPage';

function EntertainmentDescription() {
  return (
    <>
      <Typography>
        The entertainment industry is an exciting and ever-changing landscape that includes film, television, music, gaming, and more. With the rapid advancement of technology and the shift towards digital platforms, companies in this industry face a unique set of challenges and opportunities. To stay ahead, it's essential to embrace innovation and rethink traditional business models.

        Our team brings expertise in analytics, automation, digital media, e-commerce, and marketing to help companies in the entertainment industry navigate this complex environment. By leveraging the power of data-driven insights, we enable our clients to make informed decisions and create more personalized experiences for their audiences. We also assist with modernizing operations, improving logistics, and expanding into new markets. Our goal is to help our clients build sustainable, future-ready businesses that thrive in the fast-paced world of entertainment.
      </Typography>
    </>
  );
}

export default function Entertainment() {
  return (
    <IndustryPage
      name='Entertainment'
      backgroundImage='/industries/circus.webp'
      subtitle='Bring on the new shows'
      testimonials={[]}
      featuredInsights={[]}
      experience={<></>}
      description={<EntertainmentDescription />}
    />
  );
}