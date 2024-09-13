import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from '../../constant/images';
import Data from "../../json/app.json"
import Slider from 'react-slick';
import React from 'react';
import '../../style/home.css'
import app2 from "../../json/app2.json";
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
  }

  const index = Math.floor(Math.random() * app2.length);
  const randomJson = app2[index];
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
                <button className="py-2 px-6 bg-white rounded-full font-light transition duration-500 hover:bg-[#e65540] hover:text-white">Shop Now</button>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={images.slide2} alt="" className='h-[75vh] object-cover' />
            <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col text-center gap-4'>
              <p className="text-white text-2xl">Women Collection 2018</p>
              <h1 className="text-7xl text-white font-bold">NEW ARRIVAL</h1>
              <div>
                <button className="py-2 px-6 bg-white rounded-full font-light transition duration-500 hover:bg-[#e65540] hover:text-white">Shop Now</button>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={images.slide3} alt="" className='h-[75vh] object-cover' />
            <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col text-center gap-4'>
              <p className="text-white text-2xl">Women Collection 2018</p>
              <h1 className="text-7xl text-white font-bold">NEW ARRIVAL</h1>
              <div>
                <button className="py-2 px-6 bg-white rounded-full font-light transition duration-500 hover:bg-[#e65540] hover:text-white">Shop Now</button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="flex gap-5 justify-center items-center section2">
        <div className="flex flex-col gap-5">
          <div className="relative overflow-hidden section2-child">
            <img src={images.img1} className="h-[58vh] w-[23.6vw] transition-all duration-500 ease-in-out hover:scale-110" alt="" />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 transition duration-500 bg-white py-2 px-12 hover:bg-[#e65540] hover:text-white font-light text-lg">
              <button >Dresses</button>
            </div>
          </div>
          <div className="relative overflow-hidden section2-child">
            <img src={images.img2} className="h-[38vh] w-[23.6vw] object-cover transition-all duration-500 ease-in-out hover:scale-110" alt="" />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 transition duration-500 bg-white py-2 px-12 hover:bg-[#e65540] hover:text-white font-light text-lg">
              <button>Sunglasses</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="relative overflow-hidden section2-child">
            <img src={images.img3} className="h-[38vh] w-[23.6vw] object-cover transition-all duration-500 ease-in-out hover:scale-110" alt="" />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 transition duration-500 bg-white py-2 px-12  hover:bg-[#e65540] hover:text-white font-light text-lg">
              <button >Watches</button>
            </div>
          </div>
          <div className="relative overflow-hidden section2-child">
            <img src={images.img4} className="h-[58vh] w-[23.6vw] transition-all duration-500 ease-in-out hover:scale-110" alt="" />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 transition duration-500 bg-white py-2 px-12 hover:bg-[#e65540] hover:text-white font-light text-lg">
              <button>Footerwear</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="relative overflow-hidden section2-child">
            <img src={images.img5} className="h-[58vh] w-[23.6vw] transition-all duration-500 ease-in-out hover:scale-110" alt="" />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 transition duration-500 bg-white py-2 px-12 hover:bg-[#e65540] hover:text-white font-light text-lg">
              <button>Bags</button>
            </div>
          </div>
          <div className="relative overflow-hidden section2-child">
            <img src={images.img6} className="h-[38vh] w-[23.6vw] transition-all duration-500 ease-in-out hover:scale-110" alt="" />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 transition duration-500 bg-white py-2 px-12 hover:bg-[#e65540] hover:text-white font-light text-lg">
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
                    <h1 className="font-light text-gray-700 hover:text-[#e65540] ">{e.title}</h1>
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

      <div className="flex flex-col md:flex-row gap-6 md:gap-12 h-auto md:h-[70vh] mt-8 mb-8 md:mt-16 md:mb-16 justify-center items-center bg-[#f2f2f2]">
        <div className="relative overflow-hidden w-full md:w-[33vw] h-[65vh] md:h-[55vh]">
          <img src={images.random} alt="" className="w-full h-full object-cover transition-all duration-500 ease-in-out hover:scale-110" />
          <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col text-center gap-4'>
            <h1 className="text-2xl md:text-3xl text-white font-bold">The Beauty</h1>
            <h1 className="text-4xl md:text-6xl text-white font-bold">LOOKBOOK</h1>
            <p className="text-lg md:text-xl text-white font-normal">VIEW COLLECTION</p>
          </div>
        </div>
        <div className='w-full md:w-[33vw]'>
          <div className='bg-white overflow-hidden flex flex-col justify-center items-center shadow-lg h-auto md:h-[55vh] w-full md:w-[33vw] pb-48 pt-14'>
            <img src={images[randomJson.image]} alt="" className='w-full md:w-[70%] h-[250px] md:h-[auto] object-cover transition-all duration-300 ease-in-out hover:scale-110' />
            <div className='text-center flex flex-col justify-center items-center '>
              <p className='text-gray-700 pb-2 text-lg md:text-[18px] font-light'>{randomJson.name}</p>
              <p className='text-gray-700 pb-2 text-lg md:text-[18px] font-light'>${randomJson.price}</p>
              <div className='flex flex-wrap gap-4 pb-4 px-4 md:px-10'>
                <div className='flex flex-col justify-center items-center border-[1px] border-gray-400 py-[2px] px-2'>
                  <p className='text-gray-800 text-lg md:text-[18px] font-light'>-2082</p>
                  <p className='text-gray-400 font-light'>days</p>
                </div>
                <div className='flex flex-col justify-center items-center border-[1px] border-gray-400 py-[2px] px-2'>
                  <p className='text-gray-800 text-lg md:text-[18px] font-light'>-20</p>
                  <p className='text-gray-400 font-light'>hrs</p>
                </div>
                <div className='flex flex-col justify-center items-center border-[1px] border-gray-400 py-[2px] px-2'>
                  <p className='text-gray-800 text-lg md:text-[18px] font-light'>-53</p>
                  <p className='text-gray-400 font-light'>mins</p>
                </div>
                <div className='flex flex-col justify-center items-center border-[1px] border-gray-400 py-[2px] px-2'>
                  <p className='text-gray-800 text-lg md:text-[18px] font-light'>-41</p>
                  <p className='text-gray-400 font-light'>secs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-col max-w-screen-xl mx-auto justify-center items-center p-4">
        <div className="text-center pb-8">
          <h1 className="text-3xl font-bold">OUR BLOG</h1>
        </div>
        <div className="lg:flex lg:flex-row md:flex-col justify-center items-start ">
          <div className="w-full md:w-1/2 lg:w-[30%] p-4">
            <div className="overflow-hidden">
              <img src={images.blog1} alt="Blog Post 1" className="w-full h-auto object-cover pb-4  transition-all duration-500 ease-in-out hover:scale-110" />
            </div>
            <h1 className="text-lg font-normal hover:text-[#e65540] transition duration-500 select-none pb-2">Black Friday Guide: Best Sales & Discount <br /> Codes</h1>
            <h2 className="text-sm font-light text-gray-400 pb-2">by <span className="text-gray-700"> fashe-theme Admin </span> on <span className="text-gray-700"> Dec 28, 2017 </span></h2>
            <p className="text-gray-400 text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Etiam sed turpis sed lorem dignissim vulputate nec <br /> cursus ante. Nunc sit...</p>
          </div>

          <div className="w-full md:w-1/2 lg:w-[30%] p-4 ">
            <div className="overflow-hidden">
              <img src={images.blog2} alt="Blog Post 2" className="w-full h-auto object-cover pb-4  transition-all duration-500 ease-in-out hover:scale-110" />
            </div>
            <h1 className="text-lg font-normal hover:text-[#e65540] transition duration-500 select-none pb-2">The White Sneakers Nearly Every Fashion <br /> Girls Own</h1>
            <h2 className="text-sm font-light text-gray-400 pb-2">by <span className="text-gray-700"> fashe-theme Admin </span> on <span className="text-gray-700"> Dec 28, 2017 </span></h2>
            <p className="text-gray-400 text-sm font-light">Duis ut velit gravida nibh bibendum commodo. Sus- <br />pendisse pellentesque mattis augue id euixs font-lightod. Interdum et...</p>
          </div>

          <div className="w-full md:w-1/2 lg:w-[30%] p-4">
            <div className="overflow-hidden">
              <img src={images.blog3} alt="Blog Post 3" className="w-full h-auto object-cover pb-4 transition-all duration-500 ease-in-out hover:scale-110" />
            </div>
            <h1 className="text-lg font-normal hover:text-[#e65540] transition duration-500 select-none pb-2">New York SS 2018 Street Style: By Annina <br /> Mislin</h1>
            <h2 className="text-sm font-light text-gray-400 pb-2">by <span className="text-gray-700"> fashe-theme Admin </span> on <span className="text-gray-700"> Dec 28, 2017 </span></h2>
            <p className="text-gray-400 text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Etiam sed turpis sed lorem dignissim vulputate nec <br /> cursus ante. Nunc sit...</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-20 p-24">
        <div className="text-3xl font-bold">
          <h1>@ FOLLOW US ON INSTAGRAM</h1>
        </div>
        <div className="flex gap-36 text-center ">
          <div>
            <h1 className="text-gray-700 font-light text-xl">Free Delivery Worldwide</h1>
            <h1 className="text-gray-400 font-light text-sm">Mirum est notare quam littera gothica</h1>
          </div>
          <div className="border-gray-300 border-l-[1px] pl-20">
            <h1 className="text-gray-700 font-light text-xl">30 Days Return</h1>
            <h1 className="text-gray-400 font-light text-sm">Simply return it within 30 days for an exchange.</h1>
          </div>
          <div className="border-gray-300 border-l-[1px] pl-20">
            <h1 className="text-gray-700 font-light text-xl">Store Opening</h1>
            <h1 className="text-gray-400 font-light text-sm">Shop open from Monday to Sunday</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;