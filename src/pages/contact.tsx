import Head from 'next/head';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact us at JGM Strategy Consulting</title>
        <meta name='description' content='Let us know how JGM Strategy can help you' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Container
        sx={{
          paddingTop: '2rem'
        }}
      >
        <Typography
          sx={{
            fontSize: 14,
            marginLeft: '0.25rem',
            marginBottom: '-0.5rem'
          }}
        >
          LET&apos;S GET IN TOUCH
        </Typography>
        <Typography
          sx={{
            fontSize: 54,
            fontWeight: 500
          }}
        >
          Contact Us
        </Typography>
      </Container>
      <Container
        sx={{
          paddingTop: '4rem',
          paddingBottom: '4rem'
        }}
      >
        <p>
          We hope to display a short paragraph here soon summarizing why you might want
          to contact us
        </p>
      </Container>
      <Container>
        <Box sx={{
          flexGrow: 1
        }}>
          <Grid container spacing={4} columns={{ xs: 1, md: 4 }}>
            <Grid item xs={1}>
              We hope to display something here soon for new business
            </Grid>
            <Grid item xs={1}>
              We hope to display something here soon for press inquiries
            </Grid>
            <Grid item xs={1}>
              We hope to display something here soon for jobs
            </Grid>
            <Grid item xs={1}>
              We hope to display something here soon for social media
            </Grid>
            <Grid item xs={1}>
              We hope to display something here soon for alumni relations
            </Grid>
            <Grid item xs={1}>
              We hope to display something here soon for website questions
            </Grid>
            <Grid item xs={1}>
              We hope to display something here soon for technical support
            </Grid>
            <Grid item xs={1}>
              We hope to display something here soon for security incidents
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container
        sx={{
          padding: '3rem'
        }}
      >
        <p>We hope to display a contact form here soon</p>
      </Container>
    </>
  );
}
