import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const AllProducts = () => {
  const [productData, setProductData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    handleFetchProductData();
  }, []);

  const handleFetchProductData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/products');
      setProductData(response.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFilterProducts = (category) => {
    if (category === 'All') {
      setFilteredData(productData);
      return;
    }

    const filteredProducts = productData.filter((product) => product.category === category);
    setFilteredData(filteredProducts);
  };

  return (
    <main className='h-full p-5 pt-[120px] md:p-20 md:pt-[160px]'>
      <h2 className='text-5xl font-semibold'>All Products</h2>

      <div className='flex flex-row justify-center gap-5 mb-10'>
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

      <div className='grid grid-cols-4 gap-4 justify-items-center'>
        {filteredData.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default AllProducts;
