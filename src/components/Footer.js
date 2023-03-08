import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

import Logo from '../images/text_white.png';

function Footer() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div>
          <img
            src={Logo}
            height='30'
            alt='JGM Strategy Consulting logo'
            loading='lazy'
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
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size='auto'>
                <p className='pt-2'>
                  <strong>Stay ahead of the curve with our regular insights.</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
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
              <a href='#!' className='text-white me-4'>
                Contact us
              </a>
              <a href='/sustainability' className='text-white me-4'>
                Sustainability
              </a>
              <a href='/accessibility' className='text-white me-4'>
                Accessibility statement
              </a>
              <a href='/terms' className='text-white me-4'>
                Terms of use
              </a>
              <a href='/privacy' className='text-white me-4'>
                Privacy policy
              </a>
            </div>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; 2023{' '}
        <a className='text-white' href='/'>
          JGM Strategy Consulting
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;