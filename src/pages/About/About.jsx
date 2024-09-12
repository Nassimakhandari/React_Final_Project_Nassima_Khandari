import '../../style/about.css'
import images from '../../constant/images';
function About() {
  return (
    <>

      <div className="bg-image relative">
      </div>
      <div className='absolute top-[25%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col text-center gap-4'>
        <h1 className='text-5xl text-white font-bold'>ABOUT</h1>
      </div>

      <div className='flex justify-center items-center gap-6 respo'>
        <div className='overflow-hidden'>
          <img src={images.img14} alt="" className='w-[21vw] h-[80vh] object-contain transition-all duration-500 ease-in-out hover:scale-110 about-img' />
        </div>
        <div className='lg:w-[44%] md:w-[50%] flex flex-col gap-4 respo-about' >
          <h1 className='text-2xl font-light'>Our story</h1>
          <p className='text-gray-500 font-light'>Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.</p>
          <div className='border-l-4 pl-6 flex flex-col gap-3'>
            <p className='text-gray-500  font-light'> Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.</p>
            <h1 className='font-light text-sm'>- Steve Job’s</h1>
          </div>
        </div>
      </div>

    </>
  );
}

export default About;

