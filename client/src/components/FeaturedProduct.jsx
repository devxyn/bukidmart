/* eslint-disable react/prop-types */
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const FeaturedProduct = ({ productData }) => {
  const featuredData = productData.filter((product) => product.isFeatured === true);

  return (
    <section className='h-[80%] lg:h-screen flex flex-col items-center justify-center gap-10 lg:gap-14 px-5 py-10'>
      <h2 className='text-2xl lg:text-5xl tracking-widest'>FEATURED PRODUCTS</h2>
      <div className='flex w-full lg:justify-center overflow-x-scroll lg:overflow-x-auto gap-5 lg:gap-10 scroll-smooth'>
        {featuredData.map((product) => (
          <Link to={`/products/${product._id}`} key={product._id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
      <Link
        to='/products'
        className='bg-accent text-white text-lg lg:text-2xl font-normal px-6 py-3 lg:px-10 lg:py-4 rounded-xl'>
        VIEW PRODUCTS
      </Link>
    </section>
  );
};

export default FeaturedProduct;
