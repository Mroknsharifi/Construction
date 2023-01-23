import React , { useState , useEffect, useRef} from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { BiChevronDown } from "react-icons/bi"
import { GrClose } from "react-icons/gr"



const Navbar = () => {

    const [dropdown, setDropdown] = useState(false);
    const [menu, setMenu] = useState(false);

    const displayDropdown = () => {
        setDropdown(!dropdown)
    }

    const showMenu = () => {
        setMenu(!menu)
    }

    const btnRef = useRef()

    useEffect(() => {
        const closeDropdown = (e) => {
            if (dropdown && btnRef.current && !btnRef.current.contains(e.target)) {
                setDropdown(false)
            }
        }
        document.addEventListener("mousedown", closeDropdown)
        return () => {
            document.removeEventListener("mousedown", closeDropdown)
        };
    }, [dropdown]);

    return (
        <>
            <div className="container mx-auto mb-16 px-32">
                <div className="flex flex-row items-center">

                    <div className="flex sm:max-lg:hidden">
                        <NavLink className="pr-5" to="https://www.facebook.com/"><FaFacebook size="20px" color="blue" /></NavLink>
                        <NavLink to="https://www.instagram.com/"><FaInstagram size="20px" color="red" /></NavLink>
                    </div>

                    <nav className= "container text-slate-600 sm:max-lg:hidden">

                        <ul className="flex flex-row justify-evenly items-center font-semibold">
                            <li>
                                <NavLink to="/" className="px-8 active:text-yellow-600 hover:text-blue-400">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className="px-8 active:text-yellow-600 hover:text-blue-400">About us</NavLink>
                            </li>
                            <li  className="relative flex flex-row items-center">
                                <button  to="/" className="px-8 flex items-center hover:text-blue-400" onClick={displayDropdown}>Services<BiChevronDown /></button>

                                <ul ref={btnRef} className={dropdown ? "z-10 absolute bg-white rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,1)] w-full pl-4 py-4 top-8 text-sm divide-y " : "hidden"}>
                                    <li>
                                        <NavLink to="/decks" className="w-full pb-10 hover:text-yellow-500">Decks & Fences</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/landscaping" className="w-full pb-10 hover:text-yellow-500">Landscaping</NavLink>
                                    </li>
                                    <li> 
                                        <NavLink to="/coming-soon" className="w-full pb-10 hover:text-yellow-500">Interlocking</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/coming-soon" className="w-full pb-10 hover:text-yellow-500">Commercial</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/coming-soon" className="w-full pb-10 hover:text-yellow-500">Kitchen Remodel</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/coming-soon" className="w-full pb-10 hover:text-yellow-500">Bathroom Remodel</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/coming-soon" className="w-full pb-10 hover:text-yellow-500">Basement</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/coming-soon" className="w-full pb-10 hover:text-yellow-500">Renovations</NavLink>
                                    </li>
                                </ul>

                            </li>
                            <li>
                                <NavLink to="/testimonials" className="px-8 active:text-yellow-600 hover:text-blue-400">Testimonials</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className="px-8 active:text-yellow-600 hover:text-blue-400">Contact us</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="lg:hidden sm:max-lg:flex sm:max-lg:items-center sm:max-lg:justify-between sm:max-lg:mb-10">

                <button onClick={showMenu}><GiHamburgerMenu className="ml-[35%] text-[25px] sm:max-md:text-[15px]" color="rgb(202 138 4)" /></button>
                <h1 className="mx-auto font-bold text-3xl text-yellow-600 sm:max-md:text-base sm:max-md:font-semibold-sem">MEHRDAD CONSTRUCTON COMPANY</h1>

                <div className={menu ? "fixed inset-0 bg-black/60 backdrop-blur-xl z-50" : "hidden"}>

                    <button className="absolute top-6 right-6" onClick={showMenu}><GrClose size="25px" /></button>
                    <div className="mt-[8%] px-[45%]">
                        <div className="flex">
                            <NavLink className="pr-5" to="https://www.facebook.com/"><FaFacebook size="40px" color="blue" /></NavLink>
                            <NavLink to="https://www.instagram.com/"><FaInstagram size="44px" color="red" /></NavLink>
                        </div>
                    </div>

                    <nav className="mt-1">
                        <ul className={"flex flex-col items-start align-bottom text-2xl text-white justify-center p-8 gap-8"}>

                            <li>
                                <NavLink onClick={showMenu} to="/" className="px-8 hover:text-slate-600">Home</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={showMenu} to="/about" className="px-8 hover:text-slate-600">About us</NavLink>
                            </li>
                            <li  className={dropdown ? "relative flex flex-row items-start h-48" : "relative flex flex-row items-start"}>
                                <button   to="/" className="px-8 hover:text-slate-600 flex items-center" onClick={displayDropdown}>Services<BiChevronDown /></button>

                                <ul btnRef className={dropdown ? "absolute top-10 left-12 text-sm" : "hidden"}>
                                    <li className="hover:text-yellow-500 text-slate-200">
                                        <NavLink onClick={showMenu} to="/decks" className="">Decks & Fences</NavLink>
                                    </li>

                                    <li className="hover:text-yellow-500 text-slate-200">
                                        <NavLink onClick={showMenu} to="/landscaping" className="">Landscaping</NavLink>
                                    </li>
                                    <li className="hover:text-yellow-500 text-slate-200">
                                        <NavLink onClick={showMenu} to="/coming-soon" className="">Interlocking</NavLink>
                                    </li>
                                    <li className="hover:text-yellow-500 text-slate-200">
                                        <NavLink onClick={showMenu} to="/coming-soon" className="">Commercial</NavLink>
                                    </li>
                                    <li className="hover:text-yellow-500 text-slate-200">
                                        <NavLink onClick={showMenu} to="/coming-soon" className="">Kitchen Remodel</NavLink>
                                    </li>
                                    <li className="hover:text-yellow-500 text-slate-200">
                                        <NavLink onClick={showMenu} to="/coming-soon" className="">Bathroom Remodel</NavLink>
                                    </li>
                                    <li className="hover:text-yellow-500 text-slate-200">
                                        <NavLink onClick={showMenu} to="/coming-soon" className="">Basement</NavLink>
                                    </li>
                                    <li className="hover:text-yellow-500 text-slate-200">
                                        <NavLink onClick={showMenu} to="/coming-soon" className="">Renovations</NavLink>
                                    </li >
                                </ul>

                            </li>
                            <li>
                                <NavLink onClick={showMenu} to="/testimonials" className="px-8 hover:text-slate-600">Testimonials</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={showMenu} to="/contact" className="px-8 hover:text-slate-600">Contact us</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>

        </>

    )
}

export default Navbar