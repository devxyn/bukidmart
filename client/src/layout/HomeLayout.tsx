import Footer from '@components/shared/Footer';
import Navbar from '@components/shared/Navbar';
import { Outlet } from 'react-router';

const HomeLayout = () => {
  return (
    <div className='w-full h-screen'>
      <Navbar />
      <div className='flex flex-col w-full'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
