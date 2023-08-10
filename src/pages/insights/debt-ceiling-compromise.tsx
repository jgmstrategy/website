import Typography from '@mui/material/Typography';

import InsightPage from '../../components/InsightPage';

export default function DebtCeilingCompromise() {
  return (
    <InsightPage
      title='Compromise Agreement on Debt Ceiling'
      image='https://portal.ehawaii.gov/assets/webp/page/government/federal/executive.webp'
      description='White House and Congress Near Compromise Agreement on Debt Ceiling as Deadline Looms'
      subheader='Political Insight'
      authors={
        [
          'Jason Estabillo'
        ]
      }
    >
      <Typography sx={{ paddingY: '1rem' }}>
        Negotiations between the White House and congressional lawmakers are
        intensifying as the deadline to raise the debt ceiling approaches. With
        just six days remaining before the nation faces the risk of debt default,
        both sides are closing in on a compromise agreement to extend the debt
        ceiling for a two-year period.
      </Typography>
      <Typography sx={{ paddingTop: '1rem' }}>
        The prospect of a deal has injected optimism into the markets, leading
        to a rise in stocks on Friday morning. Meeting the Treasury Department&apos;s
        June 1 deadline is crucial to avoid potential damage to the U.S. economy
        and the jeopardy of essential benefits relied upon by millions of Americans.
      </Typography>
      <Typography sx={{ paddingTop: '1rem' }}>
        House Speaker Kevin McCarthy, appearing upbeat, expressed confidence in
        the progress made so far as he arrived at the Capitol on Friday morning.
        Negotiators have been striving to strike a balance that would appease both
        parties. Under the current proposed agreement, House Republicans would
        achieve two of their top priorities in exchange for their support in
        raising the debt ceiling.
      </Typography>
      <Typography sx={{ paddingTop: '1rem' }}>
        The first priority for Republicans is to roll back baseline federal
        spending for most discretionary programs in 2024. Additionally, they
        seek to rescind a portion of the $80 billion allocated for the Internal
        Revenue Service (IRS) as part of the 2022 Inflation Reduction Act.
        By reallocating the rescinded IRS funds, the GOP aims to cover the funding
        shortfall resulting from their proposed spending cuts, while ensuring
        that programs like defense and veterans&apos; health benefits remain untouched
        and even receive increased funding next year.
      </Typography>
      <Typography sx={{ paddingTop: '1rem' }}>
        While specific details are still being worked out, the trade-off
        involving IRS funding is considered a crucial element of the negotiations.
        House Republicans, led by Representatives Patrick McHenry and Garret
        Graves, are working closely with the White House team, including Office
        of Management and Budget Director Shalanda Young and Biden counselor Steve
        Ricchetti, to navigate the challenging path towards a bipartisan solution.
      </Typography>
      <Typography sx={{ paddingTop: '1rem' }}>
        The urgency of the situation was underscored by the recent announcement
        from credit rating agency Fitch, which placed the United States&apos;
        triple-A status on &quot;rating watch negative.&quot; Treasury Secretary
        Janet Yellen warned that failure to raise or suspend the debt limit by
        June 1 would likely result in the United States being unable to meet
        its financial obligations. The potential consequences of a debt default
        range from higher interest rates to a loss of confidence in the U.S.
        dollar as the world&apos;s reserve currency.
      </Typography>
      <Typography sx={{ paddingTop: '1rem' }}>
        Despite the challenges, there is still hope for a timely resolution. If
        a final agreement is reached on Friday, there would be sufficient time for
        the House to hold a vote on Tuesday, followed by a Senate vote on
        Wednesday, just before the June 1 deadline. However, given the divided
        nature of Congress, it is expected that the final bill may not garner
        unanimous support from both Democrats and Republicans.
      </Typography>
      <Typography sx={{ paddingTop: '1rem' }}>
        As the negotiations continue, it is clear that compromises will need
        to be made on both sides. House Speaker McCarthy acknowledged that not
        everyone would be pleased with the final outcome, emphasizing that the
        legislative process operates in such a manner.
      </Typography>
      <Typography sx={{ paddingTop: '1rem' }}>
        As the situation unfolds, further updates will be provided.
      </Typography>
    </InsightPage>
  );
}