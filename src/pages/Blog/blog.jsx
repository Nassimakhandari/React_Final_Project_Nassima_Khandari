import React from 'react';
import images from '../../constant/images';
import data from '../../json/app.json';
import { FaSearch } from 'react-icons/fa';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Blog = () => {
    return (
        <>
            <div className=''>
                <div>
                    <div className='relative'>
                        <img src={images.blog} alt="" className='object-contain w-full md:h-[40vh] lg:h-[47.8vh]' />
                        <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center'>
                            <p className='font-bold text-2xl md:text-4xl lg:text-5xl text-white'>NEWS</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row pb-12 px-4 md:px-[10vw] lg:pl-[15vw]'>
                    <div className='w-full md:w-[80%]'>
                        <div className='flex flex-col gap-8'>
                            <div className='w-full overflow-hidden'>
                                <div className='relative overflow-hidden'>
                                    <img src={images.blog1} alt="" className='w-full md:w-[85%] transition-all duration-500 ease-in-out hover:scale-110' />
                                    <div className='absolute bottom-4 left-4'>
                                        <p className='bg-black text-white py-2 px-4'>28 DEC, 2017</p>
                                    </div>
                                </div>
                                <h1 className='text-gray-600 font-normal text-base md:text-lg lg:text-2xl py-4'>Black Friday Guide: Best Sales & Discount Codes</h1>
                                <h2 className="text-sm md:text-base font-light text-gray-400 pb-2">by <span className="text-gray-700">fashe-theme Admin</span> on <span className="text-gray-700">Dec 28, 2017</span></h2>
                                <p className='text-gray-400 font-light text-sm md:text-base lg:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec <br /> cursus ante. Nunc sit...</p>
                                <p className='flex items-center gap-2 pt-3 text-gray-600 transition duration-500 hover:text-[#e65540] cursor-pointer'>Continue Reading <FaLongArrowAltRight /></p>
                            </div>
                            <div className='w-full overflow-hidden'>
                                <div className='relative overflow-hidden'>
                                    <img src={images.blog2} alt="" className='w-full md:w-[85%] transition-all duration-500 ease-in-out hover:scale-110' />
                                    <div className='absolute bottom-4 left-4'>
                                        <p className='bg-black text-white py-2 px-4'>28 DEC, 2017</p>
                                    </div>
                                </div>
                                <h1 className='text-gray-600 font-normal text-base md:text-lg lg:text-2xl py-4'>The White Sneakers Nearly Every Fashion Girls Own</h1>
                                <h2 className="text-sm md:text-base font-light text-gray-400 pb-2">by <span className="text-gray-700">fashe-theme Admin</span> on <span className="text-gray-700">Dec 28, 2017</span></h2>
                                <p className='text-gray-400 font-light text-sm md:text-base lg:text-base'>Duis ut velit gravida nibh bibendum commodo. Suspendisse pellentesque mattis augue id euixs font- <br />lightod. Interdum et...</p>
                                <p className='flex items-center gap-2 pt-3 text-gray-600 transition duration-500 hover:text-[#e65540] cursor-pointer'>Continue Reading <FaLongArrowAltRight /></p>
                            </div>
                            <div className='w-full overflow-hidden'>
                                <div className='relative overflow-hidden'>
                                    <img src={images.blog3} alt="" className='w-full md:w-[85%] transition-all duration-500 ease-in-out hover:scale-110' />
                                    <div className='absolute bottom-4 left-4'>
                                        <p className='bg-black text-white py-2 px-4'>28 DEC, 2017</p>
                                    </div>
                                </div>
                                <h1 className='text-gray-600 font-normal text-base md:text-lg lg:text-2xl py-4'>New York SS 2018 Street Style: By Annina Mislin</h1>
                                <h2 className="text-sm md:text-base font-light text-gray-400 pb-2">by <span className="text-gray-700">fashe-theme Admin</span> on <span className="text-gray-700">Dec 28, 2017</span></h2>
                                <p className='text-gray-400 font-light text-sm md:text-base lg:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec <br /> cursus ante. Nunc sit...</p>
                                <p className='flex items-center gap-2 pt-3 text-gray-600 transition duration-500 hover:text-[#e65540] cursor-pointer'>Continue Reading <FaLongArrowAltRight /></p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full md:w-[30%] mt-8 md:mt-0'>
                        <div className='relative'>
                            <input type="text" name="" id="" className='w-full md:w-[80%] border-[1px] border-gray-200 px-2 p-3 pl-5 font-light placeholder:text-gray-600 text-sm rounded-full' placeholder='Search all articles...' />
                            <FaSearch className="absolute right-20 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                        <p className='text-gray-800 text-xl md:text-2xl font-extrabold pt-10 pb-10'>Featured Products</p>

                        <div className='flex flex-col '>
                            {
                                data.slice(0, 5).map((e) => (
                                    <div className='w-full flex gap-4 pb-8'>
                                        <div className='w-[23%]'>
                                            <img src={images[e.image]} alt="" className='w-full' />
                                        </div>
                                        <div className='flex flex-col '>
                                            <p className='text-gray-800 font-light text-sm md:text-base pb-2 transition duration-500 hover:text-[#e65540] cursor-pointer w-32'>{e.title}</p>
                                            <p className='text-gray-400 text-xs md:text-light pb-2'>{e.price}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <p className='text-gray-800 text-xl md:text-2xl font-extrabold pt-10 pb-10'>Tags Cloud</p>
                        <div className='flex flex-wrap gap-3'>
                            <button className='border-[1px] border-gray-400 text-xs md:text-sm text-gray-400 px-4 py-2 rounded-full transition duration-500 hover:text-[#e65540] hover:border-[#e65540]'>crafts</button>
                            <button className='border-[1px] border-gray-400 text-xs md:text-sm text-gray-400 px-4 py-2 rounded-full transition duration-500 hover:text-[#e65540] hover:border-[#e65540]'>street style</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;
