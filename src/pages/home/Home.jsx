import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from '../../constant/images';
import Data from "../../json/app.json"
import Slider from 'react-slick';
import React from 'react';
import '../../style/home.css'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow`}
      style={{ ...style, display: "block", right: "10px", fontSize: "" }}
      onClick={onClick}
    >

    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev-arrow `}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}
    >
    </div>
  );
}
const Home = () => {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };



  return (
    <>
      <div className='overflow-hidden h-[91vh] pt-20'>
        <Slider {...settings}>
          <div className='relative'>
            <img src={images.slide1} alt="" className='h-[75vh] object-cover ' />
            <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col text-center gap-4'>
              <p className="text-white text-2xl">Women Collection 2018</p>
              <h1 className="text-7xl text-white font-bold">NEW ARRIVAL</h1>
              <div>
                <button className="py-2 px-6 bg-white rounded-full font-light hover:bg-[#e65540] hover:text-white">Shop Now</button>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={images.slide2} alt="" className='h-[75vh] object-cover' />
            <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col text-center gap-4'>
              <p className="text-white text-2xl">Women Collection 2018</p>
              <h1 className="text-7xl text-white font-bold">NEW ARRIVAL</h1>
              <div>
                <button className="py-2 px-6 bg-white rounded-full font-light hover:bg-[#e65540] hover:text-white">Shop Now</button>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={images.slide3} alt="" className='h-[75vh] object-cover' />
            <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col text-center gap-4'>
              <p className="text-white text-2xl">Women Collection 2018</p>
              <h1 className="text-7xl text-white font-bold">NEW ARRIVAL</h1>
              <div>
                <button className="py-2 px-6 bg-white rounded-full font-light hover:bg-[#e65540] hover:text-white">Shop Now</button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="flex gap-5 justify-center items-center section2">
        <div className="flex flex-col gap-5">
          <div className="relative overflow-hidden section2-child">
            <img src={images.img1} className="h-[58vh] w-[23.6vw] transition-all duration-500 ease-in-out hover:scale-110" alt="" />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white py-2 px-12 hover:bg-[#e65540] hover:text-white font-light text-lg">
              <button >Dresses</button>
            </div>
          </div>
          <div className="relative overflow-hidden section2-child">
            <img src={images.img2} className="h-[38vh] w-[23.6vw] object-cover transition-all duration-500 ease-in-out hover:scale-110" alt="" />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white py-2 px-12 hover:bg-[#e65540] hover:text-white font-light text-lg">
              <button>Sunglasses</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="relative overflow-hidden section2-child">
            <img src={images.img3} className="h-[38vh] w-[23.6vw] object-cover transition-all duration-500 ease-in-out hover:scale-110" alt="" />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white py-2 px-12  hover:bg-[#e65540] hover:text-white font-light text-lg">
              <button >Watches</button>
            </div>
          </div>
          <div className="relative overflow-hidden section2-child">
            <img src={images.img4} className="h-[58vh] w-[23.6vw] transition-all duration-500 ease-in-out hover:scale-110" alt="" />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white py-2 px-12 hover:bg-[#e65540] hover:text-white font-light text-lg">
              <button>Footerwear</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="relative overflow-hidden section2-child">
            <img src={images.img5} className="h-[58vh] w-[23.6vw] transition-all duration-500 ease-in-out hover:scale-110" alt="" />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white py-2 px-12 hover:bg-[#e65540] hover:text-white font-light text-lg">
              <button>Bags</button>
            </div>
          </div>
          <div className="relative overflow-hidden section2-child">
            <img src={images.img6} className="h-[38vh] w-[23.6vw] transition-all duration-500 ease-in-out hover:scale-110" alt="" />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white py-2 px-12 hover:bg-[#e65540] hover:text-white font-light text-lg">
              <button>Accessories</button>
            </div>
          </div>
        </div>
      </div>

      <div className="slider-container pt-20 mx-auto max-w-6xl flex-row justify-center ">
        <h1 className="font-bold text-3xl text-center">FEATURED PRODUCTS</h1>
        <Slider {...settings}>
          <div className="">
            <div className="flex items-center justify-center gap-9 ">
              {Data.slice(0, 4).map((e) => (
                <div className="pt-16 pb-10 w-[40%]">
                  <div>
                    <img src={images[e.image]} alt="" className=" w-[100%] object-cover  md:h-96 md:w-[50vw]" />
                  </div>
                  <div className="pt-4 ">
                    <h1 className="font-light text-gray-700">{e.title}</h1>
                    <h1 className="font-light text-gray-700">{e.price}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center gap-9 ">
              {Data.slice(4).map((e) => (
                <div className="pt-16 pb-10 w-[40%]">
                  <div>
                    <img src={images[e.image]} alt="" className=" w-[100%] object-cover  md:h-96 md:w-[50vw]" />
                  </div>
                  <div className="pt-4 ">
                    <h1 className="font-light text-gray-700">{e.title}</h1>
                    <h1 className="font-light text-gray-700">{e.price}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Slider>
      </div>

    </>
  );
};

export default Home;