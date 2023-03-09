import React from 'react';
import { Remark } from 'react-remark';

import TOU from './TOU.md';

function Terms() {
  return (
    <div className='container py-4 px-3 mx-auto'>
      <Remark>
        {TOU}
      </Remark>
    </div>
  );
}

export default Terms;