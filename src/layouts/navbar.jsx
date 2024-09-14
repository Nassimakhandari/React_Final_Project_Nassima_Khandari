import React, { useState } from "react";
import images from '../constant/images';
import { FaRegUserCircle } from 'react-icons/fa';
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/index.jsx';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cardShop, setcardShop] = useState(false);
    const { cart } = useCart();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleCartVisibility = () => {
        setcardShop(!cardShop);
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
                        <LiaShoppingBagSolid className='w-8 h-8 text-gray-400 bg-white cursor-pointer' onClick={toggleCartVisibility} />
                        {cart.length > 0 && (
                            <span className="absolute top-0 right-0 bg-gray-500 text-white rounded-full px-1 text-xs">{cart.length}</span>
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
            {cardShop && (
                <div className="fixed top-16 right-0 mb-4 mr-4 w-80 bg-white shadow-lg p-4 rounded-lg">
                    <button className="absolute top-2 right-2 text-gray-600" onClick={toggleCartVisibility}>
                        ×
                    </button>
                    <div className="flex items-center space-x-4 mb-4">
                        <img src={images.img9} alt="" className="w-16 h-16 object-cover" />
                        <div>
                            <p className="text-gray-800">Boxy7 T-Shirt with Roll Sleeve</p>
                            <p className="text-gray-600">1 × $20.00</p>
                            <p className="text-gray-600">x</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 mb-4">
                        <img src={images.img9} alt="" className="w-16 h-16 object-cover" />
                        <div>
                            <p className="text-gray-800">Boxy7 T-Shirt with Roll Sleeve</p>
                            <p className="text-gray-600">1 × $20.00</p>
                            <p className="text-gray-600">x</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-gray-800">Subtotal :</p>
                        <p className="text-gray-800">$40.00</p>
                    </div>
                    <div className="flex space-x-4">
                        <button className="w-full font-light py-2 bg-black text-white rounded-full">VIEW CART</button>
                        <button className="w-full font-light py-2 bg-black text-white rounded-full">CHECKOUT</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
