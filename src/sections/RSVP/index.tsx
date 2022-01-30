import React from 'react';
import './index.css';

function RSVP() {
  return (
    <section className="rsvp w-full bg-orange-100 text-left flex" id="rsvp">
      <div className="left-block w-4/12">

      </div>
      <div className="py-32 pl-32 w-8/12">
        <h2 className="mb-12 text-9xl text-left">Confirme sua presença</h2>
        <div className="flex pb-4">
          <p>Esperamos ansiosamente por vocês! Confirme pelo Whatsapp com a nossa assessoria:</p>
          <a className="pl-4" href="https://api.whatsapp.com/send/?phone=5543999753000&text=Ol%C3%A1%2C+gostaria+de+confirmar+a+minha+presen%C3%A7a+no+casamento+da+Mariana+e+Davi%2E&app_absent=0" target="_blank">
            <img src="whatsapp.svg" width="25%" alt="RSVP Whatsapp" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default RSVP;
