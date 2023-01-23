import React from 'react'
import SwiperCentered from '../components/swiper/SwiperCentered'
import d9 from '../assets/images/d9.jpg'
import d15 from '../assets/images/d15.jpg'
import d17 from '../assets/images/d17.jpg'
import d22 from '../assets/images/d22.jpg'
import d25 from '../assets/images/d25.jpg'
import d35 from '../assets/images/d35.jpg'


const Decks = () => {
    return (
        <>
            <div className="container mx-auto px-16 sm:max-md:px-16 sm:max-md:min-w-full">
                <div className="mt-28 mb-14">
                    <h1 className="text-center text-4xl relative overflow-hidden text-yellow-600">
                        <span className="relative inline-block h-[45px] before:content-[''] before:absolute 
            before:top-[50%] before:border-b-2 before:w-[591px] before:my-0 before:mx-[20px] before:right-[100%] before:border-yellow-600
            after:content-[''] after:absolute after:top-[50%] after:border-b-2 after:w-[591px] after:my-0 after:mx-[20px] after:left-[100%] after:border-yellow-600
            ">DECKS & FENCES</span>
                    </h1>
                </div>

                <div className="mx-auto text-lg max-w-[500px]">
                    <p className='text-center text-slate-600'><span>Design and installation of decks and fences. We can install various styles from pressure treated lumber, cedar and or vinyl. MTM offers various designs of custom build decks to modern fence and gates.</span></p>
                </div>

                <div className="mt-28 mb-14">
                    <h1 className="text-center text-3xl relative overflow-hidden text-yellow-600">
                        <span className="relative inline-block h-[45px] before:content-[''] before:absolute 
                        before:top-[50%] before:border-b-2 before:w-[591px] before:my-0 before:mx-[20px] before:right-[100%] before:border-yellow-600
                        after:content-[''] after:absolute after:top-[50%] after:border-b-2 after:w-[591px] after:my-0 after:mx-[20px] after:left-[100%] after:border-yellow-600
                        ">Photo Gallery</span>
                    </h1>
                </div>

                <div>
                    <SwiperCentered />
                </div>
            </div>
            
            <div className="w-screen h-[600px] mx-auto px-0 bg-slate-400  ">
                    <div className="grid grid-cols-3 gap-0">
                        <div className="object-center max-h-[300px] overflow-hidden transition ease-in-out hover:duration-[2000ms] transform hover:scale-110 hover:z-10">
                            <img src={d9} alt="d9" />
                        </div>
                        <div className="object-center max-h-[300px] overflow-hidden transition ease-in-out hover:duration-[2000ms] transform hover:scale-110 hover:z-10">
                            <img src={d25} alt="d25" />
                        </div>
                        <div className="object-center max-h-[300px] overflow-hidden transition ease-in-out hover:duration-[2000ms] transform hover:scale-110 hover:z-10">
                            <img src={d15} alt="d15" />
                        </div>
                        <div className="object-center max-h-[300px] overflow-hidden transition ease-in-out hover:duration-[2000ms] transform hover:scale-110 hover:z-10">
                            <img src={d17} alt="d17" />
                        </div>
                        <div className="object-center max-h-[300px] overflow-hidden transition ease-in-out hover:duration-[2000ms] transform hover:scale-110 hover:z-10">
                            <img src={d22} alt="d22" />
                        </div>
                        <div className="object-center max-h-[300px] overflow-hidden transition ease-in-out hover:duration-[2000ms] transform hover:scale-110 hover:z-10">
                            <img src={d35} alt="d35" />
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Decks