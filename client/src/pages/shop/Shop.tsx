/* eslint-disable react-hooks/exhaustive-deps */
import ProductCard from '@/components/shared/ProductCard';
import { getRequest } from '@/services/requestService';
import { setProducts } from '@/store/slices/productSlice';
import { RootState } from '@/store/store';
import { handleError } from '@/utils/helper';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Shop = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { products, limit, page, total } = useSelector((state: RootState) => state.product);

  const [currentPage, setCurrentPage] = useState(page);

  const dispatch = useDispatch();

  const handleGetProducts = async () => {
    setIsLoading(true);
    try {
      const response = await getRequest('/products', { params: { page: currentPage, limit } });
      dispatch(setProducts(response));
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetProducts();
  }, [currentPage]);

  return (
    <div className='w-full flex-1 flex flex-col justify-between py-10 px-5'>
      <div className='w-full flex-1 flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold mb-8 tracking-wider uppercase text-center'>Shop All Products</h1>

        {isLoading ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {Array.from({ length: 4 }, (_, index) => (
              <ProductCard key={index} />
            ))}
          </div>
        ) : (
          <>
            {products && products.length > 0 ? (
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {products.map((product) => (
                  <ProductCard key={product._id} isLoading={isLoading} product={product} />
                ))}
              </div>
            ) : (
              <div className='text-center py-10'>
                <p className='text-xl text-gray-500'>No products found</p>
              </div>
            )}
          </>
        )}
      </div>

      {limit < total && (
        <div className='w-full flex justify-center items-center'>
          <div className='join my-8'>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className='join-item btn btn-outline btn-secondary'>
              «
            </button>
            <span className='join-item flex justify-center items-center px-4 text-sm font-semibold'>
              {currentPage} of {Math.ceil(total / limit)}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(total / limit)))}
              disabled={currentPage >= Math.ceil(total / limit)}
              className='join-item btn btn-outline btn-secondary'>
              »
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
