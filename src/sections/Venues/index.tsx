import React from 'react';
import './index.css';

function Venues() {
  return (
    <section className="venue block pt-48 w-11/12 px-40" id="venue">
      <h2 className="mb-20 text-9xl text-center capitalize">Local do Evento</h2>
      <div className="flex mb-10 justify-end">
        <div className="venue-card pl-20 py-10 pr-10 w-6/12 border-8 border-orange-800">
          <div className="venue-card-title relative pb-8 mb-8">
            <h3 className="font-bold text-3xl uppercase">Cerimônia e jantar</h3>
          </div>
          <div className="venue-card-info">
            <div className="venue-card-block flex mb-10 text-xl">
              <span className="mr-20 font-bold uppercase">Quando</span>
              <span className="">19:00, 1 de Julho de 2022</span>
            </div>
            <div className="venue-card-block flex text-xl">
              <span className="mr-20 font-bold uppercase">Onde</span>
              <span className="">Empório Loft - Rua Paraíba, 533 - Jardim Higienopolis, Londrina - PR, 86020-090</span>
            </div>
            <a href="#" className="block mt-12 text-center">Ver rota</a>
          </div>
        </div>
        <div className="venue-map absolute">

        </div>
      </div>
    </section>
  );
}

export default Venues;
