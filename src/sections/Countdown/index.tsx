import React, { useEffect, useState } from 'react'
import { intervalToDuration } from 'date-fns'
import './index.css'

function Countdown() {
  const calculateTimeLeft = () => {
    const diff = +new Date('2022-07-01T18:00:00.000Z') - +new Date()

    let timeLeft = {
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }

    let duration = intervalToDuration({
      start: new Date(Date.UTC(2022, 6, 1, 21, 0, 0)), 
      end: new Date(),
    })

    if (diff > 0) {
      timeLeft = {
        months: duration?.months || 0,
        days: duration?.days || 0,
        hours: duration?.hours || 0,
        minutes: duration?.minutes || 0,
        seconds: duration?.seconds || 0
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  return (
    <div className="banner-countdown absolute w-7/12 mt-16 text-white text-center p-4 sm:p-7 bg-orange-800 capitalize whitespace-normal">
      <p className="text-lg sm:text-xl text-center capitalize break-words mb-2 sm:mb-5">Quanto tempo até o grande dia?</p>
      <div className="flex flex-wrap items-center justify-center">
        <div className="countdown-item border-b-2 sm:border-2 border-white px-1 py-2 sm:px-2 sm:py-4">
            <span className="font-bold text-sm sm:text-xl block text-center">{ (timeLeft?.months < 10 ? `0${timeLeft?.months}` : timeLeft?.months) || "00" }</span>
            <span className="block text-sm text-center">meses</span>
        </div>
        <div className="countdown-item border-b-2 sm:border-2 border-white px-1 py-2 sm:px-2 sm:py-4">
            <span className="font-bold text-sm sm:text-xl block text-center">{ (timeLeft?.days < 10 ? `0${timeLeft?.days}` : timeLeft?.days) || "00" }</span>
            <span className="block text-sm text-center">dias</span>
        </div>
        <div className="countdown-item border-b-2 sm:border-2 border-white px-1 py-2 sm:px-2 sm:py-4">
            <span className="font-bold text-sm sm:text-xl block text-center">{ (timeLeft?.hours < 10 ? `0${timeLeft?.hours}` : timeLeft?.hours) || "00" }</span>
            <span className="block text-sm text-center">horas</span>
        </div>
        <div className="countdown-item border-b-2 sm:border-2 border-white px-1 py-2 sm:px-2 sm:py-4">
            <span className="font-bold text-sm sm:text-xl block text-center">{ (timeLeft?.minutes < 10 ? `0${timeLeft?.minutes}` : timeLeft?.minutes) || "00" }</span>
            <span className="block text-sm text-center">minutos</span>
        </div>
        <div className="countdown-item border-b-2 sm:border-2 border-white px-1 py-2 sm:px-2 sm:py-4">
            <span className="font-bold text-sm sm:text-xl block text-center">{ (timeLeft?.seconds < 10 ? `0${timeLeft?.seconds}` : timeLeft?.seconds) || "00" }</span>
            <span className="block text-sm text-center">segundos</span>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
