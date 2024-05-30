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
import Admin from './pages/Admin';
import ProductTable from './components/ProductTable';
import EditProduct from './components/EditProduct';
import AddProduct from './components/AddProduct';
import OrderTable from './components/OrderTable';
import fetchAllOrders from './loaders/fetchAllOrders';

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
  {
    path: '/auth/admin',
    element: <Admin />,
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
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
