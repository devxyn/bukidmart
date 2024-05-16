import banner2 from '../assets/banner 2.png';

const StatementSection = () => {
  return (
    <section className='h-[80vh] md:h-screen bg-backdrop flex justify-center items-center px-5 md:px-10 relative'>
      <img
        className='w-full md:w-[50%] h-full md:h-auto absolute top-0 left-0 object-cover object-center z-[1] md:static md:z-auto'
        src={banner2}
        alt='banner-2'
      />
      <div className='md:hidden bg-backdrop/80 w-full h-full absolute top-0 left-0 z-[5]'></div>

      <div className='flex flex-col gap-10 md:gap-20 text-left md:text-right z-10'>
        <h3 className='text-3xl md:text-5xl font-semibold tracking-widest'>
          Transforming the Lives of <span className='text-secondary font-bold'>Filipino Farmers</span> through
          Technology
        </h3>
        <p className='text-2xl md:text-3xl font-medium tracking-widest'>
          <span className='text-secondary font-bold'>BukidMart</span> is driven by a powerful mission: to
          <span className='text-secondary font-bold'> empower Filipino farmers and fishermen</span> through innovative
          technology, igniting a wave of prosperity across our communities.
        </p>
      </div>
    </section>
  );
};

export default StatementSection;
