import cocopandan from '../assets/coco pandan.png';

const ProductCard = () => {
  return (
    <div className='w-60 md:w-80 flex-shrink-0 md:flex-shrink'>
      <img className='w-full' src={cocopandan} alt='coco-pandan' />
      <div className='w-full md:w-auto overflow-x-auto'>
        <h3 className='text-3xl font-semibold tracking-wide'>Coco Pandan</h3>
        <p className='text-lg font-bold text-placeholder'>25 kg</p>
        <p className='text-xl font-semibold text-secondary tracking-wide'>P1,890</p>
      </div>
    </div>
  );
};

export default ProductCard;
