import { HiBars3, HiOutlineMagnifyingGlass, HiOutlineShoppingBag } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='fixed z-50 h-[100px] lg:h-[80px] w-full bg-primary shadow-md'>
      {/* {Mobile Nav bar} */}
      <div className='h-full w-full flex flex-col gap-2 items-center justify-center lg:hidden'>
        <div className='w-full flex justify-between px-5 items-center'>
          <div className='flex gap-1'>
            <HiBars3 size={32} className='fill-white' />
            <Link to='/' className='text-white text-2xl'>
              BukidMart
            </Link>
          </div>
          <Link to='/cart'>
            <HiOutlineShoppingBag size={32} className='stroke-white' />
          </Link>
        </div>
        <div className='relative w-[90%]'>
          <input
            className='px-5 py-2 w-full relative bg-backdrop placeholder-placeholder rounded-3xl text-sm'
            type='text'
            placeholder='Search products'
          />
          <HiOutlineMagnifyingGlass size={28} className='absolute top-1 right-4 stroke-placeholder' />
        </div>
      </div>

      {/* {Desktop Nav bar} */}
      <div className='hidden lg:flex h-full px-10 items-center justify-between'>
        <div className='flex items-center gap-10'>
          <Link to='/' className='text-4xl font-bold text-white'>
            BukidMart
          </Link>
          <div className='relative '>
            <input
              className='px-5 py-3 w-80 relative bg-backdrop placeholder-placeholder rounded-3xl text-xs'
              type='text'
              placeholder='Search products'
            />
            <HiOutlineMagnifyingGlass
              size={20}
              className='absolute top-[10px] right-4 stroke-placeholder cursor-pointer'
            />
          </div>
        </div>
        <div className='flex items-center gap-10'>
          <div className='flex items-center gap-4'>
            <Link to='/' className='text-white text-base font-semibold cursor-pointer'>
              HOME
            </Link>
            <Link to='/' className='text-white text-base font-semibold cursor-pointer'>
              ABOUT US
            </Link>
            <Link to='/products' className='text-white text-base font-semibold cursor-pointer'>
              PRODUCTS
            </Link>
            <Link
              to='/products'
              className='text-white text-base font-semibold px-4 py-3 rounded-lg bg-accent cursor-pointer'>
              SHOP NOW
            </Link>
          </div>
          <Link to='/cart'>
            <HiOutlineShoppingBag size={32} className='stroke-white cursor-pointer' />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
