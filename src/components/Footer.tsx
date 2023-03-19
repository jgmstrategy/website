import React, { FormEvent, useRef } from 'react';
import Image from 'next/image';

import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBFooter,
  MDBIcon,
  MDBInput,
  MDBRow,
} from 'mdb-react-ui-kit';
import Link from 'next/link';

const emailForm = 'https://docs.google.com/forms/u/3/d/e/1FAIpQLSfFPzrarHsZid29fCHc98VKfCPC5x21htyO2gOklX6mDw78nQ/formResponse';
const emailName = 'entry.701359486';

type FooterParams = {
  setEmailConfirm: (_: boolean) => void;
};

export default function Footer({ setEmailConfirm }: FooterParams) {
  const emailRef = useRef<HTMLInputElement>(null);

  const onSubmit = function (e: FormEvent) {
    e.preventDefault();

    if (emailRef.current == null) {
      return;
    }

    let formData = new FormData();
    formData.append(emailName, emailRef.current.value);
    emailRef.current.value = '';
    fetch(emailForm, {
      method: 'POST',
      body: formData,
    });

    setEmailConfirm(true);
  };

  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div>
            <Image
              src='/logo_white.png'
              alt=''
              height={30}
              width={153}
            />
          </div>
          <div>
            <a
              href='https://twitter.com/JGMStrategy'
              className='me-4 text-reset'
              target='_blank'
            >
              <MDBIcon fab icon='twitter' />
            </a>
            <a
              href='https://www.linkedin.com/company/jgmstrategy'
              className='me-4 text-reset'
              target='_blank'
            >
              <MDBIcon fab icon='linkedin' />
            </a>
            <a
              href='https://github.com/jgmstrategy'
              className='me-4 text-reset'
              target='_blank'
            >
              <MDBIcon fab icon='github' />
            </a>
          </div>
        </section>

        <section className='mt-4'>
          <form onSubmit={onSubmit}>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size='auto'>
                <p className='pt-2'>
                  <strong>Stay ahead of the curve with our regular insights.</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput
                  contrast
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
  );
}