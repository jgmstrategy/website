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
const Industries = lazy(() => import('./routes/Industries'));
const Services = lazy(() => import('./routes/Services'));
const Insights = lazy(() => import('./routes/Insights'));
const About = lazy(() => import('./routes/About'));
const Careers = lazy(() => import('./routes/Careers'));
const Accessibility = lazy(() => import('./routes/Accessibility'));
const Sustainability = lazy(() => import('./routes/Sustainability'));
const Terms = lazy(() => import('./routes/Terms'));
const Privacy = lazy(() => import('./routes/Privacy'));

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <div>
          <Suspense fallback={<div className='container py-4 px-3 mx-auto'>Loading...</div>}>
            <Routes>
              <Route index path='/' element={<Home />} />
              <Route path='/industries' element={<Industries />} />
              <Route path='/services' element={<Services />} />
              <Route path='/insights' element={<Insights />} />
              <Route path='/about' element={<About />} />
              <Route path='/careers' element={<Careers />} />
              <Route path='/accessibility' element={<Accessibility />} />
              <Route path='/sustainability' element={<Sustainability />} />
              <Route path='/terms' element={<Terms />} />
              <Route path='/privacy' element={<Privacy />} />
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