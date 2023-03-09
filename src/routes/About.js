import React from 'react';
import {
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';

import nyc from '../images/nyc.jpg';
import gideon from '../images/gideon.jpg';
import maxwell from '../images/maxwell.jpg';
import jason from '../images/jason.jpg';

function About() {
  return (
    <div>
      <div className='text-center bg-image'>
        <img src={nyc} className='img-fluid shadow-4' />
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Our Amazing Team</h1>
              <h4 className='mb-3'>Here at JGM Strategy, we have great minds navigating the world's complex problems.</h4>
            </div>
          </div>
        </div>
      </div>
      <div className='container py-4 px-3 mx-auto'>
        <MDBRow>
          <MDBCol lg='4' md='4' className='mb-4'>
            <img src={gideon} className='img-fluid rounded-circle'/>
          </MDBCol>
          <MDBCol lg='4' md='4' className='mb-4'>
            <img src={maxwell} className='img-fluid rounded-circle'/>
          </MDBCol>
          <MDBCol lg='4' md='4' className='mb-4'>
            <img src={jason} className='img-fluid rounded-circle'/>
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  );
}

export default About;