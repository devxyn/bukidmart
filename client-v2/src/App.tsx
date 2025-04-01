import Login from '@/pages/auth/Login';
import { Route, Routes } from 'react-router';
import AuthLayout from '@layout/AuthLayout';
import HomeLayout from '@layout/HomeLayout';
import Home from '@pages/home/Home';
import SignUp from '@pages/auth/SignUp';
import NotFound from '@pages/shared/NotFound';
import ComingSoon from '@pages/shared/ComingSoon';

function App() {
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
}

export default App;
