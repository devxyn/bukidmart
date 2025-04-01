import { Link, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { RootState } from '@/store/store';
import { logout } from '@/store/slices/userSlice';

const Navbar = () => {
  const token = useSelector((state: RootState) => state.user.token);
  const navigate = useNavigate();
  const dispath = useDispatch();

  const handleLogout = () => {
    dispath(logout());
    navigate('/auth/login');
  };

  return (
    <div className='navbar bg-primary shadow-sm'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-primary lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 text-white'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
            </svg>
          </div>
          <ul tabIndex={0} className='menu menu-md dropdown-content bg-[#f3fcf7] rounded-box z-1 mt-3 w-52 p-2 shadow'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            <li>
              <Link to='/shop'>Products</Link>
            </li>
            <li>
              <Link to='/contact'>Contact Us</Link>
            </li>
          </ul>
        </div>
        <Link to='/' className='text-2xl font-bold text-white'>
          BukidMart
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex text-white uppercase font-semibold'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
          <li>
            <Link to='/shop'>Products</Link>
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className='navbar-end flex items-center'>
        <Link to={token ? '/cart' : '/auth/login'}>
          <HiOutlineShoppingBag className='text-white mr-2' size={32} />
        </Link>
        <button
          onClick={
            token
              ? handleLogout
              : () => {
                  navigate('/auth/login');
                }
          }
          className='btn btn-accent text-white w-[6.3rem] shadow-none'>
          {token ? 'Logout' : 'Shop Now'}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
