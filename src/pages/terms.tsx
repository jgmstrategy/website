import Head from 'next/head';
import Link from 'next/link';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
        <h2>Agreement to Our Legal Terms</h2>
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
        <p>
          Supplemental terms and conditions or documents that may be posted on the Services from
          time to time are hereby expressly incorporated herein by reference. We reserve the right,
          in our sole discretion, to make changes or modifications to these Legal Terms from time
          to time. We will alert you about any changes by updating the &quot;Last updated&quot;
          date of these Legal Terms, and you waive any right to receive specific notice of each
          such change. It is your responsibility to periodically review these Legal Terms to stay
          informed of updates. You will be subject to, and will be deemed to have been made aware
          of and to have accepted, the changes in any revised Legal Terms by your continued use of
          the Services after the date such revised Legal Terms are posted.
        </p>
        <p>
          The Services are intended for users who are at least 18 years old. Persons under the age
          of 18 are not permitted to use or register for the Services.
        </p>
        <h2>Table of Contents</h2>
        <p>Please click on each item to expand and view details.</p>
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='our-services-content'
              id='our-services-header'
            >
              <Typography sx={{ fontWeight: 600 }}>1. Our Services</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                The information provided when using the Services is not intended for distribution
                to or use by any person or entity in any jurisdiction or country where such
                distribution or use would be contrary to law or regulation or which would subject
                us to any registration requirement within such jurisdiction or country. Accordingly,
                those persons who choose to access the Services from other locations do so on their
                own initiative and are solely responsible for compliance with local laws, if and to
                the extent local laws are applicable.
              </Typography>
              <Typography sx={{ paddingBottom: '1rem' }}>
                The Services are not tailored to comply with industry-specific regulations (Health
                Insurance Portability and Accountability Act (HIPAA), Federal Information Security
                Management Act (FISMA), etc.), so if your interactions would be subjected to such
                laws, you may not use the Services. You may not use the Services in a way that
                would violate the Gramm-Leach-Bliley Act (GLBA).
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='ip-content'
              id='ip-header'
            >
              <Typography sx={{ fontWeight: 600 }}>2. Intellectual Property Rights</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontWeight: 500, paddingBottom: '1rem' }}>
                Our intellectual property
              </Typography>
              <Typography sx={{ paddingBottom: '1rem' }}>
                We are the owner or the licensee of all intellectual property rights in our
                Services, including all source code, databases, functionality, software, website
                designs, audio, video, text, photographs, and graphics in the Services
                (collectively, the &quot;Content&quot;), as well as the trademarks, service marks,
                and logos contained therein (the &quot;Marks&quot;).
              </Typography>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Our Content and Marks are protected by copyright and trademark laws (and various
                other intellectual property rights and unfair competition laws) and treaties in
                the United States and around the world.
              </Typography>
              <Typography sx={{ paddingBottom: '1rem' }}>
                The Content and Marks are provided in or through the Services &quot;AS IS&quot; for
                your personal, non-commercial use or internal business purpose only.
              </Typography>
              <Typography sx={{ fontWeight: 500, paddingBottom: '1rem' }}>
                Your use of our Services
              </Typography>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Subject to your compliance with these Legal Terms, including the &quot;PROHIBITED
                ACTIVITIES&quot; section below, we grant you a non-exclusive, non-transferable,
                revocable license to:
              </Typography>
              <ul>
                <li>access the Services; and</li>
                <li>
                  download or print a copy of any portion of the Content to which you have properly
                  gained access.
                </li>
                <li>solely for your personal, non-commercial use or internal business purpose.</li>
              </ul>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Except as set out in this section or elsewhere in our Legal Terms, no part of the
                Services and no Content or Marks may be copied, reproduced, aggregated, republished,
                uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed,
                sold, licensed, or otherwise exploited for any commercial purpose whatsoever,
                without our express prior written permission.
              </Typography>
              <Typography sx={{ paddingBottom: '1rem' }}>
                If you wish to make any use of the Services, Content, or Marks other than as set
                out in this section or elsewhere in our Legal Terms, please address your request
                to:{' '}
                <a href='mailto:contact@jgmstrategy.com'>
                  contact@jgmstrategy.com
                </a>
                . If we ever grant you the permission to post, reproduce, or publicly display
                any part of our Services or Content, you must identify us as the owners or
                licensors of the Services, Content, or Marks and ensure that any copyright or
                proprietary notice appears or is visible on posting, reproducing, or displaying
                our Content.
              </Typography>
              <Typography sx={{ paddingBottom: '1rem' }}>
                We reserve all rights not expressly granted to you in and to the Services,
                Content, and Marks.
              </Typography>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Any breach of these Intellectual Property Rights will constitute a material
                breach of our Legal Terms and your right to use our Services will terminate
                immediately.
              </Typography>
              <Typography sx={{ fontWeight: 500, paddingBottom: '1rem' }}>
                Your submissions
              </Typography>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Please review this section and the &quot;PROHIBITED ACTIVITIES&quot; section
                carefully prior to using our Services to understand the (a) rights you give us
                and (b) obligations you have when you post or upload any content through the
                Services.
              </Typography>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Submissions: By directly sending us any question, comment, suggestion, idea,
                feedback, or other information about the Services (&quot;Submissions&quot;), you
                agree to assign to us all intellectual property rights in such Submission. You
                agree that we shall own this Submission and be entitled to its unrestricted use
                and dissemination for any lawful purpose, commercial or otherwise, without
                acknowledgment or compensation to you.
              </Typography>
              <Typography sx={{ paddingBottom: '1rem' }}>
                You are responsible for what you post or upload: By sending us Submissions through
                any part of the Services you:
              </Typography>
              <ul>
                <li>
                  confirm that you have read and agree with our &quot;PROHIBITED ACTIVITIES&quot;
                  and will not post, send, publish, upload, or transmit through the Services any
                  Submission that is illegal, harassing, hateful, harmful, defamatory, obscene,
                  bullying, abusive, discriminatory, threatening to any person or group, sexually
                  explicit, false, inaccurate, deceitful, or misleading;
                </li>
                <li>
                  to the extent permissible by applicable law, waive any and all moral rights to
                  any such Submission;
                </li>
                <li>
                  warrant that any such Submission are original to you or that you have the
                  necessary rights and licenses to submit such Submissions and that you have full
                  authority to grant us the above-mentioned rights in relation to your Submissions;
                  and
                </li>
                <li>
                  warrant and represent that your Submissions do not constitute confidential
                  information.
                </li>
                <li>
                  You are solely responsible for your Submissions and you expressly agree to
                  reimburse us for any and all losses that we may suffer because of your breach of
                  (a) this section, (b) any third party’s intellectual property rights, or (c)
                  applicable law.
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2a-content'
              id='panel2a-header'
            >
              <Typography sx={{ fontWeight: 600 }}>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2a-content'
              id='panel2a-header'
            >
              <Typography sx={{ fontWeight: 600 }}>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2a-content'
              id='panel2a-header'
            >
              <Typography sx={{ fontWeight: 600 }}>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2a-content'
              id='panel2a-header'
            >
              <Typography sx={{ fontWeight: 600 }}>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2a-content'
              id='panel2a-header'
            >
              <Typography sx={{ fontWeight: 600 }}>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2a-content'
              id='panel2a-header'
            >
              <Typography sx={{ fontWeight: 600 }}>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2a-content'
              id='panel2a-header'
            >
              <Typography sx={{ fontWeight: 600 }}>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2a-content'
              id='panel2a-header'
            >
              <Typography sx={{ fontWeight: 600 }}>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2a-content'
              id='panel2a-header'
            >
              <Typography sx={{ fontWeight: 600 }}>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2a-content'
              id='panel2a-header'
            >
              <Typography sx={{ fontWeight: 600 }}>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2a-content'
              id='panel2a-header'
            >
              <Typography sx={{ fontWeight: 600 }}>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2a-content'
              id='panel2a-header'
            >
              <Typography sx={{ fontWeight: 600 }}>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2a-content'
              id='panel2a-header'
            >
              <Typography sx={{ fontWeight: 600 }}>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2a-content'
              id='panel2a-header'
            >
              <Typography sx={{ fontWeight: 600 }}>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2a-content'
              id='panel2a-header'
            >
              <Typography sx={{ fontWeight: 600 }}>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2a-content'
              id='panel2a-header'
            >
              <Typography sx={{ fontWeight: 600 }}>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2a-content'
              id='panel2a-header'
            >
              <Typography sx={{ fontWeight: 600 }}>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2a-content'
              id='panel2a-header'
            >
              <Typography sx={{ fontWeight: 600 }}>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2a-content'
              id='panel2a-header'
            >
              <Typography sx={{ fontWeight: 600 }}>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2a-content'
              id='panel2a-header'
            >
              <Typography sx={{ fontWeight: 600 }}>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2a-content'
              id='panel2a-header'
            >
              <Typography sx={{ fontWeight: 600 }}>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2a-content'
              id='panel2a-header'
            >
              <Typography sx={{ fontWeight: 600 }}>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2a-content'
              id='panel2a-header'
            >
              <Typography sx={{ fontWeight: 600 }}>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Container>
    </>
  );
}