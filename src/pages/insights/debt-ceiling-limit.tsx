import Typography from '@mui/material/Typography';

import InsightPage from '../../components/InsightPage';

export default function DebtCeilingLimit() {
  return (
    <InsightPage
      title='House Passes Debt Ceiling Limit'
      image='https://csis-website-prod.s3.amazonaws.com/s3fs-public/styles/1200x522/s3/publication/GettyImages-83951850.jpg'
      description='Debt limit bill passed amidst concerns.'
      subheader='Economics Insight'
      authors={
        [
          'Jason Estabillo'
        ]
      }
    >
      <Typography sx={{ paddingY: '1rem' }}>
        The House of Representatives has successfully passed a debt-limit bill
        that was collaboratively developed by President Joe Biden and Speaker
        Kevin McCarthy. The bill seeks to impose restrictions on government
        spending until the 2024 election, ensuring the avoidance of a potential
        default by the United States.
      </Typography>
      <Typography sx={{ paddingTop: '1rem' }}>
        This bipartisan agreement received significant support from House
        Republicans, bolstering McCarthy&apos;s standing as Speaker. However,
        it&apos;s worth noting that the bill garnered more votes from the
        Democratic minority than from the GOP majority, which has prompted
        conservative critics to voice concerns about the Speaker&apos;s decision-making.
      </Typography>
      <Typography sx={{ paddingTop: '1rem' }}>
        The approved bill suspends the debt ceiling until January 1, 2025,
        effectively alleviating concerns about a default throughout the remainder
        of Biden&apos;s current term. In return, Democrats have agreed to cap
        federal spending until 2025, potentially leading to some reduction in
        government services due to the current inflation rate.
      </Typography>
      <Typography sx={{ paddingTop: '1rem' }}>
        The bill will now proceed to the Senate, where its approval is
        widely anticipated. This agreement signifies a significant shift towards
        curbing government spending following extensive COVID-related financial
        aid and the implementation of major Biden-led initiatives focusing
        on infrastructure and climate change. Nevertheless, both hard-line
        conservatives and progressive Democrats have expressed dissatisfaction
        with certain aspects of the compromise, posing challenges
        for McCarthy&apos;s leadership and Biden&apos;s reelection campaign.
      </Typography>
    </InsightPage>
  );
}