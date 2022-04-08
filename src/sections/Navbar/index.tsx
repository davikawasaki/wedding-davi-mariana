import React, { MouseEventHandler, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './index.css';

function Navbar() {
  const [offset, setOffset] = useState("0")
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset.toString());
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  function changeLanguage(language: string) {
    i18n.changeLanguage(language || 'en');
  }

  return (
    <nav className={`nav fixed w-full px-5 sm:px-24 z-10 ${parseInt(offset) < 600 ? '' : 'bg-orange-800'}`}>
      <div className={`flex flex-row justify-between py-6 sm:py-3 m-0 p-0 align-baseline items-center ${parseInt(offset) < 600 ? 'text-orange-800 lg:text-white' : 'text-white'}`}>  
        <div className="logo hidden sm:block">
          <img className="block h-auto w-20" src="/logo.png" alt="Logo" />
        </div>
        <ul className="menu flex flex-wrap list-none">
          <li className="inline-block px-4 md:px-8 lg:px-12">
            <a href="#start">{t('navbar.home')}</a>
          </li>
          <li className="inline-block px-4 md:px-8 lg:px-12">
            <a href="#about-us">{t('navbar.aboutUs')}</a>
          </li>
          <li className="inline-block px-4 md:px-8 lg:px-12">
            <a href="#love-history">{t('navbar.loveStory')}</a>
          </li>
          <li className="inline-block px-4 md:px-8 lg:px-12">
            <a href="#photos">{t('navbar.photos')}</a>
          </li>
          <li className="inline-block px-4 md:px-8 lg:px-12">
            <a href="#venue">{t('navbar.event')}</a>
          </li>
        </ul>
        <div className="actions hidden md:block">
          <a href="#rsvp">{t('navbar.rsvp')}</a>
        </div>
        <div className="actions">
          <button className="font-bold mx-2" onClick={() => changeLanguage('en')} value='en'>EN</button>
          {/* <br/> */}
          <button className="font-bold mx-2" onClick={() => changeLanguage('pt-br')} value='pt-br'>PT</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
