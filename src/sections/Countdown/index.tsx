import React from 'react';
import './index.css';

function Countdown() {
  return (
    <div className="banner-countdown absolute w-8/12 mt-16 text-white text-center p-4 sm:p-7 bg-orange-800 capitalize whitespace-normal">
      <p className="text-lg sm:text-xl text-center capitalize break-words mb-2 sm:mb-5">Quanto tempo até o grande dia?</p>
      <div className="flex flex-wrap items-center justify-center">
        <div className="countdown-item border-b-2 sm:border-2 border-white px-1 py-2 sm:px-2 sm:py-4">
            <span className="font-bold text-sm sm:text-xl block text-center">00</span>
            <span className="block text-sm text-center">meses</span>
        </div>
        <div className="countdown-item border-b-2 sm:border-2 border-white px-1 py-2 sm:px-2 sm:py-4">
            <span className="font-bold text-sm sm:text-xl block text-center">00</span>
            <span className="block text-sm text-center">dias</span>
        </div>
        <div className="countdown-item border-b-2 sm:border-2 border-white px-1 py-2 sm:px-2 sm:py-4">
            <span className="font-bold text-sm sm:text-xl block text-center">00</span>
            <span className="block text-sm text-center">horas</span>
        </div>
        <div className="countdown-item border-b-2 sm:border-2 border-white px-1 py-2 sm:px-2 sm:py-4">
            <span className="font-bold text-sm sm:text-xl block text-center">00</span>
            <span className="block text-sm text-center">minutos</span>
        </div>
        <div className="countdown-item border-b-2 sm:border-2 border-white px-1 py-2 sm:px-2 sm:py-4">
            <span className="font-bold text-sm sm:text-xl block text-center">00</span>
            <span className="block text-sm text-center">segundos</span>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
