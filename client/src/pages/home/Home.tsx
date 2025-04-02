import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Banner from '@components/home/Banner';
import Featured from '@components/home/Featured';
import Statement from '@components/home/Statement';
import Testimonials from '@components/home/Testimonials';
import { handleError } from '@/utils/helper';
import { getRequest } from '@/services/requestService';
import { setProducts } from '@/store/slices/productSlice';

const Home = () => {
  const dispatch = useDispatch();

  const handleGetProducts = async () => {
    try {
      const response = await getRequest('/products');
      dispatch(setProducts(response));
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    handleGetProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='h-full'>
      <Banner />
      <Featured />
      <Statement />
      <Testimonials />
    </div>
  );
};

export default Home;
