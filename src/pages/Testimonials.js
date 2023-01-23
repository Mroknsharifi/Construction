import React  from 'react'
import {NavLink} from 'react-router-dom'
import t1 from '../assets/images/t1.jpg'
import t2 from '../assets/images/t2.jpg'
import { AiFillStar } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import Reviews from '../components/reviews/Reviews'
import Stars from '../assets/images/stars.png'




const Testimonials = () => {
  return (
    <div>
      <div className="w-full h-[720px] bg-no-repeat bg-cover" style={{ backgroundImage: `url(${t1})` }}>
        <section className="pt-[2%]">
          <div className="container mx-auto px-1 pt-[1%] mg:max-md:px-1 mg:max-lg:min-w-full">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl text-white text-center font-bold font-serif mb-[60px]">Reviews</h1>
              <div className="">
                <div className="grid grid-cols-3 gap-6 md:max-mg:grid-cols-2 sm:max-md:grid-col-1">
                  <div id="gridCell" className="group px-2 pb-5 sm:max-mg:hidden">
                    <div id='block' className="relative bg-white w-[290px] h-[440px]">
                      <div id='card' className="py-5">
                        <div id="block" className="invisible opacity-0 absolute group-hover:flex group-hover:top-[0%] group-hover:visible group-hover:opacity-100
                        justify-center items-center top-[75%] transition-[top] duration-[250ms] w-[290px] h-[440px] bg-yellow-600 p-6 ">
                          <p className="text-white text-center">Maria from MTM offered us a ton of help during our renovation. She went above and beyond our expectation making sure everything was within our budget. She was very communicative and understanding.</p>
                        </div>
                        <div id="container px-5">
                          <div className="flex justify-center">
                            <div className="h-[100px] w-[100px] rounded-[100px] bg-slate-200">
                              <h4 className="w-full text-center text-slate-400 text-[36px] leading-[100px]">E</h4>
                            </div>
                          </div>
                          <div className="flex justify-center mt-6">
                            <div><AiFillStar color="#fcca03" size="20px" /></div>
                            <div><AiFillStar color="#fcca03" size="20px" /></div>
                            <div><AiFillStar color="#fcca03" size="20px" /></div>
                            <div><AiFillStar color="#fcca03" size="20px" /></div>
                            <div><AiFillStar color="#fcca03" size="20px" /></div>
                          </div>
                        </div>
                        <div className="flex flex-col justify-center items-center p-5">
                          <h4 id='title' className="mb-4 text-lg font-semibold">Kitchen renovation</h4>
                          <p className="text-center mt-4">"Maria from MTM offered us a ton of help during our ren..."</p>
                        </div>
                      </div>
                      <div id="author" className="flex justify-center">
                        <p className="text-sm mt-16"><strong>Elizabeth</strong>-2020-02-10</p>
                      </div>
                    </div>
                  </div>
                  <div id="gridCell" className="group px-2 pb-5 sm:max-md:hidden">
                    <div id='block' className="relative bg-white w-[290px] h-[440px]">
                      <div id='card' className="py-5">
                        <div id="block" className="invisible opacity-0 absolute group-hover:flex group-hover:top-[0%] group-hover:visible group-hover:opacity-100
                        justify-center items-center top-[75%] transition-[top] duration-[250ms] w-[290px] h-[440px] bg-yellow-600 p-6 ">
                          <p className="text-white text-center">If you want a beautiful basement, contact Mohammad. Our basement renovation turned out amazing, They provided 3D renderings for my bathroom & kitchen. Overall amazing craftsmanship & finished on time.</p>
                        </div>
                        <div id="container px-5">
                          <div className="flex justify-center">
                            <div className="h-[100px] w-[100px] rounded-[100px] bg-slate-200">
                              <h4 className="w-full text-center text-slate-400 text-[36px] leading-[100px]">S</h4>
                            </div>
                          </div>
                          <div className="flex justify-center mt-6">
                            <div><AiFillStar color="#fcca03" size="20px" /></div>
                            <div><AiFillStar color="#fcca03" size="20px" /></div>
                            <div><AiFillStar color="#fcca03" size="20px" /></div>
                            <div><AiFillStar color="#fcca03" size="20px" /></div>
                            <div><AiFillStar color="#fcca03" size="20px" /></div>
                          </div>
                        </div>
                        <div className="flex flex-col justify-between items-center p-5">
                          <h4 id='title' className="mb-4 text-lg font-semibold">Full basement renov...</h4>
                          <p className="text-center mt-4">"If you want a beautiful basement, contact Moham..."</p>
                        </div>
                      </div>
                      <div id="author" className="flex justify-center">
                        <p className="text-sm mt-16"><strong>Syed Akbari</strong>-2019-10-25</p>
                      </div>
                    </div>
                  </div>
                  <div id="gridCell" className="group px-2 pb-5">
                    <div id='block' className="relative bg-white w-[290px] h-[440px]">
                      <div id='card' className="py-5">
                        <div id="block" className="invisible opacity-0 absolute group-hover:flex group-hover:top-[0%] group-hover:visible group-hover:opacity-100
                        justify-center items-center top-[75%] transition-[top] duration-[250ms] w-[290px] h-[440px] bg-yellow-600 p-6 ">
                          <p className="text-white text-center">Custom built deck from scratch. This is by far the fastest most organized crew I have ever hired. These guys had my deck installed in under 1 week using composite material. THANKS FOR THE HARD WORK!</p>
                        </div>
                        <div id="container px-5">
                          <div className="flex justify-center">
                            <div className="h-[100px] w-[100px] rounded-[100px] bg-slate-200">
                              <h4 className="w-full text-center text-slate-400 text-[36px] leading-[100px]">E</h4>
                            </div>
                          </div>
                          <div className="flex justify-center mt-6">
                            <div><AiFillStar color="#fcca03" size="20px" /></div>
                            <div><AiFillStar color="#fcca03" size="20px" /></div>
                            <div><AiFillStar color="#fcca03" size="20px" /></div>
                            <div><AiFillStar color="#fcca03" size="20px" /></div>
                            <div><AiFillStar color="#fcca03" size="20px" /></div>
                          </div>
                        </div>
                        <div className="flex flex-col justify-between items-center p-5">
                          <h4 id='title' className="mb-4 text-lg font-semibold">Kitchen renovation</h4>
                          <p className="text-center mt-4">"Custom built deck from scratch. This is by fa..."</p>
                        </div>
                      </div>
                      <div id="author" className="flex justify-center">
                        <p className="text-sm mt-16"><strong>James Croftworth</strong>-2019-07-12</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="w-full h-[848px] bg-no-repeat bg-cover z-0" style={{ backgroundImage: `url(${t2})` }}>
        <section className="pt-[2%] z-10">
          <div className="container mx-auto pt-[1%]">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl text-white text-center font-bold font-serif mb-[60px]" >Google</h1>
              <div id='element' className="">
                <span id="element1">
                  <div id="containerr" className="flex justify-center items-center px-[2%]">
                    <div id="containerr1" className="flex flex-col justify-center items-center px-[2%]">
                      <div id="containerr2" className="px-[2%]">
                        <div id="heading">
                          <div className="flex items-center mb-6 text-slate-50">
                            <div className="mt-1"><FcGoogle size="30px" /></div>
                            <h2 className="ml-4 text-2xl font-semibold">4.8</h2>
                            <div className="flex flex-col ml-4 min-w-[250px]">
                              <p className="mb-2">Mehrdad Construction Company</p>
                              <div className="flex justify-start">
                                <div><AiFillStar color="#fcca03" size="20px" /></div>
                                <div><AiFillStar color="#fcca03" size="20px" /></div>
                                <div><AiFillStar color="#fcca03" size="20px" /></div>
                                <div><AiFillStar color="#fcca03" size="20px" /></div>
                                <div><AiFillStar color="#fcca03" size="20px" /></div>
                              </div>
                              <p className="mt-2 text-xs">22 Reviews</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id='Reviews'>
                        <Reviews />
                      </div>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="pt-20">
        <div className="container mx-auto px-20 sm:max-md:max-w-full">
          <div className="mb-14">
            <h2 className="text-center text-3xl relative overflow-hidden text-yellow-600">
              <span className="relative inline-block before:content-[''] before:absolute 
            before:top-[50%] before:border-b-2 before:w-[591px] before:my-0 before:mx-[20px] before:right-[100%] before:border-yellow-600
            after:content-[''] after:absolute after:top-[50%] after:border-b-2 after:w-[591px] after:my-0 after:mx-[20px] after:left-[100%] after:border-yellow-600
            ">Homestars</span>
            </h2>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="w-[400px] p-0">
              <div className="grid grid-row-7 p-0 gap-0 border-x-[1px] border-gray-300 ">
                <div className="row-span-[5.56%] bg-[#28A9E2]  border-gray-300" >
                  <div className="w-[100%] flex justify-start items-center">
                    <img src={Stars} width="70px" height="20px" alt="" />
                    <h3 className="text-[#fff] pl-2">Mehrdad Construction Company</h3>
                  </div>
                </div>
                <div className="row-span-[16.67%] px-2 py-4 border-y-[1px] border-gray-300">
                  <div className="flex justify-between">
                    <h4 className="text-[9px] font-semibold">Bathroom Renovation</h4>
                    <span className="text-[9px] font-semibold">10/10</span>
                  </div>
                  <p className="text-[8px]">Our shower needed to be rebuilt due to water damage behind the tiles after 20...</p>
                  <div className="flex px-8">
                    <span className="text-[8px] text-blue-500 mr-4">DarrenP</span>
                    <span className="text-[8px] text-gray-500">Jan 03, 2023</span>
                  </div>
                </div>
                <div className="row-span-[16.67%] px-2 py-4 border-y-[1px] border-gray-300">
                  <div className="flex justify-between">
                    <h4 className="text-[9px] font-semibold">New Fencing & Garden Border</h4>
                    <span className="text-[9px] font-semibold">10/10</span>
                  </div>
                  <p className="text-[8px]">Don't waste time getting estimates from other companies! MTM pricing was far...</p>
                  <div className="flex px-8">
                    <span className="text-[8px] text-blue-500 mr-4">S Holmes in Pickering</span>
                    <span className="text-[8px] text-gray-500">Jul 13, 2022</span>
                  </div>
                </div>
                <div className="row-span-[16.67%] px-2 py-4 border-y-[1px] border-gray-300">
                  <div className="flex justify-between">
                    <h4 className="text-[9px] font-semibold">FENCE & GATE</h4>
                    <span className="text-[9px] font-semibold">10/10</span>
                  </div>
                  <p className="text-[8px]">Just had a fence and gate installed. Mohammad & crew were incredible. We re...</p>
                  <div className="flex px-8">
                    <span className="text-[8px] text-blue-500 mr-4">tk</span>
                    <span className="text-[8px] text-gray-500">Nov 04, 2021</span>
                  </div>
                </div>
                <div className="row-span-[16.67%] px-2 py-4 border-y-[1px] border-gray-300">
                  <div className="flex justify-between">
                    <h4 className="text-[9px] font-semibold">Full Backyard Renovation</h4>
                    <span className="text-[9px] font-semibold">10/10</span>
                  </div>
                  <p className="text-[8px]">We are so happy to have found Mohammad and MTM General Contracting. He replac...</p>
                  <div className="flex px-8">
                    <span className="text-[8px] text-blue-500 mr-4">DarrenP</span>
                    <span className="text-[8px] text-gray-500">Jun 30, 2021</span>
                  </div>
                </div>
                <div className="row-span-[16.67%] px-2 py-4 border-y-[1px] border-gray-300">
                  <div className="flex justify-between">
                    <h4 className="text-[9px] font-semibold">New Wood Fence</h4>
                    <span className="text-[9px] font-semibold">10/10</span>
                  </div>
                  <p className="text-[8px]">We had our very old chain link fence removed and replaced with a 6' full priv...</p>
                  <div className="flex px-8">
                    <span className="text-[8px] text-blue-500 mr-4">Angela</span>
                    <span className="text-[8px] text-gray-500">May 29, 2020</span>
                  </div>
                </div>
                <div className="row-span-[11.11%] border-y-[1px] border-gray-300">
                  <div className="flex justify-center items-center p-2">
                    <NavLink to="https://homestars.com/"><button className="bg-[#28A9E2] text-[#fff] p-2 text-[10px] rounded-md mr-2">Read more reviews</button></NavLink>
                    <NavLink to="https://homestars.com/"><button className="bg-[#28A9E2] text-[#fff] p-2 text-[10px] rounded-md">Write a review</button></NavLink>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials