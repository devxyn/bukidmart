/* eslint-disable react-hooks/exhaustive-deps */
import { getRequest } from '@services/requestService';
import { setFeaturedProducts } from '@store/slices/productSlice';
import { RootState } from '@store/store';
import { handleError } from '@utils/helper';
import ProductCard from '@components/shared/ProductCard';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Featured = () => {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const featuredProducts = useSelector((state: RootState) => state.product.featuredProducts);
  const mockProducts = Array.from({ length: 4 }, () => ({}));

  const handleGetFeaturedProducts = async () => {
    setIsLoading(true);
    try {
      const response = await getRequest('/products', { params: { featured: true } });
      dispatch(setFeaturedProducts(response));
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetFeaturedProducts();
  }, []);

  return (
    <section className='h-auto lg:h-screen flex flex-col items-center justify-center gap-10 lg:gap-20 px-5 py-10'>
      <h2 className='text-3xl lg:text-5xl tracking-widest uppercase font-bold text-center'>Featured Products</h2>
      <div className='flex flex-wrap flex-col md:flex-row gap-5 justify-center items-center'>
        {featuredProducts && featuredProducts.length > 0
          ? featuredProducts.map((product) => <ProductCard key={product._id} isLoading={isLoading} product={product} />)
          : mockProducts.map((_, index) => <ProductCard key={index} />)}
      </div>
    </section>
  );
};

export default Featured;
