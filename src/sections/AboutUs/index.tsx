import React from 'react';
import { useTranslation } from 'react-i18next';
import './index.css';

function AboutUs() {
  const { t } = useTranslation()

  return (
    <section className="about-us block pt-40 sm:pt-48 w-11/12 lg:px-10 whitespace-normal break-words" id="about-us">
      <h2 className="mb-20 text-6xl sm:text-9xl text-center capitalize">{t('aboutUs.title')}</h2>
      <div className="bride flex flex-wrap mb-20 items-center place-content-between">
        <div className="bride-image w-full h-full md:w-2/6 border-8 border-orange-800">
          <img className="w-full" src="/mariana.jpg" alt="Mariana bride" />
        </div>
        <div className="w-full md:w-2/6 px-5">
          <div className="relative mt-8 mb-8 pb-3">
            <h3 className="font-bold text-3xl uppercase mb-1">{t('aboutUs.bride.title')}</h3>
            <span className="bride-underscore text-2xl">{t('aboutUs.bride.subtitle')}</span>
          </div>
          <div className="relative mb-8 pb-3 text-right">
            <h3 className="font-bold text-3xl uppercase mb-1">{t('aboutUs.groom.title')}</h3>
            <span className="groom-underscore text-2xl">{t('aboutUs.groom.subtitle')}</span>
          </div>
        </div>
        <div className="groom-image w-full h-full md:w-2/6 border-8 border-orange-800">
          <img className="w-full" src="/davi.jpg" alt="Davi groom" />
        </div>
        {/* <div className="bride-text mt-8 md:mt-4 md:w-7/12 ml-8">
            <div className="relative mb-8 pb-3">
                <h3 className="font-bold text-3xl uppercase mb-1">Mariana Lima</h3>
                <span className="bride-underscore text-2xl">a noiva</span>
            </div>
            <p className="mb-2">I bumped into Diana again 7 years later in a club, she had literally just returned from a holiday and was out celebrating her birthday. I was back from sea for 4 days before I left again for a few months. The probability that this would happen is crazy and to top it all off, she remembered my name.</p>
            <p className="mb-2">I bumped into Diana again 7 years later in a club, she had literally just returned from a holiday and was out celebrating her birthday. I was back from sea for 4 days before I left again for a few months. The probability that this would happen is crazy and to top it all off, she remembered my name.</p>
            <p className="mb-2">I bumped into Diana again 7 years later in a club, she had literally just returned from a holiday and was out celebrating her birthday. I was back from sea for 4 days before I left again for a few months. The probability that this would happen is crazy and to top it all off, she remembered my name.</p>
            <p className="mb-2">I bumped into Diana again 7 years later in a club, she had literally just returned from a holiday and was out celebrating her birthday. I was back from sea for 4 days before I left again for a few months. The probability that this would happen is crazy and to top it all off, she remembered my name.</p>
        </div> */}
      </div>
      {/* <div className="groom flex flex-wrap mb-10">
        <div className="groom-text mb-8 md:mb-4 md:w-7/12 mr-8">
            <div className="relative mb-8 pb-3 text-right">
                <h3 className="font-bold text-3xl uppercase mb-1">Davi Kawasaki</h3>
                <span className="groom-underscore text-2xl">o noivo</span>
            </div>
            <p className="mb-2">I bumped into Diana again 7 years later in a club, she had literally just returned from a holiday and was out celebrating her birthday. I was back from sea for 4 days before I left again for a few months. The probability that this would happen is crazy and to top it all off, she remembered my name.</p>
            <p className="mb-2">I bumped into Diana again 7 years later in a club, she had literally just returned from a holiday and was out celebrating her birthday. I was back from sea for 4 days before I left again for a few months. The probability that this would happen is crazy and to top it all off, she remembered my name.</p>
            <p className="mb-2">I bumped into Diana again 7 years later in a club, she had literally just returned from a holiday and was out celebrating her birthday. I was back from sea for 4 days before I left again for a few months. The probability that this would happen is crazy and to top it all off, she remembered my name.</p>
            <p className="mb-2">I bumped into Diana again 7 years later in a club, she had literally just returned from a holiday and was out celebrating her birthday. I was back from sea for 4 days before I left again for a few months. The probability that this would happen is crazy and to top it all off, she remembered my name.</p>
        </div>
        <div className="groom-image mr-2 mb-4 w-full h-full md:w-4/12 border-8 border-orange-800">
          <img className="w-full" src="/davi.jpg" alt="Davi groom" />
        </div>
      </div> */}
    </section>
  );
}

export default AboutUs;
