import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import { BiChevronLeft } from 'react-icons/bi'
import Calendar from '../components/calendar/Calendar'



const Contact = () => {

    const [isOpen, setIsOpen] = useState(false);

    const calenderHandler = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="container mx-auto px-32 sm:max-lg:max-w-full sm:max-lg:px-4">
            <div className="mt-28 mb-14">
                <h2 className="text-center text-3xl relative overflow-hidden text-yellow-600">
                    <span className="relative inline-block before:content-[''] before:absolute 
                    before:top-[50%] before:border-b-2 before:w-[591px] before:my-0 before:mx-[20px] before:right-[100%] before:border-yellow-600
                    after:content-[''] after:absolute after:top-[50%] after:border-b-2 after:w-[591px] after:my-0 after:mx-[20px] after:left-[100%] after:border-yellow-600
                    ">Online Appointments</span>
                </h2>
            </div>

            <div className="mx-32 sm:max-lg:flex-col">

                <div className={isOpen ? "hidden" : "block"}>
                    <h3 className="text-3xl text-yellow-600 mb-8">FREE QUOTE</h3>
                    <div className="flex justify-around items-center">
                        <div className="">
                            <h4 className="font-bold text-lg">Estimate</h4>
                            <p>1 hr | Free</p>
                            <span>Book now for free qutoes</span>
                        </div>
                        <div>
                            <button onClick={calenderHandler} className="font-semibold 
                            bg-yellow-600 text-slate-50 px-3 py-2 rounded-3xl">BOOK</button>
                        </div>
                    </div>
                </div>

                <div className={isOpen ? "mt-28 " : "hidden"}>

                    <button className="text-yellow-600" onClick={calenderHandler}>
                        <div className="flex flex-row-reverse items-center">
                            <span> View all services</span>
                            <BiChevronLeft size="16px" />
                        </div>
                    </button>

                    <div className="flex justify-between sm:max-lg:flex-col">
                        <div className="">
                            <div className="">
                                <Calendar />
                            </div>
                            
                            <div className="mt-6 mx-auto">
                                <div className="mb-8 text-center">
                                    <p className=""><span className="text-center text-slate-500 mb-6">(
                                        GMT-05:00) Eastern Time (US & Canada)</span></p>
                                </div>
                                <div className="grid grid-cols-2 ">
                                    <div>
                                        <div className="text-center">
                                            <p className="font-semibold mb-2"><span>Afternoon</span></p>
                                        </div>
                                        <div className="flex flex-wrap items-start">
                                            <button className="flex outline outline-1 outline-yellow-600 text-slate-900 text-sm px-10 py-1">5:30 PM</button>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-center">
                                            <p className="font-semibold mb-2"><span>Evening</span></p>
                                        </div>
                                        <div className="flex flex-wrap">
                                            <button className="outline outline-1 outline-yellow-600 text-slate-900 text-sm px-8 py-1 mb-2 mr-1">6:00 PM</button>
                                            <button className="outline outline-1 outline-yellow-600 text-slate-900 text-sm px-8 py-1 mb-2 mr-1">6:30 PM</button>
                                            <button className="outline outline-1 outline-yellow-600 text-slate-900 text-sm px-8 py-1 mb-2">7:00 PM</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-[10%]">
                            <h4 className="font-bold text-lg">Estimate</h4>
                            <p>1 hr | Free</p>
                            <span>Book now for free qutoes</span>
                        </div>
                    </div>

                </div>
            </div>

            <div className="grid grid-cols-2 gap-12 mt-10 sm:max-mg:grid-cols-1 sm:max-mg:px-6">
                <div className="px-2">
                    <form className="flex flex-col items-center mt-4">
                        <div className="mb-6 w-full">
                            <h2 className="font-semibold text-xl"><span>Send Message</span></h2>
                        </div>
                        <input type="text" className=" border border-gray-300 text-gray-900 text-sm rounded-lg
                        block w-full p-2.5 mb-8 focus:placeholder:text-yellow-600" placeholder="Name"></input>

                        <input type="email" className=" border border-gray-300 text-gray-900 text-sm rounded-lg
                        block w-full p-2.5 mb-8 focus:placeholder:text-yellow-600" placeholder="Email*"></input>

                        <input type="number" className=" border border-gray-300 text-gray-900 text-sm rounded-lg
                        block w-full p-2.5 mb-8 focus:placeholder:text-yellow-600" placeholder="Phone"></input>

                        <input type="text" className=" border border-gray-300 text-gray-900 text-sm rounded-lg
                        block w-full p-2.5 mb-8 focus:placeholder:text-yellow-600" placeholder="Adress (Street, City, Zip Code)"></input>

                        <textarea className="min-h-[120px]  border border-gray-300 text-gray-900 text-sm rounded-lg
                        block w-full p-2.5" placeholder="Message"></textarea>

                        <button type="submit" className="bg-yellow-600  text-white font-semibold 
                        rounded-3xl py-2.5 px-10 my-6 sm:max-md:w-full">SEND</button>

                        <p className="mb-4 text-xs text-center">This site is protected by reCAPTCHA and the Google
                            <span className="text-yellow-600"> Privacy Policy</span> and
                            <span className="text-yellow-600"> Terms of Service</span> apply.
                        </p>
                    </form>
                </div>

                <div className="sm:max-mg:mx-auto sm:max-mg:px-2 sm:max-mg:text-center">
                    <div className="mb-9 w-full">
                        <h2 className="font-semibold text-xl"><span>Get A Free Quote</span></h2>
                    </div>
                    <div className="text-slate-600 mb-6">
                        <p className="m-0"><span>We aim to be in constant communication with our customers every step of the way</span></p>
                        <p className="m-0"><span><br /></span></p>
                        <p className="m-0"><span>If you have questions, special requests, or simply want a quote, contact us today.</span></p>
                        <p className="m-0"><span><br /></span></p>
                        <p className="m-0"><span>We look forward to serving you!</span></p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-xl mt-12">Mehrdad Construction Company</h4>
                        <p className="mt-4">Toronto , ON</p>
                        <p className="mt-4"><NavLink to="/" className="mt-4 text-yellow-600">
                            (647) 240-4536
                        </NavLink></p>
                    </div>

                    
                    <div className="mt-12 w-full">
                        <h4 className="font-semibold text-xl mb-4">Hours</h4>
                        <p><span className="text-slate-600">Monday - Friday: 8am - 5pm</span></p>
                        <p><span className="text-slate-600">Saturday : Booking only</span></p>
                        <p><span className="text-slate-600">Sunday: Booking only</span></p>
                    </div>
                </div>
            </div>
            <div className="mt-28 mb-14">
                <h2 className="text-center text-3xl relative overflow-hidden text-yellow-600">
                    <span className="relative inline-block before:content-[''] before:absolute 
                    before:top-[50%] before:border-b-2 before:w-[591px] before:my-0 before:mx-[20px] before:right-[100%] before:border-yellow-600
                    after:content-[''] after:absolute after:top-[50%] after:border-b-2 after:w-[591px] after:my-0 after:mx-[20px] after:left-[100%] after:border-yellow-600
                    ">Instagram</span>
                </h2>
            </div>

            <div className="text-center text-lg">
                <p><span>Feed coming soon</span></p>
            </div>
        </div>
        
    )
}

export default Contact