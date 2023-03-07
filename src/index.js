import React from 'react';
import { createRoot } from 'react-dom/client';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

import Home from './pages/Home';

const App = () => (
  <div>
    <Navigation />
    <div className="container py-4 px-3 mx-auto">
      <Home />
    </div>
    <Footer />
  </div>
)

const root = createRoot(document.getElementById('root'));
root.render(<App />);