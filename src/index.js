import React from 'react';
import ReactDOM from 'react-dom';

import Button from 'react-bootstrap/Button';

const App = () => (
  <div>
    <div class="container py-4 px-3 mx-auto">
      <h1>JGM Consulting</h1>
      <Button variant="primary">Begin</Button>
    </div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'));