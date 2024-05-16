import banner from '../assets/banner.png';

const Banner = () => {
  return (
    <div className='bg-backdrop h-[50vh] md:h-[90vh] px-5 md:px-20 relative flex items-center justify-center'>
      <div className='text-left z-10'>
        <h1 className='text-4xl md:text-5xl font-semibold tracking-wide md:tracking-widest leading-tight mb-10'>
          <span className='text-secondary font-bold'>Farm-fresh</span> goodness delivered to your doorstep
        </h1>
        <div className='flex justify-center md:justify-start gap-4'>
          <button className='bg-accent text-white text-base md:text-2xl font-semibold px-8 py-3 md:px-10 md:py-3 rounded-xl'>
            Shop now
          </button>
          <button className='border border-primary text-primary text-base md:text-2xl font-semibold px-8 py-3 md:px-10 md:py-3 rounded-xl'>
            Learn more
          </button>
        </div>
      </div>

      <div className='md:hidden bg-backdrop/80 w-full h-full absolute top-0 left-0 z-[5]'></div>
      <img
        src={banner}
        alt='overlay-banner'
        className='w-full md:w-[50%] h-full md:h-auto absolute top-0 left-0 object-cover z-[1] md:static md:z-auto'
      />
    </div>
  );
};

export default Banner;
