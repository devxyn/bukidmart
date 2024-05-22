import banner from '../assets/banner.png';

const Banner = () => {
  return (
    <div className='bg-backdrop h-[80vh] lg:h-screen px-5 lg:px-20 pt-[100px] lg:pt-[70px] relative flex items-center justify-center overflow-hidden'>
      <div className='text-left z-10'>
        <h1 className='text-4xl lg:text-5xl font-semibold tracking-wide lg:tracking-widest leading-tight mb-10'>
          <span className='text-secondary font-bold'>Farm-fresh</span> goodness delivered to your doorstep
        </h1>
        <div className='flex justify-center lg:justify-start gap-4'>
          <button className='bg-accent text-white text-base lg:text-2xl font-semibold px-8 py-3 lg:px-10 lg:py-3 rounded-xl'>
            Shop now
          </button>
          <button className='border border-primary text-primary text-base lg:text-2xl font-semibold px-8 py-3 lg:px-10 lg:py-3 rounded-xl'>
            Learn more
          </button>
        </div>
      </div>

      <div className='lg:hidden bg-backdrop/80 w-full h-full absolute top-0 left-0 z-[5]'></div>
      <img
        src={banner}
        alt='overlay-banner'
        className='w-full lg:w-[50%] h-full lg:h-auto absolute top-[100px] left-0 object-cover object-center z-[1] lg:static lg:z-auto'
      />
    </div>
  );
};

export default Banner;
