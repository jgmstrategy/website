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

function Footer() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div>
            <span>JGM Strategy Consulting</span>
          </div>
          <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a
            href='https://www.linkedin.com/company/jgmstrategy'
            className='me-4 text-reset'
            target='_blank'
          >
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
        </section>

        <section className='mt-4'>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Stay ahead of the curve with our regular insights.</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
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
              <a href='#!' className='text-white me-4'>
                Sustainability
              </a>
              <a href='#!' className='text-white me-4'>
                Accessibility statement
              </a>
              <a href='#!' className='text-white me-4'>
                Terms of use
              </a>
              <a href='#!' className='text-white me-4'>
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