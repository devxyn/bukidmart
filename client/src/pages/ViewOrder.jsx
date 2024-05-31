import { useLoaderData } from 'react-router-dom';

const ViewOrder = () => {
  const order = useLoaderData();
  console.log(order);
  return (
    <div className='w-full px-20 my-40 h-screen'>
      <h2 className='text-4xl font-semibold mb-10'>Order Details</h2>
      <div className='w-full flex flex-row gap-2'>
        <div className='w-full'>
          <h3 className='text-3xl font-semibold mb-4'>Shipping Address</h3>
          <p className='text-xl font-semibold'>
            Full name: <span className='font-normal tracking-wide ml-1'>{order.address?.fullName}</span>
          </p>
          <p className='text-xl font-semibold'>
            Address: <span className='font-normal tracking-wide ml-1'>{order.address?.address}</span>
          </p>
          {order.address?.unit && (
            <p className='text-xl font-semibold'>
              Unit: <span className='font-normal tracking-wide ml-1'>{order.address?.unit}</span>
            </p>
          )}
          <p className='text-xl font-semibold'>
            City: <span className='font-normal tracking-wide ml-1'>{order.address?.city}</span>
          </p>
          <p className='text-xl font-semibold'>
            State: <span className='font-normal tracking-wide ml-1'>{order.address?.state}</span>
          </p>
          <p className='text-xl font-semibold'>
            Zip code: <span className='font-normal tracking-wide ml-1'>{order.address?.zip}</span>
          </p>
          <p className='text-xl font-semibold'>
            Phone: <span className='font-normal tracking-wide ml-1'>{order.address?.phone}</span>
          </p>
        </div>
        <div className='w-full'>
          <h3 className='text-3xl font-semibold mb-4'>Products</h3>
          <div className='flex flex-col gap-4 mb-4'>
            {order.products.map((item) => (
              <div key={item._id} className='flex flex-row items-center gap-4'>
                <img src={item?.imageUrl} alt={item.name} className='w-28' />
                <div>
                  <p className='text-xl font-semibold'>{item.name}</p>
                  <p className='text-base text-placeholder'>{item.quantity} kg(s)</p>
                </div>
              </div>
            ))}
          </div>
          <h2 className='text-3xl font-semibold'>
            Total: <span className='ml-2 text-2xl font-normal'>₱{order.total.toLocaleString('en-US')}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ViewOrder;
