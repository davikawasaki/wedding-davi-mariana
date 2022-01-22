import React from 'react';
import BannerContent from '../BannerContent';
import Countdown from '../Countdown';
import Navbar from '../Navbar';
import './index.css';

function Banner() {
  return (
    <header className="w-full relative bg-image-main block m-0 p-0 align-baseline">
        <div className="w-11/12 max-w-7xl m-auto px-1">
            <Navbar />
            <BannerContent />
            <Countdown />
        </div>
    </header>
  );
}

export default Banner;
