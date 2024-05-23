import cocopandan from '../assets/coco pandan.png';
import { HiArrowLongLeft, HiOutlineShoppingBag } from 'react-icons/hi2';
import { Link, useLoaderData } from 'react-router-dom';

const Product = () => {
  const product = useLoaderData();

  return (
    <main className='h-full pt-[100px] lg:p-40 lg:pb-20 lg:pt-[160px] bg-backdrop'>
      <div className='bg-white h-full lg:h-[80vh] lg:p-10 lg:pt-20 flex flex-col lg:flex-row relative'>
        <Link
          to='/products'
          className='absolute bg-secondary lg:bg-transparent top-2 left-2 lg:top-6 lg:left-10 flex items-center gap-2 text-white text-sm lg:text-secondary rounded-btn px-2 py-1'>
          <HiArrowLongLeft size={32} className='fill-white lg:fill-secondary' />
          Back to products
        </Link>
        <img src={cocopandan} alt='coco pandan' className='h-full object-cover object-center' />
        <div className='p-5 lg:p-10'>
          <div className='flex flex-col gap-2 mb-10'>
            <h3 className='text-4xl font-semibold'>{product?.name}</h3>
            <p className='text-xl font-semibold text-primary'>
              ₱{product?.price.toLocaleString('en-US')} <span className='font-light text-lg'>(1 kg)</span>{' '}
            </p>
            <p className='text-sm mb-10 text-placeholder'>{product.description}</p>
            <div className='flex flex-col lg:flex-row lg:items-center w-full gap-2 lg:gap-5'>
              <div className='flex items-center justify-between gap-5'>
                <p>Quantity</p>
                <div className='flex justify-center items-center border border-black '>
                  <button className=' px-3 py-1'>-</button>
                  <input type='number' min={0} max={25} className='w-14 text-center border border-x-black py-1' />
                  <button className='border px-3 py-1'>+</button>
                </div>
              </div>
              {/* <p className='text-right lg:text-left text-placeholder text-sm'>{product?.quantity} kg(s) available </p> */}
            </div>
          </div>

          <button className='w-full lg:w-auto flex items-center justify-center gap-3 text-lg bg-accent text-white px-5 py-3 rounded-btn'>
            <HiOutlineShoppingBag size={32} className='stroke-white' />
            Add to cart
          </button>
        </div>
      </div>
    </main>
  );
};

export default Product;
