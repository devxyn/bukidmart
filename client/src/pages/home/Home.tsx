import Banner from '@components/home/Banner';
import Featured from '@components/home/Featured';
import Statement from '@components/home/Statement';
import Testimonials from '@components/home/Testimonials';

const Home = () => {
  return (
    <div className='h-full'>
      <Banner />
      <Featured />
      <Statement />
      <Testimonials />
    </div>
  );
};

export default Home;
