import Navbar from '@/components/shared/Navbar';
import { Outlet } from 'react-router';

const HomeLayout = () => {
  return (
    <div className='w-full h-screen'>
      <Navbar />
      <div className='w-full h-[80vh]'>
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
