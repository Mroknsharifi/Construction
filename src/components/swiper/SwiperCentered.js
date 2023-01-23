import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Thumbs, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'
import './styles.css'
import { ReactComponent as Previous } from '../../assets/images/previous-img.svg'
import { ReactComponent as Next } from '../../assets/images/next-img.svg'
import { ReactComponent as PreviousThumb } from '../../assets/images/previous-thumb.svg'
import { ReactComponent as NextThumb } from '../../assets/images/next-thumb.svg'


SwiperCore.use([Navigation, Pagination, Thumbs, Autoplay])

const SwiperCentered = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (

        <div className="main">
            <Swiper
                id="main"
                thumbs={{
                    swiper: thumbsSwiper &&
                        !thumbsSwiper.destroyed ? thumbsSwiper : null
                }}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false
                }}
                rewind={true}
                tag='section'
                wrapperTag="ul"
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                spaceBetween={4}
                slidesPerView={2.75}
                
                // watchSlidesProgress={true}
                // watchSlidesVisibility={true}
                breakpoints={{
                    320: {
                        slidesPerView:1,
                        spaceBetween: 6,
                    },
                    640: {
                        slidesPerView:1.5,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView:2,
                        spaceBetween: 15,
                    },
                    1280: {
                        slidesPerView:2,
                        spaceBetween: 10,
                    }


                }}
                
            >
                {(() => {
                    const arr = [];
                    for (let i = 1; i < 35; i++) {
                        arr.push(
                            <SwiperSlide key={i} tag="li">
                                <img src={require('../../assets/images/d' + i + '.jpg')} alt="" />
                            </SwiperSlide>
                        )
                    }
                    return arr
                })()
                }

            </Swiper>

            <div className="swiper-button-next">
                <Next className="next" />
            </div>
            <div className="swiper-button-prev" >
                <Previous className="perv" />
            </div>

            <Swiper
                id="thumb"
                spaceBetween={4}
                slidesPerView={8}
                rewind={true}
                onSwiper={setThumbsSwiper}
                navigation={{
                    nextEl: ".button-next",
                    prevEl: ".button-prev",
                }}
                longSwipesRatio={0.3}
                grabCursor={true}
                breakpoints={{
                    320: {
                        slidesPerView:3,
                        spaceBetween: 2,
                    },
                    640: {
                        slidesPerView:4,
                        spaceBetween: 4,
                    },
                    768: {
                        slidesPerView:8,
                        spaceBetween: 4,
                    },
                }}
            >
                {(() => {
                    const arr = [];
                    for (let i = 1; i < 35; i++) {
                        arr.push(
                            <SwiperSlide key={i} tag="li">
                                <img src={require('../../assets/images/d' + i + '.jpg')} alt="" />
                            </SwiperSlide>
                        )
                    }
                    return arr
                })()
                }
            </Swiper>

            <div className="button-prev" >
                <NextThumb className="next" />
            </div>
            <div className="button-next">
                <PreviousThumb className="perv" />
            </div>



        </div>
    )
}

export default SwiperCentered