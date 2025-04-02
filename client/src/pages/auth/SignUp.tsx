import { postRequest } from '@services/requestService';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { handleError } from '@utils/helper';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      await postRequest('/auth/signup', formData);
      navigate('/auth/login');
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-full w-full flex-1 flex flex-col md:flex-row items-center justify-center px-5 md:px-20'>
      <div className='w-full md:w-1/2 flex flex-col items-center gap-4'>
        <h1 className='text-2xl md:text-5xl text-secondary font-bold'>
          Create Your <span className='text-accent'>Account</span>
        </h1>
        <p className='text-gray-600 text-center max-w-md'>
          Join our community to start shopping and managing your orders
        </p>
      </div>
      <form onSubmit={handleSubmit} className='w-full md:w-1/2 flex flex-col items-center gap-4 md:pt-20'>
        <div className='flex flex-col md:flex-row gap-4 w-full'>
          <fieldset className='fieldset w-full'>
            <legend className='fieldset-label'>First Name</legend>
            <input
              className='input w-full'
              type='text'
              name='firstName'
              id='firstName'
              onChange={handleChange}
              value={formData.firstName}
              required
              disabled={isLoading}
            />
          </fieldset>
          <fieldset className='fieldset w-full'>
            <legend className='fieldset-label'>Last Name</legend>
            <input
              className='input w-full'
              type='text'
              name='lastName'
              id='lastName'
              onChange={handleChange}
              value={formData.lastName}
              required
              disabled={isLoading}
            />
          </fieldset>
        </div>
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
          {isLoading ? <span className='loading loading-spinner loading-lg'></span> : 'Sign up'}
        </button>
        <p className='text-sm'>
          Already have an account?{' '}
          <Link className='text-secondary font-semibold' to='/auth/login'>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
