import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <div className='min-h-screen flex justify-center md:items-center '>
      <form
        onSubmit={handleSignup}
        className='w-[90%] md:w-[35%] md:border md:border-gray-300 md:p-10 md:rounded-lg flex flex-col items-center gap-4'>
        <h3 className='text-lg font-bold'>Create an account</h3>
        <div className='w-full'>
          <p className='hidden'>Invalid email or password!</p>
        </div>
        <div className='w-full'>
          <input
            className='w-full border border-gray-300 px-4 py-2 rounded-lg'
            type='email'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
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
          />
        </div>
        <div className='w-full flex flex-col gap-4'>
          <button className='border bg-lime-600 p-4 rounded-lg text-sm font-bold text-white' type='submit'>
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
