import { FormEvent, useState, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import HCaptcha from '@hcaptcha/react-hcaptcha';

const CONTACT_FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSe96YmOoBiN6b5UdC5S6_TbeL7TxFrUiqVd5xj9B6ctji2iLA/formResponse';
const CONTACT_NAME = 'entry.1611799900';
const CONTACT_EMAIL = 'entry.70122695';
const CONTACT_REASON = 'entry.1147603373';
const CONTACT_MESSAGE = 'entry.1790957034';
const REASONS = [
  'New business inquiry',
  'Partner with us',
  'Press relations',
  'Speaker relations',
  'Employee relations',
  'Alumni relations',
  'Hiring and career information',
  'Technical support or incident',
  'Anything else or not listed above'
];

type TitleTextProps = {
  text: string;
};

function TitleText({ text }: TitleTextProps) {
  return (
    <Typography
      sx={{
        fontSize: 24,
        fontWeight: 550,
        paddingBottom: '1rem'
      }}
    >
      {text}
    </Typography>
  );
}

type ActionButtonProps = {
  text: string;
  href: string;
};

function humanReadableReason(reason: string) {
}

function ActionButton({ text, href }: ActionButtonProps) {
  return (
    <Link href={href}>
      <Button>
        <Stack direction='row' spacing={1}>
          <Box>
            {text}
          </Box>
          <ArrowOutwardIcon fontSize='small' />
        </Stack>
      </Button>
    </Link>
  );
}

export default function Contact() {
  const [reason, setReason] = useState('');
  const [open, setOpen] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLInputElement>(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setReason(event.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (nameRef.current == null) return;
    if (emailRef.current == null) return;
    if (messageRef.current == null) return;

    const formData = new FormData();
    formData.append(CONTACT_NAME, nameRef.current.value);
    formData.append(CONTACT_EMAIL, emailRef.current.value);
    formData.append(CONTACT_REASON, reason);
    formData.append(CONTACT_MESSAGE, messageRef.current.value);
    nameRef.current.value = '';
    emailRef.current.value = '';
    messageRef.current.value = '';
    fetch(CONTACT_FORM, {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    });

    setOpen(true);
  };

  return (
    <>
      <Head>
        <title>Contact us at JGM Strategy Consulting</title>
        <meta name='description' content='Let us know how JGM Strategy can help you' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle id='alert-dialog-title'>
            Thanks for getting in touch!
          </DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              A representative or partner at JGM Strategy will reach out to you as soon as
              possible. If you do not receive a reply within 2 business days, please feel
              free to email us.
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
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
        maxWidth='md'
        sx={{
          marginY: '4rem'
        }}
      >
        <Typography sx={{ fontSize: 28 }}>
          Thanks for getting in touch! On this page you can find our contact information, which may
          be helpful to you if you are trying to hire our expertise or for any other reason.
        </Typography>
      </Container>
      <Container
        sx={{
          paddingBottom: '3rem'
        }}
      >
        <Box sx={{
          flexGrow: 1
        }}>
          <Grid container spacing={4} columns={{ xs: 1, md: 4 }}>
            <Grid item xs={1}>
              <TitleText text='New Business' />
              <Typography sx={{ marginBottom: '1rem' }}>
                Hire us for even the most complex of cases.
              </Typography>
              <Typography sx={{ marginBottom: '1rem' }}>
                <Link href='mailto:inquries@jgmstrategy.com'>
                  inquries@jgmstrategy.com
                </Link>
              </Typography>
              <Typography>
                If email does not suit you, feel free to use the contact form at the bottom of
                the page.
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <TitleText text='Press Inquiries' />
              <Typography sx={{ marginBottom: '1rem' }}>
                We will do our best to respond to all inquiries in a timely manner.
              </Typography>
              <Typography>
                <Link href='mailto:press@jgmstrategy.com'>
                  press@jgmstrategy.com
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={1} sx={{ minHeight: 1 }}>
              <TitleText text='Careers at JGM' />
              <Typography sx={{ marginBottom: '1rem' }}>
                Make the leap into the unknown.
              </Typography>
              <Typography sx={{ marginBottom: '1rem' }}>
                <Link href='mailto:recruiting@jgmstrategy.com'>
                  recruiting@jgmstrategy.com
                </Link>
              </Typography>
              <ActionButton text='See Open Roles' href='/careers' />
            </Grid>
            <Grid item xs={1}>
              <TitleText text='Social Media' />
              <Typography sx={{ marginBottom: '1rem' }}>
                Follow us on Twitter and LinkedIn.
              </Typography>
              <Stack direction='row' spacing={1}>
                <IconButton href='https://www.twitter.com/jgmstrategy' target='_blank'>
                  <TwitterIcon />
                </IconButton>
                <IconButton href='https://www.linkedin.com/in/jgmstrategy' target='_blank'>
                  <LinkedInIcon />
                </IconButton>
              </Stack>
            </Grid>
            <Grid item xs={1}>
              <TitleText text='Alumni Relations' />
              <Typography sx={{ marginBottom: '1rem' }}>
                Former employees retain lifetime access to certain resources.
              </Typography>
              <Typography sx={{ marginBottom: '1rem' }}>
                <Link href='mailto:alumni@jgmstrategy.com'>
                  alumni@jgmstrategy.com
                </Link>
              </Typography>
              <ActionButton text='Log in to dashboard' href='' />
            </Grid>
            <Grid item xs={1}>
              <TitleText text='Questions?' />
              <Typography sx={{ marginBottom: '1rem' }}>
                Questions about the company or the website in general?
              </Typography>
              <Typography>
                <Link href='mailto:questions@jgmstrategy.com'>
                  questions@jgmstrategy.com
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <TitleText text='Technical Support' />
              <Typography>
                We provide technical support on products we have deployed for our clients. For
                more information, please get in touch with your assigned point of contact.
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <TitleText text='Security Incidents' />
              <Typography sx={{ marginBottom: '1rem' }}>
                Please let us know of any technical, security, or privacy concerns you may come
                across.
              </Typography>
              <Typography>
                <Link href='mailto:incidents@jgmstrategy.com'>
                  incidents@jgmstrategy.com
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container
        maxWidth='md'
        sx={{
          padding: '3rem'
        }}
      >
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: 500,
            paddingBottom: '1rem'
          }}
        >
          A Last Resort
        </Typography>
        <Typography>
          Can&apos;t find what you need? Feel free to fill out this form. Do note that it would be
          better for you to submit an inquiry by email so we can quickly assign you a case
          manager, however. Email us at:{' '}
          <Link href='mailto:inquries@jgmstrategy.com'>inquires@jgmstrategy.com</Link>.
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <Stack spacing={2} direction='row'>
              <TextField
                required
                id='name'
                label='Name'
                variant='standard'
                inputRef={nameRef}
              />
              <TextField
                required
                id='name'
                label='Email'
                variant='standard'
                type='email'
                inputRef={emailRef}
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
                {
                  REASONS.map((r) => (
                    <MenuItem key={r} value={r}>{r}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
            <TextField
              required
              multiline
              rows={6}
              id='name'
              label='Message'
              inputRef={messageRef}
            />
            <Typography>
              The captcha below is currently not required for form submission, so you can
              safely ignore it.
            </Typography>
            <HCaptcha
              sitekey='10000000-ffff-ffff-ffff-000000000001'
              onVerify={(token, ekey) => { return; }}
            />
            <Button variant='contained' type='submit'>Submit</Button>
          </Stack>
        </form>
      </Container>
    </>
  );
}
