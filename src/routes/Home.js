import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

import post_01 from '../images/post_01.jpg';
import post_02 from '../images/post_02.jpg';
import post_03 from '../images/post_03.jpg';

function Home() {
  return (
    <div>
      <div>
        <MDBCarousel showIndicators>
          <a href='#'>
            <MDBCarouselItem
              className='w-100 d-block'
              itemId={1}
              src={post_01}
              alt='Dentist and patient analyzing computer monitor'
            >
              <h3>Better Patient Experiences &#11166;</h3>
              <p>Learn how we help build better lives in the dentist office</p>
            </MDBCarouselItem>
          </a>
          <a href='#'>
            <MDBCarouselItem
              className='w-100 d-block'
              itemId={2}
              src={post_02}
              alt='...'
            >
              <h3>World Resource Report 2023 &#11166;</h3>
              <p>Navigate the constantly changing logistics landscape</p>
            </MDBCarouselItem>
          </a>
          <a href='#'>
            <MDBCarouselItem
              className='w-100 d-block'
              itemId={3}
              src={post_03}
              alt='Men and women having a meeting in front of a computer'
            >
              <h3>Diversity and Generative AI &#11166;</h3>
              <p>Making sure marginalized groups don't get left behind</p>
            </MDBCarouselItem>
          </a>
        </MDBCarousel>
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