import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import importDirectory from '../helper/importDirectory';

const pages = importDirectory(require.context('../pages', false, /\.md$/, 'lazy'));

function InsightsPage() {
  const location = useLocation();
  const name = location.pathname.split('/').at(-1);
  
  const [markdown, setMarkdown] = useState('');

  const filename = `${name}.md`;
  if (filename in pages) {
    import(`../pages/${filename}`)
      .then((page) => setMarkdown(page['default']));
  }

  return (
    <div>
      <p>page</p>
      <ReactMarkdown children={markdown} />
    </div>
  );
}

export default InsightsPage;