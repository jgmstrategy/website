import {
  Stack,
  Typography
} from '@mui/material';

import ServicesPage from '@/components/ServicesPage';

function AnalyticsDescription() {
  return (
    <Stack direction='column' spacing={2}>
      <Typography>
        At JGM Strategy Consulting, we understand that data drives success in today's fast-paced business environment. Our analytics consulting and implementation services empower you to unlock the true potential of your data, providing you with actionable insights and enabling data-driven decision-making. Our team of experienced professionals is dedicated to helping you harness the power of analytics to improve your organization's performance, streamline operations, and foster innovation.
      </Typography>
      <Typography>
        Our comprehensive approach begins with developing a tailored analytics strategy for your organization. We collaborate closely with you to identify key performance indicators (KPIs), establish data governance policies, and create a roadmap to achieve your analytics objectives. To ensure your data is accurate, consistent, and ready for analysis, we implement robust data integration and management solutions, including data extraction, transformation, and loading (ETL) processes, as well as data cleansing, normalization, and warehousing.
      </Typography>
      <Typography>
        With a solid foundation in place, our analytics consultants design and develop custom analytics solutions that deliver valuable insights and enable informed decision-making. We specialize in various analytics tools and techniques, such as descriptive, diagnostic, predictive, and prescriptive analytics. We also take care of end-to-end implementation and deployment, ensuring seamless integration with your existing systems and processes. Our commitment to your success extends beyond implementation through comprehensive training and ongoing support, empowering your team to make the most of your analytics solution.
      </Typography>
    </Stack>
  );
}

export default function Analytics() {
  return (
    <ServicesPage
      name='Analytics'
      backgroundImage='/services/graphs.webp'
      subtitle='See the data that powers our modern world'
      testimonials={[]}
      featuredInsights={[]}
      experience={<></>}
      description={<AnalyticsDescription />}
    />
  );
}