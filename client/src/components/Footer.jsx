const Footer = () => {
  return (
    <footer className='h-20 md:h-14 bg-primary flex flex-col md:flex-row justify-center items-center'>
      <p className='text-white text-md font-base md:mr-1'>
        Developed by{' '}
        <a className='font-bold' href='https://github.com/devxyn/' target='_blank'>
          devxyn
        </a>
        {''}
      </p>
      <p className='text-white text-md font-base'> &copy; 2024 BukidMart. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
