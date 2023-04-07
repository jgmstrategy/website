import {
  FormEvent,
  useRef,
  useState
} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBFooter,
  MDBIcon,
  MDBInput,
  MDBRow,
} from 'mdb-react-ui-kit';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const EMAIL_FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSfFPzrarHsZid29fCHc98VKfCPC5x21htyO2gOklX6mDw78nQ/formResponse';
const EMAIL_NAME = 'entry.701359486';

export default function Footer() {
  const emailRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (emailRef.current == null) {
      return;
    }

    const formData = new FormData();
    formData.append(EMAIL_NAME, emailRef.current.value);
    emailRef.current.value = '';
    fetch(EMAIL_FORM, {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    });

    setOpen(true);
  };

  return (
    <>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle id='alert-dialog-title'>
            Thanks for signing up!
          </DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              We will update you with regular insights as soon as they are released. For now,
              please check your inbox for an email confirmation.
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
      <MDBFooter className='text-center' color='white' bgColor='dark'>
        <MDBContainer className='p-4'>
          <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
            <div>
              <Link href='/'>
                <Image
                  src='/logo_white.png'
                  alt=''
                  height={30}
                  width={153}
                />
              </Link>
            </div>
            <div>
              <Link
                href='https://twitter.com/JGMStrategy'
                className='me-4 text-reset'
                target='_blank'
              >
                <MDBIcon fab icon='twitter' />
              </Link>
              <Link
                href='https://www.linkedin.com/company/jgmstrategy'
                className='me-4 text-reset'
                target='_blank'
              >
                <MDBIcon fab icon='linkedin' />
              </Link>
              <Link
                href='https://github.com/jgmstrategy'
                className='me-4 text-reset'
                target='_blank'
              >
                <MDBIcon fab icon='github' />
              </Link>
            </div>
          </section>

          <section className='mt-4'>
            <form onSubmit={handleSubmit}>
              <MDBRow className='d-flex justify-content-center'>
                <MDBCol size='auto'>
                  <p className='pt-2'>
                    <strong>Stay ahead of the curve with our regular insights.</strong>
                  </p>
                </MDBCol>

                <MDBCol md='5' start>
                  <MDBInput
                    contrast
                    required
                    ref={emailRef}
                    name='email'
                    type='email'
                    label='Email address'
                    className='mb-4'
                  />
                </MDBCol>

                <MDBCol size='auto'>
                  <MDBBtn outline color='light' type='submit' className='mb-4'>
                    Subscribe
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
          </section>

          <div className='mb-8' />

          <section>
            <MDBRow>
              <div>
                <Link href='/contact' className='text-white me-4'>
                  Contact us
                </Link>
                <Link href='/sustainability' className='text-white me-4'>
                  Sustainability
                </Link>
                <Link href='/accessibility' className='text-white me-4'>
                  Accessibility statement
                </Link>
                <Link href='/terms' className='text-white me-4'>
                  Terms of use
                </Link>
                <Link href='/privacy' className='text-white me-4'>
                  Privacy policy
                </Link>
                <Link href='/dashboard/login' className='text-white me-4'>
                  Dashboard
                </Link>
              </div>
            </MDBRow>
          </section>
        </MDBContainer>

        <div className='p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          &copy; 2023{' '}
          <Link className='text-white' href='/'>
            JGM Strategy Consulting
          </Link>
        </div>
      </MDBFooter>
    </>
  );
}