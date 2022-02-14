import { Swiper, SwiperSlide } from 'swiper/react'
import { SlidePrevButton, SlideNextButton } from './SlidesButton'

// Import Swiper styles
import 'swiper/css'
import './index.css'

function LoveHistory() {
  return (
    <section className="love-history w-full relative pt-10 pb-10 mb-12 block whitespace-normal break-words" id="love-history">
        <h2 className="mb-16 px-4 capitalize text-6xl sm:text-9xl text-center">Nossa História de Amor</h2>
        <Swiper
            className="h-1/6 w-3/5"
            spaceBetween={0}
            slidesPerView={1}
            // onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className="flex flex-wrap">
                <div className="w-full md:w-1/2">
                    <img src="https://jd.exsythemes.com/img/photo-slider/3-big.jpg" alt="Our wedding" />
                </div>
                <div className="mt-8 md:mt-4 md:w-1/2 pl-0 md:pl-12">
                    <div className="relative mb-8 pb-3">
                        <h3 className="title-underscore font-bold text-3xl uppercase mb-1">Como nos conhecemos</h3>
                    </div>
                    <p className="mb-2">I bumped into Diana again 7 years later in a club, she had literally just returned from a holiday and was out celebrating her birthday. I was back from sea for 4 days before I left again for a few months. The probability that this would happen is crazy and to top it all off, she remembered my name.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="flex flex-wrap">
                <div className="w-full md:w-1/2">
                    <img src="https://jd.exsythemes.com/img/photo-slider/3-big.jpg" alt="Our wedding" />
                </div>
                <div className="mt-8 md:mt-4 md:w-1/2 pl-0 md:pl-12">
                    <div className="relative mb-8 pb-3">
                        <h3 className="title-underscore font-bold text-3xl uppercase mb-1">Como nos conhecemos</h3>
                    </div>
                    <p className="mb-2">I bumped into Diana again 7 years later in a club, she had literally just returned from a holiday and was out celebrating her birthday. I was back from sea for 4 days before I left again for a few months. The probability that this would happen is crazy and to top it all off, she remembered my name.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="flex flex-wrap">
                <div className="w-full md:w-1/2">
                    <img src="https://jd.exsythemes.com/img/photo-slider/3-big.jpg" alt="Our wedding" />
                </div>
                <div className="mt-8 md:mt-4 md:w-1/2 pl-0 md:pl-12">
                    <div className="relative mb-8 pb-3">
                        <h3 className="title-underscore font-bold text-3xl uppercase mb-1">Como nos conhecemos</h3>
                    </div>
                    <p className="mb-2">I bumped into Diana again 7 years later in a club, she had literally just returned from a holiday and was out celebrating her birthday. I was back from sea for 4 days before I left again for a few months. The probability that this would happen is crazy and to top it all off, she remembered my name.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="flex flex-wrap">
                <div className="w-full md:w-1/2">
                    <img src="https://jd.exsythemes.com/img/photo-slider/3-big.jpg" alt="Our wedding" />
                </div>
                <div className="mt-8 md:mt-4 md:w-1/2 pl-0 md:pl-12">
                    <div className="relative mb-8 pb-3">
                        <h3 className="title-underscore font-bold text-3xl uppercase mb-1">Como nos conhecemos</h3>
                    </div>
                    <p className="mb-2">I bumped into Diana again 7 years later in a club, she had literally just returned from a holiday and was out celebrating her birthday. I was back from sea for 4 days before I left again for a few months. The probability that this would happen is crazy and to top it all off, she remembered my name.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="flex flex-wrap">
                <div className="w-full md:w-1/2">
                    <img src="https://jd.exsythemes.com/img/photo-slider/3-big.jpg" alt="Our wedding" />
                </div>
                <div className="mt-8 md:mt-4 md:w-1/2 pl-0 md:pl-12">
                    <div className="relative mb-8 pb-3">
                        <h3 className="title-underscore font-bold text-3xl uppercase mb-1">Como nos conhecemos</h3>
                    </div>
                    <p className="mb-2">I bumped into Diana again 7 years later in a club, she had literally just returned from a holiday and was out celebrating her birthday. I was back from sea for 4 days before I left again for a few months. The probability that this would happen is crazy and to top it all off, she remembered my name.</p>
                </div>
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

export default LoveHistory;
