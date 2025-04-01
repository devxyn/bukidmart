interface Testimony {
  name: string;
  title: string;
  message: string;
  image: string;
}

const TestimonialCard = ({ testimony }: { testimony: Testimony }) => {
  return (
    <div className='w-full md:w-[40rem] lg:w-[25rem] border border-[#D9D9D9] bg-[#F8FBF5] p-5 lg:p-7 rounded-3xl flex flex-col justify-between'>
      <p className='text-lg md:text-xl font-light italic tracking-wide mb-5 lg:mb-10'>{testimony?.message}</p>
      <div className='flex w-full gap-4 items-center'>
        <img
          className='w-[20%] md:w-[10%] lg:w-1/6 rounded-full'
          src={testimony?.image}
          alt={`${testimony?.name}-image`}
        />
        <div>
          <p className='text-xl md:text-2xl font-light italic'>{testimony?.name}</p>
          <p className='text-lg font-light italic'>{testimony?.title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
