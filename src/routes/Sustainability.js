import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBRow,
} from 'mdb-react-ui-kit';

import windmills from '../images/windmills.jpg';

function Sustainability() {
  return (
    <div>
      <div className='bg-image'>
        <img src={windmills} className='img-fluid shadow-4' />
        <div className='mask'>
          <div className='d-flex align-items-center h-100'>
            <div className='h-25 w-25 ps-5'>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>Sustainability</MDBCardTitle>
                  <MDBCardText>
                    It doesn't just stop at our words. We're working every day
                    to make sure the earth is somewhere we want to live.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
        </div>
      </div>
      <MDBContainer className='py-4 mx-auto'>
        <MDBRow className='justify-content-md-center py-4'>
          <MDBCol size='8'>
            <span style={{ fontSize: '18px' }}>
              At JGM Strategy, we are committed to working towards a more sustainable earth by
              integrating sustainable practices into our consulting services and advising our clients
              on ways to reduce their environmental impact while maintaining profitability. We believe
              that sustainable practices not only benefit the planet, but also lead to long-term business
              success and societal well-being. By promoting sustainability, we aim to create a healthier,
              more equitable, and more prosperous future for all.
            </span>
          </MDBCol>
        </MDBRow>
        <MDBRow className='justify-content-md-center'>
          <h1>By the numbers?</h1>
          <p>We're doing great. We're still working on a sustainability report, but we'll have that out for you soon.</p>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Sustainability;