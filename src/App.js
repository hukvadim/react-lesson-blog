import React from 'react';
import Navigation from './components/Navigation';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './pages/home';
import PageRenderer from './page-renderer';


export default function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className='page'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:page" element={ <PageRenderer /> } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}