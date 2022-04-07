import React from 'react';
import './index.css';

function Support() {
  return (
    <section className="support block w-full text-center whitespace-normal break-words text-lg" id="support">
      <h2 className="px-8 mb-12 normal-case text-8xl sm:text-7xl text-center">Nossa Lista de Presentes</h2>
      <div className="px-10 w-full flex flex-wrap text-center">
        <div className="py-4 w-full md:w-1/2 text-center grid place-content-center">
          <p>Lista disponível no site casar.com:</p>
          <a className="grid justify-items-center" href="https://noivos.casar.com/marianalimaedavikawasaki" target="_blank" rel="noopener noreferrer">
            <img className="w-full md:w-1/2" src="/casarpontocom.png" alt="Logo Casar Ponto Com" />
          </a>
        </div>
        <div className="py-4 w-full md:w-1/2 text-center grid place-content-center">
          <p>Contribuições por pix podem ser enviadas diretamente pelo QR code abaixo:</p>
          <div className="w-full grid justify-items-center">
            <img className="w-full md:w-1/3" src="/qrcode-pix.png" alt="QR Code Pix" />
          </div>
        </div>
      </div>
      <h3 className="mt-8">Contribuições internacionais:</h3>
      <div className="px-10 mt-8 w-full flex flex-wrap text-center">
        <div className="px-4 w-full md:w-1/2 text-center grid place-content-center md:place-content-end">
          <strong>USD</strong>
          <p>SWIFT: FRNAUS44</p>
          <p>ABA/ACH: 084106768</p>
        </div>
        <div className="px-4 w-full md:w-1/2 text-center grid place-content-center md:place-content-start">
          <strong>EUR</strong>
          <p>BIC: TRWIBEB1XXX</p>
          <p>IBAN: BE80 9670 1355 2377</p>
        </div>
      </div>
    </section>
  );
}

export default Support;
