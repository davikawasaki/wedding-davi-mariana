import { Swiper, SwiperSlide } from 'swiper/react'
import { SlidePrevButton, SlideNextButton } from './SlidesButton'

// Import Swiper styles
import 'swiper/css'
import './index.css'

function Photos() {
  return (
    <section className="photos w-full relative pt-10 pb-10 block whitespace-normal break-words" id="photos">
        <h2 className="mb-12 capitalize text-6xl sm:text-9xl text-center">Nossas Fotos</h2>
        <Swiper
            className="h-4/5 sm:h-full"
            breakpoints={{
                640: {
                    width: 640,
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                768: {
                    width: 768,
                    slidesPerView: 3,
                    spaceBetween: 25,
                }
            }}
            spaceBetween={0}
            slidesPerView={1}
            // onSlideChange={() => console.log('slide change')}
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

            <div className="w-full flex flex-wrap text-center align-center">
                <div className="w-1/2 pt-5 sm:pt-10">
                    <SlidePrevButton />
                </div>
                <div className="w-1/2 pt-5 sm:pt-10">
                    <SlideNextButton />
                </div>
            </div>
        </Swiper>
    </section>
  );
}

export default Photos;
