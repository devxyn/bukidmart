import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className='w-full h-[80vh] flex items-center justify-center'>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
