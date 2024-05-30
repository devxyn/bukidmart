import { Link, useLoaderData } from 'react-router-dom';

const OrderTable = () => {
  const orders = useLoaderData();

  return (
    <div className='relative overflow-x-auto sm:rounded-lg w-full px-20 my-40 h-screen'>
      <h2 className='mb-5 text-4xl font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800'>
        Orders
      </h2>

      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Order ID
            </th>
            <th scope='col' className='px-6 py-3'>
              Items
            </th>
            <th scope='col' className='px-6 py-3'>
              Total
            </th>
            <th scope='col' className='px-6 py-3'>
              Status
            </th>
            <th scope='col' className='px-6 py-3'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order._id}
              className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
              <td scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                {order._id}
              </td>
              <td className='px-6 py-4 text-xs'>
                <ul className='list-disc'>
                  {order.products.map((item) => (
                    <li key={item._id}>{item.name}</li>
                  ))}
                </ul>
              </td>
              <td className='px-6 py-4'>₱{order.total.toLocaleString('en-US')}</td>
              <td
                className={`px-6 py-4 font-semibold ${
                  order.status !== 'Fulfilled' ? 'text-accent' : 'text-secondary'
                }`}>
                {order.status}
              </td>
              <td className='flex items-center px-6 py-4'>
                <Link className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
