import { Link } from 'react-router';

const ComingSoon = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-50'>
      <div className='text-center'>
        <h1 className='text-6xl font-bold text-primary mb-4'>Coming Soon</h1>
        <p className='text-xl text-gray-600 mb-8'>We're working hard to bring you something amazing. Stay tuned!</p>
        <div className='animate-pulse text-4xl mb-8'>🚀</div>
        <Link to='/' className='btn btn-accent text-white hover:bg-accent/90'>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
