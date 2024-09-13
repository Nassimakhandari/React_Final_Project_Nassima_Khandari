import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from 'react-router-dom';
import data from "../../json/app.json";
import images from '../../constant/images';
const DetailsProducts = () => {
    const { title } = useParams();
    const product = data.find((e) => e.title === title);
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(quantity + 1);
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    }
    return (
        <div>
            {product && (
                <div className='flex gap-24 justify-center py-[20vh]'>
                    <div className=''>
                        <img src={images[product.image]} alt="" className='w-[25vw] h-[70vh]' />
                    </div>
                    <div className='flex flex-col gap-12 w-[30%]'>
                        <div className='flex flex-col gap-3'>
                            <h1 className='text-2xl font-light'>{product.title}</h1>
                            <h1 className='text-3xl text-gray-700'>{product.price}</h1>
                            <p className='text-gray-400 font-light'>{product.description}</p>
                        </div>
                        <div className='flex gap-2'>
                            <button className='py-2 px-4 text-white bg-[#e65540] rounded-sm'>S</button>
                            <button className='py-2 px-4 text-black border-[1px] border-[#e65540] rounded-sm '>M</button>
                            <button className='py-2 px-4 text-black border-[1px] border-[#e65540] rounded-sm '>L</button>
                            <button className='py-2 px-4 text-black border-[1px] border-[#e65540] rounded-sm'>XL</button>
                        </div>
                        <div className='flex gap-2'>
                            <button className='py-4 px-6 bg-gray-400 border-[1px] border-[#e65540] rounded-sm'></button>
                            <button className='py-4 px-6 bg-[#e65540] rounded-sm'></button>
                            <button className='py-4 px-6 border-[1px] bg-gray-700 border-[#e65540] rounded-sm'></button>
                        </div>
                        <div className='flex gap-7'>
                            <div className="quantity-counter">
                                <button onClick={decrement} className='py-2 px-4 bg-gray-300 text-gray-500 font-bold'>-</button>
                                <span className='py-[10px] px-5 bg-gray-50 text-gray-500 font-light'>{quantity}</span>
                                <button onClick={increment} className='py-2 px-4 bg-gray-300 text-gray-500 font-bold'>+</button>
                            </div>
                            <div>
                                <button className='bg-black px-6 py-2 rounded-full text-white transition duration-500 hover:bg-[#e65540] hover:text-white font-light'>ADD TO CART</button>
                            </div>

                        </div>
                        <div className='flex flex-col gap-5'>
                            <h1 className='font-bold text-lg'>Description</h1>
                            <p className='text-gray-400 font-light text-sm'>{product.description2}</p>
                        </div>
                    </div>
                </div>
            )}
            <div className="slider-container pb-10 mx-auto max-w-6xl flex-row justify-center ">
                <h1 className="font-bold text-3xl text-center">FEATURED PRODUCTS</h1>
                <Slider {...settings}>
                    <div className="">
                        <div className="flex items-center justify-center gap-9 ">
                            {data.slice(0, 4).map((e) => (
                                <div className="pt-16 pb-10 w-[40%] ">
                                    <div>
                                        <img src={images[e.image]} alt="" className=" w-[100%] object-cover  md:h-96 md:w-[50vw]" />
                                    </div>
                                    <div className="pt-4 ">
                                        <h1 className="font-light text-gray-700 hover:text-[#e65540] "></h1>
                                        <h1 className="font-light text-gray-700">{e.price}</h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-center gap-9 ">
                            {data.slice(4).map((e) => (
                                <div className="pt-16 pb-10 w-[40%]" >
                                    <div>
                                        <img src={images[e.image]} alt="" className=" w-[100%] object-cover  md:h-96 md:w-[50vw]" />
                                    </div>
                                    <div className="pt-4 ">
                                        <h1 className="font-light text-gray-700 hover:text-[#e65540] " ></h1>
                                        <h1 className="font-light text-gray-700">{e.price}</h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default DetailsProducts;
