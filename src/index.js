import React, { 
  Suspense,
  useState,
  lazy
} from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalHeader,
  MDBModalTitle,
} from 'mdb-react-ui-kit';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import importDirectory from './helper/importDirectory';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

const Home = lazy(() => import('./routes/Home'));
const Industries = lazy(() => import('./routes/Industries'));
const Services = lazy(() => import('./routes/Services'));
const Insights = lazy(() => import('./routes/Insights'));
const InsightsPage = lazy(() => import('./routes/InsightsPage'));
const About = lazy(() => import('./routes/About'));
const Careers = lazy(() => import('./routes/Careers'));
const Accessibility = lazy(() => import('./routes/Accessibility'));
const Sustainability = lazy(() => import('./routes/Sustainability'));
const Terms = lazy(() => import('./routes/Terms'));
const Privacy = lazy(() => import('./routes/Privacy'));

const pages = importDirectory(require.context('./pages', false, /\.md$/));

function App() {
  const [emailConfirm, setEmailConfirm] = useState(false);

  const toggleShow = () => setEmailConfirm(!emailConfirm);

  return (
    <Router>
      <MDBModal show={emailConfirm} tabIndex='-1' setShow={setEmailConfirm}>
        <MDBModalDialog size='sm'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Welcome!</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>Just one more thing... we need you to confirm you want to see our insights. Please open the email we sent you and confirm your subscription.</MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      <div>
        <Navigation />
        <div>
          <Suspense fallback={<div className='container py-4 px-3 mx-auto'>Loading...</div>}>
            <Routes>
              <Route index path='/' element={<Home />} />
              <Route path='insights' element={<Insights />}>
                {
                  Object.keys(pages).map((page) => {
                    const name = page.split('.')[0];
                    return <Route path={name} element={<InsightsPage />} />
                  })
                }
              </Route>
              <Route path='/about' element={<About />} />
              <Route path='/accessibility' element={<Accessibility />} />
              <Route path='/careers' element={<Careers />} />
              <Route path='/industries' element={<Industries />} />
              <Route path='/privacy' element={<Privacy />} />
              <Route path='/services' element={<Services />} />
              <Route path='/sustainability' element={<Sustainability />} />
              <Route path='/terms' element={<Terms />} />
            </Routes>
          </Suspense>
        </div>
        <Footer toggleShow={toggleShow} />
      </div>
    </Router>
  )
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);