import React from 'react';
import './index.css';

function BannerContent() {
  return (
    <div className="banner-content absolute w-9/12 mt-16 text-white text-center border-8 border-white p-24 whitespace-nowrap">
      <h1 className="leading-16 text-9xl">Mariana e Davi</h1>
      {/* <span className="leading-16 text-2xl capitalize">Estão se casando<br/>em 1º de Julho de 2022</span> */}
    </div>
  );
}

export default BannerContent;
