/* eslint-disable react/prop-types */
import cocopandan from '../assets/coco pandan.png';

const CartItem = ({ item, imgHeight }) => {
  return (
    <div className='flex w-full h-full'>
      <img className={`h-20 md:${imgHeight}`} src={cocopandan} alt='coco pandan' />
      <div className='w-full flex flex-col md:flex-row md:justify-between md:items-center px-3 md:px-5 '>
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
