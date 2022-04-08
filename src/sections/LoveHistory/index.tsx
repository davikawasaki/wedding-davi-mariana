import { Swiper, SwiperSlide } from 'swiper/react'
import { SlidePrevButton, SlideNextButton } from './SlidesButton'
import { useTranslation } from 'react-i18next'

// Import Swiper styles
import 'swiper/css'
import './index.css'

function LoveHistory() {
  const { t } = useTranslation()

  return (
    <section className="love-history w-full relative pt-10 pb-10 mb-12 block whitespace-normal break-words" id="love-history">
        <h2 className="px-4 mb-12 capitalize text-6xl sm:text-9xl text-center">{t('loveStory.title')}</h2>
        <Swiper
            className="h-1/6 w-4/5"
            spaceBetween={0}
            slidesPerView={1}
            // onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className="flex flex-wrap my-12 items-center text-justify">
                <div className="w-full md:w-1/2">
                    <img src="/story/our_story_001.jpg" alt="Our wedding" />
                </div>
                <div className="md:w-1/2 pl-0 md:px-12 mt-12 md:mt-0">
                    {
                        t<string, string[]>('loveStory.gallery.sectionOne.text', { returnObjects: true }).map(text => {
                            return (<p className="mb-2">{text}</p>)
                        })
                    }
                </div>
            </SwiperSlide>
            <SwiperSlide className="flex flex-wrap my-12 items-center">
                <div className="w-full md:w-1/2">
                    <img src="/story/our_story_002.jpg" alt="Our wedding" />
                </div>
                <div className="md:w-1/2 pl-0 md:px-12 mt-12 md:mt-0">
                    <div className="relative mb-8 pb-3">
                        <h3 className="title-underscore font-bold text-3xl uppercase mb-1 text-center">{t('loveStory.gallery.sectionTwo.title')}</h3>
                    </div>
                    {
                        t<string, string[]>('loveStory.gallery.sectionTwo.text', { returnObjects: true }).map(text => {
                            return (<p className="mb-2 italic text-justify">{text}</p>)
                        })
                    }
                </div>
            </SwiperSlide>
            <SwiperSlide className="flex flex-wrap my-12 items-center text-justify">
                <div className="w-full md:w-1/2">
                    <img src="/story/our_story_003.jpg" alt="Our wedding" />
                </div>
                <div className="md:w-1/2 pl-0 md:px-12 mt-12 md:mt-0">
                    {
                        t<string, string[]>('loveStory.gallery.sectionThree.text', { returnObjects: true }).map(text => {
                            return (<p className="mb-2">{text}</p>)
                        })
                    }
                </div>
            </SwiperSlide>
            <SwiperSlide className="flex flex-wrap my-12 items-center text-justify">
                <div className="w-full md:w-1/2">
                    <img src="/story/our_story_004.jpg" alt="Our wedding" />
                </div>
                <div className="md:w-1/2 pl-0 md:px-12 mt-12 md:mt-0">
                    {
                        t<string, string[]>('loveStory.gallery.sectionFour.text', { returnObjects: true }).map(text => {
                            return (<p className="mb-2">{text}</p>)
                        })
                    }
                </div>
            </SwiperSlide>
            <SwiperSlide className="flex flex-wrap my-12 items-center text-justify">
                <div className="w-full md:w-1/2">
                    <img src="/story/our_story_005.jpg" alt="Our wedding" />
                </div>
                <div className="md:w-1/2 pl-0 md:px-12 mt-12 md:mt-0">
                    {
                        t<string, string[]>('loveStory.gallery.sectionFive.text', { returnObjects: true }).map(text => {
                            return (<p className="mb-2">{text}</p>)
                        })
                    }
                </div>
            </SwiperSlide>
            <SwiperSlide className="flex flex-wrap my-12 items-center text-justify">
                <div className="w-full md:w-1/2">
                    <img src="/story/our_story_006.jpg" alt="Our wedding" />
                </div>
                <div className="md:w-1/2 pl-0 md:px-12 mt-12 md:mt-0">
                    {
                        t<string, string[]>('loveStory.gallery.sectionSix.text', { returnObjects: true }).map(text => {
                            return (<p className="mb-2">{text}</p>)
                        })
                    }
                </div>
            </SwiperSlide>
            <SwiperSlide className="flex flex-wrap my-12 items-center text-justify">
                <div className="w-full md:w-1/2">
                    <img src="/story/our_story_007.jpg" alt="Our wedding" />
                </div>
                <div className="md:w-1/2 pl-0 md:px-12 mt-12 md:mt-0">
                    {
                        t<string, string[]>('loveStory.gallery.sectionSeven.text', { returnObjects: true }).map(text => {
                            return (<p className="mb-2">{text}</p>)
                        })
                    }
                </div>
            </SwiperSlide>
            <SwiperSlide className="flex flex-wrap my-12 items-center text-justify">
                <div className="w-full md:w-1/2">
                    <img src="/story/our_story_008.jpg" alt="Our wedding" />
                </div>
                <div className="md:w-1/2 pl-0 md:px-12 mt-12 md:mt-0">
                    {
                        t<string, string[]>('loveStory.gallery.sectionEight.text', { returnObjects: true }).map(text => {
                            return (<p className="mb-2">{text}</p>)
                        })
                    }
                </div>
            </SwiperSlide>
            <SwiperSlide className="flex flex-wrap my-12 items-center text-justify">
                <div className="w-full md:w-1/2">
                    <img src="/story/our_story_009.jpg" alt="Our wedding" />
                </div>
                <div className="md:w-1/2 pl-0 md:px-12 mt-12 md:mt-0">
                    {
                        t<string, string[]>('loveStory.gallery.sectionNine.text', { returnObjects: true }).map(text => {
                            return (<p className="mb-2">{text}</p>)
                        })
                    }
                </div>
            </SwiperSlide>
            <SwiperSlide className="flex flex-wrap my-12 items-center text-justify">
                <div className="w-full md:w-1/2">
                    <img src="/story/our_story_010.jpg" alt="Our wedding" />
                </div>
                <div className="md:w-1/2 pl-0 md:px-12 mt-12 md:mt-0">
                    {
                        t<string, string[]>('loveStory.gallery.sectionTen.text', { returnObjects: true }).map(text => {
                            return (<p className="mb-2">{text}</p>)
                        })
                    }
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
