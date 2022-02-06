import React, { useState, useEffect } from 'react';
import './App.css';
import AboutUs from './sections/AboutUs';
import Banner from './sections/Banner/index';
import Footer from './sections/Footer';
import Photos from './sections/Photos';
import RSVP from './sections/RSVP';
import Venues from './sections/Venues';

function App() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    })
  }, [])

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    })
  }

  return (
    <div>
      <Banner />
      <AboutUs />
      <Photos />
      <Venues />
      <RSVP />
      <Footer />
      {showButton && (
        <button onClick={scrollToTop} className="fixed bottom-9 right-9 py-4 px-5 cursor-pointer bg-neutral-100 rounded-full text-3xl z-10 drop-shadow-md hover:opacity-75">
          &#8679;
        </button>
      )}
    </div>
  );
}

export default App;
