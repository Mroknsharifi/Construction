import React from 'react'
import { NavLink } from "react-router-dom"
import Home1 from "../assets/images/Home-1.jpg";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import h1 from "../assets/images/h1.jpg"
import h2 from "../assets/images/h2.jpg"
import h3 from "../assets/images/h3.jpg"
import h4 from "../assets/images/h4.jpg"
import h5 from "../assets/images/h5.jpg"
import h6 from "../assets/images/h6.jpg"
import h7 from "../assets/images/h7.png"
import h8 from "../assets/images/h8.png"
import h9 from "../assets/images/h9.png"


const home = () => {

  SwiperCore.use()

  return (
    <section>
      <div className="w-full h-[400px] bg-no-repeat bg-cover flex flex-col items-center justify-center" style={{ backgroundImage: `url(${Home1})`}}>
          <div className="animate-pulse w-[400px] h-[100px] bg-white bg-opacity-75 rounded flex flex-col justify-center items-center">
            <h1 className="text-yellow-600 text-center text-lg font-serif ">DESIGN.PLAN.BUILD</h1>
            <p className="font-semibold text-center text-[14px] after:content-['']">Your Dream Brought To Reality!</p>
          </div>
      </div>

      <div className="mx-auto px-56 mt-36 mb-24 sm:max-lg:px-0 sm:max-lg:mx-8 sm:max-md: ">
        <h4 className="text-yellow-600 text-center font-bold text-4xl my-12">Welcome</h4>

        <p className="text-center text-slate-600 text-xl mb-12 sm:max-md:m-0">MTM General Contracting has been servicing Toronto for over 10 years. We are a family owned business with employees that have achieved over 10-15 years of experience in renovations. MTM specializes in interior renovations, exterior renovations, re-modelling and new builds. </p>

        <p className="text-center text-slate-600 text-xl mb-12">We have provided services to hundreds of clients within the GTA. We have helped clients turn their small, tight spaced homes into open concept designs with extensive amount of living space. Clients who spend most of their time in the kitchen have loved the idea of re-modelling their cabinets with tremendous amount of storage. We have designed backyards from small patios into large comfortable spaces with modern style interlocking and fire pits for those beautiful summer nights. Here at MTM General Contracting we provide top quality service.

        </p>
        <p className="text-center text-slate-600 text-xl mb-12">We assist our clients beforehand with 3D rendering and drawings. We provide our clients with their dream home design showing the final layouts of the project beforehand. We work with top quality softwares and platforms that provide us with tools and products presenting you with selections down to every detail. Our key mission is to always keep our clients satisfied resulting in great success. At MTM General Contracting, we treat and respect clients homes as our own. We are always there to answer questions and give suggestions when needed, even after hours. We strive to make sure our clients have open communication with MTM General Contracting at all times.
        </p>
        <p className="text-center text-slate-600 text-xl mb-12">Design. Plan. Build. is our motto and we live by our words. MTM General Contracting goes above and beyond to keep clients satisfied with the design and quality of workmanship
        </p>

        <div className="flex flex-col items-center">
          <NavLink to="/"><button className="bg-yellow-600 text-slate-50 hover:bg-yellow-500 font-bold py-4 px-8 rounded-full">FIND OUT MORE</button></NavLink>
        </div>
      </div>

      <div className="gallery mb-20">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 1000
          }}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <img src={h1} alt="" />
          </SwiperSlide>
          <SwiperSlide >
            <img src={h2} alt="" />
          </SwiperSlide>
          <SwiperSlide >
            <img src={h3} alt="" />
          </SwiperSlide>
          <SwiperSlide >
            <img src={h4} alt="" />
          </SwiperSlide>
          <SwiperSlide >
            <img src={h5} alt="" />
          </SwiperSlide>
          <SwiperSlide >
            <img src={h6} alt="" />
          </SwiperSlide>
        </Swiper>

      </div>

      <div className="container mx-auto px-36 mb-14 sm:max-md:px-0">
        <div className="grid grid-cols-2 gap-16 sm:max-md:grid-cols-1">
          <div>
            <h4 className="text-lg font-bold text-center mb-8">On-time Completion</h4>
            <p className="text-center">We will work with you to meet deadlines and coordinate with other related projects. We will maintain open communication with you to keep you up to date on the status of your job. We do this to guarantee that the project is completed according to your preferences.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-center mb-8">Great Service</h4>
            <p className="text-center"> We combine our industry knowledge, the highest quality building supplies and equipment, and our dedication to deliver exceptional service to our clients. We will stay in touch, keeping you up to date on the renovation process.</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-40 mt-40 mb-10 sm:max-md:px-0">
        <div className="flex flex-row justify-around sm:max-md:flex-wrap sm:max-md:items-center">
          <div>
            <img src={h7} width="103px" height="100px" alt="" />
            </div>
          <div className="sm:max-md:mb-4">
            <img src={h9} width="303px" height="200px" alt="" />
          </div>
          <div className="sm:max-md:mb-4">
            <img src={h8} width="103px" height="100px" alt="" />
          </div>
        </div>
      </div>

    </section>

  )


}

export default home