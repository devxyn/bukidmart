import { Link, useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

/* eslint-disable react/no-unescaped-entities */
const ProductTable = () => {
  const products = useLoaderData();
  const [tableProducts, setTableProducts] = useState(products);

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/products/delete/${id}`);
      setTableProducts(tableProducts.filter((product) => product._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const cutString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + '...';
    }
    return str;
  };

  return (
    <div className='overflow-x-auto sm:rounded-lg w-full px-20 my-40 h-screen'>
      <div className='w-full flex flex-col md:flex-row md:justify-between mb-5'>
        <h2 className='text-4xl font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800'>
          Products
        </h2>
        <Link to='/auth/admin/products/add' className='bg-accent text-white rounded-btn py-3 px-6 font-semibold'>
          Add new product
        </Link>
      </div>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Product name
            </th>
            <th scope='col' className='px-6 py-3'>
              Desription
            </th>
            <th scope='col' className='px-6 py-3'>
              Price
            </th>
            <th scope='col' className='px-6 py-3'>
              Stocks
            </th>
            <th scope='col' className='px-6 py-3'>
              Category
            </th>
            <th scope='col' className='px-6 py-3'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {tableProducts.map((item) => (
            <tr
              key={item?._id}
              className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
              <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                {item?.name}
              </th>
              <td className='px-6 py-4'>{cutString(item?.description, 60)}</td>
              <td className='px-6 py-4'>₱{item?.price.toLocaleString('en-US')}</td>
              <td className='px-6 py-4'>{item?.stocks.toLocaleString('en-US')}</td>
              <td className='px-6 py-4 font-semibold'>{item?.category.toUpperCase()}</td>
              <td className='flex items-center px-6 py-4'>
                <Link
                  to={`/auth/admin/products/${item?._id}/edit`}
                  className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                  Edit
                </Link>
                <button
                  onClick={() => handleDeleteProduct(item?._id)}
                  className='font-medium text-red-600 dark:text-red-500 hover:underline ms-3'>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
