import Footer from '@components/shared/Footer';
import Navbar from '@components/shared/Navbar';
import { Outlet } from 'react-router';

const HomeLayout = () => {
  return (
    <div className='w-full min-h-screen flex flex-col'>
      <Navbar />
      <div className='flex flex-col flex-1'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
