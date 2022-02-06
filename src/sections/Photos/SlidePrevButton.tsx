import { useSwiper } from 'swiper/react'

import './index.css'

export default function SlidePrevButton() {
  const swiper = useSwiper()

  return (
    <button className="previous slick-arrow h-2 md:h-5 mx-1 md:mx-5 w-1/2 px-10" onClick={() => swiper.slidePrev()}></button>
  )
}
