import Typography from '@mui/material/Typography';

import InsightPage from '../../components/InsightPage';

export default function DebtCeilingLimit() {
  return (
    <InsightPage
      title='May Jobs Report: Surpassing Expectations but Unemployment Rises, Mixed Bag of Labor Market Trends'
      image='https://cdn.shopify.com/s/files/1/0746/2561/files/wall_street_1920_large.jpg'
      description='As jobs outlook rises, the unemployment rate is rising too.'
      subheader='Jobs Insight'
      authors={
        [
          'Jason Estabillo'
        ]
      }
    >
      <Typography sx={{ paddingY: '1rem' }}>
        According to the Bureau of Labor Statistics&apos; monthly employment
        report, employers added 339,000 jobs in May, surpassing economists&apos;
        expectations of 190,000 jobs. This represents an acceleration from
        April&apos;s revised job gains of 294,000.
      </Typography>
      <Typography sx={{ paddingTop: '1rem' }}>
        The unemployment rate also rose unexpectedly from 3.4% to 3.7%,
        which was the largest monthly increase since the early days of the
        pandemic. The increase in unemployment was driven by people who lost
        their jobs permanently and those who completed temporary positions.
        The labor force participation rate remained steady, while the prime
        age participation rate increased to its highest level since January
        2007. The data also suggests that it may be taking longer for
        people to find work, as the number of people unemployed for 15 to
        26 weeks increased by 179,000. Wage growth slightly cooled down in May
        compared to April.
      </Typography>
      <Typography sx={{ paddingTop: '1rem' }}>
        Overall, the May jobs report was considered a mixed bag, indicating
        both positive and negative trends in the labor market. The job gains
        were broad-based, with notable increases in professional and business
        services, government, health care, leisure and hospitality, construction,
        and transportation and warehousing.
      </Typography>
      <Typography sx={{ paddingTop: '1rem' }}>
        Despite the mixed data, the US economy has not experienced a month of
        job losses since December 2020. The job growth in 2023, although lower
        than in 2021 and 2022, remains elevated compared to pre-pandemic times.
        The report also highlights efforts by employers to fill employment gaps
        through expanded outreach and targeting non-traditional applicants.
      </Typography>
      <Typography sx={{ paddingTop: '1rem' }}>
        The interpretation of the jobs report is challenging due to discrepancies
        between the surveys used to gather employment data. The report&apos;s mixed
        nature further complicates the Federal Reserve&apos;s decision-making process
        regarding interest rates. While it may provide justification for the Fed
        to maintain its current policy, a resumption of rate hikes in July is
        seen as a strong possibility if job growth does not significantly slow down
        in June. The markets anticipate a potential pause in June but expect a rate hike in July.
      </Typography>
    </InsightPage>
  );
}