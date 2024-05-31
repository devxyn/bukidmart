import { HiArrowLongLeft, HiOutlineShoppingBag } from 'react-icons/hi2';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import useAuth from '../hooks/useAuth';

const Product = () => {
  const product = useLoaderData();
  const user = useAuth();

  const [cartItem, setCartItem] = useState({ userID: user.userID, product: product._id, quantity: 1 });
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const btnMessage = isSuccess ? 'Product added to cart!' : 'Add to cart';

  const handleAddToCart = async () => {
    try {
      if (!user) {
        navigate('/login');
        return;
      }

      const response = await axios.put('https://bukidmart-server.vercel.app/api/cart/add', cartItem);
      if (response.status === 201) setIsSuccess(true);
    } catch (error) {
      console.error(error);
    }
  };

  const addQuantity = () => {
    setCartItem((prevState) => ({ ...prevState, quantity: Math.min(prevState.quantity + 1, 50) }));
  };
  const subtractQuantity = () => {
    setCartItem((prevState) => ({ ...prevState, quantity: Math.max(prevState.quantity - 1, 1) }));
  };

  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 0 && value <= 50) setCartItem({ ...cartItem, quantity: value });
  };

  return (
    <main className='h-full pt-[100px] lg:p-40 lg:pb-20 lg:pt-[160px] bg-backdrop'>
      <div className='bg-white h-full lg:h-[80vh] lg:p-10 lg:pt-20 flex flex-col lg:flex-row relative'>
        <Link
          to='/products'
          className='absolute bg-secondary lg:bg-transparent top-2 left-2 lg:top-6 lg:left-10 flex items-center gap-2 text-white text-sm lg:text-secondary rounded-btn px-2 py-1'>
          <HiArrowLongLeft size={32} className='fill-white lg:fill-secondary' />
          Back to products
        </Link>
        <img src={product?.imageUrl} alt={product?.name} className='h-full object-cover object-center' />
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
                  <button className=' px-3 py-1' onClick={subtractQuantity}>
                    -
                  </button>
                  <input
                    type='number'
                    value={cartItem.quantity}
                    name='quantity'
                    onChange={handleInputChange}
                    className='w-14 text-center border border-x-black py-1'
                  />
                  <button className='border px-3 py-1' onClick={addQuantity}>
                    +
                  </button>
                </div>
              </div>
              {/* <p className='text-right lg:text-left text-placeholder text-sm'>{product?.quantity} kg(s) available </p> */}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className={`w-full lg:w-auto flex items-center justify-center gap-3 px-5 py-3 rounded-btn ${
              isSuccess ? 'bg-transparent border-2 border-accent' : 'bg-accent'
            }`}
            disabled={isSuccess}>
            <HiOutlineShoppingBag size={32} className={isSuccess ? 'stroke-accent' : 'stroke-white'} />
            <p className={`text-lg ${isSuccess ? 'text-accent font-bold' : 'text-white'}`}> {btnMessage}</p>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Product;
