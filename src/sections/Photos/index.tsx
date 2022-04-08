import { Swiper, SwiperSlide } from 'swiper/react'
import { SlidePrevButton, SlideNextButton } from './SlidesButton'
import { useTranslation } from 'react-i18next'

// Import Swiper styles
import 'swiper/css'
import './index.css'

function Photos() {
    const { t } = useTranslation()

    return (
        <section className="photos w-full relative pt-10 pb-10 block whitespace-normal break-words" id="photos">
            <h2 className="mb-12 capitalize text-6xl sm:text-9xl text-center">{t('photos.title')}</h2>
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
                    <img src="/photos/our-photos-001.jpeg" alt="Our wedding" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/photos/our-photos-002.jpeg" alt="Our wedding" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/photos/our-photos-003.jpeg" alt="Our wedding" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/photos/our-photos-004.jpeg" alt="Our wedding" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/photos/our-photos-005.jpeg" alt="Our wedding" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/photos/our-photos-006.jpeg" alt="Our wedding" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/photos/our-photos-007.jpeg" alt="Our wedding" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/photos/our-photos-008.jpeg" alt="Our wedding" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/photos/our-photos-009.jpeg" alt="Our wedding" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/photos/our-photos-010.jpeg" alt="Our wedding" />
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
