import React from 'react';
import './App.css';
import AboutUs from './sections/AboutUs';
import Banner from './sections/Banner/index';
import Venues from './sections/Venues';

function App() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Venues />
    </div>
  );
}

export default App;
