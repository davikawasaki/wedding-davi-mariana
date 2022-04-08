import React from 'react';
import { useTranslation } from 'react-i18next';
import './index.css';

function BannerContent() {
  const { t } = useTranslation()

  return (
    <div className="banner-content absolute top-1/3 w-8/12 text-white text-center border-4 md:border-8 border-white p-5 sm:p-10 lg:p-20 whitespace-normal">
      <h1 className="leading-16 text-6xl md:text-8xl lg:text-8xl break-words">{t('banner.title')}</h1>
      {/* <span className="leading-16 text-2xl capitalize">Estão se casando<br/>em 1º de Julho de 2022</span> */}
    </div>
  );
}

export default BannerContent;
