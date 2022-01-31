import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import './index.css'

function Photos() {
  return (
    <section className="photos w-full relative pt-10 pb-10 block" id="photos">
        <h2 className="mb-12 capitalize text-9xl text-center">Nossas Fotos</h2>
        <Swiper
            className="h-96"
            spaceBetween={50}
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
        <div className="w-100 flex text-center align-center">
            <div className="w-1/2 pt-10">
                <button className="previous slick-arrow mx-5 w-1/2 px-10"></button>
            </div>
            <div className="w-1/2 pt-10">
                <button className="next slick-arrow mx-5 w-1/2 px-10"></button>
            </div>
        </div>
    </section>
  );
}

export default Photos;
