import { Link } from 'react-router';
import banner from '@assets/images/banner.png';

const Banner = () => {
  return (
    <div className='bg-neutral h-screen lg:h-full px-5 pt-16 pb-10 lg:px-20 relative flex items-center justify-center overflow-hidden'>
      <div className='text-left z-10'>
        <h1 className='text-4xl lg:text-5xl font-semibold tracking-wide lg:tracking-widest leading-tight mb-10'>
          <span className='text-secondary font-bold'>Farm-fresh</span> goodness delivered to your doorstep
        </h1>
        <p className='text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl'>
          Discover our selection of fresh, organic produce and local farm products. Quality you can trust, delivered
          right to you.
        </p>
        <div className='flex justify-center lg:justify-start gap-4'>
          <Link to='/shop' className='btn btn-accent w-[10rem] h-[3rem] text-white text-xl'>
            Shop now
          </Link>
          <button className='btn btn-outline btn-primary w-[10rem] h-[3rem] text-xl'>Learn more</button>
        </div>
      </div>

      <div className='lg:hidden bg-[#f3fcf7]/80 w-full h-full absolute top-0 left-0 z-[5]'></div>
      <img
        src={banner}
        alt='overlay-banner'
        className='w-full lg:w-[50%] h-full lg:h-auto absolute top-[100px] left-0 object-cover object-center z-[1] lg:static lg:z-auto'
      />
    </div>
  );
};

export default Banner;
