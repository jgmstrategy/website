import '@/styles/globals.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import type { AppProps } from 'next/app';

import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
