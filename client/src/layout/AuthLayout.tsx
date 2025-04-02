import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className='flex flex-col flex-1'>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
