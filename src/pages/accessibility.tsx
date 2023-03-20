import Head from 'next/head';
import Image from 'next/image';
import Container from '@mui/material/Container';
import ClientCareerDoubleBox from '@/components/ClientCareerDoubleBox';

export default function Accessibility() {
  return (
    <>
      <Head>
        <title>Equity and diversity at JGM Strategy Consulting</title>
        <meta name='description' content='JGM Strategy ensures that our tools are accessible to all' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className='bg-image' style={{ height: '15rem', overflow: 'hidden' }}>
        <Image
          src='/accessibility.jpg'
          alt=''
          style={{ objectFit: 'cover' }}
          fill
        />
      </div>
      <Container maxWidth='md' sx={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
        <h1>Accessibility Statement</h1>
        <p>
          JGM Strategy recognizes that in the modern world, digital accessibility is not only
          important but necessary. We are committed to ensuring that our services are accessible
          to all individuals, including those with disabilities. To achieve this, we follow
          accessibility standards and guidelines, and continuously evaluate and improve our digital
          properties to ensure that they are optimized for accessibility.
        </p>
        <p>We believe that digital accessibility is not only a social responsibility but also a
          business opportunity. By designing our services with accessibility in mind, we can
          increase our reach and impact, and create more inclusive solutions that benefit everyone.
          Our commitment to digital accessibility reflects our values and mission of creating
          positive change through innovation and collaboration.
        </p>
        <p>
          We want to hear from you if you think we haven&apos;t achieved this. Please get in contact
          with us at{' '}
          <a href='mailto:accessibility@jgmstrategy.com'>
            accessibility@jgmstrategy.com
          </a>
          {' '}and let us know how we are doing.
        </p>
      </Container>
      <ClientCareerDoubleBox />
    </>
  );
}