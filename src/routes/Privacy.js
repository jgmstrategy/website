import React from 'react';
import { Remark } from 'react-remark';

import PrivacyNotice from './PrivacyNotice.md';

function Privacy() {
  return (
    <div className='container py-4 px-3 mx-auto'>
      <Remark>
        {PrivacyNotice}
      </Remark>
    </div>
  );
}

export default Privacy;