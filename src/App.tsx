import React from 'react';
import './App.css';
import AboutUs from './sections/AboutUs';
import Banner from './sections/Banner/index';
import Footer from './sections/Footer';
import Photos from './sections/Photos';
import RSVP from './sections/RSVP';
import Venues from './sections/Venues';

function App() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Photos />
      <Venues />
      <RSVP />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
