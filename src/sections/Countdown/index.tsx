import React from 'react';
import './index.css';

function Countdown() {
  return (
    <div className="banner-countdown absolute w-8/12 mt-16 text-white text-center p-7 bg-orange-800 capitalize whitespace-nowrap">
      <p className="text-3xl text-center capitalize whitespace-nowrap mb-5">Quanto tempo até o grande dia?</p>
      <div className="flex items-center justify-center">
        <div className="countdown-item border-2 border-white px-2 py-4">
            <span className="font-bold text-3xl block text-center">00</span>
            <span className="block text-center">meses</span>
        </div>
        <div className="countdown-item border-2 border-white px-2 py-4">
            <span className="font-bold text-3xl block text-center">00</span>
            <span className="block text-center">dias</span>
        </div>
        <div className="countdown-item border-2 border-white px-2 py-4">
            <span className="font-bold text-3xl block text-center">00</span>
            <span className="block text-center">horas</span>
        </div>
        <div className="countdown-item border-2 border-white px-2 py-4">
            <span className="font-bold text-3xl block text-center">00</span>
            <span className="block text-center">minutos</span>
        </div>
        <div className="countdown-item border-2 border-white px-2 py-4">
            <span className="font-bold text-3xl block text-center">00</span>
            <span className="block text-center">segundos</span>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
