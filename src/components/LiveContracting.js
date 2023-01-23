import React , { useState } from 'react'
import { IoChatboxSharp } from "react-icons/io5"
import { BsFillCircleFill } from "react-icons/bs"
import { IoArrowRedo } from "react-icons/io5"
import { GrClose } from "react-icons/gr"
import { RiCloseLine } from "react-icons/ri"



const LiveContracting = () => {

    const [showForm, setShowForm] = useState(false);
    const formHandler = () => {
        setShowForm(!showForm)
    }


    return (
        <div>
            <div className="fixed z-10 bottom-10 right-10 ">
                <button className="flex flex-col items-center relative" onClick={formHandler}>
                    <div className="absolute top-[13px]">
                        {showForm ? <GrClose size="25px" color="white" /> : <IoChatboxSharp size="25px" color="white" /> }
                    </div>
                    <BsFillCircleFill color={showForm ? "#64748b" : "rgb(202 138 4)"} size="50px" />
                </button>
            </div>

            <div className={showForm ? "fixed w-[350px] bottom-28 right-4 border-solid border-3 border-gray-900 rounded-xl z-10 bg-white shadow-2xl sm:max-md:w-full sm:max-md:inset-0"
            : "hidden"}>
                <div className="h-[10%] bg-yellow-600 rounded-t-md">
                    <h2 className="text-white text-lg font-semibold py-4 pl-3 pr-9 sm:max-md:text-xl">
                        Mehrdad Construction Company</h2>
                    <button onClick={formHandler} className="fixed top-5 right-4 z-40 md:hidden"><RiCloseLine color="#fefefe" size="25px"/></button>
                </div>

                <div className="px-5 ">
                    <div className="text-left mt-8 pl-0"><IoArrowRedo color="black" size="30px" /></div>
                    <form className="max-w-xs flex flex-col items-center mt-4 sm:max-md:w-full sm:max-md:max-w-full">

                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                        block w-full p-2.5 mb-4 focus:placeholder:text-yellow-600" placeholder="Name"></input>

                        <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                        block w-full p-2.5 mb-4 focus:placeholder:text-yellow-600" placeholder="Email*"></input>

                        <textarea className="min-h-[120px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                        block w-full p-2.5" placeholder="How can we help?*"></textarea>

                        <button type="submit" className="bg-yellow-600  text-white font-semibold 
                        rounded-3xl py-2.5 px-10 my-6 sm:max-md:w-full">SEND</button>

                        <p className="mb-4 text-xs text-center">This site is protected by reCAPTCHA and the Google
                            <span className="text-yellow-600"> Privacy Policy</span> and
                            <span className="text-yellow-600"> Terms of Service</span> apply.</p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LiveContracting 