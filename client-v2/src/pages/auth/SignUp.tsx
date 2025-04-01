import { postRequest } from '@/services/requestService';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { handleError } from '@/utils/helper';

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
    <div className='flex h-[calc(100vh-7.3rem)] w-full items-center justify-center'>
      <div className='w-1/2 flex flex-col items-center gap-4'>
        <h1 className='text-2xl font-bold'>Sign Up Form</h1>
        <form onSubmit={handleSubmit} className='w-full flex flex-col items-center gap-4'>
          <div className='flex gap-4 w-full'>
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
          <button className='btn btn-outline btn-accent w-1/2 hover:text-white' type='submit' disabled={isLoading}>
            {isLoading ? <span className='loading loading-spinner loading-lg'></span> : 'Sign up'}
          </button>
        </form>
        <p className='text-sm'>
          Already have an account?{' '}
          <Link className='text-secondary font-semibold' to='/auth/login'>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
