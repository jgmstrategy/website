import { useState, SyntheticEvent } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Careers() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      <Head>
        <title>Work at JGM Strategy Consulting</title>
        <meta name='description' content='Come work with us on building the next generation' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className='bg-image' style={{ height: '25rem', overflow: 'hidden' }}>
        <Image
          src='/discs.jpg'
          alt=''
          style={{ objectFit: 'cover' }}
          fill
        />
        <div className='mask'>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <Typography
              sx={{
                color: 'white',
                fontWeight: 600,
                fontSize: 48,
                textAlign: 'center'
              }}
            >
              Join us. Build a brighter tomorrow.
            </Typography>
          </div>
        </div>
      </div>
      <Container maxWidth='md' sx={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
        <h3>Your next career move starts here.</h3>
        <p style={{ paddingBottom: '1rem' }}><i>Achieving a little bit of everything.</i></p>
        <h3>Open Roles</h3>
        <div style={{ paddingBottom: '2rem' }}>
          <Accordion expanded={expanded === 'associate'} onChange={handleChange('associate')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='associate-content'
              id='associate-header'
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Associate
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Work directly on the world&apos;s top cases
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Short job description goes here
              </Typography>
              <Stack spacing={2} direction='row'>
                <Link href=''>
                  <Button variant='contained'>Apply Now</Button>
                </Link>
                <Link href=''>
                  <Button variant='text'>Refer a Friend</Button>
                </Link>
              </Stack>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'analyst'} onChange={handleChange('analyst')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='analyst-content'
              id='analyst-header'
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Business Analyst
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Present projects. Make change.
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Short job description goes here
              </Typography>
              <Stack spacing={2} direction='row'>
                <Link href=''>
                  <Button variant='contained'>Apply Now</Button>
                </Link>
                <Link href=''>
                  <Button variant='text'>Refer a Friend</Button>
                </Link>
              </Stack>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'swe'} onChange={handleChange('swe')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='swe-content'
              id='swe-header'
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Software Engineer
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Introduce the next generation of technology
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Short job description goes here
              </Typography>
              <Stack spacing={2} direction='row'>
                <Link href=''>
                  <Button variant='contained'>Apply Now</Button>
                </Link>
                <Link href=''>
                  <Button variant='text'>Refer a Friend</Button>
                </Link>
              </Stack>
            </AccordionDetails>
          </Accordion>
        </div>
        <h3>Open Internships</h3>
        <div>
          <Accordion expanded={expanded === 'associate_intern'} onChange={handleChange('associate_intern')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='associate_intern-content'
              id='associate_intern-header'
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Associate Intern
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                See how casework is built from the ground up
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Short job description goes here
              </Typography>
              <Stack spacing={2} direction='row'>
                <Link href=''>
                  <Button variant='contained'>Apply Now</Button>
                </Link>
                <Link href=''>
                  <Button variant='text'>Refer a Friend</Button>
                </Link>
              </Stack>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'swe_intern'} onChange={handleChange('swe_intern')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='swe_intern-content'
              id='swe_intern-header'
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Software Engineer Intern
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Build technology for important projects
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Short job description goes here
              </Typography>
              <Stack spacing={2} direction='row'>
                <Link href=''>
                  <Button variant='contained'>Apply Now</Button>
                </Link>
                <Link href=''>
                  <Button variant='text'>Refer a Friend</Button>
                </Link>
              </Stack>
            </AccordionDetails>
          </Accordion>
        </div>
      </Container>
    </>
  );
}