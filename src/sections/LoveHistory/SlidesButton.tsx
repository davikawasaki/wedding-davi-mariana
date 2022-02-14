import { useSwiper } from 'swiper/react'

import './index.css'

function SlideNextButton() {
  const swiper = useSwiper()

  return (
    <button className="next slick-arrow h-2 md:w-8/12 md:h-5 mx-1 md:mx-5 w-1/2 px-10" onClick={() => swiper.slideNext()}></button>
  )
}

function SlidePrevButton() {
  const swiper = useSwiper()

  return (
    <button className="previous slick-arrow h-2 md:w-8/12 md:h-5 mx-1 md:mx-5 w-1/2 px-10" onClick={() => swiper.slidePrev()}></button>
  )
}

export {
  SlideNextButton,
  SlidePrevButton
}
