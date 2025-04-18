import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className='flex-1 flex flex-col items-center justify-center bg-gray-50'>
      <div className='text-center'>
        <h1 className='text-9xl font-bold text-primary'>404</h1>
        <h2 className='text-2xl font-semibold text-gray-700 mt-4'>Page Not Found</h2>
        <p className='text-gray-500 mt-2'>The page you're looking for doesn't exist or has been moved.</p>
        <Link to='/' className='btn btn-accent text-white mt-6 hover:bg-accent/90'>
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
