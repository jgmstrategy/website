import React from 'react';
import { Outlet } from 'react-router-dom';

function Insights() {
  return (
    <div className='container py-4 px-3 mx-auto'>
      <p>Insights are coming soon</p>
      <Outlet />
    </div>
  );
}

export default Insights;