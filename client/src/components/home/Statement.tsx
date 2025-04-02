import banner2 from '@assets/images/banner 2.png';

const Statement = () => {
  return (
    <section className='h-[75vh] lg:h-full bg-neutral flex justify-center items-center px-5 lg:px-10 relative'>
      <img
        className='w-full lg:w-[50%] h-full lg:h-auto absolute top-0 left-0 object-cover object-center z-[1] lg:static lg:z-auto'
        src={banner2}
        alt='banner-2'
      />
      <div className='lg:hidden bg-neutral/80 w-full h-full absolute top-0 left-0 z-[5]'></div>

      <div className='flex flex-col gap-10 lg:gap-10 text-left lg:text-right z-10'>
        <h3 className='text-3xl lg:text-5xl font-semibold tracking-widest'>
          Empowering <span className='text-secondary font-bold'>Filipino Farmers</span> with Digital Innovation
        </h3>
        <p className='text-2xl lg:text-3xl font-medium tracking-widest'>
          <span className='text-secondary font-bold'>BukidMart</span> connects local farmers and fishermen to a wider
          market, creating sustainable growth and prosperity for our agricultural communities.
        </p>
      </div>
    </section>
  );
};

export default Statement;
