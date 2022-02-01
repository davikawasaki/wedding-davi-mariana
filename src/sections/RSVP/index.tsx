import React from 'react';
import './index.css';

function RSVP() {
  return (
    <section className="rsvp w-full bg-orange-100 text-left flex flex-wrap whitespace-normal break-words items-stretch" id="rsvp">
      <div className="left-block w-4/12"></div>
      <div className="py-32 pl-12 md:pl-32 w-6/12">
        <h2 className="mb-12 text-6xl sm:text-8xl text-left">Confirme sua presença</h2>
        <div className="flex pb-4">
          <p>Esperamos ansiosamente por vocês! Confirme pelo Whatsapp com a nossa assessoria:</p>
          <a className="pl-4" href="https://api.whatsapp.com/send/?phone=5543999753000&text=Ol%C3%A1%2C+gostaria+de+confirmar+a+minha+presen%C3%A7a+no+casamento+da+Mariana+e+Davi%2E&app_absent=0" target="_blank" rel="noreferrer">
            <img className="w-full sm:w-11/12 lg:w-5/12 h-full" src="whatsapp.svg" alt="RSVP Whatsapp" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default RSVP;
