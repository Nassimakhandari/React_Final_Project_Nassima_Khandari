import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterestSquare, FaGooglePlusG, FaInstagram } from "react-icons/fa";
import '../style/footer.css'
const Footer = () => {
    return (
        <>
            <div className='flex flex-col gap-24 justify-start items-start bg-[#f0f0f0] p-10 pt-20  bottom-0 '>
                <div className='flex gap-[5vw] respo-footer-1'>
                    <div>
                        <h1 className='font-bold pb-9 '>GET IN TOUCH</h1>
                        <p className='text-gray-700 text-sm font-light'>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York,<br />  NY 10018 or call us on (+1) 96 716 6879</p>
                        <div className='flex gap-4 pt-8 text-gray-500 '>
                            <FaFacebookF className='hover:text-[#e65540] cursor-pointer' />
                            <FaTwitter className='hover:text-[#e65540] cursor-pointer' />
                            <FaPinterestSquare className='hover:text-[#e65540] cursor-pointer' />
                            <FaGooglePlusG className='hover:text-[#e65540] cursor-pointer' />
                            <FaInstagram className='hover:text-[#e65540] cursor-pointer' />



                        </div>
                    </div>
                    <div className='flex gap-24 pr-10 respo-footer'>
                        <div>
                            <h1 className='font-bold text-sm pb-8'>CATEGORIES</h1>
                            <div className='text-gray-700 text-sm'>
                                <p className='pb-3 hover:text-[#e65540] cursor-pointer font-light'>Men</p>
                                <p className='pb-3 hover:text-[#e65540] cursor-pointer font-light'>Women</p>
                                <p className='pb-3 hover:text-[#e65540] cursor-pointer font-light'>Dresses</p>
                                <p className='pb-3 hover:text-[#e65540] cursor-pointer font-light'>Sunglasses</p>
                            </div>
                        </div>
                        <div>
                            <h1 className='font-bold text-sm pb-8 '>LINKS</h1>
                            <div className='text-gray-700 text-sm'>
                                <p className='pb-3 hover:text-[#e65540] cursor-pointer font-light'>Search</p>
                                <p className='pb-3 hover:text-[#e65540] cursor-pointer font-light'>About Us</p>
                                <p className='pb-3 hover:text-[#e65540] cursor-pointer font-light'>Contact Us</p>
                                <p className='pb-3 hover:text-[#e65540] cursor-pointer font-light'>Returns</p>
                            </div>
                        </div>
                        <div>
                            <h1 className='font-bold text-sm pb-8 '>HELP</h1>
                            <div className='text-gray-700 text-sm '>
                                <p className='pb-3 hover:text-[#e65540] cursor-pointer font-light'>Track Order</p>
                                <p className='pb-3 hover:text-[#e65540] cursor-pointer font-light'>Returns</p>
                                <p className='pb-3 hover:text-[#e65540] cursor-pointer font-light'>Shipping</p>
                                <p className='pb-3 hover:text-[#e65540] cursor-pointer font-light'>FAQs</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-start items-start gap-5 '>
                        <h1 className='font-bold text-sm '>NEWSLETTER </h1>
                        <div >
                            <input type="email" placeholder='Email Address ' className='focus:outline-none border-b-[1px] font-light text-sm border-zinc-300 pb-2 bg-[#f0f0f0] ' />
                        </div>
                        <button className='bg-black text-white rounded-3xl py-2 px-9 hover:bg-[#e65540] '>SUBSCRIBE</button>
                    </div>
                </div>
                <div className='text-[#948e8e] text-sm font-light pl-[30vw]' >
                    <div className=''>
                        <p className='copy'>Copyright © 2022  <span className='text-[#726e6e]  text-base hover:text-[#e65540] cursor-pointer font-light'>Shopify Theme Developed by MassTechnologist</span> All rights reserved.</p>
                    </div>
                </div>

            </div>





        </>
    );
};

export default Footer;
