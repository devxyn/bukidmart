const Footer = () => {
  return (
    <footer className='footer sm:footer-horizontal bg-primary text-white items-center p-4'>
      <p className='w-full flex justify-center'>
        Copyright © {new Date().getFullYear()} | <span className='font-semibold'>BukidMart</span> - All right reserved
      </p>
    </footer>
  );
};

export default Footer;
