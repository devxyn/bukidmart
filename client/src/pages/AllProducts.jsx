import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useLoaderData } from 'react-router-dom';

const AllProducts = () => {
  const productData = useLoaderData();
  const [filteredData, setFilteredData] = useState(productData);

  const handleFilterProducts = (category) => {
    if (category === 'All') {
      setFilteredData(productData);
      return;
    }

    const filteredProducts = productData.filter((product) => product.category === category);
    setFilteredData(filteredProducts);
  };

  return (
    <main className='h-full p-5 pt-[120px] lg:p-20 lg:pt-[160px]'>
      <h2 className='text-3xl md:text-5xl font-semibold'>All Products</h2>

      <div className='flex flex-row justify-center gap-2 lg:gap-5'>
        <button className='bg-secondary text-white px-4 py-2 rounded-badge' onClick={() => handleFilterProducts('All')}>
          All
        </button>
        <button
          className='bg-secondary text-white px-4 py-2 rounded-badge'
          onClick={() => handleFilterProducts('fruit')}>
          Fruits
        </button>
        <button
          className='bg-secondary text-white px-4 py-2 rounded-badge'
          onClick={() => handleFilterProducts('vegetable')}>
          Vegetables
        </button>
        <button
          className='bg-secondary text-white px-4 py-2 rounded-badge'
          onClick={() => handleFilterProducts('rice')}>
          Rice
        </button>
      </div>

      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-5 justify-items-center my-10'>
        {filteredData.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default AllProducts;
