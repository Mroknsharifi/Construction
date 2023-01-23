import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'
import a1 from "../assets/images/a1.jpg"
import a2 from "../assets/images/a2.png"


const About = () => {
  return (

    <div className="container mx-auto px-20 sm:max-md:px-16 sm:max-md:min-w-full">
      <div className="mt-28 mb-14">
        <h2 className="text-center text-3xl relative overflow-hidden text-yellow-600">
          <span className="relative inline-block before:content-[''] before:absolute 
          before:top-[50%] before:border-b-2 before:w-[591px] before:my-0 before:mx-[20px] before:right-[100%] before:border-yellow-600
          after:content-[''] after:absolute after:top-[50%] after:border-b-2 after:w-[591px] after:my-0 after:mx-[20px] after:left-[100%] after:border-yellow-600
          ">Our Team</span>
        </h2>
      </div>

      <div className="grid grid-cols-7 gap-16 mb-28 sm:max-lg:flex sm:max-lg:flex-col sm:max-lg:items-center">
        <div className="col-span-2 sm:max-lg:min-w-full">
          <img src={a1} alt="a1" className="sm:max-lg:w-full" />
        </div>
        <div className="col-span-5">
          <p className="mb-6"><span><strong>Mohammad, Owner</strong></span></p>
          <p className="text-slate-600">Mohammad has been in construction for over 15 years. He started out painting houses right after high school. He has learned and acquired skills on how to build a house from the foundation up. 10 years ago Mohammad turned his passion into a business that focuses on the long-term goals and satisfaction of his clients.</p>

          <p className="mb-6 mt-6"><span><strong>Maria, Business Manager</strong></span></p>
          <p className="text-slate-600">Maria has 10 years of experience working with home building companies. She leads the team in administrative and marketing services. With a sustainable background in design, not only is she able to help your make your dream home into your reality, she is more than happy to lend her 'eye' to help you make that come true.</p>

          <p className="mb-6 mt-6"><span><strong>Naser, Team Leader</strong></span></p>
          <p className="text-slate-600">Naser has been with the company for over 6 years. He is responsible for directing team members with various tasks. He has the knowledge and organizational skills to meet established project time lines and job specifications. Naser is able to maintain and ensure the highest standard of quality and professionalism. He has the ability to overcome adversity, communicate clearly and deliver solutions to problems.</p>
        </div>
      </div>

      <div className="mt-28 mb-14">
        <h2 className="text-center text-3xl relative overflow-hidden text-yellow-600">
          <span className="relative inline-block before:content-[''] before:absolute 
          before:top-[50%] before:border-b-2 before:w-[591px] before:my-0 before:mx-[20px] before:right-[100%] before:border-yellow-600
          after:content-[''] after:absolute after:top-[50%] after:border-b-2 after:w-[591px] after:my-0 after:mx-[20px] after:left-[100%] after:border-yellow-600
          ">What We Do</span>
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-8 md:max-lg:grid-cols-2 sm:max-md:grid-cols-1">
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-8 font-bold text-lg">Decks & Fences</h2>
          <p className="text-slate-600 mb-8 min-h-[120px]">Design and installation of decks and fences. We can install various styles of decks and fences from cedar, pressure treated and or vinyl/pvc.</p>
          <button className="bg-yellow-600 text-white font-bold px-9 py-4 rounded-3xl"><NavLink to="/">FIND OUT MORE</NavLink></button>
        </div>

        <div className="flex flex-col items-center text-center">
          <h2 className="mb-8 font-bold text-lg">Landscaping</h2>
          <p className="text-slate-600 mb-8 min-h-[120px]">Spring into new designs for your landscaping needs. We provide various services in landscaping such as interlocking, retaining walls, patios and sod installation. </p>
          <button className="bg-yellow-600 text-white font-bold px-9 py-4 rounded-3xl"><NavLink to="/">FIND OUT MORE</NavLink></button>
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-8 font-bold text-lg">Commercial</h2>
          <p className="text-slate-600 mb-8 min-h-[120px]">Providing commercial renovations to upgrade your property and increase sales. We offer a wide variety of various renovations, specializing with commercial material and working with the code requirements.</p>
          <button className="bg-yellow-600 text-white font-bold px-9 py-4 rounded-3xl"><NavLink to="/">FIND OUT MORE</NavLink></button>
        </div>
        <div className="flex flex-col items-center text-center mt-6">
          <h2 className="mb-8 font-bold text-lg">Kitchen Remodel</h2>
          <p className="text-slate-600 mb-8 min-h-[120px]"> We have all of your kitchen needs covered, from simple projects like cabinet refacing to complete gut-reno. Providing a wide variety of materials and colours to choose from.</p>
          <button className="bg-yellow-600 text-white font-bold px-9 py-4 rounded-3xl"><NavLink to="/">FIND OUT MORE</NavLink></button>
        </div>
        <div className="flex flex-col items-center text-center mt-6">
          <h2 className="mb-8 font-bold text-lg">Bathroom Remodel</h2>
          <p className="text-slate-600 mb-8 min-h-[120px]">Turn any size bathroom into your dream bathroom with an affordable budget. Vanity, toilets, tiles, stand up showers or curb less showers.</p>
          <button className="bg-yellow-600 text-white font-bold px-9 py-4 rounded-3xl"><NavLink to="/">FIND OUT MORE</NavLink></button>
        </div>
        <div className="flex flex-col items-center text-center mt-6">
          <h2 className="mb-8 font-bold text-lg">Basement</h2>
          <p className="text-slate-600 mb-8 min-h-[120px]">Have an empty basement? We can provide options to turn your basement space into a beautiful living space.</p>
          <button className="bg-yellow-600 text-white font-bold px-9 py-4 rounded-3xl"><NavLink to="/">FIND OUT MORE</NavLink></button>
        </div>
      </div>

      <div className="min-w-1/3 mx-auto mt-16">
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-8 font-bold text-lg">Renovations</h2>
          <p className="text-slate-600 mb-8 lg:max-w-[450px]">You name it, we renovate it. Any size renovations, no jobs is too small for us. Offering top quality craftsmanship in your renovation needs.</p>
          <button className="bg-yellow-600 text-white font-bold px-9 py-4 rounded-3xl"><NavLink to="/">FIND OUT MORE</NavLink></button>
        </div>
      </div> 

      <div className="mt-28 mb-14">
        <h2 className="text-center text-3xl relative overflow-hidden text-yellow-600">
          <span className="relative inline-block before:content-[''] before:absolute 
          before:top-[50%] before:border-b-2 before:w-[591px] before:my-0 before:mx-[20px] before:right-[100%] before:border-yellow-600
          after:content-[''] after:absolute after:top-[50%] after:border-b-2 after:w-[591px] after:my-0 after:mx-[20px] after:left-[100%] after:border-yellow-600
          ">Connect With Us</span>
        </h2>
      </div>

      <div className="flex items-center justify-center">
        <NavLink className="pr-[50px]" to="https://www.facebook.com/"><FaFacebook size="40px" color="blue" /></NavLink>
        <NavLink to="https://www.instagram.com/"><FaInstagram size="40px" color="red" /></NavLink>
      </div>

      <div className="mt-24">
        <div className="flex flex-col items-center">
          <img src={a2} alt="" />
        </div>
      </div>
    </div>


  )
}

export default About