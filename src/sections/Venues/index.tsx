import React from 'react';
import Map from '../Map';
import './index.css';

function Venues() {
  return (
    <section className="venue block pt-24 md:pt-32 w-11/12 px-5 lg:px-12 whitespace-normal break-words text-right" id="venue">
      <h2 className="mb-20 text-6xl sm:text-9xl text-center">Local do Evento</h2>
      <div className="flex flex-wrap mb-10 justify-center">
        <div className="venue-card px-10 py-10 w-full lg:w-5/12 border-8 border-orange-800">
          <div className="venue-card-title relative pb-8 mb-8">
            <h3 className="font-bold text-xl sm:text-3xl uppercase">Cerimônia e jantar</h3>
          </div>
          <div className="venue-card-info">
            <div className="venue-card-block flex mb-10 text-sm sm:text-xl flex flex-wrap justify-between">
              <p className="mr-10 font-bold uppercase">Quando</p>
              <p className="text-right">19:00, 1 de Julho de 2022</p>
            </div>
            <div className="venue-card-block flex text-sm sm:text-xl flex flex-wrap justify-between">
              <p className="mr-10 font-bold uppercase">Onde</p>
              <p className="text-right">Empório Loft - Rua Paraíba, 533 - Jardim Higienopolis, Londrina - PR, 86020-090</p>
            </div>
            <a href="https://google.com" className="block mt-12 text-center">Ver rota</a>
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
