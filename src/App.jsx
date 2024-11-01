import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './assets/Navbar';
import Home from './Components/Home/Home';
import Footer from './assets/Footer';
import Cookies from './Components/Cookie Policy/CookiesIndex';
import PrivacyAndPolicy from './Components/Privacy Policy/privactIndex';
import TermsAndConditions from './Components/Terms And Conditions/termandconditionIndex';

function App() {
  return (
  <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/term_and_condition" element={<TermsAndConditions />} />
        <Route path="/privacy_policy" element={<PrivacyAndPolicy />} />
        <Route path="/cookie_policy" element={<Cookies />} />
        
      </Routes>
      <Footer />
      </>
  );
}

export default App;
