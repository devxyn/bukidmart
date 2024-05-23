/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import CartItem from '../components/CartItem';
import useGetUserID from './../hooks/useGetUserID';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const userID = useGetUserID();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/cart/${userID}`);
        setCartItems(response.data.cart);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCartItems();
  }, []);

  const cartTotal = cartItems.map((item) => item.product.price * item.quantity).reduce((acc, cur) => acc + cur, 0);

  return (
    <main
      className={`${cartItems.length <= 3 ? 'h-screen ' : 'h-full'} ${
        cartItems.length <= 2 ? 'h-screen ' : 'h-full'
      } p-5 pt-[120px] lg:p-20 lg:pt-[160px] flex flex-col gap-4 relative`}>
      <h2 className='text-4xl md:text-6xl font-semibold'>Your Cart</h2>
      <section>
        {cartItems.length !== 0 ? (
          <>
            <div className='my-10 flex flex-col gap-2'>
              {cartItems.map((item) => (
                <CartItem key={item.product._id} item={item} />
              ))}
            </div>
            <div
              className={`flex flex-col md:flex-row justify-end items-center gap-2 ${
                cartItems.length <= 3 ? 'absolute bottom-4 left-4 right-4' : ''
              } md:static`}>
              <div className='flex flex-row justify-between md:gap-2 w-full md:w-auto'>
                <h3 className='text-xl md:text-2xl'>Total:</h3>
                <h3 className='text-xl md:text-2xl font-semibold mr-4'>₱{cartTotal.toLocaleString('en-US')}</h3>
              </div>
              <button className='text-white text-lg md:text-xl font-semibold px-6 py-3 rounded-lg bg-accent w-full md:w-auto'>
                Check Out
              </button>
            </div>
          </>
        ) : (
          <h2 className='text-center text-2xl md:text-3xl font-semibold mt-36 md:mt-20'>Your cart is empty.</h2>
        )}
      </section>
    </main>
  );
};

export default Cart;
