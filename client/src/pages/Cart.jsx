import CartItem from '../components/CartItem';

const Cart = () => {
  return (
    <main className='p-5 pt-[120px] md:p-20 md:pt-[160px] flex flex-col gap-4'>
      <h2 className='text-4xl md:text-6xl font-semibold'>Your Cart</h2>
      <section>
        <CartItem />
        <CartItem />
        <CartItem />
      </section>
    </main>
  );
};

export default Cart;
