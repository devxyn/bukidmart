import { useDispatch, useSelector } from 'react-redux';
import { postRequest } from '@/services/requestService';
import { login } from '@/store/slices/userSlice';
import { AppDispatch, RootState } from '@/store/store';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const token = useSelector((state: RootState) => state.user.token);
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await postRequest('/auth/login', formData);
      dispatch(login(response));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  return (
    <div className='flex h-full w-full items-center justify-center'>
      <div className='w-1/2 flex flex-col items-center gap-4'>
        <h1 className='text-2xl font-bold'>Login form</h1>
        <form onSubmit={handleSubmit} className='w-full flex flex-col items-center gap-4'>
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
            />
          </fieldset>
          <button className='btn btn-outline btn-accent w-1/2' type='submit'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
