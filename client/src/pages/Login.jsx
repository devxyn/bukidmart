import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSuccess, setIsSucceess] = useState(false);
  const [message, setMessage] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [_, setCookies] = useCookies('access_token');

  const url = 'http://localhost:4000/api/auth/login';
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, { email, password });

      if (response.status === 200) {
        setCookies('access_token', response.data.token);
        window.localStorage.setItem('userID', response.data.userID);
        window.localStorage.setItem('isAdmin', response.data.isAdmin);

        setIsSucceess(true);
        setMessage(response.data.message);

        if (response.data.isAdmin) {
          setTimeout(() => {
            navigate('/auth/admin/products');
          }, 3000);
        } else {
          setTimeout(() => {
            navigate('/');
          }, 3000);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='min-h-[95vh] flex justify-center items-center '>
      <form
        onSubmit={handleLogin}
        className='w-[90%] md:w-[35%] md:border md:border-gray-300 md:p-10 md:rounded-lg flex flex-col items-center gap-4'>
        <h3 className='text-lg font-bold'>Returning customer</h3>
        <div className={`${isSuccess ? '' : 'hidden'} w-full bg-lime-200 px-4 py-2 rounded-md`}>
          {isSuccess && <p className='text-xs text-green-700'>{message}</p>}
        </div>
        <div className='w-full'>
          <input
            className='w-full border border-gray-300 px-4 py-2 rounded-lg'
            type='email'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            disabled={isSuccess}
          />
        </div>
        <div className='w-full'>
          <input
            className='w-full border border-gray-300 px-4 py-2 rounded-lg'
            type='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            disabled={isSuccess}
          />
        </div>
        <div className='w-full flex flex-row justify-between'>
          <div className='flex items-center'>
            <input className='mr-1' type='checkbox' />
            <p className='text-xs'>Keep me signed in</p>
          </div>
          <a className='text-xs text-lime-600' href='#'>
            Forgot password?
          </a>
        </div>
        <div className='w-full flex flex-col gap-4'>
          <button
            className='border bg-lime-600 p-4 rounded-lg text-sm font-bold text-white'
            type='submit'
            disabled={isSuccess}>
            Sign in
          </button>
          <Link
            className='border border-gray-300 p-4 rounded-lg text-sm font-bold text-gray-600 text-center'
            to='/signup'>
            Create a new account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
