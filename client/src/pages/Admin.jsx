import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Admin = () => {
  // eslint-disable-next-line no-unused-vars
  const [_, setCookies] = useCookies(['access_token']);
  const navigate = useNavigate();

  const handleLogout = () => {
    setCookies('access_token', '');
    window.localStorage.clear();
    navigate('/login');
  };

  return (
    <div className='w-full flex'>
      <div className='w-[20%] h-screen flex flex-col fixed bg-primary py-40'>
        <Link to='/auth/admin/products' className='text-white text-2xl px-16 hover:bg-white hover:text-primary py-2'>
          Products
        </Link>
        <Link to='/auth/admin/orders' className='text-white text-2xl px-16 hover:bg-white hover:text-primary py-2'>
          Orders
        </Link>
        <Link onClick={handleLogout} className='text-white text-2xl px-16 hover:bg-white hover:text-primary py-2'>
          Logout
        </Link>
      </div>
      <div className='w-[80%] ml-[20%] h-screen'>
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
