/* eslint-disable react/prop-types */

const ProductCard = ({ product }) => {
  return (
    <div className='w-60 md:w-80 flex-shrink-0 md:flex-shrink relative'>
      <p className='absolute top-3 right-4 bg-secondary text-white text-center text-xs font-bold tracking-wide px-3 py-2 rounded-xl'>
        {product?.category.toUpperCase()}
      </p>
      <img className='w-full' src={product?.imageUrl} alt='coco-pandan' />
      <div className='w-full md:w-auto overflow-x-auto'>
        <h3 className='text-3xl font-semibold tracking-wide'>{product?.name}</h3>
        <p className='text-xl font-semibold text-secondary tracking-wide'>₱{product?.price.toLocaleString('en-US')}</p>
      </div>
    </div>
  );
};

export default ProductCard;
