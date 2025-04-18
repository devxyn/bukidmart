import { useDispatch, useSelector } from 'react-redux';
import { postRequest } from '@/services/requestService';
import { login } from '@/store/slices/userSlice';
import { AppDispatch, RootState } from '@/store/store';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { handleError } from '@utils/helper';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const token = useSelector((state: RootState) => state.user.token);
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const response = await postRequest('/auth/login', formData);
      dispatch(login(response));
      navigate('/');
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  return (
    <div className='min-h-full w-full flex-1 flex flex-col md:flex-row items-center justify-center px-5 md:px-20'>
      <div className='w-full md:w-1/2 flex flex-col items-center gap-4'>
        <h1 className='text-2xl md:text-5xl text-secondary font-bold'>
          Welcome <span className='text-accent'>Back</span>
        </h1>
        <p className='text-gray-600 text-center max-w-md'>
          Sign in to your account to continue shopping and manage your orders
        </p>
      </div>
      <form onSubmit={handleSubmit} className='w-full md:w-1/2 flex flex-col items-center gap-4 md:pt-20'>
        <fieldset className='fieldset w-full'>
          <legend className='fieldset-label'>Email</legend>
          <input
            className='input w-full'
            type='email'
            name='email'
            id='email'
            onChange={handleChange}
            value={formData.email}
            required
            disabled={isLoading}
          />
        </fieldset>
        <fieldset className='fieldset w-full'>
          <legend className='fieldset-label'>Password</legend>
          <input
            className='input w-full'
            type='password'
            name='password'
            id='password'
            onChange={handleChange}
            value={formData.password}
            required
            disabled={isLoading}
          />
        </fieldset>
        <button
          className='btn btn-outline btn-accent w-full md:w-1/2 hover:text-white'
          type='submit'
          disabled={isLoading}>
          {isLoading ? <span className='loading loading-spinner loading-lg'></span> : 'Login'}
        </button>
        <p className='text-sm'>
          Don't have an account?{' '}
          <Link className='text-secondary font-semibold' to='/auth/signup'>
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
