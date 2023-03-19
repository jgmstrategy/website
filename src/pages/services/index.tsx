import Head from 'next/head';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default function Services() {
  return (
    <>
      <Head>
        <title>Services provided by JGM Strategy Consulting</title>
        <meta name='description' content='JGM Strategy Consulting is a logistics and premiere consulting firm. We provide leadership on strategy, logistics, and operations across all industries.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navigation />
      <Footer />
    </>
  );
}