import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import importDirectory from '../helper/importDirectory';

const pages = importDirectory(require.context('../pages', false, /\.md$/, 'lazy'));

function InsightsPage() {
  const location = useLocation();
  const name = location.pathname.split('/').at(-1);

  const [Document, SetDocument] = useState(<p>Yes!</p>);

  const filename = `${name}.md`;
  if (filename in pages) {
    SetDocument(React.lazy(() => import(`!babel-loader!mdx-loader!../pages/${filename}`)));
  }

  return (
    <div>
      <p>page</p>
      <Document />
    </div>
  );
}

export default InsightsPage;