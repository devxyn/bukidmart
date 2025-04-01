interface ProductData {
  _id: string;
  name: string;
  description: string;
  price: number;
  stocks: number;
  image: string;
  category: string;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
}

interface ProductCardProps {
  isLoading?: boolean;
  product: ProductData | null;
}

const ProductCard = ({ isLoading = true, product }: ProductCardProps) => {
  if (isLoading || !product) {
    return (
      <div className='flex w-60 md:w-64 flex-col gap-4'>
        <div className='skeleton h-52 w-full'></div>
        <div className='skeleton h-4 w-3/4'></div>
        <div className='skeleton h-4 w-1/2'></div>
        <div className='skeleton h-4 w-1/2'></div>
      </div>
    );
  }

  return (
    <div className='w-80 flex-shrink-0 md:flex-shrink relative hover:cursor-pointer'>
      <p className='absolute top-3 right-4 bg-secondary text-white text-center text-xs font-bold tracking-wide px-3 py-2 rounded-xl'>
        {product.category.toUpperCase()}
      </p>
      <img className='w-full' src={product.image} alt='coco-pandan' />
      <div className='w-full md:w-auto overflow-x-auto'>
        <h3 className='text-3xl font-semibold tracking-wide'>{product.name}</h3>
        <p className='text-xl font-semibold text-secondary tracking-wide'>₱ {product.price.toLocaleString('en-US')}</p>
      </div>
    </div>
  );
};

export default ProductCard;
