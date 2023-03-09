import React from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
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
      <div className='container py-4 px-3 mx-auto'>
        <p>Coming soon</p>
      </div>
    </div>
  );
}

export default Sustainability;