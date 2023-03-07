import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

const Home = lazy(() => import('./routes/Home'));
const Sustainability = lazy(() => import('./routes/Sustainability'));

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <div className='container py-4 px-3 mx-auto'>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route index path='/' element={<Home />} />
              <Route path='/sustainability' element={<Sustainability />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </Router>
  )
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);