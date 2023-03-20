import Head from 'next/head';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import JobApplicationForm from '../../components/JobApplicationForm';

export default function AssociateJobPosting() {
  return (
    <>
      <Head>
        <title>Associate Job Posting</title>
        <meta name='description' content='Let us do consulting together at JGM Strategy' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Container maxWidth='md' sx={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <p style={{ textAlign: 'center' }}>Consulting at JGM Strategy</p>
        <h1 style={{ textAlign: 'center', paddingBottom: '1rem' }}>Associate</h1>
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
        <p>
          We are looking for a highly motivated associate to join JGM Strategy. You will be
          responsible for supporting the right teams and cases in delivering high-quality
          consulting services to our clients. The ideal candidate will have a strong work ethic,
          excellent communication skills, and a passion for learning.
        </p>
        <p>
          Associates are not expected to understand or know exact engineering skills, but they
          should be able to interpret project plans and figure out the needs of the client. They
          will also be expected to communicate these needs to internal engineering teams.
        </p>
        <h3>Responsibilities</h3>
        <ul>
          <li>
            Conduct research and analysis to support the senior team in delivering high-quality
            consulting services to our clients.
          </li>
          <li>
            Assist in the development of client presentations and reports.
          </li>
          <li>
            Participate in client meetings and presentations.
          </li>
          <li>
            Collaborate with the senior team to develop and implement project plans.
          </li>
        </ul>
        <h3>Qualifications</h3>
        <ul>
          <li>
            Bachelor&apos;s degree in Business Administration, Economics, or related field.
          </li>
          <li>
            Strong analytical and problem-solving skills.
          </li>
          <li>
            Excellent communication and interpersonal skills.
          </li>
          <li>
            Ability to work independently and as part of a team.
          </li>
          <li>
            Proficiency in Microsoft Office Suite.
          </li>
        </ul>
        <p><em>The salary range for this position is $60,000 to $200,000.</em></p>
        <Divider variant='middle' sx={{ marginTop: '1rem', marginBottom: '2rem' }} />
        <h3 style={{ marginBottom: '3rem' }} id='application'>Application</h3>
        <JobApplicationForm />
      </Container>
    </>
  );
}