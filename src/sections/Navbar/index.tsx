import React from 'react';
import './index.css';

function Navbar() {
  return (
    <nav className="flex flex-row justify-between pt-6 m-0 p-0 align-baseline items-center text-white">
      <div className="logo">
        <img className="block h-auto w-20" src="/logo.svg" alt="Logo" />
      </div>
      <ul className="menu list-none">
        <li className="inline-block px-12">
          <a href="/">Início</a>
        </li>
        <li className="inline-block px-12">
          <a href="#about-us">Sobre nós</a>
        </li>
        <li className="inline-block px-12">
          <a href="#love-story">História de Amor</a>
        </li>
        <li className="inline-block px-12">
          <a href="#photos">Fotos</a>
        </li>
        <li className="inline-block px-12">
          <a href="#venue">Evento</a>
        </li>
      </ul>
      <div className="actions">
        <a href="#rsvp">RSVP</a>
      </div>
    </nav>
  );
}

export default Navbar;
