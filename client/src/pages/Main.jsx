import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import FeaturedProduct from '../components/FeaturedProduct';
import StatementSection from '../components/StatementSection';
import Testimonials from '../components/Testimonials';

const Main = () => {
  const productData = useLoaderData();
  return (
    <>
      <Banner />
      <FeaturedProduct productData={productData} />
      <StatementSection />
      <Testimonials />
    </>
  );
};

export default Main;
