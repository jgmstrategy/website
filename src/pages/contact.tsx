import { useState } from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import HCaptcha from '@hcaptcha/react-hcaptcha';

export default function Contact() {
  const [reason, setReason] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setReason(event.target.value);
  };

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
        <p>We hope to have this form formatted soon.</p>
        <Box component='form'>
          <Stack spacing={2}>
            <Stack spacing={2} direction='row'>
              <TextField
                required
                id='name'
                label='Name'
                variant='standard'
              />
              <TextField
                required
                id='name'
                label='Email'
                variant='standard'
                type='email'
              />
            </Stack>
            <FormControl required variant='standard' sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id='contact-reason-label'>Reason for Contact</InputLabel>
              <Select
                labelId='contact-reason-label'
                id='contact-reason'
                value={reason}
                onChange={handleChange}
                label='Reason for Contact'
              >
                <MenuItem value='new_business'>New business inquiry</MenuItem>
                <MenuItem value='partner'>Partner with us</MenuItem>
                <MenuItem value='press'>Press relations</MenuItem>
                <MenuItem value='speaker'>Speaker relations</MenuItem>
                <MenuItem value='employee'>Employee relations</MenuItem>
                <MenuItem value='alumni'>Alumni relations</MenuItem>
                <MenuItem value='hr'>Hiring and career information</MenuItem>
                <MenuItem value='support'>Technical support or incident</MenuItem>
              </Select>
            </FormControl>
            <TextField
              required
              multiline
              rows={6}
              id='name'
              label='Message'
            />
            <p>Captcha is currently not required for form submission, but will be enabled soon</p>
            <HCaptcha
              sitekey='10000000-ffff-ffff-ffff-000000000001'
              onVerify={(token, ekey) => { return; }}
            />
            <Button variant='contained'>Submit</Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
