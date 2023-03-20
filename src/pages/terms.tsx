import Head from 'next/head';
import Container from '@mui/material/Container';
import Link from 'next/link';

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
          We operate the website{' '}
          <Link href='/'>
            jgmstrategy.com
          </Link>
          {' '}(the &quot;Site&quot;), as well as any other
          related products and services that refer or link to these legal terms (the &quot;Legal
          Terms&quot;) (collectively, the &quot;Services&quot;).
        </p>
        <p>We create strategies that deliver real-time results.</p>
        <p>
          These Legal Terms constitute a legally binding agreement made between you, whether
          personally or on behalf of an entity (&quot;you&quot;), and JGM Strategy Consulting,
          concerning your access to and use of the Services. You agree that by accessing the
          Services, you have read, understood, and agreed to be bound by all of these Legal Terms.
          IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED
          FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
        </p>
      </Container>
    </>
  );
}