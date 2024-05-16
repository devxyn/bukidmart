import ProductCard from './ProductCard';

const FeaturedProduct = () => {
  return (
    <section className='h-[80%] md:h-screen flex flex-col items-center justify-center gap-10 md:gap-14 px-5 py-10'>
      <h2 className='text-2xl md:text-5xl tracking-widest'>FEATURED PRODUCTS</h2>
      <div className='flex w-full md:justify-center overflow-x-scroll md:overflow-x-auto gap-5 md:gap-10 scroll-smooth'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <button className='bg-accent text-white text-lg md:text-2xl font-normal px-6 py-3 md:px-10 md:py-4 rounded-xl'>
        VIEW PRODUCTS
      </button>
    </section>
  );
};

export default FeaturedProduct;
