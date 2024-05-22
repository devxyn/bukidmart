import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import Cart from './pages/Cart';
import AllProducts from './pages/AllProducts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/products',
        element: <AllProducts />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
