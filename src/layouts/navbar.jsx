import React, { useState } from "react";
import images from '../constant/images';
import { FaRegUserCircle } from 'react-icons/fa';
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/index.jsx';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cart } = useCart();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const navigate = useNavigate();

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md p-2 fixed z-20 top-0 left-0 right-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <img src={images.logo} alt="" />
                <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-5">
                    <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-gray-300 " onClick={toggleMenu}>
                        <FaRegUserCircle onClick={() => navigate('/register')} className='w-16 h-7 text-gray-400 bg-white border-r-[2px] pr-3' />
                    </button>

                    <div className="relative">
                        <LiaShoppingBagSolid className='w-8 h-8 text-gray-400 bg-white' />
                        {cart.length > 0 && (
                            <span className="absolute top-0 right-0 bg-[#e65540] text-white rounded-full px-1 text-xs">{cart.length}</span>
                        )}
                    </div>
                    <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded={isMenuOpen} onClick={toggleMenu}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-user"
                >
                    <ul className="flex flex-col text-base p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 px-3 text-[#e65540] hover:border-b-[1px] border-black md:bg-transparent md:p-0" aria-current="page" onClick={() => navigate('/')}>Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-700 hover:border-b-[1px] border-black md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={() => navigate('/shop')}>Shop</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-700 hover:border-b-[1px] border-black md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={() => navigate('/sale')}>Sale</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-700 hover:border-b-[1px] border-black md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={() => navigate('/features')}>Features</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-700 hover:border-b-[1px] border-black md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={() => navigate('/blog')}>Blog</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-700 hover:border-b-[1px] border-black md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={() => navigate('/about')}>About</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-700 hover:border-b-[1px] border-black md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={() => navigate('/contact')}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
