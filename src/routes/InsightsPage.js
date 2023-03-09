import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Remark, useRemarkSync } from 'react-remark';

import importDirectory from '../helper/importDirectory';

const pages = importDirectory(require.context('../pages', false, /\.md$/, 'lazy'));

function InsightsPage() {
  const location = useLocation();
  let name = location.pathname.split('/');
  if (location.pathname.endsWith('/')) {
    name = name.at(-2);
  } else {
    name = name.at(-1);
  }
  
  const [markdown, setMarkdown] = useState(<p>failed</p>);

  const filename = `${name}.md`;
  if (filename in pages) {
    import(`../pages/${filename}`)
      .then((page) => setMarkdown(page['default']));
  }

  return (
    <div>
      <p>page</p>
      <Remark>{ markdown }</Remark>
    </div>
  );
}

export default InsightsPage;