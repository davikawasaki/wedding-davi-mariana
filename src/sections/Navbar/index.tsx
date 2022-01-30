import React, { useEffect, useState } from 'react';
import './index.css';

function Navbar() {
  const [offset, setOffset] = useState("")

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset.toString());
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  return (
    <nav className={`nav fixed w-full px-24 z-10 ${parseInt(offset) < 600 ? '' : 'bg-orange-800'}`}>
      <div className="flex flex-row justify-between py-3 m-0 p-0 align-baseline items-center text-white">  
        <div className="logo">
          <img className="block h-auto w-20" src="/logo.svg" alt="Logo" />
        </div>
        <ul className="menu list-none">
          <li className="inline-block px-12">
            <a href="#start">Início</a>
          </li>
          <li className="inline-block px-12">
            <a href="#about-us">Sobre nós</a>
          </li>
          {/* <li className="inline-block px-12">
            <a href="#love-story">História de Amor</a>
          </li> */}
          <li className="inline-block px-12">
            <a href="#photos">Fotos</a>
          </li>
          <li className="inline-block px-12">
            <a href="#venue">Evento</a>
          </li>
        </ul>
        <div className="actions">
          <a href="#rsvp">Confirme sua presença</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
