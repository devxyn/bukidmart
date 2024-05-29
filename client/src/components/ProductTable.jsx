import { useLoaderData } from 'react-router-dom';

/* eslint-disable react/no-unescaped-entities */
const ProductTable = () => {
  const products = useLoaderData();

  console.log(products);

  return (
    <div className='relative overflow-x-auto sm:rounded-lg py-10'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <caption className='p-5 mb-5 text-4xl font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800'>
          Our products
        </caption>
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
              Category
            </th>
            <th scope='col' className='px-6 py-3'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr
              key={item?._id}
              className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
              <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                {item?.name}
              </th>
              <td className='px-6 py-4'>{item?.description}</td>
              <td className='px-6 py-4'>${item?.price}</td>
              <td className='px-6 py-4'>{item?.category}</td>
              <td className='flex items-center px-6 py-4'>
                <a href='#' className='font-medium text-red-600 dark:text-red-500 hover:underline ms-3'>
                  Remove
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
