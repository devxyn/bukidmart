import TestimonialCards from './TestimonialCards';

const Testimonials = () => {
  return (
    <section className='h-auto lg:h-screen flex flex-col items-center justify-center gap-10 lg:gap-20 px-5 py-10'>
      <h2 className='text-3xl lg:text-5xl tracking-widest'>TESTIMONIALS</h2>
      <div className='flex flex-col lg:flex-row justify-center gap-5 lg:gap-20'>
        <TestimonialCards />
        <TestimonialCards />
        <TestimonialCards />
      </div>
    </section>
  );
};

export default Testimonials;
