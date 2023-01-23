import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="py-8 mt-20 bg-slate-100">
            <div className="flex flex-col justify-center items-center">
                <div className="flex mb-4">
                    <NavLink className="pr-5" to="https://www.facebook.com/"><FaFacebook size="20px" color="blue" /></NavLink>
                    <NavLink to="https://www.instagram.com/"><FaInstagram size="20px" color="red" /></NavLink>
                </div>
                <p className="font-bold text-sm mb-4">MEHRDAD CONSTRUCTON COMPANY</p>
                <p>Toronto, ON</p>
                <p className="mb-5"><NavLink className="text-yellow-800" to="/">(647) 240-4536</NavLink></p>
                <p>
                    <span className="text-sm">Copyright © 2021 MTM General Contracting - All Rights Reserved.</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer