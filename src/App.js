
import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route , Routes} from 'react-router-dom';

import React from 'react';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Gallery from './pages/Gallery';
function App() {
  return (
    <div className="App">
      <BrowserRouter  >
    
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/about" element={<AboutUs />} />
      <Route exact path="/services" element={<Services />} />
      <Route exact path="/gallery" element={<Gallery/>} />
      <Route exact path="/contact" element={<ContactUs/>} />
     
      
      
     
    </Routes>
  </BrowserRouter>
    </div>
  );
}


export default App;
