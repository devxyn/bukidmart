import cocopandan from '../assets/coco pandan.png';

const CartItem = () => {
  return (
    <div className='flex w-full h-full border'>
      <img className='h-20 md:h-40' src={cocopandan} alt='coco pandan' />
      <div className='w-full flex flex-col justify-between md:flex-row md:items-center p-2 md:p-10'>
        <p className='text-lg md:text-2xl font-semibold'>Coco Pandan</p>
        <div className='md:w-1/2 flex flex-row items-center justify-between'>
          <div>
            <button className='px-3 py-1 md:py-3 md:px-5 border'>-</button>
            <input type='number' className='w-10 md:w-20 px-2 py-1 md:py-3 text-center border' min={0} max={100} />
            <button className='px-3 py-1 md:py-3 md:px-5 border'>+</button>
          </div>
          <p className='text-base md:text-lg font-semibold'>P100</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
