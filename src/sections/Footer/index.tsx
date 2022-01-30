import React from 'react';
import './index.css';

function Footer() {
  return (
    <footer className="w-full relative text-orange-800 my-24">
      {/* <div className="w-100 text-center">
        <span>01/07/2022</span>
      </div> */}
      <div className="flex items-center justify-center w-6/12 absolute top-8">
        {/* <hr className="border-orange-800 border-2 w-full" /> */}
        <span className="block text-7xl relative mr-10">Mariana</span>
        <div id="footer-image" className="relative">
            <img className="align-middle border-none" src="https://jd.exsythemes.com/img/footer/photo.jpg" alt="Couple footer photo" />
        </div>
        <span className="block text-7xl relative ml-10">Davi</span>
        {/* <hr className="border-orange-800 border-2 w-full" /> */}
      </div>
      {/* <div className="w-6/12 text-center top-16 absolute text-3xl">01/07/2022</div> */}
    </footer>
  );
}

export default Footer;
