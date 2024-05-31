import { useLoaderData } from 'react-router-dom';

const ViewOrder = () => {
  const order = useLoaderData();
  console.log(order);
  return (
    <div className='w-full px-20 my-40 h-screen'>
      <h2 className='text-4xl font-semibold mb-5'>Order Details</h2>
      <div className=''>Shipping Address</div>
      <p>Full name: {order.address?.fullName}</p>
      <p>Address: {order.address?.address}</p>
      {order.address?.unit && <p>Unit: {order.address?.unit}</p>}
      <p>City: {order.address?.city}</p>
      <p>State: {order.address?.state}</p>
      <p>Zip code: {order.address?.zip}</p>
      <p>Phone: {order.address?.phone}</p>
    </div>
  );
};

export default ViewOrder;
