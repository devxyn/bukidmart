import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSuccess, setIsSuceess] = useState(false);
  const [message, setMessage] = useState('');

  const url = 'http://localhost:4000/api/auth/signup';
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(url, { email, password });
      if (result.status === 201) {
        setIsSuceess(true);
        setMessage(result.data.message);

        setTimeout(() => {
          navigate('/login');
        }, 2500);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className='min-h-[95vh] flex justify-center items-center '>
      <form
        onSubmit={handleSignup}
        className='w-[90%] md:w-[35%] md:border md:border-gray-300 md:p-10 md:rounded-lg flex flex-col items-center gap-4'>
        <h3 className='text-lg font-bold'>Create an account</h3>
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
        <div className='w-full flex flex-col gap-4'>
          <button
            className='border bg-lime-600 p-4 rounded-lg text-sm font-bold text-white'
            type='submit'
            disabled={isSuccess}>
            Create account
          </button>
          <p className='text-sm'>
            Already have an account?{' '}
            <Link className='text-lime-600' to='/login'>
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
