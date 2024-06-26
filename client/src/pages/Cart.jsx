/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import CartItem from '../components/CartItem';
import { fetchCartItems } from './../services/fetchCartItems';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../hooks/useAuth';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const user = useAuth();

  useEffect(() => {
    const getCartItems = async () => {
      const items = await fetchCartItems(user.userID);
      setCartItems(items);
    };

    getCartItems();
  }, []);

  const removeItem = async (productID) => {
    try {
      await axios.post('https://bukidmart-server.vercel.app/api/cart/remove', { userID: user.userID, productID });
      setCartItems(cartItems.filter((item) => item.product._id !== productID));
    } catch (error) {
      console.error(error);
    }
  };

  const cartTotal = cartItems.map((item) => item.product.price * item.quantity).reduce((acc, cur) => acc + cur, 0);

  return (
    <main
      className={`${cartItems.length <= 3 ? 'h-screen ' : 'h-full'} ${
        cartItems.length <= 2 ? 'lg:h-screen ' : 'lg:h-full'
      } p-5 pt-[120px] lg:p-20 lg:pt-[160px] flex flex-col gap-4 relative`}>
      <h2 className='text-4xl md:text-6xl font-semibold'>Your Cart</h2>
      <section>
        {cartItems.length !== 0 ? (
          <>
            <div className='my-10 flex flex-col gap-2'>
              {cartItems.map((item) => (
                <CartItem
                  key={item.product._id}
                  item={item}
                  imgHeight={'h-40'}
                  isDisplayed={true}
                  removeItem={() => removeItem(item.product._id)}
                />
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
              <Link
                to='/checkout'
                className='text-white text-center text-lg md:text-xl font-semibold px-6 py-3 rounded-lg bg-accent w-full md:w-auto'>
                Check Out
              </Link>
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
