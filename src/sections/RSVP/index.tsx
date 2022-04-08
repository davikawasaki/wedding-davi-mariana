import React from 'react';
import { useTranslation } from 'react-i18next';

import './index.css';

function RSVP() {
  const { t } = useTranslation()

  return (
    <section className="rsvp w-full bg-orange-100 text-left flex flex-wrap whitespace-normal break-words items-stretch" id="rsvp">
      <div className="left-block w-4/12 hidden sm:block"
        style={{
          background: `#fff url('${process.env.PUBLIC_URL}/emporio.jpeg') no-repeat left center`,
          backgroundSize: 'cover'
        }}>
      </div>
      <div className="py-32 px-10 md:pl-32 w-full md:w-6/12 text-center md:text-left">
        <h2 className="mb-12 text-6xl sm:text-8x">{t('rsvp.title')}</h2>
        <div className="flex flex-wrap pb-4 items-center justify-center md:justify-start justify-items-center md:justify-items-start">
          <p className="w-10/12">{t('rsvp.subtitle')}</p>
          <a className="w-full md:w-2/12 pt-10 md:pt-0 md:pl-2 text-center block flex justify-center items-center" href={t('rsvp.wpp')} target="_blank" rel="noreferrer">
            <img className="w-2/12 md:w-11/12 lg:w-6/12 h-full" src="whatsapp.svg" alt="RSVP Whatsapp" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default RSVP;
