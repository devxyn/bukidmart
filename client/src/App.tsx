import { Route, Routes } from 'react-router';
import HomeLayout from '@layout/HomeLayout';
import AuthLayout from '@layout/AuthLayout';
import Home from '@pages/home/Home';
import Login from '@pages/auth/Login';
import SignUp from '@pages/auth/SignUp';
import ComingSoon from '@pages/shared/ComingSoon';
import NotFound from '@pages/shared/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path='/auth' element={<AuthLayout />}>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
        </Route>
        <Route path='/about' element={<ComingSoon />} />
        <Route path='/shop' element={<ComingSoon />} />
        <Route path='/contact' element={<ComingSoon />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
