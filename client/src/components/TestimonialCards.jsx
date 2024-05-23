/* eslint-disable react/prop-types */

const TestimonialCards = ({ testimony }) => {
  return (
    <div className='w-full md:w-[40rem] lg:w-[25rem] border border-[#D9D9D9] bg-shade p-5 lg:p-7 rounded-3xl flex flex-col justify-between'>
      <p className='text-lg md:text-xl font-light italic tracking-wide mb-5 lg:mb-10'>{testimony.message}</p>
      <div className='flex w-full gap-4 items-center'>
        <img className='w-[20%] md:w-[10%] lg:w-1/6 rounded-full' src={testimony.image} alt='shiela' />
        <p className='text-xl md:text-2xl italic font-light'>- {testimony.name}</p>
      </div>
    </div>
  );
};

export default TestimonialCards;
