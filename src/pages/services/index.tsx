import Head from 'next/head';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

type servicesType = {
  name: string;
  href: string;
  desc: string;
};

const services = [
  {
    name: 'Digital Media',
    href: '/services/digital',
    desc: 'foo'
  },
  {
    name: 'Logistics',
    href: '/services/logistics',
    desc: 'foo'
  },
  {
    name: 'Modernization',
    href: '/services/modernization',
    desc: 'foo'
  },
  {
    name: 'Operations',
    href: '/services/operations',
    desc: 'foo'
  },
];

function ServicesBox({ name, href, desc }: servicesType) {
  return (
    <Link href={href}>
      <Paper sx={{ padding: '1rem', margin: '1rem' }}>
        <p>{name}</p>
        <p>{desc}</p>
      </Paper>
    </Link>
  );
}

export default function Services() {
  return (
    <>
      <Head>
        <title>Services provided by JGM Strategy Consulting</title>
        <meta name='description' content='' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Container maxWidth='md' sx={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
        <h1>Services</h1>
        <p>
          We focus on what matters most - and that means putting your best foot forward across
          every opportunity available to us. With expertise in almost every field, we partner
          with you to bring the world of tomorrow to today.
        </p>
        <h3 style={{ textAlign: 'center', marginTop: '3rem' }}>See Our Capabilities</h3>
        <p style={{ textAlign: 'center' }}><em>Questions? Feel free to reach out.</em></p>
        <Divider variant='middle' sx={{ marginTop: '1rem', marginBottom: '1rem' }} />
        <Box sx={{ flexGrow: 1, marginBottom: '2rem' }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{
              paddingTop: '2rem'
            }}
          >
            {
              services.map((industry) => ServicesBox(industry))
            }
          </Grid>
        </Box>
      </Container>
    </>
  );
}