import Head from 'next/head';
import Container from '@mui/material/Container';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms and Conditions</title>
        <meta name='description' content='' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Container sx={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
        <h1>Terms of Use</h1>
        <p><i>Last updated March 09, 2023.</i></p>
        <h2>AGREEMENT TO OUR LEGAL TERMS</h2>
        <p>
          We are JGM Strategy Consulting (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot;
          &quot;our&quot;).
        </p>
        <p>
          We operate the website jgmstrategy.com (the &quot;Site&quot;), as well as any other
          related products and services that refer or link to these legal terms (the &quot;Legal
          Terms&quot;) (collectively, the &quot;Services&quot;).
        </p>
      </Container>
    </>
  );
}