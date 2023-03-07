import React, { useState } from 'react';

import {
  MDBCollapse,
  MDBContainer,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarNav,
  MDBNavbarToggler,
} from 'mdb-react-ui-kit';

import Logo from '../images/logo.png';
import './Navigation.css';

function Navigation() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>
          <img
            src={Logo}
            height='30'
            width='30'
            alt='JGM Strategy Consulting logo'
            loading='lazy'
          />{' '}
          JGM Strategy Consulting
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            {/* <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem> */}
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Industries</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Services</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Insights</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>About</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Careers</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Blog</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <MDBIcon icon='search' />
          <form className='d-flex input-group w-auto'>
            <MDBContainer className='py-5'>
              <input
                type='search'
                className='form-control search-click'
                placeholder='Search insights and experts...'
                aria-label='Search'
              />
            </MDBContainer>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Navigation;