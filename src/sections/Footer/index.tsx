import React from 'react';
import { useTranslation } from 'react-i18next';

import './index.css';

function Footer() {
  const { t } = useTranslation()

  return (
    <div>
      <footer className="w-full relative text-orange-800 mt-24">
        <div className="flex items-center justify-center w-6/12 top-8">
          <span className="block text-5xl lg:text-7xl relative mr-2 md:mr-10">Mariana</span>
          <div id="footer-image" className="relative hidden md:block">
            <img className="align-middle w-full border-none" src="/footer.jpg" alt="Couple footer" />
          </div>
          <span className="block md:hidden text-5xl lg:text-7xl relative ml-2 md:ml-10">{t('footer.separator')}</span>
          <span className="block text-5xl lg:text-7xl relative ml-2 md:ml-10">Davi</span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
