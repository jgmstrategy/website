import Head from 'next/head';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import JobApplicationForm from '../../components/JobApplicationForm';

export default function SoftwareEngineerJobPosting() {
  return (
    <>
      <Head>
        <title>Software Engineer Job Posting</title>
        <meta name='description' content='Let us do engineering together at JGM Strategy' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Container maxWidth='md' sx={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <p style={{ textAlign: 'center' }}>Engineering at JGM Strategy</p>
        <h1 style={{ textAlign: 'center', paddingBottom: '1rem' }}>Software Engineer</h1>
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
          You will work closely with our team to design, develop, and improve products either
          internally at JGM Strategy or for projects and casework. You will have an opportunity to
          work with frontier technology in autonomous robotics, logistics, and planning software.
          You will be an essential part of our team and innovate rapidly.
        </p>
        <p>
          Bring your software engineering skills to the max at JGM Strategy. We have many projects
          to work on depending on your skillset, including internal infrastructure, fullstack
          development, data warehousing, artificial intelligence, autonomous robotics, and more.
          Client projects also wildly vary and often require an array of skills.
        </p>
        <h3>Responsibilities</h3>
        <ul>
          <li>
            Develop and maintain software applications to support our project.
          </li>
          <li>
            Collaborate with the senior team to develop and implement project plans.
          </li>
          <li>
            Participate in team meetings and presentations.
          </li>
          <li>
            Perform other duties as assigned.
          </li>
        </ul>
        <h3>Qualifications</h3>
        <ul>
          <li>
            Bachelor&apos;s degree in Computer Science, Electrical Engineering, or related field.
          </li>
          <li>
            Strong programming skills in C++, Python, Java, or JavaScript.
          </li>
          <li>
            Experience with software development methodologies such as Agile or Scrum.
          </li>
          <li>
            Excellent communication and interpersonal skills.
          </li>
          <li>
            Ability to work independently and as part of a team.
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