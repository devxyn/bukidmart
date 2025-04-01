import Login from '@/pages/auth/Login';
import { Route, Routes } from 'react-router';
import AuthLayout from '@layout/AuthLayout';
import HomeLayout from '@layout/HomeLayout';
import Home from '@pages/home/Home';
import SignUp from '@/pages/auth/SignUp';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path='/auth' element={<AuthLayout />}>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
