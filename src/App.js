import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar        from './components/common/Navbar';
import Footer        from './components/common/Footer';

import Home          from './pages/Home';
import About         from './pages/About';
import ProjectDetail from './pages/ProjectDetail';
import GetInvolved   from './pages/GetInvolved';
import Gallery       from './pages/Gallery';
import Contact       from './pages/Contact';
import NotFound      from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/"                      element={<Home />} />
            <Route path="/about"                 element={<About />} />
            <Route path="/projects/:slug"        element={<ProjectDetail />} />
            <Route path="/get-involved"          element={<GetInvolved />} />
            <Route path="/gallery"               element={<Gallery />} />
            <Route path="/contact"               element={<Contact />} />
            <Route path="*"                      element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;