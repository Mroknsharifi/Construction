import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AiFillStar } from "react-icons/ai"
import "./styles.css";
import { Pagination, Navigation } from "swiper";
import { useRef } from 'react';
import { Data } from '../../data'
import { ReactComponent as Previous } from '../../assets/images/previous.svg'
import { ReactComponent as Next } from '../../assets/images/next.svg'


const Reviews = () => {
    const swiperRef = useRef();

    return (
        <div className="review w-[1080px] mx-auto mt-14 relative">

            <Swiper
                slidesPerView={3}
                spaceBetween={9}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                    el: '#review-pagination',
                    type: 'bullets',
                }}

                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}

                navigation={{
                    nextEl: '#button-next',
                    prevEl: '#button-prev',
                }}

                modules={[Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{

                    1200: {
                        spaceBetween: 1,
                        slidesPerView: 3
                    },

                    1080: {
                        spaceBetween: 2,
                        slidesPerView: 2
                    },
                    
                    900: {
                        spaceBetween: 0,
                        slidesPerView: 1,
                    },

                }}
            >

                {Data &&
                    Data.map(item =>
                        <SwiperSlide key={item.id}>
                            <div id="gridCell" className="group px-2 pb-5" >
                                <div id='block' className="relative bg-white w-[290px] h-[440px]">
                                    <div id='card' className="py-5">
                                        {
                                            item.review.length > 0 &&
                                            <div id="block" className="invisible opacity-0 absolute group-hover:flex group-hover:top-[0%] group-hover:visible group-hover:opacity-100
                                            group-hover:overflow-hidden group-hover: text-white group-hover: text-sm
                                                justify-center items-center top-[75%] transition-[top] duration-[250ms] w-[290px] h-[440px] bg-yellow-600 p-6">
                                                {item.review}
                                            </div>
                                        }

                                        <div id="container px-5">

                                            <div className="flex justify-center">
                                                {
                                                    item.image === "" ? <div className="h-[100px] w-[100px] rounded-[100px] bg-slate-200">
                                                        <h4 className="w-full text-center text-slate-400 text-[36px] leading-[100px]">{
                                                            String(item.name).charAt(0)
                                                        }</h4>
                                                    </div>
                                                        : <div className="h-[100px] w-[100px] rounded-[100px] bg-slate-200">
                                                            <img src={require('../../assets/images/' + item.image + '.png')} alt={item.image} />
                                                        </div>
                                                }

                                            </div>

                                            <div className="flex justify-center mt-6">
                                                <div><AiFillStar color="#fcca03" size="20px" /></div>
                                                <div><AiFillStar color="#fcca03" size="20px" /></div>
                                                <div><AiFillStar color="#fcca03" size="20px" /></div>
                                                <div><AiFillStar color="#fcca03" size="20px" /></div>
                                                <div><AiFillStar color="#fcca03" size="20px" /></div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-between items-center p-5 mt-8 min-h-[80px] ">
                                            {item.review.length > 0 ? <p className="text-center text-black mt-8 h-[48px] w-[250px] text-ellipsis overflow-hidden whitespace-nowrap">{item.review}</p>
                                                : <p className="text-center mt-8 max-h-[130px]">This customer did not write a review.</p>}
                                            <div className=""></div>
                                        </div>
                                    </div>
                                    <div id="author" className="flex justify-center">
                                        <p className="text-sm mt-16"><strong>{item.name}</strong> {item.date}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>

            <button id="button-prev" onClick={() => swiperRef.current?.slideNext()}> <Previous className="perv" /> </button>
            <button id="button-next" onClick={() => swiperRef.current?.slideNext()}> <Next className="next" />  </button>
            <div id="review-pagination" className=""></div>

        </div>
    )
}

export default Reviews