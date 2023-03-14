import React from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

import world_banner from '../images/world_banner.jpg';

function Contact() {
  return (
    <div className='container py-4 px-3 mx-auto'>
      <h1 className='text-center py-2'>How can we help you reach the next level?</h1>
      <p className='text-center py-2 mb-4'>
        At JGM Strategy Consulting, we're always ready to help you take the next step. Just let us
        know how we can be of assistance to you.
      </p>
      <MDBRow className='py-2 mb-4'>
        <MDBCol sm='4'>
          <MDBCard alignment='center'>
            <MDBCardHeader>New contacts</MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>New business with us?</MDBCardTitle>
              <MDBCardText>
                If you would like to hire us, we have dedicated teams that we'll partner with you
                to address what you need and find solutions to help your problems.{' '}
                <a href='mailto:inquires@jgmstrategy.com'>inquires@jgmstrategy.com</a>
              </MDBCardText>
              {/* <MDBBtn href='#' className='mx-2'>Write Form</MDBBtn> */}
              <MDBBtn href='mailto:inquiries@jgmstrategy.com' className='mx-2'>Email</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol sm='4'>
          <MDBCard alignment='center'>
            <MDBCardHeader>Your next step</MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>Careers at JGM</MDBCardTitle>
              <MDBCardText>We're looking for people who are always looking to take the next step.</MDBCardText>
              <MDBBtn href='/careers' className='mx-2'>See Open Positions</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol sm='4'>
          <MDBCard alignment='center'>
            <MDBCardHeader>Everything else</MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>Found something?</MDBCardTitle>
              <MDBCardText>
                Security vulnerability? Press relations? Permission to reprint? We're here to chat.
                Do note that while we try our best to respond in a timely manner, some requests do
                take longer than others.{' '}
                <a href='mailto:contact@jgmstrategy.com'>contact@jgmstrategy.com</a>
              </MDBCardText>
              <MDBBtn href='mailto:contact@jgmstrategy.com' className='mx-2'>Email Us</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <div className='bg-image hover-zoom'>
        <img src={world_banner} className='w-100' />
        <div class='mask d-flex align-items-center'>
          <div class='ps-4'>
            <span
              class='align-middle'
              style={{
                fontSize: '50px',
                color: 'white',
                textShadow: '2px 2px #000'
              }}
            >
              <b>Take the next bold step with JGM &#8594;</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;