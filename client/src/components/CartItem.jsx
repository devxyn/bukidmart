/* eslint-disable react/prop-types */
import cocopandan from '../assets/coco pandan.png';

const CartItem = ({ item }) => {
  return (
    <div className='flex w-full h-full border'>
      <img className='h-20 md:h-40' src={cocopandan} alt='coco pandan' />
      <div className='w-full flex flex-col justify-between md:flex-row md:items-center p-2 md:p-10'>
        <div className='md:w-1/2 flex flex-col'>
          <p className='text-lg md:text-2xl font-semibold'>{item?.product?.name}</p>
          <p className='text-base md:text-base font-semibold text-placeholder'>{item?.quantity} kg(s)</p>
        </div>
        <p className='text-base md:text-lg text-secondary font-semibold'>
          ₱{(item?.product?.price * item?.quantity).toLocaleString('en-US')}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
