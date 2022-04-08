import React from 'react';
import Map from '../Map';
import { useTranslation } from 'react-i18next';

import './index.css';

function Venues() {
  const { t } = useTranslation()

  return (
    <section className="venue block pt-24 md:pt-32 w-11/12 px-5 lg:px-12 whitespace-normal break-words text-right" id="venue">
      <h2 className="mb-20 text-6xl sm:text-9xl text-center">{t('venue.title')}</h2>
      <div className="flex flex-wrap mb-10 justify-center">
        <div className="venue-card px-10 py-10 w-full lg:w-5/12 border-8 border-orange-800">
          <div className="venue-card-title relative pb-8 mb-8">
            <h3 className="font-bold text-xl sm:text-3xl uppercase">{t('venue.subtitle')}</h3>
          </div>
          <div className="venue-card-info">
            <div className="venue-card-block flex mb-10 text-sm sm:text-xl flex flex-wrap justify-between">
              <p className="mr-10 font-bold uppercase">{t('venue.when.title')}</p>
              <p className="text-right">{t('venue.when.subtitle')}</p>
            </div>
            <div className="venue-card-block flex text-sm sm:text-xl flex flex-wrap justify-between">
              <p className="mr-10 font-bold uppercase">{t('venue.where.title')}</p>
              <p className="text-right">{t('venue.where.subtitle')}</p>
            </div>
            <a href="https://goo.gl/maps/WGX7kmnU9wT5mqm5A" target="_blank" rel="noreferrer" className="block mt-12 text-center hover:underline underline-offset-8">{t('venue.where.route')}</a>
          </div>
        </div>
        <div className="venue-map top-10 w-full h-80 lg:h-auto lg:w-7/12 overflow-hidden">
          <Map />
        </div>
      </div>
    </section>
  );
}

export default Venues;
