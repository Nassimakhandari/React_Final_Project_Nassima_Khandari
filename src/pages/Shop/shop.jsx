import React from 'react';
import images from '../../constant/images';
import { FaSearch } from 'react-icons/fa';
import data from '../../json/app.json';

const Shop = () => {
    return (
        <>
            <div className='pt-14'>
                <div>
                    <div className='relative'>
                        <img src={images.shop} alt="" className='object-cover h-[30vh] w-full md:h-[40vh] lg:h-[33vh]' />
                        <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center'>
                            <p className='font-bold text-3xl md:text-4xl lg:text-5xl text-white'>PRODUCTS</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-48 md:flex-row justify-center py-16 px-4 md:px-12 lg:pl-36'>
                    <div className='lg:w-[10%] md:w-[30%]'>
                        <div className='pb-10 flex flex-col gap-1'>
                            <p className='text-gray-800 text-lg md:text-2xl font-extrabold pb-5'>Categories</p>
                            <p className='text-gray-600 cursor-pointer transition duration-500 hover:text-[#e65540] font-light text-sm'>Best Seller (8 items)</p>
                            <p className='text-gray-400 cursor-pointer transition duration-500 hover:text-[#e65540] font-light text-sm'>Featured (8 items)</p>
                            <p className='text-gray-400 cursor-pointer transition duration-500 hover:text-[#e65540] font-light text-sm'>Men (8 items)</p>
                            <p className='text-gray-400 cursor-pointer transition duration-500 hover:text-[#e65540] font-light text-sm'>Women (8 items)</p>
                        </div>

                        <div className='pb-10 flex flex-col gap-1'>
                            <p className='text-gray-800 text-lg md:text-2xl font-extrabold pb-5'>Color</p>
                            <div className='flex gap-2'>
                                <input type="checkbox" id="color-black" />
                                <label className='text-gray-600 cursor-pointer transition duration-500 hover:text-[#e65540] font-light ' htmlFor="color-black">black</label>
                            </div>
                            <div className='flex gap-2'>
                                <input type="checkbox" id="color-gray" />
                                <label className='text-gray-600 cursor-pointer transition duration-500 hover:text-[#e65540] font-light' htmlFor="color-gray">gray</label>
                            </div>
                            <div className='flex gap-2'>
                                <input type="checkbox" id="color-red" />
                                <label className='text-gray-600 cursor-pointer transition duration-500 hover:text-[#e65540] font-light' htmlFor="color-red">red</label>
                            </div>
                        </div>

                        <div className='pb-10 flex flex-col gap-1'>
                            <p className='text-gray-800 text-lg md:text-2xl font-extrabold pb-5'>Size</p>
                            <div className='flex gap-2'>
                                <input type="checkbox" id="size-l" />
                                <label className='text-gray-600 cursor-pointer transition duration-500 hover:text-[#e65540] font-light' htmlFor="size-l">L</label>
                            </div>
                            <div className='flex gap-2'>
                                <input type="checkbox" id="size-m" />
                                <label className='text-gray-600 cursor-pointer transition duration-500 hover:text-[#e65540] font-light' htmlFor="size-m">M</label>
                            </div>
                            <div className='flex gap-2'>
                                <input type="checkbox" id="size-s" />
                                <label className='text-gray-600 cursor-pointer transition duration-500 hover:text-[#e65540] font-light' htmlFor="size-s">S</label>
                            </div>
                            <div className='flex gap-2'>
                                <input type="checkbox" id="size-xl" />
                                <label className='text-gray-600 cursor-pointer transition duration-500 hover:text-[#e65540] font-light' htmlFor="size-xl">XL</label>
                            </div>
                        </div>

                        <div className='relative '>
                            <input type="text" name="" id="" className='w-[20vw] border-[1px] border-gray-200 p-4 placeholder:text-gray-600 text-sm' placeholder='Search all articles...' />
                            <FaSearch className="absolute left-[18vw] top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>

                    <div className='w-full md:w-[60%]'>
                        <div className='flex flex-col md:flex-row justify-between items-center'>
                            <div className='flex gap-3'>
                                <select id="options" className="mt-2 py-1 px-2 md:px-5 border border-gray-200 rounded-sm font-light">
                                    <option value="" className='text-gray-600' disabled>Select an option</option>
                                    <option value="option1" className='text-gray-600'>Option 1</option>
                                    <option value="option2" className='text-gray-600'>Option 2</option>
                                    <option value="option3" className='text-gray-600'>Option 3</option>
                                </select>

                                <select id="options" className="mt-2 py-1 px-2 md:px-5 border border-gray-200 rounded-sm font-light">
                                    <option value="" className='text-gray-600' disabled>Select an option</option>
                                    <option value="option1" className='text-gray-600'>10</option>
                                    <option value="option2" className='text-gray-600'>20</option>
                                    <option value="option3" className='text-gray-600'>30</option>
                                </select>
                            </div>

                            <div>
                                <p className='text-gray-400 md:text-sm font-light'>Showing 1 to 6 of 8 items</p>
                            </div>
                        </div>

                        <div className='flex flex-wrap pt-10 gap-8'>
                            {
                                data.map((e) => (
                                    <div key={e.id} className='flex flex-col w-full lg:w-[30%] md:w-[30%]'>
                                        <div className='relative group'>
                                            <img src={images[e.image]} alt={e.title} className='w-full transition-all duration-300 ease-in-out group-hover:brightness-75' />
                                            {
                                                e.sale && (
                                                    <div className='absolute top-3 left-2 bg-[#e65540] text-white px-5 py-1 rounded-full font-light text-xs'>
                                                        Sale
                                                    </div>
                                                )
                                            }
                                            <div className='absolute top-[90%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                                <button className='bg-black px-2 py-2 rounded-full text-white transition duration-500 hover:bg-[#e65540] hover:text-white font-light'>ADD TO CART</button>
                                            </div>
                                        </div>
                                        <div className='pt-5'>
                                            <p className='text-gray-800 pb-2 transition duration-500 hover:text-[#e65540] cursor-pointer font-light'>{e.title}</p>
                                            {
                                                e.sale ? (
                                                    <div className='flex gap-3'>
                                                        <p className='text-gray-950 pb-2 line-through font-light'>{e.price}</p>
                                                    </div>
                                                ) : (
                                                    <p className='text-gray-950 pb-2 font-light'>{e.price}</p>
                                                )
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;
