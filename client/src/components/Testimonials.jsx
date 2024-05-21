import TestimonialCards from './TestimonialCards';

const Testimonials = () => {
  return (
    <section className='h-auto md:h-screen flex flex-col items-center justify-center gap-10 md:gap-20 px-5 py-10'>
      <h2 className='text-3xl md:text-5xl tracking-widest'>TESTIMONIALS</h2>
      <div className='flex flex-col md:flex-row justify-center gap-5 md:gap-20'>
        <TestimonialCards />
        <TestimonialCards />
        <TestimonialCards />
      </div>
    </section>
  );
};

export default Testimonials;
