import Head from 'next/head';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import JobApplicationForm from '../../components/JobApplicationForm';

export default function MarketingInternJobPosting() {
  return (
    <>
      <Head>
        <title>Marketing Intern Job Posting</title>
        <meta name='description' content='Let us design together at JGM Strategy' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Container maxWidth='md' sx={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <p style={{ textAlign: 'center' }}>Design at JGM Strategy</p>
        <h1 style={{ textAlign: 'center', paddingBottom: '1rem' }}>Marketing Intern</h1>
        <p style={{ textAlign: 'center' }}>
          <LocationOnIcon sx={{ margin: 'auto' }} /> Remote
        </p>
        <Divider variant='middle' sx={{ marginTop: '1rem', marginBottom: '2rem' }} />
        <div className='d-flex justify-content-center mb-4'>
          <Link href='/careers'>
            <Button variant='text' size='large' sx={{ marginRight: '1rem' }}>
              <ChevronLeftIcon />
              Return to Careers
            </Button>
          </Link>
          <Button variant='outlined' size='large' sx={{ marginLeft: '1rem' }} href='#application'>
            <ExpandMoreIcon />
            Jump to Application
          </Button>
        </div>
        <p><em>This internship position is unpaid.</em></p>
        <p>
          Come make a difference on a global team of motivated, creative, and amazing people. You
          will have the opportunity to shine and share your knowledge, energy, and passion on real
          impact.
        </p>
        <p>
          You will get maximum experience and exposure in your desired field and get the
          opportunity to learn more about us, network with leadership, and develop the skills
          necessary to succeed in a career in marketing and consulting. We are supercharged with
          the best, brightest, and innovative minds on the planet and it will be a pleasure working
          alongside everyone.
        </p>
        <h3>Qualifications</h3>
        <ul>
          <li>
            Currently enrolled in a Bachelor&apos;s degree program in Marketing or Economics.
          </li>
          <li>
            Strong written and verbal communication skills.
          </li>
          <li>
            Strong organizational, problem solving and analytical skills.
          </li>
          <li>
            Excellent interpersonal skills.
          </li>
          <li>
            Ability to work independently and as part of a team.
          </li>
        </ul>
        <p><em>This internship position is unpaid.</em></p>
        <Divider variant='middle' sx={{ marginTop: '1rem', marginBottom: '2rem' }} />
        <h3 style={{ marginBottom: '3rem' }} id='application'>Application</h3>
        <JobApplicationForm />
      </Container>
    </>
  );
}