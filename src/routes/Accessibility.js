import React from 'react';

import accessibility from '../images/accessibility.jpg';

function Accessibility() {
  return (
    <div>
      <div className='container py-4 px-3 mx-auto'>
        <h1 className='py-2'>Accessibility Statement</h1>
        <p>
          JGM Strategy recognizes that in the modern world, digital accessibility is not only important
          but necessary. We are committed to ensuring that our services are accessible to all
          individuals, including those with disabilities. To achieve this, we follow accessibility
          standards and guidelines, and continuously evaluate and improve our digital properties to
          ensure that they are optimized for accessibility.
        </p>
        <p>We believe that digital accessibility is not only a social responsibility but also a
          business opportunity. By designing our services with accessibility in mind, we can increase
          our reach and impact, and create more inclusive solutions that benefit everyone. Our
          commitment to digital accessibility reflects our values and mission of creating positive
          change through innovation and collaboration.
        </p>
        <p>
          We want to hear from you if you think we haven't achieved this. Please get in contact with
          us at <a href='mailto:accessibility@jgmstrategy.com'>accessibility@jgmstrategy.com</a> and
          let us know how we are doing.
        </p>
      </div>
      <div className='bg-image'>
        <img src={accessibility} className='img-fluid shadow-4' />
      </div>
    </div>
  );
}

export default Accessibility;