import Banner from '@/components/home/Banner';
import Featured from '@/components/home/Featured';
import Statement from '@/components/home/Statement';
import Testimonials from '@/components/home/Testimonials';
// import { RootState } from '@/store/store';
// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router';

const Home = () => {
  // const token = useSelector((state: RootState) => state.user.token);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!token) {
  //     navigate('/auth/login');
  //   }
  // }, [token, navigate]);

  return (
    <div>
      <Banner />
      <Featured />
      <Statement />
      <Testimonials />
    </div>
  );
};

export default Home;
