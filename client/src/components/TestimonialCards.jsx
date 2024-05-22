/* eslint-disable react/no-unescaped-entities */
import shiela from '../assets/shiela.jpg';

const TestimonialCards = () => {
  return (
    <div className='w-full md:w-[40rem] lg:w-[25rem] border border-[#D9D9D9] bg-shade p-5 lg:p-7 rounded-3xl'>
      <p className='text-xl font-light italic tracking-wide mb-5 lg:mb-10'>
        "I've been a loyal customer of BukidMart for over a year now, and I can't imagine going back to buying groceries
        any other way. The freshness of their produce is unmatched, and the convenience of having it delivered to my
        doorstep saves me so much time. Plus, knowing that I'm supporting local farmers makes the experience even
        better!"
      </p>
      <div className='flex w-full gap-4 items-center'>
        <img className='w-[10%] lg:w-1/6 rounded-full' src={shiela} alt='shiela' />
        <p className='text-2xl italic font-light'>- Shiela P.</p>
      </div>
    </div>
  );
};

export default TestimonialCards;
