import React from 'react';
import './index.css';

function Support() {
  return (
    <section className="support w-full text-left flex flex-wrap whitespace-normal break-words items-stretch" id="support">
      <div className="py-32 px-10 md:pl-32 w-full md:w-6/12 text-center md:text-left">
        <h2 className="mb-12 text-6xl sm:text-8x">Nossa lista de presentes</h2>
        <div className="flex flex-wrap pb-4 items-center justify-center md:justify-start justify-items-center md:justify-items-start">
          <p className="w-10/12">Além da lista de presentes, os presentes podem ser enviados por Pix.</p>
          <img className="w-2/12 md:w-11/12 lg:w-6/12 h-full" src="/qrcode-pix.png" alt="QR Code Pix" />
        </div>
      </div>
    </section>
  );
}

export default Support;
