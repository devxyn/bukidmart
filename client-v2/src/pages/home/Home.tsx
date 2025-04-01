import { RootState } from '@/store/store';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const Home = () => {
  const token = useSelector((state: RootState) => state.user.token);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!token) {
  //     navigate('/auth/login');
  //   }
  // }, [token, navigate]);

  return <div>Home</div>;
};

export default Home;
