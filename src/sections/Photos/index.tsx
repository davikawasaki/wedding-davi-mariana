import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import './index.css'

function Photos() {
  return (
    <section className="photos w-full relative pt-10 pb-10 block whitespace-normal break-words" id="photos">
        <h2 className="mb-12 capitalize text-6xl sm:text-9xl text-center">Nossas Fotos</h2>
        <Swiper
            className="h-full"
            spaceBetween={25}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide>
                <img src="https://jd.exsythemes.com/img/photo-slider/3-big.jpg" alt="Our wedding" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://jd.exsythemes.com/img/photo-slider/3-big.jpg" alt="Our wedding" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://jd.exsythemes.com/img/photo-slider/3-big.jpg" alt="Our wedding" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://jd.exsythemes.com/img/photo-slider/3-big.jpg" alt="Our wedding" />
            </SwiperSlide>
        </Swiper>
        <div className="w-full flex text-center align-center">
            <div className="w-1/2 pt-10">
                <button className="previous slick-arrow h-2 md:h-5 mx-1 md:mx-5 w-1/2 px-10"></button>
            </div>
            <div className="w-1/2 pt-10">
                <button className="next slick-arrow h-2 md:h-5 mx-1 md:mx-5 w-1/2 px-10"></button>
            </div>
        </div>
    </section>
  );
}

export default Photos;
