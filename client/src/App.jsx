import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import Cart from './pages/Cart';
import AllProducts from './pages/AllProducts';
import fetchAllProducts from './loaders/fetchAllProducts';
import Product from './pages/Product';
import fetchOneProduct from './loaders/fetchOneProduct';
import CheckOut from './pages/CheckOut';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Main />,
        loader: fetchAllProducts,
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
        loader: fetchAllProducts,
      },
      {
        path: '/products/:id',
        element: <Product />,
        loader: fetchOneProduct,
      },
      {
        path: '/checkout',
        element: <CheckOut />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
