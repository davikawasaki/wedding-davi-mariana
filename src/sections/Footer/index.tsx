import React from 'react';
import './index.css';

function Footer() {
  return (
    <footer className="w-full relative text-orange-800 my-24">
      <div className="flex items-center justify-center w-6/12 absolute top-8">
        <span className="block text-7xl relative mr-10">Mariana</span>
      <div id="footer-image" className="relative">
          <img className="align-middle w-full border-none" src="https://jd.exsythemes.com/img/footer/photo.jpg" alt="Couple footer" />
        </div>
        <span className="block text-7xl relative ml-10">Davi</span>
      </div>
    </footer>
  );
}

export default Footer;
