/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import useGetUserID from '../hooks/useGetUserID';
import { fetchCartItems } from '../services/fetchCartItems';
import FormInput from '../components/FormInput';
import CartItem from '../components/CartItem';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CheckOut = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCheckOutSuccess, setIsCheckOutSuccess] = useState(false);
  const [deliveryForm, setDeliveryForm] = useState({
    fullName: '',
    address: '',
    unit: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
  });
  const [paymentForm, setPaymentForm] = useState({
    cardNumber: '',
    expiration: '',
    security: '',
    cardHolder: '',
  });

  const userID = useGetUserID();
  const navigate = useNavigate();

  useEffect(() => {
    const getCartItems = async () => {
      const items = await fetchCartItems(userID);
      setCartItems(items);
    };

    getCartItems();
  }, []);

  const cartTotal = cartItems.map((item) => item.product.price * item.quantity).reduce((acc, cur) => acc + cur, 0);

  const handleDeliveryChange = (e) => {
    const { id, value } = e.target;
    setDeliveryForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handlePaymentChange = (e) => {
    const { id, value } = e.target;
    setPaymentForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleCheckOut = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/cart/checkout', {
        userID,
        deliveryForm,
      });
      if (response.status === 200) setIsCheckOutSuccess(true);

      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className='p-10 pt-[120px] lg:p-0 lg:pt-0 flex flex-col lg:flex-row'>
      <div className='w-full flex flex-col gap-5 lg:w-[55%] lg:pt-[160px] lg:pb-20 lg:px-20 lg:pl-40'>
        <h2 className='text-2xl font-semibold'>Delivery</h2>
        <div className='flex flex-col gap-2 lg:gap-4 '>
          <FormInput
            id={'fullName'}
            width={'w-full'}
            type={'text'}
            label={'Full name'}
            onChange={handleDeliveryChange}
          />
          <FormInput id={'address'} width={'w-full'} type={'text'} label={'Address'} onChange={handleDeliveryChange} />
          <FormInput
            id={'unit'}
            width={'w-full'}
            type={'text'}
            label={'Apartment, suite, unit, etc. (optional)'}
            onChange={handleDeliveryChange}
          />
          <div className='flex w-full flex-row gap-2 md:gap-4'>
            <FormInput id={'city'} width={'w-1/3'} type={'text'} label={'City'} onChange={handleDeliveryChange} />
            <FormInput id={'state'} width={'w-1/3'} type={'text'} label={'State'} onChange={handleDeliveryChange} />
            <FormInput
              id={'zip'}
              width={'w-1/3'}
              type={'number'}
              label={'Zip code'}
              hideArrow={'hide-arrows'}
              onChange={handleDeliveryChange}
            />
          </div>
          <FormInput
            id={'phone'}
            width={'w-full'}
            type={'number'}
            label={'Phone'}
            hideArrow={'hide-arrows'}
            onChange={handleDeliveryChange}
          />
        </div>
        <h2 className='text-2xl font-semibold'>Payment</h2>
        <div className='flex flex-col gap-2 lg:gap-4 '>
          <FormInput
            id={'cardNumber'}
            width={'w-full'}
            type={'number'}
            label={'Card number'}
            hideArrow={'hide-arrows'}
            onChange={handlePaymentChange}
          />
          <div className='flex flex-row gap-2 lg:gap-4'>
            <FormInput
              id={'expiration'}
              width={'w-1/2'}
              type={'number'}
              label={'Expiration date'}
              hideArrow={'hide-arrows'}
              onChange={handlePaymentChange}
            />
            <FormInput
              id={'security'}
              width={'w-1/2'}
              type={'number'}
              label={'Security code'}
              hideArrow={'hide-arrows'}
              onChange={handlePaymentChange}
            />
          </div>
          <FormInput
            id={'cardHolder'}
            width={'w-full'}
            type={'text'}
            label={'Name on card'}
            onChange={handlePaymentChange}
          />
        </div>
        <button
          className='hidden lg:block text-white text-center text-lg md:text-xl font-semibold px-6 py-3 rounded-lg bg-accent w-full md:w-auto'
          onClick={handleCheckOut}
          disabled={isCheckOutSuccess}>
          {isCheckOutSuccess ? 'Order placed successfully!' : ' Place order'}
        </button>
      </div>
      <div className='w-full flex flex-col gap-5 my-5 lg:my-0 lg:w-[45%] lg:pt-[160px] lg:pb-20 lg:bg-backdrop lg:px-10'>
        <h2 className='text-2xl font-semibold'>Order summary</h2>
        <div className='flex flex-col gap-2 lg:gap-4'>
          {cartItems.map((item) => (
            <CartItem item={item} key={item.product._id} imgHeight={'h-32'} />
          ))}
        </div>
        <div className='flex justify-between'>
          <h3 className='text-xl font-semibold'>Total:</h3>
          <h3 className='text-xl font-semibold text-secondary'>₱{cartTotal.toLocaleString('en-US')}</h3>
        </div>
        <button
          className='lg:hidden text-white text-center text-lg md:text-xl font-semibold px-6 py-3 rounded-lg bg-accent w-full md:w-auto'
          onClick={handleCheckOut}
          disabled={isCheckOutSuccess}>
          {isCheckOutSuccess ? 'Order placed successfully!' : ' Place order'}
        </button>
      </div>
    </main>
  );
};

export default CheckOut;
