import React from 'react';
import { createRoot } from 'react-dom';
import Button from 'react-bootstrap/Button';

import Navigation from './components/Navigation';

const App = () => (
  <div>
    <Navigation></Navigation>
    <div class="container py-4 px-3 mx-auto">
      <h1>JGM Consulting</h1>
      <Button variant="primary">Begin</Button>
    </div>
  </div>
)

const root = createRoot(document.getElementById('root'));
root.render(<App />);