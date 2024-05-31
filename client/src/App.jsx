/* eslint-disable react-hooks/exhaustive-deps */
import { RouterProvider, useNavigate } from 'react-router-dom';
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
import Admin from './pages/Admin';
import fetchAllOrders from './loaders/fetchAllOrders';
import ProductTable from './pages/ProductTable';
import EditProduct from './pages/EditProduct';
import AddProduct from './pages/AddProduct';
import OrderTable from './pages/OrderTable';
import ViewOrder from './pages/ViewOrder';
import fetchOrder from './loaders/fetchOrder';
import useAuth from './hooks/useAuth';
import { useEffect } from 'react';

const ProtectedRoute = ({ element }) => {
  const user = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.userID) {
      navigate('/login');
    }
  }, []);

  return element;
};

const LoggedInRoute = ({ element }) => {
  const user = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.userID) {
      navigate('/');
    }
  }, []);

  return element;
};

const AdminRoute = ({ element }) => {
  const user = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.userID || !user.isAdmin) {
      navigate('/');
    }
  }, []);

  return element;
};

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
        element: <LoggedInRoute element={<Login />} />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/cart',
        element: <ProtectedRoute element={<Cart />} />,
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
        element: <ProtectedRoute element={<CheckOut />} />,
      },
    ],
  },
  {
    path: '/auth/admin',
    element: <AdminRoute element={<Admin />} />,
    children: [
      {
        path: '/auth/admin/products',
        element: <ProductTable />,
        loader: fetchAllProducts,
      },
      {
        path: '/auth/admin/products/:id/edit',
        element: <EditProduct />,
        loader: fetchOneProduct,
      },
      {
        path: '/auth/admin/products/add',
        element: <AddProduct />,
      },
      {
        path: '/auth/admin/orders',
        element: <OrderTable />,
        loader: fetchAllOrders,
      },
      {
        path: '/auth/admin/orders/:id',
        element: <ViewOrder />,
        loader: fetchOrder,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
