import React from 'react';
import './index.css';

function RSVP() {
  return (
    <section className="rsvp w-full bg-orange-100 text-left flex flex-wrap whitespace-normal break-words items-stretch" id="rsvp">
      <div className="left-block w-4/12 hidden sm:block"></div>
      <div className="py-32 px-10 md:pl-32 w-full md:w-6/12 text-center md:text-left">
        <h2 className="mb-12 text-6xl sm:text-8x">Confirme sua presença</h2>
        <div className="flex flex-wrap pb-4 items-center justify-center md:justify-start justify-items-center md:justify-items-start">
          <p className="w-10/12">Esperamos ansiosamente por vocês! Confirme pelo Whatsapp com a nossa assessoria:</p>
          <a className="w-full md:w-2/12 pt-10 md:pt-0 md:pl-2 text-center block flex justify-center items-center" href="https://api.whatsapp.com/send/?phone=5543999753000&text=Ol%C3%A1%2C+gostaria+de+confirmar+a+minha+presen%C3%A7a+no+casamento+da+Mariana+e+Davi%2E&app_absent=0" target="_blank" rel="noreferrer">
            <img className="w-2/12 md:w-11/12 lg:w-6/12 h-full" src="whatsapp.svg" alt="RSVP Whatsapp" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default RSVP;
