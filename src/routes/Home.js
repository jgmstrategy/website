import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCol,
} from 'mdb-react-ui-kit';

import post_01 from '../images/post_01.jpg';
import post_02 from '../images/post_02.jpg';
import post_03 from '../images/post_03.jpg';

function Home() {
  return (
    <div>
      <div>
        <MDBCarousel showIndicators>
          <a href='/insights/patient-experience'>
            <MDBCarouselItem
              className='w-100 d-block'
              itemId={1}
              src={post_01}
              alt='Dentist and patient analyzing computer monitor'
            >
              <h3>Better Patient Experiences &#8594;</h3>
              <p>Learn how we help build better lives in the dentist office</p>
            </MDBCarouselItem>
          </a>
          <a href='/insights/world-resource-report'>
            <MDBCarouselItem
              className='w-100 d-block'
              itemId={2}
              src={post_02}
              alt='...'
            >
              <h3>World Resource Report 2023 &#8594;</h3>
              <p>Navigate the constantly changing logistics landscape</p>
            </MDBCarouselItem>
          </a>
          <a href='/insights/diversity-and-generative-ai'>
            <MDBCarouselItem
              className='w-100 d-block'
              itemId={3}
              src={post_03}
              alt='Men and women having a meeting in front of a computer'
            >
              <h3>Diversity and Generative AI &#8594;</h3>
              <p>Making sure marginalized groups don't get left behind</p>
            </MDBCarouselItem>
          </a>
        </MDBCarousel>
      </div>
      <div className='container grid d-flex align-items-start mb-3 py-4'>
        <MDBCol size='4' className='p-4'>
          <img src='https://mdbootstrap.com/img/new/standard/city/047.webp' className='img-fluid rounded' alt='' />
        </MDBCol>
        <MDBCol size='8'>
          <h1 className='pb-2'>Move fast. Move boldly.</h1>
          <span>See how our clients scale quickly with our products</span>
        </MDBCol>
      </div>
      <div className='container py-4 px-3 mx-auto'>
        <p>Featured insight box</p>
        <p>What are we helping you to achieve?</p>
        <p>Call to action button</p>
      </div>
    </div>
  );
}

export default Home;